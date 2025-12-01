<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- A. Header Section -->
      <header class="text-center mb-12">
        <span class="text-xs uppercase tracking-wide text-base-content/50 block mb-3">Know Your Rights</span>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-4">
          Documents to Keep
        </h1>
        <p class="text-base text-base-content/70 max-w-2xl mx-auto">
          Know which documents to carry, when to show them, and how to protect your rights based on your immigration status.
        </p>
      </header>

      <!-- B. Document Safety Warning Section -->
      <section class="mb-12">
        <div class="alert alert-soft alert-warning border border-warning/30 rounded-xl">
          <div class="flex items-start gap-3">
            <!-- Warning Triangle Icon -->
            <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
            </svg>
            <div>
              <p class="font-bold text-sm mb-2">Document Safety</p>
              <ul class="space-y-2 text-sm text-base-content/80">
                <li class="flex items-start gap-2">
                  <span class="text-warning shrink-0">•</span>
                  <span>Make copies of everything. Store originals with trusted family or friends.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-warning shrink-0">•</span>
                  <span>Never show foreign documents (passports, birth certificates) that reveal birthplace outside the U.S. These can trigger deportation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- C. Three Status Categories - Bento Grid -->
      <section class="mb-12">
        <h2 class="text-xs uppercase tracking-wide text-base-content/60 mb-6">Documents by Immigration Status</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1: Legal Status (Success/Green theme) -->
          <div class="card card-border border-l-4 border-l-success">
            <div class="card-body p-5">
              <div class="flex items-start gap-4">
                <!-- Shield with checkmark icon -->
                <div class="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 flex-wrap">
                    If You Have Legal Status
                    <span class="badge badge-soft badge-success text-xs">Legal</span>
                  </h3>
                </div>
              </div>
              
              <div class="mt-4 space-y-4">
                <!-- Includes -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Includes</p>
                  <p class="text-sm text-base-content/70">Green card, asylum, refugee status, valid student visa, or TPS.</p>
                </div>
                
                <!-- Carry -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Carry</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Your lawful resident card or immigration papers</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Show -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Show</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Present these documents if law enforcement requests them</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Pending Status (Warning/Yellow theme) -->
          <div class="card card-border border-l-4 border-l-warning">
            <div class="card-body p-5">
              <div class="flex items-start gap-4">
                <!-- Clock/hourglass icon -->
                <div class="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 flex-wrap">
                    If You Have Pending Status
                    <span class="badge badge-soft badge-warning text-xs">Pending</span>
                  </h3>
                </div>
              </div>
              
              <div class="mt-4 space-y-4">
                <!-- Includes -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Includes</p>
                  <p class="text-sm text-base-content/70">Pending asylum application, open immigration court case, or immigration appeal.</p>
                </div>
                
                <!-- Carry -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Carry</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <span class="text-warning shrink-0">•</span>
                      <span>Copies of papers proving you applied for status or filed an appeal</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Show -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Show</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <span class="text-warning shrink-0">•</span>
                      <span>Present these documents only if arrested</span>
                    </li>
                  </ul>
                </div>

                <!-- Otherwise -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Otherwise</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <span class="text-warning shrink-0">•</span>
                      <span>Remain silent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Undocumented (Error/Red theme - most critical) -->
          <div class="card card-border border-l-4 border-l-error">
            <div class="card-body p-5">
              <div class="flex items-start gap-4">
                <!-- Document/ID card icon -->
                <div class="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-base flex items-center gap-2 flex-wrap">
                    If Undocumented or Expired
                    <span class="badge badge-soft badge-error text-xs">Critical</span>
                  </h3>
                </div>
              </div>
              
              <div class="mt-4 space-y-4">
                <!-- Carry -->
                <div>
                  <p class="text-xs uppercase tracking-wide text-base-content/50 mb-2">Carry proof of U.S. residence for 2+ years</p>
                  <ul class="space-y-1 text-sm text-base-content/80">
                    <li class="flex items-start gap-2">
                      <span class="text-error shrink-0">•</span>
                      <span>Rental agreements</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-error shrink-0">•</span>
                      <span>School records with address</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-error shrink-0">•</span>
                      <span>Mail addressed to you</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-error shrink-0">•</span>
                      <span>Documents showing your name, U.S. address, and date</span>
                    </li>
                  </ul>
                </div>

                <!-- Why This Matters Callout -->
                <div class="alert alert-soft alert-error border border-error/30 rounded-xl mt-4">
                  <div>
                    <span class="font-bold text-sm">Why this matters</span>
                    <p class="text-sm text-base-content/80 mt-1">These documents can prevent expedited removal without a hearing. Without proof of 2+ years residence, you can face deportation without seeing a judge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- D. Quick Reference Summary -->
      <section class="mb-12">
        <h2 class="text-xs uppercase tracking-wide text-base-content/60 mb-6">Quick Reference</h2>
        
        <div class="card card-border bg-base-100">
          <div class="card-body p-6">
            <div class="overflow-x-auto">
              <table class="table table-zebra w-full text-sm">
                <thead>
                  <tr>
                    <th class="text-base-content/70">Status</th>
                    <th class="text-base-content/70">What to Carry</th>
                    <th class="text-base-content/70">When to Show</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="badge badge-soft badge-success text-xs">Legal Status</span>
                    </td>
                    <td>Lawful resident card or immigration papers</td>
                    <td>If law enforcement requests</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="badge badge-soft badge-warning text-xs">Pending Status</span>
                    </td>
                    <td>Copies of application/appeal papers</td>
                    <td>Only if arrested</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="badge badge-soft badge-error text-xs">Undocumented</span>
                    </td>
                    <td>Proof of 2+ years U.S. residence</td>
                    <td>To prevent expedited removal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- E. Script Callout -->
      <section class="mb-12">
        <div class="alert alert-soft alert-info border border-info/30 rounded-xl">
          <div class="flex items-start gap-3">
            <!-- Speech bubble icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            <div>
              <p class="text-xs uppercase tracking-wide text-base-content/60 mb-1">Remember</p>
              <p class="font-mono text-sm">"I wish to remain silent. I do not consent to any searches."</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- F. Navigation -->
      <div class="mt-12">
        <LazyKnowYourRightsNav hydrate-on-visible />
      </div>
      
    </div>
  </div>
</template>