<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

interface Props {
  title: string
  date: string
  time: string
  location: string
  link?: string
}

const props = defineProps<Props>()

// Format the ISO date string to a readable format like "Dec 15, 2025"
const formattedDate = computed(() => {
  const dateObj = new Date(props.date)
  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

// Determine if the link is external
const isExternalLink = computed(() => {
  return props.link?.startsWith('http') ?? false
})

// Dynamic wrapper component - NuxtLink if link exists, div otherwise
const WrapperComponent = computed(() => {
  return props.link ? resolveComponent('NuxtLink') : 'div'
})

// Props for the wrapper component
const wrapperProps = computed(() => {
  if (!props.link) return {}
  return {
    to: props.link,
    external: isExternalLink.value,
    target: isExternalLink.value ? '_blank' : undefined,
    rel: isExternalLink.value ? 'noopener noreferrer' : undefined
  }
})

// Card styling classes
const cardClasses = computed(() => {
  const base = 'block bg-base-200 rounded-lg p-3'
  const interactive = props.link
    ? 'transition-colors hover:bg-base-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100'
    : ''
  return [base, interactive].filter(Boolean).join(' ')
})
</script>

<template>
  <component
    :is="WrapperComponent"
    v-bind="wrapperProps"
    :class="cardClasses"
  >
    <!-- Date and Time Row -->
    <div class="flex items-center gap-2 text-sm text-base-content/70 mb-1">
      <!-- Calendar icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span class="font-medium">{{ formattedDate }}</span>
      <span aria-hidden="true">•</span>
      <span>{{ time }}</span>
    </div>

    <!-- Title -->
    <h4 class="font-semibold text-base-content mb-1 line-clamp-2">
      {{ title }}
    </h4>

    <!-- Location -->
    <div class="flex items-start gap-1.5 text-sm text-base-content/60">
      <!-- Location pin icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span class="line-clamp-1">{{ location }}</span>
    </div>
  </component>
</template>