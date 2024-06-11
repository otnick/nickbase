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
                <div class="mx-5 page-content custom-height mt-9">
                    <div class="welcome-list mt-60 mb-48">
                        <div class="hover-text">welcome</div>
                        <div class="hover-text">to nicks</div>
                        <div class="hover-text">portfolio</div>
                        <div class="typing-line">|</div>
                    </div>
                    <button @click="scrollDown">
                        <div class="scroll-container mb-10">
                            <div class="">scroll down</div>
                            <div class="">\/</div>
                        </div>
                    </button>
                </div>
                <div class="grid grid-cols-2">
                    <div class="row-span-4">
                        <div class="ms-5 person-content">
                            <div class="person-text ">
                                <div class="description-text">nick schumacher</div>
                                <div>abitur 2019 - brake</div>
                                <div>medieninformatik bachelor 2021 - * - lübeck</div>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-4">
                        <NuxtLink to="/projekte/handi">
                        <div class="me-5 projekt-content hover-text">
                            <div class="description-text">handi</div>
                            <div>fishing app</div>
                            <div>svelte & django</div>
                        </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="mx-5 page-content custom-height">
                    <div class="welcome-list mt-60 mb-48 lg:w-1/3">
                        <!-- <div class="hover-text">Kontaktformular</div>
                        <div class="typing-line">|</div> -->
                        <section class="">
                            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Lets get in touch!</p>
                                <form action="#" class="space-y-8">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center custom-button">Send message</button>
                                </form>
                            </div>
                            </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.welcome-list{
    transition: color 0.5s;
}
.dark .background {
    background-color: rgb(232, 243, 241);
}
.light .background {
    background-color: rgb(22, 22, 22);
}

.page-content{
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

.description-text {
    font-size: 56px;
    font-weight:800;
    text-align:start;
    transition: color 0.5s;
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
    font-weight: bold;
    transition: color 0.5s;
    font-family: 'Pixel', sans-serif;
}

.custom-button{
    font-weight: bold;
    background-color: rgb(104, 231, 0);
    border-radius: 8px;
    padding: 8px;
    margin-top: 20px;
    color: rgb(22, 22, 22);
}

.custom-button:hover {
    background-color: rgb(104, 231, 0);
    color: rgb(104, 231, 0);
}

.dark .custom-button {
    color: rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
}

.light .custom-button {
    color: rgb(232, 243, 241);
    background-color: rgb(22, 22, 22);
}

.dark .custom-button:hover {
    color: rgb(232, 243, 241);
    background-color: rgb(104, 231, 0);
}

.light .custom-button:hover {
    color: rgb(22, 22, 22);
    background-color: rgb(104, 231, 0);
}

</style>
