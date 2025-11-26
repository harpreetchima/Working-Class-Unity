<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const logoSrc = ref('/logo_dark.svg')

// Function to update logo based on theme
const updateLogo = () => {
  // Check for data-theme attribute or system preference
  // Note: DaisyUI v5 themes might just use CSS variables, but manual toggle usually sets data-theme.
  // We check if the active theme is wcudark to decide which logo to show.
  const theme = document.documentElement.getAttribute('data-theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'wcudark' : 'wculight')
  
  // wcudark theme (dark background) -> use logo_light.svg
  // wculight theme (light background) -> use logo_dark.svg
  logoSrc.value = theme === 'wcudark'
    ? '/logo_light.svg'
    : '/logo_dark.svg'
}

let observer = null

onMounted(() => {
  updateLogo()
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogo)
  
  // Listen for manual theme changes on html element
  observer = new MutationObserver(updateLogo)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onUnmounted(() => {
  window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateLogo)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="navbar bg-secondary text-secondary-content shadow-sm">
    <div class="navbar-start">
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
          <li>
            <details>
              <summary>{{ $t('nav.kyr') }}</summary>
              <ul class="p-2">
                <li><NuxtLinkLocale to="resources">{{ $t('nav.resources') }}</NuxtLinkLocale></li>
                <li><NuxtLinkLocale to="check-in-coverage">{{ $t('nav.coverage') }}</NuxtLinkLocale></li>
              </ul>
            </details>
          </li>
          <li><NuxtLinkLocale to="about">{{ $t('nav.about') }}</NuxtLinkLocale></li>
        </ul>
      </div>
      <!-- Logo -->
      <NuxtLinkLocale to="/" class="h-auto py-2">
        <img :src="logoSrc" :alt="$t('logo_alt')" class="h-16 w-auto" />
      </NuxtLinkLocale>
    </div>
    
    <!-- Desktop Menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" role="button">{{ $t('nav.kyr') }}</div>
            <ul tabindex="-1" class="dropdown-content menu bg-base-100 text-base-content rounded-box z-50 w-52 p-2 shadow">
              <li><NuxtLinkLocale to="resources">{{ $t('nav.resources') }}</NuxtLinkLocale></li>
              <li><NuxtLinkLocale to="check-in-coverage">{{ $t('nav.coverage') }}</NuxtLinkLocale></li>
            </ul>
          </div>
        </li>
        <li><NuxtLinkLocale to="about">{{ $t('nav.about') }}</NuxtLinkLocale></li>
      </ul>
    </div>
    
    <div class="navbar-end gap-2">
      <!-- Language Switcher -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
          <li v-for="l in locales" :key="l.code">
            <NuxtLink :to="switchLocalePath(l.code)" :class="{ 'active': locale === l.code }">
              {{ l.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <NuxtLinkLocale to="join" class="btn btn-accent btn-xl">{{ $t('nav.join') }}</NuxtLinkLocale>
    </div>
  </div>
</template>