<template>
  <div class="search">
    <div class="search__backdrop_background">
      <picture class="hero__lines_bg">
        <img src="../assets/img/lines-hero.svg" alt="hero lines background" />
      </picture>
      <picture class="hero__drone_bg">
        <img src="../assets/img/hero-drone.webp" alt="hero drone background" />
      </picture>
    </div>
    <section class="search__content">
      <pre>{{ errorText }}</pre>
      <header class="search__controls">
        <logo />
        <searchFiled
          class="search__controls_short"
          @changingQuery="searchUsersByLogin"
          v-model:customValue="searchQueryFieldValue"
        />
        <textHelper
          :status="repositories"
          :error="errorText"
          :isFetch="fetching"
        />
      </header>
      <div class="result-block">
        <div
          class="repoCards"
          v-if="
            !SelectedUser && Array.isArray(FindedUsers) && FindedUsers.length
          "
        >
          <!-- Пользователи-->
          <repoCard
            v-for="user in FindedUsers"
            :key="user.id"
            :data="user"
            @isSelected="searchRepoByName"
            :type-of-card="'users'"
          />
        </div>
        <div
          class="repoCards"
          v-if="
            repositories && Array.isArray(repositories) && repositories.length
          "
        >
          <!-- Репозитории -->
          <repoCard
            v-for="repository in repositories"
            :key="repository.id"
            :data="repository"
            @isSelected="searchIssues"
            :type-of-card="'issue'"
          >
            <!-- Проблемы  -->
            <div
              v-if="
                issues &&
                selectedRepo !== null &&
                selectedRepo.id === repository.id
              "
            >
              <repoCard
                v-for="issue in issues"
                :key="issue.id"
                :data="issue"
                @isSelected="searchComments"
                class="card_issue"
                :type-of-card="'comments'"
              >
                <!-- Комментарии -->
                <div
                  v-if="
                    comments &&
                    SelectedIssue !== null &&
                    SelectedIssue.id === issue.id
                  "
                >
                  <repoCard
                    v-for="comment in comments"
                    :key="comment.id"
                    :data="comment"
                    @isSelected="searchComments"
                    class="card_comments"
                    :type-of-card="'none'"
                  />
                </div>
              </repoCard>
            </div>
          </repoCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import logo from "@/widgets/logo/logo.vue";
import searchFiled from "@/widgets/searchField/searchField.vue";
import textHelper from "@/widgets/textHelper/textHelper.vue";
import repoCard from "@/widgets/repoCard/repoCard.vue";
import type {
  T_Repository,
  T_Repositories,
  T_SearchStatusAsData,
  I_SelectedUser,
  I_SelectedIssue,
  I_SelectedComment,
} from "@/shared/store/initialData.types";
import {
  SEARCH_REPO,
  LIST_OF_REPOS,
  GET_ALL,
  // LIST_OF_ISSUES_BY_REPOS,
  // LIST_OF_COMMENTS_ISSUES_BY_REPOS,
} from "@/shared/apollo/queries";
import Debounced from "@/shared/helpers/debounce";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/shared/apollo";
provideApolloClient(apolloClient as any);

