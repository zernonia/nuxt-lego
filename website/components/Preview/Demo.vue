<script setup lang="ts">
</script>

<template>
  <div>
    <LegoPreview class="transition-transform ease-in-out duration-500 outline-none">
      <!-- Pass -->
      <!-- <slot /> -->

      <img
        src="https://images.unsplash.com/photo-1515268064940-5150b7c29f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=800&q=80"
        class="w-full rounded-2xl" alt=""
      >

      <LegoPreviewDialog
        class="fixed z-800 left-0 top-0 w-screen h-screen bg-white bg-opacity-50 backdrop-blur-md"
      />
    </LegoPreview>
  </div>
</template>
