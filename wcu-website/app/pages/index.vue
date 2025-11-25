<template>
  <div class="hero min-h-[50vh] bg-base-200 rounded-box">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to Our Mission</h1>
        <p class="py-6">
          We are dedicated to making a difference. Join our team and help us build a better future.
        </p>
        <NuxtLink to="/join" class="btn btn-primary">Get Started</NuxtLink>
      </div>
    </div>
  </div>
  
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Our Values</h2>
        <p>Integrity, Innovation, and Impact.</p>
      </div>
    </div>
    <!-- Add more cards as needed -->
  </div>
</template>