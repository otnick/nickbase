<template>
    <Topbar />
    <div class="dark">
        <NuxtLink to="/projekte/overview/" class="top-10 left-10 fixed">
            <div class="hover-text static-color">Zurück</div>
        </NuxtLink>
        <NavlistDisabled class="top-10 right-10 fixed static-color" />
        <h1 class="hover-text fixed bottom-10 left-10 static-color">3d-showcase</h1>
        <div ref="threeContainer" class="three-container"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  
  export default {
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.threeContainer.appendChild(renderer.domElement);
  
        const light = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5).normalize();
        scene.add(directionalLight);
  
        const loader = new GLTFLoader();
        loader.load('/Hecht.glb', (gltf) => {
          const model = gltf.scene;
          scene.add(model);
  
          // Play animations if any
          const mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
  
          // Update loop
          const clock = new THREE.Clock();
          const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            mixer.update(delta);
            renderer.render(scene, camera);
          };
  
          animate();
        });
  
        camera.position.set(5, 5, 10);
        camera.lookAt(0, 0, 0);
  
        // Handle window resize
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .three-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .static-color{
    color: rgb(232, 243, 241);
  }

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
    margin-top: 20px;
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
  </style>