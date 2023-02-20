<template>
  <div class="task">
    <div>
      <header class="task__header">
        <h1>
          Тестовое задание для соискателя на вакансию frontend-разработчик!
        </h1>
      </header>
      <div class="task__content">
        <p>
          <strong>ЗАДАЧА:</strong> Разработать компоненты (Vue + Vuex) для
          работы с репозиториями Github-GraphQL API (v4).
        </p>
        <p>
          <strong>УСЛОВИЯ:</strong> Отображение списка репозиториев для логина
          octocat в виде дропбокса с возможностью фильтрации по имени. (имя
          репозитория с логином). При выборе из списка репозиториев отображаются
          карточки с issues (название, статус, описание). По клику на issue
          отображается список комментариев (время создания, текст) Визуальное
          представление свободное.
        </p>
        <p>
          <strong>Доп инфо: </strong>
          <a href="https://developer.github.com/v4/explorer/" target="_blank"
            >API</a
          >,
          <a
            href="https://developer.github.com/v4/guides/forming-calls/#example-query"
            target="_blank"
            >образец запроса</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  created() {
    document.title = "Задание";
  },
};
</script>

<style scoped lang="scss">
.task {
  max-width: 780px;
  margin: auto;

  p {
    margin-bottom: 1rem;
  }

  &__header {
    margin-bottom: 2rem;

    > * {
      font-size: 3rem;
    }
  }

  &__greeting {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  &__content {
    font-size: 1.5rem;
  }
}
</style>
