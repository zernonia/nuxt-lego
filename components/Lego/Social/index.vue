<script setup lang="ts">
import key from "./.keys";
const url = ref("");

onMounted(() => {
  url.value = window.location.origin;
});

provide(key, url);
</script>

<template>
  <div>
    <slot>
      <LegoSocialLink></LegoSocialLink>
    </slot>
  </div>
</template>
