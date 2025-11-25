---
url: "https://nuxt.com/docs/4.x/guide/going-further/nuxt-app"
title: "NuxtApp · Nuxt Advanced v4"
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

# NuxtApp

[Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts)

Copy page

In Nuxt, you can access runtime app context within composables, components and plugins.

In Nuxt, you can access runtime app context within composables, components and plugins.

[https://v2.nuxt.com/docs/internals-glossary/context/#the-context](https://v2.nuxt.com/docs/internals-glossary/context/#the-context) In Nuxt 2, this was referred to as **Nuxt context**.

## [Nuxt App Interface](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app\#nuxt-app-interface)

[Docs > 4 X > Guide > Going Further > Internals#the Nuxtapp Interface](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxtapp-interface) Jump over the `NuxtApp` interface documentation.

## [The Nuxt Context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app\#the-nuxt-context)

Many composables and utilities, both built-in and user-made, may require access to the Nuxt instance. This doesn't exist everywhere on your application, because a fresh instance is created on every request.

Currently, the Nuxt context is only accessible in [plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins), [Nuxt hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks), [Nuxt middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware) (if wrapped in `defineNuxtRouteMiddleware`), and [setup functions](https://vuejs.org/api/composition-api-setup) (in pages and components).

If a composable is called without access to the context, you may get an error stating that 'A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function.' In that case, you can also explicitly call functions within this context by using [`nuxtApp.runWithContext`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#runwithcontext).

## [Accessing NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app\#accessing-nuxtapp)

Within composables, plugins and components you can access `nuxtApp` with [`useNuxtApp()`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app):

app/composables/useMyComposable.ts

```ts
export function useMyComposable () {
  const nuxtApp = useNuxtApp()
  // access runtime nuxt app instance
}
```

If your composable does not always need `nuxtApp` or you simply want to check if it is present or not, since [`useNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) throws an exception, you can use [`tryUseNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#tryusenuxtapp) instead.

Plugins also receive `nuxtApp` as the first argument for convenience.

[Docs > 4 X > Directory Structure > App > Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) Read more in Docs > 4 X > Directory Structure > App > Plugins.

## [Providing Helpers](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app\#providing-helpers)

You can provide helpers to be usable across all composables and application. This usually happens within a Nuxt plugin.

```ts
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', name => `Hello ${name}!`)

console.log(nuxtApp.$hello('name')) // Prints "Hello name!"
```

[Docs > 4 X > Directory Structure > App > Plugins#providing Helpers](https://nuxt.com/docs/4.x/directory-structure/app/plugins#providing-helpers) It is possible to inject helpers by returning an object with a `provide` key in plugins.

[https://v2.nuxt.com/docs/directory-structure/plugins/#inject-in-root--context](https://v2.nuxt.com/docs/directory-structure/plugins/#inject-in-root--context) In Nuxt 2 plugins, this was referred to as **inject function**.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/6.nuxt-app.md)

[Nuxt Kit\\
\\
@nuxt/kit provides features for module authors.](https://nuxt.com/docs/4.x/guide/going-further/kit) [Authoring Nuxt Layers\\
\\
Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.](https://nuxt.com/docs/4.x/guide/going-further/layers)

On this page

On this page

- [Nuxt App Interface](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#nuxt-app-interface)
- [The Nuxt Context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context)
- [Accessing NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#accessing-nuxtapp)
- [Providing Helpers](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#providing-helpers)

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