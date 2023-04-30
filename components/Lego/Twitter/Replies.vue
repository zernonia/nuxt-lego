<script setup lang="ts">
import key from "./.keys";
import { getTweetUrl, formatNumber } from "lego/utils/twitter";

const tweet = inject(key);
</script>

<template>
  <a
    v-if="tweet"
    :href="getTweetUrl(tweet)"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{{
      tweet.conversation_count > 0
        ? `Read ${formatNumber(tweet.conversation_count)} replies`
        : "Read more on Twitter"
    }}</span></a
  >
</template>
