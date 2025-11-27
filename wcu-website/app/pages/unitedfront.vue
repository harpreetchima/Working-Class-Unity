<template>
  <div>
    <!-- Hero Section -->
    <header class="hero bg-base-200 py-16 mb-12">
      <div class="hero-content text-center">
        <div class="max-w-3xl">
          <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {{ $t('unitedfront.title') }}
          </h1>
          <p class="text-xl italic text-secondary mb-8">
            {{ $t('unitedfront.subtitle') }}
          </p>
          <a href="#solidarity" class="btn btn-primary">Add Your Name</a>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 max-w-7xl flex gap-12 relative">
      <!-- Sticky Table of Contents (Desktop) -->
      <aside class="hidden lg:block w-64 shrink-0">
        <div class="sticky top-24">
          <ul class="menu bg-base-100 rounded-box w-full shadow-sm border border-base-200">
            <li class="menu-title">Contents</li>
            <li><a href="#what-we-face">{{ $t('unitedfront.whatWeFace.heading') }}</a></li>
            <li><a href="#who-we-are">{{ $t('unitedfront.whoWeAre.heading') }}</a></li>
            <li><a href="#our-principles">{{ $t('unitedfront.ourPrinciples.heading') }}</a></li>
            <li><a href="#united-front">{{ $t('unitedfront.unitedFront.heading') }}</a></li>
            <li><a href="#demands">{{ $t('unitedfront.longTermDemands.heading') }}</a></li>
            <li><a href="#pledge">{{ $t('unitedfront.pledge.heading') }}</a></li>
          </ul>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 max-w-4xl mx-auto">
        <article class="prose lg:prose-lg max-w-none">
          <!-- What We Face -->
          <section id="what-we-face" class="scroll-mt-24">
            <h2>{{ $t('unitedfront.whatWeFace.heading') }}</h2>
            <p>{{ $t('unitedfront.whatWeFace.content') }}</p>
          </section>

          <!-- Who We Are -->
          <section id="who-we-are" class="scroll-mt-24">
            <h2>{{ $t('unitedfront.whoWeAre.heading') }}</h2>
            <p>{{ $t('unitedfront.whoWeAre.content') }}</p>
          </section>

          <!-- Our Principles -->
          <section id="our-principles" class="scroll-mt-24">
            <h2>{{ $t('unitedfront.ourPrinciples.heading') }}</h2>
            <p>{{ $t('unitedfront.ourPrinciples.content1') }}</p>
            <p>{{ $t('unitedfront.ourPrinciples.content2') }}</p>
            <p>{{ $t('unitedfront.ourPrinciples.content3') }}</p>
          </section>

          <!-- A United Front -->
          <section id="united-front" class="scroll-mt-24">
            <h2>{{ $t('unitedfront.unitedFront.heading') }}</h2>
            <p>{{ $t('unitedfront.unitedFront.content') }}</p>
          </section>

          <!-- Why We Must Stand Together -->
          <section>
            <h2>{{ $t('unitedfront.whyStandTogether.heading') }}</h2>
            <p>{{ $t('unitedfront.whyStandTogether.content') }}</p>
          </section>

          <!-- Why Neither Party -->
          <section>
            <h2>{{ $t('unitedfront.whyNeitherParty.heading') }}</h2>
            <p>{{ $t('unitedfront.whyNeitherParty.content') }}</p>
          </section>

          <!-- Not Slogans Alone -->
          <section>
            <h2>{{ $t('unitedfront.notSlogans.heading') }}</h2>
            <p>{{ $t('unitedfront.notSlogans.content') }}</p>
          </section>

          <!-- Long Term Demands -->
          <section id="demands" class="scroll-mt-24">
            <h2>{{ $t('unitedfront.longTermDemands.heading') }}</h2>
            <p>{{ $t('unitedfront.longTermDemands.intro') }}</p>
            <ul>
              <li>{{ $t('unitedfront.longTermDemands.demand1') }}</li>
              <li>{{ $t('unitedfront.longTermDemands.demand2') }}</li>
              <li>{{ $t('unitedfront.longTermDemands.demand3') }}</li>
              <li>{{ $t('unitedfront.longTermDemands.demand4') }}</li>
            </ul>
          </section>

          <!-- Our Pledge -->
          <section id="pledge" class="scroll-mt-24 mt-12 mb-16">
            <blockquote class="not-italic bg-base-200 p-8 border-4 border-accent rounded-box shadow-sm relative overflow-hidden">
               <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                 </svg>
               </div>
              <h2 class="text-accent mt-0 mb-6">{{ $t('unitedfront.pledge.heading') }}</h2>
              <p class="text-lg font-medium leading-relaxed mb-0">{{ $t('unitedfront.pledge.content') }}</p>
            </blockquote>
          </section>
        </article>
      </main>
    </div>

    <!-- Solidarity Section (Full Width CTA) -->
    <section id="solidarity" class="bg-secondary text-secondary-content py-20 mt-20 scroll-mt-20">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-8">
          {{ $t('unitedfront.solidarity.heading') }}
        </h2>
        
        <div class="card bg-base-100 text-base-content max-w-2xl mx-auto shadow-xl">
          <div class="card-body">
            <p class="text-base-content/70 italic text-lg">{{ $t('unitedfront.solidarity.formPlaceholder') }}</p>
            <!-- Placeholder for form fields -->
            <div class="flex flex-col gap-4 mt-6">
               <div class="skeleton h-12 w-full rounded-field"></div>
               <div class="skeleton h-32 w-full rounded-field"></div>
               <button class="btn btn-primary btn-lg w-full">Sign the Pledge</button>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mt-12">
           <button class="btn btn-outline text-secondary-content border-secondary-content hover:bg-secondary-content hover:text-secondary">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
             </svg>
             Share
           </button>
           <NuxtLinkLocale to="/join" class="btn btn-accent">Join Us</NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Return Home -->
    <div class="text-center py-12 bg-base-200">
      <NuxtLinkLocale to="/" class="btn btn-outline">Return Home</NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'United Front'
})
</script>