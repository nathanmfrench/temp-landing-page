<template>
  <main class="min-h-screen flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full">
      <div class="flex flex-col lg:flex-row">
        <!-- Left side: Pricing tiers -->
        <section class="lg:w-1/2 p-6 flex flex-col justify-center" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" class="flex flex-row justify-center text-3xl font-bold text-gray-800 dark:text-white mb-6">Choose Your Plan</h2>
          <div class="space-y-4">
            <div class="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition duration-300">
              <h3 id="basic-plan" class="flex flex-row justify-center text-xl font-semibold text-gray-800 dark:text-white">Basic</h3>
              <p class="text-2xl font-bold mt-2 text-gray-800 dark:text-white" aria-labelledby="basic-plan">$5.99<span class="text-sm font-normal">/month</span></p>
              <ul class="mt-4 space-y-2" aria-label="Basic plan features">
                <li class="flex items-center text-gray-800 dark:text-white">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Full Voice Web Navigation
                </li>
                <li class="flex items-center text-gray-800 dark:text-white">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  PDF Form Filling
                </li>
              </ul>
            </div>
            <div class="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition duration-300">
              <h3 id="pro-plan" class="flex flex-row justify-center text-xl font-semibold text-gray-800 dark:text-white">Pro</h3>
              <p class="text-2xl font-bold mt-2 text-gray-800 dark:text-white" aria-labelledby="pro-plan">$19.99<span class="text-sm font-normal">/month</span></p>
              <ul class="mt-4 space-y-2" aria-label="Pro plan features">
                <li class="flex items-center text-gray-800 dark:text-white">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  All Basic Features
                </li>
                <li class="flex items-center text-gray-800 dark:text-white">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Advanced Customer Support
                </li>
                <li class="flex items-center text-gray-800 dark:text-white">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Desktop Voice Navigation
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <!-- Right side: Download options -->
        <section class="lg:w-1/2 p-6 flex flex-col justify-center" aria-labelledby="download-heading">
          <h2 id="download-heading" class="flex flex-row justify-center text-3xl font-bold text-gray-800 dark:text-white mb-6">Download Now</h2>
          <p class="flex flex-row justify-center text-gray-600 dark:text-gray-300 mb-6">Choose your platform and get started with our product!</p>
          
          <div class="space-y-4">
            <a href="#" class="flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300" aria-label="Download for Windows (coming soon)">
              <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Download for Windows (coming soon)
            </a>
            <a href="#" class="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300" aria-label="Download for Mac (coming soon)">
              <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.859 0-7 3.141-7 7s3.141 7 7 7zm0 2c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9zm-.704-16.136c1.327-.117 2.681.283 3.819 1.423.307.308.555.665.724 1.045.414-.058.839-.07 1.262-.009.144-.798.107-1.632-.171-2.423-.411-1.167-1.337-2.207-2.619-2.718-1.281-.512-2.693-.396-3.836.33-1.144.726-1.876 1.949-1.958 3.274.204-.064.41-.115.62-.154.311-.677.897-1.248 1.646-1.595.748-.347 1.584-.395 2.354-.173.31.091.603.227.867.405.079-.135.169-.265.273-.386.354-.417.842-.727 1.377-.862.526-.135 1.074-.107 1.583.083-.066-.104-.139-.204-.217-.3-.644-.782-1.587-1.225-2.576-1.196-.988.029-1.905.544-2.497 1.377-.592.833-.831 1.891-.659 2.916l-.386.072c-.373.07-.724.207-1.04.401-.279-.407-.433-.888-.433-1.386 0-.467.131-.924.369-1.315.239-.391.578-.708.976-.913.399-.205.844-.285 1.287-.23.444.055.867.242 1.219.539zm-7.296 4.734c.456-.456 1.07-.71 1.712-.71.642 0 1.257.254 1.712.71.456.456.71 1.07.71 1.712 0 .642-.254 1.257-.71 1.712-.455.456-1.07.71-1.712.71-.642 0-1.256-.254-1.712-.71-.455-.455-.71-1.07-.71-1.712 0-.642.255-1.256.71-1.712zm3.839 11.509c-.455.455-1.07.71-1.712.71-.642 0-1.256-.255-1.712-.71-.455-.456-.71-1.07-.71-1.712 0-.642.255-1.257.71-1.712.456-.456 1.07-.71 1.712-.71.642 0 1.257.254 1.712.71.456.455.71 1.07.71 1.712 0 .642-.254 1.256-.71 1.712zm-1.644-8.404l-1.639 1.639 1.639 1.639 1.639-1.639-1.639-1.639zm4.937 2.927c-.456.456-1.07.71-1.712.71-.642 0-1.257-.254-1.712-.71-.456-.455-.71-1.07-.71-1.712 0-.642.254-1.256.71-1.712.455-.455 1.07-.71 1.712-.71.642 0 1.256.255 1.712.71.455.456.71 1.07.71 1.712 0 .642-.255 1.257-.71 1.712z"/>
              </svg>
              Download for Mac (coming soon)
            </a>
          </div>
          
          <p class="flex flex-row justify-center text-sm text-gray-500 dark:text-gray-400 mt-6">By downloading, you agree to our Terms of Service and Privacy Policy.</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
// You can add any necessary logic here
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>