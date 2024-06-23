<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as Yup from 'yup';

const { status, data, signOut, signIn } = useAuth()
const colorMode = useColorMode();
const scrolling = ref(false);
const schema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    message: Yup.string().min(30, 'Message must be at least 30 characters').required('Message is required'),
});

const handleScroll = () => {
    scrolling.value = window.scrollY > 0;
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const adjustOpacity = (selector: string, opacityValue: number) => {
        const element = document.querySelector(selector);
        if (element) {
            (element as HTMLDivElement).style.opacity = opacityValue.toString();
        }
    };

    adjustOpacity('.welcome-list', 1 - window.scrollY / maxScrollHeight);
    adjustOpacity('.scroll-container', 1 - window.scrollY / maxScrollHeight);
    adjustOpacity('.person-content', window.scrollY / (maxScrollHeight / 2));
    adjustOpacity('.projekt-content', window.scrollY / (maxScrollHeight / 2));
    adjustOpacity('.form-content', window.scrollY / maxScrollHeight);
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
    fillMail();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const { handleSubmit } = useForm({
    validationSchema: schema,
});

const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: message, errorMessage: messageError } = useField<string>('message');

function clearFormFields() {
    // Überprüfen, ob die Elemente existieren, bevor auf die 'value' Eigenschaft zugegriffen wird
    if (email) {
        email.value = '';
    }
    if (message) {
        message.value = '';
    }
}

const toastType = ref<'success' | 'error'>('success');
const toastMessage = ref('');
const toastVisible = ref(false);

const showToast = (type: 'success' | 'error', message: string) => {

    toastType.value = type;
    toastMessage.value = message;
    toastVisible.value = true;

    // Verstecke den Toast nach 3 Sekunden automatisch
    setTimeout(() => {
    toastVisible.value = false;
    }, 3000);
};

// Füllt das E-Mail-Feld mit der E-Mail-Adresse des Benutzers, wenn er über github angemeldet ist
function fillMail() {
    if(status.value === 'authenticated') {
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        if (emailInput && data.value?.user?.email) {
            emailInput.value = data.value?.user?.email;
        }
    }
}


const submitForm = handleSubmit(
    async (values) => {
        // Hier können Sie die Logik für den erfolgreichen Formularversand hinzufügen
        // z.B., Senden der Daten an einen Server
        showToast('success', 'Message sent successfully!');
        clearFormFields(); // Felder leeren
    },
    (errors) => {
        // Fehlerhafte Validierung
        showToast('error', 'Please correct the errors in the form!');
    }
);

</script>

<template>

    <Topbar />
    <Toast :type="toastType" :message="toastMessage" :visible="toastVisible" class="me-5"/>
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
                <div class="mx-5 page-content custom-height form-content">
                    <div class="welcome-list mt-60 mb-48 lg:w-1/3">
                        <!-- <div class="hover-text">Kontaktformular</div>
                        <div class="typing-line">|</div> -->
                        <section class="">
                            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Lets get in touch!</p>
                                <form action="/api/message" class="space-y-8" method="post" id="contact" @submit="submitForm">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input v-model="email" name="email"  id="email" :class="{'is-invalid': emailError}" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required>
                                        <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
                                        <textarea v-model="message" name="message" id="messageInput" rows="6" :class="{'is-invalid': messageError}" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                                        <span v-if="messageError" class="text-red-500">{{ messageError }}</span>
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

.form-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 36px);
    border-radius: 8px;
    
}
.form .page-content {
    color: rgb(232, 243, 241);
    border: 2px solid #ffffff;
    background-color: rgb(22, 22, 22);  
}

.form .page-content {
    color: rgb(22, 22, 22);
    border: 2px solid rgb(22, 22, 22);
    background-color: rgb(232, 243, 241);
}


</style>
