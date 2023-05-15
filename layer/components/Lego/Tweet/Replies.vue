<script setup lang="ts">
import key from "./.keys";
import { getTweetUrl, formatNumber } from "~/../layer/utils/twitter";

const tweet = inject(key);
</script>

<template>
  <a
    v-if="tweet"
    :href="getTweetUrl(tweet)"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot :conversation_count="tweet.conversation_count">
      <span>{{
        tweet.conversation_count > 0
          ? `Read ${formatNumber(tweet.conversation_count)} replies`
          : "Read more on Twitter"
      }}
      </span>
    </slot>
  </a>
</template>
