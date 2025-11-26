<script setup lang="ts">
import { knowYourRightsResources } from '~/data/know-your-rights'

const route = useRoute()

// Filter out the current page
const otherResources = computed(() => 
  knowYourRightsResources.filter(r => 
    !route.path.endsWith(r.slug)
  )
)
</script>

<template>
  <div class="card bg-base-200 mt-8">
    <div class="card-body">
      <h3 class="card-title">{{ $t('kyr.otherResources') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLinkLocale 
          v-for="resource in otherResources"
          :key="resource.slug"
          :to="`/know-your-rights/${resource.slug}`"
          class="btn btn-outline h-auto py-3 justify-start"
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