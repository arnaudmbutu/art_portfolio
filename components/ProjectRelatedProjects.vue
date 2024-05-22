<script lang="ts">
import { defineComponent } from 'vue';

interface Project {
  id: number;
  title: string;
  img: string;
}

interface RelatedProject {
  relatedProjectsHeading: string;
  relatedProjects: Project[];
}

export default defineComponent({
  data() {
    return {
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: '/images/kanya01.jpg',
          },
          {
            id: 2,
            title: "Web Application",
            img: '/images/auri_archive01.PNG',
          },
          {
            id: 3,
            title: "UI Design",
            img: '/images/mavunu01.PNG',
          },
          {
            id: 4,
            title: "Flyers",
            img: '/images/image05.jpg',
          },
        ] as Project[],
      } as RelatedProject,
    };
  },
});
</script>


<template>
  <div
    class="
      mt-10
      pt-10
      sm:pt-14 sm:mt-20
      border-t-2 border-primary-light
      dark:border-secondary-dark
    "
  >
    <p
      class="
        font-general-regular
        text-primary-dark
        dark:text-primary-light
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      {{ relatedProject.relatedProjectsHeading }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="item in relatedProject.relatedProjects" :key="item.id">
        <img
          :src="item.img"
          class="rounded-xl cursor-pointer"
          :alt="item.title"
        />
      </div>
    </div>
  </div>
</template>
