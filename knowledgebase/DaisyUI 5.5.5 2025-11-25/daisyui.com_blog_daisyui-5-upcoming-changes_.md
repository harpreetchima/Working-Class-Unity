---
url: "https://daisyui.com/blog/daisyui-5-upcoming-changes/"
title: "What to expect from daisyUI 5? — daisyUI Tailwind CSS Component UI Library"
---

[BLUEPRINT\\
\\
The Official daisyUI Code Generator  MCP Server](https://daisyui.com/blueprint/)

[daisyUI](https://daisyui.com/)

5.5.5

- [Changelog](https://daisyui.com/docs/changelog/)
- [v5 release notes](https://daisyui.com/docs/v5/)
- [v5 upgrade guide](https://daisyui.com/docs/upgrade/)
- [Version 4.x](https://v4.daisyui.com/)
- [Version 3.x](https://v3.daisyui.com/)
- [Version 2.x](https://v2.daisyui.com/)
- [Version 1.x](https://v1.daisyui.com/)
- [Roadmap](https://daisyui.com/docs/roadmap/)

Search… `⌘K`

[Components](https://daisyui.com/components/)

[Templates](https://daisyui.com/store/)

[Figma](https://daisyui.com/store/daisyui-figma-library/)

[MCP](https://daisyui.com/blueprint/)

- Theme
- light

- dark

- cupcake

- bumblebee

- emerald

- corporate

- synthwave

- retro

- cyberpunk

- valentine

- halloween

- garden

- forest

- aqua

- lofi

- pastel

- fantasy

- wireframe

- black

- luxury

- dracula

- cmyk

- autumn

- business

- acid

- lemonade

- night

- coffee

- winter

- dim

- nord

- sunset

- caramellatte

- abyss

- silk

- [Make your theme!](https://daisyui.com/theme-generator/)

- ENEnglish
- ARالعربية
- BNবাংলা
- CACatalà
- CSČeština
- DEDeutsch
- ESEspañol
- FAفارسی
- FRFrançais
- HUMagyar
- IDBahasa Indonesia
- ITItaliano
- JA日本語
- KO한국어
- MSBahasa Melayu
- PLPolski
- PTPortuguês
- RORomână
- RUРусский
- UKУкраїнська
- VITiếng Việt
- ZH简体中文
- ZH繁體中文

[**daisyUI blog**](https://daisyui.com/blog)

Updates, ideas and resources

- Tags
- [Reviews](https://daisyui.com/blog/tag/reviews)
- [Guides](https://daisyui.com/blog/tag/guides)
- [Insights](https://daisyui.com/blog/tag/insights)
- [News](https://daisyui.com/blog/tag/news)
- [Templates](https://daisyui.com/blog/tag/templates)
- [Component Libraries](https://daisyui.com/blog/tag/component-libraries)
- [Frameworks](https://daisyui.com/blog/tag/frameworks)

![What to expect from daisyUI 5?](https://img.daisyui.com/images/blog/daisyui-5-flowers.webp)

Published last yearby Pouya Saadeghi

# What to expect from daisyUI 5?

An overview of of daisyUI 5 upcoming changes and features

daisyUI 5 is in development and it will be released after Tailwind CSS 4 is released. Here's what you can expect from daisyUI 5 and how it will be different from the current version.

# Compatibility with Tailwind CSS 4

Tailwind CSS 4 is in development and I can't wait for it to be released. You can read the [official announcement](https://tailwindcss.com/blog/tailwindcss-v4-alpha) on the Tailwind CSS blog, but here are some of the highlights:

- New engine which is faster, smaller and more efficient
- Tailwind CSS 4 will use modern CSS features like `@layer`, `@property`, `color-mix()`, `@starting-style` , anchor positioning, container queries, and more
- Automatic content detection: No need for listing all your markup files in a config file. Tailwind CSS will automatically detect the class names in all your markup files and generate the necessary CSS.
- No need for `tailwind.config.js` file. Everything will be done directly in the CSS file.
- Tailwind CSS 4 will use CSS variables for colors and all other tokens.

Read more at [Tailwind CSS blog](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

# Upcoming Tailwind CSS 4 plugins API

Plugins API for Tailwind CSS 4 is still in development. Currently it's not possible to use daisyUI with the alpha version of Tailwind CSS 4, but as soon as the new API is released, we will update daisyUI to be compatible with it.

Plugins in Tailwind CSS 3 and below were expected to be CSS-in-JS. But it is expected to be pure CSS files in Tailwind CSS 4.

![tailwind css 4 plugins api syntax tweet](https://img.daisyui.com/images/blog/tailwind-css-4-plugins-api-syntax-tweet.webp)

This will make it easier to use daisyUI as a plugin in your Tailwind CSS project, and it will also make it easier for us to maintain and update daisyUI since it will be a pure CSS file, without any build process to convert CSS to CSS-in-JS.

> With the current alpha version of Tailwind CSS 4, technically you can import the whole CSS file of daisyUI in your project but it won't act as a Tailwind CSS plugin.
>
> Which means it will include all unused class names in your production CSS file.
>
> And you won't be able to use Tailwind CSS responsive prefixes like `lg:` with daisyUI class names.
>
> Because of this, it's important to use daisyUI as a Tailwind CSS plugin.
>
> So let's wait for the new Tailwind CSS 4 plugins API to be released.

# No JS config

![Tailwind CSS 4 config](https://img.daisyui.com/images/blog/rip-tailwind-config-js.webp)

If Tailwind CSS 4 is going to allow importing CSS files as plugins, we won't need a JS config file for daisyUI. Everything will be done in the CSS file.

You will be able to include the daisyUI CSS file as a Tailwind CSS plugin using the CSS `@import` rule.

# Pure CSS files for each component and each theme

Previously, daisyUI was using a build process to convert the CSS files to CSS-in-JS. But with the upcoming Tailwind CSS 4 plugins API, we will be able to include pure CSS files for each component and each theme in the daisyUI source code.This will make it possible to use specific components of daisyUI in your project without including the whole CSS file.

# Native CSS nesting

Native CSS nesting is now supported in all modern browsers.

Instead of using Post CSS nesting, we will use native CSS nesting in the upcoming version of daisyUI. This will reduce the size of the CSS files dramatically.

# No forced color format conversion

Colors in Tailwind CSS 4 will be defined as CSS variables and Tailwind CSS will use CSS `color-mix()` function to change the opacity of the colors.

This means we won't need to convert the colors to a specific format to be used in Tailwind CSS.

daisyUI built-in themes will keep using OKLCH color format as it is currently the most ergonomic P3 color format, but you can use any color format for your custom themes and we won't convert them to OKLCH in the production CSS file just to be compatible with Tailwind CSS opacity utilities.

A challenge for daisyUI 5 will be to generate the optional colors (like `*-content`) as before because:

- We're not going to process the color values using JS in the build time if we're not going to use pure CSS files
- CSS `color-contrast()` function is [not supported in browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast) yet
- CSS `color-contrast()` function is [not supported in Lightning CSS](https://github.com/parcel-bundler/lightningcss/issues/99) (The CSS parser used by Tailwind CSS 4) yet.

# Less (or zero?) dependencies

daisyUI currently uses 4 dependencies:

- `postcss-js` to convert CSS to CSS-in-JS because Tailwind CSS 3 and below only accept CSS-in-JS syntax as plugins
- `culori` to convert colors
- `picocolors` for console colors
- `css-selector-tokenizer` for adding prefixes

If daisyUI package is going to include pure CSS files only, we can safely remove all these dependencies.I'm not still sure how we can add prefixes to the daisyUI class names if we're not going to process the styles using Post CSS, But I will find a way.

# Container queries for responsive components

Container queries are now supported in all modern browsers. We will use them for components that need to be responsive based on their container width by default.

# CSS Popover API and anchor positioning

![daisyUI 5 dropdown popover API](https://img.daisyui.com/images/blog/daisyui-5-dropdown-popover.webp)

We've been using CSS `:focus` or `<details>` element for dropdowns in daisyUI as they were the best no-JS options we had at the time.

The problem with them is, without using JS there's no way to close a dropdown by both clicking outside OR clicking the button.

You had to choose one.

But now we have a new option: Native HTML [popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is now [supported in all modern browsers](https://caniuse.com/mdn-api_htmlelement_popover) and we will use it for dropdowns in daisyUI.

There's also [CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) which can help about the positioning of the dropdowns, preventing them from going out of the viewport.

# Design improvements

Most components will have small design improvements. Not going to break your current design, but will make them all look better.

# New components

There will be new components in daisyUI 5. I will announce them when they are ready.

# Themes

daisyUI currently has 32 built-in themes. Probably we will have even more built-in themes in daisyUI 5.

And each of the existing themes will be a simple CSS file that you can include in your project (or you can include them all using one import rule). It feels good when everything is simple a CSS file, right?

# Smaller CSS size

![Reduce Tailwind CSS file size](https://img.daisyui.com/images/blog/css-file-size-daisyui-5.webp)

This year a lot of new CSS features got available in all modern browsers. And with the new Tailwind CSS 4 changes we will be able to make daisyUI styles simpler and the CSS files smaller.

# Customizable sizing for components

We will use CSS variables for the size value of component. This will make it easier to customize the size of all components in your project by changing a few CSS variables, instead of adding utility classes to each component.

This feature will give you more control over the size of the components and will make it even easier to have full control over the design of your project.

# Backward compatibility

daisyUI 5 will be compatible with Tailwind CSS 4 and all modern browsers.

daisyUI 4 will still be available for those who can't upgrade to Tailwind CSS 4 or if they want to support old browsers.

We will make sure that the upgrade process from daisyUI 4 to daisyUI 5 is as smooth as possible, and we will provide a migration guide.

# Conclusion

daisyUI 5 will be a major update, it will adapt to the new features of Tailwind CSS 4 and the new CSS features that are now available in all modern browsers. I'm excited for the release of Tailwind CSS 4 and I will make sure that daisyUI 5 is going to be ready as soon as possible after the release of Tailwind CSS 4.

Subscribe to the daisyUI newsletter to get notified about the updates.

Tags: [News](https://daisyui.com/blog/tag/news)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI swag!](https://img.daisyui.com/images/store/banner/cicd-hat.webp)\\
\\
daisyUI swag!\\
\\
Hats and more](https://swag.daisyui.com/collections/hats)

[daisyUI](https://daisyui.com/)

Free Component library

For utility first CSS frameworks

[GitHub](https://github.com/saadeghi/daisyui)[Discord](https://daisyui.com/discord/)[OpenCollective](https://opencollective.com/daisyui)[NPM](https://www.npmjs.com/package/daisyui)[X](https://x.com/daisyui_)[Unpkg CDN](https://unpkg.com/browse/daisyui/)[JSdeliver CDN](https://www.jsdelivr.com/package/npm/daisyui)[StackBlitz](https://daisyui.com/stackblitz/)[CodePen](https://daisyui.com/codepen/)[Tailwind Play](https://daisyui.com/tailwindplay/)

[daisyUI Logo and brand](https://daisyui.com/brand/) [License](https://github.com/saadeghi/daisyui/blob/master/LICENSE) [FAQ](https://daisyui.com/docs/faq/) [Roadmap](https://daisyui.com/docs/roadmap/) [Changelog](https://daisyui.com/docs/changelog/) [Contributing](https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md) [llms.txt](https://daisyui.com/llms.txt)

pages [How to install](https://daisyui.com/docs/install/) [How to use components](https://daisyui.com/docs/use/) [How to customize](https://daisyui.com/docs/customize/) [How to use themes](https://daisyui.com/docs/themes/) [Color system](https://daisyui.com/docs/colors/) [Config](https://daisyui.com/docs/config/) [Resources](https://daisyui.com/resources/) [Blog](https://daisyui.com/blog/) [Store](https://daisyui.com/store/) [daisyUI Figma Library](https://daisyui.com/store/daisyui-figma-library/)

Frameworks [Angular Component Library](https://daisyui.com/angular-component-library/) [Astro Component Library](https://daisyui.com/astro-component-library/) [Django Component Library](https://daisyui.com/django-component-library/) [HTMX Component Library](https://daisyui.com/htmx-component-library/) [Laravel Component Library](https://daisyui.com/laravel-component-library/) [Nextjs Component Library](https://daisyui.com/nextjs-component-library/) [Nuxt Component Library](https://daisyui.com/nuxt-component-library/) [Rails Component Library](https://daisyui.com/rails-component-library/) [React Component Library](https://daisyui.com/react-component-library/) [Svelte Component Library](https://daisyui.com/svelte-component-library/) [Vue Component Library](https://daisyui.com/vue-component-library/)

Compare libraries [MUI vs daisyUI](https://daisyui.com/compare/mui-vs-daisyui/) [shadcn/ui vs daisyUI](https://daisyui.com/compare/shadcn-vs-daisyui/) [Bootstrap vs daisyUI](https://daisyui.com/compare/bootstrap-vs-daisyui/) [Flowbite vs daisyUI](https://daisyui.com/compare/flowbite-vs-daisyui/) [Radix vs daisyUI](https://daisyui.com/compare/radix-vs-daisyui/) [Bulma vs daisyUI](https://daisyui.com/compare/bulma-vs-daisyui/) [NuxtUI vs daisyUI](https://daisyui.com/compare/nuxtui-vs-daisyui/) [HeroUI vs daisyUI](https://daisyui.com/compare/heroui-vs-daisyui/) [Preline UI vs daisyUI](https://daisyui.com/compare/preline-vs-daisyui/) [Chakra UI vs daisyUI](https://daisyui.com/compare/chakra-vs-daisyui/)

related projects [Theme Change](https://github.com/saadeghi/theme-change) [MaryUI (Laravel)](https://mary-ui.com/) [Feliz.DaisyUI (F#)](https://github.com/Dzoukr/Feliz.DaisyUI) [Phcurado (Phoenix)](https://github.com/phcurado/daisy_ui_components) [Laravel Starter Kit](https://github.com/aalaap/laravel-livewire-daisyui-starter-kit) [Tailscan extension](https://tailscan.com/?ref=daisyui)

[![Pouya Saadeghi](https://img.daisyui.com/images/profile/people/pouya-saadeghi.webp)\\
\\
Created by\\
\\
Pouya Saadeghi](https://x.com/saadeghi)

Get the daisyUI updates and news

Subscribe

We don't share your email address with anyone

[Please upgrade your browser](https://www.wikihow.com/Update-Your-Browser)

[daisyUI](https://daisyui.com/)

5.5.5

- [Changelog](https://daisyui.com/docs/changelog/)
- [v5 release notes](https://daisyui.com/docs/v5/)
- [v5 upgrade guide](https://daisyui.com/docs/upgrade/)
- [Version 4.x](https://v4.daisyui.com/)
- [Version 3.x](https://v3.daisyui.com/)
- [Version 2.x](https://v2.daisyui.com/)
- [Version 1.x](https://v1.daisyui.com/)
- [Roadmap](https://daisyui.com/docs/roadmap/)

- Docs

- [Introduction](https://daisyui.com/docs/intro/)
- [Install](https://daisyui.com/docs/install/)
- [CDN](https://daisyui.com/docs/cdn/)
- [Use](https://daisyui.com/docs/use/)
- [Code editor & LLM setupupdated](https://daisyui.com/docs/editor/)
- [Customize](https://daisyui.com/docs/customize/)
- [Config](https://daisyui.com/docs/config/)
- [Colors](https://daisyui.com/docs/colors/)
- [Themes](https://daisyui.com/docs/themes/)
- [Base style](https://daisyui.com/docs/base/)
- [Utilities & variables](https://daisyui.com/docs/utilities/)
- [Layout & Typography](https://daisyui.com/docs/layout-and-typography/)

- Components

- ## Actions


  - [Button](https://daisyui.com/components/button/)
  - [Dropdown](https://daisyui.com/components/dropdown/)
  - [FAB / Speed Dialnew](https://daisyui.com/components/fab/)
  - [Modal](https://daisyui.com/components/modal/)
  - [Swap](https://daisyui.com/components/swap/)
  - [Theme Controller](https://daisyui.com/components/theme-controller/)
- ## Data display


  - [Accordion](https://daisyui.com/components/accordion/)
  - [Avatar](https://daisyui.com/components/avatar/)
  - [Badge](https://daisyui.com/components/badge/)
  - [Card](https://daisyui.com/components/card/)
  - [Carousel](https://daisyui.com/components/carousel/)
  - [Chat bubble](https://daisyui.com/components/chat/)
  - [Collapse](https://daisyui.com/components/collapse/)
  - [Countdownupdated](https://daisyui.com/components/countdown/)
  - [Diff](https://daisyui.com/components/diff/)
  - [Hover 3D cardnew](https://daisyui.com/components/hover-3d/)
  - [Hover Gallerynew](https://daisyui.com/components/hover-gallery/)
  - [Kbd](https://daisyui.com/components/kbd/)
  - [List](https://daisyui.com/components/list/)
  - [Stat](https://daisyui.com/components/stat/)
  - [Status](https://daisyui.com/components/status/)
  - [Table](https://daisyui.com/components/table/)
  - [Text Rotatenew](https://daisyui.com/components/text-rotate/)
  - [Timeline](https://daisyui.com/components/timeline/)
- ## Navigation


  - [Breadcrumbs](https://daisyui.com/components/breadcrumbs/)
  - [Dock](https://daisyui.com/components/dock/)
  - [Link](https://daisyui.com/components/link/)
  - [Menu](https://daisyui.com/components/menu/)
  - [Navbar](https://daisyui.com/components/navbar/)
  - [Pagination](https://daisyui.com/components/pagination/)
  - [Steps](https://daisyui.com/components/steps/)
  - [Tab](https://daisyui.com/components/tab/)
- ## Feedback


  - [Alert](https://daisyui.com/components/alert/)
  - [Loading](https://daisyui.com/components/loading/)
  - [Progress](https://daisyui.com/components/progress/)
  - [Radial progress](https://daisyui.com/components/radial-progress/)
  - [Skeletonupdated](https://daisyui.com/components/skeleton/)
  - [Toast](https://daisyui.com/components/toast/)
  - [Tooltip](https://daisyui.com/components/tooltip/)
- ## Data input


  - [Calendar](https://daisyui.com/components/calendar/)
  - [Checkbox](https://daisyui.com/components/checkbox/)
  - [Fieldset](https://daisyui.com/components/fieldset/)
  - [File Input](https://daisyui.com/components/file-input/)
  - [Filter](https://daisyui.com/components/filter/)
  - [Label](https://daisyui.com/components/label/)
  - [Radio](https://daisyui.com/components/radio/)
  - [Range](https://daisyui.com/components/range/)
  - [Rating](https://daisyui.com/components/rating/)
  - [Selectupdated](https://daisyui.com/components/select/)
  - [Input field](https://daisyui.com/components/input/)
  - [Textarea](https://daisyui.com/components/textarea/)
  - [Toggle](https://daisyui.com/components/toggle/)
  - [Validator](https://daisyui.com/components/validator/)
- ## Layout


  - [Divider](https://daisyui.com/components/divider/)
  - [Drawer sidebarupdated](https://daisyui.com/components/drawer/)
  - [Footer](https://daisyui.com/components/footer/)
  - [Hero](https://daisyui.com/components/hero/)
  - [Indicator](https://daisyui.com/components/indicator/)
  - [Join (group items)](https://daisyui.com/components/join/)
  - [Mask](https://daisyui.com/components/mask/)
  - [Stack](https://daisyui.com/components/stack/)
- ## Mockup


  - [Browser](https://daisyui.com/components/mockup-browser/)
  - [Code](https://daisyui.com/components/mockup-code/)
  - [Phone](https://daisyui.com/components/mockup-phone/)
  - [Window](https://daisyui.com/components/mockup-window/)

- [Theme Generator](https://daisyui.com/theme-generator/)
- [Template Storeupdated](https://daisyui.com/store/)
- [Blog](https://daisyui.com/blog/)
- [Resources](https://daisyui.com/resources/videos/)
- [Playground](https://daisyui.com/tailwindplay/)
- [T-shirts](https://swag.daisyui.com/)
- [BLUEPRINT\\
\\
Official MCPnew](https://daisyui.com/blueprint/)
- [llms.txt](https://daisyui.com/llms.txt)

- [GitHub](https://github.com/saadeghi/daisyui)
- [X.com](https://x.com/daisyui_)
- [Discord](https://daisyui.com/discord/)
- [Donate](https://github.com/saadeghi/daisyui?sponsor=1)

close