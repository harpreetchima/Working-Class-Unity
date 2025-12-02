# Nuxt 4 + Tailwind CSS v4 + DaisyUI v5 Starter Template

This guide provides a reusable template for setting up a modern web application using the following technology stack:
- **Framework:** Nuxt 4.x (Vue 3)
- **Styling:** Tailwind CSS v4.1
- **UI Component Library:** DaisyUI v5.5.5
- **Bundler:** Vite

## 1. Reference Documentation
The following documentation files from the local knowledgebase were used to derive this setup:

*   **Nuxt Installation:** `knowledgebase/Nuxt 4.x Documentation 2025-11-22/.../nuxt.com_docs_4.x_getting-started_installation.md`
*   **DaisyUI Integration:** `knowledgebase/DaisyUI 5.5.5 2025-11-24/.../daisyui.com_docs_install_nuxt_.md`
*   **Tailwind with Vite:** `knowledgebase/TailwindCSS 4.1 2025-11-23/.../tailwindcss.com_docs_installation_using-vite.md`
*   **Vue Quick Start:** `knowledgebase/Vue 3 2025-11-23/vuejs.org_guide_quick-start.md`

## 2. Prerequisites
*   Node.js version 20.x or higher (Recommended: Active LTS)
*   Visual Studio Code with the official Vue extension

## 3. Implementation Steps

### Step 1: Initialize Project
Open your terminal and run the following command to scaffold a new Nuxt project:

```bash
npx nuxi@latest init <your-project-name>
cd <your-project-name>
npm install
```

### Step 2: Install Dependencies
Install Tailwind CSS, the Tailwind Vite plugin, and DaisyUI. Note that we are using the new `@tailwindcss/vite` package for seamless integration.

```bash
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

### Step 3: Configure Nuxt & Vite
Update your `nuxt.config.ts` file to register the Tailwind Vite plugin. This replaces the older `postcss.config.js` method.

**File:** `nuxt.config.ts`
```typescript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01", // Or your current date
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
});
```

### Step 4: Create CSS Entry Point
Create a CSS file to import Tailwind and DaisyUI. This uses the new Tailwind v4 syntax.

**File:** `app/assets/css/main.css`
(You may need to create the `app/assets/css` directories first)
```css
@import "tailwindcss";
@plugin "daisyui";
```

### Step 5: Verify Setup
Run the development server to ensure everything is working correctly.

```bash
npm run dev
```

## 4. Basic Layout Structure

### Default Layout
Create a layout file to include a Navbar and Footer on every page.

**File:** `layouts/default.vue`
```vue
<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
          <NuxtLink to="/" class="btn btn-ghost text-xl">My Org</NuxtLink>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/join">Join Us</NuxtLink></li>
          </ul>
        </div>
      </div>
    </header>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </aside>
    </footer>
  </div>
</template>
```

### Home Page Example
**File:** `pages/index.vue`
```vue
<template>
  <div class="hero min-h-[50vh] bg-base-200 rounded-box">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to Our Mission</h1>
        <p class="py-6">
          We are dedicated to making a difference. Join our team and help us build a better future.
        </p>
        <NuxtLink to="/join" class="btn btn-primary">Get Started</NuxtLink>
      </div>
    </div>
  </div>
  
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Our Values</h2>
        <p>Integrity, Innovation, and Impact.</p>
      </div>
    </div>
    <!-- Add more cards as needed -->
  </div>
</template>
```

### Join Page Example
**File:** `pages/join.vue`
```vue
<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Join Our Team</h1>
    
    <form class="flex flex-col gap-4">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Full Name</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
      </label>

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input type="email" placeholder="Type here" class="input input-bordered w-full" />
      </label>
      
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Department</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </label>

      <button class="btn btn-primary mt-4">Submit Application</button>
    </form>
  </div>
</template>