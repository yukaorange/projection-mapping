precision mediump float;

#include './modules/noise.glsl'

uniform mat4 uProjectorModelMatrix;
uniform mat4 uProjectorViewMatrix;
uniform mat4 uProjectorProjectionMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vTexCoords;
varying vec4 vWorldPosition;

void main() {
  vUv = uv;

  vec4 transformedPosition = instanceMatrix * vec4(position, 1.0);

  vNormal = normalize(normalMatrix * normal);

  vWorldPosition = transformedPosition;

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  gl_Position = projectionMatrix * viewMatrix * transformedPosition;

}
