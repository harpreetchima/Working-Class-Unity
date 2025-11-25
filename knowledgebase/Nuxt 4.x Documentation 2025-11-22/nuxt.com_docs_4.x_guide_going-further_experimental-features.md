---
url: "https://nuxt.com/docs/4.x/guide/going-further/experimental-features"
title: "Experimental Features · Nuxt Advanced v4"
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
3. [Going Further](https://nuxt.com/docs/4.x/guide/going-further)

# Experimental Features

Copy page

Enable Nuxt experimental features to unlock new possibilities.

Nuxt includes experimental features that you can enable in your configuration file.

Internally, Nuxt uses `@nuxt/schema` to define these experimental features. You can refer to the [API documentation](https://nuxt.com/docs/4.x/guide/going-further/experimental-features) or the [source code](https://github.com/nuxt/nuxt/blob/main/packages/schema/src/config/experimental.ts) for more information.

Note that these features are experimental and could be removed or modified in the future.

## [alwaysRunFetchOnKeyChange](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#alwaysrunfetchonkeychange)

Whether to run `useFetch` when the key changes, even if it is set to `immediate: false` and it has not been triggered yet.

`useFetch` and `useAsyncData` will always run when the key changes if `immediate: true` or if it has been already triggered.

This flag is disabled by default, but you can enable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    alwaysRunFetchOnKeyChange: true,
  },
})
```

## [appManifest](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#appmanifest)

Use app manifests to respect route rules on client-side.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    appManifest: false,
  },
})
```

## [asyncContext](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#asynccontext)

Enable native async context to be accessible for nested composables in Nuxt and in Nitro. This opens the possibility to use composables inside async composables and reduce the chance to get the `Nuxt instance is unavailable` error.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    asyncContext: true,
  },
})
```

[https://github.com/nuxt/nuxt/pull/20918](https://github.com/nuxt/nuxt/pull/20918) See full explanation on the GitHub pull-request.

## [asyncEntry](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#asyncentry)

Enables generation of an async entry point for the Vue bundle, aiding module federation support.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    asyncEntry: true,
  },
})
```

## [externalVue](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#externalvue)

Externalizes `vue`, `@vue/*` and `vue-router` when building.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    externalVue: false,
  },
})
```

This feature will likely be removed in a near future.

## [extractAsyncDataHandlers](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#extractasyncdatahandlers)

Extracts handler functions from `useAsyncData` and `useLazyAsyncData` calls into separate chunks for improved code splitting and caching efficiency.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    extractAsyncDataHandlers: true,
  },
})
```

This feature transforms inline handler functions into dynamically imported chunks:

```vue
<!-- Before -->
<script setup>
const { data } = await useAsyncData('user', async () => {
  return await $fetch('/api/user')
})
</script>
```

```vue
<!-- After transformation -->
<script setup>
const { data } = await useAsyncData('user', () =>
  import('/generated-chunk.js').then(r => r.default()),
)
</script>
```

The benefit of this transformation is that we can split out data fetching logic — while still allowing the code to be loaded if required.

This feature is only recommended for **static builds** with payload extraction, and where data does not need to be re-fetched at runtime.

## [emitRouteChunkError](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#emitroutechunkerror)

Emits `app:chunkError` hook when there is an error loading vite/webpack chunks. Default behavior is to perform a reload of the new route on navigation to a new route when a chunk fails to load.

By default, Nuxt will also perform a reload of the new route when a chunk fails to load when navigating to a new route (`automatic`).

Setting `automatic-immediate` will lead Nuxt to perform a reload of the current route right when a chunk fails to load (instead of waiting for navigation). This is useful for chunk errors that are not triggered by navigation, e.g., when your Nuxt app fails to load a [lazy component](https://nuxt.com/docs/4.x/directory-structure/app/components#dynamic-imports). A potential downside of this behavior is undesired reloads, e.g., when your app does not need the chunk that caused the error.

You can disable automatic handling by setting this to `false`, or handle chunk errors manually by setting it to `manual`.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    emitRouteChunkError: 'automatic', // or 'automatic-immediate', 'manual' or false
  },
})
```

## [enforceModuleCompatibility](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#enforcemodulecompatibility)

Whether Nuxt should throw an error (and fail to load) if a Nuxt module is incompatible.

This feature is disabled by default.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    enforceModuleCompatibility: true,
  },
})
```

## [restoreState](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#restorestate)

