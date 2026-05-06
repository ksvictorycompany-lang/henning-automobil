"use client";

import dynamic from "next/dynamic";
import { PaperGrain } from "@/components/PaperGrain";
import { HEADER_SHADER } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <WarpCanvas config={HEADER_SHADER} />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "rgba(10,12,22,0.50)" }}
      />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3] max-w-7xl mx-auto">
        {eyebrow && (
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-4"
          style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-6 h-px w-16" style={{ background: "#C0001E" }} />
      </div>
    </div>
  );
}
