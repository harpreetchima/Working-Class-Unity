---
url: "https://vuejs.org/api/composition-api-lifecycle"
title: "Composition API: Lifecycle Hooks | Vue.js"
---

[Skip to content](https://vuejs.org/api/composition-api-lifecycle#VPContent)

[Vue.js](https://vuejs.org/)

Search`Ctrl`  `K`

Main Navigation

Docs

[Guide](https://vuejs.org/guide/introduction) [Tutorial](https://vuejs.org/tutorial/) [Examples](https://vuejs.org/examples/) [Quick Start](https://vuejs.org/guide/quick-start) [Glossary](https://vuejs.org/glossary/) [Error Reference](https://vuejs.org/error-reference/) [Vue 2 Docs](https://v2.vuejs.org/) [Migration from Vue 2](https://v3-migration.vuejs.org/)

[API](https://vuejs.org/api/) [Playground](https://play.vuejs.org/)

Ecosystem

Resources

[Partners](https://vuejs.org/partners/) [Themes](https://vuejs.org/ecosystem/themes) [UI Components](https://ui-libs.vercel.app/) [Plugins Collection](https://www.vue-plugins.org/) [Certification](https://certificates.dev/vuejs/?ref=vuejs-nav) [Jobs](https://vuejobs.com/?ref=vuejs) [T-Shirt Shop](https://vue.threadless.com/)

Official Libraries

[Vue Router](https://router.vuejs.org/) [Pinia](https://pinia.vuejs.org/) [Tooling Guide](https://vuejs.org/guide/scaling-up/tooling)

Video Courses

[Vue Mastery](https://www.vuemastery.com/courses/) [Vue School](https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown)

Help

[Discord Chat](https://discord.com/invite/HBherRA) [GitHub Discussions](https://github.com/vuejs/core/discussions) [DEV Community](https://dev.to/t/vue)

News

[Blog](https://blog.vuejs.org/) [Twitter](https://x.com/vuejs) [Events](https://events.vuejs.org/) [Newsletters](https://vuejs.org/ecosystem/newsletters)

About

[FAQ](https://vuejs.org/about/faq) [Team](https://vuejs.org/about/team) [Releases](https://vuejs.org/about/releases) [Community Guide](https://vuejs.org/about/community-guide) [Code of Conduct](https://vuejs.org/about/coc) [Privacy Policy](https://vuejs.org/about/privacy) [The Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI)

[Sponsor](https://vuejs.org/sponsor/) [Partners](https://vuejs.org/partners/)

[简体中文](https://cn.vuejs.org/api/composition-api-lifecycle) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/api/composition-api-lifecycle) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/api/composition-api-lifecycle) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/api/composition-api-lifecycle) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/api/composition-api-lifecycle) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/api/composition-api-lifecycle) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/api/composition-api-lifecycle) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/api/composition-api-lifecycle) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/api/composition-api-lifecycle) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/api/composition-api-lifecycle) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/api/composition-api-lifecycle) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/api/composition-api-lifecycle) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/api/composition-api-lifecycle) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Menu

On this page

Sidebar Navigation

## Global API

[Application](https://vuejs.org/api/application) [General](https://vuejs.org/api/general)

## Composition API

[setup()](https://vuejs.org/api/composition-api-setup) [Reactivity: Core](https://vuejs.org/api/reactivity-core) [Reactivity: Utilities](https://vuejs.org/api/reactivity-utilities) [Reactivity: Advanced](https://vuejs.org/api/reactivity-advanced) [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle) [Dependency Injection](https://vuejs.org/api/composition-api-dependency-injection) [Helpers](https://vuejs.org/api/composition-api-helpers)

## Options API

[Options: State](https://vuejs.org/api/options-state) [Options: Rendering](https://vuejs.org/api/options-rendering) [Options: Lifecycle](https://vuejs.org/api/options-lifecycle) [Options: Composition](https://vuejs.org/api/options-composition) [Options: Misc](https://vuejs.org/api/options-misc) [Component Instance](https://vuejs.org/api/component-instance)

## Built-ins

[Directives](https://vuejs.org/api/built-in-directives) [Components](https://vuejs.org/api/built-in-components) [Special Elements](https://vuejs.org/api/built-in-special-elements) [Special Attributes](https://vuejs.org/api/built-in-special-attributes)

## Single-File Component

[Syntax Specification](https://vuejs.org/api/sfc-spec) [<script setup>](https://vuejs.org/api/sfc-script-setup) [CSS Features](https://vuejs.org/api/sfc-css-features)

## Advanced APIs

[Custom Elements](https://vuejs.org/api/custom-elements) [Render Function](https://vuejs.org/api/render-function) [Server-Side Rendering](https://vuejs.org/api/ssr) [TypeScript Utility Types](https://vuejs.org/api/utility-types) [Custom Renderer](https://vuejs.org/api/custom-renderer) [Compile-Time Flags](https://vuejs.org/api/compile-time-flags)

[Get Security Updates for Vue 2](https://www.herodevs.com/support/nes-vue?utm_source=vuejs_org&utm_medium=sidebar_link&utm_campaign=vue2eol)

On this page

Table of Contents for current page

- [onMounted()](https://vuejs.org/api/composition-api-lifecycle#onmounted)
- [onUpdated()](https://vuejs.org/api/composition-api-lifecycle#onupdated)
- [onUnmounted()](https://vuejs.org/api/composition-api-lifecycle#onunmounted)
- [onBeforeMount()](https://vuejs.org/api/composition-api-lifecycle#onbeforemount)
- [onBeforeUpdate()](https://vuejs.org/api/composition-api-lifecycle#onbeforeupdate)
- [onBeforeUnmount()](https://vuejs.org/api/composition-api-lifecycle#onbeforeunmount)
- [onErrorCaptured()](https://vuejs.org/api/composition-api-lifecycle#onerrorcaptured)
- [onRenderTracked()](https://vuejs.org/api/composition-api-lifecycle#onrendertracked)
- [onRenderTriggered()](https://vuejs.org/api/composition-api-lifecycle#onrendertriggered)
- [onActivated()](https://vuejs.org/api/composition-api-lifecycle#onactivated)
- [onDeactivated()](https://vuejs.org/api/composition-api-lifecycle#ondeactivated)
- [onServerPrefetch()](https://vuejs.org/api/composition-api-lifecycle#onserverprefetch)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Composition API: Lifecycle Hooks [​](https://vuejs.org/api/composition-api-lifecycle\#composition-api-lifecycle-hooks)

Usage Note

All APIs listed on this page must be called synchronously during the `setup()` phase of a component. See [Guide - Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle) for more details.

## onMounted() [​](https://vuejs.org/api/composition-api-lifecycle\#onmounted)

Registers a callback to be called after the component has been mounted.

- **Type**

ts

```
function onMounted(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

A component is considered mounted after:


  - All of its synchronous child components have been mounted (does not include async components or components inside `<Suspense>` trees).

  - Its own DOM tree has been created and inserted into the parent container. Note it only guarantees that the component's DOM tree is in-document if the application's root container is also in-document.


This hook is typically used for performing side effects that need access to the component's rendered DOM, or for limiting DOM-related code to the client in a [server-rendered application](https://vuejs.org/guide/scaling-up/ssr).

**This hook is not called during server-side rendering.**

- **Example**

Accessing an element via template ref:

vue

```
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
    el.value // <div>
})
</script>

<template>
    <div ref="el"></div>
</template>
```


## onUpdated() [​](https://vuejs.org/api/composition-api-lifecycle\#onupdated)

Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.

- **Type**

ts

```
function onUpdated(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

A parent component's updated hook is called after that of its child components.

This hook is called after any DOM update of the component, which can be caused by different state changes, because multiple state changes can be batched into a single render cycle for performance reasons. If you need to access the updated DOM after a specific state change, use [nextTick()](https://vuejs.org/api/general#nexttick) instead.

**This hook is not called during server-side rendering.**



WARNING



Do not mutate component state in the updated hook - this will likely lead to an infinite update loop!

- **Example**

Accessing updated DOM:

vue

```
<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {
    // text content should be the same as current `count.value`
    console.log(document.getElementById('count').textContent)
})
</script>

<template>
    <button id="count" @click="count++">{{ count }}</button>
</template>
```


## onUnmounted() [​](https://vuejs.org/api/composition-api-lifecycle\#onunmounted)

Registers a callback to be called after the component has been unmounted.

- **Type**

ts

```
function onUnmounted(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

A component is considered unmounted after:


  - All of its child components have been unmounted.

  - All of its associated reactive effects (render effect and computed / watchers created during `setup()`) have been stopped.


Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.

**This hook is not called during server-side rendering.**

- **Example**

vue

```
<script setup>
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() => {
    intervalId = setInterval(() => {
      // ...
    })
})

onUnmounted(() => clearInterval(intervalId))
</script>
```


## onBeforeMount() [​](https://vuejs.org/api/composition-api-lifecycle\#onbeforemount)

Registers a hook to be called right before the component is to be mounted.

- **Type**

ts

```
function onBeforeMount(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

When this hook is called, the component has finished setting up its reactive state, but no DOM nodes have been created yet. It is about to execute its DOM render effect for the first time.

**This hook is not called during server-side rendering.**


## onBeforeUpdate() [​](https://vuejs.org/api/composition-api-lifecycle\#onbeforeupdate)

Registers a hook to be called right before the component is about to update its DOM tree due to a reactive state change.

- **Type**

ts

```
function onBeforeUpdate(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.

**This hook is not called during server-side rendering.**


## onBeforeUnmount() [​](https://vuejs.org/api/composition-api-lifecycle\#onbeforeunmount)

Registers a hook to be called right before a component instance is to be unmounted.

- **Type**

ts

```
function onBeforeUnmount(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **Details**

When this hook is called, the component instance is still fully functional.

**This hook is not called during server-side rendering.**


## onErrorCaptured() [​](https://vuejs.org/api/composition-api-lifecycle\#onerrorcaptured)

Registers a hook to be called when an error propagating from a descendant component has been captured.

- **Type**

ts

```
function onErrorCaptured(callback: ErrorCapturedHook): void

type ErrorCapturedHook = (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
) => boolean | void
```

- **Details**

Errors can be captured from the following sources:


  - Component renders
  - Event handlers
  - Lifecycle hooks
  - `setup()` function
  - Watchers
  - Custom directive hooks
  - Transition hooks

The hook receives three arguments: the error, the component instance that triggered the error, and an information string specifying the error source type.

TIP

In production, the 3rd argument (`info`) will be a shortened code instead of the full information string. You can find the code to string mapping in the [Production Error Code Reference](https://vuejs.org/error-reference/#runtime-errors).

You can modify component state in `onErrorCaptured()` to display an error state to the user. However, it is important that the error state should not render the original content that caused the error; otherwise the component will be thrown into an infinite render loop.

The hook can return `false` to stop the error from propagating further. See error propagation details below.

**Error Propagation Rules**

  - By default, all errors are still sent to the application-level [`app.config.errorHandler`](https://vuejs.org/api/application#app-config-errorhandler) if it is defined, so that these errors can still be reported to an analytics service in a single place.

  - If multiple `errorCaptured` hooks exist on a component's inheritance chain or parent chain, all of them will be invoked on the same error, in the order of bottom to top. This is similar to the bubbling mechanism of native DOM events.

  - If the `errorCaptured` hook itself throws an error, both this error and the original captured error are sent to `app.config.errorHandler`.

  - An `errorCaptured` hook can return `false` to prevent the error from propagating further. This is essentially saying "this error has been handled and should be ignored." It will prevent any additional `errorCaptured` hooks or `app.config.errorHandler` from being invoked for this error.

## onRenderTracked() [​](https://vuejs.org/api/composition-api-lifecycle\#onrendertracked)

Registers a debug hook to be called when a reactive dependency has been tracked by the component's render effect.

**This hook is development-mode-only and not called during server-side rendering.**

- **Type**

ts

```
function onRenderTracked(callback: DebuggerHook): void

type DebuggerHook = (e: DebuggerEvent) => void

type DebuggerEvent = {
    effect: ReactiveEffect
    target: object
    type: TrackOpTypes /* 'get' | 'has' | 'iterate' */
    key: any
}
```

- **See also** [Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth)


## onRenderTriggered() [​](https://vuejs.org/api/composition-api-lifecycle\#onrendertriggered)

Registers a debug hook to be called when a reactive dependency triggers the component's render effect to be re-run.

**This hook is development-mode-only and not called during server-side rendering.**

- **Type**

ts

```
function onRenderTriggered(callback: DebuggerHook): void

type DebuggerHook = (e: DebuggerEvent) => void

type DebuggerEvent = {
    effect: ReactiveEffect
    target: object
    type: TriggerOpTypes /* 'set' | 'add' | 'delete' | 'clear' */
    key: any
    newValue?: any
    oldValue?: any
    oldTarget?: Map<any, any> | Set<any>
}
```

- **See also** [Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth)


## onActivated() [​](https://vuejs.org/api/composition-api-lifecycle\#onactivated)

Registers a callback to be called after the component instance is inserted into the DOM as part of a tree cached by [`<KeepAlive>`](https://vuejs.org/api/built-in-components#keepalive).

**This hook is not called during server-side rendering.**

- **Type**

ts

```
function onActivated(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **See also** [Guide - Lifecycle of Cached Instance](https://vuejs.org/guide/built-ins/keep-alive#lifecycle-of-cached-instance)


## onDeactivated() [​](https://vuejs.org/api/composition-api-lifecycle\#ondeactivated)

Registers a callback to be called after the component instance is removed from the DOM as part of a tree cached by [`<KeepAlive>`](https://vuejs.org/api/built-in-components#keepalive).

**This hook is not called during server-side rendering.**

- **Type**

ts

```
function onDeactivated(callback: () => void, target?: ComponentInternalInstance | null): void
```

- **See also** [Guide - Lifecycle of Cached Instance](https://vuejs.org/guide/built-ins/keep-alive#lifecycle-of-cached-instance)


## onServerPrefetch() [​](https://vuejs.org/api/composition-api-lifecycle\#onserverprefetch)

Registers an async function to be resolved before the component instance is to be rendered on the server.

- **Type**

ts

```
function onServerPrefetch(callback: () => Promise<any>): void
```

- **Details**

If the callback returns a Promise, the server renderer will wait until the Promise is resolved before rendering the component.

This hook is only called during server-side rendering can be used to perform server-only data fetching.

- **Example**

vue

```
<script setup>
import { ref, onServerPrefetch, onMounted } from 'vue'

const data = ref(null)

onServerPrefetch(async () => {
    // component is rendered as part of the initial request
    // pre-fetch data on server as it is faster than on the client
    data.value = await fetchOnServer(/* ... */)
})

onMounted(async () => {
    if (!data.value) {
      // if data is null on mount, it means the component
      // is dynamically rendered on the client. Perform a
      // client-side fetch instead.
      data.value = await fetchOnClient(/* ... */)
    }
})
</script>
```

- **See also** [Server-Side Rendering](https://vuejs.org/guide/scaling-up/ssr)


[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/api/composition-api-lifecycle.md)

[PreviousReactivity: Advanced](https://vuejs.org/api/reactivity-advanced) [Next Dependency Injection](https://vuejs.org/api/composition-api-dependency-injection)

Composition API: Lifecycle Hooks has loaded