export interface NavigationDestination {
  path: string
  label: string
  description?: string
  datetime?: string
}

export interface CampaignNavigationGroup extends NavigationDestination {
  links: readonly NavigationDestination[]
}

export const flockNavigation = {
  path: '/campaigns/remove-flock-stockton',
  label: 'navigation.removeFlock',
  links: [
    {
      path: '/campaigns/remove-flock-stockton',
      label: 'navigation.removeFlock',
      description: 'navigation.workDescriptions.flock'
    },
    {
      path: '/campaigns/remove-flock-stockton/what-stockton-bought',
      label: 'removeFlock.navigation.whatStocktonBought',
      description: 'navigation.workDescriptions.contract'
    },
    {
      path: '/campaigns/remove-flock-stockton/why-safeguards-are-not-enough',
      label: 'removeFlock.navigation.whySafeguards',
      description: 'navigation.workDescriptions.removal'
    },
    {
      path: '/campaigns/remove-flock-stockton/faq',
      label: 'removeFlock.navigation.faq',
      description: 'navigation.workDescriptions.faq'
    }
  ]
} as const satisfies CampaignNavigationGroup

export const currentWorkNavigation = [
  flockNavigation,
  {
    label: 'navigation.otherCurrentWork',
    links: [
      {
        path: '/campaigns/united-front',
        label: 'unitedfront.pageTitle',
        description: 'navigation.workDescriptions.unitedFront'
      },
      {
        path: '/campaigns/know-your-rights',
        label: 'navigation.knowYourRights',
        description: 'navigation.workDescriptions.rights'
      }
    ]
  }
] as const satisfies readonly { label: string; links: readonly NavigationDestination[] }[]
