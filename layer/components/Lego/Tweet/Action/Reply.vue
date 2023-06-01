<script setup lang="ts">
import { getReplyUrl } from 'lego/utils/twitter'
import key from '../.keys'

const tweet = inject(key)
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
      <LegoTweetActionReplyIcon />
      <span>Reply</span>
    </slot>
  </a>
</template>
