import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Clock, MapPin, ArrowRight, ExternalLink, Wrench, Car } from "lucide-react";

export default function BeratungsterminPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Terminvereinbarung"
          title="Beratungstermin"
          subtitle="Bequem online einen Beratungstermin vereinbaren — für Fahrzeugkauf, Finanzierung, Inzahlungnahme oder Service. Wir nehmen uns Zeit für Sie."
        />

        {/* Two big CTA options */}
        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Beratungstermin */}
              <div
                className="flex flex-col p-10"
                style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.25)" }}
              >
                <Car size={36} className="mb-6" style={{ color: "#C0001E" }} />
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  Fahrzeug & Verkauf
                </p>
                <h2
                  className="text-3xl md:text-4xl uppercase leading-none mb-4"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Beratungs&shy;termin
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8 flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Persönliche Beratung für Fahrzeugkauf, Finanzierung & Leasing, Inzahlungnahme Ihres
                  aktuellen Fahrzeugs oder allgemeine Fragen zu unserem Bestand. Unsere Verkaufsberater
                  nehmen sich Zeit für Sie.
                </p>
                <div className="mb-8">
                  <p
                    className="text-xs uppercase mb-3"
                    style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)", letterSpacing: "0.1em" }}
                  >
                    Themen
                  </p>
                  <ul className="flex flex-col gap-2">
                    {["Fahrzeugkauf", "Finanzierung & Leasing", "Inzahlungnahme", "Probefahrt"].map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                      >
                        <span style={{ width: "4px", height: "4px", background: "#C0001E", display: "block", flexShrink: 0 }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://www.henning-automobil.de/beratungstermin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold self-start"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  Online buchen <ExternalLink size={14} />
                </a>
              </div>

              {/* Werkstatttermin */}
              <div
                className="flex flex-col p-10"
                style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Wrench size={36} className="mb-6" style={{ color: "#C0001E" }} />
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  Service & Werkstatt
                </p>
                <h2
                  className="text-3xl md:text-4xl uppercase leading-none mb-4"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Werkstatt&shy;termin
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8 flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Wartung, Inspektion, Reparatur oder HU/AU — buchen Sie Ihren Werkstatttermin direkt
                  online. Unsere zertifizierten Mercedes-Benz Techniker stehen an sechs Tagen in der
                  Woche für Sie bereit.
                </p>
                <div className="mb-8">
                  <p
                    className="text-xs uppercase mb-3"
                    style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)", letterSpacing: "0.1em" }}
                  >
                    Leistungen
                  </p>
                  <ul className="flex flex-col gap-2">
                    {["Wartung & Inspektion", "HU & AU (DEKRA)", "Reifenwechsel", "Reparatur & Diagnose"].map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                      >
                        <span style={{ width: "4px", height: "4px", background: "#C0001E", display: "block", flexShrink: 0 }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold self-start"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    border: "1px solid rgba(192,0,30,0.4)",
                    color: "#C0001E",
                  }}
                >
                  Werkstatttermin buchen <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Or call us */}
            <div
              className="p-8"
              style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase mb-6"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Oder rufen Sie uns an
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6" style={{ background: "#C0001E" }} />
                    <h3
                      className="text-xl uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      Dorstener Str. 329
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                      <MapPin size={14} style={{ color: "#C0001E" }} />
                      <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                        Dorstener Straße 329, 44653 Herne
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} style={{ color: "#C0001E" }} />
                      <div>
                        <a href="tel:+492325929257" className="text-sm hover:text-white transition-colors block" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                          Verkauf: 02325 - 92 92 57
                        </a>
                        <a href="tel:+49232592920" className="text-sm hover:text-white transition-colors block" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                          Service: 02325 - 92 92 0
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={14} className="mt-0.5" style={{ color: "#C0001E" }} />
                      <div className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                        <p>Verkauf: Mo–Fr 08–18 Uhr, Sa 09–14 Uhr</p>
                        <p>Service: Mo–Fr 06–19 Uhr, Sa 08–14 Uhr</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6" style={{ background: "#C0001E" }} />
                    <h3
                      className="text-xl uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      Roonstraße 67
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                      <MapPin size={14} style={{ color: "#C0001E" }} />
                      <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                        Roonstraße 67, 44653 Herne
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} style={{ color: "#C0001E" }} />
                      <a href="tel:+4923239869" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                        02323 - 9 86 90
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={14} className="mt-0.5" style={{ color: "#C0001E" }} />
                      <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                        Mo–Fr 08–18 Uhr, Sa 09–14 Uhr
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
