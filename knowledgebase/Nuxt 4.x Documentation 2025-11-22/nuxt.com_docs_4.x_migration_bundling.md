---
url: "https://nuxt.com/docs/4.x/migration/bundling"
title: "Migrate to Nuxt 3: Build Tooling v4"
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

# Build Tooling

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 build tooling.

We use the following build tools by default:

- [Vite](https://vite.dev/) or [webpack](https://webpack.js.org/)
- [Rollup](https://rollupjs.org/)
- [PostCSS](https://postcss.org/)
- [esbuild](https://esbuild.github.io/)

For this reason, most of your previous `build` configuration in `nuxt.config` will now be ignored, including any custom babel configuration.

If you need to configure any of Nuxt's build tools, you can do so in your `nuxt.config`, using the new top-level `vite`, `webpack` and `postcss` keys.

In addition, Nuxt ships with TypeScript support.

[Docs > 4 X > Guide > Concepts > Typescript](https://nuxt.com/docs/4.x/guide/concepts/typescript) Read more in Docs > 4 X > Guide > Concepts > Typescript.

## [Steps](https://nuxt.com/docs/4.x/migration/bundling\#steps)

1. Remove `@nuxt/typescript-build` and `@nuxt/typescript-runtime` from your dependencies and modules.
2. Remove any unused babel dependencies from your project.
3. Remove any explicit core-js dependencies.
4. Migrate `require` to `import`.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/10.bundling.md)

[Overview\\
\\
Nuxt 3 is a complete rewrite of Nuxt 2, and also based on a new set of underlying technologies.](https://nuxt.com/docs/4.x/migration/overview) [Server\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 server.](https://nuxt.com/docs/4.x/migration/server)

On this page

On this page

- [Steps](https://nuxt.com/docs/4.x/migration/bundling#steps)

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