precision mediump float;

varying vec2 vUv;
uniform vec2 uMouse;

void main() {
    // Нормализуем расстояние от мыши до текущего фрагмента
    float dist = distance(vUv, uMouse);

    // Определим два цвета для градиента
    vec3 colorA = vec3(1.0, 0.0, 0.5);  // розовый
    vec3 colorB = vec3(0.1, 0.1, 0.6);  // синий

    // Микс двух цветов в зависимости от расстояния
    vec3 color = mix(colorA, colorB, smoothstep(0.0, 0.5, dist));

    gl_FragColor = vec4(color, 1.0);
}
