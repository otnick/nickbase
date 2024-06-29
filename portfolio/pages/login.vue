<script setup lang="ts">
import { login } from '../server/api/kickbase';

const router = useRouter();
const colorMode = useColorMode();

const toastType = ref<'success' | 'error'>('success');
const toastMessage = ref('');
const toastVisible = ref(false);

const email = ref('');
const password = ref('');

const handleLogin = async (mail: string, pw: string) => {
    console.log("Loging in..");
    try {
        let response = await login(mail, pw);
        const responseData = await response.json();
        localStorage.setItem('userSession', JSON.stringify(responseData));

        toastType.value = 'success';
        toastMessage.value = 'Login successful';
        toastVisible.value = true;
            setTimeout(() => {
        toastVisible.value = false;
        }, 3000);

        email.value = '';
        password.value = '';

        router.push('/kickbase/base');

    } catch (error) {
        toastType.value = 'error';
        toastMessage.value = 'Login failed';
        toastVisible.value = true;
        setTimeout(() => {
        toastVisible.value = false;
        }, 3000);
    }
};
</script>

<template>
    <Topbar />
    <Toast :type="toastType" :message="toastMessage" :visible="toastVisible" class="me-5"/>
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-5 page-content custom-height mt-9">
                    <h1 class="hover-text">Login to Kickbase</h1>
                    <form @submit.prevent="handleLogin(email, password)">
                    <input id="mail" type="text" v-model="email" placeholder="Email" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"/>
                    <input id="password" type="password" v-model="password" placeholder="Password" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                    <button type="submit" class="px-5 text-sm font-medium text-center custom-button">Login</button>
                    </form>
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