"use client";

import { useRef, useEffect } from "react";

interface ShaderProps {
  flowSpeed?: number;
  colorIntensity?: number;
  noiseLayers?: number;
  mouseInfluence?: number;
}

function InteractiveShader({
  flowSpeed = 0.3,
  colorIntensity = 0.9,
  noiseLayers = 4.0,
  mouseInfluence = 0.2,
}: ShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertexSrc = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform float uFlowSpeed;
      uniform float uColorIntensity;
      uniform float uNoiseLayers;
      uniform float uMouseInfluence;

      #define MARCH_STEPS 32

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float fbm(vec3 p) {
        float f = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 8; i++) {
          if (float(i) >= uNoiseLayers) break;
          f += amp * hash(p.xy);
          p *= 2.0;
          amp *= 0.5;
        }
        return f;
      }

      float map(vec3 p) {
        vec3 q = p;
        q.z += iTime * uFlowSpeed;
        vec2 mouse = (iMouse.xy / iResolution.xy - 0.5) * 2.0;
        q.xy += mouse * uMouseInfluence;
        float f = fbm(q * 2.0);
        f *= sin(p.y * 2.0 + iTime) * 0.5 + 0.5;
        return clamp(f, 0.0, 1.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec3 ro = vec3(0.0, -1.0, 0.0);
        vec3 rd = normalize(vec3(uv, 1.0));
        vec3 col = vec3(0.0);
        float t = 0.0;

        for (int i = 0; i < MARCH_STEPS; i++) {
          vec3 p = ro + rd * t;
          float density = map(p);
          if (density > 0.0) {
            // Brand-red aurora: #C0001E dominant, minimal green/blue
            float r = 0.55 + 0.45 * cos(iTime * 1.1 + p.y * 2.2);
            float g = 0.0  + 0.04 * cos(iTime * 1.1 + p.y * 2.2 + 1.5);
            float b = 0.05 + 0.07 * cos(iTime * 1.1 + p.y * 2.2 + 3.0);
            vec3 auroraColor = clamp(vec3(r, g, b), 0.0, 1.0);
            col += auroraColor * density * 0.1 * uColorIntensity;
          }
          t += 0.1;
        }

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (src: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(vertexSrc, gl.VERTEX_SHADER);
    const frag = compileShader(fragmentSrc, gl.FRAGMENT_SHADER);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uMouse = gl.getUniformLocation(program, "iMouse");
    const uFlow = gl.getUniformLocation(program, "uFlowSpeed");
    const uColor = gl.getUniformLocation(program, "uColorIntensity");
    const uNoise = gl.getUniformLocation(program, "uNoiseLayers");
    const uInfluence = gl.getUniformLocation(program, "uMouseInfluence");

    const startTime = performance.now();
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    const loop = () => {
      if (!gl || gl.isContextLost()) return;
      gl.uniform1f(uTime, (performance.now() - startTime) / 1000);
      gl.uniform2f(uMouse, mousePos.current.x * canvas.width, (1 - mousePos.current.y) * canvas.height);
      gl.uniform1f(uFlow, flowSpeed);
      gl.uniform1f(uColor, colorIntensity);
      gl.uniform1f(uNoise, noiseLayers);
      gl.uniform1f(uInfluence, mouseInfluence);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (!gl.isContextLost()) {
        gl.deleteProgram(program);
        gl.deleteShader(vert);
        gl.deleteShader(frag);
        gl.deleteBuffer(buf);
      }
    };
  }, [flowSpeed, colorIntensity, noiseLayers, mouseInfluence]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export function DigitalAurora() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.45,
      }}
    >
      <InteractiveShader
        flowSpeed={0.91}
        colorIntensity={0.9}
        noiseLayers={4.0}
        mouseInfluence={0.2}
      />
    </div>
  );
}
