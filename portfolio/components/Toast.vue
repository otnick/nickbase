<template>
    <transition name="fade">
      <div v-if="visible" :class="toastClasses" role="alert">
        <div class="flex-shrink-0">
          <component class="w-6 h-6" />
        </div>
        <div class="">
          <p class="text-sm">{{ message }}</p>
        </div>
      </div>
    </transition>
</template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    props: {
      type: {
        type: String as () => 'success' | 'error',
        required: true
      },
      message: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        required: true
      }
    },
    setup(props) {
      const toastClasses = computed(() => {
        const baseClasses = 'fixed bottom-4 right-4 flex items-center p-4 border-l-4 shadow-lg rounded-md';
        const typeClasses = {
          success: 'bg-green-100 border-green-400 text-green-700',
          error: 'bg-red-100 border-red-400 text-red-700'
        };
        return `${baseClasses} ${typeClasses[props.type]}`;
      });
  
      return {
        toastClasses,
      };
    }
  });
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  