---
url: "https://nuxt.com/docs/4.x/guide/best-practices/hydration"
title: "Nuxt and hydration · Best Practices v4"
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

- Key Concepts


- [Rendering Modes](https://nuxt.com/docs/4.x/guide/concepts/rendering)
- [Nuxt Lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle)
- [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)
- [Server Engine](https://nuxt.com/docs/4.x/guide/concepts/server-engine)
- [Modules](https://nuxt.com/docs/4.x/guide/concepts/modules)
- [TypeScript](https://nuxt.com/docs/4.x/guide/concepts/typescript)
- [Code Style](https://nuxt.com/docs/4.x/guide/concepts/code-style)

- Best Practices


- [Nuxt and hydration](https://nuxt.com/docs/4.x/guide/best-practices/hydration)
- [Nuxt Performance](https://nuxt.com/docs/4.x/guide/best-practices/performance)
- [Nuxt Plugins](https://nuxt.com/docs/4.x/guide/best-practices/plugins)

- Working with AI


- [MCP Server](https://nuxt.com/docs/4.x/guide/ai/mcp)
- [LLMs.txt](https://nuxt.com/docs/4.x/guide/ai/llms-txt)

- Recipes


- [Custom Routing](https://nuxt.com/docs/4.x/guide/recipes/custom-routing)
- [Vite Plugins](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin)
- [Custom useFetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)
- [Sessions and Authentication](https://nuxt.com/docs/4.x/guide/recipes/sessions-and-authentication)

- Going Further


- [Custom Events](https://nuxt.com/docs/4.x/guide/going-further/events)
- [Experimental Features](https://nuxt.com/docs/4.x/guide/going-further/experimental-features)
- [Features](https://nuxt.com/docs/4.x/guide/going-further/features)
- [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)
- [Nightly Release Channel](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel)
- [Lifecycle Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks)
- [Module Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules)
- [Nuxt Kit](https://nuxt.com/docs/4.x/guide/going-further/kit)
- [NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app)
- [Authoring Nuxt Layers](https://nuxt.com/docs/4.x/guide/going-further/layers)
- [Debugging](https://nuxt.com/docs/4.x/guide/going-further/debugging)

1. [Guide](https://nuxt.com/docs/4.x/guide)
3. [Best Practices](https://nuxt.com/docs/4.x/guide/best-practices)

# Nuxt and hydration

Copy page

Why fixing hydration issues is important

When developing, you may face hydration issues. Don't ignore those warnings.

# Why is it important to fix them?

Hydration mismatches are not just warnings - they are indicators of serious problems that can break your application:

## [Performance Impact](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#performance-impact)

- **Increased time to interactive**: Hydration errors force Vue to re-render the entire component tree, which will increase the time for your Nuxt app to become interactive
- **Poor user experience**: Users may see content flashing or unexpected layout shifts

## [Functionality Issues](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#functionality-issues)

- **Broken interactivity**: Event listeners may not attach properly, leaving buttons and forms non-functional
- **State inconsistencies**: Application state can become out of sync between what the user sees and what the application thinks is rendered
- **SEO problems**: Search engines may index different content than what users actually see

# How to detect them

## [Development Console Warnings](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#development-console-warnings)

Vue will log hydration mismatch warnings in the browser console during development:

![Screenshot of Vue hydration mismatch warning in the browser console](https://ipx.nuxt.com/_/assets/docs/best-practices/vue-console-hydration.png)

# Common reasons

## [Browser-only APIs in Server Context](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#browser-only-apis-in-server-context)

**Problem**: Using browser-specific APIs during server-side rendering.

```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This will cause hydration mismatch!
// localStorage doesn't exist on the server!
const userTheme = localStorage.getItem('theme') || 'light'
</script>
```

**Solution**: You can use [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie):

```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This works on both server and client
const userTheme = useCookie('theme', { default: () => 'light' })
</script>
```

## [Inconsistent Data](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#inconsistent-data)

**Problem**: Different data between server and client.

```html
<template>
  <div>{{ Math.random() }}</div>
</template>
```

**Solution**: Use SSR-friendly state:

```html
<template>
  <div>{{ state }}</div>
</template>

<script setup>
const state = useState('random', () => Math.random())
</script>
```

## [Conditional Rendering Based on Client State](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#conditional-rendering-based-on-client-state)

**Problem**: Using client-only conditions during SSR.

```html
<template>
  <div v-if="window?.innerWidth > 768">
    Desktop content
  </div>
</template>
```

**Solution**: Use media queries or handle it client-side:

```html
<template>
  <div class="responsive-content">
    <div class="hidden md:block">Desktop content</div>
    <div class="md:hidden">Mobile content</div>
  </div>
</template>
```

## [Third-party Libraries with Side Effects](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#third-party-libraries-with-side-effects)

**Problem**: Libraries that modify the DOM or have browser dependencies (this happens a LOT with tag managers).

```html
<script setup>
if (import.meta.client) {
    const { default: SomeBrowserLibrary } = await import('browser-only-lib')
    SomeBrowserLibrary.init()
}
</script>
```

**Solution**: Initialise libraries after hydration has completed:

```html
<script setup>
onMounted(async () => {
  const { default: SomeBrowserLibrary } = await import('browser-only-lib')
  SomeBrowserLibrary.init()
})
</script>
```

## [Dynamic Content Based on Time](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#dynamic-content-based-on-time)

**Problem**: Content that changes based on current time.

```html
<template>
  <div>{{ greeting }}</div>
</template>

<script setup>
const hour = new Date().getHours()
const greeting = hour < 12 ? 'Good morning' : 'Good afternoon'
</script>
```

**Solution**: Use [`NuxtTime`](https://nuxt.com/docs/4.x/api/components/nuxt-time) component or handle it client-side:

```html
<template>
  <div>
    <NuxtTime :date="new Date()" format="HH:mm" />
  </div>
</template>
```

```html
<template>
  <div>
    <ClientOnly>
      {{ greeting }}
      <template #fallback>
        Hello!
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
const greeting = ref('Hello!')

onMounted(() => {
  const hour = new Date().getHours()
  greeting.value = hour < 12 ? 'Good morning' : 'Good afternoon'
})
</script>
```

## [In summary](https://nuxt.com/docs/4.x/guide/best-practices/hydration\#in-summary)

1. **Use SSR-friendly composables**: [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch), [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data), [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state)
2. **Wrap client-only code**: Use [`ClientOnly`](https://nuxt.com/docs/4.x/api/components/client-only) component for browser-specific content
3. **Consistent data sources**: Ensure server and client uses the same data
4. **Avoid side effects in setup**: Move browser-dependent code to `onMounted`

You can read the [Vue documentation on SSR hydration mismatch](https://vuejs.org/guide/scaling-up/ssr#hydration-mismatch) for a better understanding of hydration.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/2.best-practices/hydration.md)

[Code Style\\
\\
Nuxt supports ESLint out of the box](https://nuxt.com/docs/4.x/guide/concepts/code-style) [Nuxt Performance\\
\\
Best practices for improving performance of Nuxt apps.](https://nuxt.com/docs/4.x/guide/best-practices/performance)

On this page

On this page

- [Performance Impact](https://nuxt.com/docs/4.x/guide/best-practices/hydration#performance-impact)
- [Functionality Issues](https://nuxt.com/docs/4.x/guide/best-practices/hydration#functionality-issues)
- [Development Console Warnings](https://nuxt.com/docs/4.x/guide/best-practices/hydration#development-console-warnings)
- [Browser-only APIs in Server Context](https://nuxt.com/docs/4.x/guide/best-practices/hydration#browser-only-apis-in-server-context)
- [Inconsistent Data](https://nuxt.com/docs/4.x/guide/best-practices/hydration#inconsistent-data)
- [Conditional Rendering Based on Client State](https://nuxt.com/docs/4.x/guide/best-practices/hydration#conditional-rendering-based-on-client-state)
- [Third-party Libraries with Side Effects](https://nuxt.com/docs/4.x/guide/best-practices/hydration#third-party-libraries-with-side-effects)
- [Dynamic Content Based on Time](https://nuxt.com/docs/4.x/guide/best-practices/hydration#dynamic-content-based-on-time)
- [In summary](https://nuxt.com/docs/4.x/guide/best-practices/hydration#in-summary)

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