---
url: "https://nuxt.com/docs/4.x/bridge/runtime-config"
title: "Migrate to Nuxt Bridge: Runtime Config v4"
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

# Runtime Config

Copy page

Nuxt provides a runtime config API to expose configuration and secrets within your application.

When using `runtimeConfig` option, [nitro](https://nuxt.com/docs/4.x/bridge/nitro) must have been configured.

## [Update Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config\#update-runtime-config)

Nuxt 3 approaches runtime config differently than Nuxt 2, using a new combined `runtimeConfig` option.

First, you'll need to combine your `publicRuntimeConfig` and `privateRuntimeConfig` properties into a new one called `runtimeConfig`, with the public config within a key called `public`.

```diff
// nuxt.config.js
- privateRuntimeConfig: {
-   apiKey: process.env.NUXT_API_KEY || 'super-secret-key'
- },
- publicRuntimeConfig: {
-   websiteURL: 'https://public-data.com'
- }
+ runtimeConfig: {
+   apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
+   public: {
+     websiteURL: 'https://public-data.com'
+   }
+ }
```

This also means that when you need to access public runtime config, it's behind a property called `public`. If you use public runtime config, you'll need to update your code.

```diff
// MyWidget.vue
- <div>Website: {{ $config.websiteURL }}</div>
+ <div>Website: {{ $config.public.websiteURL }}</div>
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/7.runtime-config.md)

[Meta Tags\\
\\
Learn how to migrate from Nuxt 2 to Nuxt Bridge new meta tags.](https://nuxt.com/docs/4.x/bridge/meta) [Nitro\\
\\
Activate Nitro to your Nuxt 2 application with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/nitro)

On this page

On this page

- [Update Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config#update-runtime-config)

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