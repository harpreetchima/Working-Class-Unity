---
url: "https://nuxt.com/docs/4.x/guide/recipes/custom-routing"
title: "Custom Routing · Recipes v4"
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

# Custom Routing

Copy page

In Nuxt, your routing is defined by the structure of your files inside the pages directory. However, since it uses vue-router under the hood, Nuxt offers you several ways to add custom routes in your project.

## [Adding custom routes](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#adding-custom-routes)

In Nuxt, your routing is defined by the structure of your files inside the [app/pages directory](https://nuxt.com/docs/4.x/directory-structure/app/pages). However, since it uses [vue-router](https://router.vuejs.org/) under the hood, Nuxt offers you several ways to add custom routes in your project.

### [Router Config](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#router-config)

Using [router options](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#router-options), you can optionally override or extend your routes using a function that accepts the scanned routes and returns customized routes.

If it returns `null` or `undefined`, Nuxt will fall back to the default routes (useful to modify input array).

router.options.ts

```ts
import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions#routes
  routes: _routes => [\
    {\
      name: 'home',\
      path: '/',\
      component: () => import('~/pages/home.vue'),\
    },\
  ],
} satisfies RouterConfig
```

Nuxt will not augment any new routes you return from the `routes` function with metadata defined in `definePageMeta` of the component you provide. If you want that to happen, you should use the `pages:extend` hook which is [called at build-time](https://nuxt.com/docs/4.x/api/advanced/hooks#nuxt-hooks-build-time).

### [Pages Hook](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#pages-hook)

You can add, change or remove pages from the scanned routes with the `pages:extend` nuxt hook.

For example, to prevent creating routes for any `.ts` files:

nuxt.config.ts

```ts
import type { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push({
        name: 'profile',
        path: '/profile',
        file: '~/extra-pages/profile.vue',
      })

      // remove routes
      function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    },
  },
})
```

### [Nuxt Module](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#nuxt-module)

If you plan to add a whole set of pages related with a specific functionality, you might want to use a [Nuxt module](https://nuxt.com/modules).

The [Nuxt kit](https://nuxt.com/docs/4.x/guide/going-further/kit) provides a few ways [to add routes](https://nuxt.com/docs/4.x/api/kit/pages):

- [`extendPages`](https://nuxt.com/docs/4.x/api/kit/pages#extendpages) (callback: pages => void)
- [`extendRouteRules`](https://nuxt.com/docs/4.x/api/kit/pages#extendrouterules) (route: string, rule: NitroRouteConfig, options: ExtendRouteRulesOptions)

## [Router Options](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#router-options)

On top of customizing options for [`vue-router`](https://router.vuejs.org/api/interfaces/routeroptions), Nuxt offers [additional options](https://nuxt.com/docs/4.x/api/nuxt-config#router) to customize the router.

### [Using `router.options`](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#using-routeroptions)

This is the recommended way to specify [router options](https://nuxt.com/docs/4.x/api/nuxt-config#router).

app/router.options.ts

```ts
import type { RouterConfig } from '@nuxt/schema'

export default {
} satisfies RouterConfig
```

It is possible to add more router options files by adding files within the `pages:routerOptions` hook. Later items in the array override earlier ones.

Adding a router options file in this hook will switch on page-based routing, unless `optional` is set, in which case it will only apply when page-based routing is already enabled.

nuxt.config.ts

```ts
import { createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
  hooks: {
    'pages:routerOptions' ({ files }) {
      const resolver = createResolver(import.meta.url)
      // add a route
      files.push({
        path: resolver.resolve('./runtime/router-options'),
        optional: true,
      })
    },
  },
})
```

### [Using `nuxt.config`](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#using-nuxtconfig)

**Note:** Only JSON serializable [options](https://nuxt.com/docs/4.x/api/nuxt-config#router) are configurable:

- `linkActiveClass`
- `linkExactActiveClass`
- `end`
- `sensitive`
- `strict`
- `hashMode`
- `scrollBehaviorType`

nuxt.config

```ts
export default defineNuxtConfig({
  router: {
    options: {},
  },
})
```

### [Hash Mode (SPA)](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#hash-mode-spa)

You can enable hash history in SPA mode using the `hashMode` [config](https://nuxt.com/docs/4.x/api/nuxt-config#router). In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the **URL is never sent to the server** and **SSR is not supported**.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },
})
```

### [Scroll Behavior for hash links](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#scroll-behavior-for-hash-links)

You can optionally customize the scroll behavior for hash links. When you set the [config](https://nuxt.com/docs/4.x/api/nuxt-config#router) to be `smooth` and you load a page with a hash link (e.g. `https://example.com/blog/my-article#comments`), you will see that the browser smoothly scrolls to this anchor.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
```

#### [Custom History (advanced)](https://nuxt.com/docs/4.x/guide/recipes/custom-routing\#custom-history-advanced)

You can optionally override history mode using a function that accepts the base URL and returns the history mode. If it returns `null` or `undefined`, Nuxt will fallback to the default history.

router.options.ts

```ts
import type { RouterConfig } from '@nuxt/schema'
import { createMemoryHistory } from 'vue-router'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions
  history: base => import.meta.client ? createMemoryHistory(base) : null, /* default */
} satisfies RouterConfig
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/4.recipes/1.custom-routing.md)

[LLMs.txt\\
\\
How to get AI tools like Cursor, Windsurf, GitHub Copilot, ChatGPT, and Claude to understand Nuxt concepts, APIs, and best practices.](https://nuxt.com/docs/4.x/guide/ai/llms-txt) [Vite Plugins\\
\\
Learn how to integrate Vite plugins into your Nuxt project.](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin)

On this page

On this page

- [Adding custom routes](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#adding-custom-routes)
  - [Router Config](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#router-config)
  - [Pages Hook](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#pages-hook)
  - [Nuxt Module](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#nuxt-module)
- [Router Options](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#router-options)
  - [Using router.options](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#using-routeroptions)
  - [Using nuxt.config](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#using-nuxtconfig)
  - [Hash Mode (SPA)](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#hash-mode-spa)
  - [Scroll Behavior for hash links](https://nuxt.com/docs/4.x/guide/recipes/custom-routing#scroll-behavior-for-hash-links)

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