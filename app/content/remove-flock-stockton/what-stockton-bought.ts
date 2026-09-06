import { stocktonSources } from './sources'
import type { CampaignFact, CampaignPageContent, CampaignTimelineEntry } from './types'

export const stocktonContractFacts = [
  {
    value: '$5,416,700',
    label: 'Contract maximum',
    detail:
      'According to reviewed documentation, the combined contract cap includes the $3.15 million expansion approved in March 2026.',
    sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
  },
  {
    value: '120+ cameras',
    label: 'License-plate readers',
    detail: 'The City contracted for 120 readers. Flock’s portal reported 147 cameras in its August 8, 2026 archive.',
    sourceIds: ['stockton-nov-2024-staff-report', 'stockton-portal-2026-08-08']
  },
  {
    value: '6 drones',
    label: 'Drones and docks',
    detail: 'Approved for remote launch and aerial video during police responses.',
    sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
  },
  {
    value: '2 radar units',
    label: 'Radar',
    detail: 'Included in the approved drone package.',
    sourceIds: ['stockton-mar-2026-amendment']
  },
  {
    value: '911 integration',
    label: 'Emergency calls',
    detail:
      'Prepared 911 connects caller location, transcription, translation, and caller-provided media. The latest package adds Flock911.',
    sourceIds: ['stockton-jul-2024-staff-report', 'stockton-mar-2026-amendment']
  },
  {
    value: '1 mobile trailer',
    label: 'Mobile equipment',
    detail: 'A movable surveillance trailer is included in the approved package.',
    sourceIds: ['stockton-mar-2026-amendment']
  },
  {
    value: '10 video streams',
    label: 'Connected video and search',
    detail:
      'The package includes ten compatible video streams and FreeForm search, linking more video to police searches.',
    sourceIds: ['stockton-mar-2026-amendment']
  }
] as const satisfies readonly CampaignFact[]

export const stocktonTimeline = [
  {
    date: 'September 2023',
    action: 'Stockton signs its first Flock contract',
    vote: '',
    description: 'Stockton signed its first Flock contract: $97,400 for 15 cameras.',
    sourceIds: ['stockton-nov-2024-staff-report', 'stockton-jul-2024-amendment'],
    status: 'verified'
  },
  {
    date: 'July 9, 2024',
    action: 'Council connects Flock to 911 response',
    vote: 'Voted yes by: Michael Blower, Brando Villapudua, Michele Padilla, Kevin J Lincoln II, Kimberly Warmsley, Daniel Wright.',
    description: 'Council approved $877,600 for Prepared 911 integration. The vote passed 6–0; Susan Lenz was absent.',
    sourceIds: ['stockton-jul-2024-minutes', 'stockton-jul-2024-staff-report', 'stockton-jul-2024-amendment'],
    status: 'verified'
  },
  {
    date: 'November 12, 2024',
    action: 'Council accepts a federal technology grant',
    vote: 'Voted yes by: Michael Blower, Brando Villapudua, Michele Padilla, Susan Lenz, Kimberly Warmsley, Daniel Wright.',
    description:
      'Council accepted a $963,000 federal technology grant, including funding for more plate readers. The vote passed 6–0; Kevin J Lincoln II was absent.',
    sourceIds: [
      'stockton-nov-2024-grant-minutes',
      'stockton-nov-2024-grant-report',
      'stockton-nov-2024-grant-award',
      'stockton-nov-2024-grant-resolution'
    ],
    status: 'verified'
  },
  {
    date: 'November 19, 2024',
    action: 'Council adds 105 cameras',
    vote: 'Voted yes by: Michael Blower, Brando Villapudua, Michele Padilla, Susan Lenz, Kevin J Lincoln II, Kimberly Warmsley, Daniel Wright.',
    description:
      'Council approved $1,196,700 for 105 more cameras and software connecting them to Flock’s wider system. The vote passed 7–0.',
    sourceIds: ['stockton-nov-2024-minutes', 'stockton-nov-2024-staff-report', 'stockton-nov-2024-amendment'],
    status: 'verified'
  },
  {
    date: 'June 26, 2025',
    action: 'City extends the agreement',
    vote: '',
    description:
      'The City executed a $95,000 extension, according to the March 2026 staff report. The underlying amendment is missing from the reviewed archive.',
    sourceIds: ['stockton-mar-2026-staff-report'],
    status: 'reported-with-gap'
  },
  {
    date: 'March 31, 2026',
    action: 'Council approves drones and another five years',
    vote: 'Voted yes by: Christina Fugazi, Michael Blower, Brando Villapudua, Michele Padilla, Mariela Ponce, Mario Enríquez, Jason Lee.',
    description:
      'The City Council approved a $3.15 million package and extended the agreement through April 14, 2031. The item passed 7–0 after separate consideration.',
    sourceIds: ['stockton-mar-2026-minutes', 'stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment'],
    status: 'verified'
  }
] as const satisfies readonly CampaignTimelineEntry[]

