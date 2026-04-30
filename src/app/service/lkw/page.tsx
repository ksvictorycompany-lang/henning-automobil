import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Truck, Wrench, ShieldCheck, Package, AlertTriangle, ClipboardCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { icon: Truck, title: "LKW Wartung", desc: "Planmäßige Wartung und Inspektion für Mercedes-Benz Nutzfahrzeuge nach Hersteller-Vorgabe und geltenden Vorschriften." },
  { icon: Wrench, title: "Werkstatt & Reparatur", desc: "Mechanische Instandsetzung, Diagnose und Fehleranalyse für schwere Nutzfahrzeuge durch erfahrene Techniker." },
  { icon: ClipboardCheck, title: "HU & SP (DEKRA)", desc: "Hauptuntersuchung und Sicherheitsprüfung für Nutzfahrzeuge direkt bei uns — ohne lange Wartezeiten." },
  { icon: ShieldCheck, title: "Garantieabwicklung", desc: "Direkte Abwicklung von Garantiefällen mit Mercedes-Benz für Ihren gewerblichen Fuhrpark." },
  { icon: Package, title: "LKW-Ersatzteile", desc: "Schnelle Verfügbarkeit von Original-Ersatzteilen für alle Mercedes-Benz LKW-Baureihen." },
  { icon: AlertTriangle, title: "Schnellreaktions-Service", desc: "Bei Pannen und Ausfällen reagieren wir schnell — Ausfallzeiten minimieren ist unser Anspruch." },
  { icon: Zap, title: "Elektro-Nutzfahrzeuge", desc: "Service für eActros und weitere Elektro-Nutzfahrzeuge von Mercedes-Benz — zukunftssicher betreut." },
];

export default function LKWServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Service"
          title="LKW Service"
          subtitle="Spezialisierter Service für Mercedes-Benz Lkw und Nutzfahrzeuge — von der Routinewartung bis zur Hauptuntersuchung. Ihr Partner für gewerbliche Mobilität."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Standort note */}
            <div
              className="mb-12 p-6"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase mb-2"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Standort LKW Service
              </p>
              <p
                className="text-lg"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
              >
                Roonstraße 67, 44653 Herne · Mo–Fr 08:00–18:00 Uhr · Sa 09:00–14:00 Uhr
              </p>
              <p
                className="mt-1 text-sm"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.5)" }}
              >
                Freie Werkstatt für alle Marken
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }}>
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="p-8" style={{ background: "#0C0C0E" }}>
                    <Icon size={26} className="mb-5" style={{ color: "#C0001E" }} />
                    <h3
                      className="text-xl uppercase mb-3"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-6"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <div>
                <h3
                  className="text-2xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Termin vereinbaren
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Roonstraße 67 · 02323 - 9 86 90
                </p>
              </div>
              <a
                href="tel:+4923239869"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold flex-shrink-0"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
              >
                Jetzt anrufen <ArrowRight size={14} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/service/pkw"
                className="flex-1 p-5"
                style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                  ← PKW Service
                </span>
              </Link>
              <Link
                href="/service/transporter"
                className="flex-1 p-5"
                style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                  ← Transporter Service
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
