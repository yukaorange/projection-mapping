import map from 'lodash/map'
import GSAP from 'gsap'

import { PlaneGeometry } from 'three'

import * as THREE from 'three'

import InstancedPlane from './mesh/InstancedPlane'
import ProjectedMaterial from './material/ProjectedMaterial'
import SDF from './sdf/SDF'

export default class Home {
  constructor({ scene, renderer, sizes, device }) {
    this.scene = scene

    this.renderer = renderer

    this.sizes = sizes

    this.device = device

    this.element = document.querySelector('.gl-layer__gallery')

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scrollCurrent = {
      //this is necessary to memolize touchstart position.
      x: 0,
      y: 0
    }

    this.scroll = {
      x: 0,
      y: 0
    }

    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.createSDF()

    this.createInstancedMesh()

    this.scene.add(this.instancedPlane.mesh)

    this.createHelper()

    this.onResize({
      sizes: this.sizes,
      device: this.device
    })

    this.show()
  }

  createSDF() {
    this.sdf = new SDF({
      device: this.device,
      sizes: this.sizes
    })
  }

  createSDFTexture({ time }) {
    this.sdf.update(time)

    let currentRenderTarget = this.renderer.getRenderTarget()

    this.renderer.setRenderTarget(this.sdf.rendererTargetA)

    this.renderer.render(this.sdf.scene, this.sdf.camera)

    this.renderer.setRenderTarget(currentRenderTarget)

    let temp = this.sdf.rendererTargetA

    this.sdf.rendererTargetA = this.sdf.rendererTargetB

    this.sdf.rendererTargetB = temp

    this.sdf.mesh.material.uniforms.uBackBuffer.value =
      this.sdf.rendererTargetB.texture
  }

  createInstancedMesh() {
    this.texture = window.TEXTURES['1']

    this.instancedPlane = new InstancedPlane({
      texture: this.texture,
      element: this.element,
      sizes: this.sizes,
      device: this.device,
      instanceCount: 400
    })
  }

  createHelper() {
    this.cameraHelper = new THREE.CameraHelper(
      this.instancedPlane.material.projector
    )

    this.axesHelper = new THREE.AxesHelper(5)

    this.scene.add(this.cameraHelper)

    this.scene.add(this.axesHelper)
  }

  /**
   * animate
   */

  show() {
    this.instancedPlane.show()
  }

  hide() {
    this.instancedPlane.hide()
  }

  /**
   * events
   */
  onResize(values) {
    if (this.instancedPlane) {
      this.instancedPlane.onResize(values)
    }

    if (this.sdf) {
      this.sdf.onResize(values)
    }
  }

  onTouchDown({ x, y }) {
    this.speed.target = 1
    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }

  onTouchMove({ x, y }) {
    const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    this.x.target = this.scrollCurrent.x - xDistance
    this.y.target = this.scrollCurrent.y - yDistance
  }

  onTouchUp({ x, y }) {
    this.speed.target = 0
  }

  onWheel({ pixelX, pixelY }) {
    this.x.target -= pixelX
    this.y.target -= pixelY
  }

  /**
   * update
   */
  update({ scroll, time, params }) {
    if (!this.sdf) return

    this.createSDFTexture({ time: time })

    if (!this.instancedPlane) return

    this.instancedPlane.update({
      scroll: scroll,
      time: time,
      texture: this.sdf.rendererTargetB.texture
    })
  }

  setParameter(params) {
    this.instancedPlane.setParameter(params)
  }

  /**
   * destroy
   */
  destroy() {
    this.scene.remove(this.instancedPlane.mesh)
  }
}
