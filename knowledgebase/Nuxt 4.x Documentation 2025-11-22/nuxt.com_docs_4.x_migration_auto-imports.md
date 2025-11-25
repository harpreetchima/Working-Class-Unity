---
url: "https://nuxt.com/docs/4.x/migration/auto-imports"
title: "Migrate to Nuxt 3: Auto Imports v4"
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

# Auto Imports

Copy page

Nuxt 3 adopts a minimal friction approach, meaning wherever possible components and composables are auto-imported.

In the rest of the migration documentation, you will notice that key Nuxt and Vue utilities do not have explicit imports. This is not a typo; Nuxt will automatically import them for you, and you should get full type hinting if you have followed [the instructions](https://nuxt.com/docs/4.x/migration/configuration#typescript) to use Nuxt's TypeScript support.

[Read more about auto imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)

## [Migration](https://nuxt.com/docs/4.x/migration/auto-imports\#migration)

1. If you have been using `@nuxt/components` in Nuxt 2, you can remove `components: true` in your `nuxt.config`. If you had a more complex setup, then note that the component options have changed somewhat. See the [components documentation](https://nuxt.com/docs/4.x/directory-structure/app/components) for more information.

You can look at `.nuxt/types/components.d.ts` and `.nuxt/types/imports.d.ts` to see how Nuxt has resolved your components and composable auto-imports.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/3.auto-imports.md)

[Modules\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 modules.](https://nuxt.com/docs/4.x/migration/module-authors) [Meta Tags\\
\\
Manage your meta tags, from Nuxt 2 to Nuxt 3.](https://nuxt.com/docs/4.x/migration/meta)

On this page

On this page

- [Migration](https://nuxt.com/docs/4.x/migration/auto-imports#migration)

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