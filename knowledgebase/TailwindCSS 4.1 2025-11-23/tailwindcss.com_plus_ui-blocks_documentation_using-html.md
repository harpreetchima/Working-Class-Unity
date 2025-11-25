---
url: "https://tailwindcss.com/plus/ui-blocks/documentation/using-html"
title: "Tailwind Plus - Official Tailwind UI Components & Templates"
---

[Home](https://tailwindcss.com/plus)

[Now with vanilla JavaScript support\\
Learn more](https://tailwindcss.com/blog/vanilla-js-support-for-tailwind-plus)

``[UI Blocks](https://tailwindcss.com/plus/ui-blocks) [Templates](https://tailwindcss.com/plus/templates) [UI Kit](https://tailwindcss.com/plus/ui-kit)

[Sign in](https://tailwindcss.com/plus/login) [Get full access](https://tailwindcss.com/plus#pricing)

- [Marketing](https://tailwindcss.com/plus/ui-blocks/marketing)
- [Application UI](https://tailwindcss.com/plus/ui-blocks/application-ui)
- [Ecommerce](https://tailwindcss.com/plus/ui-blocks/ecommerce)
- [Documentation](https://tailwindcss.com/plus/ui-blocks/documentation)
- ### Getting started

- [Getting set up](https://tailwindcss.com/plus/ui-blocks/documentation)
- [Using HTML](https://tailwindcss.com/plus/ui-blocks/documentation/using-html)
- [Using React](https://tailwindcss.com/plus/ui-blocks/documentation/using-react)
- [Using Vue](https://tailwindcss.com/plus/ui-blocks/documentation/using-vue)
- [Assets](https://tailwindcss.com/plus/ui-blocks/documentation/assets)
- ### Elements

- [Introduction](https://tailwindcss.com/plus/ui-blocks/documentation/elements)
- [Autocomplete](https://tailwindcss.com/plus/ui-blocks/documentation/autocomplete)
- [Command palette](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette)
- [Dialog](https://tailwindcss.com/plus/ui-blocks/documentation/dialog)
- [Disclosure](https://tailwindcss.com/plus/ui-blocks/documentation/disclosure)
- [Dropdown menu](https://tailwindcss.com/plus/ui-blocks/documentation/dropdown-menu)
- [Popover](https://tailwindcss.com/plus/ui-blocks/documentation/popover)
- [Select](https://tailwindcss.com/plus/ui-blocks/documentation/select)
- [Tabs](https://tailwindcss.com/plus/ui-blocks/documentation/tabs)

5-day Mini-Course

### Build UIs that don’t suck.

**Short, tactical video lessons** from the creator of Tailwind CSS, delivered directly to your inbox **every day for a week**.

[Get the free course](https://tailwindcss.com/build-uis-that-dont-suck)

[UI Blocks](https://tailwindcss.com/plus/ui-blocks)

[Documentation](https://tailwindcss.com/plus/ui-blocks/documentation)

[UI Blocks](https://tailwindcss.com/plus/ui-blocks)

/ Docs

# Using HTML

The HTML snippets in Tailwind Plus depend on a UI component library called [Elements](https://tailwindcss.com/plus/ui-blocks/documentation/elements), which is used to power all of the interactive behavior, like dropdown menus, tabs, and listboxes.

## Installing dependencies

A commercial license is required to use Tailwind Plus Elements.Purchase [Tailwind Plus](https://tailwindcss.com/plus#pricing) to obtain a license.

The easiest way to install Elements is via the CDN. To do this, add the following script to your project's `<head>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
```

Alternatively, if you have a build pipeline you can also install it via npm:

```bash
npm install @tailwindplus/elements
```

Next, import Elements into your root layout:

```js
import '@tailwindplus/elements';
```

See the [Elements documentation](https://tailwindcss.com/plus/ui-blocks/documentation/elements) for more information.

## Creating components

Since the vanilla HTML examples included in Tailwind Plus can't take advantage of things like loops, there is a lot of repetition that wouldn't actually be there in a real-world project where the HTML was being generated from some dynamic data source. We might give you a list component with 5 list items for example that have all the utilities duplicated on each one, whereas in your project you'll actually be generating those list items by looping over an array.

When adapting our examples for your own projects, we recommend creating reusable template partials or JavaScript components as needed to manage any duplication.

Learn more about this in the ["Using components" documentation](https://tailwindcss.com/docs/styling-with-utility-classes#using-components) on the Tailwind CSS website.

## On this page

- [Installing dependencies](https://tailwindcss.com/plus/ui-blocks/documentation/using-html#installing-dependencies)
- [Creating components](https://tailwindcss.com/plus/ui-blocks/documentation/using-html#creating-components)

### Marketing

- [Hero Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/heroes)
- [Feature Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections)
- [Pricing Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/pricing)
- [Header Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/header)
- [Newsletter Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/newsletter-sections)
- [Testimonials](https://tailwindcss.com/plus/ui-blocks/marketing/sections/testimonials)
- [Team Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/team-sections)
- [Content Sections](https://tailwindcss.com/plus/ui-blocks/marketing/sections/content-sections)
- [Logo Clouds](https://tailwindcss.com/plus/ui-blocks/marketing/sections/logo-clouds)
- [FAQs](https://tailwindcss.com/plus/ui-blocks/marketing/sections/faq-sections)
- [Footers](https://tailwindcss.com/plus/ui-blocks/marketing/sections/footers)
- [Headers](https://tailwindcss.com/plus/ui-blocks/marketing/sections/header)
- [Flyout Menus](https://tailwindcss.com/plus/ui-blocks/marketing/elements/flyout-menus)
- [Banners](https://tailwindcss.com/plus/ui-blocks/marketing/elements/banners)
- [Browse all →](https://tailwindcss.com/plus/ui-blocks/marketing)

### Application UI

- [Tables](https://tailwindcss.com/plus/ui-blocks/application-ui/lists/tables)
- [Feeds](https://tailwindcss.com/plus/ui-blocks/application-ui/lists/feeds)
- [Form Layouts](https://tailwindcss.com/plus/ui-blocks/application-ui/forms/form-layouts)
- [Select Menus](https://tailwindcss.com/plus/ui-blocks/application-ui/forms/select-menus)
- [Radio Groups](https://tailwindcss.com/plus/ui-blocks/application-ui/forms/radio-groups)
- [Checkboxes](https://tailwindcss.com/plus/ui-blocks/application-ui/forms/checkboxes)
- [Comboboxes](https://tailwindcss.com/plus/ui-blocks/application-ui/forms/comboboxes)
- [Navbars](https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars)
- [Pagination](https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/pagination)
- [Sidebar Navigation](https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/sidebar-navigation)
- [Command Palettes](https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/command-palettes)
- [Modals](https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs)
- [Dropdowns](https://tailwindcss.com/plus/ui-blocks/application-ui/elements/dropdowns)
- [Buttons](https://tailwindcss.com/plus/ui-blocks/application-ui/elements/buttons)
- [Browse all →](https://tailwindcss.com/plus/ui-blocks/application-ui)

### Ecommerce

- [Product Overviews](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-overviews)
- [Product Lists](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-lists)
- [Category Previews](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/category-previews)
- [Shopping Carts](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/shopping-carts)
- [Category Filters](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/category-filters)
- [Product Quickviews](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-quickviews)
- [Product Features](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-features)
- [Store Navigation](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/store-navigation)
- [Promo Sections](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/promo-sections)
- [Checkout Forms](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/checkout-forms)
- [Reviews](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/reviews)
- [Order Summaries](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/order-summaries)
- [Order History](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/order-history)
- [Incentives](https://tailwindcss.com/plus/ui-blocks/ecommerce/components/incentives)
- [Browse all →](https://tailwindcss.com/plus/ui-blocks/ecommerce)

### Templates & UI Kits

- [Catalyst UI Kit](https://tailwindcss.com/plus/templates/catalyst)
- [Personal Website Template](https://tailwindcss.com/plus/templates/spotlight)
- [Landing Page Template](https://tailwindcss.com/plus/templates/salient)
- [API Reference Template](https://tailwindcss.com/plus/templates/protocol)
- [Changelog Template](https://tailwindcss.com/plus/templates/commit)
- [Info Product Template](https://tailwindcss.com/plus/templates/primer)
- [Agency Template](https://tailwindcss.com/plus/templates/studio)
- [Podcast Template](https://tailwindcss.com/plus/templates/transmit)
- [App Marketing Template](https://tailwindcss.com/plus/templates/pocket)
- [Documentation Template](https://tailwindcss.com/plus/templates/syntax)
- [Conference Template](https://tailwindcss.com/plus/templates/keynote)
- [Browse all →](https://tailwindcss.com/plus/templates)

© 2025 Tailwind Labs Inc. All rights reserved.

[Privacy policy](https://tailwindcss.com/plus/privacy-policy)

[Changelog](https://tailwindcss.com/plus/changelog)