Allows Nuxt app state to be restored from `sessionStorage` when reloading the page after a chunk error or manual [`reloadNuxtApp()`](https://nuxt.com/docs/4.x/api/utils/reload-nuxt-app) call.

To avoid hydration errors, it will be applied only after the Vue app has been mounted, meaning there may be a flicker on initial load.

Consider carefully before enabling this as it can cause unexpected behavior,
and consider providing explicit keys to [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) as auto-generated keys may not match across builds.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    restoreState: true,
  },
})
```

## [inlineRouteRules](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#inlinerouterules)

Define route rules at the page level using [`defineRouteRules`](https://nuxt.com/docs/4.x/api/utils/define-route-rules).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    inlineRouteRules: true,
  },
})
```

Matching route rules will be created, based on the page's `path`.

[Docs > 4 X > API > Utils > Define Route Rules](https://nuxt.com/docs/4.x/api/utils/define-route-rules) Read more in `defineRouteRules` utility.

[Docs > 4 X > Guide > Concepts > Rendering#hybrid Rendering](https://nuxt.com/docs/4.x/guide/concepts/rendering#hybrid-rendering) Read more in Docs > 4 X > Guide > Concepts > Rendering#hybrid Rendering.

## [renderJsonPayloads](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#renderjsonpayloads)

Allows rendering of JSON payloads with support for revivifying complex types.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    renderJsonPayloads: false,
  },
})
```

## [noVueServer](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#novueserver)

Disables Vue server renderer endpoint within Nitro.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    noVueServer: true,
  },
})
```

## [parseErrorData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#parseerrordata)

Whether to parse `error.data` when rendering a server error page.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    parseErrorData: false,
  },
})
```

## [payloadExtraction](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#payloadextraction)

Enables extraction of payloads of pages generated with `nuxt generate`.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
})
```

## [clientFallback](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#clientfallback)

Enables the experimental [`<NuxtClientFallback>`](https://nuxt.com/docs/4.x/api/components/nuxt-client-fallback) component for rendering content on the client if there's an error in SSR.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    clientFallback: true,
  },
})
```

## [crossOriginPrefetch](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#crossoriginprefetch)

Enables cross-origin prefetch using the Speculation Rules API.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    crossOriginPrefetch: true,
  },
})
```

[https://wicg.github.io/nav-speculation/prefetch.html](https://wicg.github.io/nav-speculation/prefetch.html) Read more about the **Speculation Rules API**.

## [viewTransition](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#viewtransition)

Enables View Transition API integration with client-side router.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
})
```

Read and edit a live example in [https://stackblitz.com/edit/nuxt-view-transitions?file=app.vue](https://stackblitz.com/edit/nuxt-view-transitions?file=app.vue).

[https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) Read more about the **View Transition API**.

## [writeEarlyHints](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#writeearlyhints)

Enables writing of early hints when using node server.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    writeEarlyHints: true,
  },
})
```

## [componentIslands](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#componentislands)

Enables experimental component islands support with [`<NuxtIsland>`](https://nuxt.com/docs/4.x/api/components/nuxt-island) and `.island.vue` files.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    componentIslands: true, // false or 'local+remote'
  },
})
```

[Docs > 4 X > Directory Structure > App > Components#server Components](https://nuxt.com/docs/4.x/directory-structure/app/components#server-components) Read more in Docs > 4 X > Directory Structure > App > Components#server Components.

[https://github.com/nuxt/nuxt/issues/19772](https://github.com/nuxt/nuxt/issues/19772) You can follow the server components roadmap on GitHub.

## [localLayerAliases](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#locallayeraliases)

Resolve `~`, `~~`, `@` and `@@` aliases located within layers with respect to their layer source and root directories.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    localLayerAliases: false,
  },
})
```

## [typedPages](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#typedpages)

