---
url: "https://nuxt.com/docs/4.x/getting-started/transitions"
title: "Transitions · Get Started with Nuxt v4"
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

# Transitions

Copy page

Apply transitions between pages and layouts with Vue or native browser View Transitions.

Nuxt leverages Vue's [`<Transition>`](https://vuejs.org/guide/built-ins/transition#the-transition-component) component to apply transitions between pages and layouts.

## [Page Transitions](https://nuxt.com/docs/4.x/getting-started/transitions\#page-transitions)

You can enable page transitions to apply an automatic transition for all your [pages](https://nuxt.com/docs/4.x/directory-structure/app/pages).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
```

If you are changing layouts as well as page, the page transition you set here will not run. Instead, you should set a [layout transition](https://nuxt.com/docs/4.x/getting-started/transitions#layout-transitions).

To start adding transition between your pages, add the following CSS to your [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app):

app/app.vueapp/pages/index.vueapp/pages/about.vue

```vue
<template>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
```

```vue
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
```

```vue
<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
```

This produces the following result when navigating between pages:

To set a different transition for a page, set the `pageTransition` key in [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) of the page:

pages/about.vueapp/app.vue

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate',
  },
})
</script>
```

```vue
<template>
  <NuxtPage />
</template>

<style>
/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
```

Moving to the about page will add the 3d rotation effect:

## [Layout Transitions](https://nuxt.com/docs/4.x/getting-started/transitions\#layout-transitions)

You can enable layout transitions to apply an automatic transition for all your [layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
})
```

To start adding transition between your pages and layouts, add the following CSS to your [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app):

app/app.vueapp/layouts/default.vueapp/layouts/orange.vueapp/pages/index.vueapp/pages/about.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
```

```vue
<template>
  <div>
    <pre>default layout</pre>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
```

```vue
<template>
  <div>
    <pre>orange layout</pre>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: #eebb90;
  padding: 20px;
  height: 100vh;
}
</style>
```

```vue
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
```

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'orange',
})
</script>

<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
```

This produces the following result when navigating between pages:

Similar to `pageTransition`, you can apply a custom `layoutTransition` to the page component using `definePageMeta`:

pages/about.vue

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'orange',
  layoutTransition: {
    name: 'slide-in',
  },
})
</script>
```

## [Global Settings](https://nuxt.com/docs/4.x/getting-started/transitions\#global-settings)

You can customize these default transition names globally using `nuxt.config`.

Both `pageTransition` and `layoutTransition` keys accept [`TransitionProps`](https://vuejs.org/api/built-in-components#transition) as JSON serializable values where you can pass the `name`, `mode` and other valid transition-props of the custom CSS transition.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
})
```

If you change the `name` property, you also have to rename the CSS classes accordingly.

To override the global transition property, use the `definePageMeta` to define page or layout transitions for a single Nuxt page and override any page or layout transitions that are defined globally in `nuxt.config` file.

pages/some-page.vue

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in', // default
  },
})
</script>
```

## [Disable Transitions](https://nuxt.com/docs/4.x/getting-started/transitions\#disable-transitions)

`pageTransition` and `layoutTransition` can be disabled for a specific route:

pages/some-page.vue

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
})
</script>
```

Or globally in the `nuxt.config`:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
  },
})
```

## [JavaScript Hooks](https://nuxt.com/docs/4.x/getting-started/transitions\#javascript-hooks)

For advanced use-cases, you can use JavaScript hooks to create highly dynamic and custom transitions for your Nuxt pages.

This way presents perfect use-cases for JavaScript animation libraries such as [GSAP](https://gsap.com/).

pages/some-page.vue

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'custom-flip',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('Before enter...')
    },
    onEnter: (el, done) => {},
    onAfterEnter: (el) => {},
  },
})
</script>
```

Learn more about additional [JavaScript hooks](https://vuejs.org/guide/built-ins/transition#javascript-hooks) available in the `Transition` component.

## [Dynamic Transitions](https://nuxt.com/docs/4.x/getting-started/transitions\#dynamic-transitions)

To apply dynamic transitions using conditional logic, you can leverage inline [middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware) to assign a different transition name to `to.meta.pageTransition`.

pages/\[id\].vueapp/layouts/default.vue

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in',
  },
  middleware (to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean') {
      to.meta.pageTransition.name = +to.params.id! > +from.params.id! ? 'slide-left' : 'slide-right'
    }
  },
})
</script>

<template>
  <h1>#{{ $route.params.id }}</h1>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
```

