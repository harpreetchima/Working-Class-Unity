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
      <h3 v-if="showTitle" class="text-xl font-semibold text-base-content mb-6">
        {{ $t('kyr.otherResources') }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLinkLocale
          v-for="resource in otherResources"
          :key="resource.slug"
          :to="`/know-your-rights/${resource.slug}`"
          class="group card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <div class="card-body p-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <span class="text-2xl">{{ resource.icon }}</span>
              </div>
              <div class="text-left">
                <span class="block font-semibold text-base-content group-hover:text-primary transition-colors">
                  {{ $t(resource.titleKey) }}
                </span>
                <span class="block text-sm text-base-content/60 mt-1">
                  {{ $t(resource.descriptionKey) }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>