Enable the new experimental typed router using [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
})
```

Out of the box, this will enable typed usage of [`navigateTo`](https://nuxt.com/docs/4.x/api/utils/navigate-to), [`<NuxtLink>`](https://nuxt.com/docs/4.x/api/components/nuxt-link), [`router.push()`](https://nuxt.com/docs/4.x/api/composables/use-router) and more.

You can even get typed params within a page by using `const route = useRoute('route-name')`.

If you use `pnpm` without `shamefully-hoist=true`, you will need to have `unplugin-vue-router` installed as a devDependency in order for this feature to work.

Watch a video from Daniel Roe explaining type-safe routing in Nuxt

## [watcher](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#watcher)

Set an alternative watcher that will be used as the watching service for Nuxt.

Nuxt uses `chokidar-granular` by default, which will ignore top-level directories
(like `node_modules` and `.git`) that are excluded from watching.

You can set this instead to `parcel` to use `@parcel/watcher`, which may improve
performance in large projects or on Windows platforms.

You can also set this to `chokidar` to watch all files in your source directory.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    watcher: 'chokidar-granular', // 'chokidar' or 'parcel' are also options
  },
})
```

## [sharedPrerenderData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#sharedprerenderdata)

Nuxt automatically shares payload _data_ between pages that are prerendered. This can result in a significant performance improvement when prerendering sites that use `useAsyncData` or `useFetch` and fetch the same data in different pages.

You can disable this feature if needed.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: false,
  },
})
```

Watch a video from Alexander Lichter about the experimental sharedPrerenderData

It is particularly important when enabling this feature to make sure that any unique key of your data
is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch
data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch`
should do this automatically for you.)

```ts
// This would be unsafe in a dynamic page (e.g. `[slug].vue`) because the route slug makes a difference
// to the data fetched, but Nuxt can't know that because it's not reflected in the key.
const route = useRoute()
const { data } = await useAsyncData(async (_nuxtApp, { signal }) => {
  return await $fetch(`/api/my-page/${route.params.slug}`, { signal })
})
// Instead, you should use a key that uniquely identifies the data fetched.
const { data } = await useAsyncData(route.params.slug, async (_nuxtApp, { signal }) => {
  return await $fetch(`/api/my-page/${route.params.slug}`, { signal })
})
```

## [clientNodeCompat](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#clientnodecompat)

With this feature, Nuxt will automatically polyfill Node.js imports in the client build using [`unenv`](https://github.com/unjs/unenv).

To make globals like `Buffer` work in the browser, you need to manually inject them.

```ts
import { Buffer } from 'node:buffer'

globalThis.Buffer ||= Buffer
```

## [scanPageMeta](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#scanpagemeta)

Nuxt exposing some route metadata defined in `definePageMeta` at build-time to modules (specifically `alias`, `name`, `path`, `redirect`, `props` and `middleware`).

This only works with static or strings/arrays rather than variables or conditional assignment. See [original issue](https://github.com/nuxt/nuxt/issues/24770) for more information and context.

By default page metadata is only scanned after all routes have been registered in `pages:extend`. Then another hook, `pages:resolved` will be called.

You can disable this feature if it causes issues in your project.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    scanPageMeta: false,
  },
})
```

## [cookieStore](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#cookiestore)

Enables CookieStore support to listen for cookie updates (if supported by the browser) and refresh `useCookie` ref values.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    cookieStore: false,
  },
})
```

[https://developer.mozilla.org/en-US/docs/Web/API/CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore) Read more about the **CookieStore**.

## [buildCache](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#buildcache)

Caches Nuxt build artifacts based on a hash of the configuration and source files.

This only works for source files within `srcDir` and `serverDir` for the Vue/Nitro parts of your app.

This flag is disabled by default, but you can enable it:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    buildCache: true,
  },
})
```

When enabled, changes to the following files will trigger a full rebuild:

Directory structure

```bash
.nuxtrc
.npmrc
package.json
package-lock.json
yarn.lock
pnpm-lock.yaml
tsconfig.json
bun.lock
bun.lockb
```

In addition, any changes to files within `srcDir` will trigger a rebuild of the Vue client/server bundle. Nitro will always be rebuilt (though work is in progress to allow Nitro to announce its cacheable artifacts and their hashes).

A maximum of 10 cache tarballs are kept.

## [checkOutdatedBuildInterval](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#checkoutdatedbuildinterval)

Set the time interval (in ms) to check for new builds. Disabled when `experimental.appManifest` is `false`.

Set to `false` to disable.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    checkOutdatedBuildInterval: 3600000, // 1 hour, or false to disable
  },
})
```

## [extraPageMetaExtractionKeys](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#extrapagemetaextractionkeys)

The `definePageMeta()` macro is a useful way to collect build-time meta about pages. Nuxt itself provides a set list of supported keys which is used to power some of the internal features such as redirects, page aliases and custom paths.

This option allows passing additional keys to extract from the page metadata when using `scanPageMeta`.

