<script setup>
definePageMeta({
  title: 'nav.kyr'
})
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <div class="hero bg-base-200 min-h-[60vh] py-10">
      <div class="hero-content text-center">
        <div class="max-w-4xl">
          <h1 class="text-5xl font-bold mb-6">{{ $t('kyr_home.hero.title') }}</h1>
          
          <p class="py-6 text-lg lg:text-xl mb-8">
            {{ $t('kyr_home.hero.description') }}
          </p>
          
          <div class="flex flex-col lg:flex-row gap-4 justify-center mb-8">
            <!-- Button 1: Emergency & Preparation -->
            <a href="#rights-and-prep" class="btn btn-primary btn-lg h-auto py-4 flex-1 flex flex-col gap-2 items-center text-wrap">
              <span class="font-bold text-lg">{{ $t('kyr_home.buttons.emergency.title') }}</span>
              <span class="text-sm font-normal opacity-90">{{ $t('kyr_home.buttons.emergency.subtitle') }}</span>
            </a>
            
            <!-- Button 2: Request Support -->
            <NuxtLinkLocale to="checkinsupport" class="btn btn-secondary btn-lg h-auto py-4 flex-1 flex flex-col gap-2 items-center text-wrap">
              <span class="font-bold text-lg">{{ $t('kyr_home.buttons.support.title') }}</span>
              <span class="text-sm font-normal opacity-90">{{ $t('kyr_home.buttons.support.subtitle') }}</span>
            </NuxtLinkLocale>
            
            <!-- Button 3: Get Involved -->
            <a href="#get-involved" class="btn btn-accent btn-lg h-auto py-4 flex-1 flex flex-col gap-2 items-center text-wrap">
              <span class="font-bold text-lg">{{ $t('kyr_home.buttons.involved.title') }}</span>
              <span class="text-sm font-normal opacity-90">{{ $t('kyr_home.buttons.involved.subtitle') }}</span>
            </a>
          </div>
          
          <p class="text-xs text-base-content/60 italic">
            {{ $t('kyr_home.disclaimer') }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <!-- Section 2: Emergency & Preparation -->
      <section id="rights-and-prep" class="py-10 scroll-mt-20">
        <h2 class="text-3xl font-bold mb-6">{{ $t('kyr_home.sections.rights_prep_title') }}</h2>
        
        <!-- Emergency Box -->
        <div role="alert" class="alert alert-error shadow-lg mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <div>
            <i18n-t keypath="kyr_home.sections.emergency_box.text" tag="p" class="font-medium">
              <template #link>
                <a href="#" class="font-bold underline hover:opacity-80">
                  {{ $t('kyr_home.sections.emergency_box.link_text') }}
                </a>
              </template>
              <template #phone>
                <a href="tel:5592060151" class="font-bold underline hover:opacity-80">
                  {{ $t('kyr_home.sections.emergency_box.phone') }}
                </a>
              </template>
            </i18n-t>
          </div>
        </div>

        <div class="prose lg:prose-xl max-w-none mb-8">
          <blockquote>
            {{ $t('kyr_home.sections.rights_prep_intro') }}
          </blockquote>
        </div>
        <KnowYourRightsNav :seamless="true" :show-title="false" />
      </section>
    </div>

    <!-- Section 3: Get Involved -->
    <section id="get-involved" class="py-16 bg-base-200 scroll-mt-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6 text-center">{{ $t('kyr_home.get_involved_section.title') }}</h2>
        
        <div class="prose lg:prose-xl max-w-4xl mx-auto mb-12 text-center">
          <p>
            {{ $t('kyr_home.get_involved_section.intro') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Card A: Direct Support -->
          <div class="card bg-base-100 shadow-xl border border-base-300 h-full flex flex-col">
            <div class="card-body flex-grow">
              <h3 class="card-title text-2xl mb-4">{{ $t('kyr_home.get_involved_section.subsection_a.h3') }}</h3>
              <p class="mb-6 flex-grow">
                {{ $t('kyr_home.get_involved_section.subsection_a.copy') }}
              </p>
              <div class="card-actions flex flex-col gap-4 mt-auto">
                <NuxtLinkLocale to="check-in-coverage" class="btn btn-primary w-full flex-col h-auto py-3 items-start">
                  <span class="font-bold">{{ $t('kyr_home.get_involved_section.subsection_a.button_1.text') }}</span>
                  <span class="text-xs font-normal opacity-80 text-left">{{ $t('kyr_home.get_involved_section.subsection_a.button_1.subtext') }}</span>
                </NuxtLinkLocale>
                <a href="#" class="btn btn-outline w-full flex-col h-auto py-3 items-start">
                  <span class="font-bold">{{ $t('kyr_home.get_involved_section.subsection_a.button_2.text') }}</span>
                  <span class="text-xs font-normal opacity-80 text-left">{{ $t('kyr_home.get_involved_section.subsection_a.button_2.subtext') }}</span>
                </a>
                <a href="#" class="btn btn-outline w-full flex-col h-auto py-3 items-start">
                  <span class="font-bold">{{ $t('kyr_home.get_involved_section.subsection_a.button_3.text') }}</span>
                  <span class="text-xs font-normal opacity-80 text-left">{{ $t('kyr_home.get_involved_section.subsection_a.button_3.subtext') }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Card B: Political Commitment -->
          <div class="card bg-base-100 shadow-xl border border-base-300 h-full flex flex-col">
            <div class="card-body flex-grow">
              <h3 class="card-title text-2xl mb-4">{{ $t('kyr_home.get_involved_section.subsection_b.h3') }}</h3>
              <p class="mb-6 flex-grow">
                {{ $t('kyr_home.get_involved_section.subsection_b.copy') }}
              </p>
              <div class="card-actions flex flex-col gap-4 mt-auto">
                <NuxtLinkLocale to="unitedfront" class="btn btn-secondary w-full flex-col h-auto py-3 items-start">
                  <span class="font-bold">{{ $t('kyr_home.get_involved_section.subsection_b.button_1.text') }}</span>
                  <span class="text-xs font-normal opacity-80 text-left">{{ $t('kyr_home.get_involved_section.subsection_b.button_1.subtext') }}</span>
                </NuxtLinkLocale>
                <NuxtLinkLocale to="join" class="btn btn-outline w-full flex-col h-auto py-3 items-start">
                  <span class="font-bold">{{ $t('kyr_home.get_involved_section.subsection_b.button_2.text') }}</span>
                  <span class="text-xs font-normal opacity-80 text-left">{{ $t('kyr_home.get_involved_section.subsection_b.button_2.subtext') }}</span>
                </NuxtLinkLocale>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>