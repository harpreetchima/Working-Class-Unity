---
url: "https://tailwindcss.com/plus/ui-blocks/documentation/dialog"
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

# Dialog

A commercial license is required to use Tailwind Plus Elements.Purchase [Tailwind Plus](https://tailwindcss.com/plus#pricing) to obtain a license.

The `<el-dialog>` component is a lightweight wrapper around the native`<dialog>` element that adds scroll locking, click-outside-to-close support, and smooth exit transitions that work consistently across all browsers. It builds on standard HTML APIs while making dialogs easier to use and style.

Open dialog

### Payment successful

Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.

Go back to dashboard

## Component API

### <el-dialog>

Wrapper around the native `<dialog>` element used to manage the open state and transitions.

|     |     |
| --- | --- |
| Attributes |
| `open` | A boolean attribute that indicates whether the dialog is open or closed. You can change the attribute to dynamically open or close the dialog. |
| Data attributes (Read-only) |
| `data-closed` | Present before transitioning in, and when transitioning out. |
| `data-enter` | Present when transitioning in. |
| `data-leave` | Present when transitioning out. |
| `data-transition` | Present when transitioning in or out. |
| Events |
| `open` | Dispatched when the dialog is opened in any way other than by updating the`open` attribute. |
| `close` | Dispatched when the dialog is closed in any way other than by updating the`open` attribute. |
| `cancel` | Dispatched when the user attempts to dismiss the dialog via Escape key or clicking outside. Calling `preventDefault()` prevents the dialog from closing. |
| Methods |
| `show()` | Shows the dialog in modal mode. |
| `hide()` | Hides the dialog. Takes an optional object with a `restoreFocus` property to disable the default focus restoration. |

### <dialog>

The native dialog element.

|     |     |
| --- | --- |
| Commands |
| `show-modal` | Opens the dialog. |
| `close` | Closes the dialog. |

### <el-dialog-backdrop>

The visual backdrop behind your dialog panel.

|     |     |
| --- | --- |
| Data attributes (Read-only) |
| `data-closed` | Present before transitioning in, and when transitioning out. |
| `data-enter` | Present when transitioning in. |
| `data-leave` | Present when transitioning out. |
| `data-transition` | Present when transitioning in or out. |

### <el-dialog-panel>

The main content area of your dialog. Clicking outside of this will trigger the dialog to close.

|     |     |
| --- | --- |
| Data attributes (Read-only) |
| `data-closed` | Present before transitioning in, and when transitioning out. |
| `data-enter` | Present when transitioning in. |
| `data-leave` | Present when transitioning out. |
| `data-transition` | Present when transitioning in or out. |

## Examples

### Basic example

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Opening the dialog

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Closing the dialog

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Adding a backdrop

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

### Adding transitions

_To view the complete documentation, you must own a Tailwind Plus license and be [signed in](https://tailwindcss.com/plus/login)._

## On this page

- [Component API](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#component-api)
- [<el-dialog>](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#el-dialog)
- [<dialog>](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#dialog)
- [<el-dialog-backdrop>](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#el-dialog-backdrop)
- [<el-dialog-panel>](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#el-dialog-panel)
- [Examples](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#examples)
- [Basic example](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#basic-example)
- [Opening the dialog](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#opening-the-dialog)
- [Closing the dialog](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#closing-the-dialog)
- [Adding a backdrop](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#adding-a-backdrop)
- [Adding transitions](https://tailwindcss.com/plus/ui-blocks/documentation/dialog#adding-transitions)

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