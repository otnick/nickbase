<script setup lang="ts">

    const showMenu = ref(false);
    const toggleMenu = () => {
    showMenu.value = !showMenu.value;
    };

    const theme = useColorMode();
</script>

<template>
    <Icon name="ic:baseline-menu" color="black" size="2em" @click="toggleMenu" class="fixed top-14 right-10 menu-icon" />
    <div v-if="showMenu" class="menu-box fixed inset-0 flex items-center justify-center z-50 mx-5 mt-9">
      <div class="menu-content">
        <Icon name="ic:baseline-close" color="black" size="2em" @click="toggleMenu" class="close-icon" />
        <h1 class="menu-title">Menu</h1>
        <Theme />
        <Logout />
      </div>
    </div>
</template>


  
  <style scoped>
  .menu-box {
    background-color: var(--bg-color, rgb(232, 243, 241));
    border-radius: 8px;
    color: var(--text-color, rgb(22, 22, 22));
    z-index: 1001;
    transition: all 0.3s ease-in-out;
    max-height: calc(100vh - 36px);
    border: 2px solid rgb(22, 22, 22);
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 20px; /* Add some padding for content spacing */
  }

  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .menu-title {
    margin: 0;
    font-size: 2.5em;
  }

  .dark .menu-box {
    background-color: rgb(22, 22, 22);
    color: rgb(232, 243, 241);
    border: 2px solid rgb(232, 243, 241);
  }

  .dark .menu-icon {
    color: rgb(232, 243, 241);
  }

  .menu-icon:hover {
    color: rgb(104, 231, 0);
    cursor: pointer;
  }
  </style>
  