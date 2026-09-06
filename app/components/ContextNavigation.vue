<script setup lang="ts">
import type { NavigationDestination } from '~/content/navigation'

defineProps<{
  label: string
  links: readonly NavigationDestination[]
  currentPath: string
}>()
</script>

<template>
  <div class="context-navigation">
    <p class="context-navigation-label">{{ label }}</p>
    <ul class="context-navigation-list" :aria-label="label" role="list">
      <li v-for="link in links" :key="link.path">
        <slot name="entry" :entry="link">
          <NavigationEntry :entry="link" :current="currentPath === link.path" />
        </slot>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@layer components {
  .context-navigation {
    min-inline-size: 0;
  }

  .context-navigation-label {
    margin: 0;
    padding: var(--space-2) var(--space-3);
    color: var(--color-text-muted);
    font-size: 1rem;
    font-weight: var(--font-weight-strong);
    line-height: 1.5;
  }

  .context-navigation-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-1);
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @media (width <= 77rem) {
    .context-navigation-list {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}
</style>
