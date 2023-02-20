import type { Module } from "vuex";
import type { I_RootState } from "../index.types";

export interface I_searchModule {
  FILTER_STRING: string;
  FILTERING_REPOS: I_RootState["SHOWING_REPOS"];
}

export const searchModule: Module<I_searchModule, I_RootState> = {
  state: () => ({
    FILTER_STRING: "",
    FILTERING_REPOS: null,
  }),
  mutations: {
    /** Найденные репозитории пользователя */
    setFilteringRepos(state, newValue) {
      state.FILTERING_REPOS = newValue;
    },
  },
  actions: {
    /** Фильтрация репозиториев пользователя */
    filterRepos({ state, rootState, commit }) {
      const rawArray = rootState.SELECTED_USER!.repositories.nodes.filter(
        (el) =>
          el.name.toLowerCase().includes(state.FILTER_STRING.toLowerCase())
      );
      commit("setFilteringRepos", rawArray);
    },
  },
  namespaced: true,
};

export default searchModule;
