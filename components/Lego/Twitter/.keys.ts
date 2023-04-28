import type { InjectionKey, Ref } from "vue";
import type { Tweet } from "../../../types";

export default Symbol() as InjectionKey<Ref<Tweet>>;
