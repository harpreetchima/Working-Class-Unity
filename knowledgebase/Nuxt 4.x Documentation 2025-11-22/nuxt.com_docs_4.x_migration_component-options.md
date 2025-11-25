---
url: "https://nuxt.com/docs/4.x/migration/component-options"
title: "Migrate to Nuxt 3: Component Options v4"
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

- [Overview](https://nuxt.com/docs/4.x/migration/overview)
- [Build Tooling](https://nuxt.com/docs/4.x/migration/bundling)
- [Server](https://nuxt.com/docs/4.x/migration/server)
- [Configuration](https://nuxt.com/docs/4.x/migration/configuration)
- [Modules](https://nuxt.com/docs/4.x/migration/module-authors)
- [Auto Imports](https://nuxt.com/docs/4.x/migration/auto-imports)
- [Meta Tags](https://nuxt.com/docs/4.x/migration/meta)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/migration/plugins-and-middleware)
- [Pages and Layouts](https://nuxt.com/docs/4.x/migration/pages-and-layouts)
- [Component Options](https://nuxt.com/docs/4.x/migration/component-options)
- [Runtime Config](https://nuxt.com/docs/4.x/migration/runtime-config)

1. [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
3. [Migrate to Nuxt 3](https://nuxt.com/docs/4.x/migration)

# Component Options

Copy page

Learn how to migrate from Nuxt 2 components options to Nuxt 3 composables.

## [`asyncData` and `fetch`](https://nuxt.com/docs/4.x/migration/component-options\#asyncdata-and-fetch)

Nuxt 3 provides new options for [fetching data from an API](https://nuxt.com/docs/4.x/getting-started/data-fetching).

### [Isomorphic Fetch](https://nuxt.com/docs/4.x/migration/component-options\#isomorphic-fetch)

In Nuxt 2 you might use `@nuxtjs/axios` or `@nuxt/http` to fetch your data - or just the polyfilled global `fetch`.

In Nuxt 3 you can use a globally available `fetch` method that has the same API as [the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or [`$fetch`](https://nuxt.com/docs/4.x/api/utils/dollarfetch) method which is using [unjs/ofetch](https://github.com/unjs/ofetch). It has a number of benefits, including:

1. It will handle 'smartly' making [direct API calls](https://nuxt.com/docs/4.x/guide/concepts/server-engine#direct-api-calls) if it's running on the server, or making a client-side call to your API if it's running on the client. (It can also handle calling third-party APIs.)
2. Plus, it comes with convenience features including automatically parsing responses and stringifying data.

You can read more [about direct API calls](https://nuxt.com/docs/4.x/guide/concepts/server-engine#direct-api-calls) or [fetching data](https://nuxt.com/docs/4.x/getting-started/data-fetching).

### [Composables](https://nuxt.com/docs/4.x/migration/component-options\#composables)

Nuxt 3 provides new composables for fetching data: [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) and `useFetch`. They each have 'lazy' variants (`useLazyAsyncData` and `useLazyFetch`), which do not block client-side navigation.

In Nuxt 2, you'd fetch your data in your component using a syntax similar to:

```ts
export default {
  async asyncData ({ params, $http }) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  },
  // or alternatively
  fetch () {
    this.post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  },
}
```

Within your methods and templates, you could use the `post` variable similar how you'd use any other piece of data provided by your component.

With Nuxt 3, you can perform this data fetching using composables in your `setup()` method or `<script setup>` tag:

```vue
<script setup lang="ts">
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
const { data: post, refresh } = await useAsyncData('post', () => $fetch(`https://api.nuxtjs.dev/posts/${params.id}`))
// Or instead - useFetch is a convenience wrapper around useAsyncData when you're just performing a simple fetch
const { data: post, refresh } = await useFetch(`https://api.nuxtjs.dev/posts/${params.id}`)
</script>
```

You can now use `post` inside of your Nuxt 3 template, or call `refresh` to update the data.

Despite the names, [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) is not a direct replacement of the `fetch()` hook. Rather, [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) replaces both hooks and is more customizable; it can do more than simply fetching data from an endpoint. [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) is a convenience wrapper around [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) for simply fetching data from an endpoint.

### [Migration](https://nuxt.com/docs/4.x/migration/component-options\#migration)

1. Replace the `asyncData` hook with [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) in your page/component.
2. Replace the `fetch` hook with [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) in your component.

## [`head`](https://nuxt.com/docs/4.x/migration/component-options\#head)

[Docs > 4 X > Migration > Meta](https://nuxt.com/docs/4.x/migration/meta) Read more in Docs > 4 X > Migration > Meta.

## [`key`](https://nuxt.com/docs/4.x/migration/component-options\#key)

You can now define a key within the [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) compiler macro.

app/pages/index.vue

```diff
- <script>
- export default {
-   key: 'index'
-   // or a method
-   // key: route => route.fullPath
- }
+ <script setup>
+ definePageMeta({
+   key: 'index'
+   // or a method
+   // key: route => route.fullPath
+ })
</script>
```

## [`layout`](https://nuxt.com/docs/4.x/migration/component-options\#layout)

[Docs > 4 X > Migration > Pages And Layouts](https://nuxt.com/docs/4.x/migration/pages-and-layouts) Read more in Docs > 4 X > Migration > Pages And Layouts.

## [`loading`](https://nuxt.com/docs/4.x/migration/component-options\#loading)

This feature is not yet supported in Nuxt 3.

## [`middleware`](https://nuxt.com/docs/4.x/migration/component-options\#middleware)

[Docs > 4 X > Migration > Plugins And Middleware](https://nuxt.com/docs/4.x/migration/plugins-and-middleware) Read more in Docs > 4 X > Migration > Plugins And Middleware.

## [`scrollToTop`](https://nuxt.com/docs/4.x/migration/component-options\#scrolltotop)

This feature is not yet supported in Nuxt 3. If you want to overwrite the default scroll behavior of `vue-router`, you can do so in an `~/router.options.ts` (see [docs](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#router-options)) for more info.
Similar to `key`, specify it within the [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) compiler macro.

app/pages/index.vue

```diff
- <script>
- export default {
-   scrollToTop: false
- }
+ <script setup>
+ definePageMeta({
+   scrollToTop: false
+ })
</script>
```

## [`transition`](https://nuxt.com/docs/4.x/migration/component-options\#transition)

[Docs > 4 X > Getting Started > Transitions](https://nuxt.com/docs/4.x/getting-started/transitions) Read more in Docs > 4 X > Getting Started > Transitions.

## [`validate`](https://nuxt.com/docs/4.x/migration/component-options\#validate)

The validate hook in Nuxt 3 only accepts a single argument, the `route`. Just as in Nuxt 2, you can return a boolean value. If you return false and another match can't be found, this will mean a 404. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).

app/pages/users/\[id\].vue

```diff
- <script>
- export default {
-   async validate({ params }) {
-     return /^\d+$/.test(params.id)
-   }
- }
+ <script setup>
+ definePageMeta({
+   validate: async (route) => {
+     const nuxtApp = useNuxtApp()
+     return /^\d+$/.test(route.params.id)
+   }
+ })
  </script>
```

## [`watchQuery`](https://nuxt.com/docs/4.x/migration/component-options\#watchquery)

This is not supported in Nuxt 3. Instead, you can directly use a watcher to trigger refetching data.

app/pages/users/\[id\].vue

```vue
<script setup lang="ts">
const route = useRoute()
const { data, refresh } = await useFetch('/api/user')
watch(() => route.query, () => refresh())
</script>
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/7.component-options.md)

[Pages and Layouts\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 pages and layouts.](https://nuxt.com/docs/4.x/migration/pages-and-layouts) [Runtime Config\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 runtime config.](https://nuxt.com/docs/4.x/migration/runtime-config)

On this page

On this page

- [asyncData and fetch](https://nuxt.com/docs/4.x/migration/component-options#asyncdata-and-fetch)
  - [Isomorphic Fetch](https://nuxt.com/docs/4.x/migration/component-options#isomorphic-fetch)
  - [Composables](https://nuxt.com/docs/4.x/migration/component-options#composables)
  - [Migration](https://nuxt.com/docs/4.x/migration/component-options#migration)
- [head](https://nuxt.com/docs/4.x/migration/component-options#head)
- [key](https://nuxt.com/docs/4.x/migration/component-options#key)
- [layout](https://nuxt.com/docs/4.x/migration/component-options#layout)
- [loading](https://nuxt.com/docs/4.x/migration/component-options#loading)
- [middleware](https://nuxt.com/docs/4.x/migration/component-options#middleware)
- [scrollToTop](https://nuxt.com/docs/4.x/migration/component-options#scrolltotop)
- [transition](https://nuxt.com/docs/4.x/migration/component-options#transition)
- [validate](https://nuxt.com/docs/4.x/migration/component-options#validate)
- [watchQuery](https://nuxt.com/docs/4.x/migration/component-options#watchquery)

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