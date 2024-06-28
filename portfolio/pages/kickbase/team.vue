<script setup lang="ts">

const colorMode = useColorMode();
</script>

<template>
    <Topbar />
    <Logout/>
    <KickbaseNav class="fixed centered-component"/>
    <KickbaseBackground title="Team" :image=null>
    </KickbaseBackground>
</template>

<style scoped>
.centered-component {
    top: 10%;  /* Position von oben 50% */
    left: 50%; /* Position von links 50% */
    transform: translate(-50%, -50%); /* Verschiebt die Komponente um die Hälfte ihrer eigenen Breite und Höhe */
    z-index: 1000; /* Stellt sicher, dass die Komponente über anderen Elementen liegt */
}
</style>