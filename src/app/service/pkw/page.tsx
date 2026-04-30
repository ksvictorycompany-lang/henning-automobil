import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Wrench, ShieldCheck, CircleDot, ClipboardCheck, Package, Zap, AlertTriangle, Truck, Scan, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { icon: Wrench, title: "Wartung & Inspektion", desc: "Regelmäßige Wartungsintervalle nach Herstellervorgabe durch zertifizierte Mercedes-Benz Techniker. Original-Öle und Filterelemente." },
  { icon: ShieldCheck, title: "Garantie & Kulanz", desc: "Schnelle, unkomplizierte Garantieabwicklung innerhalb und außerhalb des Garantiezeitraums — direkt mit Mercedes-Benz." },
  { icon: CircleDot, title: "Reifenservice", desc: "Montage, Auswuchten und fachgerechte Einlagerung. Komplette Sommer-, Winter- und Ganzjahresreifenkonzepte." },
  { icon: ClipboardCheck, title: "HU & AU (DEKRA)", desc: "Tägliche DEKRA-Prüftermine direkt bei uns — Hauptuntersuchung und Abgasuntersuchung ohne Umwege." },
  { icon: Package, title: "Original-Ersatzteile", desc: "Garantiert original Mercedes-Benz Teile. Bis 10 Uhr bestellt — am gleichen Tag ab 14 Uhr verfügbar." },
  { icon: Zap, title: "Express-Service", desc: "Für Kleinreparaturen und Arbeiten ohne Termin: unser Express-Service erledigt Ihr Anliegen so schnell wie möglich." },
  { icon: AlertTriangle, title: "Pannen-Notdienst", desc: "Unser Service-Mobil kommt zu Ihnen — schnell, zuverlässig, rund um die Uhr erreichbar." },
  { icon: Truck, title: "Hol- & Bring-Service", desc: "Wir holen Ihr Fahrzeug am Wunschort ab, führen die Arbeiten durch und bringen es startklar zurück." },
  { icon: Scan, title: "Scheibenreparatur", desc: "Steinschlag, Riss oder Vandalismus — schneller fachgerechter Einbau neuer Original-Scheiben." },
];

export default function PKWServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Service"
          title="PKW Service"
          subtitle="Vollständiger Mercedes-Benz Service für Personenkraftwagen — von der Wartung bis zur Hauptuntersuchung. Alles aus einer Hand, von zertifizierten Technikern."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
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
              className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <div>
                <h3
                  className="text-2xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Jetzt Werkstatttermin buchen
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Mo–Fr 06:00–19:00 Uhr · Sa 08:00–14:00 Uhr · Service: 02325 - 92 92 0
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <a
                  href="https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  Online buchen <ArrowRight size={14} />
                </a>
                <a
                  href="tel:+49232592920"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(192,0,30,0.35)", color: "#C0001E" }}
                >
                  Anrufen
                </a>
              </div>
            </div>

            {/* Other service links */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/service/transporter"
                className="flex-1 p-5 flex items-center justify-between transition-colors duration-200"
                style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                  Transporter Service →
                </span>
              </Link>
              <Link
                href="/service/lkw"
                className="flex-1 p-5 flex items-center justify-between transition-colors duration-200"
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
