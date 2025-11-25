---
url: "https://nuxt.com/docs/4.x/getting-started/layers"
title: "Layers · Get Started with Nuxt v4"
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

# Layers

Copy page

Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.

One of the core features of Nuxt is the layers and extending support. You can extend a default Nuxt application to reuse components, utils, and configuration. The layers structure is almost identical to a standard Nuxt application which makes them easy to author and maintain.

## [Use Cases](https://nuxt.com/docs/4.x/getting-started/layers\#use-cases)

- Share reusable configuration presets across projects using `nuxt.config` and `app.config`
- Create a component library using [`app/components/`](https://nuxt.com/docs/4.x/directory-structure/app/components) directory
- Create utility and composable library using [`app/composables/`](https://nuxt.com/docs/4.x/directory-structure/app/composables) and [`app/utils/`](https://nuxt.com/docs/4.x/directory-structure/app/utils) directories
- Create Nuxt module presets
- Share standard setup across projects
- Create Nuxt themes
- Enhance code organization by implementing a modular architecture and support Domain-Driven Design (DDD) pattern in large scale projects.

## [Usage](https://nuxt.com/docs/4.x/getting-started/layers\#usage)

By default, any layers within your project in the `~~/layers` directory will be automatically registered as layers in your project.

Layer auto-registration was introduced in Nuxt v3.12.0.

In addition, named layer aliases to the `srcDir` of each of these layers will automatically be created. For example, you will be able to access the `~~/layers/test` layer via `#layers/test`.

Named layer aliases were introduced in Nuxt v3.16.0.

In addition, you can extend from a layer by adding the [extends](https://nuxt.com/docs/4.x/api/nuxt-config#extends) property to your [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // Extend from a local layer\
    '../base',\
    // Extend from an installed npm package\
    '@my-themes/awesome',\
    // Extend from a git repository\
    'github:my-themes/awesome#v1',\
  ],
})
```

You can also pass an authentication token if you are extending from a private GitHub repository:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // per layer configuration\
    ['github:my-themes/private-awesome', { auth: process.env.GITHUB_TOKEN }],\
  ],
})
```

You can override a layer's alias by specifying it in the options next to the layer source.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    [\
      'github:my-themes/awesome',\
      {\
        meta: {\
          name: 'my-awesome-theme',\
        },\
      },\
    ],\
  ],
})
```

Nuxt uses [unjs/c12](https://github.com/unjs/c12) and [unjs/giget](https://github.com/unjs/giget) for extending remote layers. Check the documentation for more information and all available options.

## [Layer Priority](https://nuxt.com/docs/4.x/getting-started/layers\#layer-priority)

When using multiple layers, it's important to understand the override order. Layers with **higher priority** override layers with lower priority when they define the same files or components.

The priority order from highest to lowest is:

1. **Your project files** \- always have the highest priority
2. **Auto-scanned layers** from `~~/layers` directory - sorted alphabetically (Z has higher priority than A)
3. **Layers in `extends`** config - first entry has higher priority than second

### [When to Use Each](https://nuxt.com/docs/4.x/getting-started/layers\#when-to-use-each)

- **`extends`** \- Use for external dependencies (npm packages, remote repositories) or layers outside your project directory
- **`~~/layers` directory** \- Use for local layers that are part of your project

If you need to control the order of auto-scanned layers, you can prefix them with numbers: `~/layers/1.z-layer`, `~/layers/2.a-layer`. This way `2.a-layer` will have higher priority than `1.z-layer`.

### [Example](https://nuxt.com/docs/4.x/getting-started/layers\#example)

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // Local layer outside the project\
    '../base',\
    // NPM package\
    '@my-themes/awesome',\
    // Remote repository\
    'github:my-themes/awesome#v1',\
  ],
})
```

If you also have `~~/layers/custom`, the priority order is:

- Your project files (highest)
- `~~/layers/custom`
- `../base`
- `@my-themes/awesome`
- `github:my-themes/awesome#v1` (lowest)

This means your project files will override any layer, and `~~/layers/custom` will override anything in `extends`.

[Docs > 4 X > Guide > Going Further > Layers](https://nuxt.com/docs/4.x/guide/going-further/layers) Read more about layers in the **Layer Author Guide**.

Watch a video from Learn Vue about Nuxt Layers

Watch a video from Alexander Lichter about Nuxt Layers

## [Examples](https://nuxt.com/docs/4.x/getting-started/layers\#examples)

[Content Wind](https://github.com/Atinux/content-wind)

Content Wind

A lightweight Nuxt theme to build a Markdown driven website. Powered by Nuxt Content, TailwindCSS and Iconify.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/14.layers.md)

[Server\\
\\
Build full-stack applications with Nuxt's server framework. You can fetch data from your database or another server, create APIs, or even generate static server-side content like a sitemap or a RSS feed - all from a single codebase.](https://nuxt.com/docs/4.x/getting-started/server) [Prerendering\\
\\
Nuxt allows pages to be statically rendered at build time to improve certain performance or SEO metrics](https://nuxt.com/docs/4.x/getting-started/prerendering)

On this page

On this page

- [Use Cases](https://nuxt.com/docs/4.x/getting-started/layers#use-cases)
- [Usage](https://nuxt.com/docs/4.x/getting-started/layers#usage)
- [Layer Priority](https://nuxt.com/docs/4.x/getting-started/layers#layer-priority)
  - [When to Use Each](https://nuxt.com/docs/4.x/getting-started/layers#when-to-use-each)
  - [Example](https://nuxt.com/docs/4.x/getting-started/layers#example)
- [Examples](https://nuxt.com/docs/4.x/getting-started/layers#examples)

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