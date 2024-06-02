<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import * as THREE from 'three';
    import waternormals from '$lib/assets/waternormals.jpg';
    import Stats from 'three/addons/libs/stats.module.js';
    import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { Water } from 'three/addons/objects/Water.js';
    import { Sky } from 'three/addons/objects/Sky.js';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { fetchFisch } from '$lib/api';

    let fische: any;
   
    let scene: any, camera: any, renderer: any;
    let controls: any, water: any, sun: any, mesh: any;
    let mouse = new THREE.Vector2();
    let raycaster = new THREE.Raycaster();
    let intersects: any[];
    let container: any, stats: any;

    let mixer: any;
    let mixers: any[] = [];
    let mixerStarted = false;

    const infoPanel = document.createElement('div');

    const HERINGPATH = "/hering.glb";
    const HECHTPATH = "/Hecht.glb";
  
    function init() {

        container = document.getElementById( 'container' );

        // Erstelle ein leeres Div-Element für das Info-Panel
        infoPanel.style.position = 'absolute';
        infoPanel.style.top = '100px';
        infoPanel.style.left = '100px';
        infoPanel.style.background = 'rgba(20, 9, 9, 0.8)';
        infoPanel.style.padding = '10px';
        infoPanel.style.borderRadius = '5px';
        infoPanel.style.display = 'none'; // Anfangs verstecken
        container.appendChild(infoPanel); // Füge das Info-Panel zum Container hinzu
        

        //

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.5;
        container.appendChild( renderer.domElement );

        //

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
        camera.position.set( 30, 30, 100 );

        //

        sun = new THREE.Vector3();

        // Water

        const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

        water = new Water(
            waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load( waternormals, function ( texture ) {

                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

                } ),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
                fog: scene.fog !== undefined
            }
        );

        water.rotation.x = - Math.PI / 2;

        scene.add( water );

        // Fische
        const loader = new GLTFLoader();
        for (let fisch of fische) {
            let sizeFactor = fisch.laenge / 10;
            let size = Math.random() * ((6 + sizeFactor) - (1 + sizeFactor) + 1 + sizeFactor);
            if(fisch.fischart === 1){
                loader.load(
                    HECHTPATH,
                    function ( gltf: any ) {

                        const fish = gltf.scene;
                        fish.userData.isFish = true;
                        fish.position.set( size, size, size );
                        fish.scale.set( sizeFactor, sizeFactor, sizeFactor );
                        scene.add( fish );
                        moveFish(fish);
                        
                        mixer = new THREE.AnimationMixer(fish);
                        mixers.push(mixer);
                        console.log("mixer", mixers);

                        const amimations = gltf.animations;
                        console.log("animation", amimations);

                        const clip = amimations[1];

                        const action = mixer.clipAction(clip);

                        action.setEffectiveTimeScale(2);

                        action.play();

                    },
                    undefined,
                    function ( error: any ) {
                        console.error( 'Fehler beim Laden des Fischmodells:', error );
                    }
                );
            }
            else if(fisch.fischart === 4){
                loader.load(
                    HERINGPATH,
                    function ( gltf: any ) {

                        const fish = gltf.scene;
                        fish.userData.name = fisch.name;
                        fish.position.set( size, size, size );
                        fish.scale.set( sizeFactor, sizeFactor, sizeFactor );
                        scene.add( fish );
                        moveFish(fish);

                        mixer = new THREE.AnimationMixer(fish);
                        mixers.push(mixer);
                        console.log("mixer", mixers);

                        const amimations = gltf.animations;
                        console.log("animation", amimations);

                        const clip = amimations[0];

                        const action = mixer.clipAction(clip);

                        action.setEffectiveTimeScale(2);

                        action.play();

                    },
                    undefined,
                    function ( error: any ) {
                        console.error( 'Fehler beim Laden des Fischmodells:', error );
                    }
                );
            }
        }

        mixerStarted = true;

        // Skybox

        const sky = new Sky();
        sky.scale.setScalar( 10000 );
        scene.add( sky );

        const skyUniforms = sky.material.uniforms;

        skyUniforms[ 'turbidity' ].value = 10;
        skyUniforms[ 'rayleigh' ].value = 2;
        skyUniforms[ 'mieCoefficient' ].value = 0.005;
        skyUniforms[ 'mieDirectionalG' ].value = 0.8;

        const parameters = {
            elevation: 2,
            azimuth: 180
        };

        const pmremGenerator = new THREE.PMREMGenerator( renderer );
        const sceneEnv = new THREE.Scene();

        let renderTarget: any;

        function updateSun() {

            const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
            const theta = THREE.MathUtils.degToRad( parameters.azimuth );

            sun.setFromSphericalCoords( 1, phi, theta );

            sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
            water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

            if ( renderTarget !== undefined ) renderTarget.dispose();

            sceneEnv.add( sky );
            renderTarget = pmremGenerator.fromScene( sceneEnv );
            scene.add( sky );

            scene.environment = renderTarget.texture;

        }

        updateSun();

        //

        // const geometry = new THREE.BoxGeometry( 30, 20, 30 );
        // const material = new THREE.MeshStandardMaterial( { roughness: 0 } );

        // mesh = new THREE.Mesh( geometry, material );
        // scene.add( mesh );

        //

        controls = new OrbitControls( camera, renderer.domElement );
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set( 0, 10, 0 );
        controls.minDistance = 40.0;
        controls.maxDistance = 200.0;
        controls.update();

        //

        stats = new Stats();
        container.appendChild( stats.dom );

        // GUI

        const gui = new GUI();

        const folderSky = gui.addFolder( 'Sky' );
        folderSky.add( parameters, 'elevation', 0, 90, 0.1 ).onChange( updateSun );
        folderSky.add( parameters, 'azimuth', - 180, 180, 0.1 ).onChange( updateSun );
        folderSky.open();

        const waterUniforms = water.material.uniforms;

        const folderWater = gui.addFolder( 'Water' );
        folderWater.add( waterUniforms.distortionScale, 'value', 0, 8, 0.1 ).name( 'distortionScale' );
        folderWater.add( waterUniforms.size, 'value', 0.1, 10, 0.1 ).name( 'size' );
        folderWater.open();

        //

        window.addEventListener( 'resize', onWindowResize );
        window.addEventListener( 'mousemove', checkIntersects );

    }

    function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function checkIntersects(event: MouseEvent) {
        // Aktualisiere die Mausposition
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Aktualisiere den Raycaster mit der aktuellen Mausposition
        raycaster.setFromCamera(mouse, camera);

        // Finde heraus, welche Objekte von der Maus getroffen werden
        intersects = raycaster.intersectObjects(scene.children, true);

        // Überprüfe, ob mindestens ein Fisch getroffen wurde
        if (intersects.length > 0) {
            highlightFish(intersects[0].object);
            showInfoPanel(intersects[0].object);
            // Markiere den ersten getroffenen Fisch und zeige das Info-Panel an
            if (intersects[0].object.userData.isFish === true) {
                highlightFish(intersects[0].object);
                showInfoPanel(intersects[0].object);
            } else {
                // Verstecke das Info-Panel, wenn kein Fisch getroffen wurde
                
            }
        } else {
            // Verstecke das Info-Panel, wenn kein Objekt getroffen wurde
            
        }
    }

    function highlightFish(fish: any) {
    // Hier könntest du den Fisch markieren, z.B. die Farbe ändern oder ein Glüheffekt hinzufügen
    if (fish.userData.name) {
        fish.material.emissive.set(0xFFF2CC); // Beispiel: Füge einen Glüheffekt hinzu
        // Farbe nach 1 Sekunde zurücksetzen
        setTimeout(() => {
            fish.material.emissive.set(0x000000);
        }, 1000);
    }
    }
        

    function showInfoPanel(fish: any) {
        // Hier könntest du Informationen über den Fisch im Info-Panel anzeigen
        if(fish.userData.name){
            infoPanel.innerHTML = fish.userData.name; // Beispiel: Zeige den Namen des Fisches an
            infoPanel.style.display = 'block'; // Zeige das Info-Panel an
            // Postioniere das Info-Panel an der Fischposition
            const vector = new THREE.Vector3();
            vector.setFromMatrixPosition(fish.matrixWorld);
            const widthHalf = window.innerWidth / 2;
            const heightHalf = window.innerHeight / 2;
            vector.project(camera);
            const x = (vector.x * widthHalf) + widthHalf;
            const y = -(vector.y * heightHalf) + heightHalf;
            infoPanel.style.left = x + 'px';
            infoPanel.style.top = y + 'px';
            // Verstecke das Info-Panel nach 5 Sekunden
            setTimeout(() => {
                infoPanel.style.display = 'none';
            }, 1000);
        }
    }

    let lastUpdateTime = 0;
    const updateInterval = 100; // Aktualisierung alle 100 Millisekunden

    function animate() {
        requestAnimationFrame(animate);
        render();
        stats.update();
        if(mixerStarted){
            update();
        }
    }

    function update() {
        const currentTime = performance.now();
        const deltaTime = currentTime - lastUpdateTime;

        for (let mixer of mixers) {
            if (deltaTime >= updateInterval) {
                mixer.update(deltaTime * 0.001); // deltaTime in Sekunden umwandeln
                lastUpdateTime = currentTime;
            }
        }
    }

    function render() {

    const time = performance.now() * 0.001;

    // mesh.position.y = Math.sin( time ) * 20 + 5;
    // mesh.rotation.x = time * 0.5;
    // mesh.rotation.z = time * 0.51;

    water.material.uniforms[ 'time' ].value += 1.0 / 600.0;

    renderer.render( scene, camera );

    }


        function moveFish(fish: any) {
            const maxPosition = 100;
            const minPosition = -100;
            const moveSpeed = 0.1;
            const moveInterval = 10;
            const minWaitTime = 1000; // Minimum wait time in milliseconds
            const maxWaitTime = 10000; // Maximum wait time in milliseconds

            const randRange = (minimum: number, maximum: number) => {
                return Math.random() * (maximum - minimum) + minimum;
            }

            const move = () => {
                // final position after moving
                const destination = {
                    x: randRange(minPosition, maxPosition),
                    y: randRange(minPosition, maxPosition),
                    z: randRange(minPosition, maxPosition)
                };

                const startPosition = {
                    x: fish.position.x,
                    y: fish.position.y,
                    z: fish.position.z
                };

                // movement from start to destination
                const completeMovement = {
                    x: destination.x - startPosition.x,
                    y: destination.y - startPosition.y,
                    z: destination.z - startPosition.z
                };

                const movementLength = Math.sqrt(completeMovement.x ** 2 + completeMovement.y ** 2 + completeMovement.z ** 2);
                // movement during every moveOnce
                const movementStep = {
                    x: completeMovement.x / movementLength * moveSpeed,
                    y: completeMovement.y / movementLength * moveSpeed,
                    z: completeMovement.z / movementLength * moveSpeed
                };

                // Calculate rotations
                // assuming
                //
                //      y
                //      |__x
                //     /
                //    z
                const rotationY = Math.atan2(completeMovement.x, completeMovement.z);

                let progress = 0;


                const moveOnce = () => {

                    if (progress >= 1) {
                        const waitTime = randRange(minWaitTime, maxWaitTime);
                        setTimeout(move, waitTime);
                        return;
                    }
                    fish.rotation.y = rotationY;
                    fish.position.x += movementStep.x;
                    fish.position.y += movementStep.y
                    fish.position.z += movementStep.z;

                    progress += moveSpeed / movementLength;

                    setTimeout(moveOnce, moveInterval);
                };

                moveOnce();
            };

            move();
        }

    onMount(async () => {
            fische = await fetchFisch();
            init();
            animate();
        });
  
    onDestroy(() => {
      // Aufräumen, wenn die Komponente zerstört wird

    });
  </script>
  
  <style>
    /* Hier könntest du CSS-Stile für deine Szene definieren */
    #container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: fit-content;
      overflow: hidden;
    }
  </style>
  <div id="container"></div>