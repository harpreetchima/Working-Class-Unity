---
url: "https://nuxt.com/docs/4.x/guide/recipes/vite-plugin"
title: "Using Vite Plugins in Nuxt · Recipes v4"
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

- Key Concepts


- [Rendering Modes](https://nuxt.com/docs/4.x/guide/concepts/rendering)
- [Nuxt Lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle)
- [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)
- [Server Engine](https://nuxt.com/docs/4.x/guide/concepts/server-engine)
- [Modules](https://nuxt.com/docs/4.x/guide/concepts/modules)
- [TypeScript](https://nuxt.com/docs/4.x/guide/concepts/typescript)
- [Code Style](https://nuxt.com/docs/4.x/guide/concepts/code-style)

- Best Practices


- [Nuxt and hydration](https://nuxt.com/docs/4.x/guide/best-practices/hydration)
- [Nuxt Performance](https://nuxt.com/docs/4.x/guide/best-practices/performance)
- [Nuxt Plugins](https://nuxt.com/docs/4.x/guide/best-practices/plugins)

- Working with AI


- [MCP Server](https://nuxt.com/docs/4.x/guide/ai/mcp)
- [LLMs.txt](https://nuxt.com/docs/4.x/guide/ai/llms-txt)

- Recipes


- [Custom Routing](https://nuxt.com/docs/4.x/guide/recipes/custom-routing)
- [Vite Plugins](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin)
- [Custom useFetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)
- [Sessions and Authentication](https://nuxt.com/docs/4.x/guide/recipes/sessions-and-authentication)

- Going Further


- [Custom Events](https://nuxt.com/docs/4.x/guide/going-further/events)
- [Experimental Features](https://nuxt.com/docs/4.x/guide/going-further/experimental-features)
- [Features](https://nuxt.com/docs/4.x/guide/going-further/features)
- [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)
- [Nightly Release Channel](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel)
- [Lifecycle Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks)
- [Module Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules)
- [Nuxt Kit](https://nuxt.com/docs/4.x/guide/going-further/kit)
- [NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app)
- [Authoring Nuxt Layers](https://nuxt.com/docs/4.x/guide/going-further/layers)
- [Debugging](https://nuxt.com/docs/4.x/guide/going-further/debugging)

1. [Guide](https://nuxt.com/docs/4.x/guide)
3. [Recipes](https://nuxt.com/docs/4.x/guide/recipes)

# Using Vite Plugins in Nuxt

Copy page

Learn how to integrate Vite plugins into your Nuxt project.

While Nuxt modules offer extensive functionality, sometimes a specific Vite plugin might meet your needs more directly.

First, we need to install the Vite plugin, for our example, we'll use `@rollup/plugin-yaml`:

npmyarnpnpmbun

```bash
npm install @rollup/plugin-yaml
```

```bash
yarn add @rollup/plugin-yaml
```

```bash
pnpm add @rollup/plugin-yaml
```

```bash
bun add @rollup/plugin-yaml
```

Next, we need to import and add it to our [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file:

nuxt.config.ts

```ts
import yaml from '@rollup/plugin-yaml'

export default defineNuxtConfig({
  vite: {
    plugins: [\
      yaml(),\
    ],
  },
})
```

Now we installed and configured our Vite plugin, we can start using YAML files directly in our project.

For example, we can have a `config.yaml` that stores configuration data and import this data in our Nuxt components:

data/hello.yamlapp/components/Hello.vue

```yaml
greeting: "Hello, Nuxt with Vite!"
```

```vue
<script setup>
import config from '~/data/hello.yaml'
</script>

<template>
  <h1>{{ config.greeting }}</h1>
</template>
```

## [Using Vite Plugins in Nuxt Modules](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin\#using-vite-plugins-in-nuxt-modules)

If you're developing a Nuxt module and need to add Vite plugins, you should use the [`addVitePlugin`](https://nuxt.com/docs/4.x/api/kit/builder#addviteplugin) utility:

modules/my-module.ts

```ts
import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import yaml from '@rollup/plugin-yaml'

export default defineNuxtModule({
  setup () {
    addVitePlugin(yaml())
  },
})
```

For environment-specific plugins in Nuxt 5+, use the `applyToEnvironment()` method:

modules/my-module.ts

```ts
import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addVitePlugin(() => ({
      name: 'my-client-plugin',
      applyToEnvironment (environment) {
        return environment.name === 'client'
      },
      // Plugin configuration
    }))
  },
})
```

If you're writing code that needs to access resolved Vite configuration, you should use the `config` and `configResolved` hooks _within_ your Vite plugin, rather than using Nuxt's `vite:extend`, `vite:extendConfig` and `vite:configResolved`.

[Docs > 4 X > API > Kit > Builder#addviteplugin](https://nuxt.com/docs/4.x/api/kit/builder#addviteplugin) Read more about `addVitePlugin` in the Nuxt Kit documentation.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/4.recipes/2.vite-plugin.md)

[Custom Routing\\
\\
In Nuxt, your routing is defined by the structure of your files inside the pages directory. However, since it uses vue-router under the hood, Nuxt offers you several ways to add custom routes in your project.](https://nuxt.com/docs/4.x/guide/recipes/custom-routing) [Custom useFetch\\
\\
How to create a custom fetcher for calling your external API in Nuxt.](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)

On this page

On this page

- [Using Vite Plugins in Nuxt Modules](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin#using-vite-plugins-in-nuxt-modules)

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