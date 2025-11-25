---
url: "https://tailwindcss.com/plus/ui-blocks/documentation/using-vue"
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

# Using Vue

## Installing dependencies

Tailwind Plus for Vue depends on [Headless UI](https://headlessui.dev/) to power all of the interactive behavior and [Heroicons](https://heroicons.com/) for icons, so you'll need to add these two libraries to your project:

```bash
npm install @headlessui/vue @heroicons/vue
```

## Creating components

All Vue examples are provided as a simple single component and make no assumptions about how you want to break things down, what prop APIs you want to expose, or where you get any data from.

Some data has been extracted into basic local variables just to clean up duplication and make the code easier to read and understand, but we've tried to do as little as possible to avoid enforcing any unnecessarily rigid opinions.

When you're adapting code from Tailwind Plus for your own projects, you should break the examples down into smaller components as necessary to achieve whatever level of reuse you need for your project.

For example, you might start with this stacked list component:

```html
<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="person in people" :key="person.email" class="flex py-4">
      <img class="size-10 rounded-full" :src="person.image" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
        <p class="text-sm text-gray-500">{{ person.email }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  const people = [\
    {\
      name: 'Calvin Hawkins',\
      email: 'calvin.hawkins@example.com',\
      image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',\
    },\
    {\
      name: 'Kristen Ramos',\
      email: 'kristen.ramos@example.com',\
      image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',\
    },\
    {\
      name: 'Ted Fox',\
      email: 'ted.fox@example.com',\
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',\
    },\
  ]

  export default {
    setup() {
      return {
        people,
      }
    },
  }
</script>
```

After adapting the content for your own project, breaking it down into separate components, and wiring up your data source, it might look more like this:

```html
<!-- HockeyTeamList.vue -->
<template>
  <ul class="divide-y divide-gray-200">
    <HockeyTeamItem v-for="team in teams" :key="team.id" :team="team" />
  </ul>
</template>

<script>
  export default {
    props: {
      teams: Array,
    },
  }
</script>

<!-- HockeyTeamListItem.vue -->
<template>
  <li class="flex py-4">
    <img class="size-10 rounded-full" :src="team.logo" alt="" />
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">{{ team.name }}</p>
      <p class="text-sm text-gray-500">{{ team.city }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      team: Object,
    },
  }
</script>
```

Tailwind Plus is more like a set of blueprints, patterns, and ideas than a rigid UI kit. The code you end up with at the end of the day is _yours_, and you can factor it however you like.

## On this page

- [Installing dependencies](https://tailwindcss.com/plus/ui-blocks/documentation/using-vue#installing-dependencies)
- [Creating components](https://tailwindcss.com/plus/ui-blocks/documentation/using-vue#creating-components)

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