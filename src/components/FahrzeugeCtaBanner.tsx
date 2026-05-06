"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

const shader = getServiceShader("Fahrzeugbörse");

export function FahrzeugeCtaBanner() {
  return (
    <div className="relative overflow-hidden mb-12 p-6 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ border: "1px solid rgba(192,0,30,0.2)" }}>
      <WarpCanvas config={shader} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.48)" }} />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        <div>
          <p className="text-xl uppercase mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
            Über 120 Fahrzeuge verfügbar
          </p>
          <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
            Alle Modelle, Filter und Finanzierungsrechner in unserer vollständigen Fahrzeugbörse.
          </p>
        </div>
        <a
          href="https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
          style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
        >
          Zur Fahrzeugbörse <ExternalLink size={15} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
