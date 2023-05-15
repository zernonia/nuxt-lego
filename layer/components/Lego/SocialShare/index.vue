<script setup lang="ts">
import key from "./.keys";
const props = defineProps<{ url?: string }>();
const url = ref(props.url);

onMounted(() => {
  if (!url.value) {
    url.value = window.location.origin + window.location.pathname;
  }
});

provide(key, url);
</script>

<template>
  <div>
    <slot>
      <LegoSocialShareLink />
    </slot>
  </div>
</template>
