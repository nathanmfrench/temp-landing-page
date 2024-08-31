<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center p-8 rounded-xl shadow-lg max-w-2xl mx-4">
      <div class="mb-8">
        <svg class="w-24 h-24 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h1 class="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p class="text-xl mb-8">
        We're working hard on our documentation and setup guides.
      </p>
      <p class="text-lgmb-4">
        Stay tuned for our official launch!
      </p>
      <div class="mt-12">
        <form @submit.prevent="subscribeUser" class="flex flex-col items-center">
          <input 
            v-model="email" 
            type="email" 
            placeholder="Enter your email" 
            class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-full max-w-xs text-black"
            required
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

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')

const subscribeUser = async () => {
  // Here you would typically send the email to your backend or mailing list service
  console.log('Subscribing email:', email.value)
  try {
    // Replace this with your actual API call
    // await axios.post('/api/subscribe', { email: email.value })
    alert('Thank you for subscribing!')
    email.value = '' // Clear the input after successful subscription
  } catch (error) {
    console.error('Error subscribing user:', error)
    alert('There was an error subscribing. Please try again later.')
  }
}
</script>

<style scoped>
input::placeholder {
  color: #6B7284; /* This is a medium gray color, you can adjust as needed */
}
</style>