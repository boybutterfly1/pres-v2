<template>
  <div ref="container" class="w-1/3 aspect-square" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, ref } from 'vue'
import {AmbientLight, DirectionalLight} from "three";

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.set(0, 50, 120)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 0)
  camera.add(light)          // 👈 прикрепляем к камере
  scene.add(camera)          // 👈 не забудь добавить камеру как объект сцены

  function initAmbientLight(): AmbientLight {
    const color = 0xFFFFFF;
    const intensity = 1;
    return new THREE.AmbientLight(color, intensity);
  }
  function initDirectionalLight(): DirectionalLight {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-3, 0, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 500;
    light.shadow.mapSize.height = 500;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;

    return light;
  }
  const directionalLight = initDirectionalLight()
  const ambientLight = initAmbientLight()
  scene.add(ambientLight);
  scene.add(directionalLight);

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = false
  controls.dampingFactor = 0.05

  let isUserInteracting = false
  controls.addEventListener('start', () => {
    isUserInteracting = true
  })
  controls.addEventListener('end', () => {
    isUserInteracting = false
  })

  let modelGroup: THREE.Group | null = null

  const loader = new GLTFLoader()
  loader.load(
      '/model/globe.glb',
      (gltf) => {
        modelGroup = gltf.scene
        modelGroup.position.set(0,0,0)

        scene.add(modelGroup)

        animate()
      },
      undefined,
      (error) => {
        console.error('Ошибка загрузки модели:', error)
      }
  )

  // const loader = new OBJLoader();
  // loader.load(
  //     'model/model.obj',
  //     function ( object ) {
  //
  //       scene.add( object );
  //
  //     },
  //     function ( xhr ) {
  //     },
  //     function ( error ) {
  //       console.log( 'An error happened' );
  //     }
  // );

  const animate = () => {
    requestAnimationFrame(animate)

    if (modelGroup && !isUserInteracting) {
      modelGroup.rotation.y += 0.003 // автовращение
    }

    controls.update()
    renderer.render(scene, camera)
  }

  window.addEventListener('resize', () => {
    if (!container.value) return
    camera.aspect = container.value.clientWidth / container.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  })
})
</script>

<style scoped>
</style>
