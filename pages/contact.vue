<script>
import feather from "feather-icons";

export default defineComponent({
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "60, Avenue Agricole, Kinshasa - Ngaliema",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "arnaudmbutu@gmail.com",
          icon: "mail",
        },
          {
            id: 3,
            name: "+243 813 801 509",
            icon: "phone",
          },


      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
});
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
