# Modern SaaS Design Architecture: Know Your Rights ICE Encounter Pages

This document defines the design system and component patterns for transforming the Know Your Rights ICE encounter pages to a Modern SaaS aesthetic (Linear/Vercel/Stripe style).

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design System Specification](#2-design-system-specification)
3. [Component Patterns](#3-component-patterns)
4. [Page Structure Template](#4-page-structure-template)
5. [Before/After Comparison](#5-beforeafter-comparison)

---

## 1. Design Philosophy

Transform from "standard informational webpage" to "interactive tactical dashboard" by applying these principles:

- **Monochrome base** with sharp accent colors for status only
- **Flat but layered** using borders instead of shadows
- **Information hierarchy** through typography weight and spacing
- **Visual rhythm** through consistent vertical timeline navigation
- **Actionable clarity** using status indicators and script callouts

---

## 2. Design System Specification

### 2.1 Typography

| Element | Classes | Usage |
|---------|---------|-------|
| Page Title | `text-3xl md:text-4xl font-bold tracking-tight text-base-content` | Main page header |
| Section Label | `text-xs uppercase tracking-wide text-base-content/60` | Above section content |
| Section Header | `text-xl font-bold tracking-tight text-base-content` | Within cards/sections |
| Body Text | `text-sm text-base-content/80` | Primary content |
| Script Text | `font-mono text-sm` | "Say this" phrases |
| Step Numbers | `font-mono text-sm text-base-content/40` | Timeline markers |

### 2.2 Spacing

| Context | Classes |
|---------|---------|
| Page Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section Padding | `py-12 md:py-16` |
| Card Padding | `p-6` |
| Content Gap | `gap-6` (between cards), `gap-4` (within cards) |
| Timeline Gap | `py-3` (timeline items) |

### 2.3 Color Strategy

Use **semantic DaisyUI colors only** - no hardcoded hex values:

| Color | CSS Variable | Usage |
|-------|--------------|-------|
| `primary` | `#ff9f48` (light) | Timeline dots, accent borders, CTAs |
| `error` | `#ef2525` (light) | Critical warnings, "DO NOT" text |
| `warning` | `#facc15` | Caution indicators |
| `success` | `#22c55e` | Valid states, "DO" text, checkmarks |
| `info` | `#38bdf8` | Script callouts, tips |
| `base-content` | `#232323` (light) | Primary text |
| `base-200` | `oklch(95% 0.03 240)` | Card backgrounds, callout boxes |
| `base-300` | `oklch(92% 0.04 240)` | Borders, timeline lines |

**Color Application Rules:**
- No large color washes - use badges and small indicators
- Status colors only for badges: `badge-soft badge-error`, `badge-soft badge-warning`
- Timeline dots: `bg-primary` (small 3x3 circles)
- Border accents: `border-l-4 border-primary` for quotes

---

## 3. Component Patterns

### 3.1 Vertical Timeline Stepper

Replace numbered steps with a vertical timeline on the left rail:

```html
<ul class="timeline timeline-vertical timeline-compact">
  <!-- Step 1 -->
  <li>
    <div class="timeline-middle">
      <div class="w-3 h-3 rounded-full bg-primary"></div>
    </div>
    <div class="timeline-end py-3">
      <span class="text-xs uppercase tracking-wide text-base-content/60">Step Label</span>
      <h3 class="font-bold text-base">Entry Protocol</h3>
      <p class="text-sm text-base-content/70 mt-1">Description text...</p>
    </div>
    <hr class="bg-base-300"/>
  </li>
  
  <!-- Step 2 -->
  <li>
    <hr class="bg-base-300"/>
    <div class="timeline-middle">
      <div class="w-3 h-3 rounded-full bg-primary"></div>
    </div>
    <div class="timeline-end py-3">
      <span class="text-xs uppercase tracking-wide text-base-content/60">Step Label</span>
      <h3 class="font-bold text-base">Verification</h3>
      <p class="text-sm text-base-content/70 mt-1">Description text...</p>
    </div>
    <hr class="bg-base-300"/>
  </li>
</ul>
```

### 3.2 Script Callout - Say This

Monospace font with speech bubble styling:

```html
<div class="alert alert-soft alert-info">
  <div class="flex items-start gap-3">
    <!-- Speech bubble icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
    <div>
      <p class="text-xs uppercase tracking-wide text-base-content/60 mb-1">Say this</p>
      <p class="font-mono text-sm">"I do not consent to any searches. Am I free to go?"</p>
    </div>
  </div>
</div>
```

### 3.3 Critical Warning Badge

Small badge pill next to header instead of full background wash:

```html
<div class="flex items-center gap-3 mb-4">
  <h2 class="text-xl font-bold tracking-tight">Entry Protocol</h2>
  <span class="badge badge-soft badge-error">Critical</span>
</div>
```

### 3.4 Caution Badge

```html
<span class="badge badge-soft badge-warning">Caution</span>
```

### 3.5 Cards with Border

Replace `shadow-xl` with `card-border`:

```html
<div class="card card-border bg-base-100">
  <div class="card-body p-6">
    <!-- Card content -->
  </div>
</div>
```

Hover state for interactive cards:
```html
<div class="card card-border bg-base-100 hover:border-primary/50 transition-colors">
```

### 3.6 Document Verification Checklist Grid

2x2 grid for warrant check items:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <!-- Item 1 -->
  <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
    <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
      <!-- Court icon -->
      <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-sm">Court Name</p>
      <p class="text-xs text-base-content/60">Must show issuing court</p>
    </div>
    <span class="badge badge-soft badge-success text-xs">Required</span>
  </div>
  
  <!-- Item 2 -->
  <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
    <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
      <!-- User icon -->
      <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-sm">Your Name</p>
      <p class="text-xs text-base-content/60">Must match exactly</p>
    </div>
    <span class="badge badge-soft badge-success text-xs">Required</span>
  </div>
  
  <!-- Item 3 -->
  <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
    <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
      <!-- Calendar icon -->
      <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-sm">Recent Date</p>
      <p class="text-xs text-base-content/60">Check if still valid</p>
    </div>
    <span class="badge badge-soft badge-success text-xs">Required</span>
  </div>
  
  <!-- Item 4 -->
  <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
    <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
      <!-- Pen/Signature icon -->
      <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-sm">Judge Signature</p>
      <p class="text-xs text-base-content/60">Must be signed by judge</p>
    </div>
    <span class="badge badge-soft badge-success text-xs">Required</span>
  </div>
</div>
```

### 3.7 Decision Path Cards

For YES/NO decision branches, use border accents instead of color washes:

```html
<div class="grid md:grid-cols-2 gap-6">
  <!-- YES Path -->
  <div class="card card-border border-l-4 border-l-success">
    <div class="card-body p-5">
      <h3 class="font-bold text-base flex items-center gap-2">
        <span class="status status-success"></span>
        If YES - You can leave
      </h3>
      <ul class="mt-3 space-y-2 text-sm text-base-content/80">
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Walk away calmly</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Do not run</span>
        </li>
      </ul>
    </div>
  </div>
  
  <!-- NO Path -->
  <div class="card card-border border-l-4 border-l-error">
    <div class="card-body p-5">
      <h3 class="font-bold text-base flex items-center gap-2">
        <span class="status status-error"></span>
        If NO - You are detained
      </h3>
      <ul class="mt-3 space-y-2 text-sm text-base-content/80">
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 text-error shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Stay calm</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 text-error shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Invoke right to remain silent</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

### 3.8 Resources Bento Grid

Horizontal card grid for resource links:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <a href="#" class="group card card-border hover:border-primary/50 transition-all">
    <div class="card-body p-4">
      <div class="flex items-start gap-4">
        <!-- Icon -->
        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <!-- Content -->
        <div class="flex-1">
          <h4 class="font-semibold text-base-content group-hover:text-primary transition-colors">Know Your Rights Card</h4>
          <p class="text-sm text-base-content/60 mt-1">Printable card to carry</p>
        </div>
        <!-- Arrow -->
        <svg class="w-5 h-5 text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      </div>
    </div>
  </a>
</div>
```

### 3.9 DO/DO NOT Dual Statement

```html
<div class="space-y-3">
  <div class="flex items-start gap-3">
    <span class="badge badge-soft badge-error shrink-0">DO NOT</span>
    <p class="text-sm text-base-content/80">Open the door or let them inside</p>
  </div>
  <div class="flex items-start gap-3">
    <span class="badge badge-soft badge-success shrink-0">DO</span>
    <p class="text-sm text-base-content/80">Stay calm and speak through the closed door</p>
  </div>
</div>
```

---

## 4. Page Structure Template

### 4.1 Overall Page Layout

```html
<template>
  <div class="min-h-screen bg-base-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- A. Header Section -->
      <header class="text-center mb-12">
        <span class="text-xs uppercase tracking-wide text-base-content/50 block mb-3">Know Your Rights</span>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-4">
          Page Title Here
        </h1>
        <p class="text-base text-base-content/70 max-w-2xl mx-auto">
          Brief description of the scenario and when to use this guide.
        </p>
      </header>
      
      <!-- B. Main Timeline Content -->
      <section class="mb-12">
        <ul class="timeline timeline-vertical timeline-compact">
          <!-- Timeline steps here -->
        </ul>
      </section>
      
      <!-- C. Resources Grid (optional) -->
      <section class="mb-12">
        <h2 class="text-xs uppercase tracking-wide text-base-content/60 mb-6">Related Resources</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Resource cards -->
        </div>
      </section>
      
      <!-- D. Navigation -->
      <div class="mt-12">
        <KnowYourRightsNav />
      </div>
      
    </div>
  </div>
</template>
```

### 4.2 Timeline Step Template

Each major section becomes a timeline step:

```html
<li>
  <hr class="bg-base-300"/>
  <div class="timeline-middle">
    <div class="w-3 h-3 rounded-full bg-primary"></div>
  </div>
  <div class="timeline-end py-4 pl-4 w-full">
    
    <!-- Step Header -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-xs uppercase tracking-wide text-base-content/60">Step 01</span>
      <h2 class="text-xl font-bold tracking-tight">Section Title</h2>
      <span class="badge badge-soft badge-error">Critical</span> <!-- optional -->
    </div>
    
    <!-- Step Content Card -->
    <div class="card card-border bg-base-100">
      <div class="card-body p-5">
        <!-- Content varies by section type -->
      </div>
    </div>
    
  </div>
  <hr class="bg-base-300"/>
</li>
```

---

## 5. Before/After Comparison

### 5.1 Visual Comparison

| Aspect | Before | After |
|--------|--------|-------|
| **Container** | `container mx-auto p-4 max-w-4xl` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| **Cards** | `card bg-base-100 shadow-xl border border-base-200` | `card card-border bg-base-100` |
| **Warnings** | `bg-error/10 p-6 rounded-xl border border-error/20` | `badge badge-soft badge-error` (small pill) |
| **Step Numbers** | Large `01`, `02` text | Small `timeline-middle` dots |
| **Section Headers** | `card-title text-2xl` | `text-xl font-bold tracking-tight` |
| **Labels** | Regular weight text | `text-xs uppercase tracking-wide` |
| **Scripts** | Regular text in bg-base-200 | `font-mono` in `alert alert-soft alert-info` |
| **Decision Trees** | Two cards with full color backgrounds | `border-l-4` accent with `status` dot |

### 5.2 Class Replacement Map

| Old Pattern | New Pattern |
|-------------|-------------|
| `shadow-xl` | `card-border` |
| `shadow-sm` | `card-border` |
| `bg-success/10` | `border-l-4 border-l-success` |
| `bg-error/10` | `badge badge-soft badge-error` or `border-l-4 border-l-error` |
| `alert alert-warning` | `alert alert-soft alert-warning` |
| `text-2xl` (titles) | `text-xl font-bold tracking-tight` |
| `font-bold mr-3` bullets | `status status-{color}` dots |
| `text-3xl font-bold` | `text-3xl md:text-4xl font-bold tracking-tight` |
| Emoji icons `✅ 🚫` | SVG icons with `text-{color}` |

### 5.3 Component Migration

```
BEFORE: Step Numbers
------------------------
<span class="text-base-content/40 font-mono text-sm">01</span>
<h2 class="text-xl font-bold tracking-tight">Entry Protocol</h2>

AFTER: Timeline with Dots
------------------------
<div class="timeline-middle">
  <div class="w-3 h-3 rounded-full bg-primary"></div>
</div>
<div class="timeline-end py-3">
  <span class="text-xs uppercase tracking-wide text-base-content/60">Step 01</span>
  <h3 class="font-bold text-base">Entry Protocol</h3>
</div>
```

```
BEFORE: Warning Background
------------------------
<div class="bg-error/10 p-6 rounded-xl border border-error/20">
  <h3 class="font-bold text-xl mb-2 text-error-content flex items-center">
    <span class="mr-2">🚫</span>
    Private Areas
  </h3>
  <p>Description...</p>
</div>

AFTER: Border Accent Card
------------------------
<div class="card card-border border-l-4 border-l-error">
  <div class="card-body p-5">
    <h3 class="font-bold text-base flex items-center gap-2">
      <span class="status status-error"></span>
      Private Areas
    </h3>
    <p class="text-sm text-base-content/80 mt-2">Description...</p>
  </div>
</div>
```

---

## Implementation Notes

### Files to Modify

1. `wcu-website/app/pages/know-your-rights/ice-at-home.vue` - Already partially updated; needs timeline conversion
2. `wcu-website/app/pages/know-your-rights/ice-at-work.vue` - Full redesign needed
3. `wcu-website/app/pages/know-your-rights/ice-in-public.vue` - Full redesign needed
4. `wcu-website/app/pages/know-your-rights/ice-pulls-you-over.vue` - Full redesign needed; convert collapse to timeline

### DaisyUI Components Used

| Component | Classes Used |
|-----------|--------------|
| Timeline | `timeline`, `timeline-vertical`, `timeline-compact`, `timeline-middle`, `timeline-end` |
| Alert | `alert`, `alert-soft`, `alert-info`, `alert-error`, `alert-warning` |
| Badge | `badge`, `badge-soft`, `badge-error`, `badge-warning`, `badge-success` |
| Card | `card`, `card-border`, `card-body` |
| Status | `status`, `status-error`, `status-success`, `status-warning` |

### Testing Checklist

- [ ] Verify all pages use `max-w-7xl` container pattern
- [ ] Confirm no `shadow-xl` or `shadow-sm` classes remain
- [ ] Check all semantic colors are used (no hardcoded hex)
- [ ] Validate timeline component renders correctly on mobile
- [ ] Test hover states on interactive cards
- [ ] Verify `font-mono` applied to all script callouts
- [ ] Confirm badges replace large colored backgrounds