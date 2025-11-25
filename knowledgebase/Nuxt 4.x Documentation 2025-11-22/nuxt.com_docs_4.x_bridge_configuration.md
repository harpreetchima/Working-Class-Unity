---
url: "https://nuxt.com/docs/4.x/bridge/configuration"
title: "Migrate to Nuxt Bridge: Configuration v4"
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

# Configuration

Copy page

Learn how to configure Nuxt Bridge to your own needs.

## [Feature Flags](https://nuxt.com/docs/4.x/bridge/configuration\#feature-flags)

You can optionally disable some features from bridge or opt-in to less stable ones. In normal circumstances, it is always best to stick with defaults!

You can check [bridge/src/module.ts](https://github.com/nuxt/bridge/blob/main/packages/bridge/src/module.ts) for latest defaults.

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {

    // -- Opt-in features --

    // Use Vite as the bundler instead of webpack 4
    // vite: true,

    // Enable Nuxt 3 compatible useHead
    // meta: true,

    // Enable definePageMeta macro
    // macros: {
    //   pageMeta: true
    // },

    // Enable transpiling TypeScript with esbuild
    // typescript: {
    //   esbuild: true
    // },

    // -- Default features --

    // Use legacy server instead of Nitro
    // nitro: false,

    // Disable Nuxt 3 compatible `nuxtApp` interface
    // app: false,

    // Disable Composition API support
    // capi: false,

    // ... or just disable legacy Composition API support
    // capi: {
    //   legacy: false
    // },

    // Do not transpile modules
    // transpile: false,

    // Disable <script setup> support
    // scriptSetup: false,

    // Disable composables auto importing
    // imports: false,

    // Do not warn about module incompatibilities
    // constraints: false
  },

  vite: {
    // Config for Vite
  },
})
```

## [Migration of each option](https://nuxt.com/docs/4.x/bridge/configuration\#migration-of-each-option)

### [router.base](https://nuxt.com/docs/4.x/bridge/configuration\#routerbase)

```diff
export default defineNuxtConfig({
- router: {
-   base: '/my-app/'
- }
+ app: {
+   baseURL: '/my-app/'
+ }
})
```

### [build.publicPath](https://nuxt.com/docs/4.x/bridge/configuration\#buildpublicpath)

```diff
export default defineNuxtConfig({
- build: {
-   publicPath: 'https://my-cdn.net'
- }
+ app: {
+   cdnURL: 'https://my-cdn.net'
+ }
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/10.configuration.md)

[Overview\\
\\
Reduce the differences with Nuxt 3 and reduce the burden of migration to Nuxt 3.](https://nuxt.com/docs/4.x/bridge/overview) [TypeScript\\
\\
Learn how to use TypeScript with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/typescript)

On this page

On this page

- [Feature Flags](https://nuxt.com/docs/4.x/bridge/configuration#feature-flags)
- [Migration of each option](https://nuxt.com/docs/4.x/bridge/configuration#migration-of-each-option)
  - [router.base](https://nuxt.com/docs/4.x/bridge/configuration#routerbase)
  - [build.publicPath](https://nuxt.com/docs/4.x/bridge/configuration#buildpublicpath)

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