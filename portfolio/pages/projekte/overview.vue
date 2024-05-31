<script setup lang="ts">

const colorMode = useColorMode();

const scrollDown = () => {
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
        top: maxScrollHeight,
        behavior: 'smooth',
    });
};
</script>

<template>
    <Topbar />
    <Navlist class="top-10 right-10 fixed" />
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class="background">
                <div class="grid grid-cols-3">
                    <div class="col-span-2">
                        <div class="page-content ms-5">
                            <div class="ms-20 mt-56">
                                <div class="hover-text">portfolio</div>
                                <div class="hover-text">nick schumacher</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="github-content me-5">
                            <div class="hover-text ms-20 mb-20">
                                <NuxtLink to="https://github.com/otnick" class="github" target="_blank">
                                    <div >github</div>
                                    <div>/otnick</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-4">
                        <NuxtLink to="/projekte/tnt">
                            <div class="ms-5 person-content hover-text">
                                <div class="person-text ms-10">
                                    <div class="">
                                        <div>terror</div>
                                        <div>nightmare</div>
                                        <div>towers</div>
                                    </div>
                                    <div class=" font-bold">javaFX</div>
                                    <img src="../../public/unit_red.png" alt="terror-nightmare-towers unit" style=" height: 64px;"/>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="row-span-4">
                        <div class="projekt-content">
                            <div>handi</div>
                            <div>fishing app</div>
                            <div>svelte & django</div>
                        </div>
                    </div>
                    <div class="row-span-4">
                        <NuxtLink to="/projekte/handi">
                            <div class="me-5 projekt-content hover-text">
                                <div class="">3D</div>
                                <div>fishing app</div>
                                <div>svelte & django</div>
                            </div>
                        </NuxtLink>
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
    height: calc(75vh - 36px);
    border-radius: 8px;
    justify-content: left;
    align-items: end;
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
    align-items:start;
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
    font-size: 56px;
    font-weight:800;
    text-align:start;
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

.github-content{
    margin-top: 36px;
    height: calc(75vh - 36px);
    border-radius: 8px;
    justify-content: left;
    align-items: end;
    transition: color 0.5s;
    display: flex;
}
.dark .github-content {
    color: rgb(232, 243, 241);
    border: 2px solid #ffffff;
    background-color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
    --dot-bg: rgb(22, 22, 22);
    --dot-color: rgb(232, 243, 241);
    --dot-size: 2px;
    --dot-space: 22px;
	background:
		linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		var(--dot-color);
    
}

.light .github-content {
    color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
    --dot-bg: rgb(232, 243, 241);
    --dot-color: rgb(22, 22, 22);
    --dot-size: 2px;
    --dot-space: 22px;
        background:
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color);
}

.github {
    font-weight: bold;
}
</style>