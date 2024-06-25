<script setup lang="ts">
import { useIsFormValid } from 'vee-validate';
import { getLeagues, getFeed } from '../../server/api/kickbase';
import { ref } from 'vue';

const colorMode = useColorMode();
const router = useRouter();

const toastType = ref<'success' | 'error'>('success');
const toastMessage = ref('');
const toastVisible = ref(false);

let userData = ref('');
let token = ref('');
let userID = ref('');
let leagueID = ref('');
let userName = ref('');
let cover = ref('');

function fetchStorage() {
    try{
    userData = ref(localStorage.getItem('userSession') || '');
    token = JSON.parse(userData.value).token;
    userID = JSON.parse(userData.value).user.id;
    leagueID = JSON.parse(userData.value).leagues[0].id;
    userName = JSON.parse(userData.value).user.name;
    cover = JSON.parse(userData.value).user.cover;

    loadBase(userID, leagueID, token);
    }
    catch (error) {
        toastType.value = 'error';
        toastMessage.value = 'Base loading failed';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
        router.push('/kickbase/login');
    }
};

const loadBase = async (userID: any, leagueID: any, token: any) => {
    try {
        await getLeagues(leagueID, token);

        await getFeed(leagueID, userID, token);
        toastType.value = 'success';
        toastMessage.value = 'Base loaded';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
    } catch (error) {
        toastType.value = 'error';
        toastMessage.value = 'Base loading failed';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
    }
};

fetchStorage();
</script>

<template>
    <Topbar />
    <Toast :type="toastType" :message="toastMessage" :visible="toastVisible" class="me-5"/>
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-5 page-content custom-height mt-9">
                    <h1 class="hover-text absolute top-48 h-z">Welcome to your base {{ userName }}!</h1>
                    <div class="center-circle">
                        <img :src="cover" alt="Profile picture" class="h-1/2 rounded-full">
                    </div>  
                    <div class="line vertical"></div>
                    <!-- penalty box -->
                    <div class="box left"></div>
                    <div class="box right"></div>
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

.hover-text {
    font-weight: bold;
    text-align: center;
    transition: color 0.5s;
    z-index: 1;
    background-color: rgb(22, 22, 22, 0.2);
}
.hover-text:hover {
    color: rgb(104, 231, 0);
}
    
    .center-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10%; /* Adjust the circle size as needed */
        max-width: 150px; /* Max width of the circle */
        border-radius: 50%;
        background-color: rgb(232, 243, 241);
        border: 2px solid black;
        z-index: 1;
    }
    .line {
        position: absolute;
        background-color: rgb(232, 243, 241);
    }
    .line.horizontal {
        width: 100%;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
    }
    .line.vertical {
        width: 2px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    .box {
        position: absolute;
        width: 10%;
        height: 40%;
        border: 2px solid rgb(232, 243, 241);
    }
    .box.left {
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        border-left: 0cm;
    }
    .box.right {
        top: 50%;
        right: 0%;
        transform: translateY(-50%);
        border-right: 0cm;
    }
</style>