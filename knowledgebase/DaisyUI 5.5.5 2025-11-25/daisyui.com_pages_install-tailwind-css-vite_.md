---
url: "https://daisyui.com/pages/install-tailwind-css-vite/"
title: "Install Tailwind CSS with Vite"
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

[See all daisyUI components](https://daisyui.com/components/)

### Pages

[Scalable Component Library](https://daisyui.com/pages/scalable-component-library/)

[Tailwind Css Alternative](https://daisyui.com/pages/tailwind-css-alternative/)

[Ui Library For Hackaton](https://daisyui.com/pages/ui-library-for-hackaton/)

[Css Framework For School Project](https://daisyui.com/pages/css-framework-for-school-project/)

[Css Library For Html](https://daisyui.com/pages/css-library-for-html/)

[What Is Tailwind Css Used For](https://daisyui.com/pages/what-is-tailwind-css-used-for/)

[Easy Component Library](https://daisyui.com/pages/easy-component-library/)

[Install Tailwind Css Vite](https://daisyui.com/pages/install-tailwind-css-vite/)

[Tailwind Css](https://daisyui.com/pages/tailwind-css/)

[Minimal Css Framework](https://daisyui.com/pages/minimal-css-framework/)

[Easy Css Library](https://daisyui.com/pages/easy-css-library/)

[Best Component Library For Beginners](https://daisyui.com/pages/best-component-library-for-beginners/)

[Best Component Library For 2026](https://daisyui.com/pages/best-component-library-for-2026/)

[Tailwind Css Without Node](https://daisyui.com/pages/tailwind-css-without-node/)

Close

# Install Tailwind CSS with Vite

Step-by-step guide to set up Tailwind CSS in a Vite project, with a daisyUI card example

This Tutorial uses [Tailwind CSS 4](https://tailwindcss.com/) and [Vite 6](https://vitejs.dev/).

## [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#why-tailwind-css-and-vite) Why Tailwind CSS and Vite?

You want your site to look sharp and load fast. Tailwind CSS gives you utility classes to style anything, while Vite makes your development lightning quick. No more waiting for slow builds or wrestling with clunky CSS files. You get instant feedback and total control over your design.

Tailwind CSS works great with Vite because both are designed for speed and flexibility. Vite’s hot module replacement means you see your Tailwind changes instantly. No more waiting for a full rebuild. You can tweak your design and see the results right away.

## [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#how-to-install-tailwind-css-with-vite) How to install Tailwind CSS with Vite?

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#1-create-a-new-vite-project) 1\. Create a new Vite project

Terminal

```
npm create vite@latest ./ -- --template vanilla
```

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#2-install-tailwind-css) 2\. Install Tailwind CSS

Terminal

```
npm install tailwindcss@latest @tailwindcss/vite@latest
```

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#3-add-tailwind-to-your-vite-config) 3\. Add Tailwind to your Vite config

vite.config.js

```
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [\
    tailwindcss()\
  ],
});
```

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#4-set-up-your-css-file) 4\. Set up your CSS file

Create `src/style.css` and add:

src/style.css

```
@import "tailwindcss";
```

Remove any old styles from your project.

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#5-start-your-app) 5\. Start your app

Terminal

```
npm run dev
```

Now you can use Tailwind CSS class names in your HTML!

## [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#example-card-component-with-tailwind-css) Example: Card Component with Tailwind CSS

Here’s a card with all the bells and whistles—light and dark support, hover, focus, and active states:

```
<div class="max-w-sm rounded-lg bg-white shadow-md transition-colors dark:bg-gray-800">
  <img class="h-auto w-full rounded-t-lg object-cover" src="https://placehold.co/400x200" alt="Card image" />
  <div class="px-4 py-2">
    <h2 class="mb-2 text-xl leading-tight font-semibold tracking-tight
      text-gray-900 dark:text-white">Tailwind Card</h2>
    <p class="mb-3 leading-relaxed font-normal text-sm text-gray-700
      dark:text-gray-400">This card uses Tailwind utility classes.</p>
    <div class="flex justify-end">
      <a href="#" class="inline-flex items-center justify-center rounded-lg
        bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white
        transition-transform duration-200 ease-in-out hover:bg-blue-800
        focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:outline-none
        active:translate-y-0.25 dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus-visible:ring-blue-800"> Read more </a>
    </div>
  </div>
</div>
```

Run your app locally with:

Terminal

```
npm run dev
```

## [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#too-many-class-names-use-daisyui) Too many class names? Use daisyUI!

You might notice the card above has a long list of class names. It works, but it’s hard to read and even harder to maintain. If you want to tweak the style, you have to hunt through every class. That’s where daisyUI comes in.

daisyUI gives you ready-made component classes, so you can build beautiful UIs with fewer class names. Here’s how to add it to your project:

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#1-install-daisyui) 1\. Install daisyUI

Terminal

```
npm install daisyui@latest
```

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#2-add-daisyui-in-your-css) 2\. Add daisyUI in your CSS

Edit your `src/style.css`:

src/style.css

```
@import "tailwindcss";
@plugin "daisyui";
```

### [Link to heading](https://daisyui.com/pages/install-tailwind-css-vite/\#3-use-daisyui-classes-for-your-card) 3\. Use daisyUI classes for your card

Now you can write the same card with just a few class names:

```
<div class="card w-96">
  <figure><img src="https://placehold.co/400x200" alt="Card image" /></figure>
  <div class="card-body">
    <h2 class="card-title">daisyUI Card</h2>
    <p>This card uses daisyUI component classes.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Read more</button>
    </div>
  </div>
</div>
```

You get a clean, maintainable UI with less effort. That’s the power of daisyUI.

## daisyUI is the most popular  component library for Tailwind CSS

[How to install daisyUI?](https://daisyui.com/docs/install/) [See components](https://daisyui.com/components/)

- 39420



Stars on GitHub

- 427880



Open-source projects

- 28509925



NPM downloads


Used by engineers at

Meta Research

Alibaba

Amazon

Adobe

Google Cloud

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