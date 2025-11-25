---
url: "https://nuxt.com/docs/4.x/directory-structure/tsconfig"
title: "tsconfig.json · Nuxt Directory Structure v4"
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

# tsconfig.json

Copy page

Learn how Nuxt manages TypeScript configuration across different parts of your project.

Nuxt [automatically generates](https://nuxt.com/docs/4.x/guide/concepts/typescript#auto-generated-types) multiple TypeScript configuration files (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, `.nuxt/tsconfig.node.json` and `.nuxt/tsconfig.shared.json`) that include recommended basic TypeScript configuration for your project, references to [auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports), [API route types](https://nuxt.com/docs/4.x/guide/concepts/server-engine#typed-api-routes), path aliases, and more.

Your Nuxt project should include the following `tsconfig.json` file at the root of the project:

tsconfig.json

```json
{
  "files": [],
  "references": [\
    {\
      "path": "./.nuxt/tsconfig.app.json"\
    },\
    {\
      "path": "./.nuxt/tsconfig.server.json"\
    },\
    {\
      "path": "./.nuxt/tsconfig.shared.json"\
    },\
    {\
      "path": "./.nuxt/tsconfig.node.json"\
    }\
  ]
}
```

We do not recommend modifying the contents of this file directly, as doing so could overwrite important settings that Nuxt or other modules rely on. Instead, extend it via `nuxt.config.ts`.

[Docs > 4 X > Guide > Concepts > Typescript#project References](https://nuxt.com/docs/4.x/guide/concepts/typescript#project-references) Read more about the different type contexts of a Nuxt project here.

## [Extending TypeScript Configuration](https://nuxt.com/docs/4.x/directory-structure/tsconfig\#extending-typescript-configuration)

You can customize the TypeScript configuration of your Nuxt project for each context (`app`, `shared`, `node`, and `server`) in the `nuxt.config.ts` file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  typescript: {
    // customize tsconfig.app.json
    tsConfig: {
      // ...
    },
    // customize tsconfig.shared.json
    sharedTsConfig: {
      // ...
    },
    // customize tsconfig.node.json
    nodeTsConfig: {
      // ...
    },
  },
  nitro: {
    typescript: {
      // customize tsconfig.server.json
      tsConfig: {
        // ...
      },
    },
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/3.tsconfig.md)

[package.json\\
\\
The package.json file contains all the dependencies and scripts for your application.](https://nuxt.com/docs/4.x/directory-structure/package) [Rendering Modes\\
\\
Learn about the different rendering modes available in Nuxt.](https://nuxt.com/docs/4.x/guide/concepts/rendering)

On this page

On this page

- [Extending TypeScript Configuration](https://nuxt.com/docs/4.x/directory-structure/tsconfig#extending-typescript-configuration)

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