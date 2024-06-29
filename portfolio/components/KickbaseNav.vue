<script setup lang="ts">

const colorMode = useColorMode();

</script>

<template>
    <div :class="colorMode.preference">
        <div class="nav">
            <div class="nav__box">
                <div class="nav__link-col">
                    <NuxtLink to="/transfer" class="nav__link">Transfer</NuxtLink>
                </div>
                <div class="nav__link-col">
                    <NuxtLink to="/" class="nav__link">Base</NuxtLink>
                </div>
                <div class="nav__link-col">
                    <NuxtLink to="/team" class="nav__link">Team</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: center; /* Zentriert die Links innerhalb des Kastens */
    padding: 10px;
    z-index: 1000;
}

.nav__box {
    display: flex;
    justify-content: space-around; /* Verteilung der Links mit gleichen Abständen */
    align-items: center; /* Vertikale Zentrierung der Links */
    padding: 10px; /* Abstand innerhalb des Kastens */
    border: 2px solid var(--text-color); /* Rand des Kastens */
    border-radius: 10px; /* Abgerundete Ecken */
    background-color: var(--background-color); /* Hintergrundfarbe des Kastens */
}

.nav__link-col {
    display: flex;
    align-items: center; /* Vertikale Zentrierung der Links */
    padding: 0 15px; /* Horizontaler Abstand zwischen den Links */
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
</style>
