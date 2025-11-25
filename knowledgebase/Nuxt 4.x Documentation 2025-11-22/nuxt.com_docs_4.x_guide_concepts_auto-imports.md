---
url: "https://nuxt.com/docs/4.x/guide/concepts/auto-imports"
title: "Auto-imports · Nuxt Concepts v4"
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

# Auto-imports

Copy page

Nuxt auto-imports components, composables, helper functions and Vue APIs.

Nuxt auto-imports components, composables and [Vue.js APIs](https://vuejs.org/api/) to use across your application without explicitly importing them.

app/app.vue

```vue
<script setup lang="ts">
const count = ref(1) // ref is auto-imported
</script>
```

Thanks to its opinionated directory structure, Nuxt can auto-import your [`app/components/`](https://nuxt.com/docs/4.x/directory-structure/app/components), [`app/composables/`](https://nuxt.com/docs/4.x/directory-structure/app/composables) and [`app/utils/`](https://nuxt.com/docs/4.x/directory-structure/app/utils).

Contrary to a classic global declaration, Nuxt preserves typings, IDEs completions and hints, and **only includes what is used in your production code**.

In the docs, every function that is not explicitly imported is auto-imported by Nuxt and can be used as-is in your code. You can find a reference for auto-imported components, composables and utilities in the [API section](https://nuxt.com/docs/4.x/api).

In the [`server`](https://nuxt.com/docs/4.x/directory-structure/server) directory, Nuxt auto-imports exported functions and variables from `server/utils/`.

You can also auto-import functions exported from custom folders or third-party packages by configuring the [`imports`](https://nuxt.com/docs/4.x/api/nuxt-config#imports) section of your `nuxt.config` file.

## [Built-in Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#built-in-auto-imports)

Nuxt auto-imports functions and composables to perform [data fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching), get access to the [app context](https://nuxt.com/docs/4.x/api/composables/use-nuxt-app) and [runtime config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config), manage [state](https://nuxt.com/docs/4.x/getting-started/state-management) or define components and plugins.

```vue
<script setup lang="ts">
/* useFetch() is auto-imported */
const { data, refresh, status } = await useFetch('/api/hello')
</script>
```

Vue exposes Reactivity APIs like `ref` or `computed`, as well as lifecycle hooks and helpers that are auto-imported by Nuxt.

```vue
<script setup lang="ts">
/* ref() and computed() are auto-imported */
const count = ref(1)
const double = computed(() => count.value * 2)
</script>
```

### [Vue and Nuxt Composables](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#vue-and-nuxt-composables)

When you are using the built-in Composition API composables provided by Vue and Nuxt, be aware that many of them rely on being called in the right _context_.

During a component lifecycle, Vue tracks the temporary instance of the current component (and similarly, Nuxt tracks a temporary instance of `nuxtApp`) via a global variable, and then unsets it in the same tick. This is essential when server rendering, both to avoid cross-request state pollution (leaking a shared reference between two users) and to avoid leakage between different components.

That means that (with very few exceptions) you cannot use them outside a Nuxt plugin, Nuxt route middleware or Vue setup function. On top of that, you must use them synchronously - that is, you cannot use `await` before calling a composable, except within `<script setup>` blocks, within the setup function of a component declared with `defineNuxtComponent`, in `defineNuxtPlugin` or in `defineNuxtRouteMiddleware`, where we perform a transform to keep the synchronous context even after the `await`.

If you get an error message like `Nuxt instance is unavailable` then it probably means you are calling a Nuxt composable in the wrong place in the Vue or Nuxt lifecycle.

Watch a video from Alexander Lichter about avoiding the 'Nuxt instance is unavailable' error

When using a composable that requires the Nuxt context inside a non-SFC component, you need to wrap your component with `defineNuxtComponent` instead of `defineComponent`

[Docs > 4 X > Guide > Going Further > Experimental Features#asynccontext](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#asynccontext) Checkout the `asyncContext` experimental feature to use Nuxt composables in async functions.

[https://github.com/nuxt/nuxt/issues/14269#issuecomment-1397352832](https://github.com/nuxt/nuxt/issues/14269#issuecomment-1397352832) See the full explanation in this GitHub comment.

**Example of breaking code:**

composables/example.ts

```ts
// trying to access runtime config outside a composable
const config = useRuntimeConfig()

export const useMyComposable = () => {
  // accessing runtime config here
}
```

**Example of working code:**

composables/example.ts

```ts
export const useMyComposable = () => {
  // Because your composable is called in the right place in the lifecycle,
  // useRuntimeConfig will work here
  const config = useRuntimeConfig()

  // ...
}
```

## [Directory-based Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#directory-based-auto-imports)

Nuxt directly auto-imports files created in defined directories:

- `app/components/` for [Vue components](https://nuxt.com/docs/4.x/directory-structure/app/components).
- `app/composables/` for [Vue composables](https://nuxt.com/docs/4.x/directory-structure/app/composables).
- `app/utils/` for helper functions and other utilities.

Read and edit a live example in [Docs > 4 X > Examples > Features > Auto Imports](https://nuxt.com/docs/4.x/examples/features/auto-imports).

**Auto-imported `ref` and `computed` won't be unwrapped in a component `<template>`.**

This is due to how Vue works with refs that aren't top-level to the template. You can read more about it [in the Vue documentation](https://vuejs.org/guide/essentials/reactivity-fundamentals#caveat-when-unwrapping-in-templates).

### [Explicit Imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#explicit-imports)

Nuxt exposes every auto-import with the `#imports` alias that can be used to make the import explicit if needed:

```vue
<script setup lang="ts">
import { computed, ref } from '#imports'

const count = ref(1)
const double = computed(() => count.value * 2)
</script>
```

### [Disabling Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#disabling-auto-imports)

If you want to disable auto-importing composables and utilities, you can set `imports.autoImport` to `false` in the `nuxt.config` file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
})
```

This will disable auto-imports completely but it's still possible to use [explicit imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#explicit-imports) from `#imports`.

### [Partially Disabling Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#partially-disabling-auto-imports)

If you want framework-specific functions like `ref` to remain auto-imported but wish to disable auto-imports for your own code (e.g., custom composables), you can set the `imports.scan` option to `false` in your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  imports: {
    scan: false,
  },
})
```

With this configuration:

- Framework functions like `ref`, `computed`, or `watch` will still work without needing manual imports.
- Custom code, such as composables, will need to be manually imported in your files.

**Caution:** This setup has certain limitations:

- If you structure your project with layers, you will need to explicitly import the composables from each layer, rather than relying on auto-imports.
- This breaks the layer system’s override feature. If you use `imports.scan: false`, ensure you understand this side-effect and adjust your architecture accordingly.

## [Auto-imported Components](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#auto-imported-components)

Nuxt also automatically imports components from your `~/components` directory, although this is configured separately from auto-importing composables and utility functions.

[Docs > 4 X > Directory Structure > App > Components](https://nuxt.com/docs/4.x/directory-structure/app/components) Read more in Docs > 4 X > Directory Structure > App > Components.

To disable auto-importing components from your own `~/components` directory, you can set `components.dirs` to an empty array (though note that this will not affect components added by modules).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  components: {
    dirs: [],
  },
})
```

## [Auto-import from Third-Party Packages](https://nuxt.com/docs/4.x/guide/concepts/auto-imports\#auto-import-from-third-party-packages)

Nuxt also allows auto-importing from third-party packages.

If you are using the Nuxt module for that package, it is likely that the module has already configured auto-imports for that package.

For example, you could enable the auto-import of the `useI18n` composable from the `vue-i18n` package like this:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  imports: {
    presets: [\
      {\
        from: 'vue-i18n',\
        imports: ['useI18n'],\
      },\
    ],
  },
})
```

Watch a video from Alexander Lichter on how to easily set up custom auto imports

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/1.concepts/3.auto-imports.md)

[Nuxt Lifecycle\\
\\
Understanding the lifecycle of Nuxt applications can help you gain deeper insights into how the framework operates, especially for both server-side and client-side rendering.](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle) [Server Engine\\
\\
Nuxt is powered by a new server engine: Nitro.](https://nuxt.com/docs/4.x/guide/concepts/server-engine)

On this page

On this page

- [Built-in Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#built-in-auto-imports)
  - [Vue and Nuxt Composables](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#vue-and-nuxt-composables)
- [Directory-based Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#directory-based-auto-imports)
  - [Explicit Imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#explicit-imports)
  - [Disabling Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#disabling-auto-imports)
  - [Partially Disabling Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#partially-disabling-auto-imports)
- [Auto-imported Components](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#auto-imported-components)
- [Auto-import from Third-Party Packages](https://nuxt.com/docs/4.x/guide/concepts/auto-imports#auto-import-from-third-party-packages)

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