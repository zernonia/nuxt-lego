import type { InjectionKey, Ref } from "vue";
import type { MetaTags } from "../../../types/metatags";

export default Symbol() as InjectionKey<Ref<MetaTags | null>>;
