<script setup lang="ts">
const { status, data, signOut, signIn } = useAuth()
const colorMode = useColorMode();

</script>

<template>
    <div :class="colorMode.preference">
        <div class="nav">
            <div class="nav__content ">
                <div class="nav__link-row" v-if="status === 'authenticated'">
                    Hello {{ data?.user?.name }}!
                </div>
                <button class="nav__link-row" v-if="status === 'authenticated'" @click="signOut({ callbackUrl: '/' })">
                    Logout
                </button>
                <button class="nav__link-row" v-else @click="signIn">
                    Login
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
    color: rgb(232, 243, 241);
}

.light .nav__content {
    color: rgb(22, 22, 22);
}
</style>