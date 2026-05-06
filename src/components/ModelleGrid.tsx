"use client";

import dynamic from "next/dynamic";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

const MODELLE = [
  { segment: "A · B · CLA", label: "Kompakt", desc: "Wendig, effizient, modern", href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?bodyTypes=1,2" },
  { segment: "C · E · CLE", label: "Business", desc: "Eleganz trifft Effizienz", href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?bodyTypes=3,4" },
  { segment: "S · EQS", label: "Luxury", desc: "Das Beste oder nichts", href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?bodyTypes=5" },
  { segment: "GLE · GLS · GLB · GLC", label: "SUV", desc: "Raum, Kraft und Souveränität", href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?bodyTypes=6,7" },
  { segment: "AMG GT · SL · G63", label: "AMG & Sportlich", desc: "Handcrafted by Mercedes-AMG", href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=4" },
];

export function ModelleGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {MODELLE.map((m) => {
        const shader = getServiceShader(m.label);
        return (
          <a
            key={m.segment}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden p-6 flex flex-col transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <WarpCanvas config={shader} />
            <div
              className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-400 md:group-hover:opacity-55"
              style={{ background: "rgba(10,12,22,0.48)" }}
            />
            <PaperGrain style={{ zIndex: 2 }} />
            <div className="relative z-[3] flex flex-col h-full">
              <p className="text-xs mb-1 transition-colors duration-200 group-hover:text-white" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.5)", letterSpacing: "0.04em" }}>
                {m.segment}
              </p>
              <p className="text-xl uppercase mb-1 transition-colors duration-200 group-hover:text-white" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                {m.label}
              </p>
              <p className="text-xs mt-auto pt-3 transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.6)" }}>
                {m.desc}
              </p>
              <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "#C0001E" }} />
            </div>
          </a>
        );
      })}
    </div>
  );
}
