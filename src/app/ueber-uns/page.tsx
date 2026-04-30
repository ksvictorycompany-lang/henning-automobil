import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

const MILESTONES = [
  { year: "1902", text: "Gründung des Unternehmens in Herne — Leidenschaft für Mobilität von Anfang an." },
  { year: "1950s", text: "Aufbau als offizieller Mercedes-Benz Service-Partner im Ruhrgebiet." },
  { year: "1990s", text: "Erweiterung des Standortes Dorstener Straße und Ausbau des Werkstattbetriebs." },
  { year: "2000s", text: "Einführung moderner Diagnosetechnik und Erweiterung des Teile-Sortiments auf alle Mercedes-Modelle." },
  { year: "Heute", text: "Zwei Standorte in Herne, über 120 Fahrzeuge und ein engagiertes Team — bereit für die Mobilität von morgen." },
];

export default function UeberUnsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Unsere Geschichte"
          title="Dem Neuen aufgeschlossen"
          subtitle="Seit über 120 Jahren stehen wir für Kompetenz, Verlässlichkeit und echte Leidenschaft für das Automobil."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Intro Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Die <strong style={{ color: "#EAEAEE" }}>Henning Automobil GmbH</strong> hat sich
                  seit dem Jahre 1902 mit Kompetenz und Sachverstand kontinuierlich weiter entwickelt
                  und ist heute ein erfolgreiches wie wirtschaftlich gesundes mittelständisches
                  Unternehmen.
                </p>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Zudem sind wir{" "}
                  <strong style={{ color: "#EAEAEE" }}>Service-Stützpunkt</strong> für
                  Mercedes-Benz PKW und Nutzfahrzeuge sowie smart und haben ständig ein großes
                  Sortiment an Original-Ersatzteilen für alle Modelle auf Lager.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                >
                  Neben unserem Hauptstandort, den es bereits seit über 115 Jahren gibt, bieten wir
                  Ihnen in Herne auch eine freie Werkstatt für Modelle{" "}
                  <strong style={{ color: "#EAEAEE" }}>aller Marken</strong>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1902", label: "Gründungsjahr" },
                  { value: "120+", label: "Jahre Erfahrung" },
                  { value: "2", label: "Standorte in Herne" },
                  { value: "120+", label: "Fahrzeuge im Bestand" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 flex flex-col justify-center"
                    style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="text-4xl leading-none mb-2"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-20">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-8"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Meilensteine
              </p>
              <div className="relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  style={{ background: "rgba(192,0,30,0.2)" }}
                />
                <div className="flex flex-col gap-8 pl-8">
                  {MILESTONES.map((m) => (
                    <div key={m.year} className="relative">
                      <div
                        className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: "#C0001E", background: "#0C0C0E" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C0001E" }} />
                      </div>
                      <p
                        className="text-sm mb-1"
                        style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}
                      >
                        {m.year}
                      </p>
                      <p
                        className="text-base"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                      >
                        {m.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Tomru */}
            <div
              className="p-8 md:p-10"
              style={{ background: "#151518", border: "1px solid rgba(192,0,30,0.15)" }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Sub-Brand
              </p>
              <h3
                className="text-3xl uppercase mb-4"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Team Tomru
              </h3>
              <p
                className="text-base leading-relaxed mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
              >
                Team Tomru ist unser spezialisiertes Verkaufsteam an der Dorstener Straße 329 — ein
                eingeschworenes Team, das Sie mit besonderem Engagement und persönlicher Beratung
                zu Ihrem nächsten Mercedes begleitet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <a href="tel:+492325929238" className="hover:text-white transition-colors" style={{ color: "#C0001E" }}>
                  02325 - 92 92 38
                </a>
                <a href="mailto:info@teamtomru.de" className="hover:text-white transition-colors" style={{ color: "rgba(138,138,150,0.7)" }}>
                  info@teamtomru.de
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
