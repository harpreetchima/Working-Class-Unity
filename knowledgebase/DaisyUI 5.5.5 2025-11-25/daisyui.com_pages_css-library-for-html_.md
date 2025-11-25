---
url: "https://daisyui.com/pages/css-library-for-html/"
title: "CSS Library for HTML"
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

# CSS Library for HTML

Why you need a CSS component library that's framework-agnostic, portable, and gives you both the speed of Bootstrap and the customizability of Tailwind CSS

Building websites is more complicated than it should be. You write HTML, style it with CSS, and somehow it never looks quite right. The spacing is off, colors clash, and making everything responsive takes forever. This is why CSS component libraries exist, but picking the right one matters more than you think.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#why-you-need-a-css-component-library) Why you need a CSS component library

Writing CSS from scratch for every project is time-consuming and error-prone. Here's what happens without a component library:

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#reinventing-the-wheel) Reinventing the wheel

Every project starts the same way:

```
/* Writing button styles... again */
.button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.button:hover {
  background: #f0f0f0;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* And that's just a basic button */
```

Then you need to write styles for cards, modals, alerts, forms, navigation, dropdowns, and dozens of other components. Most of this code is identical across projects, yet developers keep rewriting it.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#inconsistent-design) Inconsistent design

Without a system, your styles drift:

```
<!-- Page 1 -->
<button style="padding: 10px 20px; background: blue; border-radius: 4px;">
  Click me
</button>

<!-- Page 2 -->
<button style="padding: 8px 16px; background: #0066cc; border-radius: 3px;">
  Submit
</button>

<!-- Page 3 -->
<button style="padding: 12px 24px; background: darkblue; border-radius: 5px;">
  Send
</button>
```

Each button looks different. Colors don't match, spacing varies, and the overall design feels disconnected. A component library enforces consistency automatically.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#accessibility-problems) Accessibility problems

Building accessible components takes expertise:

```
<!-- Looks simple, but it's not accessible -->
<div class="modal" style="display: none;">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>Modal content...</p>
  </div>
</div>
```

Where's the keyboard navigation? What about screen readers? How do users close it? Focus management? Proper ARIA attributes? Getting these details right requires deep knowledge that most developers don't have.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#responsive-design-headaches) Responsive design headaches

Making things work on different screen sizes is tedious:

```
/* Desktop styles */
.card {
  width: 400px;
  padding: 24px;
  display: flex;
}

/* Tablet */
@media (max-width: 768px) {
  .card {
    width: 100%;
    padding: 16px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .card {
    padding: 12px;
    display: block;
  }
}
```

Writing this for every component gets old fast. Component libraries handle responsive design for you.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#time-wasted-on-styling) Time wasted on styling

Most web projects spend 40-60% of development time on styling. That's time not spent on features, performance, or user experience. A good component library cuts styling time dramatically, letting you focus on what makes your project unique.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#why-it-must-be-css-only-and-framework-agnostic) Why it must be CSS-only and framework-agnostic

Many component libraries tie you to a specific JavaScript framework. This creates serious problems:

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#framework-lock-in) Framework lock-in

React-only libraries force you to use React:

```
// Material-UI (React only)
import { Button, Card, TextField } from '@mui/material';

function MyComponent() {
  return (
    <Card>
      <TextField label="Email" />
      <Button variant="contained">Submit</Button>
    </Card>
  );
}
```

Want to use Vue next year? Svelte? Plain HTML? Too bad. Your entire UI is locked to React. If React falls out of favor or your team wants to switch frameworks, you're rewriting everything from scratch.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#dependency-hell) Dependency hell

Framework-specific libraries come with baggage:

```
{
  "dependencies": {
    "@mui/material": "^5.10.9",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/base": "^5.0.0-beta.8",
    "@mui/system": "^5.10.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

That's 7+ packages just for basic components. Each one can break, needs updates, and adds bundle size. Security vulnerabilities in any dependency compromise your entire app.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#poor-portability) Poor portability

Framework-tied components don't transfer between projects:

```
// React component - useless in Vue projects
<Button variant="primary" size="large" onClick={handleClick}>
  Submit
</Button>

// Have to rewrite for Vue
<v-btn color="primary" size="large" @click="handleClick">
  Submit
</v-btn>
```

Your knowledge and markup don't transfer. Every framework switch means learning a new component API and rewriting your UI.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#css-only-libraries-work-everywhere) CSS-only libraries work everywhere

Pure CSS libraries have none of these problems:

```
<!-- Works in React -->
<button className="btn btn-primary">Submit</button>

<!-- Works in Vue -->
<button class="btn btn-primary">Submit</button>