```vue
<script lang="ts" setup>
definePageMeta({
  foo: 'bar',
})
</script>
```

```ts
export default defineNuxtConfig({
  experimental: {
    extraPageMetaExtractionKeys: ['foo'],
  },
  hooks: {
    'pages:resolved' (ctx) {
      // ✅ foo is available
    },
  },
})
```

This allows modules to access additional metadata from the page metadata in the build context. If you are using this within a module, it's recommended also to [augment the `NuxtPage` types with your keys](https://nuxt.com/docs/4.x/directory-structure/app/pages#typing-custom-metadata).

## [navigationRepaint](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#navigationrepaint)

Wait for a single animation frame before navigation, which gives an opportunity for the browser to repaint, acknowledging user interaction.

It can reduce INP when navigating on prerendered routes.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    navigationRepaint: false,
  },
})
```

## [normalizeComponentNames](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#normalizecomponentnames)

Nuxt updates auto-generated Vue component names to match the full component name you would use to auto-import the component.

If you encounter issues, you can disable this feature.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    normalizeComponentNames: false,
  },
})
```

By default, if you haven't set it manually, Vue will assign a component name that matches
the filename of the component.

Directory structure

```bash
├─ components/
├─── SomeFolder/
├───── MyComponent.vue
```

In this case, the component name would be `MyComponent`, as far as Vue is concerned. If you wanted to use `<KeepAlive>` with it, or identify it in the Vue DevTools, you would need to use this component.

But in order to auto-import it, you would need to use `SomeFolderMyComponent`.

By setting `experimental.normalizeComponentNames`, these two values match, and Vue will generate a component name that matches the Nuxt pattern for component naming.

## [spaLoadingTemplateLocation](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#spaloadingtemplatelocation)

When rendering a client-only page (with `ssr: false`), we optionally render a loading screen (from `~/spa-loading-template.html`).

It can be set to `within`, which will render it like this:

```html
<div id="__nuxt">
  <!-- spa loading template -->
</div>
```

Alternatively, you can render the template alongside the Nuxt app root by setting it to `body`:

```html
<div id="__nuxt"></div>
<!-- spa loading template -->
```

This avoids a white flash when hydrating a client-only page.

## [browserDevtoolsTiming](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#browserdevtoolstiming)

Enables performance markers for Nuxt hooks in browser devtools. This adds performance markers that you can track in the Performance tab of Chromium-based browsers, which is useful for debugging and optimizing performance.

This is enabled by default in development mode. If you need to disable this feature, it is possible to do so:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    browserDevtoolsTiming: false,
  },
})
```

[https://github.com/nuxt/nuxt/pull/29922](https://github.com/nuxt/nuxt/pull/29922) See PR #29922 for implementation details.

[https://developer.chrome.com/docs/devtools/performance/extension#tracks](https://developer.chrome.com/docs/devtools/performance/extension#tracks) Learn more about Chrome DevTools Performance API.

## [debugModuleMutation](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#debugmodulemutation)

Records mutations to `nuxt.options` in module context, helping to debug configuration changes made by modules during the Nuxt initialization phase.

This is enabled by default when `debug` mode is enabled. If you need to disable this feature, it is possible to do so:

To enable it explicitly:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    debugModuleMutation: true,
  },
})
```

[https://github.com/nuxt/nuxt/pull/30555](https://github.com/nuxt/nuxt/pull/30555) See PR #30555 for implementation details.

## [lazyHydration](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#lazyhydration)

This enables hydration strategies for `<Lazy>` components, which improves performance by deferring hydration of components until they're needed.

Lazy hydration is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    lazyHydration: false,
  },
})
```

[Docs > 4 X > Directory Structure > App > Components#delayed Or Lazy Hydration](https://nuxt.com/docs/4.x/directory-structure/app/components#delayed-or-lazy-hydration) Read more about lazy hydration.

## [templateImportResolution](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#templateimportresolution)

Disable resolving imports into Nuxt templates from the path of the module that added the template.

By default, Nuxt attempts to resolve imports in templates relative to the module that added them. Setting this to `false` disables this behavior, which may be useful if you're experiencing resolution conflicts in certain environments.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    templateImportResolution: false,
  },
})
```

