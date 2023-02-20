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
      <header class="search__controls">
        <logo />
        <searchFiled
          v-model:customValue="STORE.state.SEARCH_STRING"
          @changingQuery="STORE.dispatch('searchUsers')"
          placeholder="Поиск пользователей по логину"
        />

        <div class="search__placeholder">
          <small>
            ЛОГИНЫ:
            <small>
              octocat, JamesMGreene, strafe, aricwalker, hmarr, pravipati,
              tallesl, andersoonweb, marimeireles, hollenberry, rmathew1992,
              konradpabjan, octocato, webdev03 или MrRiybot
            </small>
          </small>
        </div>

        <textHelper
          :isFetch="STORE.state.IS_FETCHING"
          :status="STORE.state.FOUND_USERS"
          :error="STORE.state.TEXT_ERROR"
        />
      </header>
      <div class="result-block">
        <!-- Поиск пользователей -->
        <template
          v-if="
            Array.isArray(STORE.state.FOUND_USERS) &&
            STORE.getters.getFoundUsersCount
          "
        >
          <repoCard
            v-for="user in STORE.state.FOUND_USERS"
            :key="user.id"
            :data="(user as I_ONLY_FOR_CARD_REPO_COMPONENT)"
            @isSelected="STORE.dispatch('selectUser', user.id)"
            :type-of-card="'users'"
          />
        </template>

        <!-- Выбрать пользователя -->
        <template v-if="STORE.state.SELECTED_USER">
          <repoCard
            :key="STORE.state.SELECTED_USER.id"
            :data="(STORE.state.SELECTED_USER as I_ONLY_FOR_CARD_REPO_COMPONENT)"
            @isSelected="
              STORE.dispatch('showRepos', STORE.state.SELECTED_USER!.id)
            "
            :type-of-card="'repos'"
          />

          <!-- Показать репозитории пользователя -->
          <template
            v-if="
              Array.isArray(STORE.state.SHOWING_REPOS) &&
              STORE.getters.getShowingReposCount
            "
          >
            <searchFiled
              v-model:customValue="STORE.state.searchModule.FILTER_STRING"
              @changingQuery="STORE.dispatch('searchModule/filterRepos')"
              placeholder="Фильтр по имени репозитория"
            />

            <repoCard
              v-for="repo in STORE.state.searchModule.FILTERING_REPOS !== null
                ? STORE.state.searchModule.FILTERING_REPOS
                : STORE.state.SHOWING_REPOS"
              :key="repo.id"
              :data="(repo as I_ONLY_FOR_CARD_REPO_COMPONENT)"
              @isSelected="
                STORE.dispatch('showIssues', {
                  userId: STORE.state.SELECTED_USER!.id,
                  repoId: repo.id,
                })
              "
              :type-of-card="'issue'"
            >
              <!-- Показать проблемы репозитория -->
              <template
                v-if="
                  Array.isArray(STORE.state.SHOWING_ISSUES) &&
                  STORE.getters.getShowingReposCount &&
                  STORE.state.SELECTED_REPO!.id === repo.id
                "
              >
                <repoCard
                  v-for="issue in STORE.state.SHOWING_ISSUES"
                  :key="issue.id"
                  :data="(issue as I_ONLY_FOR_CARD_REPO_COMPONENT)"
                  @isSelected="
                    STORE.dispatch('showComments', {
                      userId: STORE.state.SELECTED_USER!.id,
                      repoId: repo.id,
                      issueId: issue.id,
                    })
                  "
                  :type-of-card="'comments'"
                >
                  <!-- Показать комментарии -->
                  <template
                    v-if="
                  Array.isArray(STORE.state.SHOWING_COMMENTS) &&
                  STORE.getters.getShowingCommentsCount &&
                  STORE.state.SELECTED_ISSUE!.id === issue.id
                "
                  >
                    <repoCard
                      v-for="comment in STORE.state.SHOWING_COMMENTS"
                      :key="comment.id"
                      :data="(comment as unknown as I_ONLY_FOR_CARD_REPO_COMPONENT)"
                      :type-of-card="'none'"
                    />
                  </template>
                </repoCard>
              </template>
            </repoCard>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import logo from "@/widgets/logo/logo.vue";
import searchFiled from "@/widgets/vuex/searchField/searchField.vue";
import textHelper from "@/widgets/vuex/textHelper/textHelper.vue";
import repoCard from "@/widgets/vuex/repoCard/repoCard.vue";
import { useStore } from "@/shared/store/vuex";
import type { I_ONLY_FOR_CARD_REPO_COMPONENT } from "@/shared/store/initialData.types";

export default {
  components: {
    logo,
    searchFiled,
    textHelper,
    repoCard,
  },
  setup() {
    const STORE = useStore();

    return {
      STORE,
    };
  },
  created() {
    document.title = "Главная";
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
  }

  &__placeholder {
    color: #ccc;
    text-align: center;
    margin: auto;
    margin-top: -1rem;
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
