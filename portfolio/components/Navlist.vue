<script setup lang="ts">

const colorMode = useColorMode();

</script>

<template>
    <div :class="colorMode.preference">
        <div class="nav bg-background">
            <div class="nav__content">
                <div class="nav__link-row">
                    <NuxtLink to="/" class="nav__link">Home</NuxtLink>
                </div>
                <div class="nav__link-row">
                    <NuxtLink to="/projekte" class="nav__link">Projekte</NuxtLink>
                </div>
                <div class="nav__link-row">
                    <NuxtLink to="https://github.com/otnick" class="nav__link" target="_blank">GitHub</NuxtLink>
                </div>
                <button @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'" class="nav__link-row">
                    Toggle Mode
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: flex-end; /* Align links to the right */
    padding: 10px;
    z-index: 1000;
    color: var(rgb(--text-color));
}

.nav__link-row {
    display: flex;
    justify-content: flex-end; /* Align links to the right */
    margin-bottom: 10px; /* Add some spacing between the rows */
    font-size: large;
    font-weight: bold;
}
.nav__link-row:last-child {
    margin-bottom: 0;
}
.nav__link-row:hover { 
    color: rgb(104, 231, 0);
}
</style>