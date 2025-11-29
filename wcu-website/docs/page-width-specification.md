# WCU Website Page Width Specification

## Overview

This document defines the industry-standard page width system for the WCU website, ensuring a consistent, polished "New SaaS" aesthetic similar to Linear, Stripe, Notion, and Vercel.

---

## Industry Research Summary

Modern SaaS websites use the following width patterns:

| Company | Primary Content Width | Prose Width | Key Characteristics |
|---------|----------------------|-------------|---------------------|
| **Linear** | ~1200px | ~720px | Clean, generous whitespace |
| **Stripe** | ~1200px | ~680px | Sophisticated, ample margins |
| **Notion** | ~1200px landing / ~900px docs | ~700px | Adaptive based on content |
| **Vercel** | ~1200px | ~720px | Modern, minimal |

**Conclusion**: The industry standard is **1200-1280px** for primary content, with narrower widths for prose/reading content.

---

## Recommended Width System

### Primary Container: `max-w-7xl` (1280px)

This matches the navbar width and provides excellent readability on modern displays while maintaining the spacious feel of premium SaaS sites.

```html
<!-- Standard page section container -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content here -->
</div>
```

### Width Tokens Reference

| Tailwind Class | Pixel Width | Use Case |
|----------------|-------------|----------|
| `max-w-7xl` | 1280px | **Primary**: Full-width sections, feature grids, cards |
| `max-w-5xl` | 1024px | **Focused**: Forms, medium-density content |
| `max-w-3xl` | 768px | **Prose**: Long-form text, articles, FAQs |
| `max-w-2xl` | 672px | **Narrow**: Single-column forms, centered CTAs |

---

## Standard Container Pattern

### The Core Pattern

Every page section should use this consistent pattern:

```html
<section class="py-12 md:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section content -->
  </div>
</section>
```

### Responsive Padding Scale

| Breakpoint | Class | Padding | Screen Width |
|------------|-------|---------|--------------|
| Default (mobile) | `px-4` | 16px (1rem) | < 640px |
| `sm:` (small) | `sm:px-6` | 24px (1.5rem) | ≥ 640px |
| `lg:` (large) | `lg:px-8` | 32px (2rem) | ≥ 1024px |

**Standard padding classes**: `px-4 sm:px-6 lg:px-8`

---

## Content Type Variations

### 1. Full-Width Sections (Cards, Grids, Features)
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Cards -->
  </div>
</div>
```

### 2. Centered Prose Content (Articles, FAQs)
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <!-- Long-form text content -->
    <article class="prose prose-lg">
      <!-- Article content -->
    </article>
  </div>
</div>
```

### 3. Hero Sections
```html
<section class="py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
      Hero Title
    </h1>
    <p class="mt-6 text-lg text-base-content/70 max-w-2xl mx-auto">
      Hero description
    </p>
  </div>
</section>
```

### 4. Focused Content (Forms, Single Cards)
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl mx-auto">
    <!-- Centered form or focused content -->
  </div>
</div>
```

---

## Navbar Alignment

The navbar already uses `max-w-7xl`, so all page content should align with this:

```html
<!-- Navbar (existing) -->
<nav class="sticky top-0 z-50 ...">
  <div class="navbar max-w-7xl mx-auto w-full">
    <!-- Navbar content -->
  </div>
</nav>

<!-- Page section (should match) -->
<section class="py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Content aligns with navbar -->
  </div>
</section>
```

---

## Implementation Checklist

### Files to Update

- [ ] `app/pages/check-in-coverage.vue` - Change `max-w-6xl` to `max-w-7xl`
- [ ] `app/pages/kyr.vue` - Change `max-w-6xl` to `max-w-7xl`, standardize padding
- [ ] `app/pages/join.vue` - Add `max-w-7xl` to container
- [ ] `app/pages/index.vue` - Add proper container structure
- [ ] `app/pages/about.vue` - Verify and update if needed
- [ ] `app/pages/campaigns/index.vue` - Verify and update if needed
- [ ] Any other page files using inconsistent widths

### Pattern Replacements

| Find | Replace With |
|------|--------------|
| `max-w-6xl mx-auto px-4 md:px-6 lg:px-8` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `container mx-auto px-4 max-w-6xl` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `container mx-auto px-4` (no max-w) | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |

### Key Changes

1. **Width**: `max-w-6xl` → `max-w-7xl` (1152px → 1280px)
2. **Padding**: `px-4 md:px-6 lg:px-8` → `px-4 sm:px-6 lg:px-8` (add `sm:` breakpoint)
3. **Remove `container`**: Use explicit `max-w-7xl` instead of Tailwind's `container` class

---

## Why `max-w-7xl` Over `max-w-6xl`?

1. **Navbar Alignment**: The navbar uses `max-w-7xl`; content should match
2. **Industry Standard**: 1280px is the most common width for premium SaaS sites
3. **Screen Real Estate**: Modern monitors are larger; 1280px uses space well without feeling cramped
4. **Grid Flexibility**: More room for 3-4 column layouts at larger breakpoints
5. **Visual Hierarchy**: Allows better contrast between full-width and prose sections

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                    WCU WIDTH STANDARD                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CONTAINER:     max-w-7xl mx-auto px-4 sm:px-6 lg:px-8     │
│                                                             │
│  WIDTHS:        max-w-7xl (1280px) - Primary content       │
│                 max-w-5xl (1024px) - Focused sections      │
│                 max-w-3xl (768px)  - Prose/reading         │
│                 max-w-2xl (672px)  - Narrow forms          │
│                                                             │
│  PADDING:       px-4      (16px)  - Mobile                 │
│                 sm:px-6   (24px)  - ≥640px                 │
│                 lg:px-8   (32px)  - ≥1024px                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Related Resources

- [Tailwind CSS Max-Width](https://tailwindcss.com/docs/max-width)
- [Tailwind CSS Container](https://tailwindcss.com/docs/container)
- [DaisyUI Documentation](https://daisyui.com)