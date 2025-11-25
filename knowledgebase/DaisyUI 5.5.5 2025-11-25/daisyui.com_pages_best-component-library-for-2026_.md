---
url: "https://daisyui.com/pages/best-component-library-for-2026/"
title: "Component Library for 2026"
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

# Component Library for 2026

Why 2026 is the year to ditch complex JavaScript frameworks and embrace CSS-only component libraries for faster, more maintainable web development

The web development landscape is reaching a breaking point. Modern JavaScript-heavy component libraries have created a complex ecosystem that's slowing down development, bloating applications, and making maintenance a nightmare. As we approach 2026, it's time to return to the fundamentals and embrace the power of the web platform itself.

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#the-javascript-framework-overload-problem) The JavaScript Framework Overload Problem

Over the past decade, the web development community has embraced increasingly complex JavaScript frameworks and component libraries. What started as a solution has become the problem:

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#dependency-hell) Dependency Hell

Modern JavaScript component libraries come with an overwhelming number of dependencies. A simple JS library can pull in dozens or even hundreds of packages:

```
{
  "dependencies": {
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/base": "^5.0.0-beta.8",
    "@mui/material": "^5.10.9",
    "@mui/system": "^5.10.9",
    "@mui/types": "^7.2.4",
    "@mui/utils": "^5.10.9",
    "@popperjs/core": "^2.11.6",
    "@types/react-transition-group": "^4.4.5",
    "clsx": "^1.2.1",
    "csstype": "^3.1.1",
    "prop-types": "^15.8.1",
    "react-is": "^18.2.0",
    "react-transition-group": "^4.4.5"
  }
}
```

Each dependency brings its own sub-dependencies, creating a fragile web of code that can break with any update. Security vulnerabilities in any one of these packages can compromise your entire application.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#bundle-size-bloat) Bundle Size Bloat

