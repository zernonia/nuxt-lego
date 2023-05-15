import type { InjectionKey, Ref } from "vue";

export const copiedKey = Symbol() as InjectionKey<Ref<Boolean>>;
