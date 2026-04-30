import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Truck, Wrench, ShieldCheck, Package, AlertTriangle, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { icon: Truck, title: "Transporter Wartung", desc: "Regelmäßige Wartung und Inspektion für alle Mercedes-Benz Transporter — Sprinter, Vito, V-Klasse, Citan und T-Klasse." },
  { icon: Wrench, title: "Werkstatt-Service", desc: "Reparaturen, Diagnose und Instandsetzung durch spezialisierte Techniker für Nutzfahrzeuge." },
  { icon: ShieldCheck, title: "Garantie & Kulanz", desc: "Direkte Garantieabwicklung mit Mercedes-Benz für Ihren gewerblichen Fuhrpark." },
  { icon: ClipboardCheck, title: "HU & AU", desc: "Hauptuntersuchung und Abgasuntersuchung für alle Transporter-Klassen direkt bei uns im Haus." },
  { icon: Package, title: "Transporter-Ersatzteile", desc: "Original Mercedes-Benz Nutzfahrzeug-Teile — kurzfristig verfügbar dank direktem Zugang zum Teileservice." },
  { icon: AlertTriangle, title: "Pannen & Notdienst", desc: "Schnelle Hilfe bei Pannen — gerade für gewerbliche Nutzer minimieren wir Ausfallzeiten." },
];

export default function TransporterServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Service"
          title="Transporter Service"
          subtitle="Spezialisierter Service für Mercedes-Benz Transporter und Nutzfahrzeuge. Von der Wartung bis zur HU — alles für Ihren Fuhrpark unter einem Dach."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Transporter models note */}
            <div
              className="mb-12 p-6"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase mb-2"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Betreute Modelle
              </p>
              <p
                className="text-lg uppercase"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Sprinter · Vito · V-Klasse · Citan · T-Klasse · eVito · eSprinter
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

            {/* Fuhrpark CTA */}
            <div
              className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-6"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <div>
                <h3
                  className="text-2xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Fuhrpark-Betreuung anfragen
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Sonderkonditionen für gewerbliche Flottenkunden. Sprechen Sie uns an.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <a
                  href="tel:+49232592920"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  02325 - 92 92 0 <ArrowRight size={14} />
                </a>
              </div>
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
                href="/service/lkw"
                className="flex-1 p-5"
                style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                  LKW Service →
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
