---
url: "https://nuxt.com/docs/4.x/getting-started/routing"
title: "Routing · Get Started with Nuxt v4"
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

# Routing

Copy page

Nuxt file-system routing creates a route for every file in the pages/ directory.

One core feature of Nuxt is the file system router. Every Vue file inside the [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory creates a corresponding URL (or route) that displays the contents of the file. By using dynamic imports for each page, Nuxt leverages code-splitting to ship the minimum amount of JavaScript for the requested route.

## [Pages](https://nuxt.com/docs/4.x/getting-started/routing\#pages)

Nuxt routing is based on [vue-router](https://router.vuejs.org/) and generates the routes from every component created in the [`app/pages/` directory](https://nuxt.com/docs/4.x/directory-structure/app/pages), based on their filename.

This file system routing uses naming conventions to create dynamic and nested routes:

Directory StructureGenerated Router File

```bash
-| pages/
---| about.vue
---| index.vue
---| posts/
-----| [id].vue
```

```json
{
  "routes": [\
    {\
      "path": "/about",\
      "component": "pages/about.vue"\
    },\
    {\
      "path": "/",\
      "component": "pages/index.vue"\
    },\
    {\
      "path": "/posts/:id",\
      "component": "pages/posts/[id].vue"\
    }\
  ]
}
```

[Docs > 4 X > Directory Structure > App > Pages](https://nuxt.com/docs/4.x/directory-structure/app/pages) Read more in Docs > 4 X > Directory Structure > App > Pages.

## [Navigation](https://nuxt.com/docs/4.x/getting-started/routing\#navigation)

The [`<NuxtLink>`](https://nuxt.com/docs/4.x/api/components/nuxt-link) component links pages between them. It renders an `<a>` tag with the `href` attribute set to the route of the page. Once the application is hydrated, page transitions are performed in JavaScript by updating the browser URL. This prevents full-page refreshes and allows for animated transitions.

When a [`<NuxtLink>`](https://nuxt.com/docs/4.x/api/components/nuxt-link) enters the viewport on the client side, Nuxt will automatically prefetch components and payload (generated pages) of the linked pages ahead of time, resulting in faster navigation.

app/pages/index.vue

```vue
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
```

[Docs > 4 X > API > Components > Nuxt Link](https://nuxt.com/docs/4.x/api/components/nuxt-link) Read more in Docs > 4 X > API > Components > Nuxt Link.

## [Route Parameters](https://nuxt.com/docs/4.x/getting-started/routing\#route-parameters)

The [`useRoute()`](https://nuxt.com/docs/4.x/api/composables/use-route) composable can be used in a `<script setup>` block or a `setup()` method of a Vue component to access the current route details.

pages/posts/\[id\].vue

```vue
<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>
```

[Docs > 4 X > API > Composables > Use Route](https://nuxt.com/docs/4.x/api/composables/use-route) Read more in Docs > 4 X > API > Composables > Use Route.

## [Route Middleware](https://nuxt.com/docs/4.x/getting-started/routing\#route-middleware)

Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

Route middleware runs within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.

Route middleware does **not** run for server routes (e.g. `/api/*`) or other server requests. To apply middleware to these requests, use [server middleware](https://nuxt.com/docs/4.x/directory-structure/server#server-middleware) instead.

There are three kinds of route middleware:

1. Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.
2. Named route middleware, which are placed in the [`app/middleware/`](https://nuxt.com/docs/4.x/directory-structure/app/middleware) directory and will be automatically loaded via asynchronous import when used on a page. ( **Note**: The route middleware name is normalized to kebab-case, so `someMiddleware` becomes `some-middleware`.)
3. Global route middleware, which are placed in the [`app/middleware/`](https://nuxt.com/docs/4.x/directory-structure/app/middleware) directory (with a `.global` suffix) and will be automatically run on every route change.

Example of an `auth` middleware protecting the `/dashboard` page:

middleware/auth.tspages/dashboard.vue

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})
```

```vue
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <h1>Welcome to your dashboard</h1>
</template>
```

[Docs > 4 X > Directory Structure > App > Middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware) Read more in Docs > 4 X > Directory Structure > App > Middleware.

## [Route Validation](https://nuxt.com/docs/4.x/getting-started/routing\#route-validation)

Nuxt offers route validation via the `validate` property in [`definePageMeta()`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) in each page you wish to validate.

The `validate` property accepts the `route` as an argument. You can return a boolean value to determine whether or not this is a valid route to be rendered with this page. If you return `false`, this will cause a 404 error. You can also directly return an object with `statusCode`/`statusMessage` to customize the error returned.

If you have a more complex use case, then you can use anonymous route middleware instead.

pages/posts/\[id\].vue

```vue
<script setup lang="ts">
definePageMeta({
  validate (route) {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})
</script>
```

[Docs > 4 X > API > Utils > Define Page Meta](https://nuxt.com/docs/4.x/api/utils/define-page-meta) Read more in Docs > 4 X > API > Utils > Define Page Meta.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/07.routing.md)

[Styling\\
\\
Learn how to style your Nuxt application.](https://nuxt.com/docs/4.x/getting-started/styling) [SEO and Meta\\
\\
Improve your Nuxt app's SEO with powerful head config, composables and components.](https://nuxt.com/docs/4.x/getting-started/seo-meta)

On this page

On this page

- [Pages](https://nuxt.com/docs/4.x/getting-started/routing#pages)
- [Navigation](https://nuxt.com/docs/4.x/getting-started/routing#navigation)
- [Route Parameters](https://nuxt.com/docs/4.x/getting-started/routing#route-parameters)
- [Route Middleware](https://nuxt.com/docs/4.x/getting-started/routing#route-middleware)
- [Route Validation](https://nuxt.com/docs/4.x/getting-started/routing#route-validation)

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