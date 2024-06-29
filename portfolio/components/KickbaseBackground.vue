<script setup lang="ts">

const props = defineProps<{
  title: string;
  image: any;
}>();

const colorMode = useColorMode();
</script>

<template>
  <div :class="colorMode.preference">
    <Theme/>
    <KickbaseNav class="fixed centered-component"/>
    <div class="w-full h-full">
      <div class="background">
        <div class="mx-5 page-content custom-height mt-9">
          <h1 class="hover-text absolute top-48 h-z">{{ props.title }}</h1>
          <div class="center-circle">
            <img :src="props.image" alt="Profile picture" class="rounded-full" v-if="props.image != null">
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

.page-content {
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

.custom-button {
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
}

.hover-text:hover {
  color: rgb(104, 231, 0);
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10em; /* Adjust the circle size as needed */
  height: 10em; /* Max width and height of the circle */
  border-radius: 50%;
  border: 2px solid rgb(22, 22, 22);
  z-index: 1;
}

.dark .center-circle {
  border: 2px solid rgb(232, 243, 241);
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
  left: 0;
  transform: translateY(-50%);
  border-left: 0;
}

.box.right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-right: 0;
}

.centered-component {
  top: 10%;  /* Position from top */
  left: 50%; /* Position from left */
  transform: translate(-50%, -50%); /* Center the component */
  z-index: 1000; /* Ensure it's above other elements */
}

/* Mobile view adjustments */
@media (max-width: 768px) {
  .page-content {
    flex-direction: column; /* Keep column layout */
    justify-content: flex-start; /* Align items at the top */
    height: 100%; /* Use full height */
  }

  .center-circle {
    top: 50%; /* Keep centered vertically */
    left: 50%; /* Keep centered horizontally */
    transform: translate(-50%, -50%); /* Maintain centering */
    width: 5em; /* Adjust size for smaller screens */
    height: 5em; /* Adjust size for smaller screens */
  }

  .line.vertical {
    display: none; /* Hide vertical line on mobile */
  }

  .line.horizontal {
    display: block;
    width: 2px; /* Change horizontal line to vertical */
    height: calc(100vh - 36px);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .box {
    width: 40%; /* Make boxes wider */
    height: 10%; /* Make boxes shorter */
  }

  .box.left {
    top: 0; /* Position at the top */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%);
    border-top: 0; /* Remove top border */
    border-left: 2px solid; /* Add left border */
  }

  .box.right {
    top: auto;
    bottom: 0; /* Position at the bottom */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%);
    border-bottom: 0; /* Remove bottom border */
    border-right: 2px solid; /* Add right border */
  }

  .centered-component {
    bottom: 5rem;
    left: 50%; /* Position von links 50% */
    transform: translate(-50%, -50%); /* Verschiebt die Komponente um die Hälfte ihrer eigenen Breite und Höhe */
    z-index: 1001; /* Stellt sicher, dass die Komponente über anderen Elementen liegt */
}
}

.centered-component {
    top: 10%;  /* Position von oben 50% */
    left: 50%; /* Position von links 50% */
    transform: translate(-50%, -50%); /* Verschiebt die Komponente um die Hälfte ihrer eigenen Breite und Höhe */
    z-index: 1000; /* Stellt sicher, dass die Komponente über anderen Elementen liegt */
}
</style>
