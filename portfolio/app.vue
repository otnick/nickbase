<script setup lang = "ts">
const route = useRoute();
const path = ref(route.path);

onBeforeRouteLeave((to, from, next) => {
  path.value = to.path;
  next();
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
