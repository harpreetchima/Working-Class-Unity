---
url: "https://nuxt.com/docs/4.x/guide/going-further/hooks"
title: "Lifecycle Hooks · Nuxt Advanced v4"
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
3. [Going Further](https://nuxt.com/docs/4.x/guide/going-further)

# Lifecycle Hooks

Copy page

Nuxt provides a powerful hooking system to expand almost every aspect using hooks.

The hooking system is powered by [unjs/hookable](https://github.com/unjs/hookable).

## [Nuxt Hooks (Build Time)](https://nuxt.com/docs/4.x/guide/going-further/hooks\#nuxt-hooks-build-time)

These hooks are available for [Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/modules) and build context.

### [Within `nuxt.config.ts`](https://nuxt.com/docs/4.x/guide/going-further/hooks\#within-nuxtconfigts)

nuxt.config.ts

```ts
export default defineNuxtConfig({
  hooks: {
    close: () => { },
  },
})
```

### [Within Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/hooks\#within-nuxt-modules)

```js
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('close', async () => { })
  },
})
```

[Docs > 4 X > API > Advanced > Hooks#nuxt Hooks Build Time](https://nuxt.com/docs/4.x/api/advanced/hooks#nuxt-hooks-build-time) Explore all available Nuxt hooks.

## [App Hooks (Runtime)](https://nuxt.com/docs/4.x/guide/going-further/hooks\#app-hooks-runtime)

App hooks can be mainly used by [Nuxt Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) to hook into rendering lifecycle but could also be used in Vue composables.

app/plugins/test.ts

```ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    /* your code goes here */
  })
})
```

[Docs > 4 X > API > Advanced > Hooks#app Hooks Runtime](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) Explore all available App hooks.

## [Server Hooks (Runtime)](https://nuxt.com/docs/4.x/guide/going-further/hooks\#server-hooks-runtime)

These hooks are available for [server plugins](https://nuxt.com/docs/4.x/directory-structure/server#server-plugins) to hook into Nitro's runtime behavior.

~/server/plugins/test.ts

```ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    console.log('render:html', html)
    html.bodyAppend.push('<hr>Appended by custom plugin')
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log('render:response', response)
  })
})
```

[Docs > 4 X > API > Advanced > Hooks#nitro App Hooks Runtime Server Side](https://nuxt.com/docs/4.x/api/advanced/hooks#nitro-app-hooks-runtime-server-side) Learn more about available Nitro lifecycle hooks.

## [Adding Custom Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks\#adding-custom-hooks)

You can define your own custom hooks support by extending Nuxt's hook interfaces.

```ts
import type { HookResult } from '@nuxt/schema'

declare module '#app' {
  interface RuntimeNuxtHooks {
    'your-nuxt-runtime-hook': () => HookResult
  }
  interface NuxtHooks {
    'your-nuxt-hook': () => HookResult
  }
}

declare module 'nitropack/types' {
  interface NitroRuntimeHooks {
    'your-nitro-hook': () => void
  }
}
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/2.hooks.md)

[Nightly Release Channel\\
\\
The nightly release channel allows using Nuxt built directly from the latest commits to the repository.](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel) [Module Author Guide\\
\\
Learn how to create a Nuxt Module to integrate, enhance or extend any Nuxt applications.](https://nuxt.com/docs/4.x/guide/going-further/modules)

On this page

On this page

- [Nuxt Hooks (Build Time)](https://nuxt.com/docs/4.x/guide/going-further/hooks#nuxt-hooks-build-time)
  - [Within nuxt.config.ts](https://nuxt.com/docs/4.x/guide/going-further/hooks#within-nuxtconfigts)
  - [Within Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/hooks#within-nuxt-modules)
- [App Hooks (Runtime)](https://nuxt.com/docs/4.x/guide/going-further/hooks#app-hooks-runtime)
- [Server Hooks (Runtime)](https://nuxt.com/docs/4.x/guide/going-further/hooks#server-hooks-runtime)
- [Adding Custom Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks#adding-custom-hooks)

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