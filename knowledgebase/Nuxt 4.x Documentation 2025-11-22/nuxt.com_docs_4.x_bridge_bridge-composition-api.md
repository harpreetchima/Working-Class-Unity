---
url: "https://nuxt.com/docs/4.x/bridge/bridge-composition-api"
title: "Migrate to Nuxt Bridge: Legacy Composition API v4"
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

# Legacy Composition API

Copy page

Learn how to migrate to Composition API with Nuxt Bridge.

Nuxt Bridge provides access to Composition API syntax. It is specifically designed to be aligned with Nuxt 3. Because of this, there are a few extra steps to take when enabling Nuxt Bridge, if you have been using the Composition API previously.

## [Remove Modules](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#remove-modules)

- Remove `@vue/composition-api` from your dependencies.
- Remove `@nuxtjs/composition-api` from your dependencies (and from your modules in `nuxt.config`).

## [Using `@vue/composition-api`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#using-vuecomposition-api)

If you have been using just `@vue/composition-api` and not `@nuxtjs/composition-api`, then things are very straightforward.

1. First, remove the plugin where you are manually registering the Composition API. Nuxt Bridge will handle this for you.


```diff
- import Vue from 'vue'
- import VueCompositionApi from '@vue/composition-api'
-
- Vue.use(VueCompositionApi)
```

2. Otherwise, there is nothing you need to do. However, if you want, you can remove your explicit imports from `@vue/composition-api` and rely on Nuxt Bridge auto-importing them for you.

## [Migrating from `@nuxtjs/composition-api`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#migrating-from-nuxtjscomposition-api)

Nuxt Bridge implements the Composition API slightly differently from `@nuxtjs/composition-api` and provides different composables (designed to be aligned with the composables that Nuxt 3 provides).

Because some composables have been removed and don't yet have a replacement, this will be a slightly more complicated process.

### [Remove `@nuxtjs/composition-api/module` from your buildModules](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#remove-nuxtjscomposition-apimodule-from-your-buildmodules)

You don't have to immediately update your imports yet - Nuxt Bridge will automatically provide a 'shim' for most imports you currently have, to give you time to migrate to the new, Nuxt 3-compatible composables, with the following exceptions:

- `withContext` has been removed. See [below](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#usecontext-and-withcontext).
- `useStatic` has been removed. There is no current replacement. Feel free to raise a discussion if you have a use case for this.
- `reqRef` and `reqSsrRef`, which were deprecated, have now been removed entirely. Follow the instructions below regarding [ssrRef](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api#ssrref-and-shallowssrref) to replace this.

### [Set `bridge.capi`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#set-bridgecapi)

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
bridge: {
    capi: true,
    nitro: false, // If migration to Nitro is complete, set to true
},
})
```

For each other composable you are using from `@nuxtjs/composition-api`, follow the steps below.

### [useFetch](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#usefetch)

`$fetchState` and `$fetch` have been removed.

```diff
const {
- $fetch,
- $fetchState,
+ fetch,
+ fetchState,
} = useFetch(() => { posts.value = await $fetch('/api/posts') })
```

### [`defineNuxtMiddleware`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#definenuxtmiddleware)

This was a type-helper stub function that is now removed.

Remove the `defineNuxtMiddleware` wrapper:

```diff
- import { defineNuxtMiddleware } from '@nuxtjs/composition-api`
- export default defineNuxtMiddleware((ctx) => {})
+ export default (ctx) => {}
```

For typescript support, you can use `@nuxt/types`:

```ts
import type { Middleware } from '@nuxt/types'

export default <Middleware> function (ctx) { }
```

### [`defineNuxtPlugin`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#definenuxtplugin)

This was a type-helper stub function that is now removed.

You may also keep using Nuxt 2-style plugins, by removing the function (as with [defineNuxtMiddleware](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#definenuxtmiddleware)).

Remove the `defineNuxtPlugin` wrapper:

```diff
- import { defineNuxtPlugin } from '@nuxtjs/composition-api'
- export default defineNuxtPlugin((ctx, inject) => {})
+ export default (ctx, inject) => {}
```

For typescript support, you can use `@nuxt/types`:

```ts
import type { Plugin } from '@nuxt/types'

export default <Plugin> function (ctx, inject) {}
```

While this example is valid, Nuxt 3 introduces a new defineNuxtPlugin function that has a slightly different signature.

Read more in Missing link.

### [`useRouter` and `useRoute`](https://nuxt.com/docs/4.x/bridge/bridge-composition-api\#userouter-and-useroute)

Nuxt Bridge provides direct replacements for these composables via [`useRouter`](https://nuxt.com/docs/4.x/api/composables/use-router) and `useRoute`.

The only key difference is that [`useRoute`](https://nuxt.com/docs/4.x/api/composables/use-route) no longer returns a computed property.

```diff
- import { useRouter, useRoute } from '@nuxtjs/composition-api'

const router = useRouter()
const route = useRoute()

- console.log(route.value.path)
+ console.log(route.path)
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/3.bridge-composition-api.md)

[TypeScript\\
\\
Learn how to use TypeScript with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/typescript) [Plugins and Middleware\\
\\
Learn how to migrate from Nuxt 2 to Nuxt Bridge new plugins and middleware.](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)

On this page

On this page

- [Remove Modules](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#remove-modules)
- [Using @vue/composition-api](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#using-vuecomposition-api)
- [Migrating from @nuxtjs/composition-api](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#migrating-from-nuxtjscomposition-api)
  - [Remove @nuxtjs/composition-api/module from your buildModules](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#remove-nuxtjscomposition-apimodule-from-your-buildmodules)
  - [Set bridge.capi](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#set-bridgecapi)
  - [useFetch](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#usefetch)
  - [defineNuxtMiddleware](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#definenuxtmiddleware)
  - [defineNuxtPlugin](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#definenuxtplugin)
  - [useRouter and useRoute](https://nuxt.com/docs/4.x/bridge/bridge-composition-api#userouter-and-useroute)

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