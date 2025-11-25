---
url: "https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api"
title: "Migrate to Nuxt Bridge: New Composition API v4"
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

- [Overview](https://nuxt.com/docs/4.x/bridge/overview)
- [Configuration](https://nuxt.com/docs/4.x/bridge/configuration)
- [TypeScript](https://nuxt.com/docs/4.x/bridge/typescript)
- [Legacy Composition API](https://nuxt.com/docs/4.x/bridge/bridge-composition-api)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)
- [New Composition API](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)
- [Meta Tags](https://nuxt.com/docs/4.x/bridge/meta)
- [Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config)
- [Nitro](https://nuxt.com/docs/4.x/bridge/nitro)
- [Vite](https://nuxt.com/docs/4.x/bridge/vite)

1. [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
3. [Migrate to Nuxt Bridge](https://nuxt.com/docs/4.x/bridge)

# New Composition API

Copy page

Nuxt Bridge implements composables compatible with Nuxt 3.

By migrating from `@nuxtjs/composition-api` to the Nuxt 3 compatible API, there will be less rewriting when migrating to Nuxt 3.

## [`ssrRef` and `shallowSsrRef`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#ssrref-and-shallowssrref)

These two functions have been replaced with a new composable that works very similarly under the hood: `useState`.

The key differences are that you must provide a _key_ for this state (which Nuxt generated automatically for `ssrRef` and `shallowSsrRef`), and that it can only be called within a Nuxt 3 plugin (which is defined by `defineNuxtPlugin`) or a component instance. (In other words, you cannot use [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) with a global/ambient context, because of the danger of shared state across requests.)

```diff
- import { ssrRef } from '@nuxtjs/composition-api'

- const ref1 = ssrRef('initialData')
- const ref2 = ssrRef(() => 'factory function')
+ const ref1 = useState('ref1-key', () => 'initialData')
+ const ref2 = useState('ref2-key', () => 'factory function')
  // accessing the state
  console.log(ref1.value)
```

Because the state is keyed, you can access the same state from multiple locations, as long as you are using the same key.

You can read more about how to use this composable in [the Nuxt 3 docs](https://nuxt.com/docs/4.x/api/composables/use-state).

## [`ssrPromise`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#ssrpromise)

This function has been removed, and you will need to find an alternative implementation if you were using it. If you have a use case for `ssrPromise`, please let us know via a discussion.

## [`onGlobalSetup`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#onglobalsetup)

This function has been removed, but its use cases can be met by using [`useNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) or [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) within `defineNuxtPlugin`. You can also run any custom code within the `setup()` function of a layout.

```diff
- import { onGlobalSetup } from '@nuxtjs/composition-api'

- export default () => {
-   onGlobalSetup(() => {
+ export default defineNuxtPlugin((nuxtApp) => {
+   nuxtApp.hook('vue:setup', () => {
      // ...
    })
- }
+ })
```

## [`useStore`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#usestore)

In order to access Vuex store instance, you can use `useNuxtApp().$store`.

```diff
- import { useStore } from '@nuxtjs/composition-api`
+ const { $store } = useNuxtApp()
```

## [`useContext` and `withContext`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#usecontext-and-withcontext)

You can access injected helpers using `useNuxtApp`.

```diff
- import { useContext } from '@nuxtjs/composition-api`
+ const { $axios } = useNuxtApp()
```

`useNuxtApp()` also provides a key called `nuxt2Context` which contains all the same properties you would normally access from Nuxt 2 context, but it's advised _not_ to use this directly, as it won't exist in Nuxt 3. Instead, see if there is another way to access what you need. (If not, please raise a feature request or discussion.)

## [`wrapProperty`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#wrapproperty)

This helper function is not provided any more but you can replace it with the following code:

```ts
import { computed, getCurrentInstance } from 'vue'

const wrapProperty = (property: string, makeComputed = true) => () => {
  const vm = getCurrentInstance().proxy
  return makeComputed ? computed(() => vm[property]) : vm[property]
}
```

## [`useAsync` and `useFetch`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#useasync-and-usefetch)

These two composables can be replaced with `useLazyAsyncData` and `useLazyFetch`, which are documented [in the Nuxt 3 docs](https://nuxt.com/docs/4.x/getting-started/data-fetching). Just like the previous `@nuxtjs/composition-api` composables, these composables do not block route navigation on the client-side (hence the 'lazy' part of the name).

Note that the API is entirely different, despite similar sounding names. Importantly, you should not attempt to change the value of other variables outside the composable (as you may have been doing with the previous `useFetch`).

The `useLazyFetch` must have been configured for [Nitro](https://nuxt.com/docs/4.x/bridge/nitro).

Migrating to the new composables from `useAsync`:

```diff
<script setup>
- import { useAsync } from '@nuxtjs/composition-api'
- const posts = useAsync(() => $fetch('/api/posts'))
+ const { data: posts } = useLazyAsyncData('posts', () => $fetch('/api/posts'))
+ // or, more simply!
+ const { data: posts } = useLazyFetch('/api/posts')
</script>
```

Migrating to the new composables from `useFetch`:

```diff
<script setup>
- import { useFetch } from '@nuxtjs/composition-api'
- const posts = ref([])
- const { fetch } = useFetch(() => { posts.value = await $fetch('/api/posts') })
+ const { data: posts, refresh } = useLazyAsyncData('posts', () => $fetch('/api/posts'))
+ // or, more simply!
+ const { data: posts, refresh } = useLazyFetch('/api/posts')
  function updatePosts() {
-   return fetch()
+   return refresh()
  }
</script>
```

### [`useMeta`](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#usemeta)

In order to interact with `vue-meta`, you may use `useNuxt2Meta`, which will work in Nuxt Bridge (but not Nuxt 3) and will allow you to manipulate your meta tags in a `vue-meta`-compatible way.

```diff
<script setup>
- import { useMeta } from '@nuxtjs/composition-api'
  useNuxt2Meta({
    title: 'My Nuxt App',
  })
</script>
```

You can also pass in computed values or refs, and the meta values will be updated reactively:

```vue
<script setup>
const title = ref('my title')
useNuxt2Meta({
  title,
})
title.value = 'new title'
</script>
```

Be careful not to use both `useNuxt2Meta()` and the Options API `head()` within the same component, as behavior may be unpredictable.

Nuxt Bridge also provides a Nuxt 3-compatible meta implementation that can be accessed with the [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable.

```diff
<script setup>
- import { useMeta } from '@nuxtjs/composition-api'
  useHead({
    title: 'My Nuxt App',
  })
</script>
```

You will also need to enable it explicitly in your `nuxt.config`:

```js
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    meta: true,
  },
})
```

This [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable uses `@unhead/vue` under the hood (rather than `vue-meta`) to manipulate your `<head>`. Accordingly, it is recommended not to use both the native Nuxt 2 `head()` properties as well as [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) , as they may conflict.

For more information on how to use this composable, see [the Nuxt 3 docs](https://nuxt.com/docs/4.x/getting-started/seo-meta).

### [Explicit Imports](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#explicit-imports)

Nuxt exposes every auto-import with the `#imports` alias that can be used to make the import explicit if needed:

```vue
<script setup lang="ts">
import { computed, ref } from '#imports'

const count = ref(1)
const double = computed(() => count.value * 2)
</script>
```

### [Disabling Auto-imports](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api\#disabling-auto-imports)

If you want to disable auto-importing composables and utilities, you can set `imports.autoImport` to `false` in the `nuxt.config` file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
})
```

This will disable auto-imports completely but it's still possible to use [explicit imports](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#explicit-imports) from `#imports`.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/5.nuxt3-compatible-api.md)

[Plugins and Middleware\\
\\
Learn how to migrate from Nuxt 2 to Nuxt Bridge new plugins and middleware.](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware) [Meta Tags\\
\\
Learn how to migrate from Nuxt 2 to Nuxt Bridge new meta tags.](https://nuxt.com/docs/4.x/bridge/meta)

On this page

On this page

- [ssrRef and shallowSsrRef](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#ssrref-and-shallowssrref)
- [ssrPromise](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#ssrpromise)
- [onGlobalSetup](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#onglobalsetup)
- [useStore](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#usestore)
- [useContext and withContext](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#usecontext-and-withcontext)
- [wrapProperty](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#wrapproperty)
- [useAsync and useFetch](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#useasync-and-usefetch)
  - [useMeta](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#usemeta)
  - [Explicit Imports](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#explicit-imports)
  - [Disabling Auto-imports](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#disabling-auto-imports)

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