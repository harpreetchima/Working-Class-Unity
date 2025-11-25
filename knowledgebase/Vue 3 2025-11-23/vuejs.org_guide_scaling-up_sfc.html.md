---
url: "https://vuejs.org/guide/scaling-up/sfc.html"
title: "Single-File Components | Vue.js"
---

[Skip to content](https://vuejs.org/guide/scaling-up/sfc.html#VPContent)

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

[简体中文](https://cn.vuejs.org/guide/scaling-up/sfc) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/scaling-up/sfc) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/scaling-up/sfc) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/scaling-up/sfc) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/scaling-up/sfc) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/scaling-up/sfc) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/scaling-up/sfc) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/scaling-up/sfc) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/scaling-up/sfc) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/scaling-up/sfc) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/scaling-up/sfc) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/scaling-up/sfc) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/scaling-up/sfc) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Introduction](https://vuejs.org/guide/scaling-up/sfc.html#introduction)
- [Why SFC](https://vuejs.org/guide/scaling-up/sfc.html#why-sfc)
- [How It Works](https://vuejs.org/guide/scaling-up/sfc.html#how-it-works)
- [What About Separation of Concerns?](https://vuejs.org/guide/scaling-up/sfc.html#what-about-separation-of-concerns)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Single-File Components [​](https://vuejs.org/guide/scaling-up/sfc.html\#single-file-components)

## Introduction [​](https://vuejs.org/guide/scaling-up/sfc.html\#introduction)

Vue Single-File Components (a.k.a. `*.vue` files, abbreviated as **SFC**) is a special file format that allows us to encapsulate the template, logic, **and** styling of a Vue component in a single file. Here's an example SFC:

vue

```
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

vue

```
<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

As we can see, Vue SFC is a natural extension of the classic trio of HTML, CSS and JavaScript. The `<template>`, `<script>`, and `<style>` blocks encapsulate and colocate the view, logic and styling of a component in the same file. The full syntax is defined in the [SFC Syntax Specification](https://vuejs.org/api/sfc-spec).

## Why SFC [​](https://vuejs.org/guide/scaling-up/sfc.html\#why-sfc)

While SFCs require a build step, there are numerous benefits in return:

- Author modularized components using familiar HTML, CSS and JavaScript syntax
- [Colocation of inherently coupled concerns](https://vuejs.org/guide/scaling-up/sfc.html#what-about-separation-of-concerns)
- Pre-compiled templates without runtime compilation cost
- [Component-scoped CSS](https://vuejs.org/api/sfc-css-features)
- [More ergonomic syntax when working with Composition API](https://vuejs.org/api/sfc-script-setup)
- More compile-time optimizations by cross-analyzing template and script
- [IDE support](https://vuejs.org/guide/scaling-up/tooling#ide-support) with auto-completion and type-checking for template expressions
- Out-of-the-box Hot-Module Replacement (HMR) support

SFC is a defining feature of Vue as a framework, and is the recommended approach for using Vue in the following scenarios:

- Single-Page Applications (SPA)
- Static Site Generation (SSG)
- Any non-trivial frontend where a build step can be justified for better development experience (DX).

That said, we do realize there are scenarios where SFCs can feel like overkill. This is why Vue can still be used via plain JavaScript without a build step. If you are just looking for enhancing largely static HTML with light interactions, you can also check out [petite-vue](https://github.com/vuejs/petite-vue), a 6 kB subset of Vue optimized for progressive enhancement.

## How It Works [​](https://vuejs.org/guide/scaling-up/sfc.html\#how-it-works)

Vue SFC is a framework-specific file format and must be pre-compiled by [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) into standard JavaScript and CSS. A compiled SFC is a standard JavaScript (ES) module - which means with proper build setup you can import an SFC like a module:

js

```
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}
```

`<style>` tags inside SFCs are typically injected as native `<style>` tags during development to support hot updates. For production they can be extracted and merged into a single CSS file.

You can play with SFCs and explore how they are compiled in the [Vue SFC Playground](https://play.vuejs.org/).

In actual projects, we typically integrate the SFC compiler with a build tool such as [Vite](https://vitejs.dev/) or [Vue CLI](http://cli.vuejs.org/) (which is based on [webpack](https://webpack.js.org/)), and Vue provides official scaffolding tools to get you started with SFCs as fast as possible. Check out more details in the [SFC Tooling](https://vuejs.org/guide/scaling-up/tooling) section.

## What About Separation of Concerns? [​](https://vuejs.org/guide/scaling-up/sfc.html\#what-about-separation-of-concerns)

Some users coming from a traditional web development background may have the concern that SFCs are mixing different concerns in the same place - which HTML/CSS/JS were supposed to separate!

To answer this question, it is important for us to agree that **separation of concerns is not equal to the separation of file types**. The ultimate goal of engineering principles is to improve the maintainability of codebases. Separation of concerns, when applied dogmatically as separation of file types, does not help us reach that goal in the context of increasingly complex frontend applications.

In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable.

Note even if you don't like the idea of Single-File Components, you can still leverage its hot-reloading and pre-compilation features by separating your JavaScript and CSS into separate files using [Src Imports](https://vuejs.org/api/sfc-spec#src-imports).

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/sfc.md)

[PreviousSuspense](https://vuejs.org/guide/built-ins/suspense) [Next Tooling](https://vuejs.org/guide/scaling-up/tooling)

Single-File Components has loaded