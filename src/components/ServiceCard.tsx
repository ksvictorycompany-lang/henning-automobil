"use client";

import dynamic from "next/dynamic";
import type { LucideIcon } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function ServiceCard({ icon: Icon, title, desc }: ServiceCardProps) {
  const shader = getServiceShader(title);

  return (
    <div
      className="group relative overflow-hidden cursor-default transition-all duration-300 flex flex-col md:min-h-[220px] md:justify-center"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Warp shader background (client-only, no SSR) */}
      <WarpCanvas config={shader} />

      {/* Dark overlay — reduces on hover to reveal shader */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-[1] md:group-hover:opacity-40"
        style={{ background: "rgba(20,20,28,0.50)" }}
      />

      {/* Paper grain */}
      <PaperGrain style={{ zIndex: 2 }} />

      {/* Gradient bloom — desktop hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-[3]"
        style={{ background: "radial-gradient(ellipse at 50% 130%, rgba(192,0,30,0.28) 0%, transparent 65%)" }}
      />

      {/* Bottom static gradient — mobile only */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none md:hidden z-[3]"
        style={{ background: "linear-gradient(to top, rgba(192,0,30,0.06) 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-[4] p-7 flex flex-col flex-1 md:justify-center">
        <div className="mb-4 md:mb-0 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:mb-5">
          <Icon size={28} strokeWidth={1.5} style={{ color: "#C0001E" }} />
        </div>

        <div className="md:mt-0">
          <h3
            className="text-lg uppercase mb-2"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed transition-all duration-[400ms] delay-[50ms] opacity-100 translate-y-0 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
          >
            {desc}
          </p>
        </div>
      </div>

      {/* Border glow — desktop hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-[5]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(192,0,30,0.25)" }}
      />
    </div>
  );
}
