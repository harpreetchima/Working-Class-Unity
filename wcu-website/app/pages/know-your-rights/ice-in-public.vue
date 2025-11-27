<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-center">{{ $t('kyr.public.title') }}</h1>
    
    <div class="space-y-8">
      
      <!-- Section 1: ICE Tactics -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_in_public.tactics.title') }}</h2>
          <ul class="list-disc list-inside space-y-2 text-lg">
            <li v-for="(item, index) in getList('kyr_ice_in_public.tactics.list')" :key="index">
              {{ rt(item) }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 2: If stopped by ICE -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_in_public.stopped.title') }}</h2>
          
          <div class="alert alert-warning shadow-sm mb-6" role="alert">
            <span class="icon text-2xl">🤫</span>
            <span class="font-bold text-lg">{{ $t('kyr_ice_in_public.stopped.silent') }}</span>
          </div>

          <div class="divider text-xl font-bold">{{ $t('kyr_ice_in_public.stopped.ask_free.question') }}</div>

          <div class="grid gap-6 md:grid-cols-2 mt-4">
            <!-- YES Path -->
            <div class="card bg-success/10 border border-success">
              <div class="card-body">
                <h3 class="card-title text-success mb-2">{{ $t('kyr_ice_in_public.stopped.ask_free.if_yes.title') }}</h3>
                <ul class="space-y-2">
                  <li v-for="(step, index) in getList('kyr_ice_in_public.stopped.ask_free.if_yes.steps')" :key="index" class="flex gap-2">
                    <span class="text-success font-bold">✓</span>
                    <span>{{ rt(step) }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- NO Path -->
            <div class="card bg-error/10 border border-error">
              <div class="card-body">
                <h3 class="card-title text-error mb-2">{{ $t('kyr_ice_in_public.stopped.ask_free.if_no.title') }}</h3>
                <ul class="space-y-2">
                  <li v-for="(step, index) in getList('kyr_ice_in_public.stopped.ask_free.if_no.steps')" :key="index" class="flex gap-2">
                    <span class="text-error font-bold">✕</span>
                    <span>{{ rt(step) }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Section 3: Protect Yourself -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_in_public.protect.title') }}</h2>
          
          <div class="grid gap-6 md:grid-cols-[1fr_auto]">
            <ul class="space-y-4 text-lg">
              <li v-for="(item, index) in getList('kyr_ice_in_public.protect.list')" :key="index" class="flex gap-3">
                <span class="text-primary font-bold text-xl">•</span>
                <span>{{ rt(item) }}</span>
              </li>
            </ul>

            <!-- Visual Anchor/Icon -->
             <div class="hidden md:flex flex-col gap-4 justify-center">
              <div class="flex items-center justify-center bg-base-200 rounded-lg w-32 h-32 border-2 border-dashed border-base-300 p-4 text-center">
                 <div>
                    <span class="text-4xl block mb-2">📹</span>
                    <span class="text-xs opacity-70">Record</span>
                 </div>
              </div>
               <div class="flex items-center justify-center bg-base-200 rounded-lg w-32 h-32 border-2 border-dashed border-base-300 p-4 text-center">
                 <div>
                    <span class="text-4xl block mb-2">📇</span>
                    <span class="text-xs opacity-70">Card</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
    
    <div class="mt-12">
      <KnowYourRightsNav />
    </div>
  </div>
</template>