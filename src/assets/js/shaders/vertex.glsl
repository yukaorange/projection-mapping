precision mediump float;

const float PI = 3.1415926535897932384626433832795;
const float goldenAngle = PI * (3.0 - sqrt(5.0));

// attribute mat4 aSphereMatrix;
// attribute mat4 aTriangleMatrix;
attribute float aInstanceIndex;

uniform mat4 uProjectorModelMatrix;
uniform mat4 uProjectorViewMatrix;
uniform mat4 uProjectorProjectionMatrix;

uniform float uCount;
uniform float uTime;
uniform float uProgress;
uniform float uAnimation01;
uniform float uAnimation02;
uniform float uAnimation03;
uniform float uAnimation04;

uniform bool uIsMobile;

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

vec4 rotateZ(vec4 position, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  mat4 rotationMatrix = mat4(c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  return rotationMatrix * position;
}

vec4 calcScaling(vec4 position, float scale) {
  mat4 scalingMatrix = mat4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0);
  return scalingMatrix * position;
}

mat4 lookAt(vec3 source, vec3 target) {
  vec3 f = normalize(target - source);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 s = normalize(cross(up, f));
  vec3 u = cross(f, s);

  mat4 result = mat4(vec4(s, 0.0), vec4(u, 0.0), vec4(-f, 0.0), vec4(0.0, 0.0, 0.0, 1.0));

  return result;
}

vec3 calcSpherePos(float index, float radius) {
  float theta = index * goldenAngle;
  float phi = acos(1.0 - 2.0 * (index + 0.5) / uCount);
  float x = radius * sin(phi) * cos(theta);
  float y = radius * sin(phi) * sin(theta);
  float z = radius * cos(phi);
  return vec3(x, y, z);
}

vec2 calcPolygonPos(float n, float t, float radius) {
  float an = 2.0 * PI / n;
  float a = an * 0.5;
  float b = t / an;
  float x = cos(a) * cos(t) / cos(an * (b - floor(b)) - a) * radius;
  float y = cos(a) * sin(t) / cos(an * (b - floor(b)) - a) * radius;
  return vec2(x, y);
}

void main() {
  vUv = uv;

  //projectionMappingPosition↓

  vec4 projectionMappingPosition = instanceMatrix * vec4(position, 1.0);

  vNormal = normalize(normalMatrix * normal);

  vWorldPosition = projectionMappingPosition;

  vTexCoords = uProjectorProjectionMatrix * uProjectorViewMatrix * vWorldPosition;

  //trianglePosition↓

  vec4 trianglePosition;

  float triangleWidth;
  float triangleSize;

  if(uIsMobile) {
    triangleWidth = 1.0;
    triangleSize = 0.1;
  } else {
    triangleWidth = 3.0;
    triangleSize = 0.12;
  }

  float numLayers_tri = 8.0;
  float layerHeightOffset_tri = 0.01;
  float layer_tri = floor(aInstanceIndex / (uCount / numLayers_tri));

  float indexInLayer = mod(aInstanceIndex, (uCount / numLayers_tri));

  float height = (layer_tri * layerHeightOffset_tri) - (numLayers_tri * layerHeightOffset_tri * 0.5);

  float radius = triangleWidth + (layer_tri * 0.2);

  float number_tri = 3.0;

  float t_tri = (2.0 * PI / (uCount / numLayers_tri)) * indexInLayer;

  vec4 originPos_tri = vec4(position, 1.0);

  vec4 translate_tri = vec4(calcPolygonPos(number_tri, t_tri, radius), height, 1.0);

  mat4 lookAtMatrix_tri = lookAt(translate_tri.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_tri = lookAtMatrix_tri * originPos_tri;

  vec4 scaledPos_tri = calcScaling(rotatedPos_tri, triangleSize);

  vec4 result_tri = translate_tri + scaledPos_tri;

  trianglePosition = result_tri;

  //squarePosition↓

  vec4 squarePosition;

  float squareWidth;
  float squareSize;

  if(uIsMobile) {
    squareWidth = 1.5;
    squareSize = 0.1;
  } else {
    squareWidth = 2.5;
    squareSize = 0.13;
  }

  float numLayers_sq = 8.0;
  float layerHeightOffset_sq = 0.01;
  float layer_sq = floor(aInstanceIndex / (uCount / numLayers_sq));

  float indexInLayer_sq = mod(aInstanceIndex, (uCount / numLayers_sq));

  float height_sq = (layer_sq * layerHeightOffset_sq) - (numLayers_sq * layerHeightOffset_sq * 0.5);

  float radius_sq = squareWidth + (layer_sq * 0.2);

  float number_sq = 4.0; // For a square

  float t_sq = (2.0 * PI / (uCount / numLayers_sq)) * indexInLayer_sq;

  vec4 originPos_sq = vec4(position, 1.0);

  vec4 translate_sq = vec4(calcPolygonPos(number_sq, t_sq, radius_sq), height_sq, 1.0);

  mat4 lookAtMatrix_sq = lookAt(translate_sq.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_sq = lookAtMatrix_sq * originPos_sq;

  vec4 scaledPos_sq = calcScaling(rotatedPos_sq, squareSize);

  vec4 result_sq = translate_sq + scaledPos_sq;

  squarePosition = result_sq;

  //spherePosition↓

  float sphereRadius;
  float sphereSize;

  if(uIsMobile) {
    sphereRadius = 2.0;
    sphereSize = 0.08;
  } else {
    sphereRadius = 3.0;
    sphereSize = 0.1;
  }

  vec4 spherePosition;

  vec4 originPos_sphere = vec4(position, 1.0);

  vec4 translate_sphere = vec4(calcSpherePos(aInstanceIndex, sphereRadius), 1.0);

  vec4 scaledPos_sphere = calcScaling(originPos_sphere, sphereSize);

  mat4 lookAtMatrix = lookAt(translate_sphere.xyz, vec3(0.0, 0.0, 0.0));

  vec4 rotatedPos_sphere = lookAtMatrix * scaledPos_sphere;

  vec4 result_sphere = rotatedPos_sphere + translate_sphere;

  spherePosition = result_sphere;

  //rotate↓

  float rotationAngle = uTime * 0.1;

  spherePosition = rotateY(spherePosition, rotationAngle);

  trianglePosition = rotateY(trianglePosition, rotationAngle);

  squarePosition = rotateZ(squarePosition, PI / 4.0);

  squarePosition = rotateY(squarePosition, rotationAngle);

  //select position↓

  vec4 resultPosition;

  vec4 resultPosition_projection = projectionMatrix * viewMatrix * projectionMappingPosition;

  vec4 resultPosition_triangle = projectionMatrix * viewMatrix * trianglePosition;

  vec4 resultPosition_square = projectionMatrix * viewMatrix * squarePosition;

  vec4 resultPosition_sphere = projectionMatrix * viewMatrix * spherePosition;

  // position mixer↓

  vec4 mixPos1 = mix(resultPosition_square, resultPosition_projection, uAnimation01);

  vec4 mixPos2 = mix(mixPos1, resultPosition_sphere, uAnimation02);

  vec4 mixPos3 = mix(mixPos2, resultPosition_triangle, uAnimation03);

  vec4 mixPos4 = mix(mixPos3, resultPosition_square, uAnimation04);

  resultPosition = mixPos4;

  gl_Position = resultPosition;
}

// if you want to use three.js api 
// trianglePosition = vec4(position, 1.0);
// trianglePosition = aTriangleMatrix * trianglePosition;
// vec4 spherePosition = vec4(position, 1.0);
// spherePosition = aSphereMatrix * spherePosition;
