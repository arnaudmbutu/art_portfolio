<template>
    <div class="custom-alert-overlay">
      <div class="
      leading-loose
      max-w-xl
      m-4
      p-7
      bg-secondary-light
      dark:bg-secondary-dark
      rounded-xl
      shadow-xl
      text-left
    ">
        <div class="custom-alert-content">
          <span  class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        ">{{ message }}</span>
          <button class="
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
          @click="closeAlert">OK</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default defineComponent({
    props: {
      message: {
        type: String,
        required: true
      }
    },
    methods: {
      closeAlert() {
        this.$emit('close');
      }
    }
  });
  </script>
  
  <style scoped>
  .custom-alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .custom-alert {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  
  .custom-alert-content {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  
  .custom-alert button {
    padding: 10px 20px;
    background-color: #7342e6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .custom-alert button:hover {
    background-color: #0056b3;
  }
  </style>
  