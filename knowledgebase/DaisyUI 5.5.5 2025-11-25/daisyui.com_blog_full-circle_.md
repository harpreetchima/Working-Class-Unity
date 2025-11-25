---
url: "https://daisyui.com/blog/full-circle/"
title: "Not going full circle with class names — daisyUI Tailwind CSS Component UI Library"
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

![Not going full circle with class names](https://img.daisyui.com/images/blog/ouroboros.webp)

Published 3 months agoby Pouya Saadeghi

# Not going full circle with class names

"Are we going full circle?" This is one of the questions I get asked about when people see component class names and utility classes together.

For small projects, it may not be critical how to organize your CSS. However, as projects grow in size and complexity, having a clear strategy for managing styles becomes life-saving. You may have worked on large projects with lots of components with different styling needs, and found yourself struggling on how to manage your CSS in a way that is maintainable and scalable at the same time.

## [Link to heading](https://daisyui.com/blog/full-circle/\#how-do-we-organize-css-at-scale) How do we organize CSS at scale?

When structuring your components and their styles, there are 3 common approaches:

### [Link to heading](https://daisyui.com/blog/full-circle/\#1-component-classes-speed-and-reusability) 1\. Component Classes: Speed and Reusability

The first approach is using component classes, which are predefined classes for common UI elements like buttons, cards, or modals. These class names are semantic and reusable, designed to represent the role of the element rather than its specific content. For example, you might use a class like `.btn` instead of `.signup-button`, or `.card` instead of `.product-showcase`.

This abstraction allows you to reuse the same class across multiple parts of your application, ensuring consistency and reducing redundancy. Component classes excel at speeding up development by providing ready-to-use building blocks for your UI. However, they can become limiting when you need specific customizations that don't fit the predefined design, often requiring you to write additional CSS overrides or create entirely new component variants.

### [Link to heading](https://daisyui.com/blog/full-circle/\#2-utility-classes-low-level-control-and-flexibility) 2\. Utility Classes: Low-level Control and Flexibility

The second approach involves utility classes, which are low-level classes that map directly to individual CSS properties, such as margin, padding, or color. These classes, like `p-4` for padding or `text-blue-500` for text color, give you granular control over your styles.

Utility classes are highly flexible and allow for precise customization without the need to write additional CSS. This approach is particularly powerful when you want to fine-tune your designs or create unique layouts, as it enables you to compose styles directly in your HTML. However, this flexibility comes at the cost of development speed—you need to write many class names for each element, which can make your HTML verbose and slow to write.

### [Link to heading](https://daisyui.com/blog/full-circle/\#3-context-based-styling-total-isolation) 3\. Context-Based Styling: Total Isolation

The third approach is context-based styling, where styles are defined based on the specific context in which they are used. This includes techniques like CSS Modules (like `signupForm.module.css` imported into a single `<SignupForm>` JS component) or context-specific classes (like `.signup-form` or `.signup-input`) that are used only in one specific place.

The goal of this isolation was to prevent a common problem: changing styles in one part of your application accidentally breaking styles somewhere else. By creating completely isolated styles for each component or context, you can guarantee that changes won't have unintended side effects.

However, this approach often leads to significant challenges. Creating new styles for every context results in duplicate styles—you end up writing the same button styles, spacing rules, and color definitions multiple times across different files. This makes your codebase harder to manage and creates inconsistencies as these duplicated styles drift apart over time. Ironically, the problem this method tries to solve wouldn't exist with proper [CSS architecture](https://daisyui.com/pages/what-is-tailwind-css-used-for/) and modern features like CSS Cascade Layers.

## [Link to heading](https://daisyui.com/blog/full-circle/\#is-this-a-chronological-evolution) Is this a chronological evolution?

People who remember the Bootstrap era look at component class names like `btn`, `card`, and `modal` and wonder if we're repeating history.

It's a good question that shows how we think about front-end development progress.

The answer is in understanding what happened with each approach, and why what we have today wasn't possible before.

### [Link to heading](https://daisyui.com/blog/full-circle/\#components-only-fast-development-hard-customization) Components only: Fast development, hard customization

Bootstrap and similar frameworks gave us component classes like `btn`, `card`, and `navbar`. These were great for development speed. You could build a website quickly by just adding class names.

But customization was hard. If you wanted to change colors, spacing, or design details, you had to override CSS styles. This was time-consuming and messy. Most Bootstrap websites ended up looking the same because customizing was such a pain.

### [Link to heading](https://daisyui.com/blog/full-circle/\#utility-first-easy-customization-slow-development) Utility first: Easy customization, slow development

Tailwind CSS came with utility classes for every CSS property. Want a different border radius? Use `rounded-lg`. Different colors? Use `bg-blue-500`. Want custom spacing? Use `px-4 py-2`.

Customization became easy. You had complete control over every detail without writing custom CSS or fighting framework styles.

But development became slow. Look at this button made with utility classes:

```
<button
  class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
>
  Button
</button>
```

You need to write all these class names every time you want a button. It's slow to write and hard to maintain. Your HTML files become bloated with class names.

## [Link to heading](https://daisyui.com/blog/full-circle/\#we-need-both-fast-development-and-easy-customization) We need both: Fast development AND easy customization

Here's what we really need: the [fast development](https://daisyui.com/pages/ui-library-for-hackaton/) of component classes combined with the easy customization of utility classes.

This is what daisyUI gives you. Component classes for speed, utility classes for customization, working together.

With daisyUI, you get the same button like this:

```
<button class="btn btn-primary">Button</button>
```

Clean, readable, fast to write. And you can customize it easily by adding utility classes without any problems.

Want it larger? Add `btn-lg`. Want different colors? Use `bg-blue-500`. Want custom spacing? Add `px-8`. Want rounded corners? Add `rounded-xl`.

```
<button class="btn btn-primary rounded-xl bg-blue-500 px-8">Custom Button</button>
```

You get both fast development and easy customization in the same workflow.

## [Link to heading](https://daisyui.com/blog/full-circle/\#how-this-works-at-scale) How this works at scale?

In real projects, you use both approaches where they make sense:

- 90% of your UI uses standard patterns like buttons, cards, inputs, navigation. Component classes are perfect for these.
- 10% of your UI needs custom touches like specific spacing, unique colors, special layouts. Utility classes handle these perfectly.

This gives you both fast development and easy customization in the same workflow.

## [Link to heading](https://daisyui.com/blog/full-circle/\#why-a-component-library-on-top-of-tailwind-css) Why a component library on top of Tailwind CSS?

You might wonder: why build a [component library](https://daisyui.com/pages/css-library-for-html/) on top of Tailwind CSS specifically? Why not a library with component classes and utility classes from scratch?

The answer is in how atomic design works.

Think of Tailwind CSS utility classes as atoms - the smallest building blocks. Classes like `p-4`, `bg-blue-500`, `rounded-lg` are individual CSS properties that you can combine.

daisyUI components are like molecules - bigger pieces made from these atoms. A `btn` component combines padding, background, border, text styles, and hover states. A `card` component combines background, shadow, padding, and border radius.

When both the atoms (utilities) and molecules (components) are part of the same system, we get something powerful: Consistency in design tokens and visual harmony. It's crucial that you can customize everything and Tailwind CSS is great at this. It's also important that we can quickly add UI parts without worrying about details, and we want both of these to happen seamlessly. Yes, a component library can bring its own utility classes (Like Bootstrap, MUI, or even Radix did) but they can't compete with Tailwind CSS at customizability since Tailwind CSS simply provides utiltiy classes for every single CSS property you would need!

This is why you can write `btn bg-red-500 px-8` and everything works perfectly. The component and utilities speak the same language because they're built on the same foundation.

## [Link to heading](https://daisyui.com/blog/full-circle/\#not-a-full-circle-a-full-spectrum) Not a Full Circle, a Full Spectrum!

❌ Instead of thinking about this as going full circle like this

![Full Circle](https://img.daisyui.com/images/blog/full-circle.webp)

✅ It's better to see it as a spectrum like this

![Full spectrum](https://img.daisyui.com/images/blog/spectrum.webp)

where you can get the benefits of both approaches:

- 🤔 Bootstrap: Fast development, hard customization.

- 🤔 Utility-only Tailwind CSS: Easy customization, slow development.

- 😍 daisyUI: Fast development AND easy customization.


It's best of both worlds!

Tags: [Insights](https://daisyui.com/blog/tag/insights)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI mugs](https://img.daisyui.com/images/store/banner/lighthouse-mug.webp)\\
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