<script>
export default defineComponent({
  props: {
    select: {
      type: String,
      default: "projects",
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Web Application",
        "Mobile Application",
        "UI/UX Design",
        "Logos & Animations",
        "Logos apps",
        "Flyers",
        "3D mockups"
      ],
    },
  },
  emits: ['change'],
});
</script>

<template>
  <select
    @change="$emit('change', $event.target.value)"
    :name="select"
    :id="select"
    class="
      font-general-medium
      px-4
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-secondary-light
      dark:bg-ternary-dark
      text-primary-dark
      dark:text-ternary-light
    "
  >
    <option value class="text-sm sm:text-md">Tous les Projets</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
