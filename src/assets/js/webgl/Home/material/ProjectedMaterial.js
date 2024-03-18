import { ShaderMaterial } from 'three'
import * as THREE from 'three'

import { PerspectiveCamera } from 'three'

import vertex from '@js/shaders/vertex.glsl'
import fragment from '@js/shaders/fragment.glsl'

export default class ProjectedMaterial extends ShaderMaterial {
  constructor({ texture, instanceCount }) {
    let width = texture.source.data.width

    let height = texture.source.data.height

    let aspect = width / height

    const projector = new PerspectiveCamera(45, aspect, 0.01, 5)

    projector.position.set(0, 0, 5)

    projector.lookAt(0, 0, 0)

    projector.updateProjectionMatrix()

    projector.updateMatrixWorld()

    projector.updateWorldMatrix()

    const projectorViewMatrix = projector.matrixWorldInverse.clone()

    const projectorProjectionMatrix = projector.projectionMatrix.clone()

    const projectorModelMatix = projector.matrixWorld.clone()

    const projectorPosition = projector.position.clone()

    super({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      uniforms: {
        uTextureAspectX: { value: null },
        uTextureAspectY: { value: null },
        uTexture: { value: texture },
        uProjectorProjectionMatrix: { value: projectorProjectionMatrix },
        uProjectorViewMatrix: { value: projectorViewMatrix },
        uProjectorModelMatrix: { value: projectorModelMatix },
        uProjectorPosition: { value: projectorPosition },
        uCount: { value: instanceCount },
        uAlpha: { value: 1 },
        uTime: { value: 0 }
      }
    })

    this.texture = texture

    this.projector = projector
  }

  update() {}

  onResize(scales) {
    const targetPosition = new THREE.Vector3(
      scales.mesh.position.x +
        scales.standardPositionX +
        scales.scaleX / 2 -
        scales.mesh.scale.x / 2,
      scales.mesh.position.y +
        scales.standardPositionY -
        scales.scaleY / 2 +
        scales.mesh.scale.y / 2,
      5
    )

    this.projector.position.set(
      targetPosition.x,
      targetPosition.y,
      targetPosition.z
    )

    this.projector.lookAt(targetPosition.x, targetPosition.y, 0)

    this.projector.aspect = scales.scaleX / scales.scaleY

    const aspectX = scales.scaleX / scales.scaleY
    const aspectY = scales.scaleY / scales.scaleX

    const distance = this.projector.position.z

    const halfHeight = scales.scaleY / 2

    const rad = Math.PI / 180

    const fov = (Math.tan(halfHeight / distance) * 2) / rad

    this.textureAspectX =
      this.texture.source.data.width / this.texture.source.data.height

    this.textureAspectY =
      this.texture.source.data.height / this.texture.source.data.width

    this.projector.fov = fov

    this.projector.updateProjectionMatrix()

    this.projector.updateMatrixWorld()

    this.projector.updateWorldMatrix()

    this.uniforms.uProjectorProjectionMatrix.value =
      this.projector.projectionMatrix

    this.uniforms.uProjectorViewMatrix.value = this.projector.matrixWorldInverse

    this.uniforms.uProjectorModelMatrix.value = this.projector.matrixWorld

    this.uniforms.uTextureAspectX.value = aspectX / this.textureAspectX

    this.uniforms.uTextureAspectY.value = aspectY / this.textureAspectY
  }
}
