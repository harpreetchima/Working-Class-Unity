/**
 * Campaign Data Registry
 *
 * This file serves as the single source of truth for all campaign data.
 * It follows the same pattern as know-your-rights.ts for consistency.
 *
 * Events are now stored in events.ts and linked via campaignId.
 * Use getEventsByCampaign() from events.ts to fetch events for a campaign.
 */

export interface Campaign {
  id: string
  slug: string
  titleKey: string // i18n key for title
  descriptionKey: string // i18n key for description
  type: 'focus' | 'side-quest'
  status: 'active' | 'paused' | 'completed'
  committee: 'membership' | 'education' | 'treasurer' | null // null for focus campaigns (org-wide)
  image: string
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