---
url: "https://nuxt.com/docs/4.x/migration/pages-and-layouts"
title: "Migrate to Nuxt 3: Pages and Layouts v4"
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

- [Overview](https://nuxt.com/docs/4.x/migration/overview)
- [Build Tooling](https://nuxt.com/docs/4.x/migration/bundling)
- [Server](https://nuxt.com/docs/4.x/migration/server)
- [Configuration](https://nuxt.com/docs/4.x/migration/configuration)
- [Modules](https://nuxt.com/docs/4.x/migration/module-authors)
- [Auto Imports](https://nuxt.com/docs/4.x/migration/auto-imports)
- [Meta Tags](https://nuxt.com/docs/4.x/migration/meta)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/migration/plugins-and-middleware)
- [Pages and Layouts](https://nuxt.com/docs/4.x/migration/pages-and-layouts)
- [Component Options](https://nuxt.com/docs/4.x/migration/component-options)
- [Runtime Config](https://nuxt.com/docs/4.x/migration/runtime-config)

1. [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
3. [Migrate to Nuxt 3](https://nuxt.com/docs/4.x/migration)

# Pages and Layouts

Copy page

Learn how to migrate from Nuxt 2 to Nuxt 3 pages and layouts.

## [`app.vue`](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#appvue)

Nuxt 3 provides a central entry point to your app via `~/app.vue`.

If you don't have an `app.vue` file in your source directory, Nuxt will use its own default version.

This file is a great place to put any custom code that needs to be run once when your app starts up, as well as any components that are present on every page of your app. For example, if you only have one layout, you can move this to `app.vue` instead.

[Docs > 4 X > Directory Structure > App > App](https://nuxt.com/docs/4.x/directory-structure/app/app) Read more in Docs > 4 X > Directory Structure > App > App.

Read and edit a live example in [Docs > 4 X > Examples > Hello World](https://nuxt.com/docs/4.x/examples/hello-world).

### [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#migration)

Consider creating an `app.vue` file and including any logic that needs to run once at the top-level of your app. You can check out [an example here](https://nuxt.com/docs/4.x/directory-structure/app/app).

## [Layouts](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#layouts)

If you are using layouts in your app for multiple pages, there is only a slight change required.

In Nuxt 2, the `<Nuxt>` component is used within a layout to render the current page. In Nuxt 3, layouts use slots instead, so you will have to replace that component with a `<slot />`. This also allows advanced use cases with named and scoped slots. [Read more about layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts).

You will also need to change how you define the layout used by a page using the `definePageMeta` compiler macro. Layouts will be kebab-cased. So `app/layouts/customLayout.vue` becomes `custom-layout` when referenced in your page.

### [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#migration-1)

1. Replace `<Nuxt />` with `<slot />`


app/layouts/custom.vue



```diff
     <template>
       <div id="app-layout">
         <main>
-       <Nuxt />
+       <slot />
      </main>
    </div>
</template>
```

2. Use [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) to select the layout used by your page.



app/pages/index.vue



```diff
+ <script setup>
+ definePageMeta({
+   layout: 'custom'
+ })
- <script>
- export default {
-   layout: 'custom'
- }
</script>
```

3. Move `~/layouts/_error.vue` to `~/error.vue`. See [the error handling docs](https://nuxt.com/docs/4.x/getting-started/error-handling). If you want to ensure that this page uses a layout, you can use [`<NuxtLayout>`](https://nuxt.com/docs/4.x/directory-structure/app/layouts) directly within `error.vue`:



error.vue



```vue
<template>
     <div>
       <NuxtLayout name="default">
         <!-- -->
       </NuxtLayout>
     </div>
</template>
```


## [Pages](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#pages)

Nuxt 3 ships with an optional `vue-router` integration triggered by the existence of a [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory in your source directory. If you only have a single page, you may consider instead moving it to `app.vue` for a lighter build.

### [Dynamic Routes](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#dynamic-routes)

The format for defining dynamic routes in Nuxt 3 is slightly different from Nuxt 2, so you may need to rename some of the files within `app/pages/`.

1. Where you previously used `_id` to define a dynamic route parameter you now use `[id]`.
2. Where you previously used `_.vue` to define a catch-all route, you now use `[...slug].vue`.

### [Nested Routes](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#nested-routes)

In Nuxt 2, you will have defined any nested routes (with parent and child components) using `<Nuxt>` and `<NuxtChild>`. In Nuxt 3, these have been replaced with a single `<NuxtPage>` component.

### [Page Keys and Keep-alive Props](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#page-keys-and-keep-alive-props)

If you were passing a custom page key or keep-alive props to `<Nuxt>`, you will now use `definePageMeta` to set these options.

[Docs > 4 X > Directory Structure > App > Pages#special Metadata](https://nuxt.com/docs/4.x/directory-structure/app/pages#special-metadata) Read more in Docs > 4 X > Directory Structure > App > Pages#special Metadata.

### [Page and Layout Transitions](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#page-and-layout-transitions)

If you have been defining transitions for your page or layout directly in your component options, you will now need to use `definePageMeta` to set the transition. Since Vue 3, [-enter and -leave CSS classes have been renamed](https://v3-migration.vuejs.org/breaking-changes/transition.html). The `style` prop from `<Nuxt>` no longer applies to transition when used on `<slot>`, so move the styles to your `-active` class.

[Docs > 4 X > Getting Started > Transitions](https://nuxt.com/docs/4.x/getting-started/transitions) Read more in Docs > 4 X > Getting Started > Transitions.

### [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#migration-2)

1. Rename any pages with dynamic parameters to match the new format.
2. Update `<Nuxt>` and `<NuxtChild>` to be `<NuxtPage>`.
3. If you're using the Composition API, you can also migrate `this.$route` and `this.$router` to use [`useRoute`](https://nuxt.com/docs/4.x/api/composables/use-route) and [`useRouter`](https://nuxt.com/docs/4.x/api/composables/use-router) composables.

#### [Example: Dynamic Routes](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#example-dynamic-routes)

Nuxt 2Nuxt 3

```text
- URL: /users
- Page: /pages/users/index.vue

- URL: /users/some-user-name
- Page: /pages/users/_user.vue
- Usage: params.user

- URL: /users/some-user-name/edit
- Page: /pages/users/_user/edit.vue
- Usage: params.user

- URL: /users/anything-else
- Page: /pages/users/_.vue
- Usage: params.pathMatch
```

```text
- URL: /users
- Page: /pages/users/index.vue

- URL: /users/some-user-name
- Page: /pages/users/[user].vue
- Usage: params.user

- URL: /users/some-user-name/edit
- Page: /pages/users/[user]/edit.vue
- Usage: params.user

- URL: /users/anything-else
- Page: /pages/users/[...slug].vue
- Usage: params.slug
```

#### [Example: Nested Routes and `definePageMeta`](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#example-nested-routes-and-definepagemeta)

Nuxt 2Nuxt 3

```vue
<template>
<div>
    <NuxtChild
      keep-alive
      :keep-alive-props="{ exclude: ['modal'] }"
      :nuxt-child-key="$route.slug"
    />
</div>
</template>

<script>
export default {
transition: 'page', // or { name: 'page' }
}
</script>
```

```vue
<template>
<div>
    <NuxtPage />
</div>
</template>

<script setup lang="ts">
// This compiler macro works in both <script> and <script setup>
definePageMeta({
// you can also pass a string or a computed property
key: route => route.slug,
transition: {
    name: 'page',
},
keepalive: {
    exclude: ['modal'],
},
})
</script>
```

## [`<NuxtLink>` Component](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#nuxtlink-component)

Most of the syntax and functionality are the same for the global [NuxtLink](https://nuxt.com/docs/4.x/api/components/nuxt-link) component. If you have been using the shortcut `<NLink>` format, you should update this to use `<NuxtLink>`.

`<NuxtLink>` is now a drop-in replacement for _all_ links, even external ones. You can read more about it, and how to extend it to provide your own link component.

[Docs > 4 X > API > Components > Nuxt Link](https://nuxt.com/docs/4.x/api/components/nuxt-link) Read more in Docs > 4 X > API > Components > Nuxt Link.

## [Programmatic Navigation](https://nuxt.com/docs/4.x/migration/pages-and-layouts\#programmatic-navigation)

When migrating from Nuxt 2 to Nuxt 3, you will have to update how you programmatically navigate your users. In Nuxt 2, you had access to the underlying Vue Router with `this.$router`. In Nuxt 3, you can use the `navigateTo()` utility method which allows you to pass a route and parameters to Vue Router.

Make sure to always `await` on [`navigateTo`](https://nuxt.com/docs/4.x/api/utils/navigate-to) or chain its result by returning from functions.

Nuxt 2Nuxt 3

```vue
<script>
export default {
methods: {
    navigate () {
      this.$router.push({
        path: '/search',
        query: {
          name: 'first name',
          type: '1',
        },
      })
    },
},
}
</script>
```

```vue
<script setup lang="ts">
function navigate () {
return navigateTo({
    path: '/search',
    query: {
      name: 'first name',
      type: '1',
    },
})
}
</script>
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/6.pages-and-layouts.md)

[Plugins and Middleware\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 plugins and middleware.](https://nuxt.com/docs/4.x/migration/plugins-and-middleware) [Component Options\\
\\
Learn how to migrate from Nuxt 2 components options to Nuxt 3 composables.](https://nuxt.com/docs/4.x/migration/component-options)

On this page

On this page

- [app.vue](https://nuxt.com/docs/4.x/migration/pages-and-layouts#appvue)
  - [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts#migration)
- [Layouts](https://nuxt.com/docs/4.x/migration/pages-and-layouts#layouts)
  - [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts#migration-1)
- [Pages](https://nuxt.com/docs/4.x/migration/pages-and-layouts#pages)
  - [Dynamic Routes](https://nuxt.com/docs/4.x/migration/pages-and-layouts#dynamic-routes)
  - [Nested Routes](https://nuxt.com/docs/4.x/migration/pages-and-layouts#nested-routes)
  - [Page Keys and Keep-alive Props](https://nuxt.com/docs/4.x/migration/pages-and-layouts#page-keys-and-keep-alive-props)
  - [Page and Layout Transitions](https://nuxt.com/docs/4.x/migration/pages-and-layouts#page-and-layout-transitions)
  - [Migration](https://nuxt.com/docs/4.x/migration/pages-and-layouts#migration-2)
- [<NuxtLink> Component](https://nuxt.com/docs/4.x/migration/pages-and-layouts#nuxtlink-component)
- [Programmatic Navigation](https://nuxt.com/docs/4.x/migration/pages-and-layouts#programmatic-navigation)

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