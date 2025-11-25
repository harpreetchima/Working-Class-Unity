---
url: "https://nuxt.com/docs/4.x/bridge/nitro"
title: "Migrate to Nuxt Bridge: Nitro v4"
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

# Nitro

Copy page

Activate Nitro to your Nuxt 2 application with Nuxt Bridge.

## [Remove Modules](https://nuxt.com/docs/4.x/bridge/nitro\#remove-modules)

- Remove `@nuxt/nitro`: Bridge injects same functionality

## [Update Config](https://nuxt.com/docs/4.x/bridge/nitro\#update-config)

nuxt.config.ts

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: true,
  },
})
```

## [Update Your Scripts](https://nuxt.com/docs/4.x/bridge/nitro\#update-your-scripts)

You will also need to update your scripts within your `package.json` to reflect the fact that Nuxt will now produce a Nitro server as build output.

### [Install Nuxi](https://nuxt.com/docs/4.x/bridge/nitro\#install-nuxi)

Install `nuxi` as a development dependency:

npmyarnpnpmbun

```bash
npm install -D nuxi
```

```bash
yarn add --dev nuxi
```

```bash
pnpm add -D nuxi
```

```bash
bun add -D nuxi
```

### [Nuxi](https://nuxt.com/docs/4.x/bridge/nitro\#nuxi)

Nuxt 3 introduced the new Nuxt CLI command [`nuxi`](https://nuxt.com/docs/4.x/api/commands/add). Update your scripts as follows to leverage the better support from Nuxt Bridge:

```diff
{
  "scripts": {
-   "dev": "nuxt",
+   "dev": "nuxi dev",
-   "build": "nuxt build",
+   "build": "nuxi build",
-   "start": "nuxt start",
+   "start": "nuxi preview"
  }
}
```

If `nitro: false`, use the `nuxt2` command.

### [Static Target](https://nuxt.com/docs/4.x/bridge/nitro\#static-target)

If you have set `target: 'static'` in your `nuxt.config` then you need to ensure that you update your build script to be `nuxi generate`.

package.json

```json
{
  "scripts": {
    "build": "nuxi generate"
  }
}
```

### [Server Target](https://nuxt.com/docs/4.x/bridge/nitro\#server-target)

For all other situations, you can use the `nuxi build` command.

package.json

```json
{
  "scripts": {
    "build": "nuxi build",
    "start": "nuxi preview"
  }
}
```

## [Exclude Built Nitro Folder From Git](https://nuxt.com/docs/4.x/bridge/nitro\#exclude-built-nitro-folder-from-git)

Add the folder `.output` to the `.gitignore` file.

## [Ensure Everything Goes Well](https://nuxt.com/docs/4.x/bridge/nitro\#ensure-everything-goes-well)

✔️ Try with `nuxi dev` and `nuxi build` (or `nuxi generate`) to see if everything goes well.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/8.nitro.md)

[Runtime Config\\
\\
Nuxt provides a runtime config API to expose configuration and secrets within your application.](https://nuxt.com/docs/4.x/bridge/runtime-config) [Vite\\
\\
Activate Vite to your Nuxt 2 application with Nuxt Bridge.](https://nuxt.com/docs/4.x/bridge/vite)

On this page

On this page

- [Remove Modules](https://nuxt.com/docs/4.x/bridge/nitro#remove-modules)
- [Update Config](https://nuxt.com/docs/4.x/bridge/nitro#update-config)
- [Update Your Scripts](https://nuxt.com/docs/4.x/bridge/nitro#update-your-scripts)
  - [Install Nuxi](https://nuxt.com/docs/4.x/bridge/nitro#install-nuxi)
  - [Nuxi](https://nuxt.com/docs/4.x/bridge/nitro#nuxi)
  - [Static Target](https://nuxt.com/docs/4.x/bridge/nitro#static-target)
  - [Server Target](https://nuxt.com/docs/4.x/bridge/nitro#server-target)
- [Exclude Built Nitro Folder From Git](https://nuxt.com/docs/4.x/bridge/nitro#exclude-built-nitro-folder-from-git)
- [Ensure Everything Goes Well](https://nuxt.com/docs/4.x/bridge/nitro#ensure-everything-goes-well)

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