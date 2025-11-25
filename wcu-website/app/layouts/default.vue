<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
          <NuxtLink to="/" class="btn btn-ghost text-xl">My Org</NuxtLink>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/join">Join Us</NuxtLink></li>
          </ul>
        </div>
      </div>
    </header>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </aside>
    </footer>
  </div>
</template>