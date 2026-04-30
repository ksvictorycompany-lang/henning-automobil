"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";

const MODELLE = [
  {
    category: "Limousinen & Coupés",
    models: [
      { name: "A-Klasse Kompaktlimousine", slug: "mercedes-benz-a-klasse-kompaktlimousine" },
      { name: "A-Klasse Limousine", slug: "mercedes-benz-a-klasse-limousine" },
      { name: "B-Klasse Sports Tourer", slug: "mercedes-benz-b-klasse-sports-tourer" },
      { name: "C-Klasse Limousine", slug: "mercedes-benz-c-klasse-limousine" },
      { name: "C-Klasse T-Modell", slug: "mercedes-benz-c-klasse-t-modell" },
      { name: "C-Klasse Coupé", slug: "mercedes-benz-c-klasse-coupe" },
      { name: "C-Klasse Cabriolet", slug: "mercedes-benz-c-klasse-cabriolet" },
      { name: "CLA Coupé", slug: "mercedes-benz-cla-coupe" },
      { name: "CLA Shooting Brake", slug: "mercedes-benz-cla-shooting-brake" },
      { name: "CLS Coupé", slug: "mercedes-benz-cls-coupe" },
      { name: "E-Klasse Limousine", slug: "mercedes-benz-e-klasse-limousine" },
      { name: "E-Klasse T-Modell", slug: "mercedes-benz-e-klasse-t-modell" },
      { name: "E-Klasse Coupé", slug: "mercedes-benz-e-klasse-coupe" },
      { name: "E-Klasse Cabriolet", slug: "mercedes-benz-e-klasse-cabriolet" },
      { name: "S-Klasse Limousine", slug: "mercedes-benz-s-klasse-limousine" },
    ],
  },
  {
    category: "SUV & Geländewagen",
    models: [
      { name: "GLA", slug: "mercedes-benz-gla" },
      { name: "GLB", slug: "mercedes-benz-glb" },
      { name: "GLC", slug: "mercedes-benz-glc" },
      { name: "GLC Coupé", slug: "mercedes-benz-glc-coupe" },
      { name: "GLE", slug: "mercedes-benz-gle" },
      { name: "GLE Coupé", slug: "mercedes-benz-gle-coupe" },
      { name: "GLS", slug: "mercedes-benz-gls" },
      { name: "G-Klasse Geländewagen", slug: "mercedes-benz-g-klasse-gelaendewagen" },
    ],
  },
  {
    category: "Mercedes-AMG",
    models: [
      { name: "AMG GT 4-Türer Coupé", slug: "mercedes-amg-gt-4-tuerer-coupe" },
      { name: "AMG SL Roadster", slug: "mercedes-amg-sl-roadster" },
    ],
  },
  {
    category: "Mercedes-EQ Elektro",
    models: [
      { name: "EQA", slug: "mercedes-benz-eqa" },
      { name: "EQB", slug: "mercedes-benz-eqb" },
      { name: "EQC", slug: "mercedes-benz-eqc" },
      { name: "EQE", slug: "mercedes-benz-eqe" },
      { name: "EQS", slug: "mercedes-benz-eqs" },
      { name: "EQS SUV", slug: "mercedes-benz-eqs-suv" },
    ],
  },
  {
    category: "Nutzfahrzeuge",
    models: [
      { name: "T-Klasse", slug: "mercedes-benz-t-klasse" },
      { name: "V-Klasse", slug: "mercedes-benz-v-klasse" },
    ],
  },
];

const CATEGORY_ACCENTS: Record<string, string> = {
  "Limousinen & Coupés": "#1a1a1f",
  "SUV & Geländewagen": "#16161b",
  "Mercedes-AMG": "#1c0a0a",
  "Mercedes-EQ Elektro": "#0a0f1c",
  "Nutzfahrzeuge": "#14141a",
};

export default function ModelPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Fahrzeuge"
          title="Mercedes Modelle"
          subtitle="Entdecken Sie das gesamte Mercedes-Benz Programm — von der kompakten A-Klasse bis zur elektrischen EQS-Familie. Als offizieller Partner haben wir Zugang zu allen Modellen."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {MODELLE.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1 h-7 flex-shrink-0" style={{ background: "#C0001E" }} />
                  <h2
                    className="text-2xl md:text-3xl uppercase"
                    style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                  >
                    {cat.category}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {cat.models.map((model) => (
                    <a
                      key={model.slug}
                      href={`https://www.henning-automobil.de/modelle/${model.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between p-5 transition-all duration-200"
                      style={{
                        background: CATEGORY_ACCENTS[cat.category],
                        border: "1px solid rgba(255,255,255,0.06)",
                        minHeight: "110px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(192,0,30,0.4)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "#1f1f24";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLAnchorElement).style.background = CATEGORY_ACCENTS[cat.category];
                      }}
                    >
                      <p
                        className="text-sm md:text-base leading-tight"
                        style={{
                          fontFamily: "var(--font-rajdhani)",
                          fontWeight: 700,
                          color: "#EAEAEE",
                          textTransform: "uppercase",
                        }}
                      >
                        {model.name}
                      </p>
                      <ExternalLink
                        size={13}
                        className="mt-3 transition-colors duration-200 group-hover:text-red-600"
                        style={{ color: "rgba(138,138,150,0.4)" }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-20 px-5 md:px-8"
          style={{ background: "#151518", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p
                className="text-2xl md:text-3xl uppercase mb-2"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Über 120 Fahrzeuge auf Lager
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                Alle verfügbaren Fahrzeuge — MANUFAKTUR, Junge Sterne und mehr.
              </p>
            </div>
            <a
              href="https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-sm uppercase font-bold"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
            >
              Zur Fahrzeugbörse <ExternalLink size={15} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
