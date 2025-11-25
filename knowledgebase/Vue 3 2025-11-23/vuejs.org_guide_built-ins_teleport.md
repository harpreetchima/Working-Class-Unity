---
url: "https://vuejs.org/guide/built-ins/teleport"
title: "Teleport | Vue.js"
---

[Skip to content](https://vuejs.org/guide/built-ins/teleport#VPContent)

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

[简体中文](https://cn.vuejs.org/guide/built-ins/teleport) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/built-ins/teleport) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/built-ins/teleport) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/built-ins/teleport) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/built-ins/teleport) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/built-ins/teleport) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/built-ins/teleport) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/built-ins/teleport) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/built-ins/teleport) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/built-ins/teleport) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/built-ins/teleport) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/built-ins/teleport) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/built-ins/teleport) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Basic Usage](https://vuejs.org/guide/built-ins/teleport#basic-usage)
- [Using with Components](https://vuejs.org/guide/built-ins/teleport#using-with-components)
- [Disabling Teleport](https://vuejs.org/guide/built-ins/teleport#disabling-teleport)
- [Multiple Teleports on the Same Target](https://vuejs.org/guide/built-ins/teleport#multiple-teleports-on-the-same-target)
- [Deferred Teleport](https://vuejs.org/guide/built-ins/teleport#deferred-teleport)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Teleport [​](https://vuejs.org/guide/built-ins/teleport\#teleport)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-3-teleport?friend=vuejs "Free Vue.js Teleport Lesson")

`<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

## Basic Usage [​](https://vuejs.org/guide/built-ins/teleport\#basic-usage)

Sometimes a part of a component's template belongs to it logically, but from a visual standpoint, it should be displayed somewhere else in the DOM, perhaps even outside of the Vue application.

The most common example of this is when building a full-screen modal. Ideally, we want the code for the modal's button and the modal itself to be written within the same single-file component, since they are both related to the open / close state of the modal. But that means the modal will be rendered alongside the button, deeply nested in the application's DOM hierarchy. This can create some tricky issues when positioning the modal via CSS.

Consider the following HTML structure.

template

```
<div class="outer">
  <h3>Vue Teleport Example</h3>
  <div>
    <MyModal />
  </div>
</div>
```

And here is the implementation of `<MyModal>`:

vue

```
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
```

vue

```
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
```

The component contains a `<button>` to trigger the opening of the modal, and a `<div>` with a class of `.modal`, which will contain the modal's content and a button to self-close.

When using this component inside the initial HTML structure, there are a number of potential issues:

- `position: fixed` only places the element relative to the viewport when no ancestor element has `transform`, `perspective` or `filter` property set. If, for example, we intend to animate the ancestor `<div class="outer">` with a CSS transform, it would break the modal layout!

- The modal's `z-index` is constrained by its containing elements. If there is another element that overlaps with `<div class="outer">` and has a higher `z-index`, it would cover our modal.


`<Teleport>` provides a clean way to work around these, by allowing us to break out of the nested DOM structure. Let's modify `<MyModal>` to use `<Teleport>`:

template

```
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

The `to` target of `<Teleport>` expects a CSS selector string or an actual DOM node. Here, we are essentially telling Vue to " **teleport** this template fragment **to** the **`body`** tag".

You can click the button below and inspect the `<body>` tag via your browser's devtools:

Open Modal

You can combine `<Teleport>` with [`<Transition>`](https://vuejs.org/guide/built-ins/transition) to create animated modals - see [Example here](https://vuejs.org/examples/#modal).

TIP

The teleport `to` target must be already in the DOM when the `<Teleport>` component is mounted. Ideally, this should be an element outside the entire Vue application. If targeting another element rendered by Vue, you need to make sure that element is mounted before the `<Teleport>`.

## Using with Components [​](https://vuejs.org/guide/built-ins/teleport\#using-with-components)

`<Teleport>` only alters the rendered DOM structure - it does not affect the logical hierarchy of the components. That is to say, if `<Teleport>` contains a component, that component will remain a logical child of the parent component containing the `<Teleport>`. Props passing and event emitting will continue to work the same way.

This also means that injections from a parent component work as expected, and that the child component will be nested below the parent component in the Vue Devtools, instead of being placed where the actual content moved to.

## Disabling Teleport [​](https://vuejs.org/guide/built-ins/teleport\#disabling-teleport)

In some cases, we may want to conditionally disable `<Teleport>`. For example, we may want to render a component as an overlay for desktop, but inline on mobile. `<Teleport>` supports the `disabled` prop which can be dynamically toggled:

template

```
<Teleport :disabled="isMobile">
  ...
</Teleport>
```

We could then dynamically update `isMobile`.

## Multiple Teleports on the Same Target [​](https://vuejs.org/guide/built-ins/teleport\#multiple-teleports-on-the-same-target)

A common use case would be a reusable `<Modal>` component, with the potential for multiple instances to be active at the same time. For this kind of scenario, multiple `<Teleport>` components can mount their content to the same target element. The order will be a simple append, with later mounts located after earlier ones, but all within the target element.

Given the following usage:

template

```
<Teleport to="#modals">
  <div>A</div>
</Teleport>
<Teleport to="#modals">
  <div>B</div>
</Teleport>
```

The rendered result would be:

html

```
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```

## Deferred Teleport [​](https://vuejs.org/guide/built-ins/teleport\#deferred-teleport)

In Vue 3.5 and above, we can use the `defer` prop to defer the target resolving of a Teleport until other parts of the application have mounted. This allows the Teleport to target a container element that is rendered by Vue, but in a later part of the component tree:

template

```
<Teleport defer to="#late-div">...</Teleport>

<!-- somewhere later in the template -->
<div id="late-div"></div>
```

Note that the target element must be rendered in the same mount / update tick with the Teleport - i.e. if the `<div>` is only mounted a second later, the Teleport will still report an error. The defer works similarly to the `mounted` lifecycle hook.

* * *

**Related**

- [`<Teleport>` API reference](https://vuejs.org/api/built-in-components#teleport)
- [Handling Teleports in SSR](https://vuejs.org/guide/scaling-up/ssr#teleports)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/teleport.md)

[PreviousKeepAlive](https://vuejs.org/guide/built-ins/keep-alive) [Next Suspense](https://vuejs.org/guide/built-ins/suspense)

Teleport has loaded