---
url: "https://nuxt.com/docs/4.x/getting-started/state-management"
title: "State Management · Get Started with Nuxt v4"
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

# State Management

Copy page

Nuxt provides powerful state management libraries and the useState composable to create a reactive and SSR-friendly shared state.

Nuxt provides the [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) composable to create a reactive and SSR-friendly shared state across components.

[`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) is an SSR-friendly [`ref`](https://vuejs.org/api/reactivity-core#ref) replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.

Watch a video from Alexander Lichter about why and when to use useState

Because the data inside [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) will be serialized to JSON, it is important that it does not contain anything that cannot be serialized, such as classes, functions or symbols.

[Docs > 4 X > API > Composables > Use State](https://nuxt.com/docs/4.x/api/composables/use-state) Read more about `useState` composable.

## [Best Practices](https://nuxt.com/docs/4.x/getting-started/state-management\#best-practices)

Never define `const state = ref()` outside of `<script setup>` or `setup()` function.

For example, doing `export myState = ref({})` would result in state shared across requests on the server and can lead to memory leaks.

Instead use `const useX = () => useState('x')`

## [Examples](https://nuxt.com/docs/4.x/getting-started/state-management\#examples)

### [Basic Usage](https://nuxt.com/docs/4.x/getting-started/state-management\#basic-usage)

In this example, we use a component-local counter state. Any other component that uses `useState('counter')` shares the same reactive state.

app/app.vue

```vue
<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
```

Read and edit a live example in [Docs > 4 X > Examples > Features > State Management](https://nuxt.com/docs/4.x/examples/features/state-management).

To globally invalidate cached state, see [`clearNuxtState`](https://nuxt.com/docs/4.x/api/utils/clear-nuxt-state) util.

### [Initializing State](https://nuxt.com/docs/4.x/getting-started/state-management\#initializing-state)

Most of the time, you will want to initialize your state with data that resolves asynchronously. You can use the [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app) component with the [`callOnce`](https://nuxt.com/docs/4.x/api/utils/call-once) util to do so.

app/app.vue

```vue
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>
```

This is similar to the [`nuxtServerInit` action](https://v2.nuxt.com/docs/directory-structure/store/#the-nuxtserverinit-action) in Nuxt 2, which allows filling the initial state of your store server-side before rendering the page.

[Docs > 4 X > API > Utils > Call Once](https://nuxt.com/docs/4.x/api/utils/call-once) Read more in Docs > 4 X > API > Utils > Call Once.

### [Usage with Pinia](https://nuxt.com/docs/4.x/getting-started/state-management\#usage-with-pinia)

In this example, we leverage the [Pinia module](https://nuxt.com/modules/pinia) to create a global store and use it across the app.

Make sure to install the Pinia module with `npx nuxt module add pinia` or follow the [module's installation steps](https://pinia.vuejs.org/ssr/nuxt.html#Installation).

app/stores/website.tsapp/app.vue

```ts
export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: '',
  }),
  actions: {
    async fetch () {
      const infos = await $fetch('https://api.nuxt.com/modules/pinia')

      this.name = infos.name
      this.description = infos.description
    },
  },
})
```

```vue
<script setup lang="ts">
const website = useWebsiteStore()

await callOnce(website.fetch)
</script>

<template>
  <main>
    <h1>{{ website.name }}</h1>
    <p>{{ website.description }}</p>
  </main>
</template>
```

## [Advanced Usage](https://nuxt.com/docs/4.x/getting-started/state-management\#advanced-usage)

app/composables/locale.tsapp/app.vue

```ts
import type { Ref } from 'vue'

export const useLocale = () => {
  return useState<string>('locale', () => useDefaultLocale().value)
}

export const useDefaultLocale = (fallback = 'en-US') => {
  const locale = ref(fallback)
  if (import.meta.server) {
    const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0]
    if (reqLocale) {
      locale.value = reqLocale
    }
  } else if (import.meta.client) {
    const navLang = navigator.language
    if (navLang) {
      locale.value = navLang
    }
  }
  return locale
}

export const useLocales = () => {
  const locale = useLocale()
  const locales = ref([\
    'en-US',\
    'en-GB',\
    // ...,\
    'ja-JP-u-ca-japanese',\
  ])
  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value)
  }
  return locales
}

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'full' }).format(unref(date)))
}
```

```vue
<script setup lang="ts">
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))
</script>

<template>
  <div>
    <h1>Nuxt birthday</h1>
    <p>{{ date }}</p>
    <label for="locale-chooser">Preview a different locale</label>
    <select
      id="locale-chooser"
      v-model="locale"
    >
      <option
        v-for="loc of locales"
        :key="loc"
        :value="loc"
      >
        {{ loc }}
      </option>
    </select>
  </div>
</template>
```

Read and edit a live example in [Docs > 4 X > Examples > Advanced > Locale](https://nuxt.com/docs/4.x/examples/advanced/locale).

## [Shared State](https://nuxt.com/docs/4.x/getting-started/state-management\#shared-state)

By using [auto-imported composables](https://nuxt.com/docs/4.x/directory-structure/app/composables) we can define global type-safe states and import them across the app.

composables/states.ts

```ts
export const useColor = () => useState<string>('color', () => 'pink')
```

app/app.vue

```vue
<script setup lang="ts">
// ---cut-start---
const useColor = () => useState<string>('color', () => 'pink')
// ---cut-end---
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>
```

Watch a video from Daniel Roe on how to deal with global state and SSR in Nuxt

## [Using third-party libraries](https://nuxt.com/docs/4.x/getting-started/state-management\#using-third-party-libraries)

Nuxt **used to rely** on the Vuex library to provide global state management. If you are migrating from Nuxt 2, please head to [the migration guide](https://nuxt.com/docs/4.x/migration/configuration#vuex).

Nuxt is not opinionated about state management, so feel free to choose the right solution for your needs. There are multiple integrations with the most popular state management libraries, including:

- [Pinia](https://nuxt.com/modules/pinia) \- the official Vue recommendation
- [Harlem](https://nuxt.com/modules/harlem) \- immutable global state management
- [XState](https://nuxt.com/modules/xstate) \- state machine approach with tools for visualizing and testing your state logic

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/11.state-management.md)

[Data Fetching\\
\\
Nuxt provides composables to handle data fetching within your application.](https://nuxt.com/docs/4.x/getting-started/data-fetching) [Error Handling\\
\\
Learn how to catch and handle errors in Nuxt.](https://nuxt.com/docs/4.x/getting-started/error-handling)

On this page

On this page

- [Best Practices](https://nuxt.com/docs/4.x/getting-started/state-management#best-practices)
- [Examples](https://nuxt.com/docs/4.x/getting-started/state-management#examples)
  - [Basic Usage](https://nuxt.com/docs/4.x/getting-started/state-management#basic-usage)
  - [Initializing State](https://nuxt.com/docs/4.x/getting-started/state-management#initializing-state)
  - [Usage with Pinia](https://nuxt.com/docs/4.x/getting-started/state-management#usage-with-pinia)
- [Advanced Usage](https://nuxt.com/docs/4.x/getting-started/state-management#advanced-usage)
- [Shared State](https://nuxt.com/docs/4.x/getting-started/state-management#shared-state)
- [Using third-party libraries](https://nuxt.com/docs/4.x/getting-started/state-management#using-third-party-libraries)

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