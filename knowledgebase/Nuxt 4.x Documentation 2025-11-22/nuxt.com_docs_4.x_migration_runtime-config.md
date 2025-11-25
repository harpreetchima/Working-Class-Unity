---
url: "https://nuxt.com/docs/4.x/migration/runtime-config"
title: "Migrate to Nuxt 3: Runtime Config v4"
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

# Runtime Config

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 runtime config.

If you wish to reference environment variables within your Nuxt 3 app, you will need to use runtime config.

When referencing these variables within your components, you will have to use the [`useRuntimeConfig`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) composable in your setup method (or Nuxt plugin).

In the `server/` portion of your app, you can use [`useRuntimeConfig`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) without any import.

[Docs > 4 X > Guide > Going Further > Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config) Read more in Docs > 4 X > Guide > Going Further > Runtime Config.

## [Migration](https://nuxt.com/docs/4.x/migration/runtime-config\#migration)

1. Add any environment variables that you use in your app to the `runtimeConfig` property of the `nuxt.config` file.
2. Migrate `process.env` to [`useRuntimeConfig`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) throughout the Vue part of your app.

nuxt.config.tsapp/pages/index.vueserver/api/hello.ts.env

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      apiBase: '/api',
    },
  },
})
```

```vue
<script setup lang="ts">
const config = useRuntimeConfig()

// instead of process.env you will now access config.public.apiBase
console.log(config.public.apiBase)
</script>
```

```ts
export default defineEventhandler((event) => {
  const config = useRuntimeConfig(event)
  // In server, you can now access config.apiSecret, in addition to config.public
  console.log(config.apiSecret)
  console.log(config.public.apiBase)
})
```

```ini
# Runtime config values are automatically replaced by matching environment variables at runtime
NUXT_API_SECRET=api_secret_token
NUXT_PUBLIC_API_BASE=https://nuxtjs.org
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/8.runtime-config.md)

[Component Options\\
\\
Learn how to migrate from Nuxt 2 components options to Nuxt 3 composables.](https://nuxt.com/docs/4.x/migration/component-options)

On this page

On this page

- [Migration](https://nuxt.com/docs/4.x/migration/runtime-config#migration)

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