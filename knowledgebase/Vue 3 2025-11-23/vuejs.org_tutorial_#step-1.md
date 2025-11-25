---
url: "https://vuejs.org/tutorial/#step-1"
title: "Tutorial | Vue.js"
---

[Skip to content](https://vuejs.org/tutorial/#VPContent)

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

[简体中文](https://cn.vuejs.org/tutorial/) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/tutorial/) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/tutorial/) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/tutorial/) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/tutorial/) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/tutorial/) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/tutorial/) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/tutorial/) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/tutorial/) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/tutorial/) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/tutorial/) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/tutorial/) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/tutorial/) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

API Preference

OptionsComposition [?](https://vuejs.org/guide/introduction.html#api-styles "About API preference")

HTMLSFC [?](https://vuejs.org/guide/scaling-up/sfc.html "About SFC")

1 / 15

[1\. Getting Started](https://vuejs.org/tutorial/#step-1) [2\. Declarative Rendering](https://vuejs.org/tutorial/#step-2) [3\. Attribute Bindings](https://vuejs.org/tutorial/#step-3) [4\. Event Listeners](https://vuejs.org/tutorial/#step-4) [5\. Form Bindings](https://vuejs.org/tutorial/#step-5) [6\. Conditional Rendering](https://vuejs.org/tutorial/#step-6) [7\. List Rendering](https://vuejs.org/tutorial/#step-7) [8\. Computed Property](https://vuejs.org/tutorial/#step-8) [9\. Lifecycle and Template Refs](https://vuejs.org/tutorial/#step-9) [10\. Watchers](https://vuejs.org/tutorial/#step-10) [11\. Components](https://vuejs.org/tutorial/#step-11) [12\. Props](https://vuejs.org/tutorial/#step-12) [13\. Emits](https://vuejs.org/tutorial/#step-13) [14\. Slots](https://vuejs.org/tutorial/#step-14) [15\. You Did It!](https://vuejs.org/tutorial/#step-15)

# Getting Started [​](https://vuejs.org/tutorial/\#getting-started)

Welcome to the Vue tutorial!

The goal of this tutorial is to quickly give you an experience of what it feels like to work with Vue, right in the browser. It does not aim to be comprehensive, and you don't need to understand everything before moving on. However, after you complete it, make sure to also read the [Guide](https://vuejs.org/guide/introduction.html) which covers each topic in more detail.

## Prerequisites [​](https://vuejs.org/tutorial/\#prerequisites)

The tutorial assumes basic familiarity with HTML, CSS and JavaScript. If you are totally new to front-end development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.

## How to Use This Tutorial [​](https://vuejs.org/tutorial/\#how-to-use-this-tutorial)

You can edit the code on the rightbelow and see the result update instantly. Each step will introduce a core feature of Vue, and you will be expected to complete the code to get the demo working. If you get stuck, you will have a "Show me!" button that reveals the working code for you. Try not to rely on it too much - you'll learn faster by figuring things out on your own.

If you are an experienced developer coming from Vue 2 or other frameworks, there are a few settings you can tweak to make the best use of this tutorial. If you are a beginner, it's recommended to go with the defaults.

Tutorial Setting Details

- Vue offers two API styles: Options API and Composition API. This tutorial is designed to work for both - you can choose your preferred style using the **API Preference** switches at the top. [Learn more about API styles](https://vuejs.org/guide/introduction.html#api-styles).

- You can also switch between SFC-mode or HTML-mode. The former will show code examples in [Single-File Component](https://vuejs.org/guide/introduction.html#single-file-components) (SFC) format, which is what most developers use when they use Vue with a build step. HTML-mode shows usage without a build step.


TIP

If you're about to use HTML-mode without a build step in your own applications, make sure you either change imports to:

js

```
import { ... } from 'vue/dist/vue.esm-bundler.js'
```

inside your scripts or configure your build tool to resolve `vue` accordingly. Sample config for [Vite](https://vitejs.dev/):

vite.config.js

js

```
export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
}
```

See the respective [section in Tooling guide](https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation) for more information.

Ready? Click "Next" to get started.

[Next](https://vuejs.org/tutorial/#step-2)

App.vue

+

```
xxxxxxxxxx
```

3

1

```
<template>
```

2

```
  <h1>Hello World!</h1>
```

3

```
</template>
```

Show Error

Auto Save

0px x 0px

preview

# Hello World!

Output >

Tutorial has loaded