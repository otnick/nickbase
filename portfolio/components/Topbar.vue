<script setup lang="ts">

const colorMode = useColorMode();

</script>

<template>
    <div :class="colorMode.preference">
        <div class="topbar">
            <div class="marquee">
                <div class="marquee__content">
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                </div>
                <div class="marquee__content">
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                    $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE $NICKOT $NICKBASE
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.topbar {
    width: 100%;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    font-family: 'Pixel', sans-serif;
}

.dark .topbar {
    background-color: rgb(22, 22, 22);
    color: rgb(232, 243, 241);
    border-bottom: 2px solid rgb(232, 243, 241);
}

.light .topbar {
    background-color: rgb(232, 243, 241);
    color: rgb(22, 22, 22);
    border-bottom: 2px solid rgb(22, 22, 22);
}

.marquee {
    display: flex;
    width: 200%; /* Ensures that the entire content will scroll */
    animation: marquee 30s linear infinite;
}

.marquee__content {
    flex: 0 0 50%; /* Each content block takes up half the marquee's width */
}

@keyframes marquee {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>
