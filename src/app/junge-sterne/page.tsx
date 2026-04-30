import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, ShieldCheck } from "lucide-react";

const GARANTIEN = [
  {
    title: "24 Monate Garantie",
    desc: "Jedes Junge Sterne Fahrzeug erhält eine zweijährige Anschlussgarantie nach dem Kauf — europaweit gültig.",
  },
  {
    title: "Gebrauchtwagen-Check",
    desc: "Über 150 Prüfpunkte durch Mercedes-Benz zertifizierte Techniker vor der Übergabe.",
  },
  {
    title: "Inzahlungnahme",
    desc: "Ihr aktuelles Fahrzeug wird fair bewertet und direkt in Zahlung genommen.",
  },
  {
    title: "10-Tage Rückgaberecht",
    desc: "Kein Gefallen gefunden? Sie haben 10 Tage Zeit, das Fahrzeug ohne Angabe von Gründen zurückzugeben.",
  },
  {
    title: "Finanzierung & Leasing",
    desc: "Individuelle Finanzierungsangebote direkt bei uns — transparent, schnell und auf Ihre Situation zugeschnitten.",
  },
  {
    title: "DEKRA-geprüft",
    desc: "Hauptuntersuchung direkt bei uns im Haus durch unsere täglichen DEKRA-Prüftermine.",
  },
  {
    title: "Mercedes-Benz Original-Teile",
    desc: "Ausschließlich originale Ersatz- und Verschleißteile beim Service — kein Kompromiss bei der Qualität.",
  },
  {
    title: "Fahrzeughistorie",
    desc: "Vollständige und lückenlose Servicedokumentation für jedes Fahrzeug im Bestand.",
  },
  {
    title: "Mobilitätsschutz",
    desc: "Pannenhilfe und Mobilitätsgarantie — europaweit, rund um die Uhr, direkt durch Mercedes-Benz.",
  },
  {
    title: "Europäisches Netzwerk",
    desc: "Als offizieller Mercedes-Benz Partner profitieren Sie von einem Servicenetzwerk in ganz Europa.",
  },
];

export default function JungeSternePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Fahrzeuge"
          title="Junge Sterne"
          subtitle="Junge Sterne glänzen länger — geprüfte Mercedes-Benz Jahreswagen mit umfassenden Garantien und dem Sicherheitsnetz eines offiziellen Partners."
        />

        {/* Intro */}
        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  Was sind Junge Sterne?
                </p>
                <h2
                  className="text-3xl md:text-4xl uppercase leading-none mb-6"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Gebrauchtwagen<br />mit Erstklasse-Qualität
                </h2>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Das Junge Sterne Programm von Mercedes-Benz umfasst ausgewählte, junge Gebrauchtwagen,
                  die einem strengen Qualitätscheck unterzogen werden. Mit einem Fahrzeugalter von
                  maximal 6 Jahren und bis zu 125.000 km Laufleistung erhalten Sie die Sicherheit
                  eines Neuwagens — zu einem deutlich attraktiveren Preis.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Über <strong style={{ color: "#EAEAEE" }}>15.000 Fahrzeuge</strong> stehen europaweit
                  im Junge Sterne Netzwerk zur Verfügung. Als offizieller Mercedes-Benz Händler in Herne
                  haben wir Zugang zum gesamten Bestand.
                </p>
              </div>
              <div
                className="p-8"
                style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.2)" }}
              >
                <ShieldCheck size={32} className="mb-4" style={{ color: "#C0001E" }} />
                <p
                  className="text-2xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  10 Garantiebausteine
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                >
                  Jedes Junge Sterne Fahrzeug ist durch 10 umfassende Garantiebausteine abgesichert.
                </p>
                <a
                  href="https://www.henning-automobil.de/junge-sterne/#!/vehicles?manufacturers=236&qualityseal=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  Junge Sterne entdecken <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* 10 Garantien */}
            <div className="mb-10">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Die Garantiebausteine
              </p>
              <h2
                className="text-3xl md:text-4xl uppercase leading-none mb-12"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Ihre Sicherheit.<br />Unsere Verantwortung.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {GARANTIEN.map((g, i) => (
                <div
                  key={g.title}
                  className="p-7"
                  style={{ background: "#0C0C0E" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: "var(--font-rajdhani)", color: "#C0001E", letterSpacing: "0.1em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      {g.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                  >
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-5 md:px-8" style={{ background: "#C0001E" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-3xl md:text-4xl uppercase leading-none text-white mb-2"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700 }}
              >
                Jetzt Fahrzeug finden
              </h2>
              <p className="text-base" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}>
                Über 15.000 geprüfte Junge Sterne — direkt online durchsuchen.
              </p>
            </div>
            <a
              href="https://www.henning-automobil.de/junge-sterne/#!/vehicles?manufacturers=236&qualityseal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-sm uppercase font-bold"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#FFFFFF", color: "#C0001E" }}
            >
              Junge Sterne Börse <ExternalLink size={15} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
