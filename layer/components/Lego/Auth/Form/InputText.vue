<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

interface Props extends  /* @vue-ignore */ InputHTMLAttributes {
  label: string;
  name: string;
  type: string;
}

defineProps<Props>();
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input v-bind="$attrs" :id="name" required :type="type" :name="name">
  </div>
</template>
