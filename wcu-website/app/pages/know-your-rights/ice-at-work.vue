<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-center">{{ $t('kyr.work.title') }}</h1>
    
    <div class="space-y-8">
      
      <!-- Section 1: Where ICE Can Go -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_at_work.where_ice_can_go.title') }}</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Public Areas -->
            <div class="bg-success/10 p-6 rounded-xl border border-success/20">
              <h3 class="font-bold text-xl mb-2 text-success-content flex items-center">
                <span class="mr-2">✅</span>
                {{ $t('kyr_ice_at_work.where_ice_can_go.public_areas.title') }}
              </h3>
              <p>{{ $t('kyr_ice_at_work.where_ice_can_go.public_areas.description') }}</p>
            </div>

            <!-- Private Areas -->
            <div class="bg-error/10 p-6 rounded-xl border border-error/20">
              <h3 class="font-bold text-xl mb-2 text-error-content flex items-center">
                <span class="mr-2">🚫</span>
                {{ $t('kyr_ice_at_work.where_ice_can_go.private_areas.title') }}
              </h3>
              <p>{{ $t('kyr_ice_at_work.where_ice_can_go.private_areas.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Your Rights at Work -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_at_work.rights_at_work.title') }}</h2>
          <p class="mb-4 text-lg font-medium">{{ $t('kyr_ice_at_work.rights_at_work.intro') }}</p>
          
          <ul class="space-y-4">
            <li v-for="(item, index) in getList('kyr_ice_at_work.rights_at_work.list')" :key="index" class="flex items-start bg-base-200 p-4 rounded-lg">
              <span class="text-primary font-bold mr-3 mt-1">➤</span>
              <span class="text-lg">{{ rt(item) }}</span>
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