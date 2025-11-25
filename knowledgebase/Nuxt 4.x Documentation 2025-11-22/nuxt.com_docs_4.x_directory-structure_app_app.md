---
url: "https://nuxt.com/docs/4.x/directory-structure/app/app"
title: "app.vue · Nuxt Directory Structure v4"
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

- [.nuxt](https://nuxt.com/docs/4.x/directory-structure/nuxt)
- [.output](https://nuxt.com/docs/4.x/directory-structure/output)
- app


- [assets](https://nuxt.com/docs/4.x/directory-structure/app/assets)
- [components](https://nuxt.com/docs/4.x/directory-structure/app/components)
- [composables](https://nuxt.com/docs/4.x/directory-structure/app/composables)
- [layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts)
- [middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware)
- [pages](https://nuxt.com/docs/4.x/directory-structure/app/pages)
- [plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins)
- [utils](https://nuxt.com/docs/4.x/directory-structure/app/utils)
- [app.vue](https://nuxt.com/docs/4.x/directory-structure/app/app)
- [app.config.ts](https://nuxt.com/docs/4.x/directory-structure/app/app-config)
- [error.vue](https://nuxt.com/docs/4.x/directory-structure/app/error)

- [content](https://nuxt.com/docs/4.x/directory-structure/content)
- [modules](https://nuxt.com/docs/4.x/directory-structure/modules)
- [node\_modules](https://nuxt.com/docs/4.x/directory-structure/node_modules)
- [public](https://nuxt.com/docs/4.x/directory-structure/public)
- [server](https://nuxt.com/docs/4.x/directory-structure/server)
- [shared](https://nuxt.com/docs/4.x/directory-structure/shared)
- [.env](https://nuxt.com/docs/4.x/directory-structure/env)
- [.gitignore](https://nuxt.com/docs/4.x/directory-structure/gitignore)
- [.nuxtignore](https://nuxt.com/docs/4.x/directory-structure/nuxtignore)
- [.nuxtrc](https://nuxt.com/docs/4.x/directory-structure/nuxtrc)
- [nuxt.config.ts](https://nuxt.com/docs/4.x/directory-structure/nuxt-config)
- [package.json](https://nuxt.com/docs/4.x/directory-structure/package)
- [tsconfig.json](https://nuxt.com/docs/4.x/directory-structure/tsconfig)

1. [Directory Structure](https://nuxt.com/docs/4.x/directory-structure)
3. [app](https://nuxt.com/docs/4.x/directory-structure/app)

# app.vue

Copy page

The app.vue file is the main component of your Nuxt application.

If you have a `app/pages/` directory, the `app.vue` file is optional. Nuxt will automatically include a default `app.vue`, but you can still add your own to customize the structure and content as needed.

## [Usage](https://nuxt.com/docs/4.x/directory-structure/app/app\#usage)

### [Minimal Usage](https://nuxt.com/docs/4.x/directory-structure/app/app\#minimal-usage)

With Nuxt, the [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory is optional. If it is not present, Nuxt will not include the [vue-router](https://router.vuejs.org/) dependency. This is useful when building a landing page or an application that does not require routing.

app/app.vue

```vue
<template>
  <h1>Hello World!</h1>
</template>
```

Read and edit a live example in [Docs > 4 X > Examples > Hello World](https://nuxt.com/docs/4.x/examples/hello-world).

### [Usage with Pages](https://nuxt.com/docs/4.x/directory-structure/app/app\#usage-with-pages)

When you have a [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory, you need to use the [`<NuxtPage>`](https://nuxt.com/docs/4.x/api/components/nuxt-page) component to display the current page:

app/app.vue

```vue
<template>
  <NuxtPage />
</template>
```

You can also define the common structure of your application directly in `app.vue`. This is useful when you want to include global elements such as a header or footer:

app/app.vue

```vue
<template>
  <header>
    Header content
  </header>
  <NuxtPage />
  <footer>
    Footer content
  </footer>
</template>
```

Remember that `app.vue` acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page.

[Docs > 4 X > Directory Structure > App > Pages](https://nuxt.com/docs/4.x/directory-structure/app/pages) Learn more about how to structure your pages using the `app/pages/` directory.

### [Usage with Layouts](https://nuxt.com/docs/4.x/directory-structure/app/app\#usage-with-layouts)

When your application requires different layouts for different pages, you can use the `app/layouts/` directory with the [`<NuxtLayout>`](https://nuxt.com/docs/4.x/api/components/nuxt-layout) component. This allows you to define multiple layouts and apply them per page.

app/app.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

[Docs > 4 X > Directory Structure > App > Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts) Learn more about how to structure your layouts using the `app/layouts/` directory.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/1.app/3.app.md)

[utils\\
\\
Use the utils/ directory to auto-import your utility functions throughout your application.](https://nuxt.com/docs/4.x/directory-structure/app/utils) [app.config.ts\\
\\
Expose reactive configuration within your application with the App Config file.](https://nuxt.com/docs/4.x/directory-structure/app/app-config)

On this page

On this page

- [Usage](https://nuxt.com/docs/4.x/directory-structure/app/app#usage)
  - [Minimal Usage](https://nuxt.com/docs/4.x/directory-structure/app/app#minimal-usage)
  - [Usage with Pages](https://nuxt.com/docs/4.x/directory-structure/app/app#usage-with-pages)
  - [Usage with Layouts](https://nuxt.com/docs/4.x/directory-structure/app/app#usage-with-layouts)

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