import type { CSSProperties } from "react";

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E";

interface PaperGrainProps {
  opacity?: number;
  style?: CSSProperties;
}

export function PaperGrain({ opacity = 0.05, style }: PaperGrainProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: "-10%",
        width: "120%",
        height: "120%",
        backgroundImage: `url("${NOISE_SVG}")`,
        backgroundSize: "200px 200px",
        opacity,
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "overlay",
        animation: "paper-grain 0.9s steps(1) infinite",
        ...style,
      }}
    />
  );
}
