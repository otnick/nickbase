<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
    <Topbar />
    <Navlist class="top-10 right-10 fixed" />
    <NuxtLink to="/projekte/overview" class=" top-96 left-10 fixed">
        <div class="hover-text static-color">< back</div>
    </NuxtLink>
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-56 page-content custom-height">
                    <div class="welcome-list">
                      <div class="prose mx-10 mb-10">
                        <ContentDoc />
                        <img src="/tnt_img.png" alt="tnt-board"/>
                    </div>
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
    --dot-bg: rgb(22, 22, 22);
    --dot-color: rgb(232, 243, 241);
    --dot-size: 2px;
    --dot-space: 22px;
	background:
		linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		var(--dot-color);
}
.light .background {
    background-color: rgb(22, 22, 22);
    --dot-bg: rgb(232, 243, 241);
    --dot-color: rgb(22, 22, 22);
    --dot-size: 2px;
    --dot-space: 22px;
        background:
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color);
}

.page-content{
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.dark .hover-text{
  color: rgb(232, 243, 241);
}

.light .hover-text{
  color: rgb(22, 22, 22);
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

.static-color{
    color: rgb(232, 243, 241);
    font-family: 'Pixel', sans-serif;
  }
</style>
