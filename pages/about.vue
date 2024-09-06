<template>
  <div class="container mx-auto px-4 py-16" role="main" aria-labelledby="about-us-heading">
    <!-- Project Info Section -->
    <div class="grid md:grid-cols-2 gap-8 mb-16" role="region" aria-label="Project Information">
      <div>
        <h2 id="mission-heading" class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-lg" aria-labelledby="mission-heading">
          At Voxium AI, we're revolutionizing the digital experience of the visually impaired through the power of voice AI. 
          We're making the digital world accessible to everyone, breaking down barriers and creating
          a seamless, voice-controlled experience that understands and adapts to each user's needs.
        </p>
      </div>
      <div>
        <h2 id="features-heading" class="text-2xl font-semibold mb-4">Key Features</h2>
        <ul class="list-disc list-inside text-lg" aria-labelledby="features-heading">
          <li>Voice-Controlled Checkout: Complete Amazon purchases using just your voice</li>
          <li>Web Element Interpretation: Understands web layouts without requiring special formatting</li>
          <li>All External Desktop Scripts in One: Removes the need to pay for external scripts to do desktop tasks (coming soon)</li>
          <li>Multi-Platform Support: Works across various operating systems</li>
        </ul>
      </div>
    </div>
    
    <!-- Team Section -->
    <h2 id="team-heading" class="text-3xl font-bold text-center mb-8">Meet the Team</h2>
    <div class="flex justify-center items-center space-x-8" role="region" aria-labelledby="team-heading">
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-64 overflow-hidden">
          <img class="w-full h-full object-cover object-center" src="assets/tryagain6.jpg" alt="Nathan French" aria-labelledby="team-member-name">
        </div>
        <div class="text-gray-600 p-6">
          <h3 id="team-member-name" class="text-xl font-semibold mb-2">Nathan French</h3>
          <p class="text-gray-600" aria-labelledby="team-member-name">
            AI/Software Developer
            <br>prev Math/CS/Finance @ Boston College 
          </p>
        </div>
      </div>
      <div class="w-full max-w-sm flex items-center justify-center">
        <img src="assets/darklogofull.png" alt="Voxium AI Logo" class="max-w-full max-h-64">
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