All these dependencies add up. A typical React + Material-UI application can easily exceed 1MB of JavaScript just for the [component library](https://daisyui.com/pages/css-library-for-html/ "CSS Library for HTML"):

- **React + ReactDOM**: ~140KB gzipped
- **Material-UI core**: ~350KB gzipped
- **Emotion styling engine**: ~50KB gzipped
- **Various utilities and dependencies**: ~200KB gzipped

That's over 740KB before you've written a single line of application code. Users on slower connections wait longer, and your Core Web Vitals suffer.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#build-time-complexity) Build Time Complexity

JavaScript-heavy frameworks require complex build processes:

```
# Typical modern build pipeline
npm run build:css
npm run build:js
npm run optimize:images
npm run bundle:analyze
npm run test:unit
npm run test:e2e
npm run build:prod

# Total build time: 3-8 minutes for a medium-sized app
```

Development builds are slow, production builds are slower, and debugging build issues eats into your productivity. Hot reloading breaks, sourcemaps get corrupted, and you spend more time fighting tools than building features.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#framework-lock-in) Framework Lock-in

Component libraries tied to specific frameworks create vendor lock-in:

```
// Material-UI (React only)
import { Button, Card, TextField } from '@mui/material';

function MyComponent() {
  return (
    <Card>
      <TextField label="Email" variant="outlined" />
      <Button variant="contained" color="primary">Submit</Button>
    </Card>
  );
}
```

Want to migrate to Vue, Svelte, or try a new framework? You'll need to rewrite every component. Your UI knowledge and markup become worthless outside that specific ecosystem.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#runtime-performance-issues) Runtime Performance Issues

JavaScript component libraries add runtime overhead:

- **Virtual DOM diffing**: Extra computation on every render
- **JavaScript execution**: Components must be parsed, compiled, and executed
- **Memory overhead**: Each component instance consumes memory
- **Bundle parsing**: Large JavaScript bundles block the main thread

The result? Janky scrolling, delayed interactions, and poor performance on mobile devices.

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#why-2026-is-the-year-of-simplicity) Why 2026 is the Year of Simplicity

Several trends are converging to make 2026 the perfect time to embrace simpler, CSS-only component libraries:

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#css-has-matured) CSS Has Matured

Modern CSS has evolved dramatically. Features that once required JavaScript are now native:

```
/* Modern CSS can do what JavaScript used to handle */

/* Smooth animations */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Complex layouts */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Interactive states */
.dropdown:focus-within .dropdown-content {
  opacity: 1;
  transform: translateY(0);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}
```

CSS Grid, Flexbox, custom properties, container queries, and advanced selectors handle most UI needs without JavaScript.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#performance-is-paramount) Performance is Paramount

Core Web Vitals are now a Google ranking factor. Users expect fast, responsive experiences:

- **Largest Contentful Paint (LCP)**: Should occur within 2.5 seconds
- **First Input Delay (FID)**: Should be less than 100 milliseconds
- **Cumulative Layout Shift (CLS)**: Should be less than 0.1

Heavy JavaScript frameworks make these targets harder to achieve. CSS-only solutions start with a performance advantage.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#mobile-first-reality) Mobile-First Reality

Over 60% of web traffic comes from mobile devices. Mobile users have:

- Slower processors
- Limited memory
- Intermittent connectivity
- Battery constraints

CSS-only component libraries respect these constraints by minimizing JavaScript execution and reducing battery drain.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#developer-experience-fatigue) Developer Experience Fatigue

Developers are experiencing fatigue from complex toolchains:

- Webpack configuration hell
- Package version conflicts
- Breaking changes in major updates
- Learning curves for new abstractions

The industry is ready for simpler solutions that "just work."

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#platform-native-development) Platform-Native Development

Web standards are advancing rapidly. Why reinvent the wheel when the platform provides solutions?

```
<!-- Native form validation -->
<input type="email" required>

<!-- Native date picker -->
<input type="date">

<!-- Native disclosure widget -->
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden by default</p>
</details>
```

Using platform features means better accessibility, consistent behavior across browsers, and no maintenance burden.

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#why-developers-choose-daisyui-in-2026) Why developers choose daisyUI in 2026

daisyUI represents the future of component libraries: CSS-only, framework-agnostic, and built on web standards.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#zero-javascript-dependencies) Zero JavaScript Dependencies

daisyUI is pure CSS. Your entire component library adds zero runtime JavaScript:

```
<!-- Complete interactive dropdown - no JavaScript required -->
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Menu</label>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>
```

This dropdown works perfectly with keyboard navigation, screen readers, and mobile touch, all through CSS and semantic HTML.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#framework-freedom) Framework Freedom

Use daisyUI with any framework or no framework at all:

```
<!-- Plain HTML -->
<button class="btn btn-primary">Click me</button>

<!-- React -->
<button className="btn btn-primary">Click me</button>

<!-- Vue -->
<button class="btn btn-primary">Click me</button>

<!-- Svelte -->
<button class="btn btn-primary">Click me</button>
```

The same markup works everywhere. Your UI knowledge transfers between projects and frameworks.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#minimal-bundle-impact) Minimal Bundle Impact

daisyUI's CSS is highly optimized and tree-shakeable:

- **Full library**: ~50KB gzipped (90% smaller than typical JS libraries)
- **With purging**: Often under 10KB for real applications
- **No runtime overhead**: Zero JavaScript execution cost

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#built-in-accessibility) Built-in Accessibility

daisyUI components follow WCAG guidelines and use semantic HTML:

```
<!-- Properly accessible modal -->
<input type="checkbox" id="modal-toggle" class="modal-toggle" />
<div class="modal">
  <div class="modal-box" role="dialog" aria-labelledby="modal-title">
    <h3 id="modal-title" class="font-bold text-lg">Confirmation</h3>
    <p class="py-4">Are you sure you want to delete this item?</p>
    <div class="modal-action">
      <label for="modal-toggle" class="btn">Cancel</label>
      <label for="modal-toggle" class="btn btn-error">Delete</label>
    </div>
  </div>
</div>
```

Screen readers, keyboard navigation, and assistive technologies work perfectly without extra JavaScript.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#theme-system-that-scales) Theme System That Scales

daisyUI's CSS custom property-based theming is more powerful than JavaScript solutions:

```
/* Define a theme in pure CSS */
[data-theme="corporate"] {
  --primary: #4f46e5;
  --primary-content: #ffffff;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  --neutral: #374151;
  --base-100: #ffffff;
  --base-200: #f3f4f6;
  --base-300: #e5e7eb;
}
```

Themes apply instantly without JavaScript, work with SSR, and respect user preferences automatically.

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#developer-experience-without-compromise) Developer Experience Without Compromise

daisyUI provides excellent DX without complexity:

```
<!-- Responsive card layout -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="photo.jpg" alt="Photo" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card description goes here.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

Semantic class names, predictable behavior, and zero configuration required.

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#the-benefits-of-going-css-only-in-2026) The Benefits of Going CSS-Only in 2026

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#lightning-fast-performance) Lightning-Fast Performance

CSS-only libraries load and render faster:

- **No JavaScript parsing time**: Components display immediately
- **Smaller bundle sizes**: Less network overhead
- **Better caching**: CSS files cache more effectively than JavaScript
- **Reduced main thread blocking**: No JavaScript execution delays

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#improved-seo-and-core-web-vitals) Improved SEO and Core Web Vitals

Search engines prefer fast, lightweight sites:

- **Better LCP scores**: Content renders immediately without JavaScript
- **Lower FID**: No JavaScript framework overhead
- **Improved CLS**: Stable layouts without dynamic rendering

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#reduced-maintenance-burden) Reduced Maintenance Burden

CSS-only libraries require less maintenance:

- **Fewer dependencies to update**: No security vulnerabilities in JavaScript packages
- **No breaking changes**: CSS is backward compatible
- **Simpler debugging**: Fewer layers of abstraction
- **Longer lifespan**: CSS outlasts JavaScript framework churn

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#better-accessibility-by-default) Better Accessibility by Default

Platform-native solutions work better with assistive technologies:

- **Screen reader compatibility**: Semantic HTML works perfectly
- **Keyboard navigation**: Native focus management
- **High contrast mode**: Respects user system preferences
- **Reduced motion**: CSS media queries handle user preferences

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#cross-framework-compatibility) Cross-Framework Compatibility

Invest in skills that transfer:

- **Portable markup**: Same HTML works in any framework
- **Transferable knowledge**: CSS skills apply everywhere
- **Future-proof**: Not tied to framework lifecycles
- **Team flexibility**: Any developer can contribute

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#making-the-transition) Making the Transition

Moving to CSS-only component libraries doesn't mean sacrificing functionality:

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#start-small) Start Small

Begin with simple components:

```
<!-- Replace complex JavaScript buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
```

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#progressive-enhancement) Progressive Enhancement

Add JavaScript only when necessary:

```
<!-- Base functionality in CSS -->
<div class="dropdown">
  <label tabindex="0" class="btn">Menu</label>
  <ul class="dropdown-content menu">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<!-- Enhanced with minimal JavaScript if needed -->
<script>
// Optional: Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.activeElement.blur();
  }
});
</script>
```

### [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#measure-the-impact) Measure the Impact

Track the improvements:

- **Bundle size reduction**: Often 70-90% smaller
- **Build time improvement**: 2-5x faster builds
- **Performance gains**: Better Core Web Vitals scores
- **Development speed**: Faster iteration cycles

## [Link to heading](https://daisyui.com/pages/best-component-library-for-2026/\#the-future-is-css-only) The Future is CSS-Only

2026 represents a turning point. The web platform has matured, performance requirements have tightened, and developer fatigue with complex toolchains has reached a peak.

CSS-only component libraries like daisyUI offer a path forward:

- **Better performance**: Faster loading, smoother interactions
- **Reduced complexity**: Simpler builds, fewer dependencies
- **Greater longevity**: Platform-based solutions outlast framework trends
- **Improved accessibility**: Native HTML works better with assistive technologies
- **Cross-framework compatibility**: Invest in transferable skills

The question isn't whether to adopt CSS-only component libraries, but how quickly you can make the transition.

Ready to embrace the future of web development? [Start with daisyUI](https://daisyui.com/docs/install/) and experience what component libraries should be: simple, fast, and built on web standards.

The web platform is ready. The tools are mature. 2026 is the year to simplify and win.

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