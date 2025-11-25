---
url: "https://daisyui.com/pages/scalable-component-library/"
title: "Scalable Component Library"
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

# Scalable Component Library

Why heavy JavaScript component libraries fail at scale and how CSS-only solutions provide better performance, maintainability, and framework flexibility for large projects

Building large-scale applications presents unique challenges that most component libraries aren't designed to handle. What works for small projects often becomes a liability when you're managing dozens of pages, multiple teams, and diverse technology stacks. Let's explore why heavy JavaScript libraries crumble under scale and how embracing simplicity creates sustainable solutions.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#the-scale-problem-with-javascript-component-libraries) The scale problem with JavaScript component libraries

Small projects hide the problems that surface when applications grow. Modern JavaScript component libraries like Radix UI and React Aria promise better developer experience, but they introduce significant overhead when building at scale. Each [component library](https://daisyui.com/pages/css-library-for-html/ "CSS Library for HTML") brings massive dependencies and complexity that compounds as your application grows.

Even minimal libraries like Radix UI require substantial JavaScript bundles. React Aria components need complex state management, focus handling, and accessibility implementations that add layers of abstraction. When you're building enterprise applications with hundreds of components and multiple teams, these abstractions become liabilities rather than benefits.

The dependency chains run deep. Modern libraries create intricate webs of packages, each introducing potential security vulnerabilities, version conflicts, and maintenance overhead. A single broken dependency can break your entire application, and keeping everything updated becomes a full-time job.

JavaScript component libraries also create framework lock-in that becomes problematic at scale. Large applications often need different technologies for different purposes - React for complex dashboards, Vue for customer-facing interfaces, vanilla JavaScript for landing pages. When your component library only works with one framework, you're forced to make suboptimal technology choices or maintain multiple design systems.

```
// Radix UI components only work in React
import { Button } from '@radix-ui/themes';
import { Card } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';

function UserForm() {
  return (
    <Card>
      <TextField placeholder="Email" />
      <Button>Submit</Button>
    </Card>
  );
}
```

This framework dependency creates problems when you need technology diversity. Enterprise applications often require different frameworks for different parts - React for admin dashboards, Vue for customer portals, vanilla JavaScript for landing pages. When your component library only works with one framework, you're forced into suboptimal architectural decisions or maintaining multiple design systems.

Modern JavaScript component libraries also add significant build complexity. Even with tools like Vite and Turbopack, the processing required for JavaScript components, CSS-in-JS systems, and complex dependency resolution creates friction in development workflows. Build tools need to understand framework-specific patterns, handle dynamic imports, and process styling systems that change at runtime.

The runtime overhead compounds these problems. Every component render involves virtual DOM diffing, JavaScript execution, style injection, and event handler binding. Complex component trees accumulate memory over time, and JavaScript-driven animations struggle to maintain smooth performance across different devices and browsers.

Security becomes a major concern with large dependency trees. Every package in your component library's dependency chain represents a potential attack vector. Security audits frequently reveal vulnerabilities that require immediate attention, and keeping everything patched becomes an ongoing maintenance burden that scales with your dependency count.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#why-the-platform-is-the-answer) Why the platform is the answer

Modern web standards have evolved to handle most UI needs without heavy JavaScript libraries. CSS has become incredibly powerful, with features that eliminate the need for JavaScript in many cases:

```
/* Complex layouts without JavaScript */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Interactive states without JavaScript */
.dropdown:focus-within .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Smooth animations without JavaScript */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Dark mode without JavaScript */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

/* Container queries for responsive components */
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

These features handle most common UI patterns without requiring JavaScript execution.

Semantic HTML elements provide built-in accessibility and functionality that works perfectly across browsers, screen readers, and mobile devices. Native form validation, disclosure widgets, and date pickers require no JavaScript while providing better user experiences than custom implementations.

```
<!-- Native form validation -->
<form>
  <input type="email" required aria-label="Email address">
  <input type="password" minlength="8" required aria-label="Password">
  <button type="submit">Sign In</button>
</form>

<!-- Native disclosure widget -->
<details>
  <summary>Show advanced options</summary>
  <div>
    <label>
      <input type="checkbox"> Enable notifications
    </label>
  </div>
</details>
```

Platform-native solutions deliver better performance through zero JavaScript execution cost, aggressive CSS caching, and smaller bundle sizes. Browsers parse CSS faster than JavaScript and compress it more efficiently, leading to faster page loads and smoother interactions.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#the-framework-agnostic-imperative) The framework-agnostic imperative

Large-scale applications rarely use a single technology stack. Framework agnosticism becomes crucial when you're building complex systems that need different technologies for different purposes. Real enterprise applications typically involve:

```
┌─────────────────┐    ┌─────────────────┐     ┌─────────────────┐
│   Landing Page  │    │ Admin Dashboard │     │  Mobile App     │
│   (Svelte)      │    │ (Rails)         │     │  (Capacitor)    │
└─────────────────┘    └─────────────────┘     └─────────────────┘
         │                       │                       │
         ╰────────────────╮      │      ╭────────────────╯
                        Same Design System
         ╭────────────────╯      │      ╰────────────────╮
         │                       │                       │
┌─────────────────┐    ┌─────────────────┐     ┌─────────────────┐
│  E-commerce     │    │  Documentation  │     │  Analytics      │
│  (Wordpress)    │    │  (Vue)          │     │  (Go)           │
└─────────────────┘    └─────────────────┘     └─────────────────┘
```

Each part might use different frameworks based on team expertise, performance requirements, third-party integrations, and legacy constraints. Framework-agnostic styling ensures consistency across this technology diversity. The same CSS classes work everywhere, ensuring visual consistency across your entire ecosystem:

```
<!-- Next.js landing page -->
<button className="btn btn-primary">Get Started</button>

<!-- React admin dashboard -->
<button className="btn btn-primary">Save Changes</button>

<!-- Vue.js analytics -->
<button class="btn btn-primary">Export Data</button>

<!-- Svelte documentation -->
<button class="btn btn-primary">View Docs</button>
```

Framework-agnostic tools also reduce hiring constraints and increase team flexibility. You can hire the best developers regardless of framework expertise, and developers can move between projects easily since core UI knowledge applies everywhere. Technology stacks evolve over time, and framework-agnostic CSS classes survive these migrations:

```
<!-- 2020: jQuery -->
<button class="btn btn-primary" onclick="handleClick()">Click Me</button>

<!-- 2022: React -->
<button className="btn btn-primary" onClick={handleClick}>Click Me</button>

<!-- 2024: Svelte -->
<button class="btn btn-primary" on:click={handleClick}>Click Me</button>

<!-- 2026: Web Components -->
<button class="btn btn-primary" @click="handleClick">Click Me</button>
```

Framework-agnostic CSS classes survive technology migrations, protecting your design system investment.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#how-daisyui-solves-scale-problems) How daisyUI solves scale problems

daisyUI addresses every major scaling challenge while maintaining developer productivity. The entire library adds minimal dependencies to your project - just daisyUI and Tailwind CSS. No deep dependency trees, no security vulnerabilities from dozens of packages, no version conflicts. Your `node_modules` stays small and your security risks will be zero because neither Tailwind CSS nor daisyUI have any dependencies!

Every component is pure CSS, working perfectly with keyboard navigation, screen readers, and touch devices without any JavaScript:

```
<!-- Interactive dropdown without JavaScript -->
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Options</label>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li><a href="/profile">Profile</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
</div>

<!-- Modal dialog without JavaScript -->
<input type="checkbox" id="modal-1" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Confirmation</h3>
    <p class="py-4">Are you sure you want to proceed?</p>
    <div class="modal-action">
      <label for="modal-1" class="btn">Cancel</label>
      <label for="modal-1" class="btn btn-primary">Confirm</label>
    </div>
  </div>
</div>
```

The same markup works in any environment, providing universal framework compatibility:

```
<!-- Plain HTML -->
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Universal Card</h2>
    <p>Works everywhere!</p>
  </div>
</div>
```

```
// React
function ProductCard({ title, description }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
```

```
<!-- Vue -->
<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
```

```
<!-- Svelte -->
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
```

Your component knowledge transfers completely between frameworks and projects. daisyUI delivers superior performance through zero runtime JavaScript, optimal CSS caching, and smaller bundle sizes. Performance benefits compound as your application grows with faster page loads, smoother interactions, and better mobile experiences.

daisyUI provides a complete design system with consistent spacing, colors, and typography. Professional-looking interfaces work out of the box, with themes that can instantly change your entire site's appearance. When you need custom styling, daisyUI doesn't get in the way:

```
/* Customize existing components */
.btn-custom {
  @apply btn;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

/* Create new component variants */
.card-premium {
  @apply card bg-gradient-to-br from-purple-400 to-purple-600 text-white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

You get the full power of Tailwind CSS for customization while keeping the semantic foundation.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#real-world-scale-benefits) Real-world scale benefits

Organizations using daisyUI report significant improvements across development velocity, maintenance overhead, and team flexibility. Teams build interfaces faster because there's no framework learning curve - standard HTML and CSS knowledge applies directly. Semantic class names reduce decision fatigue, and [rapid prototyping](https://daisyui.com/pages/ui-library-for-hackaton/ "UI library for hackathons") becomes possible without wrestling with complex component APIs.

Long-term maintenance becomes manageable since CSS doesn't have breaking changes like JavaScript libraries. Design changes apply everywhere automatically, and [CSS-only components](https://daisyui.com/pages/best-component-library-for-2026/ "Component Library for 2026") have fewer failure modes to test. New developers contribute immediately without needing framework-specific training.

Performance improvements come from smaller bundle sizes and better Core Web Vitals scores. Teams gain flexibility since any developer can contribute to UI work, developers move between projects easily, and framework choices don't constrain UI decisions. Design systems survive technology migrations, protecting long-term investments.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#making-the-transition-at-scale) Making the transition at scale

Migrating large applications requires strategy. Start with new features and components, letting existing code continue working while new development gets the benefits immediately. Create migration guidelines that help teams gradually replace components consistently. Track improvements in bundle size, performance metrics, and development velocity to justify the migration effort and guide prioritization.

Plan for coexistence during the transition period:

```
/* Allow both old and new styles to coexist */
.legacy-styles {
  /* Scope old component library styles */
}

/* daisyUI styles apply globally */
.btn {
  /* New semantic styles */
}
```

This prevents conflicts during the transition period.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#the-scalability-advantage) The scalability advantage

daisyUI provides sustainable scaling advantages through linear complexity growth. Unlike JavaScript libraries that create exponential complexity, adding components doesn't degrade performance, CSS compilation stays fast regardless of project size, and building the 100th component feels like building the first.

CSS-based solutions outlast framework trends because they're built on web standards that evolve slowly and carefully. Framework independence means survival through technology migrations and team changes, with no risk of library abandonment or breaking changes.

Large organizations need reliable, stable solutions. daisyUI provides security compliance through minimal dependencies, predictable behavior under load, integration flexibility with any technology stack, and stable long-term maintenance costs.

## [Link to heading](https://daisyui.com/pages/scalable-component-library/\#ready-to-scale-the-right-way) Ready to scale the right way?

Large-scale applications demand different approaches than small projects. Heavy JavaScript component libraries create more problems than they solve when you're building for scale.

daisyUI offers a better path: CSS-only components that perform well, integrate everywhere, and maintain consistently across your entire technology ecosystem.

Whether you're building a multi-team enterprise application or planning for long-term growth, daisyUI provides the foundation for sustainable scaling.

[Start building scalable UIs with daisyUI](https://daisyui.com/docs/install/) and experience what component libraries should be: simple, fast, and built to last.

Stop fighting framework complexity and start building for the long term.

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