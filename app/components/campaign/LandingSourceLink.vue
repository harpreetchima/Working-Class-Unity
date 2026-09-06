<script setup lang="ts">
defineProps<{ href: string }>()
const { t } = useI18n()
</script>

<template>
  <a class="landing-source-link" :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
    <svg
      class="landing-source-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
    >
      <path d="M14 4h6v6M20 4l-9 9M10 5H5v14h14v-5" />
    </svg>
    <span class="visually-hidden"> ({{ t('common.opensInNewTab') }})</span>
  </a>
</template>

<style scoped>
@layer components {
  .landing-source-link {
    color: inherit;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
  }

  .landing-source-link:hover {
    text-decoration-thickness: 2px;
  }

  .landing-source-icon {
    display: inline;
    inline-size: 1em;
    block-size: 1em;
    vertical-align: -0.12em;
    margin-inline-start: 0.15em;
  }
}
</style>
