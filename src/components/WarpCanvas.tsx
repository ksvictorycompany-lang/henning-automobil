"use client";

import { Warp } from "@paper-design/shaders-react";
import type { WarpConfig } from "@/lib/serviceShaders";

export function WarpCanvas({ config }: { config: WarpConfig }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Warp
        colors={config.colors}
        proportion={config.proportion}
        softness={config.softness}
        shape={config.shape}
        shapeScale={config.shapeScale}
        distortion={config.distortion}
        swirl={config.swirl}
        swirlIterations={config.swirlIterations}
        speed={config.speed}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
