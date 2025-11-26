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
  <div class="hero min-h-[50vh] bg-secondary text-secondary-content">
    <div class="hero-content text-center">
      <div class="max-w-4xl">
        <h1 class="text-5xl font-bold mb-6">
          {{ $t('check_in_coverage.hero.title') }}
        </h1>
        
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            {{ $t('check_in_coverage.hero.subtitle') }}
          </h2>
          <p class="text-lg opacity-90">
            {{ $t('check_in_coverage.hero.description') }}
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <!-- Column 1: Schedule Shift -->
          <div class="flex flex-col items-center">
            <a href="#schedule" class="btn btn-primary btn-lg w-full md:w-auto">
              {{ $t('check_in_coverage.hero.schedule_button') }}
            </a>
          </div>

          <!-- Column 2: Appointment -->
          <div class="flex flex-col items-center">
            <button class="btn btn-accent btn-lg w-full md:w-auto">
              {{ $t('check_in_coverage.hero.appointment_button') }}
            </button>
            <span class="text-sm mt-2 opacity-80 max-w-[200px]">
              {{ $t('check_in_coverage.hero.appointment_help_text') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Orientation Section -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">
        {{ $t('check_in_coverage.orientation.heading') }}
      </h2>
      
      <!-- Video Placeholder (16:9) -->
      <div class="w-full aspect-video bg-neutral rounded-lg shadow-xl mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer">
        <!-- Placeholder visual -->
        <div class="absolute inset-0 bg-base-300 opacity-50"></div>
        <span class="relative z-10 text-neutral-content opacity-50 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
        </span>
      </div>

      <p class="text-lg opacity-80 italic">
        {{ $t('check_in_coverage.orientation.caption') }}
      </p>
    </div>
  </div>

  <!-- Schedule Section -->
  <div id="schedule" class="bg-base-100 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center">
          {{ $t('check_in_coverage.schedule.heading') }}
        </h2>
        
        <div class="bg-base-200 p-6 rounded-lg mb-8">
          <p class="font-medium mb-4">{{ $t('check_in_coverage.schedule.intro') }}</p>
          <ul class="list-disc list-inside space-y-2 opacity-80">
            <li>{{ $t('check_in_coverage.schedule.arrival') }}</li>
            <li>{{ $t('check_in_coverage.schedule.role') }}</li>
          </ul>
        </div>

        <!-- Cal.com Embed -->
        <div class="w-full h-[600px] overflow-scroll" id="my-cal-inline-checkincoverage"></div>
      </div>
    </div>
  </div>

  <!-- Resources Section -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">
        {{ $t('check_in_coverage.resources.heading') }}
      </h2>

      <!-- Important Notice Box -->
      <div role="alert" class="alert alert-warning mb-12 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <div class="flex-1">
          <span>{{ $t('check_in_coverage.resources.notice.text') }}</span>
        </div>
        <button class="btn btn-sm btn-outline">{{ $t('check_in_coverage.resources.notice.button') }}</button>
      </div>

      <!-- Downloads Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <!-- Card Template -->
        <div v-for="item in ['check_in_sheet', 'tracker_log', 'quick_guide', 'if_detained', 'kyr_flyers']" :key="item" class="card bg-base-100 shadow-sm border border-base-200">
          <figure class="px-6 pt-6">
            <!-- 8.5x11 Aspect Ratio Placeholder -->
            <div class="w-full aspect-[8.5/11] bg-base-200 rounded-sm flex items-center justify-center">
              <span class="opacity-20 font-bold text-4xl">PDF</span>
            </div>
          </figure>
          <div class="card-body items-center text-center p-6">
            <h3 class="card-title text-lg mb-2">{{ $t(`check_in_coverage.resources.downloads.${item}`) }}</h3>
            <div class="card-actions">
              <button class="btn btn-primary btn-sm btn-outline">
                {{ $t('check_in_coverage.resources.downloads.button') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of Shift Section -->
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="card bg-base-100 border-2 border-warning shadow-lg">
        <div class="card-body">
          <h2 class="card-title text-3xl font-bold mb-2">
            {{ $t('check_in_coverage.end_of_shift.heading') }}
          </h2>
          <p class="text-lg mb-6 italic opacity-80">
            {{ $t('check_in_coverage.end_of_shift.copy') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 1. The Debrief -->
            <div>
              <h3 class="text-xl font-bold mb-2">{{ $t('check_in_coverage.end_of_shift.debrief.title') }}</h3>
              <p>{{ $t('check_in_coverage.end_of_shift.debrief.description') }}</p>
            </div>

            <!-- 2. The Logs -->
            <div>
              <h3 class="text-xl font-bold mb-2">{{ $t('check_in_coverage.end_of_shift.logs.title') }}</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-error font-bold mr-2">DO NOT</span>
                  <span>{{ $t('check_in_coverage.end_of_shift.logs.do_not_photo').replace('DO NOT ', '') }}</span>
                </li>
                <li class="flex items-start">
                  <span class="text-error font-bold mr-2">DO NOT</span>
                  <span>{{ $t('check_in_coverage.end_of_shift.logs.do_not_text').replace('DO NOT ', '') }}</span>
                </li>
                <li class="flex items-start">
                  <span class="text-success font-bold mr-2">DROP OFF</span>
                  <span>
                    {{ $t('check_in_coverage.end_of_shift.logs.drop_off').replace('DROP OFF ', '') }}
                    <a href="#" class="link link-primary ml-1">Google Maps Link</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="container mx-auto px-4 py-16 pb-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">
        {{ $t('check_in_coverage.contact.heading') }}
      </h2>
      <p class="text-lg mb-4 opacity-90">
        {{ $t('check_in_coverage.contact.copy') }}
      </p>
      <div class="flex flex-col gap-2">
        <p class="font-bold text-lg">{{ $t('check_in_coverage.contact.phone') }}</p>
        <a href="#" class="link link-primary font-bold text-lg">
          {{ $t('check_in_coverage.contact.call_link') }}
        </a>
      </div>
    </div>
  </div>
</template>