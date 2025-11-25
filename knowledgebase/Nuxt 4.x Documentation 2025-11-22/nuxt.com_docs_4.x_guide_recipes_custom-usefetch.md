---
url: "https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch"
title: "Custom useFetch in Nuxt · Recipes v4"
---

[Back to home](https://nuxt.com/) v4.2.1

- [Docs](https://nuxt.com/docs/4.x)
- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Resources](https://nuxt.com/showcase)
- [Enterprise](https://nuxt.com/enterprise)
- [Blog](https://nuxt.com/blog)

Search…
`Ctrl`  `k`
[58.9K](https://go.nuxt.com/github)

- [Get Started](https://nuxt.com/docs/4.x/getting-started/installation)
- [Structure](https://nuxt.com/docs/4.x/directory-structure)
- [Guide](https://nuxt.com/docs/4.x/guide)
- [API](https://nuxt.com/docs/4.x/api)
- [Deploy](https://nuxt.com/deploy)
- [Examples](https://nuxt.com/docs/4.x/examples)
- [Community](https://nuxt.com/docs/4.x/community)

- Key Concepts


- [Rendering Modes](https://nuxt.com/docs/4.x/guide/concepts/rendering)
- [Nuxt Lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle)
- [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)
- [Server Engine](https://nuxt.com/docs/4.x/guide/concepts/server-engine)
- [Modules](https://nuxt.com/docs/4.x/guide/concepts/modules)
- [TypeScript](https://nuxt.com/docs/4.x/guide/concepts/typescript)
- [Code Style](https://nuxt.com/docs/4.x/guide/concepts/code-style)

- Best Practices


- [Nuxt and hydration](https://nuxt.com/docs/4.x/guide/best-practices/hydration)
- [Nuxt Performance](https://nuxt.com/docs/4.x/guide/best-practices/performance)
- [Nuxt Plugins](https://nuxt.com/docs/4.x/guide/best-practices/plugins)

- Working with AI


- [MCP Server](https://nuxt.com/docs/4.x/guide/ai/mcp)
- [LLMs.txt](https://nuxt.com/docs/4.x/guide/ai/llms-txt)

- Recipes


- [Custom Routing](https://nuxt.com/docs/4.x/guide/recipes/custom-routing)
- [Vite Plugins](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin)
- [Custom useFetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)
- [Sessions and Authentication](https://nuxt.com/docs/4.x/guide/recipes/sessions-and-authentication)

- Going Further


- [Custom Events](https://nuxt.com/docs/4.x/guide/going-further/events)
- [Experimental Features](https://nuxt.com/docs/4.x/guide/going-further/experimental-features)
- [Features](https://nuxt.com/docs/4.x/guide/going-further/features)
- [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)
- [Nightly Release Channel](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel)
- [Lifecycle Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks)
- [Module Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules)
- [Nuxt Kit](https://nuxt.com/docs/4.x/guide/going-further/kit)
- [NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app)
- [Authoring Nuxt Layers](https://nuxt.com/docs/4.x/guide/going-further/layers)
- [Debugging](https://nuxt.com/docs/4.x/guide/going-further/debugging)

1. [Guide](https://nuxt.com/docs/4.x/guide)
3. [Recipes](https://nuxt.com/docs/4.x/guide/recipes)

# Custom useFetch in Nuxt

Copy page

How to create a custom fetcher for calling your external API in Nuxt.

When working with Nuxt, you might be making the frontend and fetching an external API, and you might want to set some default options for fetching from your API.

The [`$fetch`](https://nuxt.com/docs/4.x/api/utils/dollarfetch) utility function (used by the [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) composable) is intentionally not globally configurable. This is important so that fetching behavior throughout your application remains consistent, and other integrations (like modules) can rely on the behavior of core utilities like `$fetch`.

However, Nuxt provides a way to create a custom fetcher for your API (or multiple fetchers if you have multiple APIs to call).

## [Custom `$fetch`](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch\#custom-fetch)

Let's create a custom `$fetch` instance with a [Nuxt plugin](https://nuxt.com/docs/4.x/directory-structure/app/plugins).

`$fetch` is a configured instance of [ofetch](https://github.com/unjs/ofetch) which supports adding the base URL of your Nuxt server as well as direct function calls during SSR (avoiding HTTP roundtrips).

Let's pretend here that:

- The main API is [https://api.nuxt.com](https://api.nuxt.com/)
- We are storing the JWT token in a session with [nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils)
- If the API responds with a `401` status code, we redirect the user to the `/login` page

app/plugins/api.ts

```ts
export default defineNuxtPlugin((nuxtApp) => {
  const { session } = useUserSession()

  const api = $fetch.create({
    baseURL: 'https://api.nuxt.com',
    onRequest ({ request, options, error }) {
      if (session.value?.token) {
        // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
        options.headers.set('Authorization', `Bearer ${session.value?.token}`)
      }
    },
    async onResponseError ({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
```

With this Nuxt plugin, `$api` is exposed from `useNuxtApp()` to make API calls directly from the Vue components:

app/app.vue

```vue
<script setup>
const { $api } = useNuxtApp()
const { data: modules } = await useAsyncData('modules', () => $api('/modules'))
</script>
```

Wrapping with [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) **avoid double data fetching when doing server-side rendering** (server & client on hydration).

## [Custom `useFetch`/`useAsyncData`](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch\#custom-usefetchuseasyncdata)

Now that `$api` has the logic we want, let's create a `useAPI` composable to replace the usage of `useAsyncData` \+ `$api`:

app/composables/useAPI.ts

```ts
import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T> (
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}
```

Let's use the new composable and have a nice and clean component:

app/app.vue

```vue
<script setup>
const { data: modules } = await useAPI('/modules')
</script>
```

If you want to customize the type of any error returned, you can also do so:

```ts
import type { FetchError } from 'ofetch'
import type { UseFetchOptions } from 'nuxt/app'

interface CustomError {
  message: string
  statusCode: number
}

export function useAPI<T> (
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch<T, FetchError<CustomError>>(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
```

This example demonstrates how to use a custom `useFetch`, but the same structure is identical for a custom `useAsyncData`.

Read and edit a live example in [Docs > 4 X > Examples > Advanced > Use Custom Fetch Composable](https://nuxt.com/docs/4.x/examples/advanced/use-custom-fetch-composable).

Watch a video about custom $fetch and Repository Pattern in Nuxt

We are currently discussing to find a cleaner way to let you create a custom fetcher, see [https://github.com/nuxt/nuxt/issues/14736](https://github.com/nuxt/nuxt/issues/14736).

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/4.recipes/3.custom-usefetch.md)

[Vite Plugins\\
\\
Learn how to integrate Vite plugins into your Nuxt project.](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin) [Sessions and Authentication\\
\\
Authentication is an extremely common requirement in web apps. This recipe will show you how to implement basic user registration and authentication in your Nuxt app.](https://nuxt.com/docs/4.x/guide/recipes/sessions-and-authentication)

On this page

On this page

- [Custom $fetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#custom-fetch)
- [Custom useFetch/useAsyncData](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#custom-usefetchuseasyncdata)

Community

- [Become a Sponsor](https://go.nuxt.com/sponsor)
- [Master Nuxt](https://masteringnuxt.com/nuxt3)
- [Nuxt Certification](https://certification.nuxt.com/)

[Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on Bluesky](https://go.nuxt.com/bluesky) [Nuxt on X](https://go.nuxt.com/x) [Nuxt on GitHub](https://go.nuxt.com/github)

Black Friday Week

Get 60% off and bonuses on all Official Nuxt Certifications.

MenuOn this page

### Community

- [Nuxters](https://nuxters.nuxt.com/)
- [Team](https://nuxt.com/team)
- [Design Kit](https://nuxt.com/design-kit)

### Explore

- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Showcase](https://nuxt.com/showcase)

### Enterprise

- [Support](https://nuxt.com/enterprise/support)
- [Agencies](https://nuxt.com/enterprise/agencies)
- [Sponsors](https://nuxt.com/enterprise/sponsors)

Subscribe to our newsletter

Stay updated on new releases and features, guides, and community updates.

Subscribe

[Nuxt on X](https://go.nuxt.com/x) [Nuxt on BlueSky](https://go.nuxt.com/bluesky) [Nuxt on LinkedIn](https://go.nuxt.com/linkedin) [Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on GitHub](https://go.nuxt.com/github)

Copyright © 2016-2025 Nuxt - [MIT License](https://go.nuxt.com/license)