<script setup lang="ts">
import { ref, computed } from 'vue'
import { campaigns } from '~/data/campaigns'
import type { Campaign } from '~/data/campaigns'

// Page meta
useHead({
  title: 'Our Campaigns - WCU',
  meta: [
    {
      name: 'description',
      content: 'Explore our active campaigns and side quests. Join us in fighting for workers rights, housing justice, and community organizing.'
    }
  ]
})

// State
const activeFilter = ref<string>('active')

// Status order for sorting: Active (0) > Paused (1) > Completed (2)
const statusOrder: Record<string, number> = {
  active: 0,
  paused: 1,
  completed: 2
}

/**
 * Sort campaigns by status (active first), then by createdAt (newest first)
 */
const sortCampaigns = (campaignList: Campaign[]): Campaign[] => {
  return [...campaignList].sort((a, b) => {
    // First, sort by status order
    const statusDiff = statusOrder[a.status] - statusOrder[b.status]
    if (statusDiff !== 0) return statusDiff

    // Then, sort by createdAt (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

/**
 * Filter campaigns based on activeFilter value
 * - 'all': return all campaigns
 * - 'active': return campaigns where status === 'active'
 * - 'paused': return campaigns where status === 'paused'
 * - 'completed': return campaigns where status === 'completed'
 * - 'membership', 'education', 'treasurer': return campaigns where committee matches
 */
const filteredCampaigns = computed<Campaign[]>(() => {
  const filter = activeFilter.value

  if (filter === 'all') {
    return campaigns
  }

  if (filter === 'active') {
    return campaigns.filter((c) => c.status === 'active')
  }

  if (filter === 'paused') {
    return campaigns.filter((c) => c.status === 'paused')
  }

  if (filter === 'completed') {
    return campaigns.filter((c) => c.status === 'completed')
  }

  // Committee filters: membership, education, treasurer
  return campaigns.filter((c) => c.committee === filter)
})

/**
 * Focus campaigns from filtered list, sorted by status then createdAt
 */
const focusCampaigns = computed<Campaign[]>(() => {
  const focus = filteredCampaigns.value.filter((c) => c.type === 'focus')
  return sortCampaigns(focus)
})

/**
 * Side quest campaigns from filtered list, sorted by status then createdAt
 */
const sideQuests = computed<Campaign[]>(() => {
  const quests = filteredCampaigns.value.filter((c) => c.type === 'side-quest')
  return sortCampaigns(quests)
})

/**
 * Check if no campaigns match the current filter
 */
const noResults = computed(() => {
  return filteredCampaigns.value.length === 0
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Page Header -->
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-base-content mb-4">
        {{ $t('campaigns.pageTitle') }}
      </h1>
      <p class="text-base-content/70 max-w-2xl mx-auto">
        {{ $t('campaigns.pageSubtitle') }}
      </p>
    </header>

    <!-- Filter Bar -->
    <div class="mb-8">
      <CampaignFilter v-model="activeFilter" />
    </div>

    <!-- Focus Campaigns Section -->
    <section v-if="focusCampaigns.length > 0" class="mb-12">
      <div class="divider divider-primary text-xl font-bold text-primary">
        {{ $t('campaigns.focusCampaigns') }}
      </div>
      <div class="flex flex-col gap-6 mt-6">
        <CampaignCard
          v-for="campaign in focusCampaigns"
          :key="campaign.id"
          :campaign="campaign"
        />
      </div>
    </section>

    <!-- Side Quests Section -->
    <section v-if="sideQuests.length > 0" class="mb-12">
      <div class="divider divider-primary text-xl font-bold text-primary">
        {{ $t('campaigns.sideQuests') }}
      </div>
      <div class="flex flex-col gap-6 mt-6">
        <CampaignCard
          v-for="campaign in sideQuests"
          :key="campaign.id"
          :campaign="campaign"
        />
      </div>
    </section>

    <!-- Empty State -->
    <div v-if="noResults" class="text-center py-16">
      <div class="text-base-content/50 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p class="text-base-content/70 text-lg">
        {{ $t('campaigns.noResults') }}
      </p>
    </div>
  </div>
</template>