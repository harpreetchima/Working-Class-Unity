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
  <!-- Section A: Mission Status -->
  <section class="bg-base-100 py-8 md:py-12">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <!-- Left: Context -->
        <div class="space-y-3">
          <h1 class="text-3xl md:text-4xl font-semibold text-base-content">
            {{ $t('check_in_coverage.hero.title') }}
          </h1>
          <p class="text-base text-base-content/70 max-w-md">
            {{ $t('check_in_coverage.hero.description') }}
          </p>
        </div>
        <!-- Right: Actions -->
        <div class="flex flex-wrap gap-3 justify-start md:justify-end">
          <a href="#schedule" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {{ $t('check_in_coverage.hero.schedule_button') }}
          </a>
          <button class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {{ $t('check_in_coverage.hero.appointment_button') }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section B: Progress Tracker -->
  <section class="bg-base-100 py-6">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="card card-border bg-base-200 flex flex-col sm:flex-row items-center p-4 gap-4">
        <!-- Left: Status + Info -->
        <div class="flex items-center gap-3 flex-1">
          <div class="text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-base">{{ $t('check_in_coverage.orientation.heading') }}</h3>
            <p class="text-sm text-base-content/70">5 min • Security &amp; Logging Protocol</p>
          </div>
        </div>
        <!-- Right: Action -->
        <button onclick="orientation_modal.showModal()" class="btn btn-sm btn-primary">
          Watch
        </button>
      </div>
    </div>
  </section>

  <!-- Modal for video -->
  <dialog id="orientation_modal" class="modal">
    <div class="modal-box max-w-4xl p-0">
      <div class="aspect-video bg-base-300 flex items-center justify-center">
        <span class="text-base-content/50">Video Player</span>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

  <!-- Section C: The Briefing -->
  <section id="schedule" class="bg-base-100 py-8">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <!-- Calendar - Full Width -->
      <h2 class="text-2xl font-bold mb-4">{{ $t('check_in_coverage.schedule.heading') }}</h2>
      <div class="card card-border bg-base-200 overflow-hidden mb-6">
        <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-checkincoverage" class="min-h-[350px] md:min-h-[500px]"></div>
      </div>
      
      <!-- Info Cards - Below Calendar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Arrival Time Spec -->
        <div class="card card-border bg-base-200 p-4">
          <div class="flex items-start gap-3">
            <div class="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-sm uppercase tracking-wide text-base-content/70">Arrival Time</h4>
              <p class="text-base font-medium">{{ $t('check_in_coverage.schedule.arrival') }}</p>
            </div>
          </div>
        </div>
        
        <!-- Your Role Spec -->
        <div class="card card-border bg-base-200 p-4">
          <div class="flex items-start gap-3">
            <div class="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-sm uppercase tracking-wide text-base-content/70">Your Role</h4>
              <p class="text-base font-medium">{{ $t('check_in_coverage.schedule.role') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section D: Resource Repository -->
  <section class="bg-base-100 py-8">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 class="text-2xl font-bold mb-6">{{ $t('check_in_coverage.resources.heading') }}</h2>
      
      <!-- Detained Alert - Hazard Style -->
      <div class="alert alert-vertical md:alert-horizontal border-2 border-error bg-error/5 mb-6">
        <div class="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-error w-5 h-5 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <div class="text-left">
            <h3 class="font-bold text-error">Important Notice</h3>
            <p class="text-sm">{{ $t('check_in_coverage.resources.notice.text') }}</p>
          </div>
        </div>
        <button class="btn btn-sm btn-error btn-outline w-full md:w-auto whitespace-nowrap">{{ $t('check_in_coverage.resources.notice.button') }}</button>
      </div>
      
      <!-- 2x2 File Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="item in ['check_in_sheet', 'tracker_log', 'quick_guide', 'if_detained']" :key="item" 
             class="card card-border bg-transparent border-base-300 p-4">
          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-base-content/50 shrink-0 mt-0.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-base truncate">{{ $t(`check_in_coverage.resources.downloads.${item}`) }}</h4>
            </div>
          </div>
          <div class="mt-3 text-right">
            <a href="#" class="text-sm text-primary link link-hover">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section E: Workflow Timeline -->
  <section class="bg-base-100 py-8">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 class="text-2xl font-bold mb-2">{{ $t('check_in_coverage.end_of_shift.heading') }}</h2>
      <p class="text-base-content/70 mb-6">{{ $t('check_in_coverage.end_of_shift.copy') }}</p>
      
      <!-- Git-style Vertical Timeline -->
      <ul class="timeline timeline-vertical timeline-compact">
        <!-- Step 1: Debrief -->
        <li>
          <div class="timeline-middle">
            <div class="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div class="timeline-end py-3">
            <h3 class="font-bold text-base">{{ $t('check_in_coverage.end_of_shift.debrief.title') }}</h3>
            <p class="text-sm text-base-content/70 mt-1">{{ $t('check_in_coverage.end_of_shift.debrief.description') }}</p>
            <a href="#" class="link link-primary text-sm mt-2 inline-block">Open Form →</a>
          </div>
          <hr class="bg-base-300"/>
        </li>
        
        <!-- Step 2: Security -->
        <li>
          <hr class="bg-base-300"/>
          <div class="timeline-middle">
            <div class="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div class="timeline-end py-3">
            <h3 class="font-bold text-base">{{ $t('check_in_coverage.end_of_shift.logs.title') }}</h3>
            <p class="text-sm text-base-content/70 mt-1">Securely handle all documentation.</p>
            
            <!-- Error-style warning -->
            <div class="mt-3 bg-error/10 border border-error/30 rounded px-3 py-2">
              <code class="text-error text-sm font-mono">WARNING: DO NOT DIGITIZE PHYSICAL LOGS</code>
            </div>
          </div>
          <hr class="bg-base-300"/>
        </li>
        
        <!-- Step 3: Handover -->
        <li>
          <hr class="bg-base-300"/>
          <div class="timeline-middle">
            <div class="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div class="timeline-end py-3">
            <h3 class="font-bold text-base">Drop off at WCU Mail Slot</h3>
            <p class="text-sm text-base-content/70 mt-1">Deliver completed logs</p>
            <a href="#" class="link link-primary text-sm mt-2 inline-flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Get Directions
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Section F: Contact Footer -->
  <section class="bg-base-100 py-8">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="card border border-base-300 bg-base-200 p-5 max-w-2xl">
        <h3 class="font-bold text-sm uppercase tracking-wide text-base-content/70 mb-2">{{ $t('check_in_coverage.contact.heading') }}</h3>
        <p class="text-base-content mb-4">{{ $t('check_in_coverage.contact.description') }}</p>
        <div class="flex flex-wrap gap-3">
          <a href="tel:+12098423232" class="btn btn-ghost bg-base-300 gap-2">
            {{ $t('check_in_coverage.contact.phone') }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
          </a>
          <a href="https://cal.com/workingclassunity" target="_blank" rel="noopener noreferrer" class="btn btn-outline gap-2">
            {{ $t('check_in_coverage.contact.book_button') }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>