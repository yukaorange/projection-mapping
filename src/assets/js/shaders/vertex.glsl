precision mediump float;

#include './modules/noise.glsl'

attribute vec3 aPosition;

uniform mat4 uProjectorModelMatrix;
uniform mat4 uProjectorViewMatrix;
uniform mat4 uProjectorProjectionMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vTexCoords;
varying vec4 vWorldPosition;

void main() {
  vUv = uv;

  vec3 transformed = aPosition + position;

  vNormal = mat3(modelMatrix) * normal;

  vWorldPosition = modelMatrix * vec4(transformed, 1.0);

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(transformed, 1.0);

}
