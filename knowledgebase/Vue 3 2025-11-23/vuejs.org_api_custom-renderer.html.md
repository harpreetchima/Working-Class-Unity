---
url: "https://vuejs.org/api/custom-renderer.html"
title: "Custom Renderer API | Vue.js"
---

[Skip to content](https://vuejs.org/api/custom-renderer.html#VPContent)

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

[简体中文](https://cn.vuejs.org/api/custom-renderer) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/api/custom-renderer) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/api/custom-renderer) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/api/custom-renderer) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/api/custom-renderer) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/api/custom-renderer) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/api/custom-renderer) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/api/custom-renderer) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/api/custom-renderer) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/api/custom-renderer) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/api/custom-renderer) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/api/custom-renderer) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/api/custom-renderer) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [createRenderer()](https://vuejs.org/api/custom-renderer.html#createrenderer)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Custom Renderer API [​](https://vuejs.org/api/custom-renderer.html\#custom-renderer-api)

## createRenderer() [​](https://vuejs.org/api/custom-renderer.html\#createrenderer)

Creates a custom renderer. By providing platform-specific node creation and manipulation APIs, you can leverage Vue's core runtime to target non-DOM environments.

- **Type**

ts

```
function createRenderer<HostNode, HostElement>(
    options: RendererOptions<HostNode, HostElement>
): Renderer<HostElement>

interface Renderer<HostElement> {
    render: RootRenderFunction<HostElement>
    createApp: CreateAppFunction<HostElement>
}

interface RendererOptions<HostNode, HostElement> {
    patchProp(
      el: HostElement,
      key: string,
      prevValue: any,
      nextValue: any,
      namespace?: ElementNamespace,
      parentComponent?: ComponentInternalInstance | null,
    ): void
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void
    remove(el: HostNode): void
    createElement(
      type: string,
      namespace?: ElementNamespace,
      isCustomizedBuiltIn?: string,
      vnodeProps?: (VNodeProps & { [key: string]: any }) | null,
    ): HostElement
    createText(text: string): HostNode
    createComment(text: string): HostNode
    setText(node: HostNode, text: string): void
    setElementText(node: HostElement, text: string): void
    parentNode(node: HostNode): HostElement | null
    nextSibling(node: HostNode): HostNode | null
    querySelector?(selector: string): HostElement | null
    setScopeId?(el: HostElement, id: string): void
    cloneNode?(node: HostNode): HostNode
    insertStaticContent?(
      content: string,
      parent: HostElement,
      anchor: HostNode | null,
      namespace: ElementNamespace,
      start?: HostNode | null,
      end?: HostNode | null,
    ): [HostNode, HostNode]
}
```

- **Example**

js

```
import { createRenderer } from '@vue/runtime-core'

const { render, createApp } = createRenderer({
    patchProp,
    insert,
    remove,
    createElement
    // ...
})

// `render` is the low-level API
// `createApp` returns an app instance
export { render, createApp }

// re-export Vue core APIs
export * from '@vue/runtime-core'
```



Vue's own `@vue/runtime-dom` is [implemented using the same API](https://github.com/vuejs/core/blob/main/packages/runtime-dom/src/index.ts). For a simpler implementation, check out [`@vue/runtime-test`](https://github.com/vuejs/core/blob/main/packages/runtime-test/src/index.ts) which is a private package for Vue's own unit testing.


[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/api/custom-renderer.md)

[PreviousTypeScript Utility Types](https://vuejs.org/api/utility-types) [Next Compile-Time Flags](https://vuejs.org/api/compile-time-flags)

Custom Renderer API has loaded