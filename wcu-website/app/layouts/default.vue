<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Navbar />
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