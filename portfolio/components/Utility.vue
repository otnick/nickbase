<script setup lang="ts">

    const showMenu = ref(false);
    const toggleMenu = () => {
    showMenu.value = !showMenu.value;
    };

    const theme = useColorMode();
</script>

<template>
    <div>
      <Icon name="ic:baseline-menu" color="black" size="2em" @click="toggleMenu" class="fixed top-14 right-10 menu-icon" />
      <div v-if="showMenu" class="menu-box mx-5 self-center">
        <Icon name="ic:baseline-close" color="black" size="2em" @click="toggleMenu" class="close-icon" />
        <h2 class="menu-title">Menu</h2>
        <Theme />
        <Logout />
      </div>
    </div>
</template>
  
  <style scoped>
  .menu-box {
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 38px);
    background-color: var(--bg-color, rgb(232, 243, 241));
    border-radius: 8px;
    color: var(--text-color, rgb(22, 22, 22));
    z-index: 1001;
    position: fixed;
    top: 2.3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease-in-out;
  }
  
  .close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  
  .menu-title {
    margin-bottom: 1rem;
  }
  
  .dark .menu-box {
    background-color: rgb(22, 22, 22);
    color: rgb(232, 243, 241);
    border: 2px solid rgb(22, 22, 22);
    box-shadow: 0 4px 8px rgba(35, 35, 35, 0.2), 0 6px 20px rgba(34, 34, 34, 0.19);
  }

  .dark .menu-icon {
    color: rgb(232, 243, 241);
  }
  </style>
  