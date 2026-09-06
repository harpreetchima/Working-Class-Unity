import { petitionDemand } from './petition'
import { safeguardsSources, stocktonSources } from './sources'
import type { CampaignPageContent } from './types'

export const whySafeguardsPage = {
  path: '/campaigns/remove-flock-stockton/why-safeguards-are-not-enough',
  eyebrow: 'WHY REMOVAL',
  title: 'Removal, Not Reform',
  description:
    'Stockton should end everyday collection of people’s movements and remove the system that makes those records searchable. Police search power, a private vendor’s platform, and the public money paying for it belong at the center of this debate.',
  qualification:
    'People need safe streets, protection from violence, and help when an emergency happens. Those needs deserve a serious answer. Working people should have lasting control over the institutions and budgets meant to keep us safe.',
  sections: [
    {
      id: 'ice-ban',
      title: 'An ICE ban would address one danger, not the system that creates it',
      summary:
        'A clear ban on U.S. Immigration and Customs Enforcement access would protect people now. We support that ban and other firm interim protections.',
      paragraphs: [
        {
          text: 'The ban would leave everyday collection, police search power, drones, connected tools, vendor dependence, and public spending intact. Police would retain the ability to search records through a platform managed in part by a private company.'
        },
        {
          text: 'The larger question remains: should the city use public money to create searchable records of ordinary travel when residents are not suspected of wrongdoing?'
        }
      ]
    },
    {
      id: 'california-warnings',
      title: 'California cities already had safeguards',
      summary: 'Written policy and actual platform access did not always match.',
      paragraphs: [
        {
          text: 'Mountain View terminated its Flock contract after a city audit found federal and state access that violated city policy. The city had already turned off its cameras.',
          sourceIds: ['mountain-view-termination', 'mountain-view-council-report']
        },
        {
          text: 'Oxnard suspended its cameras after an audit found that a vendor-enabled nationwide query let outside and federal agencies include Oxnard data in searches without city approval.',
          sourceIds: ['oxnard-suspension']
        },
        {
          text: 'Los Altos reported that a statewide lookup setting had been active without city approval. The city said this conflicted with policy and asked Flock to turn it off.',
          sourceIds: ['los-altos-community-message']
        },
        {
          text: "These records do not show that rules are useless. Rules can reduce harm, but they depend on software settings, access permissions, vendor conduct, audits, enforcement, and public verification. A protection on paper is only as strong as the public's ability to verify and enforce it."
        }
      ]
    },
    {
      id: 'collection',
      title: 'The collection itself creates the danger',
      summary: 'A vehicle-location record is a record of human movement.',
      paragraphs: [
        {
          text: 'Automated license-plate readers record plates, vehicle details, time, and location, then turn those observations into searchable records. Collection comes first. A judgment about relevance comes later.'
        },
        {
          text: 'California’s Attorney General has warned that plate data can reveal patterns tied to homes, workplaces, schools, medical care, places of worship, and daily movement.',
          sourceIds: ['california-ag-el-cajon']
        },
        {
          text: 'Every passing vehicle may enter the system, but the consequences are unequal. Immigrant families, workers organizing on the job, tenants facing retaliation, protesters, survivors, and people seeking sensitive healthcare face greater danger when police or other institutions with power over their lives can reach those records.'
        },
        {
          text: "This is not only a privacy question. It is a question of who controls public money, information, and police search power. Working people should not have to surrender freedom of movement in exchange for public safety. We can fight for safety through prevention, care, useful public services, and accountable emergency response without recording everyone's everyday travel."
        }
      ]
    },
    {
      id: 'limited-use',
      title: 'Limited-use promises do not justify recording everyone',
      summary: 'A narrow search policy cannot turn broad collection into a targeted investigation.',
      paragraphs: [
        {
          text: 'A system does not need a name-search field to expose where a person lives, works, worships, receives care, or meets other people. Repeated vehicle records can reveal patterns about a person’s life.'
        },
        {
          text: 'Targeted investigations should be targeted. Stockton should not build a standing pool of movement records for later police searches.'
        },
        {
          text: 'The drone agreement places parts of public operations inside Flock’s technology, permissions, and contract terms. Public money pays for the system, police gain search power, and a private vendor retains control over parts of the platform. That relationship weakens public control.',
          sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
        },
        {
          text: 'Audit records may reveal less than readers expect. 404 Media reported that agencies were advised to be “as vague as permissible” when recording reasons for Flock searches.',
          sourceIds: ['404-vague-search-reasons']
        }
      ]
    },
    {
      id: 'removal',
      title: 'Removal is the only answer',
      summary: 'Organize to dismantle the system and prevent it from returning under another name.',
      paragraphs: [
        {
          text: 'Our petition calls for an end to every Flock contract, a stop to expansion, lawful data deletion, a public closeout record, and a ban on recreating the same tracking function under another name.'
        },
        {
          text: 'By signing, you’re urging the Stockton City Council to pass a Flock Removal Resolution that ends this surveillance system, prevents it from returning under another name, and restores meaningful public control over how surveillance technology is funded and used.'
        }
      ],
      points: petitionDemand.demands.map((text) => ({ text })),
      orderedPoints: true,
      closingParagraphs: [
        {
          text: 'Residents and workers can sign, talk with coworkers and neighbors, press the City Council, and monitor removal. Staying organized after the cameras come down can build lasting worker control over public budgets and safety institutions, with money directed toward stable homes, safe work, care, prevention, useful public services, and accountable emergency response.'
        }
      ]
    },
    {
      id: 'sources',
      title: 'Sources',
      summary:
        'City records, California public-agency notices, and reviewed reporting sit next to the claims they support.'
    }
  ],
  sources: [...safeguardsSources, ...stocktonSources]
} as const satisfies CampaignPageContent
