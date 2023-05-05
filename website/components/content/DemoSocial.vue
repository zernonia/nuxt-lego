<script setup lang="ts">
defineProps<{
  url?: string;
  text?: string;
}>();
</script>

<template>
  <Demo>
    <LegoSocialShare :url="url" class="text-3xl flex space-x-3">
      <LegoSocialShareLink
        class="text-blue-300 hover:text-blue-400 transition"
      ></LegoSocialShareLink>
      <LegoSocialShareFacebook
        class="text-blue-300 hover:text-blue-400 transition"
      ></LegoSocialShareFacebook>
      <LegoSocialShareTwitter
        class="text-blue-300 hover:text-blue-400 transition"
        :text="text"
      ></LegoSocialShareTwitter>
      <LegoSocialShareLinkedIn
        class="text-blue-300 hover:text-blue-400 transition"
        :text="text"
      ></LegoSocialShareLinkedIn>
    </LegoSocialShare>
  </Demo>
</template>
