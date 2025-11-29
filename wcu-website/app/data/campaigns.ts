/**
 * Campaign Data Registry
 *
 * This file serves as the single source of truth for all campaign data.
 * It follows the same pattern as know-your-rights.ts for consistency.
 */

export interface Event {
  id: string
  title: string
  date: string // ISO string
  time: string
  location: string
  link?: string
}

export interface Campaign {
  id: string
  slug: string
  titleKey: string // i18n key for title
  descriptionKey: string // i18n key for description
  type: 'focus' | 'side-quest'
  status: 'active' | 'paused' | 'completed'
  committee: 'membership' | 'education' | 'treasurer' | null // null for focus campaigns (org-wide)
  image: string
  events: Event[]
  createdAt: string // ISO date
}

export const campaigns: Campaign[] = [
  // Focus Campaigns (org-wide, committee: null)
  {
    id: 'campaign-1',
    slug: 'tenet-union-work',
    titleKey: 'campaigns.tenantUnion.title',
    descriptionKey: 'campaigns.tenantUnion.description',
    type: 'focus',
    status: 'active',
    committee: null,
    image: '/images/campaigns/tenet-union.jpg',
    events: [
      {
        id: 'event-1-1',
        title: 'Tenant Rights Workshop',
        date: '2025-12-14T00:00:00.000Z',
        time: '2:00 PM - 4:00 PM',
        location: 'Community Center, 123 Main St, Fresno, CA',
        link: 'https://example.com/tenant-workshop'
      },
      {
        id: 'event-1-2',
        title: 'Know Your Tenant Rights Town Hall',
        date: '2025-12-21T00:00:00.000Z',
        time: '6:00 PM - 8:00 PM',
        location: 'Central Library Meeting Room, Fresno, CA'
      }
    ],
    createdAt: '2025-06-15T00:00:00.000Z'
  },
  {
    id: 'campaign-2',
    slug: 'ceasefire-palestine',
    titleKey: 'campaigns.ceasefirePalestine.title',
    descriptionKey: 'campaigns.ceasefirePalestine.description',
    type: 'focus',
    status: 'active',
    committee: null,
    image: '/images/campaigns/ceasefire-palestine.jpg',
    events: [
      {
        id: 'event-2-1',
        title: 'Solidarity Vigil for Peace',
        date: '2025-12-07T00:00:00.000Z',
        time: '5:00 PM - 7:00 PM',
        location: 'Courthouse Park, Downtown Fresno, CA'
      },
      {
        id: 'event-2-2',
        title: 'Community Forum: Understanding the Crisis',
        date: '2026-01-11T00:00:00.000Z',
        time: '3:00 PM - 5:00 PM',
        location: 'Unitarian Universalist Church, Fresno, CA',
        link: 'https://example.com/forum-registration'
      }
    ],
    createdAt: '2025-10-01T00:00:00.000Z'
  },
  {
    id: 'campaign-3',
    slug: 'medicare-for-all',
    titleKey: 'campaigns.medicareForAll.title',
    descriptionKey: 'campaigns.medicareForAll.description',
    type: 'focus',
    status: 'paused',
    committee: null,
    image: '/images/campaigns/medicare-for-all.jpg',
    events: [],
    createdAt: '2024-09-01T00:00:00.000Z'
  },

  // Side Quest Campaigns (committee-specific)
  {
    id: 'campaign-4',
    slug: 'know-your-rights-workshops',
    titleKey: 'campaigns.knowYourRightsWorkshops.title',
    descriptionKey: 'campaigns.knowYourRightsWorkshops.description',
    type: 'side-quest',
    status: 'active',
    committee: 'education',
    image: '/images/campaigns/know-your-rights.jpg',
    events: [
      {
        id: 'event-4-1',
        title: 'Workers Rights 101 Workshop',
        date: '2025-12-08T00:00:00.000Z',
        time: '10:00 AM - 12:00 PM',
        location: 'Labor Temple, 710 E Olive Ave, Fresno, CA'
      }
    ],
    createdAt: '2025-03-01T00:00:00.000Z'
  },
  {
    id: 'campaign-5',
    slug: 'community-canvassing',
    titleKey: 'campaigns.communityCanvassing.title',
    descriptionKey: 'campaigns.communityCanvassing.description',
    type: 'side-quest',
    status: 'active',
    committee: 'membership',
    image: '/images/campaigns/community-canvassing.jpg',
    events: [
      {
        id: 'event-5-1',
        title: 'Weekend Door Knocking - Tower District',
        date: '2025-12-15T00:00:00.000Z',
        time: '9:00 AM - 12:00 PM',
        location: 'Meet at Tower District Coffee, Fresno, CA'
      },
      {
        id: 'event-5-2',
        title: 'Canvass Training for New Volunteers',
        date: '2025-12-22T00:00:00.000Z',
        time: '1:00 PM - 3:00 PM',
        location: 'WCU Office, Fresno, CA',
        link: 'https://example.com/canvass-training'
      }
    ],
    createdAt: '2025-05-15T00:00:00.000Z'
  },
  {
    id: 'campaign-6',
    slug: 'fundraiser-drive',
    titleKey: 'campaigns.fundraiserDrive.title',
    descriptionKey: 'campaigns.fundraiserDrive.description',
    type: 'side-quest',
    status: 'completed',
    committee: 'treasurer',
    image: '/images/campaigns/fundraiser-drive.jpg',
    events: [],
    createdAt: '2025-01-10T00:00:00.000Z'
  }
]

/**
 * Helper function to get a campaign by its slug
 * @param slug - The URL-friendly identifier for the campaign
 * @returns The campaign object or undefined if not found
 */
export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((campaign) => campaign.slug === slug)
}

export default campaigns