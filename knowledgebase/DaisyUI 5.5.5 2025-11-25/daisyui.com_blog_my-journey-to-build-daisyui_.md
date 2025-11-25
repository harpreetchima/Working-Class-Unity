---
url: "https://daisyui.com/blog/my-journey-to-build-daisyui/"
title: "My Journey to build daisyUI: Why Tailwind CSS was not enough? — daisyUI Tailwind CSS Component UI Library"
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

![My Journey to build daisyUI: Why Tailwind CSS was not enough?](https://img.daisyui.com/images/blog/my-journey-to-build-daisyui.webp)

Published 2 years agoby Pouya Saadeghi

# My Journey to build daisyUI: Why Tailwind CSS was not enough?

In search of the most efficient way to style a website there's a lot to explore. In this post I'll share my journey to build daisyUI, a component library on top of Tailwind CSS.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#the-early-days) The early days

It was about 15 years ago when I first started getting into web development and from the beginning, CSS was my favorite part. I loved the ability to style the same content in different ways. I was amazed by the power of CSS and how it could change the whole look and feel of a website with a few lines of code.

Back then there was no build tool and no CSS processing. People where writing inline CSS for small projects and if it was a lot of styles they would use a vanilla `.css` file.

I was also using vanilla CSS. Starting from the top of the page, adding class names to elements and then writing the styles for those classes. It was a lot of fun and I was enjoying it. However as the projects got bigger and bigger, it used to go out of control and hard to maintain. At that time, No one was talking about [CSS architecture](https://daisyui.com/pages/what-is-tailwind-css-used-for/) and how to write [maintainable CSS](https://daisyui.com/pages/what-is-tailwind-css-used-for/). So I was just doing my best to keep it clean and organized.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#experimenting-css-libraries) experimenting CSS libraries

As CSS evolved and people started to use it more and more, they realized that there are some common patterns that they use over and over again. So they started to create methods and libraries to make it easier to maintain CSS.

Early CSS libraries started to show up.Blueprint, 960.gs, YUI, Bootstrap, Foundation, etc.

- Libraries like [Blueprint](http://www.blueprintcss.org/) were providing default styles for HTML tags and also a few class names to set colors or positions for the elements. Nowadays we call them utility classes.
- Libraries like [960.gs](https://960.gs/) were only providing a grid system to make it easier to create layouts.
- Libraries like [Bootstrap](https://getbootstrap.com/) or [YUI](https://yuilibrary.com/) were providing a set of components like buttons, tabs, etc.

These libraries got very popular and people started to use them more and more. However, I had a hard time customizing them. I was not able to change the look and feel of the components without overriding a lot of styles. I used each of them for a few projects but I was always looking for a better solution for my next project.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#trying-to-fix-the-problem-with-css-design-methodologies) Trying to fix the problem with CSS design methodologies

I couldn't find a CSS library that I could use for all my projects because I wanted a new design for each project. So instead of relying on a CSS library, I was writing vanilla CSS for each project but every time I was trying to make it more maintainable and easier to customize.

There were CSS writing methodologies like OOCSS, ACSS, SMACSS and BEM to solve this problem but I was always finding myself jumping from one methodology to another or mixing them together. Some strict rules of these methodologies were not working for me and I was always trying to find a better way to write CSS.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#perfecting-the-style-with-css-preprocessors) Perfecting the style with CSS preprocessors

[Less](http://lesscss.org/) and [Sass](https://sass-lang.com/) were the first CSS preprocessors that I used. With them finally I was able to overengineer my CSS in order to make it more maintainable. I tried many structures to organize my CSS but at the end when projects got bigger, it was always hard to maintain.

I was basically copy/pasting my Sass files from one project to another and then overriding them to change the colors and design details. I had some failed attempts to create a single Sass architecture that I could use for all my projects where each project could have its own design. But I was never able to make it work. It was too complicated to organize a multi-purpose CSS architecture to cover all my needs across all my projects.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#back-to-bootstrap-prison) Back to Bootstrap prison

Then I tried to build a customizable theme on top of Bootstrap where I could change the design details without overriding a lot of styles. That project didn't go well either. It is so hard to time consuming to fight bootstrap's default styles and make it look the way you want.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#tailwind-to-the-rescue) Tailwind to the rescue

Tailwind CSS got my attention when I saw it for the first time. It was a [CSS framework](https://daisyui.com/pages/tailwind-css/) that was not providing any default styles. It was only providing utility classes to make it easier to style your website. It was a great idea to make things easier to customize. I started using it on a few projects and I was happy with it.

The idea of having utility classes for every CSS rule was great. Finally I had a fully customizable CSS framework that I could use for all my projects. I was able to use the same HTML for multiple projects and then change a few colors and design details to make it look different.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#but-utility-only-was-slow-and-bloated) But utility-only was slow and bloated

However like everyone else, I was not happy with the amount of class names I had to use for every element on every page and on every project. At one point I was having my ideal class names for each component (Button, input, card, etc) and I was copying the exact same class names to every project. It was a lot of work and I was not happy with it.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#utility-first-not-utility-only) Utility-first, not utility-only

I needed a faster and easier way. All I needed to customize for a button was color, border-radius and size. I didn't want to write all the class names for the button every time. I wanted to simply have a `.btn` class as easy as Bootstrap but with the ability to customize it.

I started to make a CSS file and put all my default styles in `@apply` directives. This way I could simply use a `btn` class and then customize it using `bg-*` utility class. It was a lot better. My Code became cleaner and I was able to develop my projects faster!

Now I had the power of customization using Tailwind CSS utility classes and the ease of use of Bootstrap. I was happy with it and I was using it for all my projects.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#birth-of-daisyui) Birth of daisyUI

I was using my `@apply` collection on all my projects and it was working great. I decided to publish it as a library so other people could use it too. I had to find a name for it. I was looking for a short name that could represent the idea of growth and prettiness. Finally I went with 🌼 daisyUI. It's short, easy to remember and the name was available on NPM.

I started to work on it as a side project. I used Tailwind CSS' plugin API to make it as easy as possible to use. For version 0.x I started with a few components and then I added more and more components to it. Finally it was ready to be used on real projects. With version 1.0, I got a lot of feedback from the community and I was able to improve it with every release. Every time I was adding a new component, I was trying to make it as customizable as possible. I was trying to make it [easy to use](https://daisyui.com/pages/easy-component-library/) and easy to customize.

I extended the Tailwind CSS color names to make all daisyUI components themeable by default. I wanted to make it as easy as possible to change the colors of the components because for me, personally it was important that websites made with daisyUI look different from each other. This was possible thanks to Tailwind CSS API and I was able to make it work. Now, daisyUI not only provides a set of components but also provides themes that apply colors to all components.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#if-it-can-be-styled-with-css-only-it-should-be-styled-with-css-only) If it can be styled with CSS only, it should be styled with CSS only

It's important for me that daisyUI as a CSS [component library](https://daisyui.com/pages/css-library-for-html/) doesn't depend on any JavaScript library. I provided styles for the components that could be interactive using CSS-only but things like datepickers, etc. are not part of daisyUI. I wanted to keep it as simple as possible and let people use their favorite JavaScript libraries for the interactive components. Gladly there are a lot of headless JavaScript libraries out there and most of them are compatible with daisyUI. You can simply use daisyUI class names or color CSS variables to style them.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#best-of-both-worlds) Best of both worlds

I'm happy with daisyUI and I'm using it for all my projects. It allows me to create a new design for each project and it makes it easy to customize the look and feel of the components.

I see daisyUI as the best of both worlds. Component classes for speed and utility classes for customization.

Now I have the customization power of Tailwind CSS and the development speed of Bootstrap. I have never been able to do this with any other CSS library. I'm glad that I was able to find a solution that works for me and I'm happy to share it with the community.

## [Link to heading](https://daisyui.com/blog/my-journey-to-build-daisyui/\#thank-you) Thank you!

I want to thank everyone who has used daisyUI and provided feedback. I'm glad that I was able to help you with your projects. I'm also thankful to everyone who has contributed to daisyUI and everyone who donated to support the project.

There are currently 130 contributors on [GitHub](https://github.com/saadeghi/daisyui) and 60 financial supporters on [Open Collective](https://opencollective.com/daisyui). daisyUI wouldn't be possible without your support. Thank you all! 💚

Tags: [Reviews](https://daisyui.com/blog/tag/reviews)

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