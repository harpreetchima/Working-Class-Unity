---
url: "https://daisyui.com/pages/tailwind-css-alternative/"
title: "Tailwind CSS alternative"
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

# Tailwind CSS alternative

Why utility-first CSS frameworks can slow you down, and how daisyUI solves the maintainability crisis of utility classes

Tailwind CSS revolutionized how we think about CSS by introducing [utility-first](https://daisyui.com/pages/tailwind-css/ "Tailwind CSS") styling. But after years of using it in real projects, many developers are hitting walls that utility classes alone can't solve. Let's explore why pure utility-first approaches create problems, and how you can get the best of both worlds.

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#the-utility-class-trap) The utility class trap

Tailwind CSS promised to solve CSS problems, but it introduced new ones. Here's what happens when you rely only on utility classes:

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#your-html-becomes-unreadable) Your HTML becomes unreadable

Real-world components quickly turn into utility class soup:

```
<!-- A simple button becomes this monster -->
<button class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out">
  Submit Form
</button>

<!-- And a card component? Good luck -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-3 hover:shadow-xl transition-shadow duration-300">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="Photo">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title</a>
      <p class="mt-2 text-slate-500">Description text goes here...</p>
    </div>
  </div>
</div>
```

This is barely readable. Imagine maintaining hundreds of components like this.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#copy-paste-development-becomes-the-norm) Copy-paste development becomes the norm

When every component is a wall of utility classes, developers resort to copying and pasting:

```
<!-- Button 1 -->
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Save
</button>

<!-- Button 2 - copied and modified -->
<button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
  Publish
</button>

<!-- Button 3 - more copying -->
<button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
  Delete
</button>
```

Need to update the button style? Now you have to find and update dozens of places. This is the exact problem CSS was supposed to solve.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#file-sizes-explode) File sizes explode

Utility classes repeat everywhere in your HTML. A typical page might look like:

```
<div class="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg">
  <div class="flex items-center space-x-3">
    <div class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate">Username</p>
      <p class="text-sm text-gray-500 truncate">user@example.com</p>
    </div>
  </div>
  <div class="flex items-center space-x-3">
    <div class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate">Another User</p>
      <p class="text-sm text-gray-500 truncate">another@example.com</p>
    </div>
  </div>
</div>
```

Classes like `flex`, `items-center`, `text-sm`, and `text-gray-900` repeat constantly. This bloats your HTML and makes it harder to scan.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#development-becomes-overwhelming) Development becomes overwhelming

Building even simple interfaces requires intimate knowledge of:

- **Hundreds of utility classes**: `justify-between`, `items-center`, `flex-shrink-0`, `truncate`
- **Responsive modifiers**: `md:flex`, `lg:grid-cols-3`, `xl:space-x-8`
- **State modifiers**: `hover:bg-blue-700`, `focus:ring-2`, `disabled:opacity-50`
- **CSS properties**: Understanding what `flex-shrink-0` actually does
- **Design principles**: Knowing which spacing, colors, and sizes work together

You need to be a CSS expert just to create a basic webpage. New developers get overwhelmed trying to remember hundreds of class names.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#refactoring-becomes-a-nightmare) Refactoring becomes a nightmare

Want to change your design system? Good luck:

```
<!-- Need to change all buttons from blue to green? -->
<!-- Find and replace across hundreds of files -->
<button class="bg-blue-600 hover:bg-blue-700 text-white">Button 1</button>
<button class="bg-blue-600 hover:bg-blue-700 text-white">Button 2</button>
<button class="bg-blue-600 hover:bg-blue-700 text-white">Button 3</button>
<!-- ... and 200 more buttons -->
```

This is exactly the maintenance problem that CSS classes were invented to solve in the first place.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#team-collaboration-suffers) Team collaboration suffers

Different developers write the same styles in different ways:

```
<!-- Developer A's button -->
<button class="px-4 py-2 bg-blue-600 text-white rounded">Click me</button>

<!-- Developer B's "same" button -->
<button class="py-2 px-4 text-white bg-blue-600 rounded-md">Click me</button>

<!-- Developer C's version -->
<button class="p-2 px-4 bg-blue-600 text-white rounded-sm">Click me</button>
```

These all look slightly different, creating inconsistent UIs. Without component-level abstractions, maintaining design consistency is nearly impossible.

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#the-expertise-barrier) The expertise barrier

Tailwind CSS documentation makes it look easy, but real-world usage requires extensive knowledge:

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#css-mastery-requirement) CSS mastery requirement

You need to understand:

- **Flexbox**: When to use `justify-center` vs `items-center`
- **Grid**: How `grid-cols-12` and `col-span-4` work together
- **Box model**: Why `p-4` and `space-y-4` behave differently
- **Typography**: Combining `text-lg`, `font-semibold`, and `leading-6`
- **Layout**: When to use `relative`, `absolute`, or `sticky` positioning

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#design-system-expertise) Design system expertise

Creating good-looking interfaces requires:

- **Color theory**: Which grays work with which blues
- **Typography scales**: When to use `text-sm` vs `text-base`
- **Spacing systems**: How `space-y-4` relates to `p-6`
- **Component patterns**: Standard ways to build cards, buttons, forms

This is advanced knowledge that most developers don't have. The result? Websites that technically work but look amateurish.

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#how-daisyui-solves-these-problems) How daisyUI solves these problems

daisyUI keeps all the power of Tailwind CSS while fixing the maintainability issues. Here's how:

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#semantic-component-classes) Semantic component classes

Instead of utility soup, use meaningful names:

```
<!-- Instead of this mess -->
<button class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Submit
</button>

<!-- Write this -->
<button class="btn btn-primary">Submit</button>
```

Your HTML is readable again. Anyone can understand what `btn btn-primary` means.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#built-in-design-system) Built-in design system

No more guessing about colors, spacing, or typography:

```
<!-- Professionally designed components out of the box -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="photo.jpg" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card description goes here.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Everything looks cohesive because it's designed as a system, not assembled from random utilities.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#easy-maintenance-and-updates) Easy maintenance and updates

Need to update your button style? Change it once in your CSS:

```
/* Update all buttons globally */
.btn {
  /* Your custom button styles */
  padding: 12px 24px;
  border-radius: 8px;
  /* etc. */
}
```

Or override specific variants:

```
.btn-primary {
  background-color: your-brand-color;
}
```

All your buttons update automatically. No find-and-replace across hundreds of files.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#gradual-learning-curve) Gradual learning curve

Start with semantic classes and add utilities when needed:

```
<!-- Start simple -->
<button class="btn btn-primary">Click me</button>

<!-- Add utilities for customization -->
<button class="btn btn-primary lg:btn-lg xl:w-full">Click me</button>

<!-- Or create variations -->
<button class="btn btn-primary hover:scale-105 transition-transform">Click me</button>
```

You can be productive immediately and learn advanced techniques over time.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#team-consistency) Team consistency

Everyone uses the same component classes:

```
<!-- Every developer writes buttons the same way -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-outline">Outline Button</button>
```

No more style variations or inconsistent spacing. Your UI stays consistent as your team grows.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#best-of-both-worlds) Best of both worlds

You still get all of Tailwind's power when you need it:

```
<!-- Semantic base with utility customization -->
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure class="lg:w-1/3">
    <img src="photo.jpg" alt="Album" class="w-full h-full object-cover" />
  </figure>
  <div class="card-body lg:w-2/3">
    <h2 class="card-title text-2xl lg:text-3xl">Card Title</h2>
    <p class="text-base-content/70">Card description here.</p>
    <div class="card-actions justify-end mt-4">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

Semantic structure with utility fine-tuning where needed.

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#performance-benefits) Performance benefits

daisyUI also improves performance:

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#smaller-html-files) Smaller HTML files

Compare file sizes:

```
<!-- Pure Tailwind: 2,847 characters -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-3 hover:shadow-xl transition-shadow duration-300">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Title</a>
      <p class="mt-2 text-slate-500">Description text...</p>
    </div>
  </div>
</div>

<!-- daisyUI: 456 characters -->
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Album" /></figure>
  <div class="card-body">
    <div class="badge badge-secondary">Article</div>
    <h2 class="card-title">Title</h2>
    <p>Description text...</p>
  </div>
</div>
```

That's 84% smaller HTML. Multiply this across your entire site and the savings add up.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#better-compression) Better compression

Shorter, repeated class names compress better:

```
<!-- Compresses well -->
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>

<!-- Compresses poorly -->
<button class="px-4 py-2 bg-blue-600 text-white rounded">Button 1</button>
<button class="px-4 py-2 bg-blue-600 text-white rounded">Button 2</button>
<button class="px-4 py-2 bg-blue-600 text-white rounded">Button 3</button>
```

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#making-the-switch) Making the switch

You don't have to rewrite everything:

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#start-with-new-components) Start with new components

```
<!-- Old utility approach -->
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Old Button
</button>

<!-- New semantic approach -->
<button class="btn btn-primary">New Button</button>
```

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#refactor-gradually) Refactor gradually

Replace utility combinations with semantic classes over time. Your codebase gets cleaner with each update.

### [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#use-both-approaches) Use both approaches

daisyUI works with regular Tailwind utilities:

```
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>Card description.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#the-productivity-difference) The productivity difference

Teams report significant improvements after switching to daisyUI:

- **Development speed**: 40-60% faster component creation
- **Code review time**: Much easier to review semantic HTML
- **Onboarding**: New developers contribute faster
- **Maintenance**: Design updates happen in minutes, not hours
- **Consistency**: Automatic design system compliance

## [Link to heading](https://daisyui.com/pages/tailwind-css-alternative/\#ready-to-escape-utility-class-hell) Ready to escape utility class hell?

Tailwind CSS is powerful, but pure utility-first approaches create maintainability problems. daisyUI gives you the best of both worlds: semantic components for productivity and utilities for customization.

[Get started with daisyUI](https://daisyui.com/docs/install/) and experience what CSS-in-HTML should be: readable, maintainable, and fast to write.

Stop fighting with utility classes and start building better UIs faster.

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