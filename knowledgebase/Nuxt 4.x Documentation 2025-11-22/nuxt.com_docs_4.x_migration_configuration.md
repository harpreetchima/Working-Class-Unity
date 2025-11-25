---
url: "https://nuxt.com/docs/4.x/migration/configuration"
title: "Migrate to Nuxt 3: Configuration v4"
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

# Configuration

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 new configuration.

## [`nuxt.config`](https://nuxt.com/docs/4.x/migration/configuration\#nuxtconfig)

The starting point for your Nuxt app remains your `nuxt.config` file.

Nuxt configuration will be loaded using [`unjs/jiti`](https://github.com/unjs/jiti) and [`unjs/c12`](https://github.com/unjs/c12).

### [Migration](https://nuxt.com/docs/4.x/migration/configuration\#migration)

1. You should migrate to the new `defineNuxtConfig` function that provides a typed configuration schema.






Nuxt 2Nuxt 3





```ts
export default {
     // ...
}
```







```ts
export default defineNuxtConfig({
     // ...
})
```

2. If you were using `router.extendRoutes` you can migrate to the new `pages:extend` hook:






Nuxt 2Nuxt 3





```ts
export default {
     router: {
       extendRoutes (routes) {
         //
       },
     },
}
```







```ts
export default defineNuxtConfig({
     hooks: {
       'pages:extend' (routes) {
         //
       },
     },
})
```

3. If you were using `router.routeNameSplitter` you can achieve same result by updating route name generation logic in the new `pages:extend` hook:






Nuxt 2Nuxt 3





```ts
export default {
     router: {
       routeNameSplitter: '/',
     },
}
```







```ts
import { createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
     hooks: {
       'pages:extend' (routes) {
         const routeNameSplitter = '/'
         const root = createResolver(import.meta.url).resolve('./pages')

         function updateName (routes) {
           if (!routes) {
             return
           }

           for (const route of routes) {
             const relativePath = route.file.substring(root.length + 1)
             route.name = relativePath.slice(0, -4).replace(/\/index$/, '').replace(/\//g, routeNameSplitter)

             updateName(route.children)
           }
         }
         updateName(routes)
       },
     },
})
```


#### [ESM Syntax](https://nuxt.com/docs/4.x/migration/configuration\#esm-syntax)

Nuxt 3 is an [ESM native framework](https://nuxt.com/docs/4.x/guide/concepts/esm). Although [`unjs/jiti`](https://github.com/unjs/jiti) provides semi compatibility when loading `nuxt.config` file, avoid any usage of `require` and `module.exports` in this file.

1. Change `module.exports` to `export default`
2. Change `const lib = require('lib')` to `import lib from 'lib'`

#### [Async Configuration](https://nuxt.com/docs/4.x/migration/configuration\#async-configuration)

In order to make Nuxt loading behavior more predictable, async config syntax is deprecated. Consider using Nuxt hooks for async operations.

#### [Dotenv](https://nuxt.com/docs/4.x/migration/configuration\#dotenv)

Nuxt has built-in support for loading `.env` files. Avoid directly importing it from `nuxt.config`.

## [Modules](https://nuxt.com/docs/4.x/migration/configuration\#modules)

Nuxt and Nuxt Modules are now build-time-only.

### [Migration](https://nuxt.com/docs/4.x/migration/configuration\#migration-1)

1. Move all your `buildModules` into `modules`.
2. Check for Nuxt 3 compatibility of modules.
3. If you have any local modules pointing to a directory you should update this to point to the entry file:

```diff
  export default defineNuxtConfig({
    modules: [\
-     '~/modules/my-module'\
+     '~/modules/my-module/index'\
    ]
  })
```

If you are a module author, you can check out [more information about module compatibility](https://nuxt.com/docs/4.x/migration/module-authors) and [our module author guide](https://nuxt.com/docs/4.x/guide/going-further/modules).

## [Directory Changes](https://nuxt.com/docs/4.x/migration/configuration\#directory-changes)

The `static/` (for storing static assets) has been renamed to `public/`. You can either rename your `static` directory to `public`, or keep the name by setting `dir.public` in your `nuxt.config`.

[Docs > 4 X > Directory Structure > Public](https://nuxt.com/docs/4.x/directory-structure/public) Read more in Docs > 4 X > Directory Structure > Public.

## [TypeScript](https://nuxt.com/docs/4.x/migration/configuration\#typescript)

It will be much easier to migrate your application if you use Nuxt's TypeScript integration. This does not mean you need to write your application in TypeScript, just that Nuxt will provide automatic type hints for your editor.

You can read more about Nuxt's TypeScript support [in the docs](https://nuxt.com/docs/4.x/guide/concepts/typescript).

Nuxt can type-check your app using [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc) with `nuxt typecheck` command.

### [Migration](https://nuxt.com/docs/4.x/migration/configuration\#migration-2)

1. Create a `tsconfig.json` with the following content:


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

2. Run `npx nuxt prepare` to generate the tsconfig files.
3. Install Volar following the instructions in the [docs](https://nuxt.com/docs/4.x/getting-started/installation#prerequisites).

## [Vue Changes](https://nuxt.com/docs/4.x/migration/configuration\#vue-changes)

There are a number of changes to what is recommended Vue best practice, as well as a number of breaking changes between Vue 2 and 3.

It is recommended to read the [Vue 3 migration guide](https://v3-migration.vuejs.org/) and in particular the [breaking changes list](https://v3-migration.vuejs.org/breaking-changes/).

It is not currently possible to use the [Vue 3 migration build](https://v3-migration.vuejs.org/migration-build.html) with Nuxt 3.

## [Vuex](https://nuxt.com/docs/4.x/migration/configuration\#vuex)

Nuxt no longer provides a Vuex integration. Instead, the official Vue recommendation is to use `pinia`, which has built-in Nuxt support via a [Nuxt module](https://pinia.vuejs.org/ssr/nuxt.html). [Find out more about pinia here](https://pinia.vuejs.org/).

A simple way to provide global state management with pinia would be:

Install the [`@pinia/nuxt`](https://nuxt.com/modules/pinia) module:

Terminal

```bash
yarn add pinia @pinia/nuxt
```

Enable the module in your nuxt configuration:

nuxt.config.ts

```ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
})
```

Create a `store` folder at the root of your application:

store/index.ts

```ts
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment () {
      // `this` is the store instance
      this.counter++
    },
  },
})
```

Create a [plugin](https://nuxt.com/docs/4.x/directory-structure/app/plugins) file to globalize your store:

app/plugins/pinia.ts

```ts
import { useMainStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useMainStore($pinia),
    },
  }
})
```

If you want to keep using Vuex, you can manually migrate to Vuex 4 following [these steps](https://vuex.vuejs.org/guide/migrating-to-4-0-from-3-x.html).

Once it's done you will need to add the following plugin to your Nuxt app:

app/plugins/vuex.ts

```ts
import store from '~/store'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
```

For larger apps, this migration can entail a lot of work. If updating Vuex still creates roadblocks, you may want to use the community module: [nuxt3-vuex-module](https://github.com/vedmant/nuxt3-vuex#nuxt3-vuex-module), which should work out of the box.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/2.configuration.md)

[Server\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 server.](https://nuxt.com/docs/4.x/migration/server) [Modules\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 modules.](https://nuxt.com/docs/4.x/migration/module-authors)

On this page

On this page

- [nuxt.config](https://nuxt.com/docs/4.x/migration/configuration#nuxtconfig)
  - [Migration](https://nuxt.com/docs/4.x/migration/configuration#migration)
- [Modules](https://nuxt.com/docs/4.x/migration/configuration#modules)
  - [Migration](https://nuxt.com/docs/4.x/migration/configuration#migration-1)
- [Directory Changes](https://nuxt.com/docs/4.x/migration/configuration#directory-changes)
- [TypeScript](https://nuxt.com/docs/4.x/migration/configuration#typescript)
  - [Migration](https://nuxt.com/docs/4.x/migration/configuration#migration-2)
- [Vue Changes](https://nuxt.com/docs/4.x/migration/configuration#vue-changes)
- [Vuex](https://nuxt.com/docs/4.x/migration/configuration#vuex)

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