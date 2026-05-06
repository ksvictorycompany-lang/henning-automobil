"use client";

import dynamic from "next/dynamic";
import { PaperGrain } from "@/components/PaperGrain";
import { getServiceShader } from "@/lib/serviceShaders";

const WarpCanvas = dynamic(
  () => import("@/components/WarpCanvas").then((m) => ({ default: m.WarpCanvas })),
  { ssr: false }
);

const shader = getServiceShader("Schreiben Sie uns");

const inputStyle: React.CSSProperties = {
  background: "rgba(30,28,40,0.85)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#EAEAEE",
  fontFamily: "var(--font-dm-sans)",
};

export function KontaktFormCard() {
  return (
    <div className="relative overflow-hidden p-8 md:p-10" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
      <WarpCanvas config={shader} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "rgba(10,12,22,0.52)" }} />
      <PaperGrain style={{ zIndex: 2 }} />
      <div className="relative z-[3]">
        <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}>
          Allgemeine Anfragen
        </p>
        <h3 className="text-3xl uppercase mb-6" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
          Schreiben Sie uns
        </h3>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>Vorname</label>
              <input type="text" placeholder="Max" className="w-full px-4 py-3 text-sm outline-none transition-all duration-200" style={inputStyle} />
            </div>
            <div>
              <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>Nachname</label>
              <input type="text" placeholder="Mustermann" className="w-full px-4 py-3 text-sm outline-none transition-all duration-200" style={inputStyle} />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>E-Mail</label>
            <input type="email" placeholder="max@mustermann.de" className="w-full px-4 py-3 text-sm outline-none" style={inputStyle} />
          </div>
          <div>
            <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>Betreff</label>
            <input type="text" placeholder="Ihre Anfrage" className="w-full px-4 py-3 text-sm outline-none" style={inputStyle} />
          </div>
          <div>
            <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>Nachricht</label>
            <textarea rows={5} placeholder="Ihre Nachricht..." className="w-full px-4 py-3 text-sm outline-none resize-none" style={inputStyle} />
          </div>
          <button
            type="submit"
            className="w-full py-4 text-sm uppercase font-bold tracking-wider transition-all duration-200 hover:opacity-90"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
          >
            Nachricht senden
          </button>
          <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.4)" }}>
            Mit dem Absenden stimmen Sie unserer{" "}
            <a href="/datenschutz" className="underline hover:text-white transition-colors">Datenschutzerklärung</a>{" "}
            zu.
          </p>
        </form>
      </div>
    </div>
  );
}
