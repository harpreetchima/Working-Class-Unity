---
url: "https://nuxt.com/docs/4.x/getting-started/styling"
title: "Styling · Get Started with Nuxt v4"
---

[Back to home](https://nuxt.com/) v4.2.1

- [Docs](https://nuxt.com/docs/4.x)
- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Resources](https://nuxt.com/showcase)
- [Enterprise](https://nuxt.com/enterprise)
- [Blog](https://nuxt.com/blog)

Search…
`Ctrl`  `k`
[58.9K](https://go.nuxt.com/github)

- [Get Started](https://nuxt.com/docs/4.x/getting-started/installation)
- [Structure](https://nuxt.com/docs/4.x/directory-structure)
- [Guide](https://nuxt.com/docs/4.x/guide)
- [API](https://nuxt.com/docs/4.x/api)
- [Deploy](https://nuxt.com/deploy)
- [Examples](https://nuxt.com/docs/4.x/examples)
- [Community](https://nuxt.com/docs/4.x/community)

- [Introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Configuration](https://nuxt.com/docs/4.x/getting-started/configuration)
- [Views](https://nuxt.com/docs/4.x/getting-started/views)
- [Assets](https://nuxt.com/docs/4.x/getting-started/assets)
- [Styling](https://nuxt.com/docs/4.x/getting-started/styling)
- [Routing](https://nuxt.com/docs/4.x/getting-started/routing)
- [SEO and Meta](https://nuxt.com/docs/4.x/getting-started/seo-meta)
- [Transitions](https://nuxt.com/docs/4.x/getting-started/transitions)
- [Data Fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching)
- [State Management](https://nuxt.com/docs/4.x/getting-started/state-management)
- [Error Handling](https://nuxt.com/docs/4.x/getting-started/error-handling)
- [Server](https://nuxt.com/docs/4.x/getting-started/server)
- [Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Prerendering](https://nuxt.com/docs/4.x/getting-started/prerendering)
- [Deployment](https://nuxt.com/docs/4.x/getting-started/deployment)
- [Testing](https://nuxt.com/docs/4.x/getting-started/testing)
- [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)

1. [Get Started](https://nuxt.com/docs/4.x/getting-started)

# Styling

Copy page

Learn how to style your Nuxt application.

Nuxt is highly flexible when it comes to styling. Write your own styles, or reference local and external stylesheets.
You can use CSS preprocessors, CSS frameworks, UI libraries and Nuxt modules to style your application.

## [Local Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling\#local-stylesheets)

If you're writing local stylesheets, the natural place to put them is the [`app/assets/` directory](https://nuxt.com/docs/4.x/directory-structure/app/assets).

### [Importing Within Components](https://nuxt.com/docs/4.x/getting-started/styling\#importing-within-components)

You can import stylesheets in your pages, layouts and components directly.
You can use a JavaScript import, or a CSS [`@import` statement](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@import).

app/pages/index.vue

```vue
<script>
// Use a static import for server-side compatibility
import '~/assets/css/first.css'

// Caution: Dynamic imports are not server-side compatible
import('~/assets/css/first.css')
</script>

<style>
@import url("~/assets/css/second.css");
</style>
```

The stylesheets will be inlined in the HTML rendered by Nuxt.

### [The CSS Property](https://nuxt.com/docs/4.x/getting-started/styling\#the-css-property)

You can also use the `css` property in the Nuxt configuration.
The natural place for your stylesheets is the [`app/assets/` directory](https://nuxt.com/docs/4.x/directory-structure/app/assets). You can then reference its path and Nuxt will include it to all the pages of your application.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
})
```

The stylesheets will be inlined in the HTML rendered by Nuxt, injected globally and present in all pages.

### [Working With Fonts](https://nuxt.com/docs/4.x/getting-started/styling\#working-with-fonts)

Place your local fonts files in your `public/` directory, for example in `public/fonts`. You can then reference them in your stylesheets using `url()`.

assets/css/main.css

```css
@font-face {
  font-family: 'FarAwayGalaxy';
  src: url('/fonts/FarAwayGalaxy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Then reference your fonts by name in your stylesheets, pages or components:

```vue
<style>
h1 {
  font-family: 'FarAwayGalaxy', sans-serif;
}
</style>
```

### [Stylesheets Distributed Through NPM](https://nuxt.com/docs/4.x/getting-started/styling\#stylesheets-distributed-through-npm)

You can also reference stylesheets that are distributed through npm. Let's use the popular `animate.css` library as an example.

npmyarnpnpmbun

```bash
npm install animate.css
```

```bash
yarn add animate.css
```

```bash
pnpm install animate.css
```

```bash
bun install animate.css
```

Then you can reference it directly in your pages, layouts and components:

app/app.vue

```vue
<script>
import 'animate.css'
</script>

<style>
@import url("animate.css");
</style>
```

The package can also be referenced as a string in the css property of your Nuxt configuration.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  css: ['animate.css'],
})
```

## [External Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling\#external-stylesheets)

You can include external stylesheets in your application by adding a link element in the head section of your nuxt.config file. You can achieve this result using different methods. Note that local stylesheets can also be included this way.

You can manipulate the head with the [`app.head`](https://nuxt.com/docs/4.x/api/nuxt-config#head) property of your Nuxt configuration:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
    },
  },
})
```

### [Dynamically Adding Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling\#dynamically-adding-stylesheets)

You can use the useHead composable to dynamically set a value in your head in your code.

[Docs > 4 X > API > Composables > Use Head](https://nuxt.com/docs/4.x/api/composables/use-head) Read more in Docs > 4 X > API > Composables > Use Head.

```ts
useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
})
```

Nuxt uses `unhead` under the hood, and you can refer to [its full documentation](https://unhead.unjs.io/).

### [Modifying The Rendered Head With A Nitro Plugin](https://nuxt.com/docs/4.x/getting-started/styling\#modifying-the-rendered-head-with-a-nitro-plugin)

If you need more advanced control, you can intercept the rendered html with a hook and modify the head programmatically.

Create a plugin in `~/server/plugins/my-plugin.ts` like this:

server/plugins/my-plugin.ts

```ts
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:html', (html) => {
    html.head.push('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">')
  })
})
```

External stylesheets are render-blocking resources: they must be loaded and processed before the browser renders the page. Web pages that contain unnecessarily large styles take longer to render. You can read more about it on [web.dev](https://web.dev/articles/defer-non-critical-css).

## [Using Preprocessors](https://nuxt.com/docs/4.x/getting-started/styling\#using-preprocessors)

To use a preprocessor like SCSS, Sass, Less or Stylus, install it first.

Sass & SCSSLessStylus

```bash
npm install -D sass
```

```bash
npm install -D less
```

```bash
npm install -D stylus
```

The natural place to write your stylesheets is the `app/assets` directory.
You can then import your source files in your `app.vue` (or layouts files) using your preprocessor's syntax.

app/pages/app.vue

```vue
<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
```

Alternatively, you can use the `css` property of your Nuxt configuration.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
})
```

In both cases, the compiled stylesheets will be inlined in the HTML rendered by Nuxt.

If you need to inject code in pre-processed files, like a [Sass partial](https://sass-lang.com/documentation/at-rules/use/#partials) with color variables, you can do so with the Vite [preprocessors options](https://vite.dev/config/shared-options#css-preprocessoroptions).

Create some partials in your `app/assets` directory:

assets/\_colors.scssassets/\_colors.sass

```scss
$primary: #49240F;
$secondary: #E4A79D;
```

```sass
$primary: #49240F
$secondary: #E4A79D
```

Then in your `nuxt.config` :

SCSSSASS

```ts
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
})
```

```ts
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/_colors.sass" as *\n',
        },
      },
    },
  },
})
```

Nuxt uses Vite by default. If you wish to use webpack instead, refer to each preprocessor loader [documentation](https://webpack.js.org/loaders/sass-loader/).

### [Preprocessor Workers (Experimental)](https://nuxt.com/docs/4.x/getting-started/styling\#preprocessor-workers-experimental)

Vite has made available an [experimental option](https://vite.dev/config/shared-options#css-preprocessormaxworkers) which can speed up using preprocessors.

You can enable this in your `nuxt.config`:

```ts
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorMaxWorkers: true, // number of CPUs minus 1
    },
  },
})
```

This is an experimental option and you should refer to the Vite documentation and [provide feedback](https://github.com/vitejs/vite/discussions/15835).

## [Single File Components (SFC) Styling](https://nuxt.com/docs/4.x/getting-started/styling\#single-file-components-sfc-styling)

One of the best things about Vue and SFC is how great it is at naturally dealing with styling. You can directly write CSS or preprocessor code in the style block of your components file, therefore you will have fantastic developer experience without having to use something like CSS-in-JS. However if you wish to use CSS-in-JS, you can find 3rd party libraries and modules that support it, such as [pinceau](https://github.com/Tahul/pinceau).

You can refer to the [Vue docs](https://vuejs.org/api/sfc-css-features) for a comprehensive reference about styling components in SFC.

### [Class And Style Bindings](https://nuxt.com/docs/4.x/getting-started/styling\#class-and-style-bindings)

You can leverage Vue SFC features to style your components with class and style attributes.

Ref and ReactiveComputedArrayStyle

```vue
<script setup lang="ts">
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
  'active': true,
  'text-danger': false,
})
</script>

<template>
  <div
    class="static"
    :class="{ 'active': isActive, 'text-danger': hasError }"
  />
  <div :class="classObject" />
</template>
```

```vue
<script setup lang="ts">
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  'active': isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal',
}))
</script>

<template>
  <div :class="classObject" />
</template>
```

```vue
<script setup lang="ts">
const isActive = ref(true)
const errorClass = ref('text-danger')
</script>

<template>
  <div :class="[{ active: isActive }, errorClass]" />
</template>
```

```vue
<script setup lang="ts">
const activeColor = ref('red')
const fontSize = ref(30)
const styleObject = reactive({ color: 'red', fontSize: '13px' })
</script>

<template>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }" />
  <div :style="[baseStyles, overridingStyles]" />
  <div :style="styleObject" />
</template>
```

Refer to the [Vue docs](https://vuejs.org/guide/essentials/class-and-style) for more information.

### [Dynamic Styles With `v-bind`](https://nuxt.com/docs/4.x/getting-started/styling\#dynamic-styles-with-v-bind)

You can reference JavaScript variable and expression within your style blocks with the v-bind function.
The binding will be dynamic, meaning that if the variable value changes, the style will be updated.

```vue
<script setup lang="ts">
const color = ref('red')
</script>

<template>
  <div class="text">
    hello
  </div>
</template>

<style>
.text {
  color: v-bind(color);
}
</style>
```

### [Scoped Styles](https://nuxt.com/docs/4.x/getting-started/styling\#scoped-styles)

The scoped attribute allows you to style components in isolation. The styles declared with this attribute will only apply to this component.

```vue
<template>
  <div class="example">
    hi
  </div>
</template>

<style scoped>
.example {
  color: red;
}
</style>
```

### [CSS Modules](https://nuxt.com/docs/4.x/getting-started/styling\#css-modules)

You can use [CSS Modules](https://github.com/css-modules/css-modules) with the module attribute. Access it with the injected `$style` variable.

```vue
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>

<style module>
.red {
  color: red;
}
</style>
```

### [Preprocessors Support](https://nuxt.com/docs/4.x/getting-started/styling\#preprocessors-support)

SFC style blocks support preprocessor syntax. Vite comes with built-in support for .scss, .sass, .less, .styl and .stylus files without configuration. You just need to install them first, and they will be available directly in SFC with the lang attribute.

SCSSSassLESSStylus

```vue
<style lang="scss">
  /* Write scss here */
</style>
```

```vue
<style lang="sass">
  /* Write sass here */
</style>
```

```vue
<style lang="less">
  /* Write less here */
</style>
```

```vue
<style lang="stylus">
  /* Write stylus here */
</style>
```

You can refer to the [Vite CSS docs](https://vite.dev/guide/features#css) and the [@vitejs/plugin-vue docs](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue).
For webpack users, refer to the [vue loader docs](https://vue-loader.vuejs.org/).

## [Using PostCSS](https://nuxt.com/docs/4.x/getting-started/styling\#using-postcss)

Nuxt comes with postcss built-in. You can configure it in your `nuxt.config` file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-custom-media': {},
    },
  },
})
```

For proper syntax highlighting in SFC, you can use the postcss lang attribute.

```vue
<style lang="postcss">
  /* Write postcss here */
</style>
```

By default, Nuxt comes with the following plugins already pre-configured:

- [postcss-import](https://github.com/postcss/postcss-import): Improves the `@import` rule
- [postcss-url](https://github.com/postcss/postcss-url): Transforms `url()` statements
- [autoprefixer](https://github.com/postcss/autoprefixer): Automatically adds vendor prefixes
- [cssnano](https://cssnano.github.io/cssnano/): Minification and purge

## [Leveraging Layouts For Multiple Styles](https://nuxt.com/docs/4.x/getting-started/styling\#leveraging-layouts-for-multiple-styles)

If you need to style different parts of your application completely differently, you can use layouts.
Use different styles for different layouts.

```vue
<template>
  <div class="default-layout">
    <h1>Default Layout</h1>
    <slot />
  </div>
</template>

<style>
.default-layout {
  color: red;
}
</style>
```

[Docs > 4 X > Directory Structure > App > Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts) Read more in Docs > 4 X > Directory Structure > App > Layouts.

## [Third Party Libraries And Modules](https://nuxt.com/docs/4.x/getting-started/styling\#third-party-libraries-and-modules)

Nuxt isn't opinionated when it comes to styling and provides you with a wide variety of options. You can use any styling tool that you want, such as popular libraries like [UnoCSS](https://unocss.dev/) or [Tailwind CSS](https://tailwindcss.com/).

The community and the Nuxt team have developed plenty of Nuxt modules to make the integration easier.
You can discover them on the [modules section](https://nuxt.com/modules) of the website.
Here are a few modules to help you get started:

- [UnoCSS](https://nuxt.com/modules/unocss): Instant on-demand atomic CSS engine
- [Tailwind CSS](https://nuxt.com/modules/tailwindcss): Utility-first CSS framework
- [Fontaine](https://github.com/nuxt-modules/fontaine): Font metric fallback
- [Pinceau](https://github.com/Tahul/pinceau): Adaptable styling framework
- [Nuxt UI](https://ui.nuxt.com/): A UI Library for Modern Web Apps
- [Panda CSS](https://panda-css.com/docs/installation/nuxt): CSS-in-JS engine that generates atomic CSS at build time

Nuxt modules provide you with a good developer experience out of the box, but remember that if your favorite tool doesn't have a module, it doesn't mean that you can't use it with Nuxt! You can configure it yourself for your own project. Depending on the tool, you might need to use a [Nuxt plugin](https://nuxt.com/docs/4.x/directory-structure/app/plugins) and/or [make your own module](https://nuxt.com/docs/4.x/guide/going-further/modules). Share them with the [community](https://nuxt.com/modules) if you do!

### [Easily Load Webfonts](https://nuxt.com/docs/4.x/getting-started/styling\#easily-load-webfonts)

You can use [the Nuxt Google Fonts module](https://github.com/nuxt-modules/google-fonts) to load Google Fonts.

If you are using [UnoCSS](https://unocss.dev/integrations/nuxt), note that it comes with a [web fonts presets](https://unocss.dev/presets/web-fonts) to conveniently load fonts from common providers, including Google Fonts and more.

## [Advanced](https://nuxt.com/docs/4.x/getting-started/styling\#advanced)

### [Transitions](https://nuxt.com/docs/4.x/getting-started/styling\#transitions)

Nuxt comes with the same `<Transition>` element that Vue has, and also has support for the experimental [View Transitions API](https://nuxt.com/docs/4.x/getting-started/transitions#view-transitions-api-experimental).

[Docs > 4 X > Getting Started > Transitions](https://nuxt.com/docs/4.x/getting-started/transitions) Read more in Docs > 4 X > Getting Started > Transitions.

### [Font Advanced Optimization](https://nuxt.com/docs/4.x/getting-started/styling\#font-advanced-optimization)

We would recommend using [Fontaine](https://github.com/nuxt-modules/fontaine) to reduce your [CLS](https://web.dev/articles/cls). If you need something more advanced, consider creating a Nuxt module to extend the build process or the Nuxt runtime.

Always remember to take advantage of the various tools and techniques available in the Web ecosystem at large to make styling your application easier and more efficient. Whether you're using native CSS, a preprocessor, postcss, a UI library or a module, Nuxt has got you covered. Happy styling!

### [LCP Advanced Optimizations](https://nuxt.com/docs/4.x/getting-started/styling\#lcp-advanced-optimizations)

You can do the following to speed-up the download of your global CSS files:

- Use a CDN so the files are physically closer to your users
- Compress your assets, ideally using Brotli
- Use HTTP2/HTTP3 for delivery
- Host your assets on the same domain (do not use a different subdomain)

Most of these things should be done for you automatically if you're using modern platforms like Cloudflare, Netlify or Vercel.
You can find an LCP optimization guide on [web.dev](https://web.dev/articles/optimize-lcp).

If all of your CSS is inlined by Nuxt, you can (experimentally) completely stop external CSS files from being referenced in your rendered HTML.
You can achieve that with a hook, that you can place in a module, or in your Nuxt configuration file.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = Object.values(manifest).find(options => options.isEntry)?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) {
            css.splice(i, 1)
          }
        }
      }
    },
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/06.styling.md)

[Assets\\
\\
Nuxt offers two options for your assets.](https://nuxt.com/docs/4.x/getting-started/assets) [Routing\\
\\
Nuxt file-system routing creates a route for every file in the pages/ directory.](https://nuxt.com/docs/4.x/getting-started/routing)

On this page

On this page

- [Local Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling#local-stylesheets)
  - [Importing Within Components](https://nuxt.com/docs/4.x/getting-started/styling#importing-within-components)
  - [The CSS Property](https://nuxt.com/docs/4.x/getting-started/styling#the-css-property)
  - [Working With Fonts](https://nuxt.com/docs/4.x/getting-started/styling#working-with-fonts)
  - [Stylesheets Distributed Through NPM](https://nuxt.com/docs/4.x/getting-started/styling#stylesheets-distributed-through-npm)
- [External Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling#external-stylesheets)
  - [Dynamically Adding Stylesheets](https://nuxt.com/docs/4.x/getting-started/styling#dynamically-adding-stylesheets)
  - [Modifying The Rendered Head With A Nitro Plugin](https://nuxt.com/docs/4.x/getting-started/styling#modifying-the-rendered-head-with-a-nitro-plugin)
- [Using Preprocessors](https://nuxt.com/docs/4.x/getting-started/styling#using-preprocessors)
  - [Preprocessor Workers (Experimental)](https://nuxt.com/docs/4.x/getting-started/styling#preprocessor-workers-experimental)
- [Single File Components (SFC) Styling](https://nuxt.com/docs/4.x/getting-started/styling#single-file-components-sfc-styling)
  - [Class And Style Bindings](https://nuxt.com/docs/4.x/getting-started/styling#class-and-style-bindings)
  - [Dynamic Styles With v-bind](https://nuxt.com/docs/4.x/getting-started/styling#dynamic-styles-with-v-bind)
  - [Scoped Styles](https://nuxt.com/docs/4.x/getting-started/styling#scoped-styles)
  - [CSS Modules](https://nuxt.com/docs/4.x/getting-started/styling#css-modules)
  - [Preprocessors Support](https://nuxt.com/docs/4.x/getting-started/styling#preprocessors-support)
- [Using PostCSS](https://nuxt.com/docs/4.x/getting-started/styling#using-postcss)
- [Leveraging Layouts For Multiple Styles](https://nuxt.com/docs/4.x/getting-started/styling#leveraging-layouts-for-multiple-styles)
- [Third Party Libraries And Modules](https://nuxt.com/docs/4.x/getting-started/styling#third-party-libraries-and-modules)
  - [Easily Load Webfonts](https://nuxt.com/docs/4.x/getting-started/styling#easily-load-webfonts)
- [Advanced](https://nuxt.com/docs/4.x/getting-started/styling#advanced)
  - [Transitions](https://nuxt.com/docs/4.x/getting-started/styling#transitions)
  - [Font Advanced Optimization](https://nuxt.com/docs/4.x/getting-started/styling#font-advanced-optimization)
  - [LCP Advanced Optimizations](https://nuxt.com/docs/4.x/getting-started/styling#lcp-advanced-optimizations)

Community

- [Become a Sponsor](https://go.nuxt.com/sponsor)
- [Master Nuxt](https://masteringnuxt.com/nuxt3)
- [Nuxt Certification](https://certification.nuxt.com/)

[Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on Bluesky](https://go.nuxt.com/bluesky) [Nuxt on X](https://go.nuxt.com/x) [Nuxt on GitHub](https://go.nuxt.com/github)

Black Friday Week

Get 60% off and bonuses on all Official Nuxt Certifications.

MenuOn this page

### Community

- [Nuxters](https://nuxters.nuxt.com/)
- [Team](https://nuxt.com/team)
- [Design Kit](https://nuxt.com/design-kit)

### Explore

- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Showcase](https://nuxt.com/showcase)

### Enterprise

- [Support](https://nuxt.com/enterprise/support)
- [Agencies](https://nuxt.com/enterprise/agencies)
- [Sponsors](https://nuxt.com/enterprise/sponsors)

Subscribe to our newsletter

Stay updated on new releases and features, guides, and community updates.

Subscribe

[Nuxt on X](https://go.nuxt.com/x) [Nuxt on BlueSky](https://go.nuxt.com/bluesky) [Nuxt on LinkedIn](https://go.nuxt.com/linkedin) [Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on GitHub](https://go.nuxt.com/github)

Copyright © 2016-2025 Nuxt - [MIT License](https://go.nuxt.com/license)