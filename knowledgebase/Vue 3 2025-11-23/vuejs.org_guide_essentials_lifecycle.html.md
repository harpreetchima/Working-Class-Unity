---
url: "https://vuejs.org/guide/essentials/lifecycle.html"
title: "Lifecycle Hooks | Vue.js"
---

[Skip to content](https://vuejs.org/guide/essentials/lifecycle.html#VPContent)

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

[简体中文](https://cn.vuejs.org/guide/essentials/lifecycle) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/essentials/lifecycle) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/essentials/lifecycle) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/essentials/lifecycle) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/essentials/lifecycle) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/essentials/lifecycle) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/essentials/lifecycle) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/essentials/lifecycle) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/essentials/lifecycle) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/essentials/lifecycle) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/essentials/lifecycle) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/essentials/lifecycle) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/essentials/lifecycle) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Registering Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks)
- [Lifecycle Diagram](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Lifecycle Hooks [​](https://vuejs.org/guide/essentials/lifecycle.html\#lifecycle-hooks)

Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

## Registering Lifecycle Hooks [​](https://vuejs.org/guide/essentials/lifecycle.html\#registering-lifecycle-hooks)

For example, the `onMounted``mounted` hook can be used to run code after the component has finished the initial rendering and created the DOM nodes:

vue

```
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```

js

```
export default {
  mounted() {
    console.log(`the component is now mounted.`)
  }
}
```

There are also other hooks which will be called at different stages of the instance's lifecycle, with the most commonly used being [`onMounted`](https://vuejs.org/api/composition-api-lifecycle#onmounted), [`onUpdated`](https://vuejs.org/api/composition-api-lifecycle#onupdated), and [`onUnmounted`](https://vuejs.org/api/composition-api-lifecycle#onunmounted).[`mounted`](https://vuejs.org/api/options-lifecycle#mounted), [`updated`](https://vuejs.org/api/options-lifecycle#updated), and [`unmounted`](https://vuejs.org/api/options-lifecycle#unmounted).

All lifecycle hooks are called with their `this` context pointing to the current active instance invoking it. Note this means you should avoid using arrow functions when declaring lifecycle hooks, as you won't be able to access the component instance via `this` if you do so.

When calling `onMounted`, Vue automatically associates the registered callback function with the current active component instance. This requires these hooks to be registered **synchronously** during component setup. For example, do not do this:

js

```
setTimeout(() => {
  onMounted(() => {
    // this won't work.
  })
}, 100)
```

Do note this doesn't mean that the call must be placed lexically inside `setup()` or `<script setup>`. `onMounted()` can be called in an external function as long as the call stack is synchronous and originates from within `setup()`.

## Lifecycle Diagram [​](https://vuejs.org/guide/essentials/lifecycle.html\#lifecycle-diagram)

Below is a diagram for the instance lifecycle. You don't need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.

![Component lifecycle diagram](https://vuejs.org/assets/lifecycle.MuZLBFAS.png)

Consult the [Lifecycle Hooks API reference](https://vuejs.org/api/composition-api-lifecycle)[Lifecycle Hooks API reference](https://vuejs.org/api/options-lifecycle) for details on all lifecycle hooks and their respective use cases.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/lifecycle.md)

[PreviousComponents Basics](https://vuejs.org/guide/essentials/component-basics) [Next Registration](https://vuejs.org/guide/components/registration)

Lifecycle Hooks has loaded