export default {
  components: {
    logo,
    searchFiled,
    textHelper,
    repoCard,
  },
  setup() {
    // --------------------------------------------------
    const SelectedUser = ref<I_SelectedUser | null>(null);
    const FindedUsers = ref<I_SelectedUser[] | null>(null);
    // --------------------------------------------------
    const selectedRepo = ref<T_Repository | null>(null);
    const repositories = ref<T_SearchStatusAsData>(null);
    // --------------------------------------------------
    const issues = ref<I_SelectedIssue[] | null>(null);
    const SelectedIssue = ref<I_SelectedIssue | null>(null);
    // --------------------------------------------------
    const comments = ref<I_SelectedComment[] | null>(null);
    const selectedComments = ref<I_SelectedComment | null>(null);
    // --------------------------------------------------
    const searchQueryFieldValue = ref<string>("");
    const errorText = ref<string>("");
    const fetching = ref<boolean>(false);

    const searchUsersByLogin = Debounced(async (name: string = "octocat") => {
      fetching.value = true;
      if (!name || name.length < 4) {
        fetching.value = false;
        return;
      }
      const { onResult, onError } = useQuery<{
        search: { edges: { node: I_SelectedUser }[] };
        // }>(SEARCH_REPO({ userLogin: name }));
      }>(GET_ALL());
      onResult((result) => {
        console.log(result);

        errorText.value = JSON.stringify(result.data, null, 2);
        // console.log(JSON.stringify(result.data, null, 2));
        // FindedUsers.value = result.data.search.edges.map((el) => el.node);
        fetching.value = false;
      });
      onError((error) => {
        FindedUsers.value = null;
        fetching.value = false;
        console.log("ERROR", error);
      });
    });

    const searchRepoByName = Debounced(async (selectedData: I_SelectedUser) => {
      fetching.value = true;
      SelectedUser.value = selectedData;
      if (
        !selectedData ||
        !selectedData.login ||
        typeof selectedData.login !== "string" ||
        selectedData.login.length < 4
      ) {
        fetching.value = false;
        return;
      }
      // TODO You are using the simple (heuristic) ERROR
      const { onResult, onError } = useQuery<{
        user: { repositories: { nodes: T_Repositories } };
      }>(LIST_OF_REPOS({ userLogin: selectedData.login }));
      onResult((result) => {
        repositories.value = result.data.user.repositories.nodes;
        fetching.value = false;
      });
      onError((error) => {
        repositories.value = null;
        fetching.value = false;
        console.log("ERROR", error);
      });
    });

    const searchIssues = Debounced(async (selectedRepository: T_Repository) => {
      fetching.value = true;
      selectedRepo.value = selectedRepository;
      if (
        !selectedRepository ||
        !selectedRepository.name ||
        selectedRepository.name.length < 4
      ) {
        fetching.value = false;
        return;
      }

      issues.value = [
        {
          state: "OPEN",
          id: "I_kwDOABPHjc5dqiY3",
          title: "Real to end.",
          bodyText: "0x65CC8E2c2749F13f25Be1E18d52EfDBa59D311DF",
        },
        {
          state: "OPEN",
          id: "I_kwDOABPHjc5d5pZW",
          title: "Hello, world!",
          bodyText: "I created this issue using Octokit!",
        },
        {
          state: "OPEN",
          id: "I_kwDOABPHjc5d5pif",
          title: "Hello, world!",
          bodyText: "I created this issue using Octokit!",
        },
        {
          state: "OPEN",
          id: "I_kwDOABPHjc5d5ptk",
          title: "Hello, world!",
          bodyText: "I created this issue using Octokit!",
        },
        {
          state: "OPEN",
          id: "I_kwDOABPHjc5d5pvK",
          title: "Hello, world!",
          bodyText: "I created this issue using Octokit!",
        },
      ];
      fetching.value = false;

      // TODO
      //-------------- Намеренно закомментированное выражение. Ошибка хранилища GraphQL

      // const { onResult, onError } = useQuery<T_Repositories>(
      //   LIST_OF_USSUES_BY_RESOS()
      // );
      // onResult((result) => {
      //   console.log(name, "RESULT", result.data);
      //   // issues.value = result.data.user.repository.issues.nodes;
      //   fetching.value = false;
      //   // console.log(name, "RESULT", result.data);
      // });
      // onError((error) => {
      //   issues.value = null;
      //   fetching.value = false;
      //   console.log("ERROR", error);
      // });
    });

    const searchComments = Debounced(async (selectedIssue: I_SelectedIssue) => {
      fetching.value = true;
      SelectedIssue.value = selectedIssue;
      if (!selectedIssue || !selectedIssue.id || selectedIssue.id.length < 4) {
        fetching.value = false;
        return;
      }

      comments.value = [
        {
          bodyText: "This is awesome",
          id: "MDEyOklzc3VlQ29tbWVudDMyMTAzMDY4Nw==",
          createdAt: "2017-08-08T17:46:49Z",
        },
        {
          bodyText:
            "Awesome demo! Looking forward to start working with GraphQL.\n\nEdgardo se la come.",
          id: "MDEyOklzc3VlQ29tbWVudDMyMTAzMDY5Mg==",
          createdAt: "2017-08-08T17:46:50Z",
        },
        {
          bodyText: "This is awesome 👍",
          id: "MDEyOklzc3VlQ29tbWVudDMyMTAzMTM2NA==",
          createdAt: "2017-08-08T17:49:22Z",
        },
        {
          bodyText: "Hello GraphQL ✨ 🎉 🎊",
          id: "MDEyOklzc3VlQ29tbWVudDMyMTAzMjQ0Ng==",
          createdAt: "2017-08-08T17:53:21Z",
        },
        {
          bodyText: "Thanks for the session! Pagination demo was helpful",
          id: "MDEyOklzc3VlQ29tbWVudDMyMTAzNDQ5MA==",
          createdAt: "2017-08-08T18:00:47Z",
        },
      ];
      fetching.value = false;

      // TODO
      //-------------- Намеренно закомментированное выражение. Ошибка хранилища GraphQL

      // const { onResult, onError } = useQuery<T_Repositories>(
      //   LIST_OF_COMMENTS_USSUES_BY_RESOS()
      // );
      // onResult((result) => {
      //   console.log(name, "RESULT", result.data);
      //   // comments.value = result.data.user.repository.issues.nodes;
      //   fetching.value = false;
      //   // console.log(name, "RESULT", result.data);
      // });
      // onError((error) => {
      //   comments.value = null;
      //   fetching.value = false;
      //   console.log("ERROR", error);
      // });
    });

    // onMounted(searchUsersByLogin);

    watch(searchQueryFieldValue, (dataValue) => {
      if (dataValue.length === 0) {
        SelectedUser.value = null;
        FindedUsers.value = null;
        repositories.value = null;
        errorText.value = "";
        fetching.value = false;
        selectedRepo.value = null;
        SelectedIssue.value = null;
        issues.value = null;
        comments.value = null;
        selectedComments.value = null;
      }
    });

    return {
      // Стор
      SelectedUser,
      FindedUsers,
      searchQueryFieldValue,
      repositories,
      errorText,
      fetching,
      selectedRepo,
      SelectedIssue,
      issues,
      comments,
      selectedComments,
      // Методы
      searchUsersByLogin,
      searchRepoByName,
      searchIssues,
      searchComments,
    };
  },
};
</script>

<style scoped lang="scss">
.controls {
  text-align: center;

  button {
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
}
.search {
  margin-bottom: 3rem;
  user-select: none;
  position: relative;

  &__backdrop_background {
    position: absolute;
    background: url(../assets/img/hero-bg.webp) top left/contain no-repeat
      scroll #111;
    top: -8rem;
    width: 100%;
    height: 100vh;
    z-index: 0;
    .hero__lines_bg {
      position: absolute;
      left: 3rem;
      top: 5rem;
      padding-right: 1rem;

      img {
        width: 100%;
      }
    }

    .hero__drone_bg {
      position: absolute;
      right: 3rem;
      top: 12rem;
      padding-right: 1rem;
      max-width: 320px;
      animation: wave 3000ms ease-in-out alternate-reverse infinite;

      img {
        width: 100%;
      }
    }
  }

  &__content {
    max-width: 1024px;
    margin: auto;
    // padding-top: 12rem;
  }

  &__controls {
    margin-bottom: 2rem;

    &_short {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@keyframes wave {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(1rem);
  }
}
</style>
