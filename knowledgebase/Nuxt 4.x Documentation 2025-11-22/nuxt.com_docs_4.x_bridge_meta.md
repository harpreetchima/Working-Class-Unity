---
url: "https://nuxt.com/docs/4.x/bridge/meta"
title: "Migrate to Nuxt Bridge: Meta Tags v4"
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

- [Overview](https://nuxt.com/docs/4.x/bridge/overview)
- [Configuration](https://nuxt.com/docs/4.x/bridge/configuration)
- [TypeScript](https://nuxt.com/docs/4.x/bridge/typescript)
- [Legacy Composition API](https://nuxt.com/docs/4.x/bridge/bridge-composition-api)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)
- [New Composition API](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)
- [Meta Tags](https://nuxt.com/docs/4.x/bridge/meta)
- [Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config)
- [Nitro](https://nuxt.com/docs/4.x/bridge/nitro)
- [Vite](https://nuxt.com/docs/4.x/bridge/vite)

1. [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
3. [Migrate to Nuxt Bridge](https://nuxt.com/docs/4.x/bridge)

# Meta Tags

Copy page

Learn how to migrate from Nuxt 2 to Nuxt Bridge new meta tags.

If you need to access the component state with `head`, you should migrate to using [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) .

If you need to use the Options API, there is a `head()` method you can use when you use `defineNuxtComponent`.

## [Migration](https://nuxt.com/docs/4.x/bridge/meta\#migration)

### [Set `bridge.meta`](https://nuxt.com/docs/4.x/bridge/meta\#set-bridgemeta)

```js
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    meta: true,
    nitro: false, // If migration to Nitro is complete, set to true
  },
})
```

### [Update head properties](https://nuxt.com/docs/4.x/bridge/meta\#update-head-properties)

In your `nuxt.config`, rename `head` to `app.head`. (Note that objects no longer have a `hid` key for deduplication.)

Nuxt 2Nuxt 3

```ts
export default {
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [\
      { charset: 'utf-8' },\
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },\
      { hid: 'description', name: 'description', content: 'Meta description' },\
    ],
  },
}
```

```ts
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Nuxt',
      meta: [\
        { charset: 'utf-8' },\
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },\
        { name: 'description', content: 'Meta description' },\
      ],
    },
  },
})
```

## [`useHead` Composables](https://nuxt.com/docs/4.x/bridge/meta\#usehead-composables)

Nuxt Bridge provides a new Nuxt 3 meta API that can be accessed with a new [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable.

```vue
<script setup lang="ts">
useHead({
  title: 'My Nuxt App',
})
</script>
```

This [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable uses `@unhead/vue` under the hood (rather than `vue-meta`) to manipulate your `<head>`.

We recommend not using the native Nuxt 2 `head()` properties in addition to [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) , as they may conflict.

For more information on how to use this composable, see [the docs](https://nuxt.com/docs/4.x/getting-started/seo-meta).

## [Options API](https://nuxt.com/docs/4.x/bridge/meta\#options-api)

```vue
<script>
// if using options API `head` method you must use `defineNuxtComponent`
export default defineNuxtComponent({
  head (nuxtApp) {
    // `head` receives the nuxt app but cannot access the component instance
    return {
      meta: [{\
        name: 'description',\
        content: 'This is my page description.',\
      }],
    }
  },
})
</script>
```

Possible breaking change: `head` receives the nuxt app but cannot access the component instance. If the code in your `head` tries to access the data object through `this` or `this.$data`, you will need to migrate to the `useHead` composable.

## [Title Template](https://nuxt.com/docs/4.x/bridge/meta\#title-template)

If you want to use a function (for full control), then this cannot be set in your nuxt.config, and it is recommended instead to set it within your `/layouts` directory.

app/layouts/default.vue

```vue
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  },
})
</script>
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/6.bridge/6.meta.md)

[New Composition API\\
\\
Nuxt Bridge implements composables compatible with Nuxt 3.](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api) [Runtime Config\\
\\
Nuxt provides a runtime config API to expose configuration and secrets within your application.](https://nuxt.com/docs/4.x/bridge/runtime-config)

On this page

On this page

- [Migration](https://nuxt.com/docs/4.x/bridge/meta#migration)
  - [Set bridge.meta](https://nuxt.com/docs/4.x/bridge/meta#set-bridgemeta)
  - [Update head properties](https://nuxt.com/docs/4.x/bridge/meta#update-head-properties)
- [useHead Composables](https://nuxt.com/docs/4.x/bridge/meta#usehead-composables)
- [Options API](https://nuxt.com/docs/4.x/bridge/meta#options-api)
- [Title Template](https://nuxt.com/docs/4.x/bridge/meta#title-template)

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