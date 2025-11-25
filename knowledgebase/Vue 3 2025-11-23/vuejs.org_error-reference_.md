---
url: "https://vuejs.org/error-reference/"
title: "Production Error Code Reference | Vue.js"
---

[Skip to content](https://vuejs.org/error-reference/#VPContent)

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

[简体中文](https://cn.vuejs.org/error-reference/) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/error-reference/) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/error-reference/) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/error-reference/) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/error-reference/) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/error-reference/) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/error-reference/) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/error-reference/) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/error-reference/) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/error-reference/) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/error-reference/) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/error-reference/) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/error-reference/) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

Help Us Translate!

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

Appearance

[github](https://github.com/vuejs/ "github") [twitter](https://x.com/vuejs "twitter") [discord](https://discord.com/invite/vue "discord")

On this page

Table of Contents for current page

- [Runtime Errors](https://vuejs.org/error-reference/#runtime-errors)
- [Compiler Errors](https://vuejs.org/error-reference/#compiler-errors)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Production Error Code Reference [​](https://vuejs.org/error-reference/\#error-reference)

## Runtime Errors [​](https://vuejs.org/error-reference/\#runtime-errors)

In production builds, the 3rd argument passed to the following error handler APIs will be a short code instead of the full information string:

- [`app.config.errorHandler`](https://vuejs.org/api/application#app-config-errorhandler)
- [`onErrorCaptured`](https://vuejs.org/api/composition-api-lifecycle#onerrorcaptured) (Composition API)
- [`errorCaptured`](https://vuejs.org/api/options-lifecycle#errorcaptured) (Options API)

The following table maps the codes to their original full information strings.

| Code | Message |
| --- | --- |
| 0 | setup function |
| 1 | render function |
| 2 | watcher getter |
| 3 | watcher callback |
| 4 | watcher cleanup function |
| 5 | native event handler |
| 6 | component event handler |
| 7 | vnode hook |
| 8 | directive hook |
| 9 | transition hook |
| 10 | app errorHandler |
| 11 | app warnHandler |
| 12 | ref function |
| 13 | async component loader |
| 14 | scheduler flush |
| 15 | component update |
| 16 | app unmount cleanup function |
| sp | serverPrefetch hook |
| bc | beforeCreate hook |
| c | created hook |
| bm | beforeMount hook |
| m | mounted hook |
| bu | beforeUpdate hook |
| u | updated |
| bum | beforeUnmount hook |
| um | unmounted hook |
| a | activated hook |
| da | deactivated hook |
| ec | errorCaptured hook |
| rtc | renderTracked hook |
| rtg | renderTriggered hook |

## Compiler Errors [​](https://vuejs.org/error-reference/\#compiler-errors)

The following table provides a mapping of the production compiler error codes to their original messages.

| Code | Message |
| --- | --- |
| 0 | Illegal comment. |
| 1 | CDATA section is allowed only in XML context. |
| 2 | Duplicate attribute. |
| 3 | End tag cannot have attributes. |
| 4 | Illegal '/' in tags. |
| 5 | Unexpected EOF in tag. |
| 6 | Unexpected EOF in CDATA section. |
| 7 | Unexpected EOF in comment. |
| 8 | Unexpected EOF in script. |
| 9 | Unexpected EOF in tag. |
| 10 | Incorrectly closed comment. |
| 11 | Incorrectly opened comment. |
| 12 | Illegal tag name. Use '&lt;' to print '<'. |
| 13 | Attribute value was expected. |
| 14 | End tag name was expected. |
| 15 | Whitespace was expected. |
| 16 | Unexpected '<!--' in comment. |
| 17 | Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<). |
| 18 | Unquoted attribute value cannot contain U+0022 ("), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (\`). |
| 19 | Attribute name cannot start with '='. |
| 20 | Unexpected null character. |
| 21 | '<?' is allowed only in XML context. |
| 22 | Illegal '/' in tags. |
| 23 | Invalid end tag. |
| 24 | Element is missing end tag. |
| 25 | Interpolation end sign was not found. |
| 26 | Legal directive name was expected. |
| 27 | End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces. |
| 28 | v-if/v-else-if is missing expression. |
| 29 | v-if/else branches must use unique keys. |
| 30 | v-else/v-else-if has no adjacent v-if or v-else-if. |
| 31 | v-for is missing expression. |
| 32 | v-for has invalid expression. |
| 33 | <template v-for> key should be placed on the <template> tag. |
| 34 | v-bind is missing expression. |
| 35 | v-on is missing expression. |
| 36 | Unexpected custom directive on <slot> outlet. |
| 37 | Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity. |
| 38 | Duplicate slot names found. |
| 39 | Extraneous children found when component already has explicitly named default slot. These children will be ignored. |
| 40 | v-slot can only be used on components or <template> tags. |
| 41 | v-model is missing expression. |
| 42 | v-model value must be a valid JavaScript member expression. |
| 43 | v-model cannot be used on v-for or v-slot scope variables because they are not writable. |
| 44 | v-model cannot be used on a prop, because local prop bindings are not writable.<br>Use a v-bind binding combined with a v-on listener that emits update:x event instead. |
| 45 | Error parsing JavaScript expression: |
| 46 | <KeepAlive> expects exactly one child component. |
| 47 | "prefixIdentifiers" option is not supported in this build of compiler. |
| 48 | ES module mode is not supported in this build of compiler. |
| 49 | "cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled. |
| 50 | "scopeId" option is only supported in module mode. |
| 51 | @vnode-\* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-\* hooks support has been removed in 3.4. |
| 52 | v-bind with same-name shorthand only allows static argument. |
| 53 | v-html is missing expression. |
| 54 | v-html will override element children. |
| 55 | v-text is missing expression. |
| 56 | v-text will override element children. |
| 57 | v-model can only be used on <input>, <textarea> and <select> elements. |
| 58 | v-model argument is not supported on plain elements. |
| 59 | v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead. |
| 60 | Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior. |
| 61 | v-show is missing expression. |
| 62 | <Transition> expects exactly one child element or component. |
| 63 | Tags with side effect (<script> and <style>) are ignored in client component templates. |

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/error-reference/index.md)

Production Error Code Reference has loaded