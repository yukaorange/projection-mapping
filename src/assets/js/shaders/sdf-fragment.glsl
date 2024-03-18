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

vec2 movingTiles(vec2 _st, float _zoom, float _speed, float _time) {
  _st *= _zoom;

  float time = _time * _speed;

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
  return fract(_st);
}

vec2 rotatetilePattern(vec2 _st) {

  _st *= 2.0;

  float index = 0.0;
  index += step(1., mod(_st.x, 2.0));
  index += step(1., mod(_st.y, 2.0)) * 2.0;

    //      |
    //  2   |   3
    //      |
    //--------------
    //      |
    //  0   |   1
    //      |

  _st = fract(_st);

    // Rotate each cell according to the index
  if(index == 1.0) {
    _st = rotate2D(_st, PI * 0.5);
  } else if(index == 2.0) {
    _st = rotate2D(_st, PI * -0.5);
  } else if(index == 3.0) {
    _st = rotate2D(_st, PI);
  }

  return _st;
}

vec3 movingTilesWithIndex(vec2 _st, float _zoom, float _speed, float _time) {
  _st *= _zoom;

  vec2 gridPos = floor(_st);

  float index = mod(gridPos.x + gridPos.y, 2.0);

  float time = _time * _speed;

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

vec2 tile(vec2 _st, float _zoom) {
  _st *= _zoom;
  return fract(_st);
}

float stroke(float x, float s, float w) {
  float d = step(s, x + w * 0.5) - step(s, x - w * 0.5);

  return clamp(d, 0., 1.);
}

float circle(vec2 st) {
  return length(st - vec2(0.5)) * 5.0;
}

mat2 rotate(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, s, -s, c);
}

float box(in vec2 _st, in vec2 _size) {
  _size = vec2(0.5) - _size * 0.3;

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

  uv = movingTiles(uv, 7., 0.2, lt);

  float sdf = crossSDF(uv, 1.0);

  vec3 color = vec3(sdf);

  gl_FragColor = vec4(color, 1.0);
  // gl_FragColor = vec4(uv, 0., 1.0);

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
