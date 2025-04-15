import {
  Application,
  Container,
  Filter,
  GlProgram,
  Point,
  Rectangle,
  Mesh,
  Geometry,
} from 'pixi.js';
import { DotFilter } from "pixi-filters";

export function addGradient(app: Application) {
  const fragment = `

  precision mediump float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  float noise(vec2 p) {
    return fract(sin(dot(p ,vec2(127.1,311.7))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;

    // Искажение координат с помощью времени
    uv.x += 0.05 * sin(uv.y * 10.0 + uTime);
    uv.y += 0.05 * cos(uv.x * 10.0 + uTime);

    float dist = distance(uv, uMouse);

    // Цвета
    vec3 colorA = vec3(0.0, 0.0, 0.0); // чёрный
    vec3 colorB = vec3(0.0, 0.6, 1.0); // синий
    vec3 colorC = vec3(1.0, 1.0, 1.0); // белый

    // Микс по расстоянию
    vec3 color = mix(colorA, colorB, smoothstep(0.0, 0.5, dist));
    color = mix(color, colorC, smoothstep(0.5, 1.0, dist));

    gl_FragColor = vec4(color, 1.0);
  }
`;


  const vertex = `
  precision mediump float;

  attribute vec2 aVertexPosition;
  varying vec2 vUv;
  
  void main() {
      vUv = (aVertexPosition + 1.0) * 0.5;
      gl_Position = vec4(aVertexPosition, 0.0, 1.0);
  }`;

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

  const dotFilter = new DotFilter({scale: 5, angle: 0.1, grayscale: false});

  container.filters = [dotFilter];

  app.stage.hitArea = app.screen;
  app.stage.eventMode = 'dynamic';

  filter.resources.localUniforms.uniforms.uMouse.set(0.5, 0.5);

  app.stage.on('pointermove', (event) => {
    const { x, y } = event.global;

    filter.resources.localUniforms.uniforms.uMouse.set(
      x / app.screen.width,
      y / app.screen.height,
    );
  });

}
