<template>
  <div class="mx-auto h-full px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-2xl lg:px-8" role="main">
    <div class="flex flex-col gap-16 items-center h-full justify-between lg:flex-row p-4">
      <div class="lg:w-1/2 w-full">
        <div class="lg:max-w-xl lg:pr-5 space-y-12">
          <!-- Layered typography title design -->
          <div class="text-center space-y-4 mb-12">
            <div class="relative inline-block">
              <h1 class="text-7xl font-extrabold leading-none tracking-tighter text-gray-200 dark:text-gray-700 sm:text-8xl">
                Voxium AI
              </h1>
              <h1 class="absolute top-0 left-0 text-7xl font-extrabold leading-none tracking-tighter text-gray-800 dark:text-white sm:text-8xl" style="clip-path: inset(0 0 20% 0);">
                Voxium AI
              </h1>
              <h1 class="absolute top-0 left-0 text-7xl font-extrabold leading-none tracking-tighter text-green-500 dark:text-green-400 sm:text-8xl opacity-70" style="clip-path: inset(80% 0 0 0);">
                Voxium AI
              </h1>
            </div>
            <p class="text-xl text-gray-600 dark:text-gray-300 font-medium tracking-wide mt-6" aria-label="Tagline">
              <i>Revolutionizing Digital Accessibility</i>
            </p>
          </div>
          
          <div class="text-2xl text-gray-800 dark:text-white space-y-8 text-center leading-relaxed">
            <p>We're developing an AI-powered, voice-to-voice screen reader that interprets visual content, enabling users to interact with any digital interface seamlessly.</p>
            <div class="flex justify-center">
              <div class="w-1/3 border-t-2 border-green-400 dark:border-green-600"></div>
            </div>
            <p>By leveraging advanced computer vision, we're eliminating the need for traditional accessible design elements, making all websites and applications universally accessible.</p>
          </div>
        </div>
      </div>
      <div class="lg:ml-32 lg:block lg:w-10/12 w-full" aria-labelledby="demo-heading">
        <h2 id="demo-heading" class="text-4xl font-bold mb-6 text-center dark:text-white text-black">Our Demo</h2>
        <div class="bg-gray-900 dark:bg-gray-900/70 h-[400px] rounded-lg border-gray-800 border w-full flex items-center justify-center" role="region" aria-label="Product demo video">
          <video controls class="w-full h-full object-contain">
            <source src="assets/VoxiumDemo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="text-center mt-6 text-xl">
          Empowering the visually impaired with <span class="font-bold text-green-400">intuitive digital interaction</span>
        </p>
      </div>
    </div>
  </div>
</template>