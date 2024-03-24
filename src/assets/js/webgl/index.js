import GSAP from 'gsap'
import { PerspectiveCamera, WebGLRenderer, Scene, Clock } from 'three'

import { Pane } from 'tweakpane'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Home from './Home'

export default class Canvas {
  constructor({ template, dom, device }) {
    this.template = template

    this.container = dom

    this.device = device

    this.renderInterval = this.isMobile ? 1000 / 30 : 1000 / 60

    this.x = {
      start: 0,
      end: 0
    }

    this.y = {
      start: 0,
      end: 0
    }

    this.time = {
      current: 0,
      previous: 0,
      delta: 0
    }

    this.createRenderer()

    this.createScene()

    this.createCamera()

    this.createPane()

    this.createControls()

    this.createClock()

    this.onResize(this.device)
  }

  createRenderer() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    })

    this.renderer.setClearColor(0x000000, 0)

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.container.appendChild(this.renderer.domElement)
  }

  createScene() {
    this.scene = new Scene()
  }

  createCamera() {
    const fov = 45
    const aspect = window.innerWidth / window.innerHeight
    const near = 0.1
    const far = 1000

    this.camera = new PerspectiveCamera(fov, aspect, near, far)

    this.camera.position.z = 5
  }

  createPane() {
    this.pane = new Pane()

    this.PARAMS = {
      alpha: 1,
      progress: 0
    }

    this.pane.addBinding(this.PARAMS, 'alpha', {
      min: 0,
      max: 1,
      step: 0.01
    })

    this.pane.addBinding(this.PARAMS, 'progress', {
      min: 0,
      max: 1,
      step: 0.01
    })
  }

  createControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
  }

  createClock() {
    this.clock = new Clock()
  }

  /**home */
  createHome() {
    this.home = new Home({
      scene: this.scene,
      renderer: this.renderer,
      sizes: this.sizes,
      device: this.device
    })
  }

  destroyHome() {
    this.home.destroy()
  }

  /**animation */
  addAnimationsParam(animationsParam) {
    this.animationsParam = animationsParam

    if (this.home) {
      this.home.addAnimationsParam(this.animationsParam)
    }
  }

  /**
   * events
   */

  onPreloaded() {
    this.onChangeEnd(this.template)
  }

  onChangeStart(template) {
    if (this.template !== template && template !== 'home') {
      this.home.hide()
    }

    this.template = this.template !== template ? template : this.template
  }

  onChangeEnd(template) {
    if (template == 'home') {
      this.createHome()
    } else {
      this.destroyHome()
    }
  }

  onResize(device) {
    this.renderer.setSize(window.innerWidth, window.innerHeight) //expand canvas to full screen.

    const aspect = window.innerWidth / window.innerHeight

    const fov = this.camera.fov * (Math.PI / 180) // default camera.fov = 45deg. result fov is in radians. (1/4 PI rad)

    const height = 2 * Math.tan(fov / 2) * this.camera.position.z //z = 5 is setted at this.createCamera

    const width = height * aspect //To fit clip space to screen.

    this.renderInterval = this.isMobile ? 1000 / 30 : 1000 / 60

    this.sizes = {
      //Calclated viewport space sizes.
      height: height,
      width: width
    }

    const values = {
      sizes: this.sizes,
      device: device
    }

    if (this.home) {
      this.home.onResize(values)
    }

    this.camera.aspect = aspect

    this.camera.updateProjectionMatrix()
  }

  onTouchDown(event) {
    this.isDown = true

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchDown(values)
    }

    if (this.collections) {
      this.collections.onTouchDown(values)
    }

    if (this.detail) {
      this.detail.onTouchDown(values)
    }

    if (this.home) {
      this.home.onTouchDown(values)
    }
  }

  onTouchMove(event) {
    if (!this.isDown) return

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchMove(values)
    }

    if (this.collections) {
      this.collections.onTouchMove(values)
    }

    if (this.detail) {
      this.detail.onTouchMove(values)
    }

    if (this.home) {
      this.home.onTouchMove(values)
    }
  }

  onTouchUp(event) {
    this.isDown = false

    const x = event.changedTouches
      ? event.changedTouches[0].clientX
      : event.clientX
    const y = event.changedTouches
      ? event.changedTouches[0].clientY
      : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchUp(values)
    }

    if (this.collections) {
      this.collections.onTouchUp(values)
    }

    if (this.detail) {
      this.detail.onTouchUp(values)
    }

    if (this.home) {
      this.home.onTouchUp(values)
    }
  }

  onWheel({ pixelX, pixelY }) {
    if (this.collections) {
      // if (this.transition && this.transition.isTransitioning) return;

      this.collections.onWheel({ pixelX, pixelY })
    }

    if (this.home) {
      this.home.onWheel({ pixelX, pixelY })
    }
  }

  /**loop */

  update({ scroll, device }) {
    const ElapsedTime = this.clock.getElapsedTime()

    this.time.delta = this.time.current - this.time.previous

    this.time.previous = this.time.current

    this.time.current = ElapsedTime

    if (this.home) {
      this.home.update({
        scroll: scroll,
        time: this.time,
        params: this.PARAMS
      })
    }

    this.renderer.render(this.scene, this.camera)
    if (this.time.delta > this.renderInterval) {

      this.time.previous =
        this.time.current - (this.time.delta % this.renderInterval)
    }
  }
}
