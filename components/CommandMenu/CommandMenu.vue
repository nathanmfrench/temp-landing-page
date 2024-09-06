<template>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modal
      :show="showModal"
      @close="showModal = false"
    >
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </Modal>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Modal from "@/components/Modal/Modal.vue"
import SearchIcon from "@/components/Icons/SearchIcon.vue"

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}

defineShortcuts({
  meta_k: {
    handler: () => {
      toggleModal()
    },
  },
})
</script>
