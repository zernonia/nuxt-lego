<script setup lang="ts">
import type { MaybeElementRef } from "@vueuse/core";

const props = defineProps<{
  target: MaybeElementRef;
}>();

const { target } = toRefs(props);
const progress = ref(0);
const offsetTop = ref(0);

onMounted(() => {
  window.addEventListener("scroll", () => {
    const { documentElement, body } = document;
    let windowScroll =
      (body.scrollTop || documentElement.scrollTop) - offsetTop.value;
    let height =
      documentElement.scrollHeight -
      documentElement.clientHeight -
      offsetTop.value;

    progress.value = Math.min((Math.max(0, windowScroll) / height) * 100, 100);
  });
});

whenever(target, () => {
  const el = unrefElement(target.value) as HTMLElement;
  if (!el) return;
  offsetTop.value = el.offsetTop;
});
</script>

<template>
  <div>
    <slot :progress="progress">
      <div>{{ progress }}</div>
    </slot>
  </div>
</template>