<!-- Works in Svelte -->
<button class="btn btn-primary">Submit</button>

<!-- Works in plain HTML -->
<button class="btn btn-primary">Submit</button>
```

Same markup, same result, everywhere. Your skills and code are portable. When frameworks change, your UI stays the same.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#why-tailwind-css-beats-bootstrap) Why Tailwind CSS beats Bootstrap

Bootstrap was the standard for years, but it has fundamental limitations that Tailwind CSS solves:

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#bootstrap-locks-you-into-a-design) Bootstrap locks you into a design

Bootstrap sites look like Bootstrap sites:

```
<!-- Bootstrap -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Card content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

This looks fine, but it looks like every other Bootstrap site. Customizing the design means fighting against Bootstrap's opinions. Want different spacing? Override Bootstrap. Different colors? Override Bootstrap. Different shadows? Override Bootstrap. You end up writing more CSS to undo Bootstrap than if you'd started from scratch.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#limited-customization) Limited customization

Bootstrap customization happens at build time with variables:

```
// You can change colors...
$primary: #007bff;
$secondary: #6c757d;

// But you can't easily change spacing, borders, etc.
// without writing custom CSS to override Bootstrap
```

Want a button with 6px padding instead of Bootstrap's default? Write custom CSS. Want a specific shadow? Custom CSS. Want a unique border radius? More custom CSS. At some point, you're not using Bootstrap anymore, you're fighting it.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#tailwind-css-gives-you-complete-control) Tailwind CSS gives you complete control

Tailwind CSS is a design system, not a pre-made design:

```
<!-- Full control over every aspect -->
<div class="bg-white rounded-lg shadow-xl p-6">
  <h2 class="text-2xl font-bold text-gray-900">Card title</h2>
  <p class="text-gray-600 mt-2">Card content.</p>
  <button class="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700">
    Go somewhere
  </button>
</div>
```

Every spacing value, color, size, and effect is yours to choose. Your design can be unique without fighting a framework.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#theme-customization-is-effortless) Theme customization is effortless

With Tailwind CSS, your design system lives in your CSS:

```
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --radius-lg: 12px;
  --spacing-card: 24px;
}
```

Change these values and your entire site updates. No preprocessor variables, no build-time configuration, just CSS custom properties that work everywhere.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#the-tailwind-css-problem) The Tailwind CSS problem

Tailwind CSS solves Bootstrap's customization issues, but it creates a new problem: development speed.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#utility-class-overload) Utility class overload

Real Tailwind CSS components become unreadable:

```
<!-- A simple card component -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-3 hover:shadow-xl transition-shadow duration-300">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="Album">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card title</a>
      <p class="mt-2 text-slate-500">Card description goes here...</p>
    </div>
  </div>
</div>
```

This is painful to write, hard to read, and impossible to maintain. Finding the one class you need to change is like searching for a needle in a haystack.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#repetition-everywhere) Repetition everywhere

Need three buttons? Copy all those classes three times:

```
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 1
</button>

<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 2
</button>

<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button 3
</button>
```

Need to change the button style? Find and update every single instance. This is the same maintenance nightmare that CSS was invented to solve.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#steep-learning-curve) Steep learning curve

You need to memorize hundreds of utility classes:

- Layout: `flex`, `grid`, `block`, `inline-block`, `hidden`
- Spacing: `p-4`, `m-2`, `space-y-4`, `gap-6`
- Typography: `text-lg`, `font-semibold`, `leading-6`, `tracking-wide`
- Colors: `bg-blue-600`, `text-white`, `border-gray-300`
- Effects: `shadow-lg`, `rounded-xl`, `transition-all`
- Responsive: `md:flex`, `lg:grid-cols-3`, `xl:w-1/2`
- States: `hover:bg-blue-700`, `focus:ring-2`, `disabled:opacity-50`

New developers get overwhelmed. Even experienced developers spend time looking up class names.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#slow-development) Slow development

Building even simple components takes time:

```
<!-- 10 minutes to write and debug this modal -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <h3 class="text-xl font-bold text-gray-900 mb-4">Modal Title</h3>
    <p class="text-gray-600 mb-6">Modal content goes here.</p>
    <div class="flex justify-end space-x-3">
      <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
        Cancel
      </button>
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

That's a lot of classes for a basic modal. Multiply this by dozens of components and development slows to a crawl.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#daisyui-best-of-both-worlds) daisyUI: Best of both worlds

daisyUI solves all these problems. It gives you Bootstrap's development speed with Tailwind CSS's customizability.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#fast-development-like-bootstrap) Fast development like Bootstrap

Write semantic class names, not utility soup:

```
<!-- Instead of 20+ utility classes -->
<button class="btn btn-primary">Submit</button>

