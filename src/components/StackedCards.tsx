"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Warp } from "@paper-design/shaders-react";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

export interface StackedItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const CARD_H = 112; // height per card in expanded list
const CARD_GAP = 6;
// Stack offsets for collapsed view (top 3 cards)
const STACK = [
  { y: 0,  scale: 1,    opacity: 1,    z: 10 },
  { y: 18, scale: 0.96, opacity: 0.58, z: 2  },
  { y: 30, scale: 0.92, opacity: 0.33, z: 1  },
];
const COLLAPSED_H = CARD_H + 30 + 4; // visible area: top card + peek of 3rd

export function StackedCards({ items }: { items: StackedItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const n = items.length;

  const expandedH = n * CARD_H + (n - 1) * CARD_GAP;

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        animate={{ height: expanded ? expandedH : COLLAPSED_H }}
        transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          const stackPos = Math.min(i, 2);
          const inStack = i < 3;

          const collapsedAnim = {
            y: STACK[stackPos].y,
            scale: STACK[stackPos].scale,
            opacity: inStack ? STACK[stackPos].opacity : 0,
            zIndex: inStack ? STACK[stackPos].z : 0,
          };
          const expandedAnim = {
            y: i * (CARD_H + CARD_GAP),
            scale: 1,
            opacity: 1,
            zIndex: 1,
          };

          return (
            <motion.div
              key={i}
              animate={expanded ? expandedAnim : collapsedAnim}
              transition={{
                duration: 0.38,
                delay: expanded ? i * 0.04 : (n - 1 - i) * 0.028,
                ease: [0.32, 0.72, 0, 1],
              }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: CARD_H,
                overflow: "hidden",
                transformOrigin: "top center",
                cursor: !expanded && i === 0 ? "pointer" : "default",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
              onClick={!expanded && i === 0 ? () => setExpanded(true) : undefined}
            >
              {/* Warp shader background */}
              {(() => {
                const s = getServiceShader(item.title);
                return (
                  <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Warp
                      colors={s.colors}
                      proportion={s.proportion}
                      softness={s.softness}
                      shape={s.shape}
                      shapeScale={s.shapeScale}
                      distortion={s.distortion}
                      swirl={s.swirl}
                      swirlIterations={s.swirlIterations}
                      speed={s.speed}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                );
              })()}
              {/* Dark overlay */}
              <div style={{ position: "absolute", inset: 0, background: "rgba(20,20,28,0.55)", zIndex: 1, pointerEvents: "none" }} />
              <PaperGrain style={{ zIndex: 2 }} />
              <div
                style={{
                  padding: "1.125rem 1.5rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Icon size={24} strokeWidth={1.5} style={{ color: "#C0001E", flexShrink: 0, marginBottom: "0.625rem" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#EAEAEE",
                    marginBottom: "0.25rem",
                    flexShrink: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.75rem",
                    color: "rgba(138,138,150,0.72)",
                    lineHeight: 1.55,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer hint / collapse button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.625rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.6875rem",
            color: "rgba(138,138,150,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {n} Services
        </span>
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.6875rem",
              color: "rgba(192,0,30,0.65)",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              letterSpacing: "0.02em",
            }}
          >
            Alle anzeigen ↓
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.6875rem",
              color: "rgba(192,0,30,0.65)",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              letterSpacing: "0.02em",
            }}
          >
            Zuklappen ↑
          </button>
        )}
      </div>
    </div>
  );
}
