<script setup lang="ts">
const url = window.location.origin;

provide("social-url", url);
</script>

<template>
  <div>
    <slot>
      <LegoSocialLink></LegoSocialLink>
    </slot>
  </div>
</template>
