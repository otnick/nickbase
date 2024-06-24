<script setup lang="ts">
import { getLeagues, getFeed } from '../../server/api/kickbase';
import { ref } from 'vue';

const colorMode = useColorMode();

const toastType = ref<'success' | 'error'>('success');
const toastMessage = ref('');
const toastVisible = ref(false);

const userData = ref(localStorage.getItem('userSession') || '');
const token = JSON.parse(userData.value).ctoken;
const userID = JSON.parse(userData.value).userID;
const leagueID = JSON.parse(userData.value).leagueID;

const loadBase = async () => {
    console.log('Loading base...');
    console.log('League ID: ' + leagueID);
    console.log('User ID: ' + userID);
    console.log('Token: ' + token);
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

loadBase();

</script>

<template>
    <Topbar />
    <Toast :type="toastType" :message="toastMessage" :visible="toastVisible" class="me-5"/>
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-5 page-content custom-height mt-9">
                    <h1 class="hover-text">Welcome to your base!</h1>
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
}
.hover-text:hover {
    color: rgb(104, 231, 0);
}

</style>