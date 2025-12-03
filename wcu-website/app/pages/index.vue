<script setup lang="ts">
import { getUpcomingEvents, type Event, type EventType } from '~/data/events'

const { t, locale } = useI18n()

// Get 3 upcoming events
const upcomingEvents = computed(() => getUpcomingEvents(3))

// Badge color mapping for event types (from calendar.vue)
const badgeClasses: Record<EventType, string> = {
  meeting: 'badge-soft badge-primary',
  action: 'badge-soft badge-error',
  training: 'badge-soft badge-info',
  social: 'badge-soft badge-success',
  canvass: 'badge-soft badge-warning',
  forum: 'badge-soft badge-secondary',
  other: 'badge-soft'
}

// Date formatting helpers (from calendar.vue)
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date)
}

function formatDateRange(startDateTime: string, endDateTime: string, allDay: boolean): string {
  if (allDay) {
    return formatDate(startDateTime)
  }
  return `${formatDate(startDateTime)} • ${formatTime(startDateTime)} - ${formatTime(endDateTime)}`
}

// Get badge class for event type
function getBadgeClass(eventType: EventType): string {
  return badgeClasses[eventType] || 'badge-soft'
}
</script>

<template>
  <main class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-base-200" aria-labelledby="hero-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content mb-6">
            {{ $t('home_page.hero.title') }}
          </h1>
          <p class="text-lg md:text-xl text-base-content/80 mb-8 max-w-3xl mx-auto">
            {{ $t('home_page.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLinkLocale to="/join" class="btn btn-primary btn-lg">
              {{ $t('home_page.hero.join_button') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/calendar" class="btn btn-outline btn-lg">
              {{ $t('home_page.hero.events_button') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-12 md:py-16" aria-labelledby="events-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-xs uppercase tracking-wide text-base-content/80 mb-6">
          {{ $t('calendar.upcoming_events') }}
        </p>
        <h2 id="events-heading" class="sr-only">{{ $t('home_page.events.heading') }}</h2>

        <!-- Events Grid -->
        <div
          v-if="upcomingEvents.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <article
            v-for="event in upcomingEvents"
            :key="event.id"
            class="group card bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary/50 focus-within:shadow-md focus-within:border-primary/50 transition-all duration-300"
          >
            <div class="card-body p-4">
              <div class="flex items-start gap-4">
                <!-- Icon container based on event type -->
                <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                  <!-- Meeting: Users icon -->
                  <svg v-if="event.eventType === 'meeting'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                  <!-- Action: Megaphone icon -->
                  <svg v-else-if="event.eventType === 'action'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                  </svg>
                  <!-- Training: Academic cap icon -->
                  <svg v-else-if="event.eventType === 'training'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <!-- Social: Heart icon -->
                  <svg v-else-if="event.eventType === 'social'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <!-- Canvass: Map icon -->
                  <svg v-else-if="event.eventType === 'canvass'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                  <!-- Forum: Chat bubble icon -->
                  <svg v-else-if="event.eventType === 'forum'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                  <!-- Other: Calendar icon (default) -->
                  <svg v-else aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>

                <!-- Content area -->
                <div class="flex-1 min-w-0">
                  <!-- Event Title -->
                  <h3 class="font-semibold text-base-content">
                    {{ $t(event.titleKey) }}
                  </h3>

                  <!-- Badges row -->
                  <div class="flex flex-wrap items-center gap-1.5 mt-2">
                    <span class="badge badge-sm" :class="getBadgeClass(event.eventType)">
                      {{ $t(`calendar.event_types.${event.eventType}`) }}
                    </span>
                    <span v-if="event.isVirtual" class="badge badge-sm badge-soft badge-info">
                      {{ $t('calendar.badges.virtual') }}
                    </span>
                    <span v-if="event.isHybrid" class="badge badge-sm badge-soft badge-secondary">
                      {{ $t('calendar.badges.hybrid') }}
                    </span>
                    <span v-if="event.allDay" class="badge badge-sm badge-soft">
                      {{ $t('calendar.badges.all_day') }}
                    </span>
                  </div>

                  <!-- Date/Time - wrapped in ClientOnly to prevent hydration mismatch from locale-dependent formatting -->
                  <p class="text-sm text-base-content/80 mt-2">
                    <ClientOnly>
                      {{ formatDateRange(event.startDateTime, event.endDateTime, event.allDay) }}
                      <template #fallback>
                        <span class="opacity-70">{{ event.startDateTime.split('T')[0] }}</span>
                      </template>
                    </ClientOnly>
                  </p>

                  <!-- Location -->
                  <p class="text-sm text-base-content/80 mt-1">
                    <span v-if="event.isVirtual && !event.isHybrid">{{ $t('calendar.virtual_event') }}</span>
                    <span v-else>{{ event.location }}</span>
                  </p>
                </div>
              </div>

              <!-- Actions row (if virtual link available) -->
              <div v-if="event.virtualLink" class="flex gap-2 mt-4 pt-3 border-t border-base-300">
                <a
                  :href="event.virtualLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-sm btn-primary gap-2 flex-1"
                >
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  {{ $t('calendar.join_virtual') }}
                  <span class="sr-only">{{ $t('common.opens_in_new_tab') }}</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- View all events link -->
        <div class="text-center mt-8">
          <NuxtLinkLocale to="/calendar" class="btn btn-ghost btn-sm gap-2">
            {{ $t('home_page.events.view_all') }}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section class="py-12 md:py-16 bg-base-200" aria-labelledby="problem-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <p class="text-xs uppercase tracking-wide text-base-content/80 mb-4">
            {{ $t('home_page.problem.label') }}
          </p>
          <h2 id="problem-heading" class="text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-6">
            {{ $t('home_page.problem.title') }}
          </h2>
          <div class="prose prose-lg text-base-content/80">
            <p>
              {{ $t('home_page.problem.p1') }}
            </p>
            <p>
              {{ $t('home_page.problem.p2') }}
            </p>
            <p>
              {{ $t('home_page.problem.p3') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
