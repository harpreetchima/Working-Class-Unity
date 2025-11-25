---
url: "https://daisyui.com/blog/daisyui-nextjs-online-store-template/"
title: "A daisyUI + Next.js template that converts your Lemon Squeezy API into an online store — daisyUI Tailwind CSS Component UI Library"
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

![A daisyUI + Next.js template that converts your Lemon Squeezy API into an online store](https://img.daisyui.com/images/blog/online-store-template-thumbnail.webp)

Published 10 months agoby Abhijeet Biswal

# A daisyUI + Next.js template that converts your Lemon Squeezy API into an online store

Convert your Lemon Squeezy API data into a professional online store.

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#introduction) Introduction

Setting up an online store can be a complex task or a really expensive one. We recently added a new ["Online Store Template"](https://www.daisyui.com/store/#426780) to daisyUI store which can help you build a professional online store with minimal effort. This template is built using Next.js and receives data from the Lemon Squeezy API. It is fully customizable and can be deployed to any platform that supports Next.js.

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#1-installation) 1\. Installation

Get the ["Online Store Template"](https://www.daisyui.com/store/#426780) from the daisyUI store and follow these steps to set up your online store:

Open the project and run the following command in your terminal to install the required dependencies:

```
npm install
```

To start the development server:

```
npm run dev
```

This will run your site in development mode at `http://localhost:3000`

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#2-configure-your-site) 2\. Configure your site

### [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#add-lemon-squeezy-api) Add Lemon Squeezy API

By default, the site displays example data from the `data/lemonsqueezy-products.example.json` file. To connect your store to Lemon Squeezy, follow these steps:

1. **Generate an API Key**

   - Log in to your [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com/settings/api).
   - Create a new API key and copy it.
2. **Add the API Key to the Environment File**


![env file example](https://img.daisyui.com/images/blog/store-env.webp)

- Create a `.env` file in the root of your project.
- Add the following line:


```
LEMON_SQUEEZY_API_KEY=your_api_key_here
```


Replace `your_api_key_here` with the API key you copied earlier.

3. **Test Your Integration** Restart the development server to load the environment variables and see your products fetched from Lemon Squeezy.

### [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#extending-product-data) Extending product data

The Lemon Squeezy dashboard allows limited customization of product data. To enhance your store’s functionality, use the `data/metadata.json` file for additional information. This includes:

- : Add custom categories like `trending`, `new arrivals`, or `bestsellers`.
- **Variants**: Define product variations (e.g., sizes, colors) with names and links.
- **Images**: Include high-quality images for product galleries.
- **Details**: Add detailed product descriptions and technical information.

Example `metadata.json` entry:

```
{
  "id": "12345",
  "availability": true,
  "sale": true,
  "category": ["trending", "bestsellers"],
  "original_price": "$50",
  "variant": {
    "size": [\
      { "name": "Small", "link": "https://example.com/small" },\
      { "name": "Medium", "link": "https://example.com/medium" }\
    ]
  },
  "info": {
    "Material": "100% Cotton",
    "Care Instructions": "Machine washable"
  },
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
}
```

#### [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#customizing-the-site) Customizing the site

To personalize your store’s content and design, edit the following files:

1. **`data/site.ts`**: Update the global site settings, including the site name, hero section, and footer content.
2. **`data/sidebar.ts`**: Modify the sidebar content, including categories and quick links.

To customize the core pages of your store, update these files:

![pages route](https://img.daisyui.com/images/blog/pages-route-example.webp)

- (`/page.tsx`):


  - Navigate to the `app/page.tsx` file.
  - Update the hero section, featured products, and banners to reflect your brand.

Example snippet from `page.tsx`:

```
export default async function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <TrendingProducts />
      <Categories />
      <OfferCard />
      <NewArrivals />
      <NewsLetter />
    </div>
  );
}
```

- (`/collections/[slug].tsx`):

  - Located in `app/collections/[slug].tsx`, this file controls category and collection pages.
  - Use this file to manage the display of products dynamically based on categories.
- (`/products/[slug].tsx`):


  - Located in `app/products/[slug].tsx`, this file handles individual product details.
  - This page dynamically displays product images, information, and variants.

Example product details layout:

```
const ProductDetails = () => {
  return (
    <div className="pb-20">
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col lg:grid gap-6 lg:gap-12 lg:grid-cols-2">
          <ProductImage params={{ slug: slug as string }} />
        </div>
      </div>
    </div>
  );
};
```

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#3-build-your-site-for-production) 3\. Build your site for production

Once you're happy with your store, it's time to build it for production:

```
npm run build
```

This command will optimize and generate your site’s static assets, ready for deployment.

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#4-deployment-options) 4\. Deployment options

Now that your store is built, you can deploy it using one of the following platforms:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

It can also be deployed anywhere Next.js works. For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#conclusion) Conclusion

The ["Online Store Template"](https://www.daisyui.com/store/#426780) by daisyUI simplifies the process of building and managing an online store. With Lemon Squeezy API and customizable JSON metadata, you have the flexibility to create a store that meets your unique needs. Start building your store today and take your business to the next level!

## [Link to heading](https://daisyui.com/blog/daisyui-nextjs-online-store-template/\#need-help) Need help?

If you have questions or need assistance, join our [Discord community](https://daisyui.com/discord/). We’re here to help you get started and troubleshoot any issues.

Tags: [Templates](https://daisyui.com/blog/tag/templates)

## Don't miss new posts!

Subscribe to daisyUI newsletter to get the updates.

Subscribe

We don't share your email address with anyone

[![daisyUI swag!](https://img.daisyui.com/images/store/banner/cute-beanie.webp)\\
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