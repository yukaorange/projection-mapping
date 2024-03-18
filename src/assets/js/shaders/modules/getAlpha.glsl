float getAlpha(float distance) {
  float da = abs(distance - 400.0) / 500.0;
  return clamp(1.0 - da, 0.0, 1.0);
}