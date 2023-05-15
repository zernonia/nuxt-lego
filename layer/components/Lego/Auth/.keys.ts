import type { InjectionKey, Ref } from "vue";
import type { Provider } from "./.types";

export const rootKey = Symbol() as InjectionKey<{
  hideProviderLabel?: boolean;
  providers?: Provider[];
}>;
