---
url: "https://nuxt.com/docs/4.x/bridge/vite"
title: "Migrate to Nuxt Bridge: Vite v4"
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

# Vite

Copy page

Activate Vite to your Nuxt 2 application with Nuxt Bridge.

When using `vite`, [nitro](https://nuxt.com/docs/4.x/bridge/nitro) must have been configured.

## [Remove Modules](https://nuxt.com/docs/4.x/bridge/vite\#remove-modules)

- Remove `nuxt-vite`: Bridge enables same functionality

## [Update Config](https://nuxt.com/docs/4.x/bridge/vite\#update-config)

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    vite: true,
    nitro: true,
  },
})
```

## [Configuration](https://nuxt.com/docs/4.x/bridge/vite\#configuration)

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  vite: {
    // Config for Vite
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/9.vite.md)

[Nitro\\
\\
Activate Nitro to your Nuxt 2 application with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/nitro) [Overview\\
\\
Nuxt 3 is a complete rewrite of Nuxt 2, and also based on a new set of underlying technologies.](https://nuxt.com/docs/4.x/migration/overview)

On this page

On this page

- [Remove Modules](https://nuxt.com/docs/4.x/bridge/vite#remove-modules)
- [Update Config](https://nuxt.com/docs/4.x/bridge/vite#update-config)
- [Configuration](https://nuxt.com/docs/4.x/bridge/vite#configuration)

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