<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-12">About us</h1>
    
    <!-- Project Info Section -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-lg">
          At Voxium AI, we're revolutionizing the digital experience of the visually impaired through the power of voice AI. 
          We're making the digital world accessible to everyone, breaking down barriers and creating 
          a seamless, voice-controlled experience that understands and adapts to each user's needs.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
        <ul class="list-disc list-inside text-lg">
          <li>Voice-Controlled Checkout: Complete Amazon purchases using just your voice</li>
          <li>Web Element Interpretation: Understands web layouts without requiring special formatting</li>
          <li>All External Desktop Scripts in One: Removes the need to pay for external scripts to do desktop tasks (coming soon)</li>
          <li>Multi-Platform Support: Works across various operating systems</li>
        </ul>
      </div>
    </div>
    <!-- Team Section -->
    <h2 class="text-3xl font-bold text-center mb-8">Meet the Team</h2>
    <div class="flex justify-center">
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <img class="w-full h-64 bg-cover bg-center" src="assets/me1.jpg" alt="Nathan French">
        <div class="text-gray-600 p-6">
          <h3 class="text-xl font-semibold mb-2">Nathan French</h3>
          <p class="text-gray-600">
            prev Math/CS/Finance @ Boston College <br> Researched machine learning in college, and love building things that inspire others
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// You can add any necessary imports or logic here
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>