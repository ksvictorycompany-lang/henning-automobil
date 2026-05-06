"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { CTA_SHADER } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-5 md:px-8">
      <WarpCanvas config={CTA_SHADER} />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "rgba(12,0,4,0.28)" }}
      />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2
            className="text-3xl md:text-4xl uppercase leading-none text-white mb-2"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700 }}
          >
            Termin vereinbaren
          </h2>
          <p className="text-base" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.70)" }}>
            Beratungs- oder Werkstatttermin — wir sind für Sie da.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            href="/kontakt#termin"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#FFFFFF", color: "#C0001E" }}
          >
            Beratungstermin <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          <a
            href="https://www.mercedes-benz.de/passengercars/services-accessories/service-booking/oab.module.html#/dealer?oabDealerGroup=GS00107034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.45)", color: "#FFFFFF" }}
          >
            Werkstatttermin
          </a>
        </div>
      </div>
    </section>
  );
}
