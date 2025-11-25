---
url: "https://daisyui.com/blog/nexus-dashboard-template/"
title: "Nexus 2.2 dashboard template is here! — daisyUI Tailwind CSS Component UI Library"
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

![Nexus 2.2 dashboard template is here!](https://img.daisyui.com/images/blog/nexus-dashboard-template-thumbnail.webp)

Published 6 months agoby Denish Navadiya

# Nexus 2.2 dashboard template is here!

A modern, flexible admin and client dashboard template built with daisyUI. Clean, responsive, and easy to customize and integrate.

Building an admin dashboard isn’t easy. Developers need responsive designs that work across frameworks. Buyers want something simple, flexible, and easy to customize. It’s hard to get all of that right. We solve those problems.

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#nexus-22-is-here-admin-and-client-dashboard-template) Nexus 2.2 is here! Admin and client dashboard template

- You can purchase the Nexus Dashboard from the [daisyUI store](https://daisyui.com/store/244268/) and follow installations steps to set it up.
- If you already purchased, get the new version for free from [https://app.lemonsqueezy.com/my-orders](https://app.lemonsqueezy.com/my-orders)
- To upgrade to a higher plan, email us at [help@daisyui.com](mailto:help@daisyui.com) to receive a discount code.

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#dev-story) Dev Story

It started with React and Next.js, building out the basics like an ecommerce dashboard, file manager, and a few core components. Then came the HTML version, more ecommerce pages, and chart support.
SvelteKit followed with a CRM dashboard, cleaner forms, and improved components.

Now with v2.2, it's moving into Gen AI with new pages, a fresh dashboard, and a built-in calendar.

Each update includes the latest dependencies and fixes for any bugs we've found or that others have reported. Check out the official [Nexus docs](https://nexus.daisyui.com/docs/) for the changelog and upcoming plans.

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#installation) Installation

Nexus supports all Node.js versions above 18 and has been thoroughly tested. It also works seamlessly with all package managers (npm, yarn, bun), so you can use your preferred one.

Install project dependencies:

```
npm install
```

Start the development server (This will run your project in development mode):

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build:

```
npm run preview
```

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#customization) Customization

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#changing-the-logo) Changing the logo

To change the logo, replace the following images with your own.

- `/public/images/logo/logo-light.png`
- `/public/images/logo/logo-dark.png`

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#customizing-daisyui-themes) Customizing daisyUI themes

`/styles/daisyui.css` contains the DaisyUI plugin and themes. You can add or modify themes and their options, including layout colors (background, sidebar, and topbar).

```
@plugin "daisyui" {
  /* daisyUI options */
}

@plugin "daisyui/theme" {
  name: "light";

  /* update: primary */
  --color-primary: #167bff;
  --color-primary-content: #ffffff;
  /* ... */

  /* update: layout */
  --layout-background: #fafbfc;
  --layout-sidebar-background: #ffffff;
  --layout-topbar-background: #ffffff;
}

/* add: new theme here */
```

We've customized some DaisyUI styles. To match Nexus exactly, copy styles/custom/components.css into your project.

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#change-the-font) Change the font

`/styles/typography.css` contains all typography-related styles. We use Google Fonts ( [**@import**](https://github.com/import) url('...')) for the font family, which you can change to your preference.

```
/* update: font family url */
@import url("https://...");

@theme {
  /* update: font family variable */
  --font-body: "DM Sans", sans-serif;

  /* update: font size */
  --text-sm: 14px;
  --text-base: 16px;

  /* add: more options related to font  */
}
```

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#customizing-the-dashboard-layout) Customizing the dashboard layout

`/styles/custom/layout.css` contains the layout CSS, where you can modify all aspects related to the admin layout, including the sidebar, topbar, rightbar, and content area.

```
:root {
  /* update: sidebar width,as you want */
  --layout-sidebar-width: 256px;
}

/* update: layout related styles ... */
```

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#customizing-styles) Customizing styles

Inside `/styles/custom/**` folder:

- `layout.css` contains the styles for the topbar, sidebar, rightbar.
- `animation.css` includes all animation keyframes and utilities. `components.css` contains minor overrides to DaisyUI components. If you don't need any overrides, you can remove this file.
- `plugins.css` handles plugin overrides, ensuring compatibility with other plugins' themes, matching Nexus and DaisyUI styles.
- `iconify.js` is the plugin for Iconify, allowing you to add additional [icon sets](https://icon-sets.iconify.design/).

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#how-to-use-style-into-your-project) How to use style into your project

_**Note:** All styles (CSS) are defined in the `styles/**` folder, so you can refer to that for styling and use them directly in your project._

Ensure that Tailwind CSS 4 and DaisyUI 5 are properly installed and functioning correctly.

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#include-a-specific-theme) Include a specific theme

If you need to use the `material` theme in your project, copy the following lines from `styles/daisyui.css` into your project.

```
@plugin "daisyui/theme" {
  name: "material";
  color-scheme: light;
  --color-primary: #167bff;
  /* ... */
}
```

You can now apply the theme by setting the `data-theme="material"` attribute on the HTML tag.

### [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#more-details) More details

For detailed information on specific topics such as dependencies, framework integration, roadmap, changelog, and more, visit official [Nexus documentation](https://nexus.daisyui.com/docs/)

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#every-project-needs-a-dashboard) Every project needs a dashboard

Nexus, built with DaisyUI, makes dashboard creation simple and efficient. It’s easy to customize, integrates smoothly, and saves you valuable time. Try it today!

We value your feedback! Share your thoughts by filling out the [feedback form](https://forms.gle/byxiWEUw6SM84AXA9)

## [Link to heading](https://daisyui.com/blog/nexus-dashboard-template/\#need-help) Need help?

Got questions or need help? Join our [Discord](https://daisyui.com/discord/) for support and troubleshooting, or just drop us an email at [help@daisyui.com](mailto:help@daisyui.com)

Tags: [Templates](https://daisyui.com/blog/tag/templates)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI mugs](https://img.daisyui.com/images/store/banner/techdebt-mug.webp)\\
\\
daisyUI mugs\\
\\
See more →](https://swag.daisyui.com/collections/mugs)

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