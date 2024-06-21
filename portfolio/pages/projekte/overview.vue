<script setup lang="ts">
const colorMode = useColorMode();
const username = 'otnick';
const apiUrl = `https://api.github.com/users/${username}`;

onMounted(() => {
    fetchGitHubProfile();
});

// Funktion zum Abrufen und Anzeigen der GitHub-Daten
async function fetchGitHubProfile() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Netzwerk-Antwort war nicht okay');
        }
        const data = await response.json();
        console.log("github" + data.value);

        // Profilinformationen anzeigen
        document.getElementById('profile')!.innerHTML = `
            <div class="flex flex-col">
                <div class="flex">
                    <div>
                        <p class="">github/</p>
                        <p class="">${data.login}</p>
                    </div>
                    <img src="${data.avatar_url}" alt="${data.login}" class="w-24 h-24 rounded-full ml-4 object-cover mt-5">
                </div>
                <p class="text-lg ms-3">${data.public_repos} public repos</p>
                <p class="text-lg ms-3">${data.followers} followers</p>
            </div>
        `;
    } catch (error) {
        console.error('Es gab ein Problem mit der Fetch-Operation:', error);
    }
}
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
                                    <div id="profile" class="github-profile flex"></div>
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
                                    <p class=" subtitle">javaFX</p>
                                    <p class="subtitle">tabletop game</p>
                                    <img src="../../public/unit_red.png" alt="terror-nightmare-towers unit" style=" height: 64px;"/>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="row-span-4">
                        <NuxtLink to="/projekte/handi">
                            <div class="person-content hover-text">
                                <div class="mx-10">
                                    <div class="">handi</div>
                                    <p class="subtitle">svelte & django</p>
                                    <p class="subtitle">website    </p>
                                    <p class="subtitle">tool for fishing record</p>
                                    <p class="subtitle">and displaying in pokebox</p>
                                    <img src="/handi.png" alt="handi landing page" class="h-48 mt-5"/>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="row-span-4">
                        <NuxtLink to="/projekte/showcase">
                            <div class="me-5 projekt-content hover-text">
                                <div class="mx-10">
                                    <div class="">3D</div>
                                    <div>showcase</div>
                                    <p class="subtitle">pokebox</p>
                                    <p class="subtitle">three.js</p>
                                </div>
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
    transition: color 0.5s;
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
    align-items: start;
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

.subtitle{
    font-size: 24px;
}

.github-profile {
    display: flex;
    align-items: center;
}
.github-profile img {
    border-radius: 50%;
    margin-right: 20px;
}
</style>