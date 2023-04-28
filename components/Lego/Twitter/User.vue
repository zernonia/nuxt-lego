<script setup lang="ts">
import key from "./.keys";

const tweet = inject(key);
const user = computed(() => tweet?.value?.user);
</script>

<template>
  <div v-if="user">
    <img :src="user.profile_image_url_https" :alt="user.name" />
    <Icon
      v-if="!user.is_blue_verified"
      name="material-symbols:verified-rounded"
    ></Icon>
    <p>{{ user.name }}</p>
    <p>@{{ user.screen_name }}</p>
  </div>
</template>
