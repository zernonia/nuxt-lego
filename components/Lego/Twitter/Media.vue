<script setup lang="ts">
import key from "./.keys";

const tweet = inject(key);
const mediaDetails = computed(() => tweet?.value?.mediaDetails);
</script>

<template>
  <div>
    <template v-for="media in mediaDetails">
      <LegoTwitterMediaPhoto
        v-if="media.type === 'photo'"
        :media="media"
      ></LegoTwitterMediaPhoto>
      <LegoTwitterMediaVideo
        v-if="media.type === 'video'"
        :media="media"
      ></LegoTwitterMediaVideo>
    </template>
  </div>
</template>
