import type { InjectionKey } from "vue";
import { useStore as VuexUseStore, Store } from "vuex";
import type { I_State } from "./store";

export const KEY: InjectionKey<Store<I_State>> = Symbol();

export function useStore() {
  return VuexUseStore(KEY);
}
