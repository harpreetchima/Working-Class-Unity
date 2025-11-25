---
url: "https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/"
title: "Introducing: Documentation template for Astro and daisyUI — daisyUI Tailwind CSS Component UI Library"
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

![Introducing: Documentation template for Astro and daisyUI](https://img.daisyui.com/images/blog/docs-template-thumbnail.webp)

Published last yearby Abhijeet Biswal

# Introducing: Documentation template for Astro and daisyUI

Learn to build professional documentation quickly with the Documentation Template for Astro from daisyUI.

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#introduction) Introduction

Creating user-friendly documentation is essential for any project, but it doesn’t have to be complicated. With the "Documentation Template for Astro" available at [Official daisyUI store](https://daisyui.com/store/#284327), you can quickly build beautiful and easy-to-navigate documentation for your product or project. A [Next.js version](https://daisyui.com/store/#284327) of the template is also available if you prefer using Next.js. This guide will walk you through installing, customizing, and deploying your documentation site using the Astro template.

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#1-how-to-install-the-documentation-template) 1\. How to Install the Documentation Template

To get started, purchase and download the Documentation Template from the [daisyUI store](https://daisyui.com/store/#284327). After downloading, follow these steps:

### [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#install-dependencies) Install Dependencies

Navigate to your project directory and install the necessary dependencies:

1. **Install Dependencies**



```
npm install
```

2. **Run the Development Server**



```
npm run dev
```


## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#2-how-to-customize-the-content) 2\. How to Customize the Content

This template comes with a customizable landing page (home page) and a dedicated documentation page. While our focus will be on the documentation page, we’ll also briefly explain how to customize the landing page.

### [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#1-customizing-the-landing-page) 1\. Customizing the Landing Page

![Docs Home Page](https://img.daisyui.com/images/blog/docs-home-page.webp)

The landing page is the first thing visitors see, so it’s essential to make it visually appealing and informative. Here’s a quick guide on how to customize it:

Navigate to `src/pages/index.astro`:

This file controls the layout and content of the landing page. You can adjust the hero section, call-to-action buttons, featured content, and more.

```
---
import CodeBlock from "../components/home/CodeBlock.astro";
import Features from "../components/home/Features.astro";
import Hero from "../components/home/Hero.astro";
import Integration from "../components/home/Integration.astro";
import Contributors from "../components/home/Contributors.astro";
import Testimonial from "../components/home/Testimonial.astro";
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<div>
  <Hero />
  <Features />
  <CodeBlock />
  <Integration />
  <Contributors />
  <Testimonial />
</div>
```

Modify the imported components (Hero, Features, etc.) to fit your branding and content needs.

### [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#2-customizing-the-documentation-page) 2\. Customizing the Documentation Page

![Docs Page](https://img.daisyui.com/images/blog/docs-page.webp)

Personalizing the documentation page is straightforward. Here’s how you can customize key sections:

#### [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#1-changing-the-header) 1\. Changing the Header

Navigate to `src/components/docs/DocsHeader.astro`:

This file contains your Header section information. Here, you can modify the searchbar, social links and theme toggle.

```
<header class="sticky top-0 z-30">
  <nav class="navbar bg-base-100/90 shadow-sm backdrop-blur-lg justify-center items-center py-2 md:px-10 px-2 border-b border-base-content/10">
    <div class="navbar-start">
      <label for="my-drawer-2" class="btn btn-square btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>

    <div class="navbar-end">
      <a
        class="btn btn-sm btn-ghost"
        href="https://www.x.com"
        aria-label="twitter"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4">
          <path
            d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <ThemeToggle />
    </div>
  </nav>
</header>
```

#### [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#2-updating-the-sidebar-navigation) 2\. Updating the Sidebar Navigation

Navigate to `src/components/docs/SideBar.astro`:

The sidebar is where your documentation sections are listed. Update it to add, remove, or modify sections:

```
<div class="drawer-side z-40 md:border-r md:border-base-content/10">
  <label
    for="my-drawer-2"
    aria-label="close sidebar"
    class="drawer-overlay"
  ></label>
  <aside class="bg-base-100 min-h-screen w-80">
    <div
      class="bg-base-100/90 sticky top-0 z-20 items-center gap-2 px-4 py-2 backdrop-blur lg:flex"
    >
      <a href="/" class="flex-0 btn btn-ghost px-2">
        <h1
          class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50"
        >
          Access Shield{" "}
          <span class="text-sm text-base-content opacity-50">docs</span>
        </h1>
      </a>
    </div>
  </aside>

  <!-- SideBar Code -->
</div>
```

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#3-how-to-add-new-content) 3\. How to Add New Content

Adding new content pages to your documentation is simple:

1. Create a New Markdown File

Navigate to the `src/content/docs` directory and create a new .mdx file. For example:

```
src/content/docs/gettingstarted.mdx
```

2. Write Your Content

Open the new file and add your content using Markdown. Here's a basic structure:

```
---
title: Getting Started
description: "Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis."
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## Overview

Authentication is a crucial aspect of any web application, ensuring that users are who they claim to be before granting access to resources or sensitive information. Access Shield simplifies the process of user authentication, offering features such as:

- **User Registration and Login**: Allow users to create accounts and securely log in to your application.
- **Password Hashing and Encryption**: Safeguard user passwords by securely hashing and encrypting them before storage.
- **Session Management**: Manage user sessions to maintain authentication state across requests.
- **OAuth Integration**: Simplify user authentication by integrating with popular OAuth providers.
- **Two-Factor Authentication (2FA)**: Enhance security by requiring an additional authentication factor.
- **Role-Based Access Control (RBAC)**: Define roles and permissions to control access to resources.
```

3. Preview Your Changes

Save the file and run the development server (`npm run dev`) to see your new page in the documentation site.

![Docs markdown sample](https://img.daisyui.com/images/blog/docs-markdown-sample.webp)

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#4-how-to-build-the-template-for-production) 4\. How to Build the Template for Production

When you're ready to go live, build your documentation site for production:

```
npm run build
```

This command will optimize and generate your site’s static assets, ready for deployment.

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#5-deployment-options) 5\. Deployment Options

Deploying your documentation site is easy with the following options:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://pages.github.com/)
- [Vercel](https://pages.github.com/)

## [Link to heading](https://daisyui.com/blog/daisyui-astro-tailwind-documentation-template/\#conclusion) Conclusion

With the ["Documentation Template for Astro"](https://daisyui.com/store/#284327) from daisyUI, creating clean and easy-to-use documentation is quick and straightforward. Just follow these steps, and you'll have your site up and running in no time. Visit the [daisyUI](https://daisyui.com/store/#284327) store to get started!.

Tags: [Templates](https://daisyui.com/blog/tag/templates)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI stickers](https://img.daisyui.com/images/store/banner/sticker.webp)\\
\\
daisyUI stickers\\
\\
Great for laptop](https://swag.daisyui.com/collections/stickers)

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