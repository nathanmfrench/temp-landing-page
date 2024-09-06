<template>
  <footer class="bg-white dark:bg-gray-950 w-full items-center gap-5 justify-between flex flex-col lg:flex-row border-t border-gray-200 dark:border-gray-600/60 px-7 py-5 transition-colors">
    <div class="flex gap-2">
      <LinkButton type="bg" to="mailto:nathan@voxium.tech">
        Contact Us
      </LinkButton>
      <LinkButton type="bg" to="/legal">
        Privacy
      </LinkButton>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-4">
      <div class="flex gap-2">
        <LinkButton type="bg" to="https://github.com/nathanmfrench">
          <IconsGithubIcon />
        </LinkButton>
        <LinkButton type="bg" to="https://x.com/0xnaden/">
          <IconsXIcon />
        </LinkButton>
        <LinkButton type="bg" to="https://www.linkedin.com/in/nathan-french-b7884a1ab/">
          <IconsLinkedinIcon />
        </LinkButton>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LinkButton from "@/components/Button/LinkButton.vue"
</script>