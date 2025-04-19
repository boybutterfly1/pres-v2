import {
  Application,
  Container,
  Filter,
  GlProgram,
  Point,
  Rectangle,
  Mesh,
  Geometry,
  Ticker,
} from 'pixi.js';
import { DotFilter } from "pixi-filters";

export function addGradient(app: Application) {
  const fragment = `
    precision mediump float;

    varying vec2 vUv;
    uniform vec2 uMouse;

    float noise(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    void main() {
        vec2 uv = vUv;
        
        // Базовое волновое искажение
        float waveStrength = 0.09;
        uv.x += waveStrength * sin(uv.y * 5.0);
        uv.y += waveStrength * sin(uv.x * 15.0);
        
        // Добавляем шум для органичности
        float noiseFactor = noise(uv) * 0.05;
        uv += vec2(noiseFactor);
        
        // Итоговое расстояние с учётом всех искажений
        float dist = distance(uv, uMouse);
        
        // Цветовая схема
        vec3 colorA = vec3(0.1, 0.1, 0.1);
        vec3 colorB = vec3(0.0, 0.55, 0.9);
        vec3 colorC = vec3(0);
        
        // Градиент с эффектом "размытия"
        vec3 color = mix(colorA, colorB, smoothstep(0.0, 0.9, dist));
        color = mix(color, colorC, smoothstep(0.3, 0.8, dist));
        
        gl_FragColor = vec4(color, 5.0);
    }
  `;

  const vertex = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    varying vec2 vUv;
    
    void main() {
        vUv = (aVertexPosition + 1.0) * 0.5;
        gl_Position = vec4(aVertexPosition, 0.0, 1.0);
    }
  `;

  const container = new Container();
  container.filterArea = new Rectangle(0, 0, app.screen.width, app.screen.height);
  app.stage.addChild(container);

  const geometry = new Geometry();
  geometry.addAttribute('aVertexPosition', new Float32Array([
    -1, -1,
    1, -1,
    1,  1,
    -1,  1
  ]));
  geometry.addIndex([0, 1, 2, 0, 2, 3]);

  const filter = new Filter({
    glProgram: new GlProgram({ vertex, fragment }),
    resources: {
      localUniforms: {
        uMouse: { value: new Point(), type: 'vec2<f32>' },
      },
    },
  });

  const mesh = new Mesh({
    geometry,
    shader: filter,
  });

  container.addChild(mesh);

  const dotFilter = new DotFilter({scale: 10, angle: 0.1, grayscale: false});
  container.filters = [dotFilter];

  app.stage.hitArea = app.screen;
  app.stage.eventMode = 'static';

  const targetMousePos = new Point(0.5, 0.5);
  const currentMousePos = new Point(0.5, 0.5);
  const animationDuration = 0.5;
  let animationProgress = 1;

  filter.resources.localUniforms.uniforms.uMouse.set(0.5, 0.5);

  // Обработчик движения мыши
  app.stage.on('pointermove', (event) => {
    const { x, y } = event.global;
    targetMousePos.set(x / app.screen.width, y / app.screen.height);
    animationProgress = 0;
  });

  const ticker = Ticker.shared;
  ticker.add(() => {
    if (animationProgress < 1) {
      animationProgress += ticker.deltaMS / 1000 / animationDuration / 2
      if (animationProgress > 1) animationProgress = 1;

      const easeProgress = easeInOutQuad(animationProgress);

      currentMousePos.x = currentMousePos.x + (targetMousePos.x - currentMousePos.x) * easeProgress;
      currentMousePos.y = currentMousePos.y + (targetMousePos.y - currentMousePos.y) * easeProgress;

      filter.resources.localUniforms.uniforms.uMouse.set(currentMousePos.x, currentMousePos.y);
    }
  });

  function easeInOutQuad(t: number): number {
    // return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    // return t;
    // return 1 - (1 - t) * (1 - t);
    // return 1 - Math.pow(1 - t, 3);
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    // const c4 = (2 * Math.PI) / 3;
    // return t === 0
    //   ? 0
    //   : t === 1
    //     ? 1
    //     : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
}