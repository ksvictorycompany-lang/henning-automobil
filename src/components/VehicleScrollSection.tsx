"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface Vehicle {
  vehicleId: number;
  name: string;
  variant: string;
  price: string;
  imageUrl: string;
  href: string;
}

interface VehicleScrollSectionProps {
  vehicles: Vehicle[];
}

function VehicleScrollCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <a
      href={vehicle.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      style={{
        flexShrink: 0,
        width: "min(400px, 82vw)",
        display: "block",
        background: "#151518",
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(192,0,30,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.name}
          fill
          className="object-cover"
          style={{ transition: "transform 0.7s ease" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(12,12,14,0.75) 0%, transparent 55%)",
          }}
        />
      </div>
      <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "#EAEAEE",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          {vehicle.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "rgba(138,138,150,0.65)",
            marginTop: "0.3rem",
          }}
        >
          {vehicle.variant}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.25rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#C0001E",
            }}
          >
            {vehicle.price}
          </p>
          <ArrowUpRight
            size={16}
            style={{ color: "rgba(138,138,150,0.4)", transition: "color 0.2s ease" }}
          />
        </div>
      </div>
    </a>
  );
}

export function VehicleScrollSection({ vehicles }: VehicleScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const numCards = vehicles.length;
  const endPercent = `-${Math.round(((numCards - 1) / numCards) * 100)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endPercent]);

  return (
    <section ref={ref} style={{ position: "relative", height: `${numCards * 100}vh` }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Section header */}
        <div
          style={{
            flexShrink: 0,
            padding: "5rem 2rem 2rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 600,
                color: "#C0001E",
                fontSize: "0.7rem",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              MANUFAKTUR Fahrzeuge
            </p>
            <h2
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                color: "#EAEAEE",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Aktuelle
              <br />
              Highlights
            </h2>
          </div>
          <Link
            href="/fahrzeuge"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(138,138,150,0.55)",
            }}
            className="md:!flex"
          >
            Alle Fahrzeuge <ChevronRight size={16} />
          </Link>
        </div>

        {/* Scroll progress hint */}
        <div
          style={{
            flexShrink: 0,
            padding: "0 2rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "1px",
              background: "rgba(192,0,30,0.5)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.7rem",
              color: "rgba(138,138,150,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            scrollen zum entdecken
          </p>
        </div>

        {/* Horizontally scrolling cards */}
        <div style={{ flex: 1, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <motion.div
            style={{
              x,
              display: "flex",
              gap: "1.25rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            {vehicles.map((v) => (
              <VehicleScrollCard key={v.vehicleId} vehicle={v} />
            ))}
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <div
          style={{
            flexShrink: 0,
            padding: "1rem 2rem 2rem",
            textAlign: "center",
          }}
          className="md:hidden"
        >
          <Link
            href="/fahrzeuge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "#C0001E",
            }}
          >
            Alle 120+ Fahrzeuge <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
