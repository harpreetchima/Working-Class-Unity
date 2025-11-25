---
url: "https://nuxt.com/docs/4.x/getting-started/prerendering"
title: "Prerendering · Get Started with Nuxt v4"
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

- [Introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Configuration](https://nuxt.com/docs/4.x/getting-started/configuration)
- [Views](https://nuxt.com/docs/4.x/getting-started/views)
- [Assets](https://nuxt.com/docs/4.x/getting-started/assets)
- [Styling](https://nuxt.com/docs/4.x/getting-started/styling)
- [Routing](https://nuxt.com/docs/4.x/getting-started/routing)
- [SEO and Meta](https://nuxt.com/docs/4.x/getting-started/seo-meta)
- [Transitions](https://nuxt.com/docs/4.x/getting-started/transitions)
- [Data Fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching)
- [State Management](https://nuxt.com/docs/4.x/getting-started/state-management)
- [Error Handling](https://nuxt.com/docs/4.x/getting-started/error-handling)
- [Server](https://nuxt.com/docs/4.x/getting-started/server)
- [Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Prerendering](https://nuxt.com/docs/4.x/getting-started/prerendering)
- [Deployment](https://nuxt.com/docs/4.x/getting-started/deployment)
- [Testing](https://nuxt.com/docs/4.x/getting-started/testing)
- [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)

1. [Get Started](https://nuxt.com/docs/4.x/getting-started)

# Prerendering

Copy page

Nuxt allows pages to be statically rendered at build time to improve certain performance or SEO metrics

Nuxt allows for select pages from your application to be rendered at build time. Nuxt will serve the prebuilt pages when requested instead of generating them on the fly.

[Nuxt rendering modes](https://nuxt.com/docs/4.x/guide/concepts/rendering) Read more in Nuxt rendering modes.

## [Crawl-based Pre-rendering](https://nuxt.com/docs/4.x/getting-started/prerendering\#crawl-based-pre-rendering)

Use the [`nuxt generate` command](https://nuxt.com/docs/4.x/api/commands/generate) to build and pre-render your application using the [Nitro](https://nuxt.com/docs/4.x/guide/concepts/server-engine) crawler. This command is similar to `nuxt build` with the `nitro.static` option set to `true`, or running `nuxt build --prerender`.

This will build your site, stand up a nuxt instance, and, by default, prerender the root page `/` along with any of your site's pages it links to, any of your site's pages they link to, and so on.

npmyarnpnpmbun

```bash
npx nuxt generate
```

```bash
yarn nuxt generate
```

```bash
pnpm nuxt generate
```

```bash
bun x nuxt generate
```

You can now deploy the `.output/public` directory to any static hosting service or preview it locally with `npx serve .output/public`.

Working of the Nitro crawler:

1. Load the HTML of your application's root route (`/`), any non-dynamic pages in your `~/pages` directory, and any other routes in the `nitro.prerender.routes` array.
2. Save the HTML and `payload.json` to the `~/.output/public/` directory to be served statically.
3. Find all anchor tags (`<a href="...">`) in the HTML to navigate to other routes.
4. Repeat steps 1-3 for each anchor tag found until there are no more anchor tags to crawl.

This is important to understand since pages that are not linked to a discoverable page can't be pre-rendered automatically.

[Docs > 4 X > API > Commands > Generate#nuxt Generate](https://nuxt.com/docs/4.x/api/commands/generate#nuxt-generate) Read more about the `nuxt generate` command.

### [Selective Pre-rendering](https://nuxt.com/docs/4.x/getting-started/prerendering\#selective-pre-rendering)

You can manually specify routes that [Nitro](https://nuxt.com/docs/4.x/guide/concepts/server-engine) will fetch and pre-render during the build or ignore routes that you don't want to pre-render like `/dynamic` in the `nuxt.config` file:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/user/1', '/user/2'],
      ignore: ['/dynamic'],
    },
  },
})
```

You can combine this with the `crawlLinks` option to pre-render a set of routes that the crawler can't discover like your `/sitemap.xml` or `/robots.txt`:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
})
```

Setting `nitro.prerender` to `true` is similar to `nitro.prerender.crawlLinks` to `true`.

[https://nitro.build/config#prerender](https://nitro.build/config#prerender) Read more about pre-rendering in the Nitro documentation.

Lastly, you can manually configure this using routeRules.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  routeRules: {
    // Set prerender to true to configure it to be prerendered
    '/rss.xml': { prerender: true },
    // Set it to false to configure it to be skipped for prerendering
    '/this-DOES-NOT-get-prerendered': { prerender: false },
    // Everything under /blog gets prerendered as long as it
    // is linked to from another page
    '/blog/**': { prerender: true },
  },
})
```

[https://nitro.build/config#routerules](https://nitro.build/config#routerules) Read more about Nitro's `routeRules` configuration.

As a shorthand, you can also configure this in a page file using [`defineRouteRules`](https://nuxt.com/docs/4.x/api/utils/define-route-rules).

[Docs > 4 X > Guide > Going Further > Experimental Features#inlinerouterules](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#inlinerouterules) This feature is experimental and in order to use it you must enable the `experimental.inlineRouteRules` option in your `nuxt.config`.

app/pages/index.vue

```vue
<script setup>
// Or set at the page level
defineRouteRules({
  prerender: true,
})
</script>

<template>
  <div>
    <h1>Homepage</h1>
    <p>Pre-rendered at build time</p>
  </div>
</template>
```

This will be translated to:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
  },
})
```

## [Runtime Prerender Configuration](https://nuxt.com/docs/4.x/getting-started/prerendering\#runtime-prerender-configuration)

### [`prerenderRoutes`](https://nuxt.com/docs/4.x/getting-started/prerendering\#prerenderroutes)

You can use this at runtime within a [Nuxt context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context) to add more routes for Nitro to prerender.

app/pages/index.vue

```vue
<script setup>
prerenderRoutes(['/some/other/url'])
prerenderRoutes('/api/content/article/my-article')
</script>

<template>
  <div>
    <h1>This will register other routes for prerendering when prerendered</h1>
  </div>
</template>
```

[prerenderRoutes](https://nuxt.com/docs/4.x/api/utils/prerender-routes) Read more in prerenderRoutes.

### [`prerender:routes` Nuxt hook](https://nuxt.com/docs/4.x/getting-started/prerendering\#prerenderroutes-nuxt-hook)

This is called before prerendering for additional routes to be registered.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  hooks: {
    async 'prerender:routes' (ctx) {
      const { pages } = await fetch('https://api.some-cms.com/pages').then(
        res => res.json(),
      )
      for (const page of pages) {
        ctx.routes.add(`/${page.name}`)
      }
    },
  },
})
```

### [`prerender:generate` Nitro hook](https://nuxt.com/docs/4.x/getting-started/prerendering\#prerendergenerate-nitro-hook)

This is called for each route during prerendering. You can use this for fine-grained handling of each route that gets prerendered.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  nitro: {
    hooks: {
      'prerender:generate' (route) {
        if (route.route?.includes('private')) {
          route.skip = true
        }
      },
    },
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/15.prerendering.md)

[Layers\\
\\
Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.](https://nuxt.com/docs/4.x/getting-started/layers) [Deployment\\
\\
Learn how to deploy your Nuxt application to any hosting provider.](https://nuxt.com/docs/4.x/getting-started/deployment)

On this page

On this page

- [Crawl-based Pre-rendering](https://nuxt.com/docs/4.x/getting-started/prerendering#crawl-based-pre-rendering)
  - [Selective Pre-rendering](https://nuxt.com/docs/4.x/getting-started/prerendering#selective-pre-rendering)
- [Runtime Prerender Configuration](https://nuxt.com/docs/4.x/getting-started/prerendering#runtime-prerender-configuration)
  - [prerenderRoutes](https://nuxt.com/docs/4.x/getting-started/prerendering#prerenderroutes)
  - [prerender:routes Nuxt hook](https://nuxt.com/docs/4.x/getting-started/prerendering#prerenderroutes-nuxt-hook)
  - [prerender:generate Nitro hook](https://nuxt.com/docs/4.x/getting-started/prerendering#prerendergenerate-nitro-hook)

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