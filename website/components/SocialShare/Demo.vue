<script setup lang="ts">
defineProps<{
  url?: string;
  text?: string;
}>();
</script>

<template>
  <LegoSocialShare :url="url" class="text-3xl flex space-x-3">
    <LegoSocialShareLink class="text-blue-300 hover:text-blue-400 transition" />
    <LegoSocialShareFacebook
      class="text-blue-300 hover:text-blue-400 transition"
    />
    <LegoSocialShareTwitter
      class="text-blue-300 hover:text-blue-400 transition"
      :text="text"
    />
    <LegoSocialShareLinkedIn
      class="text-blue-300 hover:text-blue-400 transition"
      :text="text"
    />
    <LegoSocialShareReddit       
      class="text-blue-300 hover:text-blue-400 transition"
      :text="text"
    />
  </LegoSocialShare>
</template>
