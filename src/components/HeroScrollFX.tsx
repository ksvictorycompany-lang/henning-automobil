"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Section } from "./ui/full-screen-scroll-fx";

const FullScreenScrollFX = dynamic(
  () => import("./ui/full-screen-scroll-fx").then((m) => m.FullScreenScrollFX),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "500vh",
          background: "#0C0C0E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    ),
  }
);

const HERO_SECTIONS: Section[] = [
  {
    id: "e63",
    background:
      "https://image-am.pixel-base.de/image/2296/1724622_2026.03.24.12.34.36_30260520_01.jpg?vehicleId=1724622&lsid=639099524760530000",
    title: "E 63 AMG",
  },
  {
    id: "gle53",
    background:
      "https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000",
    title: "GLE 53 AMG",
  },
  {
    id: "gt53",
    background:
      "https://image-am.pixel-base.de/image/2296/1625698_2026.03.12.21.58.24_30242057_01.jpg?vehicleId=1625698&lsid=639089495045370000",
    title: "AMG GT 53",
  },
  {
    id: "cle53",
    background:
      "https://image-am.pixel-base.de/image/2296/1732697_2026.04.30.12.34.44_30260743_01.jpg?vehicleId=1732697&lsid=639131492848370000",
    title: "CLE 53 AMG",
  },
];

const HEADER = (
  <div>
    <p
      style={{
        fontFamily: "var(--font-rajdhani)",
        fontWeight: 600,
        fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
        letterSpacing: "0.4em",
        color: "#C0001E",
        marginBottom: "0.4rem",
      }}
    >
      SEIT 1902 · HERNE
    </p>
    <span style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700 }}>
      HENNING AUTOMOBIL
    </span>
  </div>
);

const FOOTER = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <p
      style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: "0.8rem",
        color: "rgba(138,138,150,0.7)",
        letterSpacing: "0.02em",
      }}
    >
      Ihr offizieller Mercedes-Benz Partner in Herne
    </p>
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
      <Link
        href="/fahrzeuge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.6rem 1.5rem",
          background: "#C0001E",
          color: "#FFFFFF",
          fontFamily: "var(--font-rajdhani)",
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Fahrzeuge <ArrowRight size={13} />
      </Link>
      <a
        href="https://www.henning-automobil.de/beratungstermin/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.6rem 1.5rem",
          border: "1px solid rgba(234,234,238,0.25)",
          color: "rgba(234,234,238,0.75)",
          fontFamily: "var(--font-rajdhani)",
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Termin vereinbaren
      </a>
    </div>
  </div>
);

export function HeroScrollFX() {
  return (
    <FullScreenScrollFX
      sections={HERO_SECTIONS}
      header={HEADER}
      footer={FOOTER}
      showProgress={false}
      bgTransition="fade"
      parallaxAmount={4}
      colors={{
        text: "rgba(234,234,238,0.95)",
        overlay: "rgba(0,0,0,0.22)",
        pageBg: "#0C0C0E",
        stageBg: "#0C0C0E",
      }}
      fontFamily="var(--font-rajdhani), system-ui, sans-serif"
      gridPaddingX={4}
    />
  );
}
