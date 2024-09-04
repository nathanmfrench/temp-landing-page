<template>
  <div class="mx-auto h-full px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-2xl lg:px-8" role="main">
    <div class="flex flex-col gap-10 items-center h-full justify-between lg:flex-row p-4">
      <div class="lg:w-1/2">
        <div class="lg:max-w-xl lg:pr-5">
          <p class="flex text-sm uppercase dark:text-gray-300 text-gray-800" aria-label="Tagline">
            ✨ Revolutionizing Digital Accessibility
          </p>
          <h1 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight dark:text-white text-black sm:text-5xl sm:leading-snug">
            <span class="my-1 inline-block border-b-8 dark:border-green-500 border-green-400 bg-green-200 px-4 font-bold text-black rounded-lg">
              Voxium AI
            </span>
          </h1>
          <div class="text-lg text-gray-800 dark:text-white mb-6">
            <ul class="list-disc pl-5 space-y-2" aria-label="Key features">
              <li>We're developing an AI-powered, voice-to-voice screen reader that interprets visual content, enabling users to interact with any digital interface seamlessly.</li>
              <li>By leveraging advanced computer vision, we're eliminating the need for traditional accessible design elements, making all websites and applications universally accessible.</li>
            </ul>
          </div>
        </div>
        <div class="mt-10 flex flex-col md:flex-row items-center justify-left gap-4">
          <a
            href="/"
            class="py-2 flex-grow md:flex-grow-0 w-full lg:w-auto flex items-center justify-center rounded px-6 font-medium tracking-wide text-white dark:border dark:border-green-800/60 dark:bg-green-600/20 bg-green-700/80 hover:bg-green-800/80 hover:dark:bg-green-800/50 hover:dark:text-green-300 transition-colors whitespace-nowrap"
            aria-label="Get notified about product updates"
          >Get Notified</a>
        </div>
      </div>
      <div class="lg:ml-32 lg:block lg:w-10/12 w-full" aria-labelledby="demo-heading">
        <div class="bg-gray-900 dark:bg-gray-900/70 h-[400px] rounded-lg border-gray-800 border w-full flex items-center justify-center" role="img" aria-label="AI-Powered Screen Reader Demo placeholder">
          <p id="demo-heading" class="text-white text-xl">AI-Powered Screen Reader Demo</p>
        </div>
        <p class="text-center mt-4">
          Empowering the visually impaired with <span class="font-bold text-green-400">intuitive digital interaction</span>
        </p>
      </div>
    </div>
  </div>
</template>