import GSAP from 'gsap'

import { InstancedMesh, InstancedBufferAttribute } from 'three'

import * as THREE from 'three'

export default class InstancedPlane {
  constructor({ geometry, material, element, sizes, device, instanceCount }) {
    this.geometry = geometry

    this.material = material

    this.sizes = sizes

    this.element = element

    this.device = device

    this.texture = this.material.uniforms.uTexture.value

    this.instanceCount = instanceCount

    this.createMesh()

    this.calculateBounds({
      sizes: this.sizes,
      device: this.device
    })

    this.updateInstanceProperty()
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

  updateInstanceProperty() {
    const count = Math.sqrt(this.instanceCount)
    const frameWidth = this.mesh.scale.x * count
    const frameHeight = this.mesh.scale.y * count


    const cellWidth = frameWidth / count
    const cellHeight = frameHeight / count

    for (let i = 0; i < this.instanceCount; i++) {
      const row = Math.floor(i / count)
      const col = i % count

      let x = col - count / 2
      let y = row - count / 2

      if (x >= 0) {
        x += 1
      }
      if (y >= 0) {
        y += 1
      }

      if (x >= 0) {
        x = x * cellWidth - cellWidth / 2
      } else {
        x = x * cellWidth + cellWidth / 2
      }

      if (y >= 0) {
        y = y * cellHeight - cellHeight / 2
      } else {
        y = y * cellHeight + cellHeight / 2
      }

      const matrix = new THREE.Matrix4()

      matrix.makeTranslation(x, y, 0)

      const scaleMatrix = new THREE.Matrix4()

      scaleMatrix.makeScale(cellWidth, cellHeight, 1)

      matrix.multiply(scaleMatrix)

      this.mesh.setMatrixAt(i, matrix)
    }

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

    this.updateInstanceProperty()
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

  updateX(x = 0) {
    // this.x = (this.bounds.left + x) / window.innerWidth
    // this.mesh.position.x =
    //   -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width
  }

  updateY(y = 0) {
    // this.y = (this.bounds.top + y) / window.innerHeight
    // this.mesh.position.y =
    //   this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height
  }

  update({ scroll, speed }) {
    this.updateX(scroll.x)

    this.updateY(scroll.y)
  }

  setParameter(params) {
    this.mesh.material.uniforms.uAlpha.value = params.alpha
  }
}