[https://github.com/nuxt/nuxt/pull/31175](https://github.com/nuxt/nuxt/pull/31175) See PR #31175 for implementation details.

## [templateRouteInjection](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#templaterouteinjection)

By default the route object returned by the auto-imported `useRoute()` composable is kept in sync with the current page in view in `<NuxtPage>`. This is not true for `vue-router`'s exported `useRoute` or for the default `$route` object available in your Vue templates.

By enabling this option a mixin will be injected to keep the `$route` template object in sync with Nuxt's managed `useRoute()`.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    templateRouteInjection: false,
  },
})
```

## [decorators](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#decorators)

This option enables enabling decorator syntax across your entire Nuxt/Nitro app, powered by [esbuild](https://github.com/evanw/esbuild/releases/tag/v0.21.3).

For a long time, TypeScript has had support for decorators via `compilerOptions.experimentalDecorators`. This implementation predated the TC39 standardization process. Now, decorators are a [Stage 3 Proposal](https://github.com/tc39/proposal-decorators), and supported without special configuration in TS 5.0+ (see [https://github.com/microsoft/TypeScript/pull/52582](https://github.com/microsoft/TypeScript/pull/52582) and [https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#decorators](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#decorators)).

Enabling `experimental.decorators` enables support for the TC39 proposal, **NOT** for TypeScript's previous `compilerOptions.experimentalDecorators` implementation.

Note that there may be changes before this finally lands in the JS standard.

### [Usage](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#usage)

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    decorators: true,
  },
})
```

app/app.vue

```ts
function something (_method: () => unknown) {
  return () => 'decorated'
}

class SomeClass {
  @something
  public someMethod () {
    return 'initial'
  }
}

const value = new SomeClass().someMethod()
// this will return 'decorated'
```

## [defaults](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#defaults)

This allows specifying the default options for core Nuxt components and composables.

These options will likely be moved elsewhere in the future, such as into `app.config` or into the `app/` directory.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: 'NuxtLink',
        prefetch: true,
        prefetchOn: {
          visibility: true,
        },
      },
      useAsyncData: {
        deep: true,
      },
    },
  },
})
```

## [purgeCachedData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#purgecacheddata)

Whether to clean up Nuxt static and asyncData caches on route navigation.

Nuxt will automatically purge cached data from `useAsyncData` and `nuxtApp.static.data`. This helps prevent memory leaks and ensures fresh data is loaded when needed, but it is possible to disable it.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    purgeCachedData: false,
  },
})
```

[https://github.com/nuxt/nuxt/pull/31379](https://github.com/nuxt/nuxt/pull/31379) See PR #31379 for implementation details.

## [granularCachedData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#granularcacheddata)

Whether to call and use the result from `getCachedData` when refreshing data for `useAsyncData` and `useFetch` (whether by `watch`, `refreshNuxtData()`, or a manual `refresh()` call.

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    granularCachedData: false,
  },
})
```

[https://github.com/nuxt/nuxt/pull/31373](https://github.com/nuxt/nuxt/pull/31373) See PR #31373 for implementation details.

## [headNext](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#headnext)

Use head optimisations:

- Add the capo.js head plugin in order to render tags in of the head in a more performant way.
- Uses the hash hydration plugin to reduce initial hydration

This flag is enabled by default, but you can disable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    headNext: false,
  },
})
```

## [pendingWhenIdle](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#pendingwhenidle)

For `useAsyncData` and `useFetch`, whether `pending` should be `true` when data has not yet started to be fetched.

This flag is disabled by default, but you can enable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    pendingWhenIdle: true,
  },
})
```

## [entryImportMap](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#entryimportmap)

By default, Nuxt improves chunk stability by using an import map to resolve the entry chunk of the bundle.

This injects an import map at the top of your `<head>` tag:

```html
<script type="importmap">{"imports":{"#entry":"/_nuxt/DC5HVSK5.js"}}</script>
```

Within the script chunks emitted by Vite, imports will be from `#entry`. This means that changes to the entry will not invalidate chunks which are otherwise unchanged.

Nuxt smartly disables this feature if you have configured `vite.build.target` to include a browser that doesn't support import maps, or if you have configured `vite.build.rollupOptions.output.entryFileNames` to a value that does not include `[hash]`.

If you need to disable this feature you can do so:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    entryImportMap: false,
  },
  // or, better, simply tell vite your desired target
  // which nuxt will respect
  vite: {
    build: {
      target: 'safari13',
    },
  },
})
```

## [typescriptPlugin](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#typescriptplugin)

Enable enhanced TypeScript developer experience with the `@dxup/nuxt` module.

This experimental plugin provides improved TypeScript integration and development tooling for better DX when working with TypeScript in Nuxt applications.

This flag is disabled by default, but you can enable this feature:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    typescriptPlugin: true,
  },
})
```

