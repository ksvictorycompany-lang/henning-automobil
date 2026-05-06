"use client";

import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { LOCATION_SHADERS } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

export function KontaktStandorte() {
  return (
    <div className="flex flex-col gap-6">
      {/* Standort 1 */}
      <div className="relative overflow-hidden p-8" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <WarpCanvas config={LOCATION_SHADERS[0]} />
        <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.54)" }} />
        <PaperGrain style={{ zIndex: 2 }} />
        <div className="relative z-[3]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8" style={{ background: "#C0001E" }} />
            <div>
              <p className="text-xs uppercase mb-0.5" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E", letterSpacing: "0.1em" }}>Hauptstandort</p>
              <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>Dorstener Str. 329</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-start gap-3">
              <MapPin size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Dorstener Straße 329, 44653 Herne</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
              <div className="flex flex-col gap-1">
                <a href="tel:+49232592920" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Service: 02325 - 92 92 0</a>
                <a href="tel:+492325929257" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Verkauf: 02325 - 92 92 57</a>
                <a href="tel:+492325929215" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Teile: 02325 - 92 92 15</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
              <a href="mailto:info@mercedes-henning.de" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>info@mercedes-henning.de</a>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Service PKW</p>
              <div className="flex items-start gap-2">
                <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 06:00–19:00<br />Sa 08:00–14:00</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Verkauf</p>
              <div className="flex items-start gap-2">
                <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 08:00–18:00<br />Sa 09:00–14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standort 2 */}
      <div className="relative overflow-hidden p-8" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <WarpCanvas config={LOCATION_SHADERS[1]} />
        <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.54)" }} />
        <PaperGrain style={{ zIndex: 2 }} />
        <div className="relative z-[3]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8" style={{ background: "#C0001E" }} />
            <div>
              <p className="text-xs uppercase mb-0.5" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E", letterSpacing: "0.1em" }}>Zweigstelle</p>
              <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>Roonstraße 67</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-start gap-3">
              <MapPin size={16} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Roonstraße 67, 44653 Herne</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
              <a href="tel:+4923239869" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>02323 - 9 86 90</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
              <a href="mailto:info@henning-automobil.de" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>info@henning-automobil.de</a>
            </div>
          </div>
          <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Service (alle Marken)</p>
            <div className="flex items-start gap-2">
              <Clock size={12} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
              <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 08:00–18:00 Uhr<br />Sa 09:00–14:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
