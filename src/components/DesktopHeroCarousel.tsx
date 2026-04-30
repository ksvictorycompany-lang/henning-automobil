"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    vehicleId: 1715338,
    name: "GLE 53 AMG",
    variant: "SUV Coupé · Hybrid Night · MANUFAKTUR",
    price: "136.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715338",
  },
  {
    vehicleId: 1724622,
    name: "E 63 AMG",
    variant: "Limousine · MANUFAKTUR",
    price: "149.580 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1724622_2026.03.24.12.34.36_30260520_01.jpg?vehicleId=1724622&lsid=639099524760530000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1724622",
  },
  {
    vehicleId: 1625698,
    name: "AMG GT 53",
    variant: "Gran Turismo · Burmester · 4MATIC+",
    price: "108.900 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1625698_2026.03.12.21.58.24_30242057_01.jpg?vehicleId=1625698&lsid=639089495045370000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1625698",
  },
  {
    vehicleId: 1725781,
    name: "C 63 AMG",
    variant: "E AMG Performance · Pano · MANUFAKTUR",
    price: "97.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1725781_2026.03.27.22.01.07_30260549_01.jpg?vehicleId=1725781&lsid=639102456677670000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1725781",
  },
];

export function DesktopHeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setTextVisible(true);
      }, 400);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: "640px" }}
    >
      {/* Background images — crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={s.vehicleId}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image
            src={s.imageUrl}
            alt={s.name}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay — heavier on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(12,12,14,0.92) 0%, rgba(12,12,14,0.7) 40%, rgba(12,12,14,0.25) 70%, rgba(12,12,14,0.08) 100%)",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "180px",
          background: "linear-gradient(to top, rgba(12,12,14,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 5rem 0 6rem" }}
      >
        {/* Static eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.45em",
            color: "#C0001E",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Seit 1902 · Herne
        </p>

        {/* Animated slide text */}
        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.8rem",
              color: "rgba(234,234,238,0.5)",
              letterSpacing: "0.06em",
              marginBottom: "0.6rem",
            }}
          >
            {slide.variant}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              color: "#EAEAEE",
              textTransform: "uppercase",
              lineHeight: 0.88,
              marginBottom: "1.2rem",
            }}
          >
            {slide.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#C0001E",
              marginBottom: "2.8rem",
            }}
          >
            {slide.price}
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.2rem",
              background: "#C0001E",
              color: "#fff",
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Fahrzeug ansehen <ArrowRight size={14} />
          </a>
          <Link
            href="/fahrzeuge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.85rem 2.2rem",
              border: "1px solid rgba(234,234,238,0.22)",
              color: "rgba(234,234,238,0.75)",
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Alle Fahrzeuge
          </Link>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "2.5rem",
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setTextVisible(false);
                setTimeout(() => {
                  setCurrent(i);
                  setTextVisible(true);
                }, 350);
              }}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? "2rem" : "0.4rem",
                height: "0.18rem",
                background:
                  i === current ? "#C0001E" : "rgba(234,234,238,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.35s ease, background 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Large slide number — decorative, bottom right */}
      <div
        className="absolute"
        style={{
          bottom: "2.5rem",
          right: "4rem",
          opacity: textVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "8rem",
            color: "rgba(234,234,238,0.05)",
            lineHeight: 1,
            display: "block",
          }}
        >
          0{current + 1}
        </span>
      </div>
    </section>
  );
}
