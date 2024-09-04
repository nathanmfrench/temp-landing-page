<template>
  <div class="min-h-screen flex items-center justify-center" role="main">
    <div class="text-center p-8 rounded-xl shadow-lg max-w-2xl mx-4">
      <div class="mb-8" aria-hidden="true">
        <svg class="w-24 h-24 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h1 id="main-heading" class="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p class="text-xl mb-8">
        We're working hard on our documentation and setup guides.
      </p>
      <p class="text-lg mb-4">
        Stay tuned for our official launch!
      </p>
      <div class="mt-12">
        <form @submit.prevent="subscribeUser" class="flex flex-col items-center" aria-labelledby="form-heading">
          <h2 id="form-heading" class="sr-only">Subscribe for updates</h2>
          <label for="email-input" class="sr-only">Email address</label>
          <input
            id="email-input"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-full max-w-xs text-black"
            required
            aria-required="true"
          >
          <button
            type="submit"
            class="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  </div>
</template>