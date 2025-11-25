---
url: "https://daisyui.com/blog/how-to-update-daisyui-4/"
title: "How to update daisyUI from version 3 to version 4 — daisyUI Tailwind CSS Component UI Library"
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

![How to update daisyUI from version 3 to version 4](https://img.daisyui.com/images/blog/daisyui-4-update-guide.webp)

Published 2 years agoby Pouya Saadeghi

# How to update daisyUI from version 3 to version 4

This upgrade guide helps you easily update daisyUI to version 4 without breaking anything.

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#daisyui-4-breaking-changes) daisyUI 4 breaking changes

Since the launch of daisyUI 3 in July 2023, my focus has been on pushing the boundaries and enhancing the daisyUI experience. New features in CSS opened doors to new possibilities for daisyUI and now with the release of daisyUI 4, we can enjoy all the new features and improvements.

This latest release marks a huge leap forward in design, functionality, accessibility, and efficiency of daisyUI. For a detailed overview of the improvements, explore the [daisyUI changelogs page](https://daisyui.com/docs/changelog/).
But the most important thing for upgrading an existing project to a new major version is breaking changes. Here in this guide, we go step by step to update daisyUI from version 3 to version 4.

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#1-update-daisyui-package) 1\. Update daisyUI package

First, you need to update the daisyUI package to the latest version. You can do this by running the following command in your terminal:

```
npm i -D daisyui@latest
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#2-daisyui-color-variables) 2\. daisyUI color variables

daisyUI 4 uses [the new OKLCH color system](https://oklch.com/) under the hood. That means all color CSS variables (like `--p`, `--s`, etc) now have OKLCH values instead of HSL values.
( [Read more about OKLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) )

- If you use daisyUI colors with Tailwind CSS class names (like `bg-primary`) you don't have to do anything.
- If you use the CSS variables directly in your project (like `.myclass{ color: hsl(var(--p)) }` ) you need to use them with oklch function (like `.myclass{ color: oklch(var(--p)) }`) now.

Here's the primary color of light theme in daisyUI 3 and 4:

Before

After

```
/* the values were HSL */
--p: 251.47 100% 56%;
```

```
/* the values are OKLCH */
--p: 0.4912 0.3096 275.75;
```

So for using daisyUI color CSS variables directly inside your project, change the color functions from `hsl()` to `oklch()` like this:

Before

After

```
/* Using hsl() function */
color: hsl(var(--p));
```

```
/* Using oklch() function */
color: oklch(var(--p));
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#3-all--focus-colors-are-removed) 3\. All `*-focus` colors are removed

All `*-focus` colors like `primary-focus` color in daisyUI 3 did was using the same `bg-primary` color with a darker shade.
Now thanks to the new `color-mix()` CSS function we do the same dynamically and it gives us more control on the the colors. For example take a look at this amazing class name. It mixes primary color with black to make it 7% darker:

```
bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]
                   │              │       │
                   │              │       │
                   │              │       │
                   │              │       ╰── black with 7% opacity = 7% darker
                   │              │
                   │              ╰── primary color
                   │
                   ╰── OKLAB gives a better result
```

So if you used `*-focus` colors in your project and you want the exact same result, you can use the new `color-mix()` function in arbitrary class names like this:

Before

After

```
class="bg-primary-focus"
class="bg-secondary-focus"
class="bg-accent-focus"
class="bg-neutral-focus"
```

```
class="bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--s)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--a)),black_7%)]"
class="bg-[color-mix(in_oklab,oklch(var(--n)),black_7%)]"
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#4-extending-themes) 4\. Extending themes

There's a change in property names in `daisyui/src/theming/themes.js` file.
If you're customizing built-in daisyUI themes, change it:

Before

After

```
daisyui: {
  themes: [\
    {\
      light: {\
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],\
        primary: "blue",\
      },\
    },\
  ],
},
```

```
daisyui: {
  themes: [\
    {\
      light: {\
        ...require("daisyui/src/theming/themes")["light"],\
        primary: "blue",\
      },\
    },\
  ],
},
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#5-rtl) 5\. RTL

daisyUI 4 components use [logical CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) instead of directional rules (`mr-*`, `pl-*`, etc).
All components now support LTR/RTL in runtime without any config or plugin. You just need `<html dir=rtl>` and everything will be RTL on runtime.
You can safely remove `rtl: true` config and `tailwindcss-flip` plugin from your project (If you're using logical Tailwind CSS utility classes and you don't need the plugin for your own directional Tailwind CSS classes)

Before

After

```
module.exports = {
  //...
  plugins: [require("daisyui"), require("tailwindcss-flip")],
  daisyui: {
    rtl: true,
  },
}
```

```
module.exports = {
  //...
  plugins: [require("daisyui")],
  daisyui: {},
}
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#6-tab) 6\. Tab

- these modifier classes for `tab` are removed:
  - `tab-lifted`
  - `tab-bordered`
  - `tab-lg`
  - `tab-md`
  - `tab-sm`
  - `tab-xs`
- Use the following modifier classes for the parent `tabs` class instead:
  - `tabs-lifted`
  - `tabs-bordered`
  - `tabs-lg`
  - `tabs-md`
  - `tabs-sm`
  - `tabs-xs`

Before

After

```
<div class="tabs">
  <a class="tab tab-lg tab-lifted">Tab 1</a>
  <a class="tab tab-lg tab-lifted tab-active">Tab 2</a>
  <a class="tab tab-lg tab-lifted">Tab 3</a>
  <a class="tab tab-lg tab-lifted">Tab 4</a>
</div>
```

```
<div class="tabs tabs-lg tabs-lifted">
  <a class="tab">Tab 1</a>
  <a class="tab tab-active">Tab 2</a>
  <a class="tab">Tab 3</a>
  <a class="tab">Tab 4</a>
</div>
```

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#7-button) 7\. Button

Buttons are not uppercase by default anymore. You can add `uppercase` class if you want to make them uppercase.

## [Link to heading](https://daisyui.com/blog/how-to-update-daisyui-4/\#conclusion) Conclusion

That's it! You can now enjoy the new daisyUI 4 [features and improvements](https://daisyui.com/docs/changelog/) in your project.
If you have questions specific about the upgrade, ask it in [this GitHub discussion](https://github.com/saadeghi/daisyui/discussions/2507) and if you found a bug, report it in [daisyUI GitHub issues](https://github.com/saadeghi/daisyui/issues)

I'm excited to see all the amazing things you'll build with daisyUI 4.

Tags: [Guides](https://daisyui.com/blog/tag/guides)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI swag!](https://img.daisyui.com/images/store/banner/tshirt.webp)\\
\\
daisyUI swag!\\
\\
T-shirts and more](https://swag.daisyui.com/collections/shirts)

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