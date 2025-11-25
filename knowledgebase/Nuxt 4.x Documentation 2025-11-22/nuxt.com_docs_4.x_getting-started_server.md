---
url: "https://nuxt.com/docs/4.x/getting-started/server"
title: "Server · Get Started with Nuxt v4"
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

# Server

Copy page

Build full-stack applications with Nuxt's server framework. You can fetch data from your database or another server, create APIs, or even generate static server-side content like a sitemap or a RSS feed - all from a single codebase.

[Docs > 4 X > Directory Structure > Server](https://nuxt.com/docs/4.x/directory-structure/server) Read more in Docs > 4 X > Directory Structure > Server.

## [Powered by Nitro](https://nuxt.com/docs/4.x/getting-started/server\#powered-by-nitro)

![Server engine](https://ipx.nuxt.com/_/assets/docs/getting-started/server.svg)

Nuxt's server is [Nitro](https://github.com/nitrojs/nitro). It was originally created for Nuxt but is now part of [UnJS](https://unjs.io/) and open for other frameworks - and can even be used on its own.

Using Nitro gives Nuxt superpowers:

- Full control of the server-side part of your app
- Universal deployment on any provider (many zero-config)
- Hybrid rendering

Nitro is internally using [h3](https://github.com/h3js/h3), a minimal H(TTP) framework built for high performance and portability.

Watch a video from Alexander Lichter to understand the responsibilities of Nuxt and Nitro in your application

## [Server Endpoints & Middleware](https://nuxt.com/docs/4.x/getting-started/server\#server-endpoints-middleware)

You can easily manage the server-only part of your Nuxt app, from API endpoints to middleware.

Both endpoints and middleware can be defined like this:

server/api/test.ts

```ts
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
})
```

And you can directly return `text`, `json`, `html` or even a `stream`.

Out-of-the-box, it supports **hot module replacement** and **auto-import** like the other parts of your Nuxt application.

[Docs > 4 X > Directory Structure > Server](https://nuxt.com/docs/4.x/directory-structure/server) Read more in Docs > 4 X > Directory Structure > Server.

## [Universal Deployment](https://nuxt.com/docs/4.x/getting-started/server\#universal-deployment)

Nitro offers the ability to deploy your Nuxt app anywhere, from a bare metal server to the edge network, with a start time of just a few milliseconds. That's fast!

[Blog > Nuxt On The Edge](https://nuxt.com/blog/nuxt-on-the-edge) Read more in Blog > Nuxt On The Edge.

There are more than 15 presets to build your Nuxt app for different cloud providers and servers, including:

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Netlify Functions](https://www.netlify.com/platform/core/functions/)
- [Vercel Cloud](https://vercel.com/home)

Or for other runtimes:

[Deno](https://deno.com/)

Deno

[Bun](https://bun.com/)

Bun

[Docs > 4 X > Getting Started > Deployment](https://nuxt.com/docs/4.x/getting-started/deployment) Read more in Docs > 4 X > Getting Started > Deployment.

## [Hybrid Rendering](https://nuxt.com/docs/4.x/getting-started/server\#hybrid-rendering)

Nitro has a powerful feature called `routeRules` which allows you to define a set of rules to customize how each route of your Nuxt app is rendered (and more).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  routeRules: {
    // Generated at build time for SEO purpose
    '/': { prerender: true },
    // Cached for 1 hour
    '/api/*': { cache: { maxAge: 60 * 60 } },
    // Redirection to avoid 404
    '/old-page': {
      redirect: { to: '/new-page', statusCode: 302 },
    },
    // ...
  },
})
```

[Docs > 4 X > Guide > Concepts > Rendering#hybrid Rendering](https://nuxt.com/docs/4.x/guide/concepts/rendering#hybrid-rendering) Learn about all available route rules are available to customize the rendering mode of your routes.

In addition, there are some route rules (for example, `ssr`, `appMiddleware`, and `noScripts`) that are Nuxt specific to change the behavior when rendering your pages to HTML.

Some route rules (`appMiddleware`, `redirect` and `prerender`) also affect client-side behavior.

Nitro is used to build the app for server side rendering, as well as pre-rendering.

[Docs > 4 X > Guide > Concepts > Rendering](https://nuxt.com/docs/4.x/guide/concepts/rendering) Read more in Docs > 4 X > Guide > Concepts > Rendering.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/13.server.md)

[Error Handling\\
\\
Learn how to catch and handle errors in Nuxt.](https://nuxt.com/docs/4.x/getting-started/error-handling) [Layers\\
\\
Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.](https://nuxt.com/docs/4.x/getting-started/layers)

On this page

On this page

- [Powered by Nitro](https://nuxt.com/docs/4.x/getting-started/server#powered-by-nitro)
- [Server Endpoints & Middleware](https://nuxt.com/docs/4.x/getting-started/server#server-endpoints-middleware)
- [Universal Deployment](https://nuxt.com/docs/4.x/getting-started/server#universal-deployment)
- [Hybrid Rendering](https://nuxt.com/docs/4.x/getting-started/server#hybrid-rendering)

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