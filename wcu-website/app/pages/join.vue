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
          <div class="card bg-error text-error-content shadow-xl relative transform hover:-translate-y-2 transition-transform duration-300">
             <div class="absolute top-0 right-0 -mt-3 -mr-3">
               <div class="badge badge-warning badge-lg">Recommended</div>
             </div>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl mb-2 uppercase font-black">{{ $t('join.membership.solidarity.title') }}</h2>
              <p class="mb-4 font-medium">{{ $t('join.membership.solidarity.description') }}</p>
              <div class="text-4xl font-bold mb-6">{{ $t('join.membership.solidarity.price') }}</div>
              <div class="card-actions">
                <a href="https://pay.workingclassunity.com/b/bIY4hF4tof325SUaEE" target="_blank" class="btn btn-neutral px-8">{{ $t('join.membership.solidarity.button') }}</a>
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
                <a href="https://pay.workingclassunity.com/b/aEU5lJbVQ2gg1CE002" target="_blank" class="btn bg-white text-secondary hover:bg-gray-200 border-none px-8">{{ $t('join.membership.donate.button') }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Membership Benefits -->
      <section>
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold mb-4 capitalize">{{ $t('join.benefits.title') }}</h2>
          <p class="text-xl max-w-3xl mx-auto">{{ $t('join.benefits.description') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.voting.title') }}</h3>
              <p>{{ $t('join.benefits.items.voting.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.leadership.title') }}</h3>
              <p>{{ $t('join.benefits.items.leadership.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.campaigns.title') }}</h3>
              <p>{{ $t('join.benefits.items.campaigns.description') }}</p>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title capitalize">{{ $t('join.benefits.items.education.title') }}</h3>
              <p>{{ $t('join.benefits.items.education.description') }}</p>
            </div>
          </div>
        </div>
      </section>

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