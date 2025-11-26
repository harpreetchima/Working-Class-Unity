<template>
  <div class="flex flex-col gap-12 pb-12">
    <!-- Hero Section -->
    <div class="hero min-h-[60vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold mb-6 capitalize">{{ $t('join.hero.title') }}</h1>
          <p class="py-6 text-xl">{{ $t('join.hero.description') }}</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 flex flex-col gap-16">
      <!-- Membership/Pricing Cards -->
      <section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Rank and File Member ($10 - Orange) -->
          <div class="card bg-primary text-primary-content shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl mb-2 uppercase font-black">{{ $t('join.membership.rank_and_file.title') }}</h2>
              <p class="mb-4 font-medium">{{ $t('join.membership.rank_and_file.description') }}</p>
              <div class="text-4xl font-bold mb-6">{{ $t('join.membership.rank_and_file.price') }}</div>
              <div class="card-actions">
                <a href="https://pay.workingclassunity.com/b/7sI4hF1hc9IIepq4gh" target="_blank" class="btn btn-neutral px-8">{{ $t('join.membership.rank_and_file.button') }}</a>
              </div>
            </div>
          </div>

          <!-- Solidarity Member ($27 - Red) -->
          <div class="indicator w-full">
            <span class="indicator-item indicator-top indicator-center badge badge-warning badge-lg">Recommended</span>
            <div class="card bg-error text-error-content shadow-xl w-full transform hover:-translate-y-2 transition-transform duration-300">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl mb-2 uppercase font-black">{{ $t('join.membership.solidarity.title') }}</h2>
              <p class="mb-4 font-medium">{{ $t('join.membership.solidarity.description') }}</p>
                <div class="text-4xl font-bold mb-6">{{ $t('join.membership.solidarity.price') }}</div>
                <div class="card-actions">
                  <a href="https://pay.workingclassunity.com/b/bIY4hF4tof325SUaEE" target="_blank" class="btn btn-neutral px-8">{{ $t('join.membership.solidarity.button') }}</a>
                </div>
              </div>
            </div>
          </div>

          <!-- One Time Donation (Donate - Blue) -->
          <div class="card bg-secondary text-secondary-content shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl mb-2 uppercase font-black">{{ $t('join.membership.donate.title') }}</h2>
              <p class="mb-4 font-medium">{{ $t('join.membership.donate.description') }}</p>
              <div class="text-4xl font-bold mb-6">{{ $t('join.membership.donate.price') }}</div>
              <div class="card-actions">
                <a href="https://pay.workingclassunity.com/b/aEU5lJbVQ2gg1CE002" target="_blank" class="btn btn-outline btn-neutral px-8">{{ $t('join.membership.donate.button') }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Membership Benefits -->
      <section>
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold mb-4 capitalize">{{ $t('join.benefits.title') }}</h2>
          <p class="text-xl max-w-3xl mx-auto">{{ $t('join.benefits.description') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card bg-base-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.voting.title') }}</h3>
              <p>{{ $t('join.benefits.items.voting.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.leadership.title') }}</h3>
              <p>{{ $t('join.benefits.items.leadership.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 018.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73m0-3.46a24.347 24.347 0 010 3.46" />
              </svg>
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.campaigns.title') }}</h3>
              <p>{{ $t('join.benefits.items.campaigns.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.education.title') }}</h3>
              <p>{{ $t('join.benefits.items.education.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- FAQ Section -->
      <section class="max-w-3xl mx-auto w-full">
        <h2 class="text-3xl font-bold text-center mb-2">{{ $t('join.faq.title') }}</h2>
        <p class="text-center mb-8 text-gray-500">{{ $t('join.faq.subtitle') }}</p>
        
        <div class="flex flex-col gap-4">
          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" checked="checked" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('join.faq.items.eligibility.question') }}
            </div>
            <div class="collapse-content"> 
              <p>{{ $t('join.faq.items.eligibility.answer') }}</p>
            </div>
          </div>

          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('join.faq.items.good_standing.question') }}
            </div>
            <div class="collapse-content"> 
              <p>{{ $t('join.faq.items.good_standing.answer') }}</p>
            </div>
          </div>

          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('join.faq.items.dues.question') }}
            </div>
            <div class="collapse-content"> 
              <p>{{ $t('join.faq.items.dues.answer') }}</p>
            </div>
          </div>

          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('join.faq.items.contact.question') }}
            </div>
            <div class="collapse-content"> 
              <i18n-t keypath="join.faq.items.contact.answer" tag="p">
                <template #link>
                  <a href="https://cal.com/workingclassunity/15min" target="_blank" class="link link-primary">{{ $t('join.faq.items.contact.link_text') }}</a>
                </template>
              </i18n-t>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Join WCU'
})
</script>