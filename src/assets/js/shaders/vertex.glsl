precision mediump float;

const float PI = 3.1415926535897932384626433832795;
const float goldenAngle = PI * (3.0 - sqrt(5.0));

// attribute mat4 aSphereMatrix;
attribute mat4 aTriangleMatrix;
attribute float aInstanceIndex;

uniform mat4 uProjectorModelMatrix;
uniform mat4 uProjectorViewMatrix;
uniform mat4 uProjectorProjectionMatrix;
uniform float uCount;
uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vTexCoords;
varying vec4 vWorldPosition;

vec4 rotateY(vec4 position, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  mat4 rotationMatrix = mat4(c, 0.0, -s, 0.0, 0.0, 1.0, 0.0, 0.0, s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0);
  return rotationMatrix * position;
}

vec3 calculateSpherePosition(float index, float radius) {
  float theta = index * goldenAngle;
  float phi = acos(1.0 - 2.0 * (index + 0.5) / uCount);
  float x = radius * sin(phi) * cos(theta);
  float y = radius * sin(phi) * sin(theta);
  float z = radius * cos(phi);
  return vec3(x, y, z);
}

vec4 calcScaling(vec4 position, float scale) {
  mat4 scalingMatrix = mat4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0);
  return scalingMatrix * position;
}


mat4 lookAt(vec3 source, vec3 target) {
    vec3 f = normalize(target - source); // forward vector
    vec3 up = vec3(0.0, 1.0, 0.0); // Up vector
    vec3 s = normalize(cross(f, up)); // Side vector
    vec3 u = cross(s, f); // Recompute up vector

    mat4 result = mat4(
        vec4(s, 0.0),
        vec4(u, 0.0),
        vec4(-f, 0.0), // forward vector is negated
        vec4(0.0, 0.0, 0.0, 1.0)
    );

    return result * mat4(
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        -source.x, -source.y, -source.z, 1.0 // Apply translation
    );
}

void main() {
  vUv = uv;

  //projectionMappingPosition
  vec4 projectionMappingPosition = instanceMatrix * vec4(position, 1.0);

  vNormal = normalize(normalMatrix * normal);

  vWorldPosition = projectionMappingPosition;

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  //trianglePosition
  vec4 trianglePosition = vec4(position, 1.0);
  trianglePosition = aTriangleMatrix * trianglePosition;

  //spherePosition
  // vec4 spherePosition = vec4(position, 1.0);
  // spherePosition = aSphereMatrix * spherePosition;

  float sphereRadius = 2.0;

  vec3 spherePos = calculateSpherePosition(aInstanceIndex, sphereRadius);

  mat4 lookAtMatrix = lookAt(spherePos, vec3(0.0, 0.0, 0.0));
  vec4 rotatedPosition = lookAtMatrix * vec4(position, 1.0);
  vec4 scaledPos = calcScaling(rotatedPosition, 0.1);

  vec3 result = scaledPos.xyz + spherePos;

  vec4 spherePosition = vec4(result, 1.0);

  //select position
  vec4 selectedPosition;

  selectedPosition = projectionMappingPosition;
  selectedPosition = trianglePosition;
  selectedPosition = spherePosition;

  float rotationAngle = uTime * 0.1;

  selectedPosition = rotateY(selectedPosition, rotationAngle);

  vec4 resultPosition = projectionMatrix * viewMatrix * selectedPosition;

  gl_Position = resultPosition;
}
