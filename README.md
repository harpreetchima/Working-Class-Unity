# Development Guide & Build Instructions

Welcome to the WCU Website project! This application is built with a modern stack featuring **Nuxt 4**, **Tailwind CSS 4**, and **DaisyUI 5**.

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com) (Vue 3)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Component Library**: [DaisyUI 5](https://daisyui.com/docs/v5/)
- **Internationalization**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
- **Icons**: Inline SVGs / Heroicons (via Tailwind)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Latest LTS version recommended (v18+).
- **Package Manager**: `npm` (bundled with Node.js).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd wcu-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## 📂 Project Structure

This project follows the **Nuxt 4** directory structure, where the application source code resides in the `app/` directory.

```text
wcu-website/
├── app/
│   ├── assets/          # Static assets (CSS, images)
│   ├── components/      # Vue components (Navbar, etc.)
│   ├── layouts/         # Layout wrappers (default.vue)
│   ├── pages/           # Application routes/views
│   └── app.vue          # Root component
├── i18n/
│   └── locales/         # Translation JSON files
├── public/              # Public static files (favicon, logos)
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Styling & Theming

We use **Tailwind CSS 4** and **DaisyUI 5**, which introduces a CSS-first configuration approach. **We do not use `tailwind.config.js`**.

### Configuration

All theme and style configurations are located in:
`app/assets/css/main.css`

This file contains:
1.  **Tailwind Import**: `@import "tailwindcss";`
2.  **DaisyUI Plugin**: `@plugin "daisyui"` configuration.
3.  **Theme Definitions**: Custom themes defined using CSS variables and OKLCH color spaces.

### Themes

We have defined two custom themes:

*   **`wculight`** (Default): Light mode theme.
*   **`wcudark`**: Dark mode theme (activates via `prefers-color-scheme: dark`).

**Theme Logic:**
Themes are configured in `main.css` using the new DaisyUI 5 syntax:
```css
@plugin "daisyui" {
  themes: wculight --default, wcudark --prefersdark;
}
```

### Colors

We use semantic color names provided by DaisyUI. When developing, **always use these semantic classes** instead of hardcoded hex values to ensure dark mode compatibility.

| Class | Use Case |
| :--- | :--- |
| `primary` | Main brand color (Orange Yellow) |
| `secondary` | Secondary brand color (Navy/Sky Blue) |
| `accent` | Accent highlights (Red/Coral) |
| `neutral` | Dark/Desaturated UI elements |
| `base-100` | Page background |
| `base-content` | Default text color |

### Typography

We use `@tailwindcss/typography` for rich text content (like blog posts or documentation pages).
*   Add the `prose` class to any container rendering Markdown or block text.
*   Example: `<article class="prose lg:prose-xl">...</article>`

### Page Layout & Widths

We follow an industry-standard width system to ensure a consistent, polished aesthetic.

**Standard Container Pattern:**
```html
<section class="py-12 md:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section content -->
  </div>
</section>
```

**Width Tokens:**

| Class | Width | Use Case |
| :--- | :--- | :--- |
| `max-w-7xl` | 1280px | **Primary** - Full-width sections, feature grids, cards |
| `max-w-5xl` | 1024px | **Focused** - Forms, medium-density content |
| `max-w-3xl` | 768px | **Prose** - Long-form text, articles, FAQs |
| `max-w-2xl` | 672px | **Narrow** - Single-column forms, centered CTAs |

**Responsive Padding:** Always use `px-4 sm:px-6 lg:px-8` (16px → 24px → 32px)

**Key Rules:**
*   The navbar uses `max-w-7xl`, so all page containers should match for alignment.
*   Use `max-w-7xl` as the outer container, then nest narrower widths for specific content.
*   **Do NOT use** the Tailwind `container` class; use explicit `max-w-*` classes instead.

## 🧩 Components & Layouts

### Navbar & Logo Switching

The `Navbar.vue` component handles responsive navigation and automatic logo switching based on the active theme.

*   **Logo Logic**: The logo dynamically switches between `/logo_dark.svg` (for light backgrounds) and `/logo_light.svg` (for dark backgrounds).
*   **Implementation**: A `MutationObserver` in `Navbar.vue` watches for changes to the `data-theme` attribute or system preference to update the `logoSrc`.

### Know Your Rights Navigation

We use a centralized architecture for the "Know Your Rights" pages to ensure navigation links are automatically updated across all pages when a new resource is added.

**How it works:**
1.  **Registry**: `app/data/know-your-rights.ts` acts as the single source of truth. It exports an array of resources with their slugs, i18n keys, and icons.
2.  **Component**: `app/components/KnowYourRightsNav.vue` imports this registry. It uses the current route to intelligently filter out the *active* page from the list of links, so users only see links to *other* resources.
3.  **Pages**: Each page in `app/pages/know-your-rights/` simply includes `<KnowYourRightsNav />` at the bottom.

**Adding a new resource:**
1.  Add the new resource entry to `app/data/know-your-rights.ts`.
2.  Create the new Vue page file.
3.  Add the corresponding title and description keys to the localization files (`i18n/locales/*.json`).

### Campaign Data Architecture

The campaign system follows a **centralized data registry pattern** where data is separated from the UI components.

**Data Flow:**
1.  **Registry**: `app/data/campaigns.ts` is the single source of truth. It exports an array of campaign objects containing metadata (ID, type, status, events) and references to i18n keys.
2.  **Display**: `app/pages/campaigns/index.vue` fetches this data to render the list, and `app/components/CampaignCard.vue` handles the display logic for each card.

**Managing Campaigns:**
*   **Editing Text**: Update the corresponding keys in the locale files (`i18n/locales/*.json`) under the `campaigns` object.
*   **Adding a Campaign**:
    1.  Add a new campaign object to `app/data/campaigns.ts`.
    2.  Add the new title and description keys to all locale files.
    3.  Add the campaign image to `public/images/campaigns/`.

### Icons

We currently use inline SVGs for icons. When adding new icons, ensure they are accessible and scale correctly with Tailwind classes (e.g., `h-5 w-5`).

## 🌍 Internationalization (i18n)

We support multiple languages using `@nuxtjs/i18n`.

### Adding Translations

1.  **Locate Locale Files**: `i18n/locales/`
    *   `en.json`: English
    *   `es.json`: Spanish
    *   `pa.json`: Punjabi
2.  **Add Keys**: Ensure new keys are added to **ALL** locale files to effectively support switching languages.

### Usage in Components

*   **Template**: `{{ $t('nav.about') }}`
*   **Links**: Use `<NuxtLinkLocale to="about">` instead of `<NuxtLink to="/about">` to preserve the active language prefix.
*   **Switching**: Use `switchLocalePath('es')` to generate the URL for a language switch.

## 📦 Production Build

To build the application for production:

1.  **Build**:
    ```bash
    npm run build
    ```
    This generates the `.output` directory.

2.  **Preview**:
    ```bash
    npm run preview
    ```
    This starts a server to preview the production build locally.

## 📚 Resources

*   [Nuxt 4 Documentation](https://nuxt.com/docs)
*   [Tailwind CSS 4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
*   [DaisyUI 5 Documentation](https://daisyui.com/docs/v5/)