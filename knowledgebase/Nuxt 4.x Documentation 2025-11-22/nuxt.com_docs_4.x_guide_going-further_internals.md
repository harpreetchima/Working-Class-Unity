---
url: "https://nuxt.com/docs/4.x/guide/going-further/internals"
title: "How Nuxt Works? · Nuxt Advanced v4"
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

# How Nuxt Works?

Copy page

Nuxt is a minimal but highly customizable framework to build web applications.

This guide helps you better understand Nuxt internals to develop new solutions and module integrations on top of Nuxt.

## [The Nuxt Interface](https://nuxt.com/docs/4.x/guide/going-further/internals\#the-nuxt-interface)

When you start Nuxt in development mode with [`nuxt dev`](https://nuxt.com/docs/4.x/api/commands/dev) or building a production application with [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build),
a common context will be created, referred to as `nuxt` internally. It holds normalized options merged with `nuxt.config` file,
some internal state, and a powerful [hooking system](https://nuxt.com/docs/4.x/api/advanced/hooks) powered by [unjs/hookable](https://github.com/unjs/hookable)
allowing different components to communicate with each other. You can think of it as **Builder Core**.

This context is globally available to be used with [Nuxt Kit](https://nuxt.com/docs/4.x/guide/going-further/kit) composables.
Therefore only one instance of Nuxt is allowed to run per process.

To extend the Nuxt interface and hook into different stages of the build process, we can use [Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/modules).

For more details, check out [the source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/core/nuxt.ts).

## [The NuxtApp Interface](https://nuxt.com/docs/4.x/guide/going-further/internals\#the-nuxtapp-interface)

When rendering a page in the browser or on the server, a shared context will be created, referred to as `nuxtApp`.
This context keeps vue instance, runtime hooks, and internal states like ssrContext and payload for hydration.
You can think of it as **Runtime Core**.

This context can be accessed using [`useNuxtApp()`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) composable within Nuxt plugins and `<script setup>` and vue composables.
Global usage is possible for the browser but not on the server, to avoid sharing context between users.

Since [`useNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) throws an exception if context is currently unavailable, if your composable does not always require `nuxtApp`, you can use [`tryUseNuxtApp`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#tryusenuxtapp) instead, which will return `null` instead of throwing an exception.

To extend the `nuxtApp` interface and hook into different stages or access contexts, we can use [Nuxt Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins).

Check [Nuxt App](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) for more information about this interface.

`nuxtApp` has the following properties:

```ts
interface NuxtApp {
  vueApp // the global Vue application: https://vuejs.org/api/application.html#application-api

  versions // an object containing Nuxt and Vue versions

  // These let you call and add runtime NuxtApp hooks
  // https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts#L18
  hooks
  hook
  callHook

  // Only accessible on server-side
  ssrContext: {
    url
    req
    res
    runtimeConfig
    noSSR
  }

  // This will be stringified and passed from server to client
  payload: {
    serverRendered: true
    data: {}
    state: {}
  }

  provide: (name: string, value: any) => void
}
```

For more details, check out [the source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts).

## [Runtime Context vs. Build Context](https://nuxt.com/docs/4.x/guide/going-further/internals\#runtime-context-vs-build-context)

Nuxt builds and bundles project using Node.js but also has a runtime side.

While both areas can be extended, that runtime context is isolated from build-time. Therefore, they are not supposed to share state, code, or context other than runtime configuration!

`nuxt.config` and [Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/modules) can be used to extend the build context, and [Nuxt Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) can be used to extend runtime.

When building an application for production, `nuxt build` will generate a standalone build in the `.output` directory, independent of `nuxt.config` and [Nuxt modules](https://nuxt.com/docs/4.x/guide/going-further/modules).

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/1.internals.md)

On this page

On this page

- [The Nuxt Interface](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxt-interface)
- [The NuxtApp Interface](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxtapp-interface)
- [Runtime Context vs. Build Context](https://nuxt.com/docs/4.x/guide/going-further/internals#runtime-context-vs-build-context)

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