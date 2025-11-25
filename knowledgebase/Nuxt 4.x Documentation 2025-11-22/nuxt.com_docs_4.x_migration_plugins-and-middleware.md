---
url: "https://nuxt.com/docs/4.x/migration/plugins-and-middleware"
title: "Migrate to Nuxt 3: Plugins and Middleware v4"
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

# Plugins and Middleware

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 plugins and middleware.

## [Plugins](https://nuxt.com/docs/4.x/migration/plugins-and-middleware\#plugins)

Plugins now have a different format, and take only one argument (`nuxtApp`).

Nuxt 2Nuxt 3

```ts
export default (ctx, inject) => {
  inject('injected', () => 'my injected function')
}
```

```ts
export default defineNuxtPlugin((nuxtApp) => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('injected', () => 'my injected function')

  // You can alternatively use this format, which comes with automatic type support
  return {
    provide: {
      injected: () => 'my injected function',
    },
  }
})
```

[Docs > 4 X > Directory Structure > App > Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) Read more in Docs > 4 X > Directory Structure > App > Plugins.

[Docs > 4 X > API > Composables > Use Nuxt App](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) Read more about the format of `nuxtApp`.

### [Migration](https://nuxt.com/docs/4.x/migration/plugins-and-middleware\#migration)

1. Migrate your plugins to use the `defineNuxtPlugin` helper function.
2. Remove any entries in your `nuxt.config` plugins array that are located in your `app/plugins/` folder. All files in this directory at the top level (and any index files in any subdirectories) will be automatically registered. Instead of setting `mode` to `client` or `server`, you can indicate this in the file name. For example, `~/plugins/my-plugin.client.ts` will only be loaded on client-side.

## [Route Middleware](https://nuxt.com/docs/4.x/migration/plugins-and-middleware\#route-middleware)

Route middleware has a different format.

Nuxt 2Nuxt 3

```js
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
```

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')
  if (!auth.value.authenticated) {
    return navigateTo('/login')
  }
})
```

Much like Nuxt 2, route middleware placed in your `~/middleware` folder is automatically registered. You can then specify it by name in a component. However, this is done with `definePageMeta` rather than as a component option.

`navigateTo` is one of a number of route helper functions.

[Docs > 4 X > Directory Structure > App > Middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware) Read more in Docs > 4 X > Directory Structure > App > Middleware.

### [Migration](https://nuxt.com/docs/4.x/migration/plugins-and-middleware\#migration-1)

1. Migrate your route middleware to use the `defineNuxtRouteMiddleware` helper function.
2. Any global middleware (such as in your `nuxt.config`) can be placed in your `~/middleware` folder with a `.global` extension, for example `~/middleware/auth.global.ts`.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/5.plugins-and-middleware.md)

[Meta Tags\\
\\
Manage your meta tags, from Nuxt 2 to Nuxt 3.](https://nuxt.com/docs/4.x/migration/meta) [Pages and Layouts\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 pages and layouts.](https://nuxt.com/docs/4.x/migration/pages-and-layouts)

On this page

On this page

- [Plugins](https://nuxt.com/docs/4.x/migration/plugins-and-middleware#plugins)
  - [Migration](https://nuxt.com/docs/4.x/migration/plugins-and-middleware#migration)
- [Route Middleware](https://nuxt.com/docs/4.x/migration/plugins-and-middleware#route-middleware)
  - [Migration](https://nuxt.com/docs/4.x/migration/plugins-and-middleware#migration-1)

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