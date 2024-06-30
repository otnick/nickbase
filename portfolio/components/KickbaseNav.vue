<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const colorMode = useColorMode();
const route = useRoute();

// Funktion, um den aktiven Link zu bestimmen
const isActive = (path: string) => computed(() => route.path === path);
</script>

<template>
  <div :class="colorMode.preference">
    <div class="nav">
      <div class="nav__box">
        <div :class="['nav__link-col', isActive('/transfer').value ? 'active' : '']">
          <NuxtLink to="/transfer" class="nav__link">Transfer</NuxtLink>
        </div>
        <div :class="['nav__link-col', isActive('/').value ? 'active' : '']">
          <NuxtLink to="/" class="nav__link">Base</NuxtLink>
        </div>
        <div :class="['nav__link-col', isActive('/team').value ? 'active' : '']">
          <NuxtLink to="/team" class="nav__link">Team</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 1000;
}

.nav__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  background-color: var(--background-color);
}

.nav__link-col {
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: large;
  font-weight: bold;
  color: rgb(232, 243, 241);
}

.dark .nav__link-col {
  color: rgb(22, 22, 22);
}

.nav__link-col:hover {
  color: rgb(104, 231, 0);
}

.dark .nav__box {
  background-color: rgb(255, 255, 255);
  border-color: rgb(22, 22, 22);
}

.light .nav__box {
  background-color: rgb(40, 40, 40);
  border-color: rgb(232, 243, 241);
}

/* Stil für den aktiven Link */
.active {
  color: rgb(104, 231, 0) !important;
  border-bottom: 2px solid rgb(104, 231, 0); /* Optional: Linie unter dem aktiven Link */
}
</style>
