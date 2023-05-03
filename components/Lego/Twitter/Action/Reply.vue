<script setup lang="ts">
import key from "../.keys";
import { getReplyUrl } from "lego/utils/twitter";

const tweet = inject(key);
</script>

<template>
  <a
    v-if="tweet"
    :href="getReplyUrl(tweet)"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Reply to this Tweet on Twitter"
  >
    <slot>
      <LegoTwitterActionReplyIcon></LegoTwitterActionReplyIcon>
      <span>Reply</span>
    </slot>
  </a>
</template>
