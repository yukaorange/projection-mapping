import GSAP from 'gsap'

import { InstancedMesh, InstancedBufferAttribute } from 'three'

import * as THREE from 'three'

import ProjectedMaterial from '../material/ProjectedMaterial'

export default class InstancedPlane {
  constructor({ texture, element, sizes, device, instanceCount }) {
    this.texture = texture

    this.instanceCount = instanceCount

    this.createGeometry()

    this.createMaterial()

    this.sizes = sizes

    this.element = element

    this.device = device

    this.texture = this.material.uniforms.uTexture.value

    this.createMesh()

    this.calculateBounds({
      sizes: this.sizes,
      device: this.device
    })

    this.updateInstanceProperty()
  }

  createGeometry() {
    this.geometry = new THREE.BoxGeometry(1, 1, 0.25, 100, 100)
    // this.geometry = new THREE.PlaneGeometry(1, 1, 100, 100)
  }

  createMaterial() {
    this.material = new ProjectedMaterial({
      texture: this.texture,
      instanceCount: this.instanceCount
    })
  }

  createMesh() {
    this.mesh = new InstancedMesh(
      this.geometry,
      this.material,
      this.instanceCount
    )
  }

  calculateBounds({ sizes, device }) {
    this.sizes = sizes

    this.device = device

    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()

    this.updateX()

    this.updateY()
  }

  calclateMatrixToProjection() {
    const count = Math.sqrt(this.instanceCount)
    const frameWidth = this.mesh.scale.x * count
    const frameHeight = this.mesh.scale.y * count

    this.x = this.bounds.left / window.innerWidth

    this.y = this.bounds.top / window.innerHeight

    this.standardPositionX =
      -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width

    this.standardPositionY =
      this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height

    const cellWidth = frameWidth / count
    const cellHeight = frameHeight / count
    const cellDepth = 0.01

    for (let i = 0; i < this.instanceCount; i++) {
      const row = Math.floor(i / count)
      const col = i % count

      let x = this.standardPositionX + col * cellWidth
      let y = this.standardPositionY - row * cellHeight

      const scaleMatrix = new THREE.Matrix4()

      scaleMatrix.makeScale(cellWidth, cellHeight, cellDepth)

      const translateMatrix = new THREE.Matrix4()

      translateMatrix.makeTranslation(x, y, 0)

      translateMatrix.multiply(scaleMatrix)

      this.mesh.setMatrixAt(i, translateMatrix)
    }
  }

  // calclateMatrixToSphere() {
  //   const radius = 2
  //   const matrices = new Float32Array(this.instanceCount * 16)

  //   const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  //   for (let i = 0; i < this.instanceCount; i++) {
  //     const theta = i * goldenAngle // 方位角
  //     const phi = Math.acos(1 - (2 * (i + 0.5)) / this.instanceCount) // 仰角

  //     const x = radius * Math.sin(phi) * Math.cos(theta)
  //     const y = radius * Math.sin(phi) * Math.sin(theta)
  //     const z = radius * Math.cos(phi)

  //     const position = new THREE.Vector3(x, y, z)
  //     const target = new THREE.Vector3(0, 0, 0)
  //     const up = new THREE.Vector3(0, 1, 0)

  //     const rotateMatrix = new THREE.Matrix4()
  //     rotateMatrix.lookAt(position, target, up)

  //     const scaleMatrix = new THREE.Matrix4()
  //     scaleMatrix.makeScale(0.1, 0.1, 0.1)

  //     const matrix = new THREE.Matrix4()
  //     matrix.multiply(rotateMatrix)
  //     matrix.multiply(scaleMatrix)
  //     matrix.setPosition(position)

  //     matrix.toArray(matrices, i * 16)
  //   }

  //   const matrixData = new Float32Array(matrices)

  //   const instancedMatrixAttribute = new THREE.InstancedBufferAttribute(
  //     matrixData,
  //     16,
  //     false
  //   )

  //   this.mesh.geometry.setAttribute('aSphereMatrix', instancedMatrixAttribute)
  // }

