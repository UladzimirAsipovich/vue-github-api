import { createStore } from "vuex";
import { INITIAL_DATA } from "../initialData";

import type {
  I_RootState,
  T_SELECTED_USER,
  T_SHOWING_COMMENTS,
  T_SHOWING_ISSUES,
  T_SHOWING_REPOS,
} from "./index.types";

import type {
  I_INITIAL_USER,
  I_INITIAL_ISSUE,
  I_INITIAL_REPO,
} from "../initialData.types";
import searchModule, { type I_searchModule } from "./modules/searchModule";

export interface I_State extends I_RootState {
  searchModule: I_searchModule;
}

// ? Нужна ли явная декомпозиция стора на данном этапе?
// ? Можно вынести всё после divider в отельный модуль.
export const STORE = createStore<I_State>({
  modules: {
    searchModule,
  },
  state: () =>
    ({
      INITIAL_DATA: INITIAL_DATA,
      IS_FETCHING: false,
      SEARCH_STRING: "",
      _DEBOUNCE: false,
      TEXT_ERROR: "",
      // --------------- divider -----------------------//
      FOUND_USERS: null,
      SELECTED_USER: null,
      SHOWING_REPOS: null,
      SELECTED_REPO: null,
      SHOWING_ISSUES: null,
      SELECTED_ISSUE: null,
      SHOWING_COMMENTS: null,
    } as I_State),
  getters: {
    /** Получить длину массива найденных пользователей */
    getFoundUsersCount(state) {
      if (Array.isArray(state.FOUND_USERS)) {
        return state.FOUND_USERS.length;
      }
      return null;
    },
    /** Получить длину массива репозиториев пользователя */
    getShowingReposCount(state) {
      if (Array.isArray(state.SHOWING_REPOS)) {
        return state.SHOWING_REPOS.length;
      }
      return null;
    },
    /** Получить длину массива проблем репозитория пользователя */
    getShowingIssuesCount(state) {
      if (Array.isArray(state.SHOWING_ISSUES)) {
        return state.SHOWING_ISSUES.length;
      }
      return null;
    },
    /** Получить длину массива комментариев проблем репозитория пользователя */
    getShowingCommentsCount(state) {
      if (Array.isArray(state.SHOWING_COMMENTS)) {
        return state.SHOWING_COMMENTS.length;
      }
      return null;
    },
  },
  mutations: {
    /** Установить стейт к Default, кроме строки поиска */
    setToDefaultState(state) {
      state.IS_FETCHING = false;
      state._DEBOUNCE = false;
      state.TEXT_ERROR = "";
      state.FOUND_USERS = null;
      state.SELECTED_USER = null;
      state.SHOWING_REPOS = null;
      state.SELECTED_REPO = null;
      state.SHOWING_ISSUES = null;
      state.SELECTED_ISSUE = null;
      state.SHOWING_COMMENTS = null;

      // STATE FROM "searchModule"
      state.searchModule.FILTER_STRING = "";
      state.searchModule.FILTERING_REPOS = [];
    },
    /** Найденные пользователи */
    setFoundUsers(state, foundUsers) {
      state.FOUND_USERS = foundUsers;
    },
    /** Идет процесс загрузки */
    setFetching(state, status) {
      state.IS_FETCHING = status;
    },
    /** Ждать пока закончится загрузка */
    setDebounce(state, status) {
      state._DEBOUNCE = status;
    },
    /** Объединенная мутация */
    setOverload(state, status) {
      state._DEBOUNCE = status;
      state.IS_FETCHING = status;
    },
    /** Установить значение поля поиска */
    setQueryStringValue(state, newValue = "") {
      state.SEARCH_STRING = newValue;
    },
    /** Выбранный пользователь */
    setSelectedUser(state, user) {
      state.SELECTED_USER = user;
    },
    /** Найденные репозитории пользователя */
    setShowingRepos(state, newValue) {
      state.SHOWING_REPOS = newValue;

      // STATE FROM "searchModule"
      state.searchModule.FILTERING_REPOS = newValue;
    },
    /** Выбранный репозиторий пользователя */
    setSelectedRepo(state, newValue) {
      state.SELECTED_REPO = newValue;
    },
    /** Показать проблемы репозитория пользователя */
    setShowingIssues(state, newValue) {
      state.SHOWING_ISSUES = newValue;
    },
    /** Выбрать проблему репозитория пользователя */
    setSelectedIssue(state, newValue) {
      state.SELECTED_ISSUE = newValue;
    },
    /** Показать комментарии к проблеме репозитория пользователя */
    setShowingComments(state, newValue) {
      state.SHOWING_COMMENTS = newValue;
    },
  },
  actions: {
    /** Поиск пользователей */
    async searchUsers({ state, commit }) {
      if (state.SEARCH_STRING.length < 4) {
        commit("setToDefaultState");
        return;
      }

      if (state._DEBOUNCE) return;

      commit("setToDefaultState");
      commit("setOverload", true);

      const rawArray = state.INITIAL_DATA.filter((el) =>
        el.login.toLowerCase().includes(state.SEARCH_STRING.toLowerCase())
      );

      await new Promise((res) =>
        setTimeout(() => {
          commit("setFoundUsers", rawArray);
          commit("setOverload", false);
          res(1);
        }, 500)
      );
    },
    /** Нажатие на кнопу "Выбрать пользователя" */
    async selectUser({ state, commit }, userId: I_INITIAL_USER["id"]) {
      if (state._DEBOUNCE) return;

      commit("setOverload", true);

      let counter = 0;
      let result: I_INITIAL_USER = {} as I_INITIAL_USER;

      do {
        if (userId === state.INITIAL_DATA[counter].id) {
          result = state.INITIAL_DATA[counter];
          counter = -1;
        } else {
          counter++;
        }
      } while (counter !== -1);

      await new Promise((res) =>
        setTimeout(() => {
          commit("setSelectedUser", result);
          commit("setFoundUsers", null);
          commit("setQueryStringValue");
          commit("setOverload", false);
          res(1);
        }, 400)
      );
    },
    /** Нажатие на кнопу "Показать репозитории" */
    async showRepos({ state, commit }, userId: I_INITIAL_USER["id"]) {
      if (state._DEBOUNCE) return;

      if (state.SHOWING_REPOS) {
        commit("setToDefaultState");
        return;
      }

      commit("setOverload", true);

      let counter = 0;
      let result: T_SHOWING_REPOS = [] as T_SHOWING_REPOS;

      do {
        if (userId === state.INITIAL_DATA[counter].id) {
          result = state.INITIAL_DATA[counter].repositories.nodes;
          counter = -1;
        } else {
          counter++;
        }
      } while (counter !== -1);

      await new Promise((res) =>
        setTimeout(() => {
          commit("setShowingRepos", result);
          commit("setOverload", false);
          res(1);
        }, 300)
      );
    },
    /** Нажатие на кнопу "Показать проблемы" */
    async showIssues({ state, commit }, userData: any) {
      if (state._DEBOUNCE) return;

      commit("setOverload", true);

      // Attention!
      // If you want save yourself close your eyes. Hard code territory ¯\_(ツ)_/¯

      const user: T_SELECTED_USER = state.INITIAL_DATA.find(
        (el) => el.id === userData.userId
      )!;
      const repo: I_INITIAL_REPO = user.repositories.nodes.find(
        (el) => el.id === userData.repoId
      )!;
      const result: T_SHOWING_ISSUES = repo.issues.nodes;

      await new Promise((res) =>
        setTimeout(() => {
          commit("setSelectedRepo", repo);
          commit("setShowingIssues", result);
          commit("setOverload", false);
          res(1);
        }, 200)
      );
    },
    /** Нажатие на кнопу "Показать комментарии" */
    async showComments({ state, commit }, userData: any) {
      if (state._DEBOUNCE) return;

      commit("setOverload", true);

      // Attention!
      // If you want save yourself close your eyes. Hard code territory ¯\_(ツ)_/¯

      const user: T_SELECTED_USER = state.INITIAL_DATA.find(
        (el) => el.id === userData.userId
      )!;
      const repo: I_INITIAL_REPO = user.repositories.nodes.find(
        (el) => el.id === userData.repoId
      )!;
      const issue: I_INITIAL_ISSUE = repo.issues.nodes.find(
        (el) => el.id === userData.issueId
      )!;

      const result: T_SHOWING_COMMENTS = issue.comments.nodes;

      await new Promise((res) =>
        setTimeout(() => {
          commit("setSelectedIssue", issue);
          commit("setShowingComments", result);
          commit("setOverload", false);
          res(1);
        }, 100)
      );
    },
  },
});
