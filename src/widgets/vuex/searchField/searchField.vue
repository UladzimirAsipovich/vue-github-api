<template>
  <div class="search__field">
    <input
      id="search_repos"
      class="input search__input"
      type="text"
      v-bind="$attrs"
      :value="$props.customValue"
      @input="
        $emit('update:customValue', ($event.target as HTMLInputElement).value),
          $emit('changingQuery', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type {} from "vue";

export default {
  props: {
    customValue: {
      type: String as PropType<string>,
      required: true,
    },
  },
  name: "searchField",
};
</script>

<style lang="scss" scoped>
.search__field {
  margin-bottom: 1rem;
}

.input {
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  font-size: inherit;
  display: inline-block;
  width: 100%;
  outline: none;
  border: none;
  transition: box-shadow 150ms ease;

  &:hover {
    box-shadow: 4px 7px rgba(0, 0, 0, 0.15),
      0 100px 80px rgba(255, 255, 255, 0.02),
      0 42px 33px rgba(255, 255, 255, 0.024),
      0 22px 18px rgba(255, 255, 255, 0.028),
      0 12px 10px rgba(255, 255, 255, 0.034),
      0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07);
  }

  &:focus {
    box-shadow: #bc8cff 0 0 0 1px inset;
  }
}
</style>