To use this feature, you need to:

- Have `typescript` installed as a dependency
- Configure VS Code to use your workspace TypeScript version (see [VS Code documentation](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript))

[https://github.com/KazariEX/dxup](https://github.com/KazariEX/dxup) Learn more about **@dxup/nuxt**.

## [viteEnvironmentApi](https://nuxt.com/docs/4.x/guide/going-further/experimental-features\#viteenvironmentapi)

Enable Vite 6's new [Environment API](https://vite.dev/guide/api-environment) for improved build configuration and plugin architecture.

When you set `future.compatibilityVersion` to `5`, this feature is enabled by default. You can also enable it explicitly for testing:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  experimental: {
    viteEnvironmentApi: true,
  },
})
```

The Vite Environment API provides better consistency between development and production builds, more granular control over environment-specific configuration, and improved performance.

Enabling this feature changes how Vite plugins are registered and configured. See the [Vite Environment API migration guide](https://nuxt.com/docs/4.x/getting-started/upgrade#migration-to-vite-environment-api) for details on updating your plugins.

[https://vite.dev/guide/api-environment](https://vite.dev/guide/api-environment) Learn more about Vite's Environment API.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/1.experimental-features.md)

[Custom Events\\
\\
Nuxt provides a powerful event system powered by hookable.](https://nuxt.com/docs/4.x/guide/going-further/events) [Features\\
\\
Enable or disable optional Nuxt features to unlock new possibilities.](https://nuxt.com/docs/4.x/guide/going-further/features)

On this page

On this page

- [alwaysRunFetchOnKeyChange](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#alwaysrunfetchonkeychange)
- [appManifest](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#appmanifest)
- [asyncContext](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#asynccontext)
- [asyncEntry](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#asyncentry)
- [externalVue](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#externalvue)
- [extractAsyncDataHandlers](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#extractasyncdatahandlers)
- [emitRouteChunkError](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#emitroutechunkerror)
- [enforceModuleCompatibility](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#enforcemodulecompatibility)
- [restoreState](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#restorestate)
- [inlineRouteRules](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#inlinerouterules)
- [renderJsonPayloads](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#renderjsonpayloads)
- [noVueServer](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#novueserver)
- [parseErrorData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#parseerrordata)
- [payloadExtraction](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#payloadextraction)
- [clientFallback](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#clientfallback)
- [crossOriginPrefetch](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#crossoriginprefetch)
- [viewTransition](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#viewtransition)
- [writeEarlyHints](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#writeearlyhints)
- [componentIslands](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#componentislands)
- [localLayerAliases](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#locallayeraliases)
- [typedPages](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#typedpages)
- [watcher](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#watcher)
- [sharedPrerenderData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#sharedprerenderdata)
- [clientNodeCompat](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#clientnodecompat)
- [scanPageMeta](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#scanpagemeta)
- [cookieStore](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#cookiestore)
- [buildCache](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#buildcache)
- [checkOutdatedBuildInterval](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#checkoutdatedbuildinterval)
- [extraPageMetaExtractionKeys](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#extrapagemetaextractionkeys)
- [navigationRepaint](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#navigationrepaint)
- [normalizeComponentNames](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#normalizecomponentnames)
- [spaLoadingTemplateLocation](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#spaloadingtemplatelocation)
- [browserDevtoolsTiming](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#browserdevtoolstiming)
- [debugModuleMutation](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#debugmodulemutation)
- [lazyHydration](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#lazyhydration)
- [templateImportResolution](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#templateimportresolution)
- [templateRouteInjection](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#templaterouteinjection)
- [decorators](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#decorators)
  - [Usage](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#usage)
- [defaults](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#defaults)
- [purgeCachedData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#purgecacheddata)
- [granularCachedData](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#granularcacheddata)
- [headNext](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#headnext)
- [pendingWhenIdle](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#pendingwhenidle)
- [entryImportMap](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#entryimportmap)
- [typescriptPlugin](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#typescriptplugin)
- [viteEnvironmentApi](https://nuxt.com/docs/4.x/guide/going-further/experimental-features#viteenvironmentapi)

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