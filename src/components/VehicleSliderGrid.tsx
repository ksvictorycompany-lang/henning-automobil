"use client";

import { useState } from "react";
import Image from "next/image";

interface Vehicle {
  vehicleId: number;
  name: string;
  variant?: string;
  price: string;
  imageUrl: string;
  href: string;
}

interface VehicleSliderGridProps {
  vehicles: Vehicle[];
}

const SPEEDS = [22, 28, 20, 26]; // seconds per row — slight variation for organic feel
const DIRECTIONS = ["scroll-right", "scroll-left", "scroll-right", "scroll-left"];

function SliderCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <a
      href={vehicle.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flexShrink: 0,
        width: "360px",
        height: "220px",
        position: "relative",
        overflow: "hidden",
        display: "block",
        borderRadius: "2px",
        transition: "transform 0.3s ease, filter 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "scale(1.05)";
        el.style.filter = "brightness(1.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "scale(1)";
        el.style.filter = "brightness(1)";
      }}
    >
      <Image
        src={vehicle.imageUrl}
        alt={vehicle.name}
        fill
        unoptimized
        className="object-cover"
        sizes="360px"
      />
      {/* Bottom gradient + info */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(42,42,52,0.92) 0%, rgba(42,42,52,0.3) 45%, transparent 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1rem 1.1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "#EAEAEE",
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {vehicle.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#C0001E",
            margin: "0.15rem 0 0",
          }}
        >
          {vehicle.price}
        </p>
      </div>
    </a>
  );
}

function SliderRow({
  vehicles,
  speed,
  direction,
}: {
  vehicles: Vehicle[];
  speed: number;
  direction: string;
}) {
  const [paused, setPaused] = useState(false);
  const track = [...vehicles, ...vehicles]; // duplicate for seamless loop

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animation: `${direction} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {track.map((v, i) => (
          <SliderCard key={`${v.vehicleId}-${i}`} vehicle={v} />
        ))}
      </div>
    </div>
  );
}

export function VehicleSliderGrid({ vehicles }: VehicleSliderGridProps) {
  // Split 12 vehicles into 4 rows of 3
  const rows: Vehicle[][] = [
    vehicles.slice(0, 3),
    vehicles.slice(3, 6),
    vehicles.slice(6, 9),
    vehicles.slice(9, 12),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {rows.map((row, i) => (
        <SliderRow
          key={i}
          vehicles={row}
          speed={SPEEDS[i]}
          direction={DIRECTIONS[i]}
        />
      ))}
    </div>
  );
}
