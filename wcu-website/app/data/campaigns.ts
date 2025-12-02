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
    slug: 'tenant-union',
    titleKey: 'campaigns.tenantUnion.title',
    descriptionKey: 'campaigns.tenantUnion.description',
    type: 'focus',
    status: 'active',
    committee: null,
    image: '/images/campaigns/tenant-union.jpg',
    createdAt: '2025-01-01T00:00:00.000Z'
  },
  {
    id: 'campaign-2',
    slug: 'no-votes-for-genocide',
    titleKey: 'campaigns.noVotesForGenocide.title',
    descriptionKey: 'campaigns.noVotesForGenocide.description',
    type: 'focus',
    status: 'completed',
    committee: null,
    image: '/images/campaigns/no-votes-for-genocide.jpg',
    createdAt: '2024-06-01T00:00:00.000Z'
  },

  // Side Quest Campaigns (committee: null)
  {
    id: 'campaign-3',
    slug: 'know-your-rights',
    titleKey: 'campaigns.knowYourRights.title',
    descriptionKey: 'campaigns.knowYourRights.description',
    type: 'side-quest',
    status: 'active',
    committee: null,
    image: '/images/campaigns/know-your-rights.jpg',
    createdAt: '2024-09-01T00:00:00.000Z'
  },
  {
    id: 'campaign-4',
    slug: 'bds-central-valley',
    titleKey: 'campaigns.bdsCentralValley.title',
    descriptionKey: 'campaigns.bdsCentralValley.description',
    type: 'side-quest',
    status: 'active',
    committee: null,
    image: '/images/campaigns/bds-central-valley.jpg',
    createdAt: '2025-02-01T00:00:00.000Z'
  },
  {
    id: 'campaign-5',
    slug: 'republic-services-fair-contract',
    titleKey: 'campaigns.republicServicesFairContract.title',
    descriptionKey: 'campaigns.republicServicesFairContract.description',
    type: 'side-quest',
    status: 'completed',
    committee: null,
    image: '/images/campaigns/republic-services-fair-contract.jpg',
    createdAt: '2024-10-01T00:00:00.000Z'
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