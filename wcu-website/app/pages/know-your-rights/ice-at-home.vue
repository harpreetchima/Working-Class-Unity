<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-center">{{ $t('kyr.home.title') }}</h1>
    
    <div class="space-y-8">
      
      <!-- Section 1: Do not consent to a search -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_at_home.do_not_consent.title') }}</h2>
          
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-4">
              <div class="alert alert-info shadow-sm" role="alert">
                <span class="font-bold">{{ $t('kyr_ice_at_home.do_not_consent.say') }}</span>
              </div>
              <div class="alert alert-error shadow-sm" role="alert">
                <span class="font-bold">{{ $t('kyr_ice_at_home.do_not_consent.do_not') }}</span>
              </div>
              <div class="alert alert-success shadow-sm" role="alert">
                <span class="font-bold">{{ $t('kyr_ice_at_home.do_not_consent.do') }}</span>
              </div>
            </div>
            
            <!-- Placeholder for Image 1 -->
            <div class="flex items-center justify-center bg-base-200 rounded-lg min-h-[200px] border-2 border-dashed border-base-300">
              <div class="text-center p-4">
                <span class="icon text-4xl mb-2 block">🚫🚪</span>
                <span class="text-sm opacity-70">[Image: Person refusing entry at closed door]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Ask for identification -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_at_home.ask_id.title') }}</h2>
          <ul class="list-disc list-inside space-y-2 text-lg">
            <li v-for="(item, index) in getList('kyr_ice_at_home.ask_id.list')" :key="index">
              {{ rt(item) }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Demand to see a warrant -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">{{ $t('kyr_ice_at_home.warrant.title') }}</h2>
          
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="space-y-6">
              <!-- No Warrant / Bad Warrant -->
              <div>
                <h3 class="font-bold text-lg mb-2 text-error">{{ $t('kyr_ice_at_home.warrant.no_warrant.title') }}</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li v-for="(item, index) in getList('kyr_ice_at_home.warrant.no_warrant.list')" :key="index">
                    {{ rt(item) }}
                  </li>
                </ul>
              </div>

              <!-- Has Warrant -->
              <div>
                <h3 class="font-bold text-lg mb-2 text-warning">{{ $t('kyr_ice_at_home.warrant.has_warrant.title') }}</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li v-for="(item, index) in getList('kyr_ice_at_home.warrant.has_warrant.list')" :key="index">
                    {{ rt(item) }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <!-- Check Items List -->
              <div class="bg-base-200 p-6 rounded-xl">
                <h3 class="font-bold text-lg mb-4">{{ $t('kyr_ice_at_home.warrant.check_items.title') }}</h3>
                <ul class="space-y-3">
                  <li v-for="(item, index) in getList('kyr_ice_at_home.warrant.check_items.list')" :key="index" class="flex gap-2">
                    <span class="text-success font-bold">✓</span>
                    <span>{{ rt(item) }}</span>
                  </li>
                </ul>
              </div>
              
               <!-- Placeholder for Image 2 -->
               <div class="flex items-center justify-center bg-base-200 rounded-lg min-h-[150px] border-2 border-dashed border-base-300">
                <div class="text-center p-4">
                  <span class="icon text-4xl mb-2 block">📄🔍</span>
                  <span class="text-sm opacity-70">[Image: Example of valid judicial warrant]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: If ICE enters -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_at_home.if_enters.title') }}</h2>
          <ul class="list-disc list-inside space-y-2 text-lg">
            <li v-for="(item, index) in getList('kyr_ice_at_home.if_enters.list')" :key="index">
              {{ rt(item) }}
            </li>
          </ul>
        </div>
      </section>

    </div>
    
    <div class="mt-12">
      <KnowYourRightsNav />
    </div>
  </div>
</template>