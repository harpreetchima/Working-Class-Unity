---
url: "https://nuxt.com/docs/4.x/directory-structure/shared"
title: "shared · Nuxt Directory Structure v4"
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

# shared

Copy page

Use the shared/ directory to share functionality between the Vue app and the Nitro server.

The `shared/` directory allows you to share code that can be used in both the Vue app and the Nitro server.

The `shared/` directory is available in Nuxt v3.14+.

Code in the `shared/` directory cannot import any Vue or Nitro code.

Watch a video from Vue School on sharing utils and types between app and server

## [Usage](https://nuxt.com/docs/4.x/directory-structure/shared\#usage)

**Method 1:** Named export

shared/utils/capitalize.ts

```ts
export const capitalize = (input: string) => {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}
```

**Method 2:** Default export

shared/utils/capitalize.ts

```ts
export default function (input: string) {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}
```

You can now use [auto-imported](https://nuxt.com/docs/4.x/directory-structure/shared) utilities in your Nuxt app and `server/` directory.

app/app.vue

```vue
<script setup lang="ts">
const hello = capitalize('hello')
</script>

<template>
  <div>
    {{ hello }}
  </div>
</template>
```

server/api/hello.get.ts

```ts
export default defineEventHandler((event) => {
  return {
    hello: capitalize('hello'),
  }
})
```

## [How Files Are Scanned](https://nuxt.com/docs/4.x/directory-structure/shared\#how-files-are-scanned)

Only files in the `shared/utils/` and `shared/types/` directories will be auto-imported. Files nested within subdirectories of these directories will not be auto-imported unless you add these directories to `imports.dirs` and `nitro.imports.dirs`.

The way `shared/utils` and `shared/types` auto-imports work and are scanned is identical to the [`app/composables/`](https://nuxt.com/docs/4.x/directory-structure/app/composables) and [`app/utils/`](https://nuxt.com/docs/4.x/directory-structure/app/utils) directories.

[Docs > 4 X > Directory Structure > App > Composables#how Files Are Scanned](https://nuxt.com/docs/4.x/directory-structure/app/composables#how-files-are-scanned) Read more in Docs > 4 X > Directory Structure > App > Composables#how Files Are Scanned.

Directory Structure

```bash
-| shared/
---| capitalize.ts        # Not auto-imported
---| formatters
-----| lower.ts           # Not auto-imported
---| utils/
-----| lower.ts           # Auto-imported
-----| formatters
-------| upper.ts         # Not auto-imported
---| types/
-----| bar.ts             # Auto-imported
```

Any other files you create in the `shared/` folder must be manually imported using the `#shared` alias (automatically configured by Nuxt):

```ts
// For files directly in the shared directory
import capitalize from '#shared/capitalize'

// For files in nested directories
import lower from '#shared/formatters/lower'

// For files nested in a folder within utils
import upper from '#shared/utils/formatters/upper'
```

This alias ensures consistent imports across your application, regardless of the importing file's location.

[Docs > 4 X > Guide > Concepts > Auto Imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports) Read more in Docs > 4 X > Guide > Concepts > Auto Imports.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/1.shared.md)

[server\\
\\
The server/ directory is used to register API and server handlers to your application.](https://nuxt.com/docs/4.x/directory-structure/server) [.env\\
\\
A .env file specifies your build/dev-time environment variables.](https://nuxt.com/docs/4.x/directory-structure/env)

On this page

On this page

- [Usage](https://nuxt.com/docs/4.x/directory-structure/shared#usage)
- [How Files Are Scanned](https://nuxt.com/docs/4.x/directory-structure/shared#how-files-are-scanned)

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