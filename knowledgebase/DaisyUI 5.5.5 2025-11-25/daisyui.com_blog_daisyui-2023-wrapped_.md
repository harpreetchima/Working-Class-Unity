---
url: "https://daisyui.com/blog/daisyui-2023-wrapped/"
title: "daisyUI 2023 Wrapped — daisyUI Tailwind CSS Component UI Library"
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

![daisyUI 2023 Wrapped](https://img.daisyui.com/images/blog/daisyui-is-the-best-component-library.webp)

Published last yearby Pouya Saadeghi

# daisyUI 2023 Wrapped

It's the end of the year and this year was amazing! For Front-end development, For CSS, For Tailwind and for daisyUI! Let's take a look at what we've accomplished in 2023.

It's been 3 years since the first commit of daisyUI. At first, it was just a small side project to help me with my own freelance projects. But it quickly grew into something bigger than I could have ever imagined. It's been an exciting journey and 2023 in particular was a special year for daisyUI. Let's see all the good things that happened in 2023.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#2023-in-numbers-) 2023 in numbers 📊

- In 2023 we released `190` versions of daisyUI from `2.46.1` to `4.4.20` fixing more than `1000` bugs and adding many new features.
- daisyUI is now used in more than `156,000` open source projects according to GitHub's dependency graph (`340%` increase compared to 2022).
- In the past year, daisyUI GitHub repo went from `16,000` stars to `27,000` stars and it's now in GitHub's top 500 repositories.
- daisyUI NPM package recently reached the all time record of `260,000` downloads per week. It was downloaded `7.7` million times in 2023 (a `330%` increase compared to 2022).

![daisyUI NPM installs](https://img.daisyui.com/images/blog/daisyui-is-the-most-popular-tailwindcss-component-library.webp)daisyUI NPM installs

- daisyUI CDN file now has more than `3 million hits per week` from jsDelivr only (we can estimate a similar number from other CDNs in addition to jsDelivr).
- In the beginning of 2023, daisyUI had `89` contributors. Now in December, it has `162` contributors from many different countries around the world.

![daisyUI contributors around the world](https://img.daisyui.com/images/blog/daisyui-contributors.webp)daisyUI contributors around the world

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#performance-improvements) performance improvements

- daisyUI 4 reduced the Node package install size from 14.0MB to 3.83MB (including all dependencies).
- daisyUI 4 reduced Node module dependencies by 92% and node\_modules footprint by 73%.

|  | daisyUI 3 | daisyUI 4 |
| --- | --- | --- |
| NPM install size | 14.0MB | 3.83MB |
| NPM bundle size | 434kB | 238.7kB |
| NPM bundle size (gzip) | 74.7kB | 38.8kB |
| Total Node module dependencies | 86 | 7 |

- We moved from HSL color system to OKLCH wide-gamut color system. This granted us access to a wider color gamut and allows us to use more colors in daisyUI themes.
- daisyUI 4 also moved from directional CSS to logical CSS properties which makes it easier to support RTL languages in runtime, without the need to generate a separate CSS file using additional dependencies.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#new-features) New features

In 2023, we added 7 new components, 3 new themes and more than 100 utility classes to daisyUI. We also rewrote the style for many components to make them more accessible and easier to customize. You can check the details in the [changelog](https://daisyui.com/docs/changelog/).

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#accessibility) Accessibility

All color pairs used on daisyUI built-in themes now tested for contrast ratio and they all pass the WCAG test. This test runs automatically every time there's a change in themes or theme functions to make sure we provide accessible color combinations by default.

![daisyUI colors are accessible](https://img.daisyui.com/images/blog/daisyui-colors-are-accessible.webp)

In 2023 all daisyUI theme colors were adjusted to improve contrast ratio while providing a better visual experience. As long as you use the correct color pairs to build your UI (for example using `bg-primary` and `text-primary-content` together), you can be sure that your UI is accessible by default, on all themes.

In 2023 daisyUI adapted to new HTML and CSS standards such as the new `<dialog>` element and CSS features like `:has()` and `color-mix()`. We also improved existing components to make sure they are accessible by default. We now use HTML `<dialog>` element for daisyUI modal and we use HTML `<details>` for submenus and dropdown examples.

daisyUI uses native HTML elements and attributes on all components to provide an accessible experience by default. We are not using `<div>` and `<span>` with `role` attributes to emulate native HTML elements. This means accessibility is not an afterthought in daisyUI. It's included by default if use the native HTML elements.

This is a huge advantage for daisyUI and it's one of the reasons why daisyUI is accessible. For example, [daisyUI `toggle`](https://daisyui.com/components/toggle/) is a native HTML checkbox and it's accessible by default. But if a [component library](https://daisyui.com/pages/css-library-for-html/) uses `<div>` tags to to emulate native HTML elements they would need `role="checkbox"`, `aria-checked` and `aria-labelledby` attributes to make it accessible for screen readers and keyboard navigation. They would also need custom, framework specific JS to make it functional. This is not the case for daisyUI because we use semantic HTML elements and attributes for daisyUI components.

In 2023 we improved the code example for each component to make sure they are accessible for keyboard navigation and screen readers.

> For content-specific code examples, we don't provide a generic content in the code example.
>
> For example `<img>` tags do not have an `alt` attribute because the `alt` attribute must be provided by you, based on your page's content.
>
> This is also true for `aria-label` and `aria-labelledby` attributes.
>
> If we provide a dummy text for that, it's likely for you to ship that code to production without changing it.
>
> That's not okay so it's better if you receive an error from your code editor or linter to remind you to add the correct `alt` or `aria-label` attribute when needed.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#a-cli-for-installing-tailwind-css-and-daisyui) A CLI for installing Tailwind CSS and daisyUI

In 2023 we released [npm init daisyui](https://daisyui.com/blog/npm-init-daisyui/) which is a CLI tool for installing Tailwind CSS, PostCSS and daisyUI in a single command.

[Give the repo a star on GitHub](https://github.com/daisyui/create-daisyui/) if you like it!

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#daisyui-has-a-logo-now) daisyUI has a logo now!

Some people say it's a fried egg 🍳 and avocado 🥑, some people say it's a flower 🌼But we all agree that it's cute and simple.

daisyUI logo

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#website-redesign) Website redesign

daisyUI website was redesigned in 2023. The new homepage visualizes the most important features of daisyUI and how it can help your development workflow using Tailwind CSS. We're using SvelteKit 2 and Vite 5 for the website now and it's such a joy to work with.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#docs-improvements) Docs improvements

We added 6 new translations to the website in 2023. daisyUI docs are now available in 16 languages which makes it accessible to a wider audience.

![daisyUI translations](https://img.daisyui.com/images/blog/daisyui-translations.webp)

This year we launched [daisyUI Store](https://daisyui.com/store/), [daisyUI Resources](https://daisyui.com/resources/videos/) and [daisyUI Blog](https://daisyui.com/blog/).

We added new pages including [daisyUI Roadmap](https://daisyui.com/docs/roadmap/), [daisyUI utilities docs](https://daisyui.com/docs/utilities/) and also a [FAQ page](https://daisyui.com/docs/faq/).

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#newsletter) Newsletter

We have a newsletter now! You can subscribe using the form on the footer of the website to get the latest news about daisyUI.

You can also subscribe to the RSS feed for [daisyUI Blog](https://daisyui.com/blog/rss.xml) or [daisyUI Store](https://daisyui.com/store/rss.xml) to get the latest updates.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#growing-community) growing community

There are projects built on top of daisyUI like [React daisyUI](https://github.com/daisyui/react-daisyui) which is a React component library on top of daisyUI. There is also [Mary UI](https://github.com/robsontenorio/mary) for Laravel and Livewire. I'm really excited to see more projects like these in 2024. If you're working on a project built on top of daisyUI, let me know so I can add it the footer of daisyUI website.

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#thank-you-daisyui-contributors-) Thank you daisyUI contributors 💚

In the beginning of 2023, daisyUI had `89` contributors. Now it has `162` contributors. I'm grateful for all contributions and support from the community. daisyUI is a community project that wouldn't be possible without the help of all contributors.

![daisyUI contributors on GitHub](https://contrib.rocks/image?repo=saadeghi/daisyui&columns=15&anon=1&max=300)daisyUI contributors on GitHub

daisyUI now has 77 financial contributors who help us keep the project alive by donating on Open Collective. Thank you all for your support!

![daisyUI organization backers](https://opencollective.com/daisyui/organizations.svg?button=false&width=745&avatarHeight=50)![daisyUI backers](https://opencollective.com/daisyui/backers.svg?button=false&width=745&avatarHeight=50)daisyUI sponsors on Open Collective

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#whats-next) What's next?

We're going to fix bugs and improve daisyUI continuously. There are lots of cool things coming to CSS and Tailwind CSS in 2024 and we're going to use them all in daisyUI. There will be new components, new themes and new features in 2024 in addition to many improvements to the existing components. I'm so excited for 2024 and I hope you are too!

To contribute to daisyUI, you can [start by reading the contribution guide](https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md), and to report a bug or request a feature, you can [open a new issue on GitHub](https://github.com/saadeghi/daisyui/issues).

If you have any questions, you can ask them on [daisyUI discussions](https://github.com/saadeghi/daisyui/discussions).

## [Link to heading](https://daisyui.com/blog/daisyui-2023-wrapped/\#happy-new-year-) Happy new year! 🎉

2023 was a great year for daisyUI and I'm so excited about how much we can accomplish in 2024. I hope you have a great year too and I wish you all the best in 2024.

🎁 As a new year gift, use the coupon code `YEAR2024` to get 40% off on all daisyUI products on [daisyUI Store](https://daisyui.com/store/).

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