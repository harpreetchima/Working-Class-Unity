---
url: "https://nuxt.com/docs/4.x/bridge/overview"
title: "Migrate to Nuxt Bridge: Overview v4"
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

- [Overview](https://nuxt.com/docs/4.x/bridge/overview)
- [Configuration](https://nuxt.com/docs/4.x/bridge/configuration)
- [TypeScript](https://nuxt.com/docs/4.x/bridge/typescript)
- [Legacy Composition API](https://nuxt.com/docs/4.x/bridge/bridge-composition-api)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)
- [New Composition API](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)
- [Meta Tags](https://nuxt.com/docs/4.x/bridge/meta)
- [Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config)
- [Nitro](https://nuxt.com/docs/4.x/bridge/nitro)
- [Vite](https://nuxt.com/docs/4.x/bridge/vite)

1. [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
3. [Migrate to Nuxt Bridge](https://nuxt.com/docs/4.x/bridge)

# Overview

Copy page

Reduce the differences with Nuxt 3 and reduce the burden of migration to Nuxt 3.

If you're starting a fresh Nuxt 3 project, please skip this section and go to [Nuxt 3 Installation](https://nuxt.com/docs/4.x/getting-started/introduction).

Nuxt Bridge provides identical features to Nuxt 3 ( [docs](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)) but there are some limitations, notably that [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) composables are not available. Please read the rest of this page for details.

Bridge is a forward-compatibility layer that allows you to experience many of the new Nuxt 3 features by simply installing and enabling a Nuxt module.

Using Nuxt Bridge, you can make sure your project is (almost) ready for Nuxt 3 and you can gradually proceed with the transition to Nuxt 3.

## [First Step](https://nuxt.com/docs/4.x/bridge/overview\#first-step)

### [Upgrade Nuxt 2](https://nuxt.com/docs/4.x/bridge/overview\#upgrade-nuxt-2)

Make sure your dev server (`nuxt dev`) isn't running, remove any package lock files (`package-lock.json` and `yarn.lock`), and install the latest Nuxt 2 version:

package.json

```diff
- "nuxt": "^2.16.3"
+ "nuxt": "^2.17.3"
```

Then, reinstall your dependencies:

npmyarnpnpmbun

```bash
npm install
```

```bash
yarn install
```

```bash
pnpm install
```

```bash
bun install
```

Once the installation is complete, make sure both development and production builds are working as expected before proceeding.

### [Install Nuxt Bridge](https://nuxt.com/docs/4.x/bridge/overview\#install-nuxt-bridge)

Install `@nuxt/bridge` and `nuxi` as development dependencies:

npmyarnpnpmbun

```bash
npm install -D @nuxt/bridge nuxi
```

```bash
yarn add --dev @nuxt/bridge nuxi
```

```bash
pnpm add -D @nuxt/bridge nuxi
```

```bash
bun add -D @nuxt/bridge nuxi
```

### [Update `nuxt.config`](https://nuxt.com/docs/4.x/bridge/overview\#update-nuxtconfig)

Please make sure to avoid any CommonJS syntax such as `module.exports`, `require` or `require.resolve` in your config file. It will soon be deprecated and unsupported.

You can use static `import`, dynamic `import()` and `export default` instead. Using TypeScript by renaming to [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) is also possible and recommended.

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: false,
})
```

### [Update Commands](https://nuxt.com/docs/4.x/bridge/overview\#update-commands)

The `nuxt` command should now be changed to the `nuxt2` command.

```diff
{
  "scripts": {
-   "dev": "nuxt",
+   "dev": "nuxt2",
-   "build": "nuxt build",
+   "build": "nuxt2 build",
-   "start": "nuxt start",
+   "start": "nuxt2 start"
  }
}
```

Try running `nuxt2` once here. You will see that the application works as before.

(If 'bridge' is set to false, your application will operate without any changes as before.)

## [Upgrade Steps](https://nuxt.com/docs/4.x/bridge/overview\#upgrade-steps)

With Nuxt Bridge, the migration to Nuxt 3 can proceed in steps.
The below `Upgrade Steps` does not need to be done all at once.

- [TypeScript](https://nuxt.com/docs/4.x/bridge/typescript)
- [Migrate Legacy Composition API](https://nuxt.com/docs/4.x/bridge/bridge-composition-api)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)
- [Migrate New Composition API](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)
- [Meta Tags](https://nuxt.com/docs/4.x/bridge/meta)
- [Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config)
- [Nitro](https://nuxt.com/docs/4.x/bridge/nitro)
- [Vite](https://nuxt.com/docs/4.x/bridge/vite)

## [Migrate from CommonJS to ESM](https://nuxt.com/docs/4.x/bridge/overview\#migrate-from-commonjs-to-esm)

Nuxt 3 natively supports TypeScript and ECMAScript Modules. Please check [Native ES Modules](https://nuxt.com/docs/4.x/guide/concepts/esm) for more info and upgrading.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/1.overview.md)

[Releases\\
\\
Discover the latest releases of Nuxt & Nuxt official modules.](https://nuxt.com/docs/4.x/community/changelog) [Configuration\\
\\
Learn how to configure Nuxt Bridge to your own needs.](https://nuxt.com/docs/4.x/bridge/configuration)

On this page

On this page

- [First Step](https://nuxt.com/docs/4.x/bridge/overview#first-step)
  - [Upgrade Nuxt 2](https://nuxt.com/docs/4.x/bridge/overview#upgrade-nuxt-2)
  - [Install Nuxt Bridge](https://nuxt.com/docs/4.x/bridge/overview#install-nuxt-bridge)
  - [Update nuxt.config](https://nuxt.com/docs/4.x/bridge/overview#update-nuxtconfig)
  - [Update Commands](https://nuxt.com/docs/4.x/bridge/overview#update-commands)
- [Upgrade Steps](https://nuxt.com/docs/4.x/bridge/overview#upgrade-steps)
- [Migrate from CommonJS to ESM](https://nuxt.com/docs/4.x/bridge/overview#migrate-from-commonjs-to-esm)

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