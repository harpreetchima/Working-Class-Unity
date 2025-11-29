<script setup lang="ts">
import { computed } from 'vue'
import type { Campaign } from '~/data/campaigns'

interface Props {
  campaign: Campaign
}

const props = defineProps<Props>()

// Computed properties for type badge (ribbon)
const typeBadgeText = computed(() => {
  return props.campaign.type === 'focus' ? 'Focus Campaign' : 'Side Quest'
})

// Ribbon background/text colors based on campaign type
const ribbonClasses = computed(() => {
  return props.campaign.type === 'focus'
    ? 'bg-primary text-primary-content'
    : 'bg-secondary text-secondary-content'
})

// Fold color (darker version)
const foldClasses = computed(() => {
  return props.campaign.type === 'focus'
    ? 'bg-primary brightness-75'
    : 'bg-secondary brightness-75'
})

// Computed properties for status badge
const statusBadgeClass = computed(() => {
  switch (props.campaign.status) {
    case 'active':
      return 'badge-success'
    case 'paused':
      return 'badge-warning'
    case 'completed':
      return 'badge-info'
    default:
      return 'badge-neutral'
  }
})

const statusText = computed(() => {
  switch (props.campaign.status) {
    case 'active':
      return 'Active'
    case 'paused':
      return 'Paused'
    case 'completed':
      return 'Completed'
    default:
      return props.campaign.status
  }
})

// Committee badge display - capitalize first letter
const committeeText = computed(() => {
  if (!props.campaign.committee) return null
  switch (props.campaign.committee) {
    case 'membership':
      return 'Membership'
    case 'education':
      return 'Education'
    case 'treasurer':
      return 'Treasurer'
    default:
      return props.campaign.committee
  }
})

// Committee badge class for colors
const committeeBadgeClass = computed(() => {
  switch (props.campaign.committee) {
    case 'membership':
      return 'badge-primary badge-outline'
    case 'education':
      return 'badge-secondary badge-outline'
    case 'treasurer':
      return 'badge-accent badge-outline'
    default:
      return 'badge-outline'
  }
})

// Check if campaign has events
const hasEvents = computed(() => {
  return props.campaign.events && props.campaign.events.length > 0
})

// Format date for display
const formatEventDate = (dateString: string) => {
  const date = new Date(dateString)
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString()
  }
}
</script>

<template>
  <!-- Card -->
  <div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow w-full relative">
    <!-- Corner Ribbon Badge -->
    <div class="absolute -top-2 -right-2 z-10 drop-shadow-md filter">
      <!-- Fold Triangle -->
      <div
        :class="['absolute bottom-0 right-0 w-2 h-2 translate-y-full', foldClasses]"
        style="clip-path: polygon(0 0, 100% 0, 0 100%)"
      ></div>
      
      <!-- Ribbon Body -->
      <div
        :class="[
          'py-1 pl-6 pr-4 font-bold text-sm relative',
          ribbonClasses
        ]"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0.75rem 50%)"
      >
        {{ typeBadgeText }}
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body p-5">
        <!-- Badges Row (Status and Committee) -->
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <!-- Status Badge with Icon -->
          <span :class="['badge inline-flex items-center gap-1', statusBadgeClass]">
            <!-- Active: Checkmark icon -->
            <svg
              v-if="campaign.status === 'active'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle>
                <polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline>
              </g>
            </svg>
            <!-- Paused: Pause icon -->
            <svg
              v-else-if="campaign.status === 'paused'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="10" y1="15" x2="10" y2="9"></line>
              <line x1="14" y1="15" x2="14" y2="9"></line>
            </svg>
            <!-- Completed: Info/Completed icon -->
            <svg
              v-else-if="campaign.status === 'completed'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 12 12 8 8 12"></polyline>
              <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
            {{ statusText }}
          </span>

          <!-- Committee Badge with Icon (side-quests only) -->
          <span
            v-if="committeeText"
            :class="['badge', committeeBadgeClass]"
          >
            <!-- Membership: Users icon -->
            <svg
              v-if="campaign.committee === 'membership'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <!-- Education: Book icon -->
            <svg
              v-else-if="campaign.committee === 'education'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <!-- Treasurer: Money icon -->
            <svg
              v-else-if="campaign.committee === 'treasurer'"
              class="size-[1em] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            {{ committeeText }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="card-title text-xl font-bold leading-tight">
          {{ $t(campaign.titleKey) }}
        </h3>

        <!-- Description -->
        <p class="text-base-content/70 text-sm leading-relaxed mt-1">
          {{ $t(campaign.descriptionKey) }}
        </p>

        <!-- Events Section -->
        <div v-if="hasEvents" class="mt-5">
          <!-- Section Header -->
          <div class="flex items-center gap-3 mb-4">
            <div class="flex-1 h-px bg-base-300"></div>
            <span class="text-xs font-semibold tracking-wider text-base-content/60 uppercase">
              Upcoming Events
            </span>
            <div class="flex-1 h-px bg-base-300"></div>
          </div>

          <!-- Events List -->
          <div class="flex flex-col divide-y divide-base-200">
            <div
              v-for="event in campaign.events"
              :key="event.id"
              class="flex items-start gap-4 py-3 first:pt-0 last:pb-0"
            >
              <!-- Date Box -->
              <div class="flex flex-col items-center justify-center bg-base-200 rounded-lg px-3 py-2 min-w-[60px]">
                <span class="text-xs font-semibold text-base-content/70">
                  {{ formatEventDate(event.date).month }}
                </span>
                <span class="text-2xl font-bold text-base-content leading-none">
                  {{ formatEventDate(event.date).day }}
                </span>
              </div>

              <!-- Event Details -->
              <div class="flex-1 min-w-0">
                <!-- Title Row with Link -->
                <div class="flex items-start justify-between gap-2">
                  <h4 class="font-semibold text-base-content leading-snug">
                    {{ event.title }}
                  </h4>
                  <!-- External Link Icon -->
                  <a
                    v-if="event.link"
                    :href="event.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-shrink-0 text-primary hover:text-primary-focus transition-colors"
                    :aria-label="`Open ${event.title} link`"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <!-- Time and Location -->
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-base-content/60">
                  <!-- Time -->
                  <span class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {{ event.time }}
                  </span>
                  <!-- Location -->
                  <span class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
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
                    <span class="truncate">{{ event.location }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
