<script setup lang="ts">

const colorMode = useColorMode();

</script>

<template>
    <div :class="colorMode.preference">
        <div class="nav">
            <div class="nav__content ">
                <div class="nav__link-row">
                    <NuxtLink to="/" class="nav__link">Home</NuxtLink>
                </div>
                <div class="nav__link-row">
                    <NuxtLink to="/projekte" class="nav__link">Projekte</NuxtLink>
                </div>
                <button @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'" class="nav__link-row">
                    Toggle Theme
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

.dark .nav__content {
    background-color: rgba(22, 22, 22, 0.027);
    color: rgb(232, 243, 241);
}

.light .nav__content {
    background-color: rgba(232, 243, 241, 0.123);
    color: rgb(22, 22, 22);
}
</style>