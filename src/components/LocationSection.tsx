"use client";

import dynamic from "next/dynamic";
import { MapPin, Phone, Clock } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { LOCATION_SHADERS } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

function LocationCard({
  title,
  address,
  shaderIndex,
  children,
}: {
  title: string;
  address: string;
  shaderIndex: 0 | 1;
  children: React.ReactNode;
}) {
  const shader = LOCATION_SHADERS[shaderIndex];
  return (
    <div className="relative overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <WarpCanvas config={shader} />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "rgba(10,12,22,0.54)" }}
      />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8" style={{ background: "#C0001E" }} />
          <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
            {title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <MapPin size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
            <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
              {address}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function LocationSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LocationCard title="Dorstener Str. 329" address="Dorstener Straße 329, 44653 Herne" shaderIndex={0}>
        <div className="flex items-center gap-3">
          <Phone size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
          <a href="tel:+49232592920" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
            Service: 02325 - 92 92 0
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
          <a href="tel:+492325929257" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
            Verkauf: 02325 - 92 92 57
          </a>
        </div>
        <div className="mt-2 pt-4 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>SERVICE PKW</p>
            <div className="flex items-start gap-2">
              <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
              <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                Mo–Fr 06:00–19:00<br />Sa 08:00–14:00
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>VERKAUF</p>
            <div className="flex items-start gap-2">
              <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
              <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                Mo–Fr 08:00–18:00<br />Sa 09:00–14:00
              </p>
            </div>
          </div>
        </div>
      </LocationCard>

      <LocationCard title="Roonstraße 67" address="Roonstraße 67, 44653 Herne" shaderIndex={1}>
        <div className="flex items-center gap-3">
          <Phone size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
          <a href="tel:+4923239869" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
            02323 - 9 86 90
          </a>
        </div>
        <div className="mt-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>SERVICE</p>
          <div className="flex items-start gap-2">
            <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
            <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
              Mo–Fr 08:00–18:00 Uhr<br />Sa 09:00–14:00 Uhr
            </p>
          </div>
        </div>
        <p className="text-sm mt-2" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.6)" }}>
          Freie Werkstatt für alle Marken
        </p>
      </LocationCard>
    </div>
  );
}
