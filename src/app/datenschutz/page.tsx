import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
        <section className="py-16 px-5 md:px-8">
          <div className="max-w-3xl mx-auto" style={{ color: "rgba(138,138,150,0.8)", fontFamily: "var(--font-dm-sans)" }}>
            <h2 className="text-2xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>1. Datenschutz auf einen Blick</h2>
            <p className="text-sm leading-relaxed mb-8">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
            <h2 className="text-2xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>2. Verantwortliche Stelle</h2>
            <p className="text-sm leading-relaxed mb-8">
              Henning Automobil GmbH<br />
              Dorstener Straße 329<br />
              44653 Herne<br />
              E-Mail: info@mercedes-henning.de<br />
              Telefon: 02325 - 92 92 0
            </p>
            <h2 className="text-2xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>3. Datenerfassung auf unserer Website</h2>
            <p className="text-sm leading-relaxed mb-4">
              <strong style={{ color: "#EAEAEE" }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-sm leading-relaxed mb-8">
              <strong style={{ color: "#EAEAEE" }}>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen,
              z. B. über unser Kontaktformular. Andere Daten werden automatisch beim Besuch
              der Website durch unsere IT-Systeme erfasst.
            </p>
            <h2 className="text-2xl uppercase mb-4" style={{ fontFamily: "var(--font-rajdhani)", color: "#EAEAEE", fontWeight: 700 }}>4. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed">
              Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten
              personenbezogenen Daten sowie auf Berichtigung, Sperrung oder Löschung dieser
              Daten. Bitte wenden Sie sich hierzu an: info@mercedes-henning.de
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
