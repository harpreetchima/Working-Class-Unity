<script setup>
const { t } = useI18n();

useHead({
  title: t('check_in_coverage.page_title'),
});

onMounted(() => {
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "checkincoverage", {origin:"https://app.cal.com"});

  Cal.ns.checkincoverage("inline", {
    elementOrSelector:"#my-cal-inline-checkincoverage",
    config: {"layout":"month_view","theme":"auto"},
    calLink: "workingclassunity/checkincoverage",
  });

  Cal.ns.checkincoverage("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#f7f9fc"},"dark":{"cal-brand":"#ff9f48"}},"hideEventTypeDetails":false,"layout":"month_view"});
});
</script>

<template>
  <!-- Hero Section with enhanced gradient and overlay -->
  <div class="hero min-h-[60vh] bg-gradient-to-br from-secondary via-secondary/80 to-neutral text-secondary-content relative">
    <div class="hero-overlay bg-black/10"></div>
    <div class="hero-content text-center relative z-10">
      <div class="max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          {{ $t('check_in_coverage.hero.title') }}
        </h1>
        
        <div class="prose prose-lg mx-auto mb-10">
          <h2 class="text-2xl font-semibold mb-3 text-secondary-content">
            {{ $t('check_in_coverage.hero.subtitle') }}
          </h2>
          <p class="text-lg text-secondary-content/90 max-w-2xl mx-auto">
            {{ $t('check_in_coverage.hero.description') }}
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <!-- Column 1: Schedule Shift -->
          <div class="flex flex-col items-center w-full md:w-auto">
            <a href="#schedule" class="btn btn-primary btn-lg w-full shadow-lg gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {{ $t('check_in_coverage.hero.schedule_button') }}
            </a>
          </div>

          <!-- Column 2: Appointment -->
          <div class="flex flex-col items-center w-full md:w-auto">
            <button class="btn btn-outline btn-primary btn-lg w-full shadow-lg gap-2 border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {{ $t('check_in_coverage.hero.appointment_button') }}
            </button>
            <span class="text-sm mt-2 text-secondary-content/95 max-w-[200px]">
              {{ $t('check_in_coverage.hero.appointment_help_text') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Orientation Section with bg-base-200 -->
  <div class="bg-base-200 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-2">
          {{ $t('check_in_coverage.orientation.heading') }}
        </h2>
        <div class="badge badge-primary badge-lg mb-8 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Watch 5 min orientation
        </div>
        
        <!-- Video Placeholder (Enhanced Card) -->
        <div class="card w-full bg-base-100 shadow-xl overflow-hidden mb-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <div class="aspect-video bg-gradient-to-br from-neutral to-base-300 flex items-center justify-center relative group cursor-pointer">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 bg-base-content/5"></div>
            <span class="relative z-10 text-primary opacity-70 group-hover:opacity-100 transition-all transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
            </span>
          </div>
        </div>

        <p class="prose prose-lg mx-auto italic text-base-content/80">
          {{ $t('check_in_coverage.orientation.caption') }}
        </p>
      </div>
    </div>
  </div>

  <!-- Schedule Section with bg-base-100 -->
  <div id="schedule" class="bg-base-100 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          {{ $t('check_in_coverage.schedule.heading') }}
        </h2>
        
        <!-- Stats component for arrival/role info -->
        <div class="card card-border bg-base-100 shadow-lg mb-8 border-l-4 border-l-primary">
          <div class="card-body">
            <p class="font-medium text-lg mb-6 text-center">{{ $t('check_in_coverage.schedule.intro') }}</p>
            <div class="flex flex-col md:flex-row gap-6">
              <!-- Arrival Time Card -->
              <div class="flex-1 bg-base-200/50 rounded-lg p-6 flex flex-col items-center md:items-start text-center md:text-left border border-base-200">
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 class="font-bold text-lg">Arrival Time</h3>
                </div>
                <p class="text-base opacity-90 leading-relaxed">{{ $t('check_in_coverage.schedule.arrival') }}</p>
              </div>

              <!-- Your Role Card -->
              <div class="flex-1 bg-base-200/50 rounded-lg p-6 flex flex-col items-center md:items-start text-center md:text-left border border-base-200">
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <h3 class="font-bold text-lg">Your Role</h3>
                </div>
                <p class="text-base opacity-90 leading-relaxed">{{ $t('check_in_coverage.schedule.role') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cal.com Embed with card wrapper -->
        <div class="card card-border bg-base-100 shadow-md overflow-hidden">
          <div class="card-body p-0">
            <div class="w-full h-[600px] overflow-auto" id="my-cal-inline-checkincoverage"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Resources Section with bg-base-200 -->
  <div class="bg-base-200 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          {{ $t('check_in_coverage.resources.heading') }}
        </h2>

        <!-- Important Notice as Hero Mini-Section -->
        <div class="hero bg-warning/10 rounded-box mb-12 border-2 border-warning/30">
          <div class="hero-content flex-col md:flex-row py-8 gap-6">
            <div class="text-warning">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-xl font-bold mb-2">Important Notice</h3>
              <p class="prose">{{ $t('check_in_coverage.resources.notice.text') }}</p>
            </div>
            <button class="btn btn-warning whitespace-nowrap">{{ $t('check_in_coverage.resources.notice.button') }}</button>
          </div>
        </div>

        <!-- Downloads Grid - max 4 columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card Template with color-coded badges -->
          <div v-for="(item, index) in ['check_in_sheet', 'tracker_log', 'quick_guide', 'if_detained']" :key="item" class="card bg-base-100 shadow-md border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30">
            <figure class="px-6 pt-6 relative">
              <!-- Color-coded category badge -->
              <div class="badge absolute top-8 right-8 z-10" :class="index < 2 ? 'badge-primary' : 'badge-accent'">
                {{ index < 2 ? 'Essential' : 'Reference' }}
              </div>
              <!-- 8.5x11 Aspect Ratio Placeholder -->
              <div class="w-full aspect-[8.5/11] bg-base-200 rounded-sm flex items-center justify-center relative group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
            </figure>
            <div class="card-body items-center text-center p-6">
              <h3 class="card-title text-base font-bold mb-2 min-h-[3rem] items-start">{{ $t(`check_in_coverage.resources.downloads.${item}`) }}</h3>
              <div class="card-actions w-full">
                <button class="btn btn-primary btn-sm w-full gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  {{ $t('check_in_coverage.resources.downloads.button') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of Shift Section with bg-base-100 -->
  <div class="bg-base-100 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-2">
          {{ $t('check_in_coverage.end_of_shift.heading') }}
        </h2>
        <p class="prose prose-lg mb-8 italic text-base-content/80">
          {{ $t('check_in_coverage.end_of_shift.copy') }}
        </p>

        <!-- Standalone Error Alert -->
        <div role="alert" class="alert alert-error mb-8 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col gap-1">
            <span class="font-bold">{{ $t('check_in_coverage.end_of_shift.logs.do_not_photo') }}</span>
            <span class="font-bold">{{ $t('check_in_coverage.end_of_shift.logs.do_not_text') }}</span>
          </div>
        </div>

        <!-- Timeline with placeholder image on left -->
        <div class="flex gap-8">
          <!-- Placeholder Image Column -->
          <div class="hidden lg:flex flex-col items-center justify-center w-64 shrink-0">
            <div class="w-full aspect-square bg-base-200 rounded-box flex items-center justify-center border-2 border-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-24 h-24 text-primary/30">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <p class="text-sm text-base-content/60 mt-4 text-center italic">Shift complete checklist</p>
          </div>

          <!-- Timeline Component -->
          <ul class="timeline timeline-vertical timeline-compact timeline-snap-icon flex-1">
            <!-- Step 1: The Debrief -->
            <li>
              <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <div class="card card-border bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h3 class="card-title text-xl">{{ $t('check_in_coverage.end_of_shift.debrief.title') }}</h3>
                    <p class="prose">{{ $t('check_in_coverage.end_of_shift.debrief.description') }}</p>
                  </div>
                </div>
              </div>
              <hr class="bg-primary"/>
            </li>

            <!-- Step 2: The Logs -->
            <li>
              <hr class="bg-primary"/>
              <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <div class="card card-border bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h3 class="card-title text-xl">{{ $t('check_in_coverage.end_of_shift.logs.title') }}</h3>
                    <p class="prose">Securely handle all documentation following our privacy protocols.</p>
                  </div>
                </div>
              </div>
              <hr class="bg-primary"/>
            </li>

            <!-- Step 3: Drop Off -->
            <li>
              <hr class="bg-primary"/>
              <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end">
                <div class="card card-border bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                  <div class="card-body">
                    <h3 class="card-title text-xl">
                      {{ $t('check_in_coverage.end_of_shift.logs.drop_off').split(':')[0] }}
                    </h3>
                    <p class="prose">
                      {{ $t('check_in_coverage.end_of_shift.logs.drop_off').split(':')[1] }}
                    </p>
                    <div class="card-actions mt-4">
                      <a href="#" class="btn btn-primary gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Google Maps Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Divider before Contact Section -->
  <div class="divider divider-primary max-w-4xl mx-auto px-4"></div>

  <!-- Contact Section as Hero with bg-secondary -->
  <div class="hero bg-secondary text-secondary-content py-20">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold mb-4">
          {{ $t('check_in_coverage.contact.heading') }}
        </h2>
        <p class="prose prose-lg mb-8 text-secondary-content/90">
          {{ $t('check_in_coverage.contact.copy') }}
        </p>
        
        <!-- Contact Card -->
        <div class="card bg-secondary-content/10 backdrop-blur border border-secondary-content/20">
          <div class="card-body items-center">
            <div class="text-4xl font-mono font-bold text-primary mb-4">
              {{ $t('check_in_coverage.contact.phone') }}
            </div>
            <a href="tel:+1234567890" class="btn btn-primary btn-lg gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {{ $t('check_in_coverage.contact.call_link') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>