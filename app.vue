<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Voxium AI",
  ogTitle: "Voxium AI",
  description: "Revolutionizing digital accessibility",
  ogDescription: "Revolutionizing digital accessibility",
})

defineOgImageComponent("Frame", {
  headline: false,
  title: "Voxium AI",
  description: "Revolutionizing digital accessibility",
})
</script>
