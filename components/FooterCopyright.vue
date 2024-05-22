<script>
import {useProjectStore} from "~/stores/myStore.js"

export default defineComponent( {
  setup() {
    const store = useProjectStore();

    return {
      projectName: 'ART Portfolio',
      author: 'Arnold Mbutu',
      copyrightDate: store.copyrightDate

    }
  }

});
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/arnaudmbutu/am_portfolio.git"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ projectName }}</a
      >
      . Developpé par
      <a
        href="https://github.com/arnaudmbutu"
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
