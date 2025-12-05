<script setup lang="ts">
const { t } = useI18n()

// =============================================================================
// SEO Meta Tags
// =============================================================================
useHead({
  title: t('kyr.overview.title'),
})

useSeoMeta({
  description: t('kyr.overview.description'),
  ogType: 'website',
  ogTitle: `${t('kyr.overview.title')} | Working Class Unity`,
  ogDescription: t('kyr.overview.description'),
  ogImage: 'https://workingclassunity.com/logo_dark.svg',
  ogUrl: 'https://workingclassunity.com/know-your-rights',
  twitterCard: 'summary_large_image',
  twitterTitle: `${t('kyr.overview.title')} | Working Class Unity`,
  twitterDescription: t('kyr.overview.description'),
})

// =============================================================================
// Schema.org Structured Data
// =============================================================================
useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    'name': t('kyr.overview.title'),
    'description': t('kyr.overview.description'),
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: t('nav.kyr') },
    ],
  }),
])
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ $t('kyr.overview.title') }}</h1>
    <div class="prose lg:prose-xl mb-8">
      <!-- Content for Know Your Rights Overview -->
      <p>Content coming soon...</p>
    </div>
    
    <LazyKnowYourRightsNav hydrate-on-idle />
  </div>
</template>