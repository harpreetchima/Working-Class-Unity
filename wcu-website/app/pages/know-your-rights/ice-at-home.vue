<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      
      <!-- Section A: Minimalist Header -->
      <header class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-base-content">
          {{ $t('kyr_ice_at_home.header.title') }}
        </h1>
        <p class="mt-2 text-base-content/60 text-sm md:text-base">
          {{ $t('kyr_ice_at_home.header.subtitle') }}
        </p>
      </header>

      <!-- Section B: Primary Action Grid (2-Column Top Row) -->
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        
        <!-- Left Card - "01. Entry Protocol" -->
        <div class="bg-base-100 border border-base-300 rounded-lg p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-base-content/40 font-mono text-sm">01</span>
            <h2 class="text-xl font-bold tracking-tight">Entry Protocol</h2>
            <span class="bg-error/10 text-error text-xs px-2 py-1 rounded-full font-medium">Warning</span>
          </div>
          
          <!-- Warning Triangle Icon -->
          <div class="flex items-start gap-3 mb-4">
            <svg class="h-5 w-5 text-error shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="space-y-2">
              <p><span class="font-bold text-error">DO NOT:</span> {{ $t('kyr_ice_at_home.do_not_consent.do_not') }}</p>
              <p><span class="font-bold text-success">DO:</span> {{ $t('kyr_ice_at_home.do_not_consent.do') }}</p>
            </div>
          </div>

          <!-- SAY Script -->
          <div class="bg-base-200 rounded-md p-4 mt-4">
            <p class="text-xs text-base-content/50 uppercase tracking-wide mb-2">Say this:</p>
            <p class="font-mono text-sm text-base-content">{{ $t('kyr_ice_at_home.do_not_consent.say') }}</p>
          </div>
        </div>

        <!-- Right Card - "02. Verification" -->
        <div class="bg-base-100 border border-base-300 rounded-lg p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-base-content/40 font-mono text-sm">02</span>
            <h2 class="text-xl font-bold tracking-tight">{{ $t('kyr_ice_at_home.ask_id.title') }}</h2>
          </div>
          
          <!-- Badge/ID Icon -->
          <div class="flex items-start gap-3 mb-4">
            <svg class="h-5 w-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
            <p class="text-base-content/80">Request badge numbers and names through the closed door.</p>
          </div>

          <ul class="space-y-2 text-sm text-base-content/70">
            <li v-for="(item, index) in getList('kyr_ice_at_home.ask_id.list')" :key="index" class="flex items-start gap-2">
              <span class="text-base-content/30">•</span>
              <span>{{ rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section C: Warrant Logic (Centerpiece - Decision Tree) -->
      <div class="bg-base-100 border border-base-300 rounded-lg p-6 mb-10">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-base-content/40 font-mono text-sm">03</span>
          <h2 class="text-xl font-bold tracking-tight">{{ $t('kyr_ice_at_home.warrant.title') }}</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Left Path - "No Warrant" (Timeline Style) -->
          <div>
            <h3 class="font-bold text-base mb-4 text-error flex items-center gap-2">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {{ $t('kyr_ice_at_home.warrant.no_warrant.title') }}
            </h3>
            
            <!-- Timeline/Git-commit style -->
            <div class="border-l-2 border-base-300 pl-4 space-y-4">
              <div v-for="(item, index) in getList('kyr_ice_at_home.warrant.no_warrant.list')" :key="index" class="relative">
                <!-- Circle indicator -->
                <div class="absolute -left-[1.3rem] top-1.5 w-2 h-2 rounded-full bg-base-300"></div>
                <div class="bg-base-200 rounded-md p-3">
                  <p class="font-mono text-sm">{{ rt(item) }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Path - "Warrant Claimed" (The Checklist) -->
          <div>
            <h3 class="font-bold text-base mb-4 text-base-content flex items-center gap-2">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ $t('kyr_ice_at_home.warrant.has_warrant.title') }}
            </h3>

            <ul class="space-y-2 text-sm mb-6">
              <li v-for="(item, index) in getList('kyr_ice_at_home.warrant.has_warrant.list')" :key="index" class="flex items-start gap-2">
                <span class="text-base-content/30">•</span>
                <span>{{ rt(item) }}</span>
              </li>
            </ul>

            <!-- Status Check Component - Document Verification Checklist -->
            <div class="bg-base-200 rounded-lg p-4">
              <h4 class="text-xs text-base-content/50 uppercase tracking-wide mb-4">{{ $t('kyr_ice_at_home.warrant.check_items.title') }}</h4>
              
              <div class="space-y-3">
                <div v-for="(item, index) in getList('kyr_ice_at_home.warrant.check_items.list')" :key="index" class="flex items-start gap-3">
                  <!-- Icon based on index -->
                  <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                    <!-- Court Building Icon -->
                    <svg v-if="index === 0" class="h-4 w-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <!-- User Icon -->
                    <svg v-else-if="index === 1" class="h-4 w-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <!-- Calendar Icon -->
                    <svg v-else-if="index === 2" class="h-4 w-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <!-- Pen/Signature Icon -->
                    <svg v-else class="h-4 w-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm">{{ rt(item) }}</p>
                  </div>
                  <!-- Check circle (success state indicator) -->
                  <svg class="h-5 w-5 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section D: If ICE Enters -->
      <div class="bg-base-100 border border-base-300 rounded-lg p-6 mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-base-content/40 font-mono text-sm">04</span>
          <h2 class="text-xl font-bold tracking-tight">{{ $t('kyr_ice_at_home.if_enters.title') }}</h2>
          <span class="bg-error/10 text-error text-xs px-2 py-1 rounded-full font-medium">Critical</span>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div v-for="(item, index) in getList('kyr_ice_at_home.if_enters.list').slice(0, Math.ceil(getList('kyr_ice_at_home.if_enters.list').length / 2))" :key="index" class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs font-mono text-base-content/60 shrink-0">{{ index + 1 }}</span>
              <p class="text-sm text-base-content/80">{{ rt(item) }}</p>
            </div>
          </div>
          <div class="space-y-3">
            <div v-for="(item, index) in getList('kyr_ice_at_home.if_enters.list').slice(Math.ceil(getList('kyr_ice_at_home.if_enters.list').length / 2))" :key="index" class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs font-mono text-base-content/60 shrink-0">{{ Math.ceil(getList('kyr_ice_at_home.if_enters.list').length / 2) + index + 1 }}</span>
              <p class="text-sm text-base-content/80">{{ rt(item) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-12">
        <KnowYourRightsNav />
      </div>
    </div>
  </div>
</template>