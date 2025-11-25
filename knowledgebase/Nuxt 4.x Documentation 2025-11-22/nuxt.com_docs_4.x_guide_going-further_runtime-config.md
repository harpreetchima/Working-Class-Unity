---
url: "https://nuxt.com/docs/4.x/guide/going-further/runtime-config"
title: "Runtime Config · Nuxt Advanced v4"
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
3. [Going Further](https://nuxt.com/docs/4.x/guide/going-further)

# Runtime Config

Copy page

Nuxt provides a runtime config API to expose configuration and secrets within your application.

## [Exposing](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#exposing)

To expose config and environment variables to the rest of your app, you will need to define runtime configuration in your [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file, using the [`runtimeConfig`](https://nuxt.com/docs/4.x/api/nuxt-config#runtimeconfig) option.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api',
    },
  },
})
```

When adding `apiBase` to the `runtimeConfig.public`, Nuxt adds it to each page payload. We can universally access `apiBase` in both server and browser.

```ts
const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.apiSecret)
console.log(runtimeConfig.public.apiBase)
```

Public runtime config is accessible in Vue templates with `$config.public`.

### [Serialization](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#serialization)

Your runtime config will be serialized before being passed to Nitro. This means that anything that cannot be serialized and then deserialized (such as functions, Sets, Maps, and so on), should not be set in your `nuxt.config`.

Instead of passing non-serializable objects or functions into your application from your `nuxt.config`, you can place this code in a Nuxt or Nitro plugin or middleware.

### [Environment Variables](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#environment-variables)

The most common way to provide configuration is by using [Environment Variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa).

The Nuxt CLI has built-in support for reading your `.env` file in development, build and generate. But when you run your built server, **your `.env` file will not be read**.

[Docs > 4 X > Directory Structure > Env](https://nuxt.com/docs/4.x/directory-structure/env) Read more in Docs > 4 X > Directory Structure > Env.

Runtime config values are **automatically replaced by matching environment variables at runtime**.

There are two key requirements:

1. Your desired variables must be defined in your `nuxt.config`. This ensures that arbitrary environment variables are not exposed to your application code.
2. Only a specially-named environment variable can override a runtime config property. That is, an uppercase environment variable starting with `NUXT_` which uses `_` to separate keys and case changes.

Setting the default of `runtimeConfig` values to _differently named environment variables_ (for example setting `myVar` to `process.env.OTHER_VARIABLE`) will only work during build-time and will break on runtime.
It is advised to use environment variables that match the structure of your `runtimeConfig` object.

Watch a video from Alexander Lichter showcasing the top mistake developers make using runtimeConfig.

#### [Example](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#example)

.env

```ini
NUXT_API_SECRET=api_secret_token
NUXT_PUBLIC_API_BASE=https://nuxtjs.org
```

nuxt.config.ts

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
})
```

## [Reading](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#reading)

### [Vue App](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#vue-app)

Within the Vue part of your Nuxt app, you will need to call [`useRuntimeConfig()`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) to access the runtime config.

The behavior is different between the client-side and server-side:

- On client-side, only keys in `runtimeConfig.public` and `runtimeConfig.app` (which is used by Nuxt internally) are available, and the object is both writable and reactive.
- On server-side, the entire runtime config is available, but it is read-only to avoid context sharing.

app/pages/index.vue

```vue
<script setup lang="ts">
const config = useRuntimeConfig()

console.log('Runtime config:', config)
if (import.meta.server) {
  console.log('API secret:', config.apiSecret)
}
</script>

<template>
  <div>
    <div>Check developer console!</div>
  </div>
</template>
```

**Security note:** Be careful not to expose runtime config keys to the client-side by either rendering them or passing them to `useState`.

### [Plugins](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#plugins)

If you want to use the runtime config within any (custom) plugin, you can use [`useRuntimeConfig()`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) inside of your `defineNuxtPlugin` function.

app/plugins/config.ts

```ts
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  console.log('API base URL:', config.public.apiBase)
})
```

### [Server Routes](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#server-routes)

You can access runtime config within the server routes as well using `useRuntimeConfig`.

server/api/test.ts

```ts
export default defineEventHandler(async (event) => {
  const { apiSecret } = useRuntimeConfig(event)
  const result = await $fetch('https://my.api.com/test', {
    headers: {
      Authorization: `Bearer ${apiSecret}`,
    },
  })
  return result
})
```

Giving the `event` as argument to `useRuntimeConfig` is optional, but it is recommended to pass it to get the runtime config overwritten by [environment variables](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#environment-variables) at runtime for server routes.

## [Typing Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config\#typing-runtime-config)

Nuxt tries to automatically generate a typescript interface from provided runtime config using [unjs/untyped](https://github.com/unjs/untyped).

But it is also possible to type your runtime config manually:

index.d.ts

```ts
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    apiBase: string
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
```

`nuxt/schema` is provided as a convenience for end-users to access the version of the schema used by Nuxt in their project. Module authors should instead augment `@nuxt/schema`.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/10.runtime-config.md)

[Features\\
\\
Enable or disable optional Nuxt features to unlock new possibilities.](https://nuxt.com/docs/4.x/guide/going-further/features) [Nightly Release Channel\\
\\
The nightly release channel allows using Nuxt built directly from the latest commits to the repository.](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel)

On this page

On this page

- [Exposing](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#exposing)
  - [Serialization](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#serialization)
  - [Environment Variables](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#environment-variables)
- [Reading](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#reading)
  - [Vue App](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#vue-app)
  - [Plugins](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#plugins)
  - [Server Routes](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#server-routes)
- [Typing Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#typing-runtime-config)

Community

- [Become a Sponsor](https://go.nuxt.com/sponsor)
- [Master Nuxt](https://masteringnuxt.com/nuxt3)
- [Nuxt Certification](https://certification.nuxt.com/)

[Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on Bluesky](https://go.nuxt.com/bluesky) [Nuxt on X](https://go.nuxt.com/x) [Nuxt on GitHub](https://go.nuxt.com/github)

Black Friday Week

Get 50% off the complete Mastering Nuxt course.

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