<script setup lang="ts">
import Toast from '../components/Toast.vue';

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
let gift: any = ref('');
let giftStatus = ref('');

function fetchStorage() {   
    try{
    userData = ref(localStorage.getItem('userSession') || '');
    console.log("userData: " + userData.value);
    token = JSON.parse(userData.value).tkn;
    userID = JSON.parse(userData.value).u.id;
    userName = JSON.parse(userData.value).u.name;
    cover = JSON.parse(userData.value).u.profile;
    leagueID = JSON.parse(userData.value).srvl[0].id;

    loadBase(userID, leagueID, token);
    getCurrentGifts(leagueID, token);
    collectGifts(leagueID, token);
    }
    catch (error) {
        console.log("Error fetching storage: " + error);
        toastType.value = 'error';
        toastMessage.value = 'Base loading failed';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
            router.push('/login');
        }, 1000);
        
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

const handleLogout = () => {
    localStorage.removeItem('userSession');
    router.push('/login');
};

const getCurrentGifts = async (leagueID: any, token: any) => {
    try {
        gift.value = await getCurrentGift(leagueID, token);
        gift.value = await gift.value?.json();
        console.log("Geschenk: " + gift);
        toastType.value = 'success';
        toastMessage.value = 'Gift loaded';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
    } catch (error) {
        toastType.value = 'error';
        toastMessage.value = 'Gift loading failed';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
    }
};

const collectGifts = async (leagueID: any, token: any) => {
    try {
        let collected = await collectGift(leagueID, token);
        console.log("Geschenk: " + collected);
        giftStatus.value = 'Collected';
        toastType.value = 'success';
        toastMessage.value = 'Gift collected';
        toastVisible.value = true;
        setTimeout(() => {
            toastVisible.value = false;
        }, 3000);
    } catch (error: any) {
        giftStatus.value = 'Collected';
    }
};

fetchStorage();
</script>

<template>
    <Topbar />
    <LeagueDetails/>
    <Toast :type="toastType" :message="toastMessage" :visible="toastVisible" class="me-5"/>
    <button class="px-5 text-sm font-medium text-center custom-button fixed top-10 left-10">{{ giftStatus? giftStatus : "" }}</button>
    <KickbaseBackground :title="`Welcome to your base ${userName}!`" :image="cover">
    </KickbaseBackground>
    
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
        z-index: 1;
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
        width: 10em; /* Max width of the circle */
        height: 10em; /* Max height of the circle */
        border-radius: 50%;
        border: 2px solid rgb(232, 243, 241);
        z-index: 1;
    }
    .dark .center-circle {
        border: 2px solid rgb(22, 22, 22);
    }
    .line {
        position: absolute;
        background-color: rgb(22, 22, 22);
    }
    .dark .line {
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
        height: calc(100vh - 36px);
        left: 50%;
        transform: translateX(-50%);
    }
    .box {
        position: absolute;
        width: 10%;
        height: 40%;
        border: 2px solid rgb(22, 22, 22);
    }
    .dark .box {
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
    .centered-component {
    bottom: 10%;  /* Position von oben 50% */
    left: 50%; /* Position von links 50% */
    transform: translate(-50%, -50%); /* Verschiebt die Komponente um die Hälfte ihrer eigenen Breite und Höhe */
    z-index: 1000; /* Stellt sicher, dass die Komponente über anderen Elementen liegt */
}
</style>