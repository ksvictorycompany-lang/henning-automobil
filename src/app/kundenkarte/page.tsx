import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Phone, ArrowRight, Percent, Star, Users } from "lucide-react";

const VORTEILE = [
  "10 % Nachlass auf alle Werkstattleistungen (Teile & Arbeitslohn)",
  "Bevorzugte Terminvergabe in unserer Werkstatt",
  "Exklusive Angebote für Fahrzeugkauf und Zubehör",
  "Rabatte bei unseren Partnerunternehmen",
  "Kostenloser Kaffee beim Warten in unserer Lounge",
  "Persönlicher Ansprechpartner für alle Anfragen",
];

const PARTNER = [
  {
    name: "Ostkamp Sanitär",
    kategorie: "Sanitär & Heizung",
    vorteil: "10 % Rabatt auf alle Leistungen",
  },
  {
    name: "Pinguin Alltagshilfe",
    kategorie: "Pflegedienst & Haushalt",
    vorteil: "Sonderkonditionen für Mitglieder",
  },
  {
    name: "Zoremba Sanierung",
    kategorie: "Bau & Sanierung",
    vorteil: "Bevorzugte Terminvergabe + Rabatt",
  },
];

export default function KundenkartePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Unternehmen"
          title="Kundenkarte"
          subtitle="Als treuer Henning-Kunde profitieren Sie von exklusiven Vorteilen — 10 % auf alle Werkstattleistungen und Vergünstigungen bei unseren Partnerunternehmen."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Main benefit card */}
            <div
              className="flex flex-col md:flex-row items-stretch gap-px mb-16"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex-1 p-10 md:p-14 flex flex-col justify-center"
                style={{ background: "#151518" }}
              >
                <Percent size={40} className="mb-6" style={{ color: "#C0001E" }} />
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  Ihr Hauptvorteil
                </p>
                <h2
                  className="text-5xl md:text-7xl uppercase leading-none mb-4"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  10 %
                </h2>
                <p
                  className="text-xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Auf alle Werkstattleistungen
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                >
                  Teile, Arbeitslohn und Zubehör — 10 % Nachlass auf den Gesamtbetrag
                  bei jedem Werkstattbesuch. Einfach die Kundenkarte vorzeigen.
                </p>
              </div>
              <div
                className="flex-1 p-10 md:p-14 flex flex-col justify-center"
                style={{ background: "#0C0C0E" }}
              >
                <Star size={28} className="mb-6" style={{ color: "#C0001E" }} />
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-6"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  Alle Vorteile
                </p>
                <ul className="flex flex-col gap-4">
                  {VORTEILE.map((v) => (
                    <li
                      key={v}
                      className="flex items-start gap-3 text-sm leading-snug"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.85)" }}
                    >
                      <span
                        className="flex-shrink-0 mt-1.5"
                        style={{ width: "5px", height: "5px", background: "#C0001E", display: "block" }}
                      />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partner section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <Users size={22} style={{ color: "#C0001E" }} />
                <h2
                  className="text-2xl md:text-3xl uppercase"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Unsere Partnerunternehmen
                </h2>
              </div>
              <p
                className="text-sm mb-8 max-w-2xl"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
              >
                Mit der Henning Kundenkarte profitieren Sie auch bei unseren regionalen
                Partnerunternehmen von Sonderkonditionen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {PARTNER.map((p) => (
                  <div
                    key={p.name}
                    className="p-8"
                    style={{ background: "#151518" }}
                  >
                    <p
                      className="text-xs uppercase mb-1"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(138,138,150,0.5)" }}
                    >
                      {p.kategorie}
                    </p>
                    <h3
                      className="text-xl uppercase mb-3"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "#C0001E" }}
                    >
                      {p.vorteil}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Get the card */}
            <div
              className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.25)" }}
            >
              <div>
                <h3
                  className="text-2xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Kundenkarte beantragen
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Sprechen Sie uns direkt an — die Karte ist kostenlos und sofort aktivierbar.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <a
                  href="tel:+492325929257"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  <Phone size={14} /> 02325 - 92 92 57
                </a>
                <a
                  href="mailto:info@mercedes-henning.de"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(192,0,30,0.35)", color: "#C0001E" }}
                >
                  Per E-Mail <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
