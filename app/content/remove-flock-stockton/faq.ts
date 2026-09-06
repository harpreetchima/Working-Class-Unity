import { faqSources, safeguardsSources, stocktonSources } from './sources'
import type { CampaignFaqGroup, CampaignPageContent } from './types'

export const faqGroups = [
  {
    id: 'basics',
    title: 'Flock and everyday life',
    summary: 'What the system records and why it matters.',
    items: [
      {
        id: 'what-is-flock',
        question: 'What is Flock?',
        answer: [
          {
            parts: [
              {
                text: 'Flock Safety is a private company that sells surveillance equipment and software. Its license-plate readers record plates, vehicle details, time, and location so police can search them later.',
                citations: [
                  {
                    sourceId: 'flock-license-plate-readers',
                    locator: 'FAQ: What is an automated license plate reader?'
                  }
                ]
              },
              {
                text: ' Stockton’s contracts connect emergency calls and authorize drones, radar, and video search.',
                citations: [{ sourceId: 'stockton-mar-2026-amendment' }, { sourceId: 'stockton-jul-2024-staff-report' }]
              }
            ]
          }
        ]
      },
      {
        id: 'nothing-to-hide',
        question: 'Why worry if I have done nothing wrong?',
        answer: [
          {
            text: 'The cameras collect vehicle records before anyone decides whether they relate to a crime. Repeated records can reveal where someone lives, works, worships, or gets medical care.',
            sourceIds: ['flock-license-plate-readers', 'california-ag-el-cajon']
          },
          {
            text: 'You should not have to justify ordinary travel to police. The stakes are especially high when immigration status, organizing at work, protest, or sensitive healthcare could be used against someone.'
          }
        ]
      },
      {
        id: 'stolen-cars',
        question: 'What about stolen cars and violent crime?',
        answer: [
          {
            text: 'A stolen car can cost someone their job. Violence can change a life. Flock markets its system as a way to find wanted vehicles and generate investigative leads.',
            sourceIds: ['flock-license-plate-readers']
          },
          {
            text: 'A useful lead does not settle whether the City should collect everyone’s travel records for later searches. We want targeted investigations and dependable emergency response, alongside housing, care, safe streets, and prevention that residents can help shape.'
          }
        ]
      }
    ]
  },
  {
    id: 'money-and-control',
    title: 'Public money and control',
    summary: 'Who pays, who decides, and what the records establish.',
    items: [
      {
        id: 'cost',
        question: 'How much has Council committed to Flock?',
        answer: [
          {
            text: 'Council approved an additional $3.15 million on March 31, 2026, bringing the combined contract maximum to $5,416,700 and extending the term through April 14, 2031. The maximum is authorized spending, not a total of money already spent.',
            sourceIds: ['stockton-mar-2026-staff-report', 'stockton-mar-2026-amendment']
          }
        ]
      },
      {
        id: 'grants',
        question: 'What if grants pay for it?',
        answer: [
          {
            text: 'Grants are public money, and future grants are not guaranteed. Stockton’s funding plan says the City would need other appropriations or termination if grant and police funding fall short.',
            sourceIds: ['stockton-mar-2026-staff-report']
          },
          {
            text: 'Keeping the system means continuing to pay for it. Some grant funds are restricted, so removal would not automatically free every contract dollar for another program. It would stop further commitments to this private surveillance system.'
          }
        ]
      },
      {
        id: 'ice-access',
        question: 'Has Stockton shared Flock data with ICE?',
        answer: [
          {
            text: 'The reviewed local records do not establish a Stockton-to-ICE transfer. The archived portal lists sharing settings and masked search records; neither identifies everyone who requested or received information. “USMS case” labels refer to the U.S. Marshals Service, a different agency from ICE.',
            sourceIds: ['stockton-portal-2026-08-08', 'usms-about']
          },
          {
            text: 'That gap matters. Residents should be able to audit access to records of our travel. Our demand for removal does not depend on claiming a transfer we cannot prove.'
          }
        ]
      },
      {
        id: 'stronger-rules',
        question: 'Why not keep Flock with stricter rules?',
        answer: [
          {
            text: 'An immigration-enforcement ban and firm access limits can protect people during removal. They leave the underlying collection, police search power, and dependence on Flock in place.'
          },
          {
            text: 'Other California cities found access settings that conflicted with their policies. Those are warnings from other cities, not proof of the same events in Stockton. We are organizing to end the system, not make permanent tracking easier to administer.',
            sourceIds: ['mountain-view-termination', 'oxnard-suspension', 'los-altos-community-message']
          }
        ]
      }
    ]
  },
  {
    id: 'taking-action',
    title: 'Winning removal together',
    summary: 'What signing contributes and how to take part.',
    items: [
      {
        id: 'meaning-of-removal',
        question: 'What would the removal resolution do?',
        answer: [
          {
            text: 'It would end Flock contracts at the earliest lawful date, stop expansion, require lawful data deletion, publish a complete closeout record, and prevent Stockton from recreating the same mass-tracking system under another name. Switching vendors would not meet the demand.'
          }
        ]
      },
      {
        id: 'signing',
        question: 'What happens when I sign?',
        answer: [
          {
            text: 'You add your name to the demand that Stockton City Council pass the removal resolution. A signature helps show organized opposition; it does not cancel the contract by itself.'
          },
          {
            text: 'Winning requires people to talk with neighbors and coworkers, bring the demand to Council, and stay involved to verify removal. Those relationships and skills give working people more power over future decisions about public money and safety.'
          }
        ]
      },
      {
        id: 'resident-action',
        question: 'Do I have to join WCU to help?',
        answer: [
          {
            text: 'No. You can sign, share the petition, attend public meetings, help with research or translation, and distribute campaign materials without becoming a member.'
          },
          {
            text: 'WCU membership is a separate commitment. Dues-paying members have a vote in the organization’s direction and take responsibility for shared work.'
          }
        ]
      }
    ]
  }
] as const satisfies readonly CampaignFaqGroup[]

export const campaignFaqPage = {
  path: '/campaigns/remove-flock-stockton/faq',
  eyebrow: '',
  title: 'Stockton Flock FAQ',
  description: 'Questions about safety, surveillance, public money, and how we can win removal together.',
  sections: faqGroups.map((group) => ({ id: group.id, title: group.title, summary: group.summary })),
  sources: [...stocktonSources, ...safeguardsSources, ...faqSources]
} as const satisfies CampaignPageContent
