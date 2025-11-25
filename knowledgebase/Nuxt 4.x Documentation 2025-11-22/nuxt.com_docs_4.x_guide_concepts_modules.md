---
url: "https://nuxt.com/docs/4.x/guide/concepts/modules"
title: "Modules · Nuxt Concepts v4"
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
3. [Key Concepts](https://nuxt.com/docs/4.x/guide/concepts)

# Modules

Copy page

Nuxt provides a module system to extend the framework core and simplify integrations.

## [Exploring Nuxt Modules](https://nuxt.com/docs/4.x/guide/concepts/modules\#exploring-nuxt-modules)

When developing production-grade applications with Nuxt you might find that the framework's core functionality is not enough. Nuxt can be extended with configuration options and plugins, but maintaining these customizations across multiple projects can be tedious, repetitive and time-consuming. On the other hand, supporting every project's needs out of the box would make Nuxt very complex and hard to use.

This is one of the reasons why Nuxt provides a module system that makes it possible to extend the core. Nuxt modules are async functions that sequentially run when starting Nuxt in development mode using [`nuxt dev`](https://nuxt.com/docs/4.x/api/commands/dev) or building a project for production with [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build). They can override templates, configure webpack loaders, add CSS libraries, and perform many other useful tasks.

Best of all, Nuxt modules can be distributed in npm packages. This makes it possible for them to be reused across projects and shared with the community, helping create an ecosystem of high-quality add-ons.

[Modules](https://nuxt.com/modules) Explore Nuxt Modules

## [Add Nuxt Modules](https://nuxt.com/docs/4.x/guide/concepts/modules\#add-nuxt-modules)

Once you have installed the modules you can add them to your [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file under the `modules` property. Module developers usually provide additional steps and details for usage.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: [\
    // Using package name (recommended usage)\
    '@nuxtjs/example',\
\
    // Load a local module\
    './modules/example',\
\
    // Add module with inline-options\
    ['./modules/example', { token: '123' }],\
\
    // Inline module definition\
    async (inlineOptions, nuxt) => { },\
  ],
})
```

Nuxt modules are now build-time-only, and the `buildModules` property used in Nuxt 2 is deprecated in favor of `modules`.

## [Create a Nuxt Module](https://nuxt.com/docs/4.x/guide/concepts/modules\#create-a-nuxt-module)

Everyone has the opportunity to develop modules and we cannot wait to see what you will build.

[Module Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules) Read more in Module Author Guide.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/1.concepts/5.modules.md)

[Server Engine\\
\\
Nuxt is powered by a new server engine: Nitro.](https://nuxt.com/docs/4.x/guide/concepts/server-engine) [TypeScript\\
\\
Nuxt is fully typed and provides helpful shortcuts to ensure you have access to accurate type information when you are coding.](https://nuxt.com/docs/4.x/guide/concepts/typescript)

On this page

On this page

- [Exploring Nuxt Modules](https://nuxt.com/docs/4.x/guide/concepts/modules#exploring-nuxt-modules)
- [Add Nuxt Modules](https://nuxt.com/docs/4.x/guide/concepts/modules#add-nuxt-modules)
- [Create a Nuxt Module](https://nuxt.com/docs/4.x/guide/concepts/modules#create-a-nuxt-module)

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