<script setup lang="ts">
const { t, tm, rt } = useI18n()

const getList = (key: string) => {
  return tm(key) as string[]
}
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Section -->
        <header class="text-center mb-12">
          <span class="text-xs uppercase tracking-wide text-base-content/50 block mb-3">{{ $t('kyr_nav.section_label') }}</span>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-4 flex items-center justify-center gap-3 flex-wrap">
            {{ $t('kyr.work.title') }}
            <span class="badge badge-soft badge-warning">Caution</span>
          </h1>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            Understand your rights when ICE appears at your workplace. Know where they can and cannot go.
          </p>
        </header>

        <!-- Main Timeline Content -->
        <ul class="timeline timeline-vertical timeline-compact max-w-4xl mx-auto">
          
          <!-- Step 1: Where ICE Can Go -->
          <li>
            <div class="timeline-middle">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div class="timeline-end py-4 pl-4 w-full">
              
              <!-- Step Header -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs uppercase tracking-wide text-base-content/60">Step 01</span>
                <h2 class="text-xl font-bold tracking-tight">{{ $t('kyr_ice_at_work.where_ice_can_go.title') }}</h2>
              </div>
              
              <!-- Step Content Card -->
              <div class="card card-border bg-base-100 hover:border-primary/50 transition-colors">
                <div class="card-body p-5">
                  
                  <div class="grid md:grid-cols-2 gap-6">
                    
                    <!-- Public Areas - Success Path -->
                    <div class="card card-border border-l-4 border-l-success">
                      <div class="card-body p-4">
                        <h3 class="font-bold text-base flex items-center gap-2">
                          <span class="status status-success"></span>
                          {{ $t('kyr_ice_at_work.where_ice_can_go.public_areas.title') }}
                        </h3>
                        <p class="text-sm text-base-content/80 mt-2">{{ $t('kyr_ice_at_work.where_ice_can_go.public_areas.description') }}</p>
                        
                        <div class="mt-3 flex items-center gap-2">
                          <svg class="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                          </svg>
                          <span class="text-xs text-base-content/60">Lobbies, parking lots, customer areas</span>
                        </div>
                      </div>
                    </div>

                    <!-- Private Areas - Error Path -->
                    <div class="card card-border border-l-4 border-l-error">
                      <div class="card-body p-4">
                        <h3 class="font-bold text-base flex items-center gap-2">
                          <span class="status status-error"></span>
                          {{ $t('kyr_ice_at_work.where_ice_can_go.private_areas.title') }}
                        </h3>
                        <p class="text-sm text-base-content/80 mt-2">{{ $t('kyr_ice_at_work.where_ice_can_go.private_areas.description') }}</p>
                        
                        <div class="mt-3 flex items-center gap-2">
                          <svg class="w-4 h-4 text-error shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                          </svg>
                          <span class="text-xs text-base-content/60">Offices, warehouses, employee-only areas</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <!-- Important Note Callout -->
                  <div role="alert" class="alert alert-soft alert-warning mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <span class="text-xs uppercase tracking-wide text-base-content/60 font-medium">Important</span>
                      <p class="text-sm mt-1">ICE needs a warrant signed by a judge to enter private/non-public areas without consent.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <hr class="bg-base-300"/>
          </li>
          
          <!-- Step 2: Your Rights at Work -->
          <li>
            <hr class="bg-base-300"/>
            <div class="timeline-middle">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div class="timeline-end py-4 pl-4 w-full">
              
              <!-- Step Header -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs uppercase tracking-wide text-base-content/60">Step 02</span>
                <h2 class="text-xl font-bold tracking-tight">{{ $t('kyr_ice_at_work.rights_at_work.title') }}</h2>
              </div>
              
              <!-- Step Content Card -->
              <div class="card card-border bg-base-100 hover:border-primary/50 transition-colors">
                <div class="card-body p-5">
                  
                  <p class="text-sm text-base-content/80 mb-4">{{ $t('kyr_ice_at_work.rights_at_work.intro') }}</p>
                  
                  <div class="grid gap-3">
                    <div v-for="(item, index) in getList('kyr_ice_at_work.rights_at_work.list')" :key="index" class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                      <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                        <span class="text-xs font-mono text-base-content/60">{{ String(index + 1).padStart(2, '0') }}</span>
                      </div>
                      <p class="text-sm text-base-content/80 flex-1 pt-1">{{ rt(item) }}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <hr class="bg-base-300"/>
          </li>
          
          <!-- Step 3: If ICE Approaches You -->
          <li>
            <hr class="bg-base-300"/>
            <div class="timeline-middle">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div class="timeline-end py-4 pl-4 w-full">
              
              <!-- Step Header -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs uppercase tracking-wide text-base-content/60">Step 03</span>
                <h2 class="text-xl font-bold tracking-tight">If ICE Approaches You</h2>
                <span class="badge badge-soft badge-error text-xs">Critical</span>
              </div>
              
              <!-- Step Content Card -->
              <div class="card card-border bg-base-100 hover:border-primary/50 transition-colors">
                <div class="card-body p-5">
                  
                  <!-- DO NOT / DO Section -->
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <span class="badge badge-soft badge-error shrink-0">DO NOT</span>
                      <p class="text-sm text-base-content/80">Run, resist, or lie about your identity</p>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="badge badge-soft badge-error shrink-0">DO NOT</span>
                      <p class="text-sm text-base-content/80">Sign any documents without an attorney</p>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="badge badge-soft badge-success shrink-0">DO</span>
                      <p class="text-sm text-base-content/80">Stay calm and remember your rights</p>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="badge badge-soft badge-success shrink-0">DO</span>
                      <p class="text-sm text-base-content/80">Ask if you are free to leave</p>
                    </div>
                  </div>

                  <!-- Say This Script Callout -->
                  <div role="alert" class="alert alert-soft alert-info mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    <div>
                      <span class="text-xs uppercase tracking-wide text-base-content/60 font-medium">Say This</span>
                      <p class="font-mono text-sm mt-1">"I wish to remain silent. I do not consent to a search. Am I free to go?"</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <hr class="bg-base-300"/>
          </li>
          
          <!-- Step 4: Employer Responsibilities -->
          <li>
            <hr class="bg-base-300"/>
            <div class="timeline-middle">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div class="timeline-end py-4 pl-4 w-full">
              
              <!-- Step Header -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs uppercase tracking-wide text-base-content/60">Step 04</span>
                <h2 class="text-xl font-bold tracking-tight">Employer Responsibilities</h2>
              </div>
              
              <!-- Step Content Card -->
              <div class="card card-border bg-base-100 hover:border-primary/50 transition-colors">
                <div class="card-body p-5">
                  
                  <p class="text-sm text-base-content/80 mb-4">Your employer has rights and responsibilities during an ICE visit:</p>
                  
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                      <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-sm font-semibold">Ask for Warrant</p>
                        <p class="text-xs text-base-content/60">Can request to see a valid judicial warrant</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                      <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-sm font-semibold">Deny Access</p>
                        <p class="text-xs text-base-content/60">Can refuse entry to non-public areas without warrant</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                      <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-sm font-semibold">Call Attorney</p>
                        <p class="text-xs text-base-content/60">Can contact company lawyer before cooperating</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-3 p-4 bg-base-200 rounded-lg">
                      <div class="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-sm font-semibold">Notify Workers</p>
                        <p class="text-xs text-base-content/60">Can inform employees of their rights</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </li>
          
        </ul>

        <!-- Navigation -->
        <div class="mt-12 max-w-4xl mx-auto">
          <KnowYourRightsNav />
        </div>
        
      </div>
    </section>
  </div>
</template>