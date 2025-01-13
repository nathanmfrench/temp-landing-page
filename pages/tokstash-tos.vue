<template>
  <div class="h-screen p-4 md:p-8">
    <div class="h-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-8 overflow-y-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
        Terms of Service
      </h1>
      
      <div class="prose prose-sm md:prose-base max-w-none dark:prose-invert">
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          <strong class="text-gray-900 dark:text-gray-100">Effective Date:</strong> 01/12/2025
        </p>

        <p class="mb-8 text-gray-700 dark:text-gray-300">
          Welcome to <strong class="text-gray-900 dark:text-gray-100">TokStash</strong> ("we," "our," or "us"). 
          These Terms of Service ("Terms") govern your access to and use of the TokStash mobile application 
          (the "App") and associated services (the "Services"). By creating an account or using TokStash, 
          you agree to these Terms. If you do not agree, please refrain from using our Services.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          1. Overview of Services
        </h2>
        <p class="mb-6 text-gray-700 dark:text-gray-300">
          TokStash enables TikTok creators to back up, store, and manage their TikTok videos, liked videos, 
          and bookmarked videos in the cloud. The App is intended for personal use and is only available 
          to users located in the United States.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          2. Eligibility
        </h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 break-words">
          <li class="mb-2">You must be at least 18 years old or have parental/guardian consent to use the App.</li>
          <li class="mb-2">You must provide accurate and complete information during registration and TikTok authorization.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          3. User Accounts
        </h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Registration:</strong> To access TokStash, you must create an account using your email. You will also need to authenticate your TikTok account to access video data.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Data Collection:</strong> We collect your email and metadata about your TikTok videos for tagging purposes. Videos are securely stored in <strong class="text-gray-900 dark:text-gray-100">Amazon S3</strong>, and all associated data is securely managed in <strong class="text-gray-900 dark:text-gray-100">Supabase</strong>.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Data Deletion:</strong> If you delete your account, all associated data (including stored videos) will be permanently deleted. If you delete individual videos, all data related to those videos will also be permanently deleted.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          4. User Responsibilities
        </h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 break-words">
          <li class="mb-2">
            <strong class="text-gray-900 dark:text-gray-100">Permitted Use:</strong> You may only use TokStash to:
            <ul class="list-disc pl-4 md:pl-6 mt-2">
              <li class="mb-1">Back up your TikTok videos.</li>
              <li class="mb-1">Access public liked and bookmarked videos.</li>
              <li class="mb-1">Store and retrieve content for personal use.</li>
            </ul>
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          5. Pricing and Subscriptions
        </h2>
        <p class="mb-4 text-gray-700 dark:text-gray-300">TokStash offers a freemium model with additional paid tiers:</p>
        <ul class="list-disc pl-4 md:pl-6 mb-6 text-gray-700 dark:text-gray-300 break-words">
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Free Tier:</strong> Includes 500MB storage, limited offline video access, and ad support.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Basic Tier:</strong> $2.99/month for 5GB storage, 15 offline videos.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Premium Tier:</strong> $7.99/month for 30GB storage, cross-device sync, and bulk download capabilities.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Pro Tier:</strong> $20/month for 100GB storage, analytics, priority support, and auto-downloads.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Creator Archive Pro:</strong> $49.99/month or $499/year for 1TB+ storage, advanced analytics, API access, and multiple account management.</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100">
          Refund and Cancellation Policy
        </h3>
        <p class="mb-6 text-gray-700 dark:text-gray-300">
          We offer refunds if you are unsatisfied with the App. Refunds and cancellations are processed according to <strong class="text-gray-900 dark:text-gray-100">Stripe's policies</strong>, including a 1-day cutoff before the next billing cycle.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          6. Copyright and DMCA Policy
        </h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Copyright Ownership:</strong> All videos uploaded to TokStash remain the sole property of their respective owners.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Copyright Violations:</strong> If a video infringes copyright laws, we will comply with applicable legal requirements and remove the content.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          7. Limitation of Liability
        </h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Service Interruptions and Bugs:</strong> While we strive for a seamless experience, TokStash is provided "as is" and we do not guarantee uninterrupted service or bug-free operation.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Loss of Content:</strong> We are not liable for loss of user content due to technical issues, user actions, or force majeure.</li>
          <li class="mb-2"><strong class="text-gray-900 dark:text-gray-100">Misuse by Users:</strong> Users are solely responsible for their actions within the App. TokStash disclaims liability for misuse, including unauthorized sharing of videos or illegal activities.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          8. Privacy
        </h2>
        <p class="mb-6 text-gray-700 dark:text-gray-300">
          We value your privacy. TokStash does not store or share your personal data beyond what is necessary to provide the Services. Your data is securely stored and inaccessible to other users. For more information, please contact us.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          9. Changes to the Terms
        </h2>
        <p class="mb-6 text-gray-700 dark:text-gray-300">
          We reserve the right to update these Terms at any time. We will notify you of significant changes through the App or email. Continued use of the Services constitutes acceptance of updated Terms.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          10. Governing Law
        </h2>
        <p class="mb-6 text-gray-700 dark:text-gray-300">
          These Terms are governed by the laws of the United States. Any disputes will be resolved in accordance with U.S. law.
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">
          11. Contact Information
        </h2>
        <p class="text-gray-700 dark:text-gray-300">
          If you have questions about these Terms, contact us at: <br>
          <strong class="text-gray-900 dark:text-gray-100">Email:</strong> [nathan@voxium.tech]
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})
</script> 

<style scoped>
/* Remove previous style block as it's no longer needed */
</style> 