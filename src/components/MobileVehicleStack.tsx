"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { VEHICLE_SHADER } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

interface VehicleItem {
  vehicleId: number;
  name: string;
  variant: string;
  price: string;
  imageUrl: string;
  href: string;
}

const VEHICLES: VehicleItem[] = [
  {
    vehicleId: 1724622,
    name: "Mercedes E 63 AMG",
    variant: "GLS AMG Coupé · MANUFAKTUR",
    price: "149.580 €",
    imageUrl: "/cars/e63.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1724622",
  },
  {
    vehicleId: 1715338,
    name: "Mercedes GLE 53 AMG",
    variant: "Hybrid Night · MANUFAKTUR",
    price: "136.880 €",
    imageUrl: "/cars/gle53.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715338",
  },
  {
    vehicleId: 1625698,
    name: "Mercedes AMG GT 53",
    variant: "4MATIC+ · Burmester",
    price: "108.900 €",
    imageUrl: "/cars/amggt53.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1625698",
  },
  {
    vehicleId: 1725781,
    name: "Mercedes C 63 AMG",
    variant: "E AMG Performance · MANUFAKTUR",
    price: "97.880 €",
    imageUrl: "/cars/c63.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1725781",
  },
];

const CARD_H = 180; // card height in expanded list
const CARD_GAP = 8;
const STACK = [
  { y: 0,  scale: 1,    opacity: 1,    z: 10 },
  { y: 20, scale: 0.96, opacity: 0.55, z: 2  },
  { y: 34, scale: 0.92, opacity: 0.30, z: 1  },
];
const COLLAPSED_H = CARD_H + 34 + 4;

export function MobileVehicleStack() {
  const [expanded, setExpanded] = useState(false);
  const n = VEHICLES.length;
  const expandedH = n * CARD_H + (n - 1) * CARD_GAP;

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        animate={{ height: expanded ? expandedH : COLLAPSED_H }}
        transition={{ duration: 0.48, ease: [0.32, 0.72, 0, 1] }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {VEHICLES.map((v, i) => {
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

          const Card = (
            <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
              <WarpCanvas config={VEHICLE_SHADER} />
              <PaperGrain />
              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: 120, background: "#3C3C4A", flexShrink: 0, zIndex: 1 }}>
                <Image
                  src={v.imageUrl}
                  alt={v.name}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              {/* Info */}
              <div style={{ padding: "0.75rem 1rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative", zIndex: 1, background: "rgba(10,14,24,0.50)" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "0.9375rem", color: "#EAEAEE", lineHeight: 1.2 }}>
                    {v.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6875rem", color: "rgba(138,138,150,0.65)", marginTop: 2 }}>
                    {v.variant}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "0.5rem" }}>
                  <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "1rem", color: "#C0001E" }}>
                    {v.price}
                  </p>
                  {expanded && (
                    <ArrowUpRight size={14} strokeWidth={1.5} style={{ color: "#C0001E", marginLeft: "auto", marginTop: 2 }} />
                  )}
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={v.vehicleId}
              animate={expanded ? expandedAnim : collapsedAnim}
              transition={{
                duration: 0.38,
                delay: expanded ? i * 0.05 : (n - 1 - i) * 0.03,
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
              }}
            >
              {/* When collapsed: div (no link, tap expands) */}
              {/* When expanded: <a> link to vehicle */}
              {expanded ? (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", height: "100%", textDecoration: "none" }}
                >
                  {Card}
                </a>
              ) : (
                <div
                  style={{ height: "100%", cursor: i === 0 ? "pointer" : "default" }}
                  onClick={i === 0 ? () => setExpanded(true) : undefined}
                >
                  {Card}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.625rem" }}>
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6875rem", color: "rgba(138,138,150,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {n} Highlights
        </span>
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6875rem", color: "rgba(192,0,30,0.65)", border: "none", background: "none", cursor: "pointer", padding: 0 }}
          >
            Alle anzeigen ↓
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6875rem", color: "rgba(192,0,30,0.65)", border: "none", background: "none", cursor: "pointer", padding: 0 }}
          >
            Zuklappen ↑
          </button>
        )}
      </div>
    </div>
  );
}
