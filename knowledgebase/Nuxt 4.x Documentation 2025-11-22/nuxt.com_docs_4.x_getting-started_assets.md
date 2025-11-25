---
url: "https://nuxt.com/docs/4.x/getting-started/assets"
title: "Assets · Get Started with Nuxt v4"
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

- [Introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Configuration](https://nuxt.com/docs/4.x/getting-started/configuration)
- [Views](https://nuxt.com/docs/4.x/getting-started/views)
- [Assets](https://nuxt.com/docs/4.x/getting-started/assets)
- [Styling](https://nuxt.com/docs/4.x/getting-started/styling)
- [Routing](https://nuxt.com/docs/4.x/getting-started/routing)
- [SEO and Meta](https://nuxt.com/docs/4.x/getting-started/seo-meta)
- [Transitions](https://nuxt.com/docs/4.x/getting-started/transitions)
- [Data Fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching)
- [State Management](https://nuxt.com/docs/4.x/getting-started/state-management)
- [Error Handling](https://nuxt.com/docs/4.x/getting-started/error-handling)
- [Server](https://nuxt.com/docs/4.x/getting-started/server)
- [Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Prerendering](https://nuxt.com/docs/4.x/getting-started/prerendering)
- [Deployment](https://nuxt.com/docs/4.x/getting-started/deployment)
- [Testing](https://nuxt.com/docs/4.x/getting-started/testing)
- [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)

1. [Get Started](https://nuxt.com/docs/4.x/getting-started)

# Assets

Copy page

Nuxt offers two options for your assets.

Nuxt uses two directories to handle assets like stylesheets, fonts or images.

- The [`public/`](https://nuxt.com/docs/4.x/directory-structure/public) directory content is served at the server root as-is.
- The [`app/assets/`](https://nuxt.com/docs/4.x/directory-structure/app/assets) directory contains by convention every asset that you want the build tool (Vite or webpack) to process.

## [Public Directory](https://nuxt.com/docs/4.x/getting-started/assets\#public-directory)

The [`public/`](https://nuxt.com/docs/4.x/directory-structure/public) directory is used as a public server for static assets publicly available at a defined URL of your application.

You can get a file in the [`public/`](https://nuxt.com/docs/4.x/directory-structure/public) directory from your application's code or from a browser by the root URL `/`.

### [Example](https://nuxt.com/docs/4.x/getting-started/assets\#example)

For example, referencing an image file in the `public/img/` directory, available at the static URL `/img/nuxt.png`:

app/app.vue

```vue
<template>
  <img
    src="/img/nuxt.png"
    alt="Discover Nuxt"
  >
</template>
```

## [Assets Directory](https://nuxt.com/docs/4.x/getting-started/assets\#assets-directory)

Nuxt uses [Vite](https://vite.dev/guide/assets) (default) or [webpack](https://webpack.js.org/guides/asset-management/) to build and bundle your application. The main function of these build tools is to process JavaScript files, but they can be extended through [plugins](https://vite.dev/plugins/) (for Vite) or [loaders](https://webpack.js.org/loaders/) (for webpack) to process other kinds of assets, like stylesheets, fonts or SVGs. This step transforms the original file, mainly for performance or caching purposes (such as stylesheet minification or browser cache invalidation).

By convention, Nuxt uses the [`app/assets/`](https://nuxt.com/docs/4.x/directory-structure/app/assets) directory to store these files but there is no auto-scan functionality for this directory, and you can use any other name for it.

In your application's code, you can reference a file located in the [`app/assets/`](https://nuxt.com/docs/4.x/directory-structure/app/assets) directory by using the `~/assets/` path.

### [Example](https://nuxt.com/docs/4.x/getting-started/assets\#example-1)

For example, referencing an image file that will be processed if a build tool is configured to handle this file extension:

app/app.vue

```vue
<template>
  <img
    src="~/assets/img/nuxt.png"
    alt="Discover Nuxt"
  >
</template>
```

Nuxt won't serve files in the [`app/assets/`](https://nuxt.com/docs/4.x/directory-structure/app/assets) directory at a static URL like `/assets/my-file.png`. If you need a static URL, use the [`public/`](https://nuxt.com/docs/4.x/getting-started/assets#public-directory) directory.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/05.assets.md)

[Views\\
\\
Nuxt provides several component layers to implement the user interface of your application.](https://nuxt.com/docs/4.x/getting-started/views) [Styling\\
\\
Learn how to style your Nuxt application.](https://nuxt.com/docs/4.x/getting-started/styling)

On this page

On this page

- [Public Directory](https://nuxt.com/docs/4.x/getting-started/assets#public-directory)
  - [Example](https://nuxt.com/docs/4.x/getting-started/assets#example)
- [Assets Directory](https://nuxt.com/docs/4.x/getting-started/assets#assets-directory)
  - [Example](https://nuxt.com/docs/4.x/getting-started/assets#example-1)

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