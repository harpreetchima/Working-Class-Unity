---
url: "https://daisyui.com/pages/tailwind-css-without-node/"
title: "Tailwind CSS without Node"
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

# Tailwind CSS without Node

How to use Tailwind CSS without Node.js and NPM

Tailwind CSS runs in many setups. Most guides assume a Node toolchain. That works well for Vite and PostCSS projects. But adding Node just to build CSS can be heavy when your app runs on Rails, Go, Rust, PHP, or another server side environment.

### [Link to heading](https://daisyui.com/pages/tailwind-css-without-node/\#common-ways-to-use-tailwind-css) Common ways to use Tailwind CSS

- Vite plugin — a fast dev server experience. It needs Node and Vite config.
- PostCSS plugin — integrates into many build pipelines; still requires Node tooling.
- CDN file — great for quick prototypes; it loads prebuilt styles and has limitations for production.

Each method has tradeoffs. Vite and PostCSS give full feature parity. They need Node. The CDN needs no build step; it limits customization and content scanning for unused classes.

### [Link to heading](https://daisyui.com/pages/tailwind-css-without-node/\#why-adding-node-for-tailwind-can-be-inefficient) Why adding Node for Tailwind can be inefficient

If your project already runs on Rails, Go, Rust, or PHP, adding Node just to run Tailwind creates extra complexity. You must install Node on developer machines and CI. You must keep Node deps up to date. That adds maintenance and build steps that are unrelated to your primary stack.

For simple sites or server side apps, you want a small, dependable way to produce CSS without introducing a separate toolchain.

### [Link to heading](https://daisyui.com/pages/tailwind-css-without-node/\#tailwind-css-standalone-executable) Tailwind CSS standalone executable

Tailwind provides a single-file standalone CLI. It runs without Node. You download the executable for your OS and run it to process CSS. It does the same content scanning and plugin support as the Node version.

1. Get the executable. Follow Tailwind's guide or run one of these commands for your OS.

Terminal

```
# Run the corresponding command for your OS

# Linux
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64-musl
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64-musl

# MacOS
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64

# Windows
curl -sLo tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make it executable on Linux and macOS:

Terminal

```
chmod +x tailwindcss
```

2. Create an input CSS file with Tailwind directives. Address your HTML and templates in the `--content` or `--scan` option when building.

input.css

```
@import "tailwindcss";
```

3. Build the CSS. Use `--watch` during development and omit it for CI.

Terminal

```
./tailwindcss -i input.css -o output.css --watch
# Windows
tailwindcss.exe -i input.css -o output.css --watch
```

### [Link to heading](https://daisyui.com/pages/tailwind-css-without-node/\#use-daisyui-with-the-standalone-cli) Use daisyUI with the standalone CLI

daisyUI ships a small ESM bundle you can use with the standalone CLI. Download the bundle and add it as a plugin in your `input.css` file.

1. Download daisyUI bundle files next to the Tailwind executable:

Terminal

```
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.mjs
curl -sLO https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.mjs
```

2. Update `input.css` to load Tailwind and daisyUI as plugins.

input.css

```
@import "tailwindcss";

@source not "./tailwindcss";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";

/* Optional: load custom theme bundle */
@plugin "./daisyui-theme.mjs" {
  /* custom theme settings */
}
```

3. Build as shown earlier. The output CSS will include daisyUI utilities and components.

### [Link to heading](https://daisyui.com/pages/tailwind-css-without-node/\#update) Update:

daisyUI now has a fast way to automate the setup of Tailwind CSS standalone with daisyUI for various environments. It's a shell script that installs everything you need in one step.

The command below,

- Downloads latest version of Tailwind CSS Standalone executable file for your OS, [from GitHub](https://github.com/tailwindlabs/tailwindcss/releases/latest)
- Downloads latest version of daisyUI bundle file [from GitHub](https://github.com/saadeghi/daisyui/releases/latest)
- Creates `input.css` file with Tailwind CSS and daisyUI
- Generates `output.css` file for the first time

**Linux** or **MacOS**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast))

Terminal

```
cd myapp/static/css && curl -sL daisyui.com/fast | bash
```

**Windows**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast.ps1))

PowerShell

```
cd myapp/static/css && powershell -c "irm daisyui.com/fast.ps1 | iex"
```

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