import type { InjectionKey, Ref } from "vue";

export const rootKey = Symbol() as InjectionKey<{
  isPreviewActive: Ref<boolean>,
}>;
