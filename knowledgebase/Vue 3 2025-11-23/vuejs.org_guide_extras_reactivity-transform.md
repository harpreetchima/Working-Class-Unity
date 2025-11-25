---
url: "https://vuejs.org/guide/extras/reactivity-transform"
title: "Reactivity Transform | Vue.js"
---

[Skip to content](https://vuejs.org/guide/extras/reactivity-transform#VPContent)

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

[简体中文](https://cn.vuejs.org/guide/extras/reactivity-transform) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/extras/reactivity-transform) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/extras/reactivity-transform) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/extras/reactivity-transform) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/extras/reactivity-transform) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/extras/reactivity-transform) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/extras/reactivity-transform) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/extras/reactivity-transform) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/extras/reactivity-transform) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/extras/reactivity-transform) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/extras/reactivity-transform) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/extras/reactivity-transform) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/extras/reactivity-transform) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Menu

On this page

API Preference

OptionsComposition [?](https://vuejs.org/guide/introduction#api-styles "About API preference")

API style now defaults to Composition API.

Some pages contain different content based on the API style chosen. Use this switch to toggle between APIs styles.

[Learn more](https://vuejs.org/guide/introduction#api-styles) Got it

Sidebar Navigation

## Getting Started

[Introduction](https://vuejs.org/guide/introduction) [Quick Start](https://vuejs.org/guide/quick-start)

## Essentials

[Creating an Application](https://vuejs.org/guide/essentials/application) [Template Syntax](https://vuejs.org/guide/essentials/template-syntax) [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals) [Computed Properties](https://vuejs.org/guide/essentials/computed) [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style) [Conditional Rendering](https://vuejs.org/guide/essentials/conditional) [List Rendering](https://vuejs.org/guide/essentials/list) [Event Handling](https://vuejs.org/guide/essentials/event-handling) [Form Input Bindings](https://vuejs.org/guide/essentials/forms) [Watchers](https://vuejs.org/guide/essentials/watchers) [Template Refs](https://vuejs.org/guide/essentials/template-refs) [Components Basics](https://vuejs.org/guide/essentials/component-basics) [Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle)

## Components In-Depth

[Registration](https://vuejs.org/guide/components/registration) [Props](https://vuejs.org/guide/components/props) [Events](https://vuejs.org/guide/components/events) [Component v-model](https://vuejs.org/guide/components/v-model) [Fallthrough Attributes](https://vuejs.org/guide/components/attrs) [Slots](https://vuejs.org/guide/components/slots) [Provide / inject](https://vuejs.org/guide/components/provide-inject) [Async Components](https://vuejs.org/guide/components/async)

## Reusability

[Composables](https://vuejs.org/guide/reusability/composables) [Custom Directives](https://vuejs.org/guide/reusability/custom-directives) [Plugins](https://vuejs.org/guide/reusability/plugins)

## Built-in Components

[Transition](https://vuejs.org/guide/built-ins/transition) [TransitionGroup](https://vuejs.org/guide/built-ins/transition-group) [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive) [Teleport](https://vuejs.org/guide/built-ins/teleport) [Suspense](https://vuejs.org/guide/built-ins/suspense)

## Scaling Up

[Single-File Components](https://vuejs.org/guide/scaling-up/sfc) [Tooling](https://vuejs.org/guide/scaling-up/tooling) [Routing](https://vuejs.org/guide/scaling-up/routing) [State Management](https://vuejs.org/guide/scaling-up/state-management) [Testing](https://vuejs.org/guide/scaling-up/testing) [Server-Side Rendering (SSR)](https://vuejs.org/guide/scaling-up/ssr)

## Best Practices

[Production Deployment](https://vuejs.org/guide/best-practices/production-deployment) [Performance](https://vuejs.org/guide/best-practices/performance) [Accessibility](https://vuejs.org/guide/best-practices/accessibility) [Security](https://vuejs.org/guide/best-practices/security)

## TypeScript

[Overview](https://vuejs.org/guide/typescript/overview) [TS with Composition API](https://vuejs.org/guide/typescript/composition-api) [TS with Options API](https://vuejs.org/guide/typescript/options-api)

## Extra Topics

[Ways of Using Vue](https://vuejs.org/guide/extras/ways-of-using-vue) [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq) [Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth) [Rendering Mechanism](https://vuejs.org/guide/extras/rendering-mechanism) [Render Functions & JSX](https://vuejs.org/guide/extras/render-function) [Vue and Web Components](https://vuejs.org/guide/extras/web-components) [Animation Techniques](https://vuejs.org/guide/extras/animation)

[Get Security Updates for Vue 2](https://www.herodevs.com/support/nes-vue?utm_source=vuejs_org&utm_medium=sidebar_link&utm_campaign=vue2eol)

On this page

Table of Contents for current page

- [Refs vs. Reactive Variables](https://vuejs.org/guide/extras/reactivity-transform#refs-vs-reactive-variables)
- [Destructuring with $()](https://vuejs.org/guide/extras/reactivity-transform#destructuring-with)
- [Convert Existing Refs to Reactive Variables with $()](https://vuejs.org/guide/extras/reactivity-transform#convert-existing-refs-to-reactive-variables-with)
- [Reactive Props Destructure](https://vuejs.org/guide/extras/reactivity-transform#reactive-props-destructure)
- [Retaining Reactivity Across Function Boundaries](https://vuejs.org/guide/extras/reactivity-transform#retaining-reactivity-across-function-boundaries)
- [TypeScript Integration](https://vuejs.org/guide/extras/reactivity-transform#typescript-integration)
- [Explicit Opt-in](https://vuejs.org/guide/extras/reactivity-transform#explicit-opt-in)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Reactivity Transform [​](https://vuejs.org/guide/extras/reactivity-transform\#reactivity-transform)

Removed Experimental Feature

Reactivity Transform was an experimental feature, and has been removed in the latest 3.4 release. Please read about [the reasoning here](https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028).

If you still intend to use it, it is now available via the [Vue Macros](https://vue-macros.sxzz.moe/features/reactivity-transform.html) plugin.

Composition-API-specific

Reactivity Transform is a Composition-API-specific feature and requires a build step.

## Refs vs. Reactive Variables [​](https://vuejs.org/guide/extras/reactivity-transform\#refs-vs-reactive-variables)

Ever since the introduction of the Composition API, one of the primary unresolved questions is the use of refs vs. reactive objects. It's easy to lose reactivity when destructuring reactive objects, while it can be cumbersome to use `.value` everywhere when using refs. Also, `.value` is easy to miss if not using a type system.

[Vue Reactivity Transform](https://github.com/vuejs/core/tree/main/packages/reactivity-transform) is a compile-time transform that allows us to write code like this:

vue

```
<script setup>
let count = $ref(0)

console.log(count)

function increment() {
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

The `$ref()` method here is a **compile-time macro**: it is not an actual method that will be called at runtime. Instead, the Vue compiler uses it as a hint to treat the resulting `count` variable as a **reactive variable.**

Reactive variables can be accessed and re-assigned just like normal variables, but these operations are compiled into refs with `.value`. For example, the `<script>` part of the above component is compiled into:

js

```
import { ref } from 'vue'

let count = ref(0)

console.log(count.value)

function increment() {
  count.value++
}
```

Every reactivity API that returns refs will have a `$`-prefixed macro equivalent. These APIs include:

- [`ref`](https://vuejs.org/api/reactivity-core#ref) -\> `$ref`
- [`computed`](https://vuejs.org/api/reactivity-core#computed) -\> `$computed`
- [`shallowRef`](https://vuejs.org/api/reactivity-advanced#shallowref) -\> `$shallowRef`
- [`customRef`](https://vuejs.org/api/reactivity-advanced#customref) -\> `$customRef`
- [`toRef`](https://vuejs.org/api/reactivity-utilities#toref) -\> `$toRef`

These macros are globally available and do not need to be imported when Reactivity Transform is enabled, but you can optionally import them from `vue/macros` if you want to be more explicit:

js

```
import { $ref } from 'vue/macros'

let count = $ref(0)
```

## Destructuring with `$()` [​](https://vuejs.org/guide/extras/reactivity-transform\#destructuring-with)

It is common for a composition function to return an object of refs, and use destructuring to retrieve these refs. For this purpose, reactivity transform provides the **`$()`** macro:

js

```
import { useMouse } from '@vueuse/core'

const { x, y } = $(useMouse())

console.log(x, y)
```

Compiled output:

js

```
import { toRef } from 'vue'
import { useMouse } from '@vueuse/core'

const __temp = useMouse(),
  x = toRef(__temp, 'x'),
  y = toRef(__temp, 'y')

console.log(x.value, y.value)
```

Note that if `x` is already a ref, `toRef(__temp, 'x')` will simply return it as-is and no additional ref will be created. If a destructured value is not a ref (e.g. a function), it will still work - the value will be wrapped in a ref so the rest of the code works as expected.

`$()` destructure works on both reactive objects **and** plain objects containing refs.

## Convert Existing Refs to Reactive Variables with `$()` [​](https://vuejs.org/guide/extras/reactivity-transform\#convert-existing-refs-to-reactive-variables-with)

In some cases we may have wrapped functions that also return refs. However, the Vue compiler won't be able to know ahead of time that a function is going to return a ref. In such cases, the `$()` macro can also be used to convert any existing refs into reactive variables:

js

```
function myCreateRef() {
  return ref(0)
}

let count = $(myCreateRef())
```

## Reactive Props Destructure [​](https://vuejs.org/guide/extras/reactivity-transform\#reactive-props-destructure)

There are two pain points with the current `defineProps()` usage in `<script setup>`:

1. Similar to `.value`, you need to always access props as `props.x` in order to retain reactivity. This means you cannot destructure `defineProps` because the resulting destructured variables are not reactive and will not update.

2. When using the [type-only props declaration](https://vuejs.org/api/sfc-script-setup#type-only-props-emit-declarations), there is no easy way to declare default values for the props. We introduced the `withDefaults()` API for this exact purpose, but it's still clunky to use.


We can address these issues by applying a compile-time transform when `defineProps` is used with destructuring, similar to what we saw earlier with `$()`:

html

```
<script setup lang="ts">
  interface Props {
    msg: string
    count?: number
    foo?: string
  }

  const {
    msg,
    // default value just works
    count = 1,
    // local aliasing also just works
    // here we are aliasing `props.foo` to `bar`
    foo: bar
  } = defineProps<Props>()

  watchEffect(() => {
    // will log whenever the props change
    console.log(msg, count, bar)
  })
</script>
```

The above will be compiled into the following runtime declaration equivalent:

js

```
export default {
  props: {
    msg: { type: String, required: true },
    count: { type: Number, default: 1 },
    foo: String
  },
  setup(props) {
    watchEffect(() => {
      console.log(props.msg, props.count, props.foo)
    })
  }
}
```

## Retaining Reactivity Across Function Boundaries [​](https://vuejs.org/guide/extras/reactivity-transform\#retaining-reactivity-across-function-boundaries)

While reactive variables relieve us from having to use `.value` everywhere, it creates an issue of "reactivity loss" when we pass reactive variables across function boundaries. This can happen in two cases:

### Passing into function as argument [​](https://vuejs.org/guide/extras/reactivity-transform\#passing-into-function-as-argument)

Given a function that expects a ref as an argument, e.g.:

ts

```
function trackChange(x: Ref<number>) {
  watch(x, (x) => {
    console.log('x changed!')
  })
}

let count = $ref(0)
trackChange(count) // doesn't work!
```

The above case will not work as expected because it compiles to:

ts

```
let count = ref(0)
trackChange(count.value)
```

Here `count.value` is passed as a number, whereas `trackChange` expects an actual ref. This can be fixed by wrapping `count` with `$$()` before passing it:

diff

```
let count = $ref(0)
- trackChange(count)
+ trackChange($$(count))
```

The above compiles to:

js

```
import { ref } from 'vue'

let count = ref(0)
trackChange(count)
```

As we can see, `$$()` is a macro that serves as an **escape hint**: reactive variables inside `$$()` will not get `.value` appended.

### Returning inside function scope [​](https://vuejs.org/guide/extras/reactivity-transform\#returning-inside-function-scope)

Reactivity can also be lost if reactive variables are used directly in a returned expression:

ts

```
function useMouse() {
  let x = $ref(0)
  let y = $ref(0)

  // listen to mousemove...

  // doesn't work!
  return {
    x,
    y
  }
}
```

The above return statement compiles to:

ts

```
return {
  x: x.value,
  y: y.value
}
```

In order to retain reactivity, we should be returning the actual refs, not the current value at return time.

Again, we can use `$$()` to fix this. In this case, `$$()` can be used directly on the returned object - any reference to reactive variables inside the `$$()` call will retain the reference to their underlying refs:

ts

```
function useMouse() {
  let x = $ref(0)
  let y = $ref(0)

  // listen to mousemove...

  // fixed
  return $$({
    x,
    y
  })
}
```

### Using `$$()` on destructured props [​](https://vuejs.org/guide/extras/reactivity-transform\#using-on-destructured-props)

`$$()` works on destructured props since they are reactive variables as well. The compiler will convert it with `toRef` for efficiency:

ts

```
const { count } = defineProps<{ count: number }>()

passAsRef($$(count))
```

compiles to:

js

```
setup(props) {
  const __props_count = toRef(props, 'count')
  passAsRef(__props_count)
}
```

## TypeScript Integration [​](https://vuejs.org/guide/extras/reactivity-transform\#typescript-integration)

Vue provides typings for these macros (available globally) and all types will work as expected. There are no incompatibilities with standard TypeScript semantics, so the syntax will work with all existing tooling.

This also means the macros can work in any files where valid JS / TS are allowed - not just inside Vue SFCs.

Since the macros are available globally, their types need to be explicitly referenced (e.g. in a `env.d.ts` file):

ts

```
/// <reference types="vue/macros-global" />
```

When explicitly importing the macros from `vue/macros`, the type will work without declaring the globals.

## Explicit Opt-in [​](https://vuejs.org/guide/extras/reactivity-transform\#explicit-opt-in)

No longer supported in core

The following only applies up to Vue version 3.3 and below. Support has been removed in Vue core 3.4 and above, and `@vitejs/plugin-vue` 5.0 and above. If you intend to continue using the transform, please migrate to [Vue Macros](https://vue-macros.sxzz.moe/features/reactivity-transform.html) instead.

### Vite [​](https://vuejs.org/guide/extras/reactivity-transform\#vite)

- Requires `@vitejs/plugin-vue@>=2.0.0`
- Applies to SFCs and js(x)/ts(x) files. A fast usage check is performed on files before applying the transform so there should be no performance cost for files not using the macros.
- Note `reactivityTransform` is now a plugin root-level option instead of nested as `script.refSugar`, since it affects not just SFCs.

vite.config.js

js

```
export default {
  plugins: [\
    vue({\
      reactivityTransform: true\
    })\
  ]
}
```

### `vue-cli` [​](https://vuejs.org/guide/extras/reactivity-transform\#vue-cli)

- Currently only affects SFCs
- Requires `vue-loader@>=17.0.0`

vue.config.js

js

```
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          reactivityTransform: true
        }
      })
  }
}
```

### Plain `webpack` \+ `vue-loader` [​](https://vuejs.org/guide/extras/reactivity-transform\#plain-webpack-vue-loader)

- Currently only affects SFCs
- Requires `vue-loader@>=17.0.0`

webpack.config.js

js

```
module.exports = {
  module: {
    rules: [\
      {\
        test: /\.vue$/,\
        loader: 'vue-loader',\
        options: {\
          reactivityTransform: true\
        }\
      }\
    ]
  }
}
```

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/reactivity-transform.md)

[Next Introduction](https://vuejs.org/guide/introduction)

Reactivity Transform has loaded