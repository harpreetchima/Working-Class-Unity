# Scrolling Hero Section Specification

This document provides complete specifications for implementing a hero section with animated, scrolling image columns showcasing member photos. This design is inspired by modern SaaS landing pages and adapted to fit the WCU design system.

## Table of Contents

- [Design Overview](#design-overview)
- [Layout Structure](#layout-structure)
- [Color Specifications](#color-specifications)
- [Typography](#typography)
- [Image Grid Component](#image-grid-component)
- [Animation CSS](#animation-css)
- [Responsive Behavior](#responsive-behavior)
- [Accessibility](#accessibility)
- [Complete Implementation Example](#complete-implementation-example)

---

## Design Overview

The hero section uses a **split-layout design**:

| Left Side | Right Side |
|-----------|------------|
| Organization name | 3-column image grid |
| Main headline (bold, large) | Images scroll in alternating directions |
| Body copy paragraph | Gradient overlays fade edges |
| Two CTA buttons | |

**Visual Flow:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────┐    ┌───────────────────────────┐  │
│  │ Working Class Unity │    │  ┌────┐ ┌────┐ ┌────┐    │  │
│  │                     │    │  │ ↓  │ │ ↑  │ │ ↓  │    │  │
│  │ THEY HAVE THEIR     │    │  │img │ │img │ │img │    │  │
│  │ PARTIES. WE NEED    │    │  │    │ │    │ │    │    │  │
│  │ OUR OWN ORG.        │    │  ├────┤ ├────┤ ├────┤    │  │
│  │                     │    │  │img │ │img │ │img │    │  │
│  │ Body paragraph...   │    │  │    │ │    │ │    │    │  │
│  │                     │    │  ├────┤ ├────┤ ├────┤    │  │
│  │ [Primary] [Outline] │    │  │img │ │img │ │img │    │  │
│  └─────────────────────┘    │  └────┘ └────┘ └────┘    │  │
│                              └───────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Layout Structure

### Container Pattern

Follow the standard WCU container pattern defined in [`README.md`](../../README.md):

```html
<section class="py-16 md:py-24 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Left: Text Content -->
      <div class="space-y-6">...</div>
      
      <!-- Right: Scrolling Image Grid -->
      <div class="relative">...</div>
    </div>
  </div>
</section>
```

### Width Specifications

| Element | Class | Actual Width |
|---------|-------|--------------|
| Outer container | `max-w-7xl` | 1280px |
| Content column | Auto (grid) | ~50% on lg+ |
| Image grid | Auto (grid) | ~50% on lg+ |

### Spacing

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding Y | `py-16` (64px) | `md:py-20` (80px) | `md:py-24` (96px) |
| Horizontal padding | `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px) |
| Grid gap | `gap-8` (32px) | - | `lg:gap-12` (48px) |
| Content spacing | `space-y-6` (24px) | - | - |

---

## Color Specifications

### Light Theme (`wculight`)

| Element | Color Variable | Hex Value | Usage |
|---------|---------------|-----------|-------|
| Background | `bg-base-100` | `#f7f9fc` | Section background |
| Text | `text-base-content` | `#232323` | Headlines, body |
| Muted text | `text-base-content/70` | `#232323` at 70% | Subtitles, captions |
| Primary button | `btn-primary` | `#ff9f48` | Main CTA |
| Outline button | `btn-outline` | Border: current | Secondary CTA |
| Gradient fade | `from-base-100` | `#f7f9fc` | Image edge blending |

### Dark Theme (`wcudark`)

| Element | Color Variable | Hex Value | Usage |
|---------|---------------|-----------|-------|
| Background | `bg-base-100` | `#090909` | Section background |
| Text | `text-base-content` | `#E5E7EB` | Headlines, body |
| Muted text | `text-base-content/70` | `#E5E7EB` at 70% | Subtitles, captions |
| Primary button | `btn-primary` | `#ff9f48` | Main CTA (same) |
| Gradient fade | `from-base-100` | `#090909` | Image edge blending |

**Important:** Always use semantic color classes (`bg-base-100`, `text-base-content`) rather than hardcoded hex values to ensure proper theme switching.

---

## Typography

### Font Family

All text uses **Acumin Pro** as defined in [`main.css`](../app/assets/css/main.css):

```css
--font-sans: "Acumin Pro", ui-sans-serif, system-ui, sans-serif;
--font-heading: "Acumin Pro", sans-serif;
```

### Text Styles

| Element | Classes | Size | Weight |
|---------|---------|------|--------|
| Org name | `text-sm font-semibold text-base-content` | 14px | 600 |
| Headline | `text-4xl md:text-5xl lg:text-6xl font-bold text-base-content` | 36px → 48px → 60px | 700 |
| Body | `text-lg text-base-content/70` | 18px | 400 |
| Button text | Inherited from `btn` | Per DaisyUI | - |

### Headline Example

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content">
  They Have Their Parties.<br />
  We Need Our Own Organization.
</h1>
```

---

## Image Grid Component

### Structure

The image grid consists of three vertical columns that scroll infinitely in alternating directions.

```html
<div class="relative h-[500px] md:h-[600px] overflow-hidden">
  <!-- Three-column grid -->
  <div class="grid grid-cols-3 gap-3 md:gap-4 h-full">
    <!-- Column 1: Scrolls DOWN -->
    <div class="flex flex-col gap-3 md:gap-4 animate-scroll-down">
      <!-- Images repeat twice for seamless loop -->
      <img src="..." class="w-full aspect-[3/4] object-cover rounded-box" alt="..." />
      <!-- ... more images ... -->
    </div>
    
    <!-- Column 2: Scrolls UP -->
    <div class="flex flex-col gap-3 md:gap-4 animate-scroll-up">
      <!-- Images repeat twice for seamless loop -->
      <img src="..." class="w-full aspect-[3/4] object-cover rounded-box" alt="..." />
      <!-- ... more images ... -->
    </div>
    
    <!-- Column 3: Scrolls DOWN -->
    <div class="flex flex-col gap-3 md:gap-4 animate-scroll-down">
      <!-- Images repeat twice for seamless loop -->
      <img src="..." class="w-full aspect-[3/4] object-cover rounded-box" alt="..." />
      <!-- ... more images ... -->
    </div>
  </div>
  
  <!-- Gradient overlays for edge fading -->
  <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-100 to-transparent pointer-events-none" />
  <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
</div>
```

### Image Specifications

| Property | Value | Notes |
|----------|-------|-------|
| Aspect ratio | `aspect-[3/4]` | Portrait orientation |
| Object fit | `object-cover` | Crops to fill container |
| Border radius | `rounded-box` | 0.25rem per theme |
| Gap between images | `gap-3 md:gap-4` | 12px → 16px |
| Minimum images per column | 4-6 | Duplicated for seamless loop |

### Image Duplication for Seamless Loop

To create a seamless infinite scroll, duplicate the images in each column:

```html
<div class="flex flex-col gap-3 animate-scroll-down">
  <!-- Original set -->
  <img src="/images/members/photo1.jpg" ... />
  <img src="/images/members/photo2.jpg" ... />
  <img src="/images/members/photo3.jpg" ... />
  <img src="/images/members/photo4.jpg" ... />
  
  <!-- Duplicate set for seamless loop -->
  <img src="/images/members/photo1.jpg" ... />
  <img src="/images/members/photo2.jpg" ... />
  <img src="/images/members/photo3.jpg" ... />
  <img src="/images/members/photo4.jpg" ... />
</div>
```

---

## Animation CSS

Add these keyframes and animation classes to [`main.css`](../app/assets/css/main.css):

```css
/* Scrolling Hero Animations */
@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scroll-down {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-scroll-up {
  animation: scroll-up 30s linear infinite;
}

.animate-scroll-down {
  animation: scroll-down 30s linear infinite;
}

/* Optional: Pause animation on hover */
.animate-scroll-up:hover,
.animate-scroll-down:hover {
  animation-play-state: paused;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-scroll-up,
  .animate-scroll-down {
    animation: none;
  }
}
```

### Animation Timing

| Property | Value | Notes |
|----------|-------|-------|
| Duration | `30s` | Adjust for faster/slower scroll |
| Timing function | `linear` | Constant speed |
| Iteration | `infinite` | Loops forever |
| Transform distance | `-50%` | Because images are duplicated |

---

## Responsive Behavior

### Breakpoint Strategy

| Breakpoint | Layout Change |
|------------|---------------|
| Default (mobile) | Single column, stacked layout |
| `md` (768px) | Increased padding and gaps |
| `lg` (1024px) | Two-column side-by-side layout |

### Mobile-First Classes

```html
<!-- Section -->
<section class="py-16 md:py-20 lg:py-24">

<!-- Container -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<!-- Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<!-- Image grid height -->
<div class="relative h-[400px] md:h-[500px] lg:h-[600px]">

<!-- Typography -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">
```

### Mobile Considerations

On mobile screens (`< lg`):
- Image grid appears below text content
- Consider reducing grid height to `h-[400px]`
- Grid remains 3 columns but narrower
- May hide image grid entirely with `hidden lg:block` if content is priority

---

## Accessibility

### Required Attributes

```html
<!-- Images must have descriptive alt text -->
<img 
  src="/images/members/maria-rally.jpg" 
  alt="Maria speaking at the housing rights rally"
  class="w-full aspect-[3/4] object-cover rounded-box"
/>

<!-- Section landmark -->
<section aria-label="Hero section with member photos">

<!-- Reduced motion support (CSS) -->
@media (prefers-reduced-motion: reduce) {
  .animate-scroll-up,
  .animate-scroll-down {
    animation: none;
  }
}
```

### Semantic Structure

```html
<section aria-label="Welcome">
  <div>
    <!-- Use heading hierarchy -->
    <p class="text-sm">Working Class Unity</p>
    <h1>Main Headline</h1>
    <p>Body paragraph</p>
    
    <!-- Buttons are focusable -->
    <div class="flex gap-4">
      <NuxtLinkLocale to="/join" class="btn btn-primary">
        Join Working Class Unity
      </NuxtLinkLocale>
      <NuxtLinkLocale to="/events" class="btn btn-outline">
        See Upcoming Events
      </NuxtLinkLocale>
    </div>
  </div>
  
  <!-- Decorative images can use aria-hidden if purely decorative -->
  <div aria-hidden="true">
    <!-- Image grid -->
  </div>
</section>
```

---

## Complete Implementation Example

### Vue Component (`ScrollingHero.vue`)

```vue
<script setup>
// Define image arrays for each column
// Images should be duplicated for seamless looping
const column1Images = [
  '/images/members/photo1.jpg',
  '/images/members/photo2.jpg',
  '/images/members/photo3.jpg',
  '/images/members/photo4.jpg',
  // Duplicate for seamless loop
  '/images/members/photo1.jpg',
  '/images/members/photo2.jpg',
  '/images/members/photo3.jpg',
  '/images/members/photo4.jpg',
]

const column2Images = [
  '/images/members/photo5.jpg',
  '/images/members/photo6.jpg',
  '/images/members/photo7.jpg',
  '/images/members/photo8.jpg',
  // Duplicate for seamless loop
  '/images/members/photo5.jpg',
  '/images/members/photo6.jpg',
  '/images/members/photo7.jpg',
  '/images/members/photo8.jpg',
]

const column3Images = [
  '/images/members/photo9.jpg',
  '/images/members/photo10.jpg',
  '/images/members/photo11.jpg',
  '/images/members/photo12.jpg',
  // Duplicate for seamless loop
  '/images/members/photo9.jpg',
  '/images/members/photo10.jpg',
  '/images/members/photo11.jpg',
  '/images/members/photo12.jpg',
]
</script>

<template>
  <section class="py-16 md:py-24 overflow-hidden bg-base-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Left: Text Content -->
        <div class="space-y-6">
          <p class="text-sm font-semibold text-base-content">
            Working Class Unity
          </p>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content">
            {{ $t('home.hero.title') }}
          </h1>
          
          <p class="text-lg text-base-content/70 max-w-lg">
            {{ $t('home.hero.description') }}
          </p>
          
          <div class="flex flex-wrap gap-4 pt-2">
            <NuxtLinkLocale to="/join" class="btn btn-primary">
              {{ $t('home.hero.primary_cta') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/events" class="btn btn-outline">
              {{ $t('home.hero.secondary_cta') }}
            </NuxtLinkLocale>
          </div>
        </div>
        
        <!-- Right: Scrolling Image Grid -->
        <div class="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div class="grid grid-cols-3 gap-3 md:gap-4 h-full">
            
            <!-- Column 1: Scrolls DOWN -->
            <div class="flex flex-col gap-3 md:gap-4 animate-scroll-down">
              <img 
                v-for="(img, index) in column1Images" 
                :key="`col1-${index}`"
                :src="img" 
                :alt="`WCU member photo ${index + 1}`"
                class="w-full aspect-[3/4] object-cover rounded-box"
              />
            </div>
            
            <!-- Column 2: Scrolls UP -->
            <div class="flex flex-col gap-3 md:gap-4 animate-scroll-up">
              <img 
                v-for="(img, index) in column2Images" 
                :key="`col2-${index}`"
                :src="img" 
                :alt="`WCU member photo ${index + 1}`"
                class="w-full aspect-[3/4] object-cover rounded-box"
              />
            </div>
            
            <!-- Column 3: Scrolls DOWN -->
            <div class="flex flex-col gap-3 md:gap-4 animate-scroll-down">
              <img 
                v-for="(img, index) in column3Images" 
                :key="`col3-${index}`"
                :src="img" 
                :alt="`WCU member photo ${index + 1}`"
                class="w-full aspect-[3/4] object-cover rounded-box"
              />
            </div>
          </div>
          
          <!-- Gradient overlays -->
          <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-100 to-transparent pointer-events-none" />
          <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation styles can also be in main.css globally */
@keyframes scroll-up {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes scroll-down {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

.animate-scroll-up {
  animation: scroll-up 30s linear infinite;
}

.animate-scroll-down {
  animation: scroll-down 30s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-scroll-up,
  .animate-scroll-down {
    animation: none;
  }
}
</style>
```

---

## Implementation Checklist

Before deploying, verify:

- [ ] All images are optimized (WebP format, max 200KB each)
- [ ] Images have appropriate `alt` text
- [ ] Animation pauses for `prefers-reduced-motion`
- [ ] Gradient colors use semantic `base-100` (works in both themes)
- [ ] Layout is responsive (test at 320px, 768px, 1024px, 1440px)
- [ ] i18n keys are added to all locale files
- [ ] Component follows WCU styling patterns (see existing pages)
- [ ] Member photos have appropriate permissions/consent

---

## File Locations

| File | Purpose |
|------|---------|
| `app/components/ScrollingHero.vue` | Reusable hero component |
| `app/assets/css/main.css` | Animation keyframes (if global) |
| `public/images/members/` | Member photo assets |
| `i18n/locales/*.json` | Translation keys for hero text |

---

## Related Documentation

- [`README.md`](../../README.md) - Project overview and styling guide
- [`page-width-specification.md`](./page-width-specification.md) - Container width standards
- [`knowledgebase/daisyui_llm.txt`](../../knowledgebase/daisyui_llm.txt) - DaisyUI 5 component reference