---
url: "https://nuxt.com/docs/4.x/bridge/plugins-and-middleware"
title: "Migrate to Nuxt Bridge: Plugins and Middleware v4"
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

# Plugins and Middleware

Copy page

Learn how to migrate from Nuxt 2 to Nuxt Bridge new plugins and middleware.

## [New Plugins Format](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware\#new-plugins-format)

You can now migrate to the Nuxt 3 plugins API, which is slightly different in format from Nuxt 2.

Plugins now take only one argument (`nuxtApp`). You can find out more in [the docs](https://nuxt.com/docs/4.x/directory-structure/app/plugins).

app/plugins/hello.ts

```ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('injected', () => 'my injected function')
  // now available on `nuxtApp.$injected`
})
```

If you want to use the new Nuxt composables (such as [`useNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) or `useRuntimeConfig`) within your plugins, you will need to use the `defineNuxtPlugin` helper for those plugins.

Although a compatibility interface is provided via `nuxtApp.vueApp` you should avoid registering plugins, directives, mixins or components this way without adding your own logic to ensure they are not installed more than once, or this may cause a memory leak.

## [New Middleware Format](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware\#new-middleware-format)

You can now migrate to the Nuxt 3 middleware API, which is slightly different in format from Nuxt 2.

Middleware now take only two argument (`to`, `from`). You can find out more in [the docs](https://nuxt.com/docs/4.x/directory-structure/app/middleware).

```ts
export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/') {
    return navigateTo('/')
  }
})
```

Use of `defineNuxtRouteMiddleware` is not supported outside of the `app/middleware` directory.

## [definePageMeta](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware\#definepagemeta)

You can also use [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) in Nuxt Bridge.

You can be enabled with the `macros.pageMeta` option in your configuration file

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    macros: {
      pageMeta: true,
    },
  },
})
```

But only for `middleware` and `layout`.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/4.plugins-and-middleware.md)

[Legacy Composition API\\
\\
Learn how to migrate to Composition API with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/bridge-composition-api) [New Composition API\\
\\
Nuxt Bridge implements composables compatible with Nuxt 3.](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)

On this page

On this page

- [New Plugins Format](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware#new-plugins-format)
- [New Middleware Format](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware#new-middleware-format)
- [definePageMeta](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware#definepagemeta)

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