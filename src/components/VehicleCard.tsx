"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PaperGrain } from "@/components/PaperGrain";
import { VEHICLE_SHADER } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

interface VehicleCardProps {
  vehicleId: number;
  name: string;
  variant?: string;
  price: string;
  href: string;
  imageUrl: string;
}

export function VehicleCard({ name, variant, price, href, imageUrl }: VehicleCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  function handleMouseLeave() {
    setSpotlight((s) => ({ ...s, active: false }));
  }

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col overflow-hidden relative"
      style={{
        border: `1px solid ${spotlight.active ? "rgba(192,0,30,0.28)" : "rgba(255,255,255,0.06)"}`,
        boxShadow: spotlight.active ? "0 0 28px rgba(192,0,30,0.12)" : "none",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Warp shader background */}
      <WarpCanvas config={VEHICLE_SHADER} />

      {/* Paper grain texture */}
      <PaperGrain />

      {/* Spotlight overlay — desktop only, follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none z-10 hidden md:block"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(192,0,30,0.18) 0%, transparent 65%)`,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden" style={{ background: "#3C3C4A" }}>
        <Image
          src={imageUrl}
          alt={`${name} ${variant ?? ""}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Static bottom gradient — mobile only for visual depth */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(192,0,30,0.07) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1 flex-1 relative z-20" style={{ background: "rgba(10,14,24,0.50)" }}>
        <p
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 600,
            color: "rgba(138,138,150,0.5)",
          }}
        >
          Mercedes-Benz
        </p>
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-lg leading-snug group-hover:text-white transition-colors duration-200"
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              color: "#EAEAEE",
            }}
          >
            {name}
            {variant && (
              <span
                className="block text-sm font-normal"
                style={{ color: "rgba(138,138,150,0.7)" }}
              >
                {variant}
              </span>
            )}
          </h3>
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#C0001E" }}
          />
        </div>
        <p
          className="text-xl mt-1"
          style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E" }}
        >
          {price}
        </p>
      </div>
    </a>
  );
}
