import type { InjectionKey, Ref } from "vue";

export const rootKey = Symbol() as InjectionKey<{
  width: Ref<number>,
  speed?: number,
  hoveredSpeed?: number
}>;
