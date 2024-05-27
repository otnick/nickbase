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

const scrollDown = () => {
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
        top: maxScrollHeight,
        behavior: 'smooth',
    });
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
    <Navlist class="top-10 right-10 fixed" />
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-5 page-content custom-height">
                    <div class="welcome-list mt-60 mb-52">
                        <div class="hover-text">welcome</div>
                        <div class="hover-text">to nicks</div>
                        <div class="hover-text">portfolio</div>
                        <div class="typing-line">|</div>
                    </div>
                    <button @click="scrollDown">
                        <div class="scroll-container">
                            <div class="">scroll down</div>
                            <div class="">\/</div>
                        </div>
                    </button>
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
    </div>
</template>

<style scoped>
.dark .background {
    background-color: rgb(232, 243, 241);
}
.light .background {
    background-color: rgb(22, 22, 22);
}

.page-content{
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 36px);
    border-radius: 8px;
}
.dark .page-content {
    color: rgb(232, 243, 241);
    border: 2px solid #ffffff;
    background-color: rgb(22, 22, 22);
}

.light .page-content {
    color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
}

.person-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: color 0.5s;
    border-radius: 8px;
    height: calc(100vh - 36px);
}

.dark .person-content {
    color: rgb(232, 243, 241);
    border: 2px solid rgb(232, 243, 241);
    background-color: rgb(22, 22, 22);
}

.light .person-content {
    color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
}

.projekt-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: color 0.5s;
    border-radius: 8px;
    height: calc(100vh - 36px);
}

.dark .projekt-content {
    color: rgb(232, 243, 241);
    border: 2px solid rgb(232, 243, 241);
    background-color: rgb(22, 22, 22);
}

.light .projekt-content {
    color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
}


.hover-text {
    font-size: 24px;
    font-weight: bold;
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
    transition: color 0.5s;
    font-family: 'Pixel', sans-serif;
}
</style>
