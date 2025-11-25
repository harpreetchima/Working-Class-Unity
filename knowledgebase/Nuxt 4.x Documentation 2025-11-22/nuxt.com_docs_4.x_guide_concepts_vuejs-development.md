---
url: "https://nuxt.com/docs/4.x/guide/concepts/vuejs-development"
title: "Vue.js Development · Nuxt Concepts v4"
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

# Vue.js Development

Copy page

Nuxt uses Vue.js and adds features such as component auto-imports, file-based routing and composables for an SSR-friendly usage.

Nuxt integrates Vue 3, the new major release of Vue that enables new patterns for Nuxt users.

While an in-depth knowledge of Vue is not required to use Nuxt, we recommend that you read the documentation and go through some of the examples on [vuejs.org](https://vuejs.org/).

Nuxt has always used Vue as a frontend framework.

We chose to build Nuxt on top of Vue for these reasons:

- The reactivity model of Vue, where a change in data automatically triggers a change in the interface.
- The component-based templating, while keeping HTML as the common language of the web, enables intuitive patterns to keep your interface consistent, yet powerful.
- From small projects to large web applications, Vue keeps performing well at scale to ensure that your application keeps delivering value to your users.

## [Vue with Nuxt](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#vue-with-nuxt)

### [Single File Components](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#single-file-components)

[Vue’s single-file components](https://vuejs.org/guide/scaling-up/sfc) (SFC or `*.vue` files) encapsulate the markup (`<template>`), logic (`<script>`) and styling (`<style>`) of a Vue component. Nuxt provides a zero-config experience for SFCs with [Hot Module Replacement](https://vite.dev/guide/features#hot-module-replacement) that offers a seamless developer experience.

### [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#auto-imports)

Every Vue component created in the [`app/components/`](https://nuxt.com/docs/4.x/directory-structure/app/components) directory of a Nuxt project will be available in your project without having to import it. If a component is not used anywhere, your production’s code will not include it.

[Docs > 4 X > Guide > Concepts > Auto Imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports) Read more in Docs > 4 X > Guide > Concepts > Auto Imports.

### [Vue Router](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#vue-router)

Most applications need multiple pages and a way to navigate between them. This is called **routing**. Nuxt uses an [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory and naming conventions to directly create routes mapped to your files using the official [Vue Router library](https://router.vuejs.org/).

[Docs > 4 X > Getting Started > Routing](https://nuxt.com/docs/4.x/getting-started/routing) Read more in Docs > 4 X > Getting Started > Routing.

Read and edit a live example in [Docs > 4 X > Examples > Features > Auto Imports](https://nuxt.com/docs/4.x/examples/features/auto-imports).

## [Differences with Nuxt 2 / Vue 2](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#differences-with-nuxt-2-vue-2)

Nuxt 3+ is based on Vue 3. The new major Vue version introduces several changes that Nuxt takes advantage of:

- Better performance
- Composition API
- TypeScript support

### [Faster Rendering](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#faster-rendering)

The Vue Virtual DOM (VDOM) has been rewritten from the ground up and allows for better rendering performance. On top of that, when working with compiled Single-File Components, the Vue compiler can further optimize them at build time by separating static and dynamic markup.

This results in faster first rendering (component creation) and updates, and less memory usage. In Nuxt 3, it enables faster server-side rendering as well.

### [Smaller Bundle](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#smaller-bundle)

With Vue 3 and Nuxt 3, a focus has been put on bundle size reduction. With version 3, most of Vue’s functionality, including template directives and built-in components, is tree-shakable. Your production bundle will not include them if you don’t use them.

This way, a minimal Vue 3 application can be reduced to 12 kb gzipped.

### [Composition API](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#composition-api)

The only way to provide data and logic to components in Vue 2 was through the Options API, which allows you to return data and methods to a template with pre-defined properties like `data` and `methods`:

```vue
<script>
export default {
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    increment () {
      this.count++
    },
  },
}
</script>
```

The [Composition API](https://vuejs.org/guide/extras/composition-api-faq) introduced in Vue 3 is not a replacement of the Options API, but it enables better logic reuse throughout an application, and is a more natural way to group code by concern in complex components.

Used with the `setup` keyword in the `<script>` definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:

components/Counter.vue

```vue
<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++
</script>
```

The goal of Nuxt is to provide a great developer experience around the Composition API.

- Use auto-imported [Reactivity functions](https://vuejs.org/api/reactivity-core) from Vue and Nuxt [built-in composables](https://nuxt.com/docs/4.x/api/composables/use-async-data).
- Write your own auto-imported reusable functions in the [`app/composables/` directory](https://nuxt.com/docs/4.x/directory-structure/app/composables).

### [TypeScript Support](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development\#typescript-support)

Both Vue 3 and Nuxt 3+ are written in TypeScript. A fully typed codebase prevents mistakes and documents APIs usage. This doesn’t mean that you have to write your application in TypeScript to take advantage of it. With Nuxt 3, you can opt-in by renaming your file from `.js` to `.ts` , or add `<script setup lang="ts">` in a component.

[Docs > 4 X > Guide > Concepts > Typescript](https://nuxt.com/docs/4.x/guide/concepts/typescript) Read the details about TypeScript in Nuxt

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/1.concepts/10.vuejs-development.md)

On this page

On this page

- [Vue with Nuxt](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#vue-with-nuxt)
  - [Single File Components](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#single-file-components)
  - [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#auto-imports)
  - [Vue Router](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#vue-router)
- [Differences with Nuxt 2 / Vue 2](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#differences-with-nuxt-2-vue-2)
  - [Faster Rendering](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#faster-rendering)
  - [Smaller Bundle](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#smaller-bundle)
  - [Composition API](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#composition-api)
  - [TypeScript Support](https://nuxt.com/docs/4.x/guide/concepts/vuejs-development#typescript-support)

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