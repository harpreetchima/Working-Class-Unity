<script setup lang="ts">
import { knowYourRightsResources } from '~/data/know-your-rights'

const props = withDefaults(defineProps<{
  seamless?: boolean
  showTitle?: boolean
}>(), {
  seamless: false,
  showTitle: true
})

const route = useRoute()

// Filter out the current page
const otherResources = computed(() =>
  knowYourRightsResources.filter(r =>
    !route.path.endsWith(r.slug)
  )
)
</script>

<template>
  <div :class="[seamless ? 'mt-8' : 'card bg-base-200 mt-8']">
    <div :class="[seamless ? '' : 'card-body']">
      <h3 v-if="showTitle" class="card-title mb-4">{{ $t('kyr.otherResources') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLinkLocale
          v-for="resource in otherResources"
          :key="resource.slug"
          :to="`/know-your-rights/${resource.slug}`"
          :class="[
            'btn h-auto py-3 justify-start',
            seamless ? 'btn-neutral btn-outline bg-base-100 hover:bg-neutral hover:text-neutral-content' : 'btn-outline'
          ]"
        >
          <span class="text-2xl mr-2">{{ resource.icon }}</span>
          <span class="text-left">
            <span class="block font-bold">{{ $t(resource.titleKey) }}</span>
            <span class="block text-xs font-normal opacity-70">{{ $t(resource.descriptionKey) }}</span>
          </span>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>