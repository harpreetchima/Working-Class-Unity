---
url: "https://vuejs.org/style-guide/"
title: "Style Guide | Vue.js"
---

[Skip to content](https://vuejs.org/style-guide/#VPContent)

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

[简体中文](https://cn.vuejs.org/style-guide/) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/style-guide/) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/style-guide/) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/style-guide/) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/style-guide/) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/style-guide/) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/style-guide/) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/style-guide/) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/style-guide/) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/style-guide/) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/style-guide/) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/style-guide/) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/style-guide/) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Rule Categories](https://vuejs.org/style-guide/#rule-categories)
  - [Priority A: Essential (Error Prevention)](https://vuejs.org/style-guide/#priority-a-essential-error-prevention)
  - [Priority B: Strongly Recommended](https://vuejs.org/style-guide/#priority-b-strongly-recommended)
  - [Priority C: Recommended](https://vuejs.org/style-guide/#priority-c-recommended)
  - [Priority D: Use with Caution](https://vuejs.org/style-guide/#priority-d-use-with-caution)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[Become a Sponsor](https://vuejs.org/sponsor/)

# Style Guide [​](https://vuejs.org/style-guide/\#style-guide)

Note

This Vue.js Style Guide is outdated and needs to be reviewed. If you have any questions or suggestions, please [open an issue](https://github.com/vuejs/docs/issues/new).

This is the official style guide for Vue-specific code. If you use Vue in a project, it's a great reference to avoid errors, bikeshedding, and anti-patterns. However, we don't believe that any style guide is ideal for all teams or projects, so mindful deviations are encouraged based on past experience, the surrounding tech stack, and personal values.

For the most part, we also avoid suggestions about JavaScript or HTML in general. We don't mind whether you use semicolons or trailing commas. We don't mind whether your HTML uses single-quotes or double-quotes for attribute values. Some exceptions will exist however, where we've found that a particular pattern is helpful in the context of Vue.

Finally, we've split rules into four categories:

## Rule Categories [​](https://vuejs.org/style-guide/\#rule-categories)

### Priority A: Essential (Error Prevention) [​](https://vuejs.org/style-guide/\#priority-a-essential-error-prevention)

These rules help prevent errors, so learn and abide by them at all costs. Exceptions may exist, but should be very rare and only be made by those with expert knowledge of both JavaScript and Vue.

- [See all priority A rules](https://vuejs.org/style-guide/rules-essential)

### Priority B: Strongly Recommended [​](https://vuejs.org/style-guide/\#priority-b-strongly-recommended)

These rules have been found to improve readability and/or developer experience in most projects. Your code will still run if you violate them, but violations should be rare and well-justified.

- [See all priority B rules](https://vuejs.org/style-guide/rules-strongly-recommended)

### Priority C: Recommended [​](https://vuejs.org/style-guide/\#priority-c-recommended)

Where multiple, equally good options exist, an arbitrary choice can be made to ensure consistency. In these rules, we describe each acceptable option and suggest a default choice. That means you can feel free to make a different choice in your own codebase, as long as you're consistent and have a good reason. Please do have a good reason though! By adapting to the community standard, you will:

1. Train your brain to more easily parse most of the community code you encounter
2. Be able to copy and paste most community code examples without modification
3. Often find new hires are already accustomed to your preferred coding style, at least in regards to Vue

- [See all priority C rules](https://vuejs.org/style-guide/rules-recommended)

### Priority D: Use with Caution [​](https://vuejs.org/style-guide/\#priority-d-use-with-caution)

Some features of Vue exist to accommodate rare edge cases or smoother migrations from a legacy code base. When overused however, they can make your code more difficult to maintain or even become a source of bugs. These rules shine a light on potentially risky features, describing when and why they should be avoided.

- [See all priority D rules](https://vuejs.org/style-guide/rules-use-with-caution)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/style-guide/index.md)

[Next A - Essential](https://vuejs.org/style-guide/rules-essential)

Style Guide has loaded