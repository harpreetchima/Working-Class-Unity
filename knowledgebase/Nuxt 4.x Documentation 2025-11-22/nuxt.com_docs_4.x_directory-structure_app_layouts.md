---
url: "https://nuxt.com/docs/4.x/directory-structure/app/layouts"
title: "layouts · Nuxt Directory Structure v4"
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

- [.nuxt](https://nuxt.com/docs/4.x/directory-structure/nuxt)
- [.output](https://nuxt.com/docs/4.x/directory-structure/output)
- app


- [assets](https://nuxt.com/docs/4.x/directory-structure/app/assets)
- [components](https://nuxt.com/docs/4.x/directory-structure/app/components)
- [composables](https://nuxt.com/docs/4.x/directory-structure/app/composables)
- [layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts)
- [middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware)
- [pages](https://nuxt.com/docs/4.x/directory-structure/app/pages)
- [plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins)
- [utils](https://nuxt.com/docs/4.x/directory-structure/app/utils)
- [app.vue](https://nuxt.com/docs/4.x/directory-structure/app/app)
- [app.config.ts](https://nuxt.com/docs/4.x/directory-structure/app/app-config)
- [error.vue](https://nuxt.com/docs/4.x/directory-structure/app/error)

- [content](https://nuxt.com/docs/4.x/directory-structure/content)
- [modules](https://nuxt.com/docs/4.x/directory-structure/modules)
- [node\_modules](https://nuxt.com/docs/4.x/directory-structure/node_modules)
- [public](https://nuxt.com/docs/4.x/directory-structure/public)
- [server](https://nuxt.com/docs/4.x/directory-structure/server)
- [shared](https://nuxt.com/docs/4.x/directory-structure/shared)
- [.env](https://nuxt.com/docs/4.x/directory-structure/env)
- [.gitignore](https://nuxt.com/docs/4.x/directory-structure/gitignore)
- [.nuxtignore](https://nuxt.com/docs/4.x/directory-structure/nuxtignore)
- [.nuxtrc](https://nuxt.com/docs/4.x/directory-structure/nuxtrc)
- [nuxt.config.ts](https://nuxt.com/docs/4.x/directory-structure/nuxt-config)
- [package.json](https://nuxt.com/docs/4.x/directory-structure/package)
- [tsconfig.json](https://nuxt.com/docs/4.x/directory-structure/tsconfig)

1. [Directory Structure](https://nuxt.com/docs/4.x/directory-structure)
3. [app](https://nuxt.com/docs/4.x/directory-structure/app)

# layouts

Copy page

Nuxt provides a layouts framework to extract common UI patterns into reusable layouts.

For best performance, components placed in this directory will be automatically loaded via asynchronous import when used.

## [Enable Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts\#enable-layouts)

Layouts are enabled by adding [`<NuxtLayout>`](https://nuxt.com/docs/4.x/api/components/nuxt-layout) to your [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app):

app/app.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

To use a layout:

- Set a `layout` property in your page with [definePageMeta](https://nuxt.com/docs/4.x/api/utils/define-page-meta).
- Set the `name` prop of `<NuxtLayout>`.

The layout name is normalized to kebab-case, so `someLayout` becomes `some-layout`.

If no layout is specified, `app/layouts/default.vue` will be used.

If you only have a single layout in your application, we recommend using [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app) instead.

Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a `<slot />`.

## [Default Layout](https://nuxt.com/docs/4.x/directory-structure/app/layouts\#default-layout)

Add a `~/layouts/default.vue`:

app/layouts/default.vue

```vue
<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>
```

In a layout file, the content of the page will be displayed in the `<slot />` component.

## [Named Layout](https://nuxt.com/docs/4.x/directory-structure/app/layouts\#named-layout)

Directory Structure

```bash
-| layouts/
---| default.vue
---| custom.vue
```

Then you can use the `custom` layout in your page:

pages/about.vue

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
</script>
```

[Docs > 4 X > Directory Structure > App > Pages#page Metadata](https://nuxt.com/docs/4.x/directory-structure/app/pages#page-metadata) Learn more about `definePageMeta`.

You can directly override the default layout for all pages using the `name` property of [`<NuxtLayout>`](https://nuxt.com/docs/4.x/api/components/nuxt-layout):

app/app.vue

```vue
<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = 'custom'
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
```

If you have a layout in nested directories, the layout's name will be based on its own path directory and filename, with duplicate segments being removed.

| File | Layout Name |
| --- | --- |
| `~/layouts/desktop/default.vue` | `desktop-default` |
| `~/layouts/desktop-base/base.vue` | `desktop-base` |
| `~/layouts/desktop/index.vue` | `desktop` |

For clarity, we recommend that the layout's filename matches its name:

| File | Layout Name |
| --- | --- |
| `~/layouts/desktop/DesktopDefault.vue` | `desktop-default` |
| `~/layouts/desktop-base/DesktopBase.vue` | `desktop-base` |
| `~/layouts/desktop/Desktop.vue` | `desktop` |

Read and edit a live example in [Docs > 4 X > Examples > Features > Layouts](https://nuxt.com/docs/4.x/examples/features/layouts).

## [Changing the Layout Dynamically](https://nuxt.com/docs/4.x/directory-structure/app/layouts\#changing-the-layout-dynamically)

You can also use the [`setPageLayout`](https://nuxt.com/docs/4.x/api/utils/set-page-layout) helper to change the layout dynamically:

```vue
<script setup lang="ts">
function enableCustomLayout () {
  setPageLayout('custom')
}
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <button @click="enableCustomLayout">
      Update layout
    </button>
  </div>
</template>
```

Read and edit a live example in [Docs > 4 X > Examples > Features > Layouts](https://nuxt.com/docs/4.x/examples/features/layouts).

## [Overriding a Layout on a Per-page Basis](https://nuxt.com/docs/4.x/directory-structure/app/layouts\#overriding-a-layout-on-a-per-page-basis)

If you are using pages, you can take full control by setting `layout: false` and then using the `<NuxtLayout>` component within the page.

app/pages/index.vueapp/layouts/custom.vue

```vue
<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        Some header template content.
      </template>

      The rest of the page
    </NuxtLayout>
  </div>
</template>
```

```vue
<template>
  <div>
    <header>
      <slot name="header">
        Default header content
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
```

If you use `<NuxtLayout>` within your pages, make sure it is not the root element (or [disable layout/page transitions](https://nuxt.com/docs/4.x/getting-started/transitions#disable-transitions)).

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/1.app/1.layouts.md)

[composables\\
\\
Use the composables/ directory to auto-import your Vue composables into your application.](https://nuxt.com/docs/4.x/directory-structure/app/composables) [middleware\\
\\
Nuxt provides middleware to run code before navigating to a particular route.](https://nuxt.com/docs/4.x/directory-structure/app/middleware)

On this page

On this page

- [Enable Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts#enable-layouts)
- [Default Layout](https://nuxt.com/docs/4.x/directory-structure/app/layouts#default-layout)
- [Named Layout](https://nuxt.com/docs/4.x/directory-structure/app/layouts#named-layout)
- [Changing the Layout Dynamically](https://nuxt.com/docs/4.x/directory-structure/app/layouts#changing-the-layout-dynamically)
- [Overriding a Layout on a Per-page Basis](https://nuxt.com/docs/4.x/directory-structure/app/layouts#overriding-a-layout-on-a-per-page-basis)

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