<template>
  <div class="card">
    <header class="card__header">
      <small>ID {{ data.id }}</small>
      <h2>
        {{ data.email || data.title || data.name }} /
        {{ data.login || data.bodyText }}
      </h2>
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
        v-if="typeOfCard === 'issue'"
        @click.self="clickToCard"
        class="more_button"
      >
        Показать проблемы
      </button>
      <button
        v-if="typeOfCard === 'comments'"
        @click.self="clickToCard"
        class="more_button"
      >
        Показать комментарии
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import type { T_UnionCardPops } from "@/shared/store/initialData.types";
import type { PropType } from "vue";

export default {
  name: "repoCard",
  props: {
    data: {
      type: Object as PropType<T_UnionCardPops>,
      required: true,
    },
    typeOfCard: {
      type: String as PropType<"users" | "issue" | "comments" | "none">,
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

  &.card_issue {
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .card_comments {
    @extend .card_issue;
  }

  .more_button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
}
</style>
