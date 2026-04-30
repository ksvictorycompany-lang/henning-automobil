import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface VehicleCardProps {
  vehicleId: number;
  name: string;
  variant?: string;
  price: string;
  href: string;
  imageUrl: string;
}

export function VehicleCard({ name, variant, price, href, imageUrl }: VehicleCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden transition-all duration-300"
      style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden" style={{ background: "#1F1F24" }}>
        <Image
          src={imageUrl}
          alt={`${name} ${variant ?? ""}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(192,0,30,0.08)" }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1 flex-1">
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
            className="text-lg leading-snug group-hover:text-white transition-colors"
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
