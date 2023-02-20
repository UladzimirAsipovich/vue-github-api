<template>
  <div class="card" :class="'card__' + typeOfCard">
    <header class="card__header">
      <template v-if="typeOfCard === 'users' || typeOfCard === 'repos'">
        <span class="badge">Пользователь</span>
        <h2 class="card__title">
          <span> Login: </span>{{ data.login }} / <span>Name: </span>
          {{ data.name }}
        </h2>
        <p class="badge">Репозиториев: {{ data.repositories.totalCount }}</p>
      </template>

      <template v-if="typeOfCard === 'issue'">
        <span class="badge">Репозитории</span>
        <h2 class="card__title">
          <span> Name: </span>{{ data.name }} / <span>Проблем: </span>
          {{ data.issues.totalCount }}
        </h2>
      </template>

      <template v-if="typeOfCard === 'comments'">
        <span class="badge">Проблемы</span>
        <h2 class="card__title">
          <span> Title: </span>{{ data.title }} / <span>Status: </span>
          {{ data.state }}
        </h2>
        <small>{{ data.bodyText }}</small>
      </template>

      <template v-if="typeOfCard === 'none'">
        <span class="badge">Комментарии</span>
        <h2 class="card__title">
          <span> Author: </span
          >{{ (data.author && data.author.login) || "Unknown User" }}
        </h2>
        <small>{{ data.bodyText }}</small>
      </template>
    </header>
    <div style="text-align: right">
      <button
        v-if="typeOfCard === 'users'"
        @click.self="clickToCard"
        class="more_button"
      >
        Выбрать пользователя
      </button>
      <button
        v-if="typeOfCard === 'repos'"
        @click.self="clickToCard"
        class="more_button"
      >
        Показать репозитории / Очистить поиск
      </button>

      <template v-if="typeOfCard === 'issue'">
        <button
          v-if="data.issues.totalCount"
          @click.self="clickToCard"
          class="more_button"
        >
          Показать проблемы {{ data.issues.totalCount }}
        </button>
        <template v-else>
          <button class="more_button">Проблем нет</button>
        </template>
      </template>

      <template v-if="typeOfCard === 'comments'">
        <button
          v-if="data.comments.totalCount"
          @click.self="clickToCard"
          class="more_button"
        >
          Показать комментарии {{ data.comments.totalCount }}
        </button>
        <template v-else>
          <button class="more_button">Комментариев нет</button>
        </template>
      </template>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import type { T_typeOfCard, T_repoCardData } from "./repoCard.types";

export default {
  name: "repoCard",
  props: {
    data: {
      type: Object as T_repoCardData,
      required: true,
    },
    typeOfCard: {
      type: String as T_typeOfCard,
      required: true,
    },
  },
  emits: ["isSelected"],
  methods: {
    clickToCard() {
      this.$emit("isSelected", this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.375rem;
  box-shadow: #bc8cff 0 0 0 1px inset;
  padding: 1rem;
  transition: box-shadow, background-color, transform, 150ms ease;
  background-color: #0d1117;
  margin-bottom: 1rem;
  user-select: none;

  &:hover {
    box-shadow: rgb(255 255 255) 0 0 0 2px inset;
    background-color: #121821;
    transform: scale(1.005);
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__title {
    margin-bottom: 1rem;
    span {
      color: #6e40c9;
    }
  }

  &__repo {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: hsl(216, 28%, 10%);
  }
  &__issue {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: hsl(216, 28%, 13%);
  }
  &__comments {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: hsl(216, 28%, 16%);
  }
  &__none {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: hsl(216, 28%, 19%);
  }

  &.card_issue {
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .more_button {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
}

.badge {
  border: 1px solid #6e40c9;
  border-radius: 1rem;
  padding: 0.5rem;
  display: inline-block;
  margin-left: auto;
  margin-bottom: 0.5rem;
}
</style>
