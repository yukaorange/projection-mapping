precision mediump float;

#include './modules/noise.glsl'

uniform float uAlpha;
uniform sampler2D uTexture;
uniform vec3 uProjectorPosition;
uniform vec2 uResolution;

uniform float uTextureAspectX;
uniform float uTextureAspectY;
uniform float uProgress;
uniform float uAnimation01;
uniform float uAnimation02;
uniform float uAnimation03;
uniform float uAnimation04;

varying vec3 vNormal;
varying vec4 vWorldPosition;
varying vec4 vTexCoords;

varying vec2 vUv;

float triangleSDF(in vec2 p, in float r) {
  const float k = sqrt(3.0);
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if(p.x + k * p.y > 0.0)
    p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

float circleSDF(vec2 st, vec2 resolution) {
  vec2 normalized = st;
  vec2 center = vec2(resolution / 2.0);
  return length(normalized - center);
}

void main() {

  vec2 uv_proj = (vTexCoords.xy / vTexCoords.w) * 0.5 + 0.5;

  uv_proj = uv_proj - vec2(0.5);
  uv_proj.x *= min(uTextureAspectX, 1.);
  uv_proj.y *= min(uTextureAspectY, 1.);
  uv_proj = uv_proj + vec2(0.5);

  vec4 projectionMapping = texture2D(uTexture, uv_proj);

  // projectionMapping.a *= uAlpha;

  //color for polygon mode
  vec2 uv = vUv;

  vec2 coord = gl_FragCoord.xy / uResolution;

  float aspect = uResolution.x / uResolution.y;

  coord.x *= aspect;

  float circle = 1.0 - circleSDF(coord, vec2(aspect, 1.0));

  circle *= 2.0 * cos(circle * 2000.);

  vec3 red_circle = vec3(1.0, 0.0, 0.1);

  red_circle *= circle;

  vec4 color_01 = vec4(red_circle, 1.0);

  //color choice

  vec4 selectedColor;

  vec4 mixColor01 = mix(color_01, projectionMapping, uAnimation01);

  vec4 mixColor02 = mix(mixColor01, color_01, uAnimation02);

  vec4 mixColor03 = mix(mixColor02, color_01, uAnimation03);

  vec4 mixColor04 = mix(mixColor03, color_01, uAnimation04);

  selectedColor = mixColor04;

  gl_FragColor = selectedColor;

}
