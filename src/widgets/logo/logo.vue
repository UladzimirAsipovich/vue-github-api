<template>
  <header class="search__header">
    <h1 class="search__title">
      <label for="search_repos" class="search__label"
        >GitHub <sup class="search__sub">Repos</sup></label
      >
    </h1>
  </header>
</template>

<script lang="ts">
export default {
  name: "logoComponent",
};
</script>

<style lang="scss" scoped>
.search {
  $font-size-basic: 6rem;
  &__title {
    font-size: $font-size-basic;
    text-align: center;
    font-weight: bold;
    position: relative;
  }

  &__sub {
    font-size: calc($font-size-basic/2);
    font-weight: 100;
    position: absolute;
    top: calc($font-size-basic/-2.5);
    right: 0;
  }

  &__helper {
    text-align: center;
    color: #888;
    margin-top: 1rem;
    font-weight: 100;
  }
}
</style>
