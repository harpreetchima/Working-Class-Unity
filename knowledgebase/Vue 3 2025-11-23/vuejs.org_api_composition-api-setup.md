---
url: "https://vuejs.org/api/composition-api-setup"
title: "Composition API: setup() | Vue.js"
---

[Skip to content](https://vuejs.org/api/composition-api-setup#VPContent)

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

[简体中文](https://cn.vuejs.org/api/composition-api-setup) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/api/composition-api-setup) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/api/composition-api-setup) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/api/composition-api-setup) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/api/composition-api-setup) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/api/composition-api-setup) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/api/composition-api-setup) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/api/composition-api-setup) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/api/composition-api-setup) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/api/composition-api-setup) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/api/composition-api-setup) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/api/composition-api-setup) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/api/composition-api-setup) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Basic Usage](https://vuejs.org/api/composition-api-setup#basic-usage)
- [Accessing Props](https://vuejs.org/api/composition-api-setup#accessing-props)
- [Setup Context](https://vuejs.org/api/composition-api-setup#setup-context)
- [Usage with Render Functions](https://vuejs.org/api/composition-api-setup#usage-with-render-functions)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Composition API: setup() [​](https://vuejs.org/api/composition-api-setup\#composition-api-setup)

## Basic Usage [​](https://vuejs.org/api/composition-api-setup\#basic-usage)

The `setup()` hook serves as the entry point for Composition API usage in components in the following cases:

1. Using Composition API without a build step;
2. Integrating with Composition-API-based code in an Options API component.

Note

If you are using Composition API with Single-File Components, [`<script setup>`](https://vuejs.org/api/sfc-script-setup) is strongly recommended for a more succinct and ergonomic syntax.

We can declare reactive state using [Reactivity APIs](https://vuejs.org/api/reactivity-core) and expose them to the template by returning an object from `setup()`. The properties on the returned object will also be made available on the component instance (if other options are used):

vue

```
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

[refs](https://vuejs.org/api/reactivity-core#ref) returned from `setup` are [automatically shallow unwrapped](https://vuejs.org/guide/essentials/reactivity-fundamentals#deep-reactivity) when accessed in the template so you do not need to use `.value` when accessing them. They are also unwrapped in the same way when accessed on `this`.

`setup()` itself does not have access to the component instance - `this` will have a value of `undefined` inside `setup()`. You can access Composition-API-exposed values from Options API, but not the other way around.

`setup()` should return an object _synchronously_. The only case when `async setup()` can be used is when the component is a descendant of a [Suspense](https://vuejs.org/guide/built-ins/suspense) component.

## Accessing Props [​](https://vuejs.org/api/composition-api-setup\#accessing-props)

The first argument in the `setup` function is the `props` argument. Just as you would expect in a standard component, `props` inside of a `setup` function are reactive and will be updated when new props are passed in.

js

```
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}
```

Note that if you destructure the `props` object, the destructured variables will lose reactivity. It is therefore recommended to always access props in the form of `props.xxx`.

If you really need to destructure the props, or need to pass a prop into an external function while retaining reactivity, you can do so with the [toRefs()](https://vuejs.org/api/reactivity-utilities#torefs) and [toRef()](https://vuejs.org/api/reactivity-utilities#toref) utility APIs:

js

```
import { toRefs, toRef } from 'vue'

export default {
  setup(props) {
    // turn `props` into an object of refs, then destructure
    const { title } = toRefs(props)
    // `title` is a ref that tracks `props.title`
    console.log(title.value)

    // OR, turn a single property on `props` into a ref
    const title = toRef(props, 'title')
  }
}
```

## Setup Context [​](https://vuejs.org/api/composition-api-setup\#setup-context)

The second argument passed to the `setup` function is a **Setup Context** object. The context object exposes other values that may be useful inside `setup`:

js

```
export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}
```

The context object is not reactive and can be safely destructured:

js

```
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
```

`attrs` and `slots` are stateful objects that are always updated when the component itself is updated. This means you should avoid destructuring them and always reference properties as `attrs.x` or `slots.x`. Also note that, unlike `props`, the properties of `attrs` and `slots` are **not** reactive. If you intend to apply side effects based on changes to `attrs` or `slots`, you should do so inside an `onBeforeUpdate` lifecycle hook.

### Exposing Public Properties [​](https://vuejs.org/api/composition-api-setup\#exposing-public-properties)

`expose` is a function that can be used to explicitly limit the properties exposed when the component instance is accessed by a parent component via [template refs](https://vuejs.org/guide/essentials/template-refs#ref-on-component):

js

```
export default {
  setup(props, { expose }) {
    // make the instance "closed" -
    // i.e. do not expose anything to the parent
    expose()

    const publicCount = ref(0)
    const privateCount = ref(0)
    // selectively expose local state
    expose({ count: publicCount })
  }
}
```

## Usage with Render Functions [​](https://vuejs.org/api/composition-api-setup\#usage-with-render-functions)

`setup` can also return a [render function](https://vuejs.org/guide/extras/render-function) which can directly make use of the reactive state declared in the same scope:

js

```
import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return () => h('div', count.value)
  }
}
```

Returning a render function prevents us from returning anything else. Internally that shouldn't be a problem, but it can be problematic if we want to expose methods of this component to the parent component via template refs.

We can solve this problem by calling [`expose()`](https://vuejs.org/api/composition-api-setup#exposing-public-properties):

js

```
import { h, ref } from 'vue'

export default {
  setup(props, { expose }) {
    const count = ref(0)
    const increment = () => ++count.value

    expose({
      increment
    })

    return () => h('div', count.value)
  }
}
```

The `increment` method would then be available in the parent component via a template ref.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/api/composition-api-setup.md)

[PreviousGeneral](https://vuejs.org/api/general) [Next Reactivity: Core](https://vuejs.org/api/reactivity-core)

Composition API: setup() has loaded