<template>
  <div class="flex flex-col gap-8 pb-12">
    <!-- Hero Section -->
    <div class="hero bg-base-200 py-12">
      <div class="hero-content text-center">
        <div class="max-w-3xl">
          <h1 class="text-4xl font-bold">{{ $t('about_page.title') }}</h1>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 flex justify-center">
      <article class="prose lg:prose-xl">
        <!-- The Problem -->
        <p class="text-xl font-semibold leading-relaxed">{{ $t('about_page.p1') }}</p>
        <p>{{ $t('about_page.p2') }}</p>
        <p>{{ $t('about_page.p3') }}</p>

        <div class="divider my-8"></div>

        <!-- The Solution -->
        <p>{{ $t('about_page.p4') }}</p>
        
        <blockquote class="bg-base-200 p-4 border-l-4 border-primary italic">
          <p class="mb-0 mt-0">{{ $t('about_page.p5') }}</p>
        </blockquote>
        
        <p>{{ $t('about_page.p6') }}</p>
      </article>
    </div>

    <!-- CTA Section -->
    <div class="container mx-auto px-4 flex justify-center mt-4">
      <div class="card bg-secondary text-secondary-content w-full max-w-3xl shadow-xl">
        <div class="card-body items-center text-center">
          <p class="text-lg">{{ $t('about_page.p7') }}</p>
          <div class="card-actions justify-end mt-4">
            <NuxtLinkLocale to="join" class="btn btn-accent btn-lg">
              {{ $t('about_page.cta_button') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>