  calclateMatrixToTriangle(n = 3) {
    const baseRadius = 3
    const matrices = new Float32Array(this.instanceCount * 16)
    const numLayers = 8
    const layerHeightOffset = 0.1

    function getPolygonPos(n, t, radius) {
      const an = (Math.PI * 2) / n
      const a = an / 2.0
      const b = t / an
      const x =
        ((Math.cos(a) * Math.cos(t)) / Math.cos(an * (b - Math.floor(b)) - a)) *
        radius
      const y =
        ((Math.cos(a) * Math.sin(t)) / Math.cos(an * (b - Math.floor(b)) - a)) *
        radius
      return { x, y }
    }

    for (let i = 0; i < this.instanceCount; i++) {
      const layer = Math.floor(i / (this.instanceCount / numLayers))

      const indexInLayer = i % (this.instanceCount / numLayers)

      let height = layer * layerHeightOffset

      height = height - numLayers * layerHeightOffset * 1

      const radius = baseRadius + layer * 0.2

      const t =
        ((Math.PI * 2) / (this.instanceCount / numLayers)) * indexInLayer

      const pos = getPolygonPos(n, t, radius)

      const position = new THREE.Vector3(pos.x, pos.y, pos.z)
      const target = new THREE.Vector3(0, 0, 0)
      const up = new THREE.Vector3(0, 1, 0)

      const rotateMatrix = new THREE.Matrix4()
      rotateMatrix.lookAt(position, target, up)

      const scaleMatrix = new THREE.Matrix4()
      scaleMatrix.makeScale(0.1, 0.1, 0.1)

      const matrix = new THREE.Matrix4()
      matrix.multiply(rotateMatrix)
      matrix.multiply(scaleMatrix)
      matrix.setPosition(pos.x, pos.y, height)

      matrix.toArray(matrices, i * 16)
    }

    const matrixData = new Float32Array(matrices)

    const instancedMatrixAttribute = new THREE.InstancedBufferAttribute(
      matrixData,
      16,
      false
    )

    this.mesh.geometry.setAttribute('aTriangleMatrix', instancedMatrixAttribute)
  }

  addIndices() {
    const indices = new Float32Array(this.instanceCount)

    for (let i = 0; i < this.instanceCount; i++) {
      indices[i] = i
    }

    const indexAttribute = new THREE.InstancedBufferAttribute(indices, 1)

    this.mesh.geometry.setAttribute('aInstanceIndex', indexAttribute)
  }

  updateInstanceProperty({ n = 3 } = {}) {
    this.calclateMatrixToProjection()

    // this.calclateMatrixToSphere()

    this.calclateMatrixToTriangle(n)

    this.addIndices()

    this.mesh.instanceMatrix.needsUpdate = true
  }

  /**
   * Animations
   */
  show() {
    GSAP.fromTo(
      this.mesh.material.uniforms.uAlpha,
      {
        value: 0
      },
      {
        value: 1
      }
    )
  }

  hide() {
    GSAP.to(this.mesh.material.uniforms.uAlpha, {
      value: 0
    })
  }
  /**
   * events
   */
  onResize(value) {
    this.calculateBounds(value)

    this.updateInstanceProperty({
      n: 3
    })

    if (this.material) {
      const scales = {
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        standardPositionX: this.standardPositionX,
        standardPositionY: this.standardPositionY,
        mesh: this.mesh
      }

      this.material.onResize(scales)
    }
  }

  /**
   * update
   */

  updateScale() {
    const count = Math.sqrt(this.instanceCount)
    this.width = this.bounds.width / window.innerWidth
    this.height = this.bounds.height / window.innerHeight
    this.scaleX = this.sizes.width * this.width
    this.scaleY = this.sizes.height * this.height
    this.mesh.scale.x = this.scaleX / count
    this.mesh.scale.y = this.scaleY / count
  }

  updateX(x = 0) {}

  updateY(y = 0) {}

  update({ scroll, time, texture }) {
    this.updateX(scroll.x)

    this.updateY(scroll.y)

    this.material.uniforms.uTexture.value = texture

    this.material.uniforms.uTime.value += time.delta
  }

  setParameter(params) {
    this.mesh.material.uniforms.uAlpha.value = params.alpha
  }
}