export const stocktonCostStack = [
  {
    amount: '$97,400',
    label: 'Original contract',
    detail: 'Recorded in the Amendment No. 1 change-order calculator.',
    sourceIds: ['stockton-jul-2024-amendment']
  },
  {
    amount: '$877,600',
    label: 'Amendment No. 1',
    detail: 'Prepared 911 integration.',
    sourceIds: ['stockton-jul-2024-staff-report', 'stockton-jul-2024-amendment']
  },
  {
    amount: '$1,196,700',
    label: 'Amendment No. 2',
    detail: '105 more cameras and software connecting them to the wider system.',
    sourceIds: ['stockton-nov-2024-staff-report', 'stockton-nov-2024-amendment']
  },
  {
    amount: '$95,000',
    label: 'Amendment No. 3',
    detail: 'Reported in the 2026 staff report; the underlying amendment remains missing from the reviewed archive.',
    sourceIds: ['stockton-mar-2026-staff-report']
  },
  {
    amount: '$3,150,000',
    label: 'Amendment No. 4',
    detail: 'Drone as First Responder package.',
    sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
  }
] as const

export const whatStocktonBoughtPage = {
  path: '/campaigns/remove-flock-stockton/what-stockton-bought',
  eyebrow: 'THE PUBLIC RECORD',
  title: 'What Stockton Bought',
  description:
    'Real safety takes work. Stockton City Council chose a $3.15 million shortcut: more Flock technology to watch us. Here is the system Council approved, what it costs, and how it puts public operations in a private company’s hands.',
  sections: [
    {
      id: 'bottom-line',
      title: 'Mass Surveillance Built Step by Step',
      summary:
        'City Council kept adding to the system. Each expansion committed more public money and made police operations more dependent on Flock.',
      paragraphs: [
        {
          text: 'Stockton started with 15 cameras, then added integration with our 911 response system and another 105 cameras. The latest contract adds drones, radar, a mobile trailer, and search tools that connect additional video streams. These are the contracted capabilities; the records do not establish that every item is operating.',
          sourceIds: [
            'stockton-jul-2024-staff-report',
            'stockton-nov-2024-grant-report',
            'stockton-nov-2024-staff-report',
            'stockton-mar-2026-staff-report',
            'stockton-mar-2026-amendment'
          ]
        },
        {
          text: 'On March 31, 2026, the current City Council approved an additional $3.15 million, extending Stockton’s contract with Flock through April 14, 2031.',
          sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
        }
      ]
    },
    {
      id: 'timeline',
      title: 'How the system grew',
      summary: 'City Council added more cameras, connected emergency calls, and approved the drone expansion.'
    },
    {
      id: 'costs',
      title: 'The Costs of Flock',
      summary: 'Public money committed through the original contract and four amendments.',
      paragraphs: [
        {
          text: 'Together, these authorizations set a $5,416,700 contract maximum.',
          sourceIds: ['stockton-mar-2026-amendment']
        }
      ]
    },
    {
      id: 'funding',
      title: 'Grants today, local tax dollars tomorrow',
      summary: 'The contract runs through April 14, 2031. Who pays to keep it running after that?',
      paragraphs: [
        {
          text: 'Stockton has used state criminal-justice funds, a federal technology grant, and police funding for Flock. The 2026 plan anticipates later grants, but this funding will not last forever.',
          sourceIds: [
            'stockton-jul-2024-staff-report',
            'stockton-nov-2024-grant-report',
            'stockton-nov-2024-grant-award',
            'stockton-nov-2024-staff-report',
            'stockton-mar-2026-staff-report'
          ]
        },
        {
          text: 'When grants end, keeping Flock means finding public money for subscriptions, staffing, training, and replacement equipment. The City can seek more funding or end the agreement. Each expansion ties us more closely to a private system that we fund but do not own or govern.'
        }
      ]
    },
    {
      id: 'procurement',
      title: 'No competitive bidding',
      summary: 'City Council approved expansions without competitive bidding.',
      paragraphs: [
        {
          text: 'City staff argued that Flock’s tools fit the existing system and that switching vendors could duplicate equipment or create compatibility problems. Earlier purchases became the reason to buy more from the same company.',
          sourceIds: ['stockton-nov-2024-staff-report', 'stockton-mar-2026-staff-report']
        }
      ]
    },
    {
      id: 'ownership',
      title: 'Flock owns the drone hardware and operational data',
      summary:
        'Stockton is committing public money to a system whose vendor reserves control over the hardware and a broad category of operational and derived information.',
      paragraphs: [
        {
          text: 'The drone addendum leaves ownership of its hardware with Flock and puts the risk of loss on Stockton after delivery. Flock reserves rights over operational and derived information, including aggregated or anonymized flight logs, telemetry, and usage data. The agreement excludes Customer Data from those specified rights.',
          sourceIds: ['stockton-mar-2026-amendment']
        },
        {
          text: 'Stockton City Council is making public safety operations depend on Flock’s technology, permissions, and contract terms.',
          sourceIds: ['stockton-mar-2026-amendment']
        }
      ]
    },
    {
      id: 'sharing-and-audits',
      title: 'Current sharing settings raise questions',
      summary:
        'Who can search records of our travel, and who decides? The archived sharing settings leave that question open.',
      paragraphs: [
        {
          text: 'The August 8, 2026 portal archive listed 320 sharing recipients, including the Northern California Regional Intelligence Center, El Cajon police, university police, and an unidentified “Decommissioned Org.” A listed recipient is a sharing configuration, not proof of a search or disclosure.',
          sourceIds: ['stockton-portal-2026-08-08']
        },
        {
          text: 'The public audit included 40 searches labeled “USMS case,” but masked every user’s identity. The U.S. Marshals Service is separate from Immigration and Customs Enforcement (ICE). Those labels do not establish who searched or received the records, and the archive does not establish a Stockton-to-ICE transfer.',
          sourceIds: ['stockton-portal-2026-08-08', 'usms-about']
        },
        {
          text: 'A City records response says a Stockton police administrator authorized the University of the Pacific through Flock’s portal, with no written agreement located. Residents need to know who approved access and what limits apply; this response does not show that the university used it.',
          sourceIds: ['stockton-uop-pra', 'california-alpr-law', 'california-ag-alpr-guidance']
        }
      ]
    },
    {
      id: 'sources',
      title: 'Sources and notes',
      summary: 'Official city documents sit next to the claims they support, followed by a full source list.'
    }
  ],
  sources: [
    ...stocktonSources,
    {
      id: 'stockton-mar-2026-minutes',
      title: 'Stockton City Council minutes, March 31, 2026',
      publisher: 'City of Stockton',
      published: 'March 31, 2026',
      url: 'https://stockton.granicus.com/MinutesViewer.php?clip_id=9431&view_id=48'
    }
  ]
} as const satisfies CampaignPageContent
