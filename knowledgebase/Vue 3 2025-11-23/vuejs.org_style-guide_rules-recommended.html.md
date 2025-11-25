---
url: "https://vuejs.org/style-guide/rules-recommended.html"
title: "Priority C Rules: Recommended | Vue.js"
---

[Skip to content](https://vuejs.org/style-guide/rules-recommended.html#VPContent)

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

[简体中文](https://cn.vuejs.org/style-guide/rules-recommended) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/style-guide/rules-recommended) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/style-guide/rules-recommended) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/style-guide/rules-recommended) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/style-guide/rules-recommended) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/style-guide/rules-recommended) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/style-guide/rules-recommended) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/style-guide/rules-recommended) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/style-guide/rules-recommended) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/style-guide/rules-recommended) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/style-guide/rules-recommended) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/style-guide/rules-recommended) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/style-guide/rules-recommended) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

## Style Guide

[Overview](https://vuejs.org/style-guide/) [A - Essential](https://vuejs.org/style-guide/rules-essential) [B - Strongly Recommended](https://vuejs.org/style-guide/rules-strongly-recommended) [C - Recommended](https://vuejs.org/style-guide/rules-recommended) [D - Use with Caution](https://vuejs.org/style-guide/rules-use-with-caution)

[Get Security Updates for Vue 2](https://www.herodevs.com/support/nes-vue?utm_source=vuejs_org&utm_medium=sidebar_link&utm_campaign=vue2eol)

On this page

Table of Contents for current page

- [Component/instance options order](https://vuejs.org/style-guide/rules-recommended.html#component-instance-options-order)
- [Element attribute order](https://vuejs.org/style-guide/rules-recommended.html#element-attribute-order)
- [Empty lines in component/instance options](https://vuejs.org/style-guide/rules-recommended.html#empty-lines-in-component-instance-options)
- [Single-file component top-level element order](https://vuejs.org/style-guide/rules-recommended.html#single-file-component-top-level-element-order)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Priority C Rules: Recommended [​](https://vuejs.org/style-guide/rules-recommended.html\#priority-c-rules-recommended)

Note

This Vue.js Style Guide is outdated and needs to be reviewed. If you have any questions or suggestions, please [open an issue](https://github.com/vuejs/docs/issues/new).

Where multiple, equally good options exist, an arbitrary choice can be made to ensure consistency. In these rules, we describe each acceptable option and suggest a default choice. That means you can feel free to make a different choice in your own codebase, as long as you're consistent and have a good reason. Please do have a good reason though! By adapting to the community standard, you will:

1. Train your brain to more easily parse most of the community code you encounter
2. Be able to copy and paste most community code examples without modification
3. Often find new hires are already accustomed to your preferred coding style, at least in regards to Vue

## Component/instance options order [​](https://vuejs.org/style-guide/rules-recommended.html\#component-instance-options-order)

**Component/instance options should be ordered consistently.**

This is the default order we recommend for component options. They're split into categories, so you'll know where to add new properties from plugins.

01. **Global Awareness** (requires knowledge beyond the component)

    - `name`
02. **Template Compiler Options** (changes the way templates are compiled)

    - `compilerOptions`
03. **Template Dependencies** (assets used in the template)

    - `components`
    - `directives`
04. **Composition** (merges properties into the options)

    - `extends`
    - `mixins`
    - `provide`/`inject`
05. **Interface** (the interface to the component)

    - `inheritAttrs`
    - `props`
    - `emits`
06. **Composition API** (the entry point for using the Composition API)

    - `setup`
07. **Local State** (local reactive properties)

    - `data`
    - `computed`
08. **Events** (callbacks triggered by reactive events)

    - `watch`
    - Lifecycle Events (in the order they are called)
      - `beforeCreate`
      - `created`
      - `beforeMount`
      - `mounted`
      - `beforeUpdate`
      - `updated`
      - `activated`
      - `deactivated`
      - `beforeUnmount`
      - `unmounted`
      - `errorCaptured`
      - `renderTracked`
      - `renderTriggered`
09. **Non-Reactive Properties** (instance properties independent of the reactivity system)

    - `methods`
10. **Rendering** (the declarative description of the component output)

    - `template`/`render`

## Element attribute order [​](https://vuejs.org/style-guide/rules-recommended.html\#element-attribute-order)

**The attributes of elements (including components) should be ordered consistently.**

This is the default order we recommend for component options. They're split into categories, so you'll know where to add custom attributes and directives.

01. **Definition** (provides the component options)

    - `is`
02. **List Rendering** (creates multiple variations of the same element)

    - `v-for`
03. **Conditionals** (whether the element is rendered/shown)

    - `v-if`
    - `v-else-if`
    - `v-else`
    - `v-show`
    - `v-cloak`
04. **Render Modifiers** (changes the way the element renders)

    - `v-pre`
    - `v-once`
05. **Global Awareness** (requires knowledge beyond the component)

    - `id`
06. **Unique Attributes** (attributes that require unique values)

    - `ref`
    - `key`
07. **Two-Way Binding** (combining binding and events)

    - `v-model`
08. **Other Attributes** (all unspecified bound & unbound attributes)

09. **Events** (component event listeners)

    - `v-on`
10. **Content** (overrides the content of the element)

    - `v-html`
    - `v-text`

## Empty lines in component/instance options [​](https://vuejs.org/style-guide/rules-recommended.html\#empty-lines-in-component-instance-options)

**You may want to add one empty line between multi-line properties, particularly if the options can no longer fit on your screen without scrolling.**

When components begin to feel cramped or difficult to read, adding spaces between multi-line properties can make them easier to skim again. In some editors, such as Vim, formatting options like this can also make them easier to navigate with the keyboard.

### Bad

js

```
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue() {
    // ...
  },

  inputClasses() {
    // ...
  }
}
```

### Good

js

```
// No spaces are also fine, as long as the component
// is still easy to read and navigate.
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue() {
    // ...
  },
  inputClasses() {
    // ...
  }
}
```

### Bad

js

```
defineProps({
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
})
const formattedValue = computed(() => {
  // ...
})
const inputClasses = computed(() => {
  // ...
})
```

### Good

js

```
defineProps({
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
})

const formattedValue = computed(() => {
  // ...
})

const inputClasses = computed(() => {
  // ...
})
```

## Single-file component top-level element order [​](https://vuejs.org/style-guide/rules-recommended.html\#single-file-component-top-level-element-order)

**[Single-File Components](https://vuejs.org/guide/scaling-up/sfc) should always order `<script>`, `<template>`, and `<style>` tags consistently, with `<style>` last, because at least one of the other two is always necessary.**

### Bad

ComponentX.vue

template

```
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>
```

ComponentA.vue

template

```
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

ComponentB.vue

template

```
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

### Good

ComponentA.vue

template

```
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

ComponentB.vue

template

```
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

or

ComponentA.vue

template

```
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

ComponentB.vue

template

```
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/style-guide/rules-recommended.md)

[PreviousB - Strongly Recommended](https://vuejs.org/style-guide/rules-strongly-recommended) [Next D - Use with Caution](https://vuejs.org/style-guide/rules-use-with-caution)

Priority C Rules: Recommended has loaded