---
url: "https://nuxt.com/docs/4.x/migration/module-authors"
title: "Migrate to Nuxt 3: Modules v4"
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

# Modules

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 modules.

## [Module Compatibility](https://nuxt.com/docs/4.x/migration/module-authors\#module-compatibility)

Nuxt 3 has a basic backward compatibility layer for Nuxt 2 modules using `@nuxt/kit` auto wrappers. But there are usually steps to follow to make modules compatible with Nuxt 3 and sometimes, using Nuxt Bridge is required for cross-version compatibility.

We have prepared a [Dedicated Guide](https://nuxt.com/docs/4.x/guide/going-further/modules) for authoring Nuxt 3 ready modules using `@nuxt/kit`. Currently best migration path is to follow it and rewrite your modules. Rest of this guide includes preparation steps if you prefer to avoid a full rewrite yet making modules compatible with Nuxt 3.

Explore Nuxt 3 compatible modules.

### [Plugin Compatibility](https://nuxt.com/docs/4.x/migration/module-authors\#plugin-compatibility)

Nuxt 3 plugins are **not** fully backward compatible with Nuxt 2.

[Docs > 4 X > Directory Structure > App > Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) Read more in Docs > 4 X > Directory Structure > App > Plugins.

### [Vue Compatibility](https://nuxt.com/docs/4.x/migration/module-authors\#vue-compatibility)

Plugins or components using the Composition API need exclusive Vue 2 or Vue 3 support.

By using [vue-demi](https://github.com/vueuse/vue-demi) they should be compatible with both Nuxt 2 and 3.

## [Module Migration](https://nuxt.com/docs/4.x/migration/module-authors\#module-migration)

When Nuxt 3 users add your module, you will not have access to the module container (`this.*`) so you will need to use utilities from `@nuxt/kit` to access the container functionality.

### [Test with `@nuxt/bridge`](https://nuxt.com/docs/4.x/migration/module-authors\#test-with-nuxtbridge)

Migrating to `@nuxt/bridge` is the first and most important step for supporting Nuxt 3.

If you have a fixture or example in your module, add `@nuxt/bridge` package to its config (see [example](https://nuxt.com/docs/4.x/bridge/overview#update-nuxtconfig))

### [Migrate from CommonJS to ESM](https://nuxt.com/docs/4.x/migration/module-authors\#migrate-from-commonjs-to-esm)

Nuxt 3 natively supports TypeScript and ECMAScript Modules. Please check [Native ES Modules](https://nuxt.com/docs/4.x/guide/concepts/esm) for more info and upgrading.

### [Ensure Plugins Default Export](https://nuxt.com/docs/4.x/migration/module-authors\#ensure-plugins-default-export)

If you inject a Nuxt plugin that does not have `export default` (such as global Vue plugins), ensure you add `export default () => { }` to the end of it.

BeforeAfter

```js
// ~/plugins/vuelidate.js
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
```

```js
// ~/plugins/vuelidate.js
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

export default () => { }
```

### [Avoid Runtime Modules](https://nuxt.com/docs/4.x/migration/module-authors\#avoid-runtime-modules)

With Nuxt 3, Nuxt is now a build-time-only dependency, which means that modules shouldn't attempt to hook into the Nuxt runtime.

Your module should work even if it's only added to [`buildModules`](https://nuxt.com/docs/4.x/api/nuxt-config#runtimeconfig) (instead of `modules`). For example:

- Avoid updating `process.env` within a Nuxt module and reading by a Nuxt plugin; use [`runtimeConfig`](https://nuxt.com/docs/4.x/api/nuxt-config#runtimeconfig) instead.
- (\*) Avoid depending on runtime hooks like `vue-renderer:*` for production
- (\*) Avoid adding `serverMiddleware` by importing them inside the module. Instead, add them by referencing a file path so that they are independent of the module's context

(\*) Unless it is for `nuxt dev` purpose only and guarded with `if (nuxt.options.dev) { }`.

Continue reading about Nuxt 3 modules in the [Modules Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules).

### [Use TypeScript (Optional)](https://nuxt.com/docs/4.x/migration/module-authors\#use-typescript-optional)

While it is not essential, most of the Nuxt ecosystem is shifting to use TypeScript, so it is highly recommended to consider migration.

You can start migration by renaming `.js` files, to `.ts`. TypeScript is designed to be progressive!

You can use TypeScript syntax for Nuxt 2 and 3 modules and plugins without any extra dependencies.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/20.module-authors.md)

[Configuration\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 new configuration.](https://nuxt.com/docs/4.x/migration/configuration) [Auto Imports\\
\\
Nuxt 3 adopts a minimal friction approach, meaning wherever possible components and composables are auto-imported.](https://nuxt.com/docs/4.x/migration/auto-imports)

On this page

On this page

- [Module Compatibility](https://nuxt.com/docs/4.x/migration/module-authors#module-compatibility)
  - [Plugin Compatibility](https://nuxt.com/docs/4.x/migration/module-authors#plugin-compatibility)
  - [Vue Compatibility](https://nuxt.com/docs/4.x/migration/module-authors#vue-compatibility)
- [Module Migration](https://nuxt.com/docs/4.x/migration/module-authors#module-migration)
  - [Test with @nuxt/bridge](https://nuxt.com/docs/4.x/migration/module-authors#test-with-nuxtbridge)
  - [Migrate from CommonJS to ESM](https://nuxt.com/docs/4.x/migration/module-authors#migrate-from-commonjs-to-esm)
  - [Ensure Plugins Default Export](https://nuxt.com/docs/4.x/migration/module-authors#ensure-plugins-default-export)
  - [Avoid Runtime Modules](https://nuxt.com/docs/4.x/migration/module-authors#avoid-runtime-modules)
  - [Use TypeScript (Optional)](https://nuxt.com/docs/4.x/migration/module-authors#use-typescript-optional)

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