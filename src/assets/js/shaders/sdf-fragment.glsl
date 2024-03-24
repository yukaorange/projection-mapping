precision mediump float;

uniform float uTime;
uniform sampler2D uBackBuffer;
uniform vec2 uResolution;

varying vec2 vUv;

#define PI 3.14159265358979323846

vec2 rotate2D(vec2 _st, float _angle) {
  _st -= 0.5;
  _st = mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle)) * _st;
  _st += 0.5;
  return _st;
}

vec3 movingTiles(vec2 _st, float _zoom, float _speed, float _time) {
  _st *= _zoom;

  float time = _time * _speed;

  float index = 0.0;
  index += floor(mod(_st.x, _zoom));
  index += floor(mod(_st.y, _zoom)) * _zoom;

  if(fract(time) > 0.5) {
    if(fract(_st.y * 0.5) > 0.5) {
      _st.x += fract(time) * 2.0;
    } else {
      _st.x -= fract(time) * 2.0;
    }
  } else {
    if(fract(_st.x * 0.5) > 0.5) {
      _st.y += fract(time) * 2.0;
    } else {
      _st.y -= fract(time) * 2.0;
    }
  }

  return vec3(fract(_st), index);
}

float sdX(vec2 st, float w) {
  vec2 stAbs;
  stAbs = abs(st);
  float a = length(stAbs);
  float b = length(stAbs.x + stAbs.y);
    // return a;
    // return b;
    // return b-a;
    // return smoothstep(0.,0.01,b-a);
  return length(stAbs - min(stAbs.x + stAbs.y, w) * 0.5);
}

float box(in vec2 _st, in vec2 _size) {
  _size = vec2(0.5) - _size * 0.5;
  vec2 uv = smoothstep(_size, _size + vec2(0.001), _st);
  uv *= smoothstep(_size, _size + vec2(0.001), vec2(1.0) - _st);
  return uv.x * uv.y;
}

float crossSDF(in vec2 _st, float _size) {
  return box(_st, vec2(_size, _size / 4.)) +
    box(_st, vec2(_size / 4., _size));
}

void main() {
  vec2 uv = vUv;

  float lt = uTime * 120.0 / 60.0;
  float bt = floor(lt);
  float tt = tanh(fract(lt) * 5.0);
  lt = bt + tt;

  vec3 color = vec3(0.);

  vec3 movingCell = movingTiles(uv, 11., 0.2, lt);

  uv = movingCell.xy;

  float cell_index = movingCell.z;

  float sdf_cross = crossSDF(uv, 0.3);

  uv = uv * 2.0 - 1.0;

  float width = 0.5;

  float sdf_X = sdX(uv, width);

  sdf_X = smoothstep(0.01, 0.05, sdf_X);

  float basis = 12.0;

  if(mod(cell_index, basis) == 0.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 1.0) {
    color = vec3(sdf_cross);
  } else if(mod(cell_index, basis) == 2.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 3.0) {
    color = vec3(sdf_cross);
  } else if(mod(cell_index, basis) == 4.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 5.0) {
    color = vec3(sdf_cross);
  } else if(mod(cell_index, basis) == 6.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 7.0) {
    color = vec3(sdf_cross);
  } else if(mod(cell_index, basis) == 8.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 9.0) {
    color = vec3(sdf_cross);
  } else if(mod(cell_index, basis) == 10.0) {
    color = vec3(sdf_X);
  } else if(mod(cell_index, basis) == 11.0) {
    color = vec3(sdf_cross);
  }

  gl_FragColor = vec4(color, 1.0);

}

// #define loop(n) for(int i; i < n; i++)

// const float PI = acos(-1.0);

// mat2 rot(float a) {
//   float s = sin(a), c = cos(a);
//   return mat2(c, s, -s, c);
// }

// vec2 pmod(vec2 p, float r) {
//   float n = PI * 2.0 / r;
//   float a = atan(p.x, p.y) + n * 0.5;
//   a = floor(a / n) * n;
//   return rot(a) * p;
// }

// vec3 hash(vec3 v) {
//   uvec3 x = floatBitsToUint(v + vec3(0.1, 0.2, 0.3));
//   x = (x >> 8 ^ x.yzx) * 0x456789ABu;
//   x = (x >> 8 ^ x.yzx) * 0x6789AB45u;
//   x = (x >> 8 ^ x.yzx) * 0x89AB4567u;
//   return vec3(x) / vec3(-1u);
// }

// void main() {
//   vec2 uv = vUv;

//   vec2 asp = uResolution / min(uResolution.x, uResolution.y);

//   float lt = uTime * 120.0 / 60.0;
//   float bt = floor(lt);
//   float tt = tanh(fract(lt) * 5.0);
//   lt = bt + tt;

//   vec2 quv = uv * asp, fuv, iuv;

//   float n = 2.0;
//   loop(4) {
//     n += 1.0;
//     fuv = fract(quv);
//     iuv = floor(quv);
//     if(hash(vec3(iuv, bt)).x < 0.5)
//       break;
//     quv *= 2.0;
//   }

//   vec2 suv = fuv * 2.0 - 1.0;
//   suv *= rot(PI / n * lt);

//   float scale = 1.5 + exp((-n + 3.0) * 3.0) * 0.5;
//   vec2 puv = pmod(-suv * scale, n);
//   float c = step(fract(puv.x * 10.0 + puv.y * 10.0 - uTime * 5.0), 0.3) * step(0.5, puv.y) * step(puv.y, 0.7);

//   vec4 b = texture(uBackBuffer, vUv);
//   vec3 col = vec3(c, b.rg);

//   gl_FragColor = vec4(col, 1.0);

//   // vec3 color = vec3(1., 0., backBuffer.r);
//   // gl_FragColor = vec4(color, 1.0);
// }
