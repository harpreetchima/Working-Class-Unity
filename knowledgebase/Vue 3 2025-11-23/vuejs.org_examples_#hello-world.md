---
url: "https://vuejs.org/examples/#hello-world"
title: "Examples | Vue.js"
---

[Skip to content](https://vuejs.org/examples/#VPContent)

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

[简体中文](https://cn.vuejs.org/examples/) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/examples/) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/examples/) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/examples/) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/examples/) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/examples/) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/examples/) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/examples/) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/examples/) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/examples/) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/examples/) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/examples/) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/examples/) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Menu

API Preference

OptionsComposition [?](https://vuejs.org/guide/introduction#api-styles "About API preference")

API style now defaults to Composition API.

Some pages contain different content based on the API style chosen. Use this switch to toggle between APIs styles.

[Learn more](https://vuejs.org/guide/introduction#api-styles) Got it

HTMLSFC [?](https://vuejs.org/guide/scaling-up/sfc "About SFC")

Sidebar Navigation

## Basic

[Hello World](https://vuejs.org/examples/#hello-world) [Handling User Input](https://vuejs.org/examples/#handling-input) [Attribute Bindings](https://vuejs.org/examples/#attribute-bindings) [Conditionals and Loops](https://vuejs.org/examples/#conditionals-and-loops) [Form Bindings](https://vuejs.org/examples/#form-bindings) [Simple Component](https://vuejs.org/examples/#simple-component)

## Practical

[Markdown Editor](https://vuejs.org/examples/#markdown) [Fetching Data](https://vuejs.org/examples/#fetching-data) [Grid with Sort and Filter](https://vuejs.org/examples/#grid) [Tree View](https://vuejs.org/examples/#tree) [SVG Graph](https://vuejs.org/examples/#svg) [Modal with Transitions](https://vuejs.org/examples/#modal) [List with Transitions](https://vuejs.org/examples/#list-transition)

## 7 GUIs

[Counter](https://vuejs.org/examples/#counter) [Temperature Converter](https://vuejs.org/examples/#temperature-converter) [Flight Booker](https://vuejs.org/examples/#flight-booker) [Timer](https://vuejs.org/examples/#timer) [CRUD](https://vuejs.org/examples/#crud) [Circle Drawer](https://vuejs.org/examples/#circle-drawer) [Cells](https://vuejs.org/examples/#cells)

[Get Security Updates for Vue 2](https://www.herodevs.com/support/nes-vue?utm_source=vuejs_org&utm_medium=sidebar_link&utm_campaign=vue2eol)

App.vue

+

```
xxxxxxxxxx
```

18

1

```
<!--
```

2

```
Say Hello World with Vue!
```

3

```
-->
```

4

```
​
```

5

```
<script setup>
```

6

```
import { ref } from 'vue'
```

7

```
​
```

8

```
// A "ref" is a reactive data source that stores a value.
```

9

```
// Technically, we don't need to wrap the string with ref()
```

10

```
// in order to display it, but we will see in the next
```

11

```
// example why it is needed if we ever intend to change
```

12

```
// the value.
```

13

```
const message = ref('Hello World!')
```

14

```
</script>
```

15

```
​
```

16

```
<template>
```

17

```
  <h1>{{ message }}</h1>
```

18

```
</template>
```

Show Error

Auto Save

0px x 0px

preview

# Hello World!

Output >

Examples has loaded