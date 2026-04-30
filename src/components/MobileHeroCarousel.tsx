"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    vehicleId: 1715338,
    name: "GLE 53 AMG",
    variant: "SUV Coupé · Hybrid Night",
    price: "136.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000",
  },
  {
    vehicleId: 1724622,
    name: "E 63 AMG",
    variant: "Limousine · MANUFAKTUR",
    price: "149.580 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1724622_2026.03.24.12.34.36_30260520_01.jpg?vehicleId=1724622&lsid=639099524760530000",
  },
  {
    vehicleId: 1625698,
    name: "AMG GT 53",
    variant: "Gran Turismo · Burmester",
    price: "108.900 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1625698_2026.03.12.21.58.24_30242057_01.jpg?vehicleId=1625698&lsid=639089495045370000",
  },
  {
    vehicleId: 1725781,
    name: "C 63 AMG",
    variant: "E AMG Performance",
    price: "97.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1725781_2026.03.27.22.01.07_30260549_01.jpg?vehicleId=1725781&lsid=639102456677670000",
  },
];

export function MobileHeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setTextVisible(true);
      }, 350);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "40vh", minHeight: "220px" }}
    >
      {/* Background images — crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={s.vehicleId}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.7s ease",
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

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(28,28,30,0.75) 0%, rgba(28,28,30,0.25) 45%, rgba(28,28,30,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "5rem 1.5rem 1.5rem" }}
      >
        {/* Slide text */}
        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.65rem",
              color: "rgba(234,234,238,0.6)",
              letterSpacing: "0.05em",
              marginBottom: "0.2rem",
            }}
          >
            {slide.variant}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 10vw, 2.8rem)",
              color: "#EAEAEE",
              textTransform: "uppercase",
              lineHeight: 0.95,
              marginBottom: "0.4rem",
            }}
          >
            {slide.name}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#C0001E",
            }}
          >
            {slide.price}
          </p>
        </div>

        {/* Buttons + dots row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <Link
              href="/fahrzeuge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.5rem 1.1rem",
                background: "#C0001E",
                color: "#fff",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Fahrzeuge <ArrowRight size={11} />
            </Link>
            <a
              href="https://www.henning-automobil.de/beratungstermin/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem 1.1rem",
                border: "1px solid rgba(234,234,238,0.25)",
                color: "rgba(234,234,238,0.8)",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Termin
            </a>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setTextVisible(false);
                  setTimeout(() => {
                    setCurrent(i);
                    setTextVisible(true);
                  }, 300);
                }}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === current ? "1.25rem" : "0.35rem",
                  height: "0.2rem",
                  background: i === current ? "#C0001E" : "rgba(234,234,238,0.35)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.35s ease, background 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
