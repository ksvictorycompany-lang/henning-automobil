import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader eyebrow="Rechtliches" title="Impressum" />
        <section className="py-16 px-5 md:px-8">
          <div className="max-w-3xl mx-auto prose" style={{ color: "rgba(138,138,150,0.8)", fontFamily: "var(--font-dm-sans)" }}>
            <h2 style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>Angaben gemäß § 5 TMG</h2>
            <p>
              Henning Automobil GmbH<br />
              Dorstener Straße 329<br />
              44653 Herne
            </p>
            <h2 style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>Kontakt</h2>
            <p>
              Telefon: 02325 - 92 92 0<br />
              Fax: 02325 - 92 92 99<br />
              E-Mail: info@mercedes-henning.de
            </p>
            <h2 style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>Handelsregister</h2>
            <p>
              Eingetragen im Handelsregister des Amtsgerichts Herne.
            </p>
            <h2 style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>Verantwortlich für den Inhalt</h2>
            <p>
              Henning Automobil GmbH<br />
              Dorstener Straße 329<br />
              44653 Herne
            </p>
            <h2 style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir keine Gewähr
              übernehmen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
