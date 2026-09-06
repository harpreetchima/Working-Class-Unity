import { petitionDemand } from './petition'
import { safeguardsSources, stocktonSources } from './sources'
import type { CampaignFact, CampaignPageContent } from './types'

export const campaignFacts = [
  {
    value: 'April 14, 2031',
    label: 'Extended the contract',
    detail: 'City Council authorized Flock services through April 14, 2031.',
    sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
  },
  {
    value: '$5,416,700',
    label: 'Raised the spending cap',
    detail: 'The additional $3.15 million brings the combined contract cap to $5,416,700.',
    sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
  },
  {
    value: 'More surveillance tools',
    label: 'Expanded the network',
    detail:
      'The amendment adds six drones and docks, two radar units, a mobile camera trailer, and new search tools with an allocation for ten video streams.',
    sourceIds: ['stockton-mar-2026-amendment']
  }
] as const satisfies readonly CampaignFact[]

export const campaignLandingPage = {
  path: '/campaigns/remove-flock-stockton',
  eyebrow: 'WORKING CLASS UNITY · STOCKTON',
  title: 'Remove Mass Surveillance from Stockton',
  description:
    'Flock cameras turn passing vehicles into searchable records of everyday travel. Stockton’s City Council is expanding that surveillance with public money. Working people should control the institutions and budgets that shape our lives, not pay for more police power over us.',
  sections: [
    {
      id: 'verified-facts',
      title: 'Stockton City Council Voted for Mass Surveillance',
      summary: 'Every councilmember voted to expand Flock. Here is what they approved.'
    },
    {
      id: 'why-remove',
      title: 'We pay. Police gain power.',
      summary:
        'Working people fund the contract. Police gain more capacity to watch and search. A private company receives recurring revenue. Paying for the system does not give us control over how it is used.',
      points: [
        {
          text: 'A vehicle does not have to be linked to a crime to be recorded. Everyday trips can become searchable data.'
        },
        {
          text: 'The consequences are not equal. People already exposed to heavy policing, immigration enforcement, or abuse have more to lose when travel records are exposed or misused.'
        }
      ]
    },
    {
      id: 'removal-demand',
      title: petitionDemand.title,
      summary: petitionDemand.leadIn,
      paragraphs: [{ text: petitionDemand.introduction }],
      points: petitionDemand.demands.map((text) => ({ text }))
    },
    {
      id: 'system',
      title: 'Stockton bought a mass surveillance network, not just license plate readers',
      summary:
        'A plate reader captures a vehicle at one place and time. Connected software lets police search those records alongside other information.',
      points: [
        { text: 'License plates, vehicle details, time, and location.' },
        {
          text: 'Video from enabled cameras and the mobile camera trailer.'
        },
        {
          text: 'Drone video and emergency-call information.'
        }
      ]
    },
    {
      id: 'safeguards',
      title: 'Access rules do not end mass collection',
      summary:
        'An immigration-enforcement ban and strict access rules can reduce harm during the fight for removal. They do not replace the demand to remove Flock and prevent a replacement surveillance system.',
      paragraphs: [
        {
          text: 'Other California cities found gaps between written policy and the platform’s settings or network access in practice.',
          sourceIds: ['mountain-view-termination', 'oxnard-suspension', 'los-altos-community-message']
        }
      ]
    },
    {
      id: 'real-safety',
      title: 'Build the things that keep us safe',
      summary:
        'Violence and insecurity are real. A private surveillance subscription cannot give us a stable home, safe work, or care when we need it. Public money should build those foundations, with working people deciding what gets funded and how it is run.',
      points: [
        { text: 'Stable housing, repairs, and tenant protections from displacement.' },
        {
          text: 'Safe workplaces, reliable transit, lighting, and maintained public spaces.'
        },
        {
          text: 'Youth programs, crisis care, violence prevention, and support for survivors.'
        }
      ]
    },
    {
      id: 'participate',
      title: 'Help shape this campaign',
      summary:
        'Want to help decide how this campaign is organized? Join Working Class Unity. We can bring neighbors into the fight, plan public action, and build an organization that lasts beyond one council vote.',
      closingParagraphs: [
        {
          text: 'You do not have to be a member to take part in public campaign activities. But becoming a dues-paying member means having a vote in deciding the direction we take and taking responsibility for our shared work.'
        }
      ]
    }
  ],
  sources: [...stocktonSources, ...safeguardsSources]
} as const satisfies CampaignPageContent
