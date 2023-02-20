<template>
  <footer class="search__helper">
    <p class="search__helper_text helper_text_animated" v-if="isFetch">
      Подождите, идёт загрузка результатов...
    </p>
    <template v-else>
      <p class="search__helper_text" v-if="status === null">
        Введите название репозитория
      </p>
      <p
        class="search__helper_text"
        v-if="Array.isArray(status) && status.length === 0"
      >
        Поиск не дал результатов
      </p>
      <p
        class="search__helper_text"
        v-if="Array.isArray(status) && status.length"
      >
        Показано результатов <strong>{{ status.length }}</strong
        >.
      </p>
      <p class="search__helper_text" v-if="status === -1">
        Произошла ошибка: {{ error }}
      </p>
    </template>
  </footer>
</template>

<script lang="ts">
import type { T_INITIAL_DATA } from "@/shared/store/initialData.types";
import type { PropType } from "vue";

export default {
  name: "textHelper",
  props: {
    status: {
      type: [Array, Number, null] as PropType<T_INITIAL_DATA | null | -1>,
      required: true,
    },
    error: {
      type: String as PropType<string>,
      required: true,
    },
    isFetch: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__helper {
    text-align: center;
    color: #888;
    font-weight: 100;
  }

  &__helper_text {
    max-width: 20rem;
    text-align: center;
    margin: auto;
    line-height: 1.15;
  }

  .helper_text_animated {
    animation: textLight 500ms ease-in-out alternate infinite;
  }
}

@keyframes textLight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
</style>
