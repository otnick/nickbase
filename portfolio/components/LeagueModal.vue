<script setup lang="ts">
import { ref } from 'vue';

interface League {
  id: string;
  name: string;
  lm: {
    budget: string;
    teamValue: string;
  };
}


const showModal = ref(false);
let storage = fetchStorage();

const selectedLeague = ref('');
function saveLeague() {
    if (selectedLeague.value) {
    console.log('Selected League ID:', selectedLeague.value);
      localStorage.setItem('selectedLeague', JSON.stringify(selectedLeague.value));
  } else {
    console.error('No league selected.');
  }
    showModal.value = false;
}




</script>

<template>
    

<!-- Modal toggle -->
<button class="px-5 text-sm font-medium text-center fixed top-20 left-10 custom-button mt-5" type="button" @click="showModal = true">
  Leagues
</button>

<!-- Main modal -->
<div v-if="showModal" id="select-modal" tabindex="-1" aria-hidden="true" class="fixed inset-0 flex items-center justify-center z-50 modal-border">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative background rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h1 class="text-lg font-semibold text-gray-900 dark:text-white mb-0 font">
                    Choose league
                </h1>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="showModal = false">
                    <Icon name="ic:baseline-close" color="black" size="2em" class="close-icon" />
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">Select your league to manage</p>
                <ul class="space-y-4 mb-4 list-none">
                    <li v-for="league in storage?.leagues" :key="league.id">
                        <input type="radio" :id="league.id" name="job" :value="league" v-model="selectedLeague" class="hidden peer" required />
                        <label :for="league.id" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">                           
                            <div class="block">
                                <div class="w-full text-lg font-semibold">{{ league.name }}</div>
                                <div class="flex justify-between mt-2">
                                    <!-- Budget Section -->
                                    <div class="flex flex-col items-center me-5">
                                        <div class="w-full text-green-500 font-bold">{{ league.lm.budget }}€</div>
                                        <div class="w-full text-black-500 dark:text-gray-400 text-center">Balance</div>
                                    </div>
                                    <!-- Team Value Section -->
                                    <div class="flex flex-col items-center">
                                        <div class="w-full text-green-500 font-bold">{{ league.lm.teamValue }}€</div>
                                        <div class="w-full text-black-500 dark:text-gray-400 text-center">Teamvalue</div>
                                    </div>
                                </div>
                            </div>
                            <Icon name="ic:baseline-arrow-forward-ios" color="black" size="2em" class="w-4 h-4 ms-3 text-gray-500 dark:text-gray-400" />
                        </label>
                    </li>
                </ul>
                <button class="custom-button" @click="saveLeague()">
                    Confirm
                </button>
            </div>
        </div>
    </div>
</div>



</template>

<style scoped>
.modal-border {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    border: 2px solid rgb(22, 22, 22);
}

.custom-button{
        font-weight: bold;
        background-color: rgb(104, 231, 0);
        border-radius: 8px;
        padding: 8px;
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
    .background{
        background-color: rgb(232, 243, 241);
    }
    .dark .background {
        background-color: rgb(22, 22, 22);
    }
    .block .flex > div {
        margin: 0 1rem; /* Add space between Budget and Team Value sections */
    }
    .block .flex > div > div {
        text-align: center;
    }
</style>