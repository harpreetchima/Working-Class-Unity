/**
 * Events Data Registry
 *
 * This file serves as the single source of truth for all calendar event data.
 * It follows the centralized data registry pattern established in campaigns.ts
 * and know-your-rights.ts for consistency.
 */

export type EventType = 'meeting' | 'action' | 'training' | 'social' | 'canvass' | 'forum' | 'other'
export type Committee = 'membership' | 'education' | 'treasurer' | null

export interface Event {
  id: string
  titleKey: string // i18n key for title
  descriptionKey: string // i18n key for description
  eventType: EventType
  startDateTime: string // ISO date string
  endDateTime: string // ISO date string
  allDay: boolean
  location: string
  virtualLink: string | null
  isVirtual: boolean
  isHybrid: boolean
  isActive: boolean
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  campaignId: string | null // links to campaign.id from campaigns.ts
  committee: Committee
}

export const events: Event[] = [
  // General Membership Meeting - monthly recurring type event
  {
    id: 'event-1',
    titleKey: 'calendar.events.event1.title',
    descriptionKey: 'calendar.events.event1.description',
    eventType: 'meeting',
    startDateTime: '2025-12-10T18:30:00.000Z',
    endDateTime: '2025-12-10T20:30:00.000Z',
    allDay: false,
    location: 'Fresno Labor Temple, 710 E Olive Ave, Fresno, CA',
    virtualLink: 'https://zoom.us/j/example123',
    isVirtual: false,
    isHybrid: true,
    isActive: true,
    createdAt: '2025-11-01T00:00:00.000Z',
    updatedAt: '2025-11-15T00:00:00.000Z',
    campaignId: null,
    committee: null
  },
  // Tenant Rights Workshop - linked to tenant union campaign
  {
    id: 'event-2',
    titleKey: 'calendar.events.event2.title',
    descriptionKey: 'calendar.events.event2.description',
    eventType: 'training',
    startDateTime: '2025-12-14T22:00:00.000Z',
    endDateTime: '2025-12-15T00:00:00.000Z',
    allDay: false,
    location: 'Community Center, 123 Main St, Fresno, CA',
    virtualLink: null,
    isVirtual: false,
    isHybrid: false,
    isActive: true,
    createdAt: '2025-11-10T00:00:00.000Z',
    updatedAt: '2025-11-10T00:00:00.000Z',
    campaignId: 'campaign-1',
    committee: 'education'
  },
  // Day of Action - Ceasefire solidarity event
  {
    id: 'event-3',
    titleKey: 'calendar.events.event3.title',
    descriptionKey: 'calendar.events.event3.description',
    eventType: 'action',
    startDateTime: '2025-12-20T00:00:00.000Z',
    endDateTime: '2025-12-20T23:59:59.000Z',
    allDay: true,
    location: 'Downtown Fresno, Various Locations',
    virtualLink: null,
    isVirtual: false,
    isHybrid: false,
    isActive: true,
    createdAt: '2025-11-05T00:00:00.000Z',
    updatedAt: '2025-11-20T00:00:00.000Z',
    campaignId: 'campaign-2',
    committee: null
  },
  // Community Canvassing Event
  {
    id: 'event-4',
    titleKey: 'calendar.events.event4.title',
    descriptionKey: 'calendar.events.event4.description',
    eventType: 'canvass',
    startDateTime: '2025-12-28T17:00:00.000Z',
    endDateTime: '2025-12-28T20:00:00.000Z',
    allDay: false,
    location: 'Meet at Tower District Coffee, Fresno, CA',
    virtualLink: null,
    isVirtual: false,
    isHybrid: false,
    isActive: true,
    createdAt: '2025-11-12T00:00:00.000Z',
    updatedAt: '2025-11-12T00:00:00.000Z',
    campaignId: 'campaign-5',
    committee: 'membership'
  },
  // Virtual New Member Orientation
  {
    id: 'event-5',
    titleKey: 'calendar.events.event5.title',
    descriptionKey: 'calendar.events.event5.description',
    eventType: 'training',
    startDateTime: '2026-01-08T02:00:00.000Z',
    endDateTime: '2026-01-08T03:30:00.000Z',
    allDay: false,
    location: 'Online via Zoom',
    virtualLink: 'https://zoom.us/j/orientation456',
    isVirtual: true,
    isHybrid: false,
    isActive: true,
    createdAt: '2025-11-20T00:00:00.000Z',
    updatedAt: '2025-11-25T00:00:00.000Z',
    campaignId: null,
    committee: 'membership'
  },
  // Community Forum - Understanding Healthcare Rights
  {
    id: 'event-6',
    titleKey: 'calendar.events.event6.title',
    descriptionKey: 'calendar.events.event6.description',
    eventType: 'forum',
    startDateTime: '2026-01-18T23:00:00.000Z',
    endDateTime: '2026-01-19T01:00:00.000Z',
    allDay: false,
    location: 'Unitarian Universalist Church, Fresno, CA',
    virtualLink: 'https://zoom.us/j/forum789',
    isVirtual: false,
    isHybrid: true,
    isActive: true,
    createdAt: '2025-11-25T00:00:00.000Z',
    updatedAt: '2025-11-30T00:00:00.000Z',
    campaignId: 'campaign-3',
    committee: 'education'
  }
]

/**
 * Get a single event by its ID
 * @param id - The unique identifier for the event
 * @returns The event object or undefined if not found
 */
export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

/**
 * Get all events associated with a specific campaign
 * @param campaignId - The campaign ID to filter by
 * @returns Array of events linked to the campaign
 */
export function getEventsByCampaign(campaignId: string): Event[] {
  return events.filter((event) => event.campaignId === campaignId)
}

/**
 * Get all events associated with a specific committee
 * @param committee - The committee to filter by
 * @returns Array of events for the specified committee
 */
export function getEventsByCommittee(committee: string): Event[] {
  return events.filter((event) => event.committee === committee)
}

/**
 * Get upcoming active events sorted by start date/time
 * @param limit - Optional maximum number of events to return
 * @returns Array of active events sorted by startDateTime, optionally limited
 */
export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date().toISOString()
  const upcomingEvents = events
    .filter((event) => event.isActive && event.startDateTime >= now)
    .sort((a, b) => a.startDateTime.localeCompare(b.startDateTime))

  if (limit !== undefined && limit > 0) {
    return upcomingEvents.slice(0, limit)
  }

  return upcomingEvents
}

/**
 * Get all events of a specific type
 * @param eventType - The event type to filter by
 * @returns Array of events matching the specified type
 */
export function getEventsByType(eventType: string): Event[] {
  return events.filter((event) => event.eventType === eventType)
}

export default events
