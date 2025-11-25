<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Join Our Team</h1>
    
    <form class="flex flex-col gap-4">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Full Name</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
      </label>

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input type="email" placeholder="Type here" class="input input-bordered w-full" />
      </label>
      
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Department</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </label>

      <button class="btn btn-primary mt-4">Submit Application</button>
    </form>
  </div>
</template>