<!-- Instead of this mess -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="photo.jpg" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Card description goes here.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Your HTML is readable. Development is fast. No memorizing hundreds of class names.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#full-customizability-like-tailwind-css) Full customizability like Tailwind CSS

daisyUI uses CSS custom properties for theming:

```
[data-theme="mytheme"] {
  --primary: #3b82f6;
  --primary-content: #ffffff;
  --secondary: #8b5cf6;
  --accent: #f59e0b;
  --neutral: #374151;
  --base-100: #ffffff;
}
```

Change these values and every component updates automatically. You have complete control over colors, spacing, borders, shadows, and everything else.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#tailwind-css-utilities-when-you-need-them) Tailwind CSS utilities when you need them

Combine daisyUI components with Tailwind CSS utilities:

```
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure class="lg:w-1/3">
    <img src="photo.jpg" alt="Album" class="w-full h-full object-cover" />
  </figure>
  <div class="card-body lg:w-2/3">
    <h2 class="card-title text-2xl lg:text-3xl">Card title</h2>
    <p class="opacity-70">Card description.</p>
    <div class="card-actions justify-end mt-4">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

Semantic components for structure, utilities for fine-tuning. You get both productivity and control.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#css-only-framework-agnostic) CSS-only, framework-agnostic

daisyUI is pure CSS. It works everywhere:

```
<!-- React -->
<div className="modal modal-open">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Modal Title</h3>
    <p className="py-4">Modal content.</p>
    <div className="modal-action">
      <button className="btn">Close</button>
    </div>
  </div>
</div>

<!-- Vue -->
<div class="modal modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>

<!-- Plain HTML -->
<div class="modal modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content.</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</div>
```

Same markup, same result. Your knowledge transfers between frameworks and projects.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#professional-design-system) Professional design system

daisyUI includes 35+ built-in themes:

```
<!-- Light theme -->
<html data-theme="light">
  <button class="btn btn-primary">Button</button>
</html>

<!-- Dark theme -->
<html data-theme="dark">
  <button class="btn btn-primary">Button</button>
</html>

<!-- Any other theme -->
<html data-theme="cyberpunk">
  <button class="btn btn-primary">Button</button>
</html>
```

Switch themes with one attribute change. Each theme is professionally designed with cohesive colors, proper contrast, and consistent spacing.

### [Link to heading](https://daisyui.com/pages/css-library-for-html/\#easy-maintenance) Easy maintenance

Update styles in one place:

```
/* Customize all buttons globally */
.btn {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Or specific variants */
.btn-primary {
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

Every button in your app updates automatically. No find-and-replace across hundreds of files.

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#compare-the-approaches) Compare the approaches

❌ Without daisyUI, you'd write all this for a button:

```
<button
  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold
   text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
   focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Click Me
</button>
```

✅ With daisyUI, you just write this:

```
<button class="btn">Click Me</button>
```

- daisyUI follows a design system approach, making it easy to create consistent UIs
- daisyUI button is less code, more readable and easier to maintain
- daisyUI button is easier to customize among multiple files
- daisyUI button has built-in states like hover, focus, and disabled that work out of the box, which are required for accessibility
- daisyUI has light and dark themes built-in plus unlimited custom themes
- daisyUI buttons are consistent across your app without extra effort

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#get-started) Get started

Install daisyUI in your Tailwind CSS project:

```
npm i -D daisyui
```

Add it to your CSS:

```
@import "tailwindcss";
@plugin "daisyui";
```

Start using components:

```
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
```

For more details, check the [daisyUI installation guide](https://daisyui.com/docs/install/).

## [Link to heading](https://daisyui.com/pages/css-library-for-html/\#why-daisyui-is-the-best-css-library-for-html) Why daisyUI is the best CSS Library for HTML

- **Framework-agnostic**: Pure CSS works everywhere
- **Development speed**: Semantic components like Bootstrap
- **Customizability**: Full control like Tailwind CSS
- **[No dependencies](https://daisyui.com/pages/minimal-css-framework/ "daisyUI is a minimal CSS framework")**: Zero JavaScript, no framework lock-in
- **Professional themes**: 35+ ready-to-use themes
- **Easy maintenance**: Update styles globally
- **[Small bundle size](https://daisyui.com/pages/minimal-css-framework/ "daisyUI is a minimal CSS framework")**: Highly optimized CSS
- **Great documentation**: Clear examples and guides

You don't have to choose between speed and flexibility anymore. daisyUI gives you both.

[Start building with daisyUI](https://daisyui.com/docs/install/) and experience what HTML and CSS should be: fast to write, easy to maintain, and beautiful by default.

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