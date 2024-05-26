<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const colorMode = useColorMode();

const scrolling = ref(false);

const handleScroll = () => {
    scrolling.value = window.scrollY > 0;
    console.log(scrolling.value);
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const welcomeList = document.querySelector('.welcome-list');
    
    if (welcomeList) {
        const opacity = 1 - window.scrollY / maxScrollHeight;
        (welcomeList as HTMLDivElement).style.opacity = opacity.toString();
    }
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        const opacity = 1 - window.scrollY / maxScrollHeight;
        (scrollContainer as HTMLDivElement).style.opacity = opacity.toString();
    }

    const personContent = document.querySelector('.person-content');
    if (personContent) {
        const opacity = window.scrollY / maxScrollHeight;
        (personContent as HTMLDivElement).style.opacity = opacity.toString();
    }

    const projektContent = document.querySelector('.projekt-content');
    if (projektContent) {
        const opacity = window.scrollY / maxScrollHeight;
        (projektContent as HTMLDivElement).style.opacity = opacity.toString();
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Topbar />
    <div class="w-full h-full background bg-background">
        <div class="bg-white">
            <div class="mx-5 page-content custom-height">
                <Navlist class="top-10 right-10 fixed" />
                <div class="welcome-list mt-60">
                    <div class="hover-text">welcome</div>
                    <div class="hover-text">to nicks</div>
                    <div class="hover-text">portfolio</div>
                    <div class="typing-line">|</div>
                </div>
                <div class="scroll-container">
                    <div class=" mt-52 ">scroll down</div>
                    <div class="">\/</div>
                    <p>Current mode: {{$colorMode.preference}}</p>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="row-span-4">
                    <div class="ms-5 person-content">
                        <div class="person-text">
                            <div>nick schumacher</div>
                            <div>abitur 2019 - brake</div>
                            <div>medieninformatik bachelor 2021 - * - lübeck</div>
                        </div>
                    </div>
                </div>
                <div class="row-span-4">
                    <div class="me-5 projekt-content">
                        <div>handi</div>
                        <div>fishing app</div>
                        <div>svelte & django</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    
}
.page-content {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 36px);
    border-radius: 8px;
    border: 2px solid #ffffff;
    background-color: rgb(22, 22, 22);
}

.person-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: rgb(232, 243, 241);
    transition: color 0.5s;
    background-color: rgb(22, 22, 22);
    border-radius: 8px;
    border: 2px solid #ffffff;
    height: calc(100vh - 36px);
}

.projekt-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: rgb(232, 243, 241);
    transition: color 0.5s;
    background-color: rgb(22, 22, 22);
    border-radius: 8px;
    border: 2px solid #ffffff;
    height: calc(100vh - 36px);
}


.hover-text {
    font-size: 24px;
    font-weight: bold;
    color: rgb(232, 243, 241);
    text-align: center;
    margin-top: 20px;
    transition: color 0.5s;
}
.hover-text:hover {
    color: rgb(104, 231, 0);
}

.typing-line {
    font-size: 24px;
    font-weight: bold;
    color: rgb(232, 243, 241);
    text-align: center;
    margin-top: 20px;
    animation: typing 1s infinite;
}

@keyframes typing {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.scroll-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-weight: bold;
    color: rgb(232, 243, 241);
    transition: color 0.5s;
}
</style>
