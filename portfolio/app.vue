<script setup lang = "ts">
const route = useRoute();
const path = ref(route.path);
const showCasePath = "/projekte/showcase";

onBeforeRouteLeave((to, from, next) => {
  path.value = to.path;
  next();
});
</script>

<template>
  <div>
    <Authlist class="left-10 top-10 fixed" v-if="(path != showCasePath)"/>
    <Navlist class="top-10 right-10 fixed" v-if="(path != showCasePath)"/>
    <NuxtPage />
  </div>
</template>
