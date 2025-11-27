<script setup>
definePageMeta({
  title: 'request_support.title'
})

const { tm, rt } = useI18n()
</script>

<template>
  <div class="container mx-auto p-4 max-w-3xl">
    <!-- H1 & Subheading -->
    <header class="mb-10 mt-6">
      <h1 class="text-3xl md:text-4xl font-bold mb-6 text-primary">{{ $t('request_support.title') }}</h1>
      <div class="text-xl leading-relaxed border-l-4 border-secondary pl-4 italic opacity-80">
        {{ $t('request_support.intro') }}
      </div>
    </header>

    <!-- Section 1: How We Can Help -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">{{ $t('request_support.section1.title') }}</h2>
      <div class="prose prose-lg max-w-none">
        <p>{{ $t('request_support.section1.p1') }}</p>
        <p>{{ $t('request_support.section1.p2') }}</p>
        <ul>
          <li v-for="(item, index) in tm('request_support.section1.list')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 2: Request Support Form -->
    <section class="mb-12 card bg-base-200 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-2">{{ $t('request_support.form.title') }}</h2>
        <p class="mb-6 opacity-90">{{ $t('request_support.form.intro') }}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-block text-lg h-14">
            {{ $t('request_support.title') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Section 3: What Happens Next -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">{{ $t('request_support.next_steps.title') }}</h2>
      <div class="space-y-4">
        <div v-for="(step, index) in tm('request_support.next_steps.steps')" :key="index" class="flex gap-4">
          <div class="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-content font-bold">
            {{ index + 1 }}
          </div>
          <p class="text-lg pt-0.5">{{ rt(step) }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Emergency Box -->
    <section class="mb-12">
      <div role="alert" class="alert alert-error shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <div>
          <i18n-t keypath="request_support.emergency.text" tag="p" class="font-medium">
            <template #link>
              <NuxtLinkLocale to="/kyr" class="font-bold underline hover:opacity-80">
                {{ $t('request_support.emergency.link_text') }}
              </NuxtLinkLocale>
            </template>
            <template #phone>
              <a href="tel:5592060151" class="font-bold underline hover:opacity-80">
                {{ $t('request_support.emergency.phone') }}
              </a>
            </template>
          </i18n-t>
        </div>
      </div>
    </section>
  </div>
</template>