precision mediump float;

const float PI = 3.1415926535897932384626433832795;
attribute mat4 aSphereMatrix;
attribute mat4 aCrossMatrix;

uniform mat4 uProjectorModelMatrix;
uniform mat4 uProjectorViewMatrix;
uniform mat4 uProjectorProjectionMatrix;
uniform float uCount;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vTexCoords;
varying vec4 vWorldPosition;

void main() {
  vUv = uv;

  //projectionMappingPosition
  vec4 projectionMappingPosition = instanceMatrix * vec4(position, 1.0);

  vNormal = normalize(normalMatrix * normal);

  vWorldPosition = projectionMappingPosition;

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  //spherePosition
  vec4 spherePosition = vec4(position, 1.0);
  spherePosition = aSphereMatrix * spherePosition;

  //crossPosition
  vec4 crossPosition = vec4(position, 1.0);
  crossPosition = aCrossMatrix * crossPosition;

  //select position
  vec4 selectedPosition;
  selectedPosition = projectionMappingPosition;
  selectedPosition = spherePosition;
  selectedPosition = crossPosition;

  gl_Position = projectionMatrix * viewMatrix * selectedPosition;
}
