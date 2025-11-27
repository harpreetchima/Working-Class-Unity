<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-center">{{ $t('kyr.car.title') }}</h1>
    
    <div class="space-y-8">
      
      <!-- Section 1: Always Pull Over -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_pulls_you_over.always_pull_over.title') }}</h2>
          <p class="text-lg mb-4">{{ $t('kyr_ice_pulls_you_over.always_pull_over.content') }}</p>
          
          <div class="alert alert-info shadow-sm" role="alert">
            <span class="text-2xl mr-2">📹</span>
            <span class="font-bold">{{ $t('kyr_ice_pulls_you_over.always_pull_over.recording_tip') }}</span>
          </div>
        </div>
      </section>

      <!-- Section 2: Identify the Officers -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ $t('kyr_ice_pulls_you_over.identify_officers.title') }}</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <ul class="list-disc list-inside space-y-2 text-lg">
                <li v-for="(question, index) in getList('kyr_ice_pulls_you_over.identify_officers.questions')" :key="index">
                  {{ rt(question) }}
                </li>
              </ul>
            </div>
            
            <div class="alert alert-warning shadow-sm" role="alert">
              <div>
                <h3 class="font-bold mb-2 flex items-center">
                  <span class="text-xl mr-2">⚠️</span>
                  {{ $t('kyr_ice_pulls_you_over.identify_officers.warning.title') }}
                </h3>
                <p>{{ $t('kyr_ice_pulls_you_over.identify_officers.warning.content') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: During the Stop -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">{{ $t('kyr_ice_pulls_you_over.during_stop.title') }}</h2>
          
          <div class="grid gap-8 lg:grid-cols-2">
            <!-- Window -->
            <div class="bg-base-200 p-6 rounded-xl">
              <h3 class="font-bold text-xl mb-3">{{ $t('kyr_ice_pulls_you_over.during_stop.window.title') }}</h3>
              <p class="mb-4">{{ $t('kyr_ice_pulls_you_over.during_stop.window.content') }}</p>
              
              <h4 class="font-bold mb-2">{{ $t('kyr_ice_pulls_you_over.during_stop.window.questions_title') }}</h4>
              <ul class="list-disc list-inside space-y-1">
                <li v-for="(question, index) in getList('kyr_ice_pulls_you_over.during_stop.window.questions')" :key="index">
                  {{ rt(question) }}
                </li>
              </ul>
            </div>

            <!-- Providing Information -->
            <div class="space-y-6">
              <h3 class="font-bold text-xl">{{ $t('kyr_ice_pulls_you_over.during_stop.providing_info.title') }}</h3>
              
              <!-- Drivers -->
              <div>
                <h4 class="font-bold text-primary">{{ $t('kyr_ice_pulls_you_over.during_stop.providing_info.drivers.title') }}</h4>
                <ul class="list-disc list-inside">
                  <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.during_stop.providing_info.drivers.list')" :key="index">
                    {{ rt(item) }}
                  </li>
                </ul>
              </div>

              <!-- Passengers -->
              <div>
                <h4 class="font-bold text-secondary">{{ $t('kyr_ice_pulls_you_over.during_stop.providing_info.passengers.title') }}</h4>
                <ul class="list-disc list-inside">
                  <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.during_stop.providing_info.passengers.list')" :key="index">
                    {{ rt(item) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Universal Advice -->
           <div class="mt-6 space-y-4">
             <div class="grid gap-4 md:grid-cols-2">
                <div v-for="(advice, index) in getList('kyr_ice_pulls_you_over.during_stop.providing_info.advice')" :key="index" class="alert alert-error bg-error/10 border-error/20">
                  <span>{{ rt(advice) }}</span>
                </div>
             </div>

             <div class="bg-neutral text-neutral-content p-6 rounded-xl mt-4">
               <h3 class="font-bold text-lg mb-2">{{ $t('kyr_ice_pulls_you_over.during_stop.providing_info.all_occupants.title') }}</h3>
               <ul class="list-disc list-inside mb-4">
                 <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.during_stop.providing_info.all_occupants.list')" :key="index">
                    {{ rt(item) }}
                 </li>
               </ul>
               <div class="bg-base-100 text-base-content p-4 rounded-lg font-bold text-center border-l-4 border-primary">
                 "{{ $t('kyr_ice_pulls_you_over.during_stop.providing_info.all_occupants.say') }}"
               </div>
             </div>
           </div>
        </div>
      </section>

      <!-- Section 4: Physical Compliance & Searches -->
      <section class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">{{ $t('kyr_ice_pulls_you_over.compliance_searches.title') }}</h2>
          
          <!-- Exiting Vehicle -->
          <div class="collapse collapse-arrow bg-base-200 mb-4">
            <input type="checkbox" checked /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('kyr_ice_pulls_you_over.compliance_searches.exiting.title') }}
            </div>
            <div class="collapse-content bg-base-100 pt-4">
              <p class="mb-4">{{ $t('kyr_ice_pulls_you_over.compliance_searches.exiting.content') }}</p>
              <h4 class="font-bold mb-2">{{ $t('kyr_ice_pulls_you_over.compliance_searches.exiting.ask_title') }}</h4>
              <ul class="list-disc list-inside mb-4">
                 <li v-for="(question, index) in getList('kyr_ice_pulls_you_over.compliance_searches.exiting.questions')" :key="index">
                    {{ rt(question) }}
                 </li>
              </ul>
              <div class="alert alert-warning">
                <span>{{ $t('kyr_ice_pulls_you_over.compliance_searches.exiting.warning') }}</span>
              </div>
            </div>
          </div>

          <!-- Search Limitations -->
          <div class="collapse collapse-arrow bg-base-200 mb-4">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('kyr_ice_pulls_you_over.compliance_searches.search_limitations.title') }}
            </div>
            <div class="collapse-content bg-base-100 pt-4">
              <p class="mb-2">{{ $t('kyr_ice_pulls_you_over.compliance_searches.search_limitations.content') }}</p>
              <ul class="list-disc list-inside mb-4">
                 <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.compliance_searches.search_limitations.list')" :key="index">
                    {{ rt(item) }}
                 </li>
              </ul>
              <div class="bg-error/10 p-4 rounded-lg border border-error/20">
                <p class="font-bold text-error mb-1">"{{ $t('kyr_ice_pulls_you_over.compliance_searches.search_limitations.say') }}"</p>
                <p class="text-sm opacity-75">{{ $t('kyr_ice_pulls_you_over.compliance_searches.search_limitations.repeat') }}</p>
              </div>
            </div>
          </div>

           <!-- Fingerprints -->
           <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
              {{ $t('kyr_ice_pulls_you_over.compliance_searches.fingerprints.title') }}
            </div>
            <div class="collapse-content bg-base-100 pt-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 class="font-bold mb-2">{{ $t('kyr_ice_pulls_you_over.compliance_searches.fingerprints.when.title') }}</h4>
                   <ul class="list-disc list-inside">
                     <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.compliance_searches.fingerprints.when.list')" :key="index">
                        {{ rt(item) }}
                     </li>
                   </ul>
                </div>
                <div>
                   <h4 class="font-bold mb-2">{{ $t('kyr_ice_pulls_you_over.compliance_searches.fingerprints.if_requested.title') }}</h4>
                   <ul class="list-disc list-inside">
                     <li v-for="(item, index) in getList('kyr_ice_pulls_you_over.compliance_searches.fingerprints.if_requested.list')" :key="index">
                        {{ rt(item) }}
                     </li>
                   </ul>
                </div>
              </div>
              <div class="mt-4 alert">
                <span>{{ $t('kyr_ice_pulls_you_over.compliance_searches.fingerprints.resistance') }}</span>
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