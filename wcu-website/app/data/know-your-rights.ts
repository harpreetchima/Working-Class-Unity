export interface KnowYourRightsResource {
  slug: string
  titleKey: string
  descriptionKey: string
  icon: string
}

export const knowYourRightsResources: KnowYourRightsResource[] = [
  {
    slug: 'ice-in-public',
    titleKey: 'kyr.public.title',
    descriptionKey: 'kyr.public.description',
    icon: '🏙️'
  },
  {
    slug: 'ice-pulls-you-over',
    titleKey: 'kyr.car.title',
    descriptionKey: 'kyr.car.description',
    icon: '🚗'
  },
  {
    slug: 'ice-at-home',
    titleKey: 'kyr.home.title',
    descriptionKey: 'kyr.home.description',
    icon: '🏠'
  },
  {
    slug: 'ice-at-work',
    titleKey: 'kyr.work.title',
    descriptionKey: 'kyr.work.description',
    icon: '🏢'
  },
  {
    slug: 'documents-to-keep',
    titleKey: 'kyr.documents.title',
    descriptionKey: 'kyr.documents.description',
    icon: '📂'
  }
]