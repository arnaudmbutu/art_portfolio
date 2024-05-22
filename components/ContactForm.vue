<script>
import { useFetch, useLazyFetch, useNuxtApp } from 'nuxt/app';

export default defineComponent({

  setup() {
    const nuxtApp = useNuxtApp();
    
    const formData = ref({
      name: '',
      subject: '',
      message: '',
    });

    const isAlertVisible = ref(false);
    const alertMessage = ref('');

    const onSubmitted = async () => {
      try {
        const response = await $fetch('https://formspree.io/f/mdoqbdrj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData.value,
        });

        if (response) {
          alertMessage.value = 'Le message a été envoyé avec succès !';
          isAlertVisible.value = true;

          // Navigate back or reset the form as needed
          nuxtApp.$router.back(); // Uncomment if you want to go back
        }
      } catch (error) {
        console.error(error);
      }
    };

    const closeCustomAlert = () => {
      isAlertVisible.value = false;
    };

    return {
      formData,
      isAlertVisible,
      alertMessage,
      onSubmitted,
      closeCustomAlert,
    };
  
}});
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Formulaire de contact
      </p>
      <form @submit.prevent="onSubmitted"
        class="font-general-regular space-y-7"
      >
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Nom</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            v-model="formData.name"
            placeholder="Votre nom"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="email"
            v-model="formData.email"
            required=""
            placeholder="Votre Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Sujet</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required=""
            v-model="formData.subject"
            placeholder="Sujet"
            aria-label="Subject"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Message</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            v-model="formData.message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Envoyer"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>

    </div>
    <alert v-if="isAlertVisible" :message="alertMessage" @close="closeCustomAlert"/>
  </div>
</template>

<style lang="scss" scoped></style>
