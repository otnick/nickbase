<script setup lang="ts">
const selectedLeague = ref({name: 'No league selected', lm: {budget: 0}});
const budget = ref(0);

onMounted(() => {
    fetchLeague();
});

function fetchLeague() {
    if(!localStorage.getItem('selectedLeague')) {
        localStorage.setItem('selectedLeague', JSON.stringify({name: 'No league selected', lm: {budget: 0}}));
    }
    else{
        selectedLeague.value = JSON.parse(localStorage.getItem('selectedLeague')  || '');
        budget.value = selectedLeague.value.lm.budget;
    }
}

function formatBudget(amount: number): string {
    return new Intl.NumberFormat('de-DE').format(amount);
}

</script>

<template>
    <div class="nav">
        <div class="nav__box">
            <h1 class="nav__link-col mb-0"> {{ selectedLeague.name }} </h1>
            <p class="nav__link-col">{{ formatBudget(budget) }}€</p>
        </div>
    </div>
</template>
  
  <style scoped>
  .nav {
  position: fixed; /* Ensures the navigation stays fixed on the screen */
  bottom: 10px; /* Position it 10px from the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for perfect horizontal centering */
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 1000; /* Ensure it stays above other content */
}

.nav__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  background-color: var(--background-color);
}

.nav__link-col {
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: large;
  font-weight: bold;
  color: rgb(232, 243, 241);
}

.dark .nav__link-col {
  color: rgb(22, 22, 22);
}

.nav__link-col:hover {
  color: rgb(104, 231, 0);
}

.dark .nav__box {
  background-color: rgb(255, 255, 255);
  border-color: rgb(22, 22, 22);
}

.light .nav__box {
  background-color: rgb(40, 40, 40);
  border-color: rgb(232, 243, 241);
}

/* Style for the active link */
.active {
  color: rgb(104, 231, 0) !important;
  border-bottom: 2px solid rgb(104, 231, 0); /* Optional: Line under the active link */
}

@media (max-width: 768px) {
  .nav {
    top: 5%; /* Position it at the top */
    bottom: auto; /* Remove bottom positioning */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for perfect horizontal centering */
  }
}

.nav__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  background-color: var(--background-color);
}

.nav__link-col {
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: large;
  font-weight: bold;
  color: rgb(232, 243, 241);
}

.dark .nav__link-col {
  color: rgb(22, 22, 22);
}

.nav__link-col:hover {
  color: rgb(104, 231, 0);
}

.dark .nav__box {
  background-color: rgb(255, 255, 255);
  border-color: rgb(22, 22, 22);
}

.light .nav__box {
  background-color: rgb(40, 40, 40);
  border-color: rgb(232, 243, 241);
}

/* Style for the active link */
.active {
  color: rgb(104, 231, 0) !important;
  border-bottom: 2px solid rgb(104, 231, 0); /* Optional: Line under the active link */
}
  </style>