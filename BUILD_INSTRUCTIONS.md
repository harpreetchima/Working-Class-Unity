# Build Instructions & Development Guidelines

## Project Setup

This project is built with [Nuxt](https://nuxt.com), [Tailwind CSS](https://tailwindcss.com), and [DaisyUI](https://daisyui.com).

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

```bash
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Styling Guidelines

### Typography Plugin

We have integrated the [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin (`@tailwindcss/typography`). This plugin provides a set of `prose` classes that you can use to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).

**IMPORTANT:** For any block of content that requires standard formatting (paragraphs, headings, lists, blockquotes, etc.), you **MUST** use the `prose` class on the container element.

#### Usage Example

```html
<article class="prose lg:prose-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
```

#### Why use `prose`?

1.  **Consistency:** Ensures all textual content follows a consistent visual hierarchy and spacing.
2.  **DaisyUI Compatibility:** The `prose` class automatically adapts to your active DaisyUI theme (colors, fonts, etc.).
3.  **Efficiency:** Saves you from having to manually style every `h1`, `p`, `ul`, `li`, etc.

### DaisyUI Components

Utilize [DaisyUI components](https://daisyui.com/components/) whenever possible to maintain design consistency and speed up development.

## Production Build

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## DaisyUI Theming

### Overview

This project uses custom DaisyUI themes tailored to our organization's brand identity. The theme configuration is defined in [`app/assets/css/main.css`](wcu-website/app/assets/css/main.css:1).

### Available Themes

We have two custom themes:

- **`wculight`** - Our light theme (default)
- **`wcudark`** - Our dark theme (activates automatically based on system preferences)

### How Themes Work

Themes automatically switch based on the user's system dark mode preference:
- Light mode users see the `wculight` theme
- Dark mode users see the `wcudark` theme

All components automatically adapt to the active theme because they use semantic color names (e.g., `bg-base-100`, `text-primary`, `btn-secondary`).

### Theme Configuration Location

Themes are defined in [`app/assets/css/main.css`](wcu-website/app/assets/css/main.css:1) using DaisyUI's v5 plugin syntax:

```css
@plugin "daisyui" {
  themes: wculight --default, wcudark --prefersdark;
}

@plugin "daisyui/theme" {
  name: "wculight";
  default: true;
  /* ... color variables ... */
}

@plugin "daisyui/theme" {
  name: "wcudark";
  default: false;
  prefersdark: true;
  /* ... color variables ... */
}
```

### Manually Setting a Theme

To force a specific theme on an element or page, use the `data-theme` attribute:

```html
<!-- Force light theme -->
<div data-theme="wculight">
  <!-- Content will use light theme regardless of system preference -->
</div>

<!-- Force dark theme -->
<div data-theme="wcudark">
  <!-- Content will use dark theme regardless of system preference -->
</div>
```

You can apply this to the `<html>` tag to affect the entire page.

### Brand Colors

Our organization's brand colors are defined in the theme and should **NOT** be modified without approval:

#### Primary Brand Colors (Consistent Across Themes)
- **Primary**: `#ff9f48` (Orange) - Main brand color used for primary actions and highlights
- **Secondary**: Varies by theme
  - Light: `#04334f` (Navy Blue)
  - Dark: `#38bdf8` (Sky Blue)
- **Accent**: Varies by theme
  - Light: `#ef2525` (Red)
  - Dark: `#ff6b6b` (Coral Red)

#### When You Can Customize Colors

✅ **Allowed**:
- Modifying `base-*` colors for different background shades
- Adjusting `info`, `success`, `warning`, `error` semantic colors
- Changing border radius values (`--radius-*`)
- Modifying size values (`--size-*`)

❌ **Not Allowed Without Approval**:
- Changing `--color-primary` (#ff9f48)
- Modifying primary, secondary, or accent content colors
- Altering the color scheme fundamentals

### Logo Switching Based on Theme

Our organization has separate logos for light and dark modes located in [`wcu-information/`](wcu-information):
- [`logo_light.svg`](wcu-information/logo_light.svg:1) - For use on dark backgrounds
- [`logo_dark.svg`](wcu-information/logo_dark.svg:1) - For use on light backgrounds

#### Implementation Example

To display the correct logo based on the active theme in a Vue component:

```vue
<template>
  <img 
    :src="logoSrc" 
    alt="Organization Logo" 
    class="h-12 w-auto"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const logoSrc = ref('/wcu-information/logo_dark.svg')

onMounted(() => {
  // Function to update logo based on theme
  const updateLogo = () => {
    const theme = document.documentElement.getAttribute('data-theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'wcudark' : 'wculight')
    
    logoSrc.value = theme === 'wcudark' 
      ? '/wcu-information/logo_light.svg'  // Light logo on dark background
      : '/wcu-information/logo_dark.svg'   // Dark logo on light background
  }
  
  updateLogo()
  
  // Listen for theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogo)
  
  // Also listen for manual theme changes
  const observer = new MutationObserver(updateLogo)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})
</script>
```

### Implementing a Manual Theme Toggle

To allow users to manually switch between themes, you can use the [`theme-change`](https://github.com/saadeghi/theme-change) library:

#### Installation

```bash
npm install theme-change
```

#### Usage in a Component

```vue
<template>
  <label class="swap swap-rotate">
    <!-- Sun icon for light mode -->
    <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
    </svg>
    
    <!-- Moon icon for dark mode -->
    <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
    </svg>
    
    <input 
      type="checkbox" 
      class="theme-controller" 
      value="wcudark"
      data-toggle-theme="wculight,wcudark"
      data-act-class="swap-active"
    />
  </label>
</template>

<script setup>
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
  // false parameter disables the default behavior of saving to localStorage
  // if you want to persist user's choice across sessions
})
</script>
```

### Adding Additional Custom Themes

To add a new custom theme:

1. **Define the theme** in [`app/assets/css/main.css`](wcu-website/app/assets/css/main.css:1):

```css
@plugin "daisyui/theme" {
  name: "mynewtheme";
  default: false;
  prefersdark: false;
  color-scheme: "light";
  
  /* Define all color variables */
  --color-base-100: #ffffff;
  --color-base-200: #f5f5f5;
  --color-base-300: #e5e5e5;
  --color-base-content: #1f1f1f;
  --color-primary: #ff9f48;
  /* ... add all other required colors ... */
  
  /* Border radius values */
  --radius-selector: 0.25rem;
  --radius-field: 0.25rem;
  --radius-box: 0.25rem;
  
  /* Size values */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  
  /* Effects */
  --border: 1px;
  --depth: 1;
  --noise: 1;
}
```

2. **Enable the theme** in the DaisyUI plugin configuration:

```css
@plugin "daisyui" {
  themes: wculight --default, wcudark --prefersdark, mynewtheme;
}
```

3. **Use the theme** by setting `data-theme="mynewtheme"` on any HTML element.

### Required Color Variables

When creating a new theme, you must define these color variables:

**Base Colors** (backgrounds and surfaces):
- `--color-base-100` - Main background
- `--color-base-200` - Slightly darker background
- `--color-base-300` - Even darker background  
- `--color-base-content` - Text color on base backgrounds

**Brand Colors**:
- `--color-primary` & `--color-primary-content`
- `--color-secondary` & `--color-secondary-content`
- `--color-accent` & `--color-accent-content`

**Semantic Colors**:
- `--color-neutral` & `--color-neutral-content`
- `--color-info` & `--color-info-content`
- `--color-success` & `--color-success-content`
- `--color-warning` & `--color-warning-content`
- `--color-error` & `--color-error-content`

**Other Settings**:
- `--radius-selector`, `--radius-field`, `--radius-box`
- `--size-selector`, `--size-field`
- `--border`, `--depth`, `--noise`

### DaisyUI Documentation References

For more information about DaisyUI theming and customization, refer to these official documentation pages:

- **[Themes Overview](https://daisyui.com/docs/themes/)** - Understanding how themes work
- **[Colors](https://daisyui.com/docs/colors/)** - Color system and semantic naming
- **[Customize](https://daisyui.com/docs/customize/)** - How to customize components
- **[Config](https://daisyui.com/docs/config/)** - Plugin configuration options
- **[Base Style](https://daisyui.com/docs/base/)** - Understanding base styles
- **[Utilities](https://daisyui.com/docs/utilities/)** - Utility classes and CSS variables

### Troubleshooting

**Theme not switching automatically?**
- Ensure your browser/OS dark mode is properly configured
- Check that the `color-scheme` property is set correctly in theme definitions
- Clear your browser cache and restart the dev server

**Colors look wrong?**
- Verify all required color variables are defined in your theme
- Check that you're using semantic color names (e.g., `bg-primary`) rather than hardcoded colors
- Ensure the `color-scheme` property matches your theme's appearance (light/dark)

**Manual theme toggle not working?**
- Make sure `theme-change` library is installed
- Verify `themeChange()` is called in `onMounted` lifecycle hook
- Check that `data-theme` attribute values match your theme names exactly