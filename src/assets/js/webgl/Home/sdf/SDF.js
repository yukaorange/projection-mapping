import * as THREE from 'three'

import vertex from '@js/shaders/sdf-vertex.glsl'
import fragment from '@js/shaders/sdf-fragment.glsl'

export default class SDF {
  constructor({ device, sizes }) {
    this.device = device

    this.sizes = sizes

    this.aspect = this.sizes.width / this.sizes.height

    this.createGeometry()

    this.createMaterial()

    this.createMesh()

    this.createCamera()

    this.createScene()

    this.createRenderTargets()

    this.onResize()

    this.scene.add(this.mesh, this.camera)
  }

  createGeometry() {
    this.geometry = new THREE.PlaneGeometry(2, 2, 10, 10)
  }

  createMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        },
        uBackBuffer: { value: null }
      }
    })
  }

  createMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.aspect, 0.01, 5)

    this.camera.position.set(0, 0, 5)

    this.camera.lookAt(0, 0, 0)
  }

  createScene() {
    this.scene = new THREE.Scene()
  }

  createRenderTargets() {
    this.rendererTargetA = new THREE.WebGLRenderTarget(1024, 1024)

    this.rendererTargetB = new THREE.WebGLRenderTarget(1024, 1024)
  }

  onResize(values) {
    this.camera.updateProjectionMatrix()
  }

  update(time) {
    this.material.uniforms.uTime.value = time.current
  }
}
