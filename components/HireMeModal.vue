<script>
import feather from "feather-icons";

export default defineComponent({
  props: ["showModal", "modal", "categories"],
 
  data() {
    return {
      formData: {
        name: '',
        subject:'',
        message: '',
      },
      isAlertVisible: false,
      alertMessage: '',
    };
  },
  mounted() {
    feather.replace();
  },
  methods: {
    async onSubmitted() {
      try {
        const response = await $fetch('https://formspree.io/f/mdoqbdrj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: this.formData,
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
    },
    closeCustomAlert() {
      this.isAlertVisible = false;
    }
  }
});
</script>

<template>
  <div>
    <alert v-if="isAlertVisible" :message="alertMessage" @close="closeCustomAlert"/>
    <transition name="fade">
      <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
        <!-- Modal body background as backdrop -->
        <div
          v-show="modal"
          @click="showModal()"
          class="
            bg-filter bg-black bg-opacity-50
            fixed
            inset-0
            w-full
            h-full
            z-20
          "
        ></div>
        <!-- Modal contents -->
        <main class="flex flex-col items-center justify-center h-full w-full">
          <transition name="fade-up-down">
            <div v-show="modal" class="modal-wrapper flex items-center z-30">
              <div
                class="
                  modal
                  max-w-md
                  mx-5
                  xl:max-w-xl
                  lg:max-w-xl
                  md:max-w-xl
                  bg-secondary-light
                  dark:bg-primary-dark
                  max-h-screen
                  shadow-lg
                  flex-row
                  rounded-lg
                  relative
                "
              >
                <div
                  class="
                    modal-header
                    flex
                    justify-between
                    gap-10
                    p-5
                    border-b border-ternary-light
                    dark:border-ternary-dark
                  "
                >
                  <h5 class="text-primary-dark dark:text-primary-light text-xl">
                    Quel projet recherchez-vous ?
                  </h5>
                  <button
                    class="px-4 text-primary-dark dark:text-primary-light"
                    @click="showModal()"
                  >
                    <i data-feather="x" class="w-8 sm:w-12"></i>
                  </button>
                </div>
                <div class="modal-body p-5 w-full h-full">
                  <form
                  @submit.prevent="onSubmitted"
                    class="max-w-xl m-4 text-left"
                  >
                    <div class="mt-0">
                      <input
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="name"
                        name="name"
                        type="text"
                        required=""
                        v-model="formData.name"
                        placeholder="Nom"
                        aria-label="Name"
                      />
                    </div>
                    <div class="mt-6">
                      <input
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="email"
                        name="email"
                        type="text"
                        required=""
                        v-model="formData.email"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                    <div class="mt-6">
                      <select
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="subject"
                        name="subject"
                        type="text"
                        required=""
                        v-model="formData.subject"
                        aria-label="Project Category"
                      >
                        <option
                          v-for="category in categories"
                          :key="category.id"
                          :value="category.value"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                    </div>

                    <div class="mt-6">
                      <textarea
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="message"
                        name="message"
                        v-model="formData.message"
                        cols="14"
                        rows="6"
                        aria-label="Details"
                        placeholder="description"
                      ></textarea>
                    </div>

                    <div class="mt-6 pb-4 sm:pb-1">
                      <Button
                        title="Envoyer"
                        class="
                          px-4
                          sm:px-6
                          py-2
                          sm:py-2.5
                          text-white
                          bg-indigo-500
                          hover:bg-indigo-600
                          rounded-md
                          focus:ring-1 focus:ring-indigo-900
                          duration-500
                        "
                        type="submit"
                        aria-label="Submit Request"
                      />
                    </div>
                  </form>
                </div>
                <div
                  class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
                >
                  <!-- <Button
                    title="Fermer"
                    class="
                      px-4
                      sm:px-6
                      py-2
                      bg-gray-600
                      text-primary-light
                      hover:bg-ternary-dark
                      dark:bg-gray-200
                      dark:text-secondary-dark
                      dark:hover:bg-primary-light
                      rounded-md
                      focus:ring-1 focus:ring-indigo-900
                      duration-500
                    "
                    @click="showModal()"
                    aria-label="Close Hire Me Modal"
                  /> -->
                </div>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </transition>

  </div>
</template>

<style>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
