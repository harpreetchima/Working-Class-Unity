import type { CalendarApiResponse } from '~/content/calendar'

export function useUpcomingNavigationEvents() {
  const { locale, localeProperties } = useI18n()
  const response = useAsyncData(
    'navigation-public-events',
    () => $fetch<CalendarApiResponse>('/api/events', { credentials: 'omit' }),
    { immediate: false, server: false }
  )
  const entries = computed(() =>
    (response.data.value?.events ?? [])
      .flatMap((event) =>
        event.sessions.filter((session) => session.status === 'scheduled').map((session) => ({ event, session }))
      )
      .sort((a, b) => Date.parse(a.session.startsAt) - Date.parse(b.session.startsAt))
      .slice(0, 3)
      .map(({ event, session }) => ({
        id: session.id,
        path: session.rsvpUrl ?? event.eventPageUrl ?? '/calendar',
        label: session.title ?? event.title,
        datetime: session.startsAt,
        description: new Intl.DateTimeFormat(localeProperties.value.language ?? locale.value, {
          dateStyle: 'medium',
          timeStyle: 'short',
          timeZone: session.timezone
        }).format(new Date(session.startsAt))
      }))
  )
  return { entries, status: response.status, error: response.error, refresh: response.execute }
}
