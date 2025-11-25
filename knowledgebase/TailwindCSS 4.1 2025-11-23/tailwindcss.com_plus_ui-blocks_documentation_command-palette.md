---
url: "https://tailwindcss.com/plus/ui-blocks/documentation/command-palette"
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

# Command palette

A commercial license is required to use Tailwind Plus Elements.Purchase [Tailwind Plus](https://tailwindcss.com/plus#pricing) to obtain a license.

The `<el-command-palette>` component provides a fast, keyboard-friendly way for users to search and select from a predefined list of options. It's typically displayed inside a dialog — often triggered with a `Cmd+K` shortcut — making it ideal for building power-user features like global searches.

Open command palette

## Recent searches

[Workflow Inc. / Website RedesignJump to...](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#)

## Quick actions

[Add new file...`⌘`  `N`](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#) [Add new folder...`⌘`  `F`](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#) [Add hashtag...`⌘`  `H`](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#) [Add label...`⌘`  `L`](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#)

## Component API

### <el-command-palette>

The main command component that manages filtering and coordinates with its child components

|     |     |
| --- | --- |
| Attributes |
| `name` | The form field name for the command when used in forms. |
| `value` | The selected value of the command. Can be read and set programmatically. |
| Events |
| `change` | Dispatched when the active item changes. Detail contains `relatedTarget`property with the active item or `null`. |
| Methods |
| `setFilterCallback(cb)` | Allows you to customize the filtering behavior of the command. The callback receives an object with `query`, `node` and `content`properties, and should return a `boolean`. |
| `reset()` | Resets the command to its initial state. |

### <el-command-list>

Contains all the command items and groups. All focusable children will be considered options.

### <el-defaults>

Optional container for suggestion items that are shown when the input is empty.

### <el-command-group>

Groups related command items together.

### <el-no-results>

Optional element shown when no items match the current query.

### <el-command-preview>

Optional preview content shown when a specific item is active.

|     |     |
| --- | --- |
| Attributes |
| `for` | The `id` of the item this preview content is associated with. |

## Examples

### Basic example

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Opening and closing

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Using with buttons

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Using with links

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Showing option previews

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Showing default commands

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Handling no results

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Grouping related commands

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Customizing the filter logic

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

## On this page

- [Component API](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#component-api)
- [<el-command-palette>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-command-palette)
- [<el-command-list>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-command-list)
- [<el-defaults>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-defaults)
- [<el-command-group>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-command-group)
- [<el-no-results>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-no-results)
- [<el-command-preview>](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#el-command-preview)
- [Examples](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#examples)
- [Basic example](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#basic-example)
- [Opening and closing](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#opening-closing-command-palettes)
- [Using with buttons](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#using-with-buttons)
- [Using with links](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#using-with-links)
- [Showing option previews](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#showing-option-previews)
- [Showing default commands](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#showing-default-commands)
- [Handling no results](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#handling-no-results-found)
- [Grouping related commands](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#grouping-related-commands)
- [Customizing the filter logic](https://tailwindcss.com/plus/ui-blocks/documentation/command-palette#customizing-the-filtering)

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