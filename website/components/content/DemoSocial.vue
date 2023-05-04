<script setup lang="ts">
defineProps<{
  url?: string;
  text?: string;
}>();
</script>

<template>
  <Demo>
    <LegoSocial :url="url" class="text-3xl flex space-x-3">
      <LegoSocialLink
        class="text-blue-300 hover:text-blue-400 transition"
      ></LegoSocialLink>
      <LegoSocialFacebook
        class="text-blue-300 hover:text-blue-400 transition"
      ></LegoSocialFacebook>
      <LegoSocialTwitter
        class="text-blue-300 hover:text-blue-400 transition"
        :text="text"
      ></LegoSocialTwitter>
      <LegoSocialLinkedIn
        class="text-blue-300 hover:text-blue-400 transition"
        :text="text"
      ></LegoSocialLinkedIn>
    </LegoSocial>
  </Demo>
</template>
