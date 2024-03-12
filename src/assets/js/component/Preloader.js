import Component from '@js/class/Component'
import each from 'lodash/each'
import GSAP from 'gsap'
import { TextureLoader } from 'three'

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        loading: '.preloader__loading',
        text: '.preloader__text',
        assets: '.preloader__assets'
      }
    })

    window.TEXTURES = {}

    this.length = 0

    this.createLoader()
  }

  createLoader() {
    this.assets = [...this.elements.assets.querySelectorAll('img')]

    this.totalAssetsLength = this.assets.length

    this.textureLoader = new TextureLoader()

    this.assets.forEach(imageDom => {
      const image = new Image()

      const id = imageDom.getAttribute('data-id')

      image.crossOrigin = 'anonymous'

      image.src = imageDom.getAttribute('data-src')

      image.onload = async () => {
        this.textureLoader.load(image.src, texture => {
          texture.needsUpdate = true

          window.TEXTURES[id] = texture

          this.onAssetLoaded()
        })
      }

      image.onerror = error => {
        console.error('An error happened while loading a texture', error)
      }
    })
  }

  onAssetLoaded() {
    this.length += 1

    const percent = this.length / this.totalAssetsLength

    this.elements.text.innerHTML = `${Math.round(percent * 100)}%`

    if (this.length === this.totalAssetsLength) {
      this.onLoaded()
    }
  }

  onLoaded() {
    return new Promise(resolve => {
      this.emit('completed')
      this.destroy()
      resolve()
    })
  }

  /**
   * destroy
   */

  destroy() {
    this.element.parentNode.removeChild(this.element)
  }
}
