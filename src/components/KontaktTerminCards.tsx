"use client";

import dynamic from "next/dynamic";
import { Calendar, Wrench } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

const WERKSTATT_URL =
  "https://www.mercedes-benz.de/passengercars/services-accessories/service-booking/oab.module.html#/dealer?oabDealerGroup=GS00107034";

function TerminCard({
  icon: Icon,
  eyebrow,
  title,
  desc,
  href,
  ctaLabel,
  shaderKey,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  ctaLabel: string;
  shaderKey: string;
}) {
  const shader = getServiceShader(shaderKey);
  return (
    <div className="relative overflow-hidden p-8 md:p-10 flex flex-col" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
      <WarpCanvas config={shader} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.50)" }} />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] flex flex-col flex-1">
        <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ background: "rgba(192,0,30,0.12)", border: "1px solid rgba(192,0,30,0.22)" }}>
          <Icon size={26} style={{ color: "#C0001E" }} />
        </div>
        <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}>
          {eyebrow}
        </p>
        <h3 className="text-2xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-8 flex-1" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
          {desc}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90 self-start"
          style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
        >
          {ctaLabel} ↗
        </a>
      </div>
    </div>
  );
}

export function KontaktTerminCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TerminCard
        icon={Calendar}
        eyebrow="Kauf & Beratung"
        title="Beratungstermin"
        desc="Vereinbaren Sie einen persönlichen Beratungstermin bei uns. Unsere Verkaufsberater nehmen sich Zeit für Sie — ob Neuwagen, Gebrauchtwagen oder Finanzierung."
        href="https://www.henning-automobil.de/beratungstermin/"
        ctaLabel="Termin anfragen"
        shaderKey="Beratungstermin"
      />
      <TerminCard
        icon={Wrench}
        eyebrow="Wartung & Service"
        title="Werkstatttermin"
        desc="Buchen Sie Ihren Werkstatttermin direkt online. Wartung, Reparatur, Reifenwechsel oder HU/AU — wir erledigen alles schnell und fachgerecht."
        href={WERKSTATT_URL}
        ctaLabel="Online buchen"
        shaderKey="Werkstatttermin"
      />
    </div>
  );
}
