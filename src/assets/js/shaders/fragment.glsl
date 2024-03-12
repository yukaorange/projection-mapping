precision mediump float;
#include './modules/noise.glsl'

uniform float uAlpha;
uniform sampler2D uTexture;
uniform vec3 uProjectorPosition;
uniform float uTextureAspectX;
uniform float uTextureAspectY;

varying vec3 vNormal;
varying vec4 vWorldPosition;
varying vec4 vTexCoords;

varying vec2 vUv;

void main() {

  vec2 uv = (vTexCoords.xy / vTexCoords.w) * 0.5 + 0.5;

  uv = uv - vec2(0.5);
  uv.x *= min(uTextureAspectX, 1.);
  uv.y *= min(uTextureAspectY, 1.);
  uv = uv + vec2(0.5);

  vec4 color = texture2D(uTexture, uv);

  color.a *= uAlpha;

  vec3 projectionDirection = normalize(uProjectorPosition - vWorldPosition.xyz);

  float dotProduct = dot(vNormal, projectionDirection);

  if(dotProduct < 0.0) {
    color = vec4(0.0, 0.0, 0.0, 1.0);
  }

  gl_FragColor = color;
  gl_FragColor = vec4(vUv, 0., 1.);

}
