---
url: "https://nuxt.com/docs/4.x/directory-structure/app/composables"
title: "composables · Nuxt Directory Structure v4"
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

# composables

Copy page

Use the composables/ directory to auto-import your Vue composables into your application.

## [Usage](https://nuxt.com/docs/4.x/directory-structure/app/composables\#usage)

**Method 1:** Using named export

app/composables/useFoo.ts

```ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
```

**Method 2:** Using default export

app/composables/use-foo.ts or composables/useFoo.ts

```ts
// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState('foo', () => 'bar')
}
```

**Usage:** You can now use auto imported composable in `.js`, `.ts` and `.vue` files

app/app.vue

```vue
<script setup lang="ts">
const foo = useFoo()
</script>

<template>
  <div>
    {{ foo }}
  </div>
</template>
```

The `app/composables/` directory in Nuxt does not provide any additional reactivity capabilities to your code. Instead, any reactivity within composables is achieved using Vue's Composition API mechanisms, such as ref and reactive. Note that reactive code is also not limited to the boundaries of the `app/composables/` directory. You are free to employ reactivity features wherever they're needed in your application.

[Docs > 4 X > Guide > Concepts > Auto Imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports) Read more in Docs > 4 X > Guide > Concepts > Auto Imports.

Read and edit a live example in [Docs > 4 X > Examples > Features > Auto Imports](https://nuxt.com/docs/4.x/examples/features/auto-imports).

## [Types](https://nuxt.com/docs/4.x/directory-structure/app/composables\#types)

Under the hood, Nuxt auto generates the file `.nuxt/imports.d.ts` to declare the types.

Be aware that you have to run [`nuxt prepare`](https://nuxt.com/docs/4.x/api/commands/prepare), [`nuxt dev`](https://nuxt.com/docs/4.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build) in order to let Nuxt generate the types.

If you create a composable without having the dev server running, TypeScript will throw an error, such as `Cannot find name 'useBar'.`

## [Examples](https://nuxt.com/docs/4.x/directory-structure/app/composables\#examples)

### [Nested Composables](https://nuxt.com/docs/4.x/directory-structure/app/composables\#nested-composables)

You can use a composable within another composable using auto imports:

app/composables/test.ts

```ts
export const useFoo = () => {
  const nuxtApp = useNuxtApp()
  const bar = useBar()
}
```

### [Access plugin injections](https://nuxt.com/docs/4.x/directory-structure/app/composables\#access-plugin-injections)

You can access [plugin injections](https://nuxt.com/docs/4.x/directory-structure/app/plugins#providing-helpers) from composables:

app/composables/test.ts

```ts
export const useHello = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$hello
}
```

## [How Files Are Scanned](https://nuxt.com/docs/4.x/directory-structure/app/composables\#how-files-are-scanned)

Nuxt only scans files at the top level of the [`app/composables/` directory](https://nuxt.com/docs/4.x/directory-structure/app/composables), e.g.:

Directory Structure

```bash
-| composables/
---| index.ts     // scanned
---| useFoo.ts    // scanned
---| nested/
-----| utils.ts   // not scanned
```

Only `app/composables/index.ts` and `app/composables/useFoo.ts` would be searched for imports.

To get auto imports working for nested modules, you could either re-export them (recommended) or configure the scanner to include nested directories:

**Example:** Re-export the composables you need from the `app/composables/index.ts` file:

app/composables/index.ts

```ts
// Enables auto import for this export
export { utils } from './nested/utils.ts'
```

**Example:** Scan nested directories inside the `app/composables/` folder:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  imports: {
    dirs: [\
      // Scan top-level composables\
      '~/composables',\
      // ... or scan composables nested one level deep with a specific name and file extension\
      '~/composables/*/index.{ts,js,mjs,mts}',\
      // ... or scan all composables within given directory\
      '~/composables/**',\
    ],
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/1.app/1.composables.md)

[components\\
\\
The components/ directory is where you put all your Vue components.](https://nuxt.com/docs/4.x/directory-structure/app/components) [layouts\\
\\
Nuxt provides a layouts framework to extract common UI patterns into reusable layouts.](https://nuxt.com/docs/4.x/directory-structure/app/layouts)

On this page

On this page

- [Usage](https://nuxt.com/docs/4.x/directory-structure/app/composables#usage)
- [Types](https://nuxt.com/docs/4.x/directory-structure/app/composables#types)
- [Examples](https://nuxt.com/docs/4.x/directory-structure/app/composables#examples)
  - [Nested Composables](https://nuxt.com/docs/4.x/directory-structure/app/composables#nested-composables)
  - [Access plugin injections](https://nuxt.com/docs/4.x/directory-structure/app/composables#access-plugin-injections)
- [How Files Are Scanned](https://nuxt.com/docs/4.x/directory-structure/app/composables#how-files-are-scanned)

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