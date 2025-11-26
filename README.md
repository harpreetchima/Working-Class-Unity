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
| `primary` | Main brand color (Orange) |
| `secondary` | Secondary brand color (Navy/Sky Blue) |
| `accent` | Accent highlights (Red/Coral) |
| `neutral` | Dark/Desaturated UI elements |
| `base-100` | Page background |
| `base-content` | Default text color |

### Typography

We use `@tailwindcss/typography` for rich text content (like blog posts or documentation pages).
*   Add the `prose` class to any container rendering Markdown or block text.
*   Example: `<article class="prose lg:prose-xl">...</article>`

## 🧩 Components & Layouts

### Navbar & Logo Switching

The `Navbar.vue` component handles responsive navigation and automatic logo switching based on the active theme.

*   **Logo Logic**: The logo dynamically switches between `/logo_dark.svg` (for light backgrounds) and `/logo_light.svg` (for dark backgrounds).
*   **Implementation**: A `MutationObserver` in `Navbar.vue` watches for changes to the `data-theme` attribute or system preference to update the `logoSrc`.

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