---
url: "https://vuejs.org/guide/best-practices/security"
title: "Security | Vue.js"
---

[Skip to content](https://vuejs.org/guide/best-practices/security#VPContent)

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

[简体中文](https://cn.vuejs.org/guide/best-practices/security) [简体中文 Repository](https://github.com/vuejs-translations/docs-zh-cn "简体中文 Repository")

[日本語](https://ja.vuejs.org/guide/best-practices/security) [日本語 Repository](https://github.com/vuejs-translations/docs-ja "日本語 Repository")

[Українська](https://ua.vuejs.org/guide/best-practices/security) [Українська Repository](https://github.com/vuejs-translations/docs-uk "Українська Repository")

[Français](https://fr.vuejs.org/guide/best-practices/security) [Français Repository](https://github.com/vuejs-translations/docs-fr "Français Repository")

[한국어](https://ko.vuejs.org/guide/best-practices/security) [한국어 Repository](https://github.com/vuejs-translations/docs-ko "한국어 Repository")

[Português](https://pt.vuejs.org/guide/best-practices/security) [Português Repository](https://github.com/vuejs-translations/docs-pt "Português Repository")

[বাংলা](https://bn.vuejs.org/guide/best-practices/security) [বাংলা Repository](https://github.com/vuejs-translations/docs-bn "বাংলা Repository")

[Italiano](https://it.vuejs.org/guide/best-practices/security) [Italiano Repository](https://github.com/vuejs-translations/docs-it "Italiano Repository")

[فارسی](https://fa.vuejs.org/guide/best-practices/security) [فارسی Repository](https://github.com/vuejs-translations/docs-fa "فارسی Repository")

[Русский](https://ru.vuejs.org/guide/best-practices/security) [Русский Repository](https://github.com/vuejs-translations/docs-ru "Русский Repository")

[Čeština](https://cs.vuejs.org/guide/best-practices/security) [Čeština Repository](https://github.com/vuejs-translations/docs-cs "Čeština Repository")

[繁體中文](https://zh-hk.vuejs.org/guide/best-practices/security) [繁體中文 Repository](https://github.com/vuejs-translations/docs-zh-hk "繁體中文 Repository")

[Polski](https://pl.vuejs.org/guide/best-practices/security) [Polski Repository](https://github.com/vuejs-translations/docs-pl "Polski Repository")

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

- [Reporting Vulnerabilities](https://vuejs.org/guide/best-practices/security#reporting-vulnerabilities)
- [Rule No.1: Never Use Non-trusted Templates](https://vuejs.org/guide/best-practices/security#rule-no-1-never-use-non-trusted-templates)
- [What Vue Does to Protect You](https://vuejs.org/guide/best-practices/security#what-vue-does-to-protect-you)
- [Potential Dangers](https://vuejs.org/guide/best-practices/security#potential-dangers)
- [Best Practices](https://vuejs.org/guide/best-practices/security#best-practices)
- [Backend Coordination](https://vuejs.org/guide/best-practices/security#backend-coordination)
- [Server-Side Rendering (SSR)](https://vuejs.org/guide/best-practices/security#server-side-rendering-ssr)

[Sponsors](https://vuejs.org/sponsor/)

[Inquire about Special Sponsorship](https://vuejs.org/sponsor/#tier-benefits)

[![VueMastery](https://automation.vuejs.org/images/vuemastery.png)](https://www.vuemastery.com/)[![Vehikl](https://automation.vuejs.org/images/vehikl.png)](https://vehikl.com/)[![Vue.js Amsterdam](https://automation.vuejs.org/images/vue_js_amsterdam.png)](https://vuejs.amsterdam/)[![Storyblok](https://automation.vuejs.org/images/storyblok.png)](https://www.storyblok.com/)[![Chrome Frameworks Fund](https://automation.vuejs.org/images/chrome_frameworks_fund.png)](https://opencollective.com/2021-frameworks-fund)[![HeroDevs](https://automation.vuejs.org/images/herodevs.png)](https://www.herodevs.com/support/vue)[![JavaScript Certification](https://automation.vuejs.org/images/javascript_certification.png?v2)](https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS)[![CodeRabbit ](https://automation.vuejs.org/images/coderabbit_.png)](https://www.coderabbit.ai/?utm_source=github&utm_medium=sponsors&utm_campaign=evan_you_2025)[![ImageKit.io](https://automation.vuejs.org/images/imagekit_io.svg)](https://imagekit.io/?utm_source=vuejs&utm_medium=referral&utm_campaign=oss-sponsorship&utm_content=homepage)[![Greptile](https://automation.vuejs.org/images/greptile.png)](https://www.greptile.com/?utm_source=vuejs&utm_medium=sponsorship&utm_campaign=vue_sponsor_page)[Become a Sponsor](https://vuejs.org/sponsor/)

# Security [​](https://vuejs.org/guide/best-practices/security\#security)

## Reporting Vulnerabilities [​](https://vuejs.org/guide/best-practices/security\#reporting-vulnerabilities)

When a vulnerability is reported, it immediately becomes our top concern, with a full-time contributor dropping everything to work on it. To report a vulnerability, please email [security@vuejs.org](mailto:security@vuejs.org).

While the discovery of new vulnerabilities is rare, we also recommend always using the latest versions of Vue and its official companion libraries to ensure your application remains as secure as possible.

## Rule No.1: Never Use Non-trusted Templates [​](https://vuejs.org/guide/best-practices/security\#rule-no-1-never-use-non-trusted-templates)

The most fundamental security rule when using Vue is **never use non-trusted content as your component template**. Doing so is equivalent to allowing arbitrary JavaScript execution in your application - and worse, could lead to server breaches if the code is executed during server-side rendering. An example of such usage:

js

```
Vue.createApp({
  template: `<div>` + userProvidedString + `</div>` // NEVER DO THIS
}).mount('#app')
```

Vue templates are compiled into JavaScript, and expressions inside templates will be executed as part of the rendering process. Although the expressions are evaluated against a specific rendering context, due to the complexity of potential global execution environments, it is impractical for a framework like Vue to completely shield you from potential malicious code execution without incurring unrealistic performance overhead. The most straightforward way to avoid this category of problems altogether is to make sure the contents of your Vue templates are always trusted and entirely controlled by you.

## What Vue Does to Protect You [​](https://vuejs.org/guide/best-practices/security\#what-vue-does-to-protect-you)

### HTML content [​](https://vuejs.org/guide/best-practices/security\#html-content)

Whether using templates or render functions, content is automatically escaped. That means in this template:

template

```
<h1>{{ userProvidedString }}</h1>
```

if `userProvidedString` contained:

js

```
'<script>alert("hi")</script>'
```

then it would be escaped to the following HTML:

template

```
&lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;
```

thus preventing the script injection. This escaping is done using native browser APIs, like `textContent`, so a vulnerability can only exist if the browser itself is vulnerable.

### Attribute bindings [​](https://vuejs.org/guide/best-practices/security\#attribute-bindings)

Similarly, dynamic attribute bindings are also automatically escaped. That means in this template:

template

```
<h1 :title="userProvidedString">
  hello
</h1>
```

if `userProvidedString` contained:

js

```
'" onclick="alert(\'hi\')'
```

then it would be escaped to the following HTML:

template

```
&quot; onclick=&quot;alert('hi')
```

thus preventing the close of the `title` attribute to inject new, arbitrary HTML. This escaping is done using native browser APIs, like `setAttribute`, so a vulnerability can only exist if the browser itself is vulnerable.

## Potential Dangers [​](https://vuejs.org/guide/best-practices/security\#potential-dangers)

In any web application, allowing unsanitized, user-provided content to be executed as HTML, CSS, or JavaScript is potentially dangerous, so it should be avoided wherever possible. There are times when some risk may be acceptable, though.

For example, services like CodePen and JSFiddle allow user-provided content to be executed, but it's in a context where this is expected and sandboxed to some extent inside iframes. In the cases when an important feature inherently requires some level of vulnerability, it's up to your team to weigh the importance of the feature against the worst-case scenarios the vulnerability enables.

### HTML Injection [​](https://vuejs.org/guide/best-practices/security\#html-injection)

As you learned earlier, Vue automatically escapes HTML content, preventing you from accidentally injecting executable HTML into your application. However, **in cases where you know the HTML is safe**, you can explicitly render HTML content:

- Using a template:

template

```
<div v-html="userProvidedHtml"></div>
```

- Using a render function:

js

```
h('div', {
    innerHTML: this.userProvidedHtml
})
```

- Using a render function with JSX:

jsx

```
<div innerHTML={this.userProvidedHtml}></div>
```


WARNING

User-provided HTML can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that HTML can ever be exposed to it. Additionally, allowing users to write their own Vue templates brings similar dangers.

### URL Injection [​](https://vuejs.org/guide/best-practices/security\#url-injection)

In a URL like this:

template

```
<a :href="userProvidedUrl">
  click me
</a>
```

There's a potential security issue if the URL has not been "sanitized" to prevent JavaScript execution using `javascript:`. There are libraries such as [sanitize-url](https://www.npmjs.com/package/@braintree/sanitize-url) to help with this, but note: if you're ever doing URL sanitization on the frontend, you already have a security issue. **User-provided URLs should always be sanitized by your backend before even being saved to a database.** Then the problem is avoided for _every_ client connecting to your API, including native mobile apps. Also note that even with sanitized URLs, Vue cannot help you guarantee that they lead to safe destinations.

### Style Injection [​](https://vuejs.org/guide/best-practices/security\#style-injection)

Looking at this example:

template

```
<a
  :href="sanitizedUrl"
  :style="userProvidedStyles"
>
  click me
</a>
```

Let's assume that `sanitizedUrl` has been sanitized, so that it's definitely a real URL and not JavaScript. With the `userProvidedStyles`, malicious users could still provide CSS to "click jack", e.g. styling the link into a transparent box over the "Log in" button. Then if `https://user-controlled-website.com/` is built to resemble the login page of your application, they might have just captured a user's real login information.

You may be able to imagine how allowing user-provided content for a `<style>` element would create an even greater vulnerability, giving that user full control over how to style the entire page. That's why Vue prevents rendering of style tags inside templates, such as:

template

```
<style>{{ userProvidedStyles }}</style>
```

To keep your users fully safe from clickjacking, we recommend only allowing full control over CSS inside a sandboxed iframe. Alternatively, when providing user control through a style binding, we recommend using its [object syntax](https://vuejs.org/guide/essentials/class-and-style#binding-to-objects-1) and only allowing users to provide values for specific properties it's safe for them to control, like this:

template

```
<a
  :href="sanitizedUrl"
  :style="{
    color: userProvidedColor,
    background: userProvidedBackground
  }"
>
  click me
</a>
```

### JavaScript Injection [​](https://vuejs.org/guide/best-practices/security\#javascript-injection)

We strongly discourage ever rendering a `<script>` element with Vue, since templates and render functions should never have side effects. However, this isn't the only way to include strings that would be evaluated as JavaScript at runtime.

Every HTML element has attributes with values accepting strings of JavaScript, such as `onclick`, `onfocus`, and `onmouseenter`. Binding user-provided JavaScript to any of these event attributes is a potential security risk, so it should be avoided.

WARNING

User-provided JavaScript can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that JavaScript can ever be exposed to it.

Sometimes we receive vulnerability reports on how it's possible to do cross-site scripting (XSS) in Vue templates. In general, we do not consider such cases to be actual vulnerabilities because there's no practical way to protect developers from the two scenarios that would allow XSS:

1. The developer is explicitly asking Vue to render user-provided, unsanitized content as Vue templates. This is inherently unsafe, and there's no way for Vue to know the origin.

2. The developer is mounting Vue to an entire HTML page which happens to contain server-rendered and user-provided content. This is fundamentally the same problem as #1, but sometimes devs may do it without realizing it. This can lead to possible vulnerabilities where the attacker provides HTML which is safe as plain HTML but unsafe as a Vue template. The best practice is to **never mount Vue on nodes that may contain server-rendered and user-provided content**.


## Best Practices [​](https://vuejs.org/guide/best-practices/security\#best-practices)

The general rule is that if you allow unsanitized, user-provided content to be executed (as either HTML, JavaScript, or even CSS), you might open yourself up to attacks. This advice actually holds true whether using Vue, another framework, or even no framework.

Beyond the recommendations made above for [Potential Dangers](https://vuejs.org/guide/best-practices/security#potential-dangers), we also recommend familiarizing yourself with these resources:

- [HTML5 Security Cheat Sheet](https://html5sec.org/)
- [OWASP's Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

Then use what you learn to also review the source code of your dependencies for potentially dangerous patterns, if any of them include 3rd-party components or otherwise influence what's rendered to the DOM.

## Backend Coordination [​](https://vuejs.org/guide/best-practices/security\#backend-coordination)

HTTP security vulnerabilities, such as cross-site request forgery (CSRF/XSRF) and cross-site script inclusion (XSSI), are primarily addressed on the backend, so they aren't a concern of Vue's. However, it's still a good idea to communicate with your backend team to learn how to best interact with their API, e.g., by submitting CSRF tokens with form submissions.

## Server-Side Rendering (SSR) [​](https://vuejs.org/guide/best-practices/security\#server-side-rendering-ssr)

There are some additional security concerns when using SSR, so make sure to follow the best practices outlined throughout [our SSR documentation](https://vuejs.org/guide/scaling-up/ssr) to avoid vulnerabilities.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/best-practices/security.md)

[PreviousAccessibility](https://vuejs.org/guide/best-practices/accessibility) [Next Overview](https://vuejs.org/guide/typescript/overview)

Security has loaded