```vue
<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/' + (id.value - 1))
const next = computed(() => '/' + (id.value + 1))
</script>

<template>
  <div>
    <slot />
    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
  </div>
</template>
```

The page now applies the `slide-left` transition when going to the next id and `slide-right` for the previous:

## [Transition with NuxtPage](https://nuxt.com/docs/4.x/getting-started/transitions\#transition-with-nuxtpage)

When `<NuxtPage />` is used in `app.vue`, transitions can be configured with the `transition` prop to activate transitions globally.

app/app.vue

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>
```

Remember, this page transition cannot be overridden with `definePageMeta` on individual pages.

## [View Transitions API (experimental)](https://nuxt.com/docs/4.x/getting-started/transitions\#view-transitions-api-experimental)

Nuxt ships with an experimental implementation of the [**View Transitions API**](https://developer.chrome.com/docs/web-platform/view-transitions) (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)). This is an exciting new way to implement native browser transitions which (among other things) have the ability to transition between unrelated elements on different pages.

You can check a demo [on StackBlitz](https://stackblitz.com/edit/nuxt-view-transitions).

The Nuxt integration can be enabled with the `experimental.viewTransition` option in your configuration file:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
})
```

The possible values are: `false`, `true`, or `'always'`.

If set to true, Nuxt will not apply transitions if the user's browser matches `prefers-reduced-motion: reduce` (recommended). If set to `always`, Nuxt will always apply the transition and it is up to you to respect the user's preference.

By default, view transitions are enabled for all [pages](https://nuxt.com/docs/4.x/directory-structure/app/pages), but you can set a different global default.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    // Disable view transitions globally, and opt-in on a per page basis
    viewTransition: false,
  },
})
```

It is possible to override the default `viewTransition` value for a page by setting the `viewTransition` key in [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta) of the page:

pages/about.vue

```vue
<script setup lang="ts">
definePageMeta({
  viewTransition: false,
})
</script>
```

Overriding view transitions on a per-page basis will only have an effect if you have enabled the `experimental.viewTransition` option.

If you are also using Vue transitions like `pageTransition` and `layoutTransition` (see above) to achieve the same result as the new View Transitions API, then you may wish to _disable_ Vue transitions if the user's browser supports the newer, native web API. You can do this by creating `~/middleware/disable-vue-transitions.global.ts` with the following contents:

```ts
export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server || !document.startViewTransition) {
    return
  }

  // Disable built-in Vue transitions
  to.meta.pageTransition = false
  to.meta.layoutTransition = false
})
```

### [Known Issues](https://nuxt.com/docs/4.x/getting-started/transitions\#known-issues)

- If you perform data fetching within your page setup functions, you may wish to reconsider using this feature for the moment. (By design, View Transitions completely freeze DOM updates whilst they are taking place.) We're looking at restricting the View Transition to the final moments before `<Suspense>` resolves, but in the interim you may want to consider carefully whether to adopt this feature if this describes you.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/09.transitions.md)

[SEO and Meta\\
\\
Improve your Nuxt app's SEO with powerful head config, composables and components.](https://nuxt.com/docs/4.x/getting-started/seo-meta) [Data Fetching\\
\\
Nuxt provides composables to handle data fetching within your application.](https://nuxt.com/docs/4.x/getting-started/data-fetching)

On this page

On this page

- [Page Transitions](https://nuxt.com/docs/4.x/getting-started/transitions#page-transitions)
- [Layout Transitions](https://nuxt.com/docs/4.x/getting-started/transitions#layout-transitions)
- [Global Settings](https://nuxt.com/docs/4.x/getting-started/transitions#global-settings)
- [Disable Transitions](https://nuxt.com/docs/4.x/getting-started/transitions#disable-transitions)
- [JavaScript Hooks](https://nuxt.com/docs/4.x/getting-started/transitions#javascript-hooks)
- [Dynamic Transitions](https://nuxt.com/docs/4.x/getting-started/transitions#dynamic-transitions)
- [Transition with NuxtPage](https://nuxt.com/docs/4.x/getting-started/transitions#transition-with-nuxtpage)
- [View Transitions API (experimental)](https://nuxt.com/docs/4.x/getting-started/transitions#view-transitions-api-experimental)
  - [Known Issues](https://nuxt.com/docs/4.x/getting-started/transitions#known-issues)

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