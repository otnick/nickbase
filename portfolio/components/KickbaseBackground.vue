<script setup lang="ts">

const colorMode = useColorMode();
</script>

<template>
    <div :class="colorMode.preference">
        <div class="w-full h-full">
            <div class=" background">
                <div class="mx-5 page-content custom-height mt-9">
                    <h1 class="hover-text absolute top-48 h-z">Transfer</h1>
                    <div class="center-circle">
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
    top: 10%;  /* Position von oben 50% */
    left: 50%; /* Position von links 50% */
    transform: translate(-50%, -50%); /* Verschiebt die Komponente um die Hälfte ihrer eigenen Breite und Höhe */
    z-index: 1000; /* Stellt sicher, dass die Komponente über anderen Elementen liegt */
}
</style>