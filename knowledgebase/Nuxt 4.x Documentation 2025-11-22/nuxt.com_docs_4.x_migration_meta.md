---
url: "https://nuxt.com/docs/4.x/migration/meta"
title: "Migrate to Nuxt 3: Meta Tags v4"
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

# Meta Tags

Copy page

Manage your meta tags, from Nuxt 2 to Nuxt 3.

Nuxt 3 provides several different ways to manage your meta tags:

1. Through your `nuxt.config`.
2. Through the [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) [composable](https://nuxt.com/docs/4.x/getting-started/seo-meta)
3. Through [global meta components](https://nuxt.com/docs/4.x/getting-started/seo-meta)

You can customize `title`, `titleTemplate`, `base`, `script`, `noscript`, `style`, `meta`, `link`, `htmlAttrs` and `bodyAttrs`.

Nuxt currently uses [`Unhead`](https://github.com/unjs/unhead) to manage your meta tags, but implementation details may change.

[Docs > 4 X > Getting Started > Seo Meta](https://nuxt.com/docs/4.x/getting-started/seo-meta) Read more in Docs > 4 X > Getting Started > Seo Meta.

## [Migration](https://nuxt.com/docs/4.x/migration/meta\#migration)

1. In your `nuxt.config`, rename `head` to `meta`. Consider moving this shared meta configuration into your `app.vue` instead. (Note that objects no longer have a `hid` key for deduplication.)
2. If you need to access the component state with `head`, you should migrate to using [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) . You might also consider using the built-in meta-components.
3. If you need to use the Options API, there is a `head()` method you can use when you use `defineNuxtComponent`.

### [useHead](https://nuxt.com/docs/4.x/migration/meta\#usehead)

Nuxt 2Nuxt 3

```vue
<script>
export default {
  data: () => ({
    title: 'My App',
    description: 'My App Description',
  }),
  head () {
    return {
      title: this.title,
      meta: [{\
        hid: 'description',\
        name: 'description',\
        content: this.description,\
      }],
    }
  },
}
</script>
```

```vue
<script setup lang="ts">
const title = ref('My App')
const description = ref('My App Description')

// This will be reactive when you change title/description above
useHead({
  title,
  meta: [{\
    name: 'description',\
    content: description,\
  }],
})
</script>
```

### [Meta-components](https://nuxt.com/docs/4.x/migration/meta\#meta-components)

Nuxt 3 also provides meta components that you can use to accomplish the same task. While these components look similar to HTML tags, they are provided by Nuxt and have similar functionality.

Nuxt 2Nuxt 3

```vue
<script>
export default {
  head () {
    return {
      title: 'My App',
      meta: [{\
        hid: 'description',\
        name: 'description',\
        content: 'My App Description',\
      }],
    }
  },
}
</script>
```

```vue
<template>
  <div>
    <Head>
      <Title>My App</Title>
      <Meta
        name="description"
        content="My app description"
      />
    </Head>
    <!-- -->
  </div>
</template>
```

1. Make sure you use capital letters for these component names to distinguish them from native HTML elements (`<Title>` rather than `<title>`).
2. You can place these components anywhere in your template for your page.

### [Options API](https://nuxt.com/docs/4.x/migration/meta\#options-api)

Nuxt 3 (Options API)

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

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/7.migration/4.meta.md)

[Auto Imports\\
\\
Nuxt 3 adopts a minimal friction approach, meaning wherever possible components and composables are auto-imported.](https://nuxt.com/docs/4.x/migration/auto-imports) [Plugins and Middleware\\
\\
Learn how to migrate from Nuxt 2 to Nuxt 3 plugins and middleware.](https://nuxt.com/docs/4.x/migration/plugins-and-middleware)

On this page

On this page

- [Migration](https://nuxt.com/docs/4.x/migration/meta#migration)
  - [useHead](https://nuxt.com/docs/4.x/migration/meta#usehead)
  - [Meta-components](https://nuxt.com/docs/4.x/migration/meta#meta-components)
  - [Options API](https://nuxt.com/docs/4.x/migration/meta#options-api)

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