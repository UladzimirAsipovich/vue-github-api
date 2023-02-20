<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navigate">
    <div class="navigate__wrapper">
      <nav class="navigate__bar">
        <RouterLink
          to="/"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Главная
        </RouterLink>
        <RouterLink
          to="/about"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Обо мне
        </RouterLink>
        <RouterLink
          to="/graphql"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          GRAPHQL
        </RouterLink>
        <RouterLink
          to="/task"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Что по заданию?
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
// VARIABLES NAVIGATE
$navigate__bg_clr: hsl(180, 41%, 27%);
$navigate__p: 1rem;
$navigate__mh: 5rem;
$navigate__txt_clr: #fff;

// VARIABLES LINK
$navigate__link_brdr_rad: 0.375rem;
$navigate__link_p: 0.5rem 1rem;
$navigate__link_bg_hover_clr: hsl(180, 41%, 57%);

.navigate {
  padding: $navigate__p;
  min-height: $navigate__mh;
  color: $navigate__txt_clr;
  position: relative;
  z-index: 1000;
}

.navigate__wrapper {
  max-width: 1280px;
  margin: auto;
}

.navigate__bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.navigate__link {
  color: inherit;
  text-decoration: none;
  box-shadow: 2px 2px 4px $navigate__bg_clr;
  font-weight: bold;
  padding: $navigate__link_p;
  margin-right: 1rem;
  box-shadow: #bc8cff 0 0 0 1px inset;
  transition: box-shadow 150ms ease;
  border-radius: $navigate__link_brdr_rad;

  &:hover {
    box-shadow: rgb(255 255 255) 0 0 0 2px inset;
  }

  &:nth-child(2) {
    margin-left: auto;
  }

  &:last-child {
    margin-right: 0;
  }

  &_active {
    background: linear-gradient(
        180deg,
        rgba(183, 52, 179, 0.15) 0%,
        rgba(164, 46, 156, 0) 100%
      ),
      #6e40c9;
    box-shadow: none;
    transition: box-shadow, 150ms ease !important;

    &:hover {
      box-shadow: 4px 7px rgba(0, 0, 0, 0.15),
        0 100px 80px rgba(255, 255, 255, 0.02),
        0 42px 33px rgba(255, 255, 255, 0.024),
        0 22px 18px rgba(255, 255, 255, 0.028),
        0 12px 10px rgba(255, 255, 255, 0.034),
        0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07);
    }
  }
}
</style>
