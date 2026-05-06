"use client";

import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { VEHICLE_SHADER } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

const BULLETS = [
  "Bis zu 24 Monate Garantie",
  "Vollständige, geprüfte Fahrzeughistorie",
  "Mercedes-Benz Qualitätssiegel",
  "Über 15.000 geprüfte Modelle bundesweit",
];

const STATS = [
  { value: "15.000+", label: "Geprüfte Fahrzeuge" },
  { value: "24 Mon.", label: "Max. Garantie" },
  { value: "100%", label: "Mercedes Qualität" },
];

export function JungeSterneBanner() {
  return (
    <div id="junge-sterne" className="relative overflow-hidden mt-16 p-8 md:p-10" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
      <WarpCanvas config={VEHICLE_SHADER} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.50)" }} />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}>
            Gebrauchtfahrzeuge
          </p>
          <h3 className="text-3xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
            Junge Sterne
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
            Erstklassige, geprüfte Jahreswagen direkt von Mercedes-Benz. Jeder Junge Stern
            durchläuft einen umfassenden Qualitätscheck — damit Sie sicher fahren.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle size={16} strokeWidth={1.5} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=236&qualityseal=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
          >
            Junge Sterne entdecken <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="p-5 flex items-center gap-5" style={{ background: "rgba(10,14,24,0.72)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-2xl leading-none" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", minWidth: "7rem" }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
