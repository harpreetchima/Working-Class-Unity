---
url: "https://nuxt.com/docs/4.x/getting-started/views"
title: "Views · Get Started with Nuxt v4"
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

# Views

Copy page

Nuxt provides several component layers to implement the user interface of your application.

## [`app.vue`](https://nuxt.com/docs/4.x/getting-started/views\#appvue)

![The app.vue file is the entry point of your application](https://ipx.nuxt.com/_/assets/docs/getting-started/views/app.svg)

By default, Nuxt will treat this file as the **entrypoint** and render its content for every route of the application.

app/app.vue

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>
```

If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.

## [Components](https://nuxt.com/docs/4.x/getting-started/views\#components)

![Components are reusable pieces of UI](https://ipx.nuxt.com/_/assets/docs/getting-started/views/components.svg)

Most components are reusable pieces of the user interface, like buttons and menus. In Nuxt, you can create these components in the [`app/components/`](https://nuxt.com/docs/4.x/directory-structure/app/components) directory, and they will be automatically available across your application without having to explicitly import them.

app/app.vueapp/components/AppAlert.vue

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
  </div>
</template>
```

```vue
<template>
  <span>
    <slot />
  </span>
</template>
```

## [Pages](https://nuxt.com/docs/4.x/getting-started/views\#pages)

![Pages are views tied to a specific route](https://ipx.nuxt.com/_/assets/docs/getting-started/views/pages.svg)

Pages represent views for each specific route pattern. Every file in the [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory represents a different route displaying its content.

To use pages, create an `app/pages/index.vue` file and add `<NuxtPage />` component to the [`app/app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app) (or remove `app/app.vue` for default entry). You can now create more pages and their corresponding routes by adding new files in the [`app/pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages) directory.

app/pages/index.vueapp/pages/about.vue

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>
```

```vue
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```

[Routing Section](https://nuxt.com/docs/4.x/getting-started/routing) Read more in Routing Section.

## [Layouts](https://nuxt.com/docs/4.x/getting-started/views\#layouts)

![Layouts are wrapper around pages](https://ipx.nuxt.com/_/assets/docs/getting-started/views/layouts.svg)

Layouts are wrappers around pages that contain a common User Interface for several pages, such as header and footer displays. Layouts are Vue files using `<slot />` components to display the **page** content. The `app/layouts/default.vue` file will be used by default. Custom layouts can be set as part of your page metadata.

If you only have a single layout in your application, we recommend using [`app/app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app) with [`<NuxtPage />`](https://nuxt.com/docs/4.x/api/components/nuxt-page) instead.

app/app.vueapp/layouts/default.vueapp/pages/index.vueapp/pages/about.vue

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

```vue
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
```

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>
```

```vue
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```

If you want to create more layouts and learn how to use them in your pages, find more information in the [Layouts section](https://nuxt.com/docs/4.x/directory-structure/app/layouts).

## [Advanced: Extending the HTML Template](https://nuxt.com/docs/4.x/getting-started/views\#advanced-extending-the-html-template)

If you only need to modify the `<head>`, you can refer to the [SEO and meta section](https://nuxt.com/docs/4.x/getting-started/seo-meta).

You can have full control over the HTML template by adding a Nitro plugin that registers a hook.
The callback function of the `render:html` hook allows you to mutate the HTML before it is sent to the client.

server/plugins/extend-html.ts

```ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    console.log(html)
    html.head.push(`<meta name="description" content="My custom description" />`)
  })
  // You can also intercept the response here.
  nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})
```

[Docs > 4 X > Guide > Going Further > Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks) Read more in Docs > 4 X > Guide > Going Further > Hooks.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/04.views.md)

[Configuration\\
\\
Nuxt is configured with sensible defaults to make you productive.](https://nuxt.com/docs/4.x/getting-started/configuration) [Assets\\
\\
Nuxt offers two options for your assets.](https://nuxt.com/docs/4.x/getting-started/assets)

On this page

On this page

- [app.vue](https://nuxt.com/docs/4.x/getting-started/views#appvue)
- [Components](https://nuxt.com/docs/4.x/getting-started/views#components)
- [Pages](https://nuxt.com/docs/4.x/getting-started/views#pages)
- [Layouts](https://nuxt.com/docs/4.x/getting-started/views#layouts)
- [Advanced: Extending the HTML Template](https://nuxt.com/docs/4.x/getting-started/views#advanced-extending-the-html-template)

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