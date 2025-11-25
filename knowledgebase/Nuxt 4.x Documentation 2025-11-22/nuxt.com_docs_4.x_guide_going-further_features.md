---
url: "https://nuxt.com/docs/4.x/guide/going-further/features"
title: "Features · Nuxt Advanced v4"
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

# Features

Copy page

Enable or disable optional Nuxt features to unlock new possibilities.

Some features of Nuxt are available on an opt-in basis, or can be disabled based on your needs.

## [`features`](https://nuxt.com/docs/4.x/guide/going-further/features\#features)

### [devLogs](https://nuxt.com/docs/4.x/guide/going-further/features\#devlogs)

Stream server logs to the client as you are developing. These logs can be handled in the `dev:ssr-logs` hook.

By default, this is enabled in development (when test mode is not active).

If set to `silent`, the logs will not be printed to the browser console.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  features: {
    devLogs: true,
  },
})
```

### [inlineStyles](https://nuxt.com/docs/4.x/guide/going-further/features\#inlinestyles)

Inlines styles when rendering HTML. This is currently available only when using Vite.

You can also pass a function that receives the path of a Vue component and returns a boolean indicating whether to inline the styles for that component.

It defaults to `(id) => id.includes('.vue')`.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  features: {
    inlineStyles: false, // or a function to determine inlining
  },
})
```

### [noScripts](https://nuxt.com/docs/4.x/guide/going-further/features\#noscripts)

Turn off rendering of Nuxt scripts and JavaScript resource hints. Can also be configured granularly within `routeRules`.

You can also disable scripts more granularly within `routeRules`.

If set to 'production' or `true`, JavaScript will be disabled in production mode only. If set to 'all', JavaScript will be disabled in both development and production modes.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  features: {
    noScripts: true, // or 'production' | 'all' | false
  },
})
```

## [`future`](https://nuxt.com/docs/4.x/guide/going-further/features\#future)

There is also a `future` namespace for early opting-in to new features that will become default in a future (possibly major) version of the framework.

### [compatibilityVersion](https://nuxt.com/docs/4.x/guide/going-further/features\#compatibilityversion)

This enables early access to Nuxt features or flags.

Setting `compatibilityVersion` to `5` changes defaults throughout your Nuxt configuration to opt in to Nuxt v5 behaviour, including enabling the [Vite Environment API](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#viteenvironmentapi).

```ts
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },
})
```

[Docs > 4 X > Getting Started > Upgrade#testing Nuxt 5](https://nuxt.com/docs/4.x/getting-started/upgrade#testing-nuxt-5) Learn more about testing Nuxt 5.

### [multiApp](https://nuxt.com/docs/4.x/guide/going-further/features\#multiapp)

This enables early access to the experimental multi-app support. You can follow the [tracker issue #21635](https://github.com/nuxt/nuxt/issues/21635) to see the progress of multi-app support in Nuxt.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  future: {
    multiApp: true,
  },
})
```

### [typescriptBundlerResolution](https://nuxt.com/docs/4.x/guide/going-further/features\#typescriptbundlerresolution)

This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting for frameworks like Nuxt and [Vite](https://vite.dev/guide/performance#reduce-resolve-operations).

It improves type support when using modern libraries with `exports`.

See [the original TypeScript pull request](https://github.com/microsoft/TypeScript/pull/51669).

You can set it to false to use the legacy 'Node' mode, which is the default for TypeScript.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  future: {
    typescriptBundlerResolution: false,
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/1.features.md)

[Experimental Features\\
\\
Enable Nuxt experimental features to unlock new possibilities.](https://nuxt.com/docs/4.x/guide/going-further/experimental-features) [Runtime Config\\
\\
Nuxt provides a runtime config API to expose configuration and secrets within your application.](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)

On this page

On this page

- [features](https://nuxt.com/docs/4.x/guide/going-further/features#features)
  - [devLogs](https://nuxt.com/docs/4.x/guide/going-further/features#devlogs)
  - [inlineStyles](https://nuxt.com/docs/4.x/guide/going-further/features#inlinestyles)
  - [noScripts](https://nuxt.com/docs/4.x/guide/going-further/features#noscripts)
- [future](https://nuxt.com/docs/4.x/guide/going-further/features#future)
  - [compatibilityVersion](https://nuxt.com/docs/4.x/guide/going-further/features#compatibilityversion)
  - [multiApp](https://nuxt.com/docs/4.x/guide/going-further/features#multiapp)
  - [typescriptBundlerResolution](https://nuxt.com/docs/4.x/guide/going-further/features#typescriptbundlerresolution)

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