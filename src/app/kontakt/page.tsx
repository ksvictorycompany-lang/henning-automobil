import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { KontaktTerminCards } from "@/components/KontaktTerminCards";
import { KontaktStandorte } from "@/components/KontaktStandorte";
import { KontaktFormCard } from "@/components/KontaktFormCard";

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Kontakt"
          title="Sprechen Sie uns an"
          subtitle="Wir sind an zwei Standorten in Herne für Sie da — persönlich, telefonisch oder per E-Mail."
        />

        {/* Terminsektion */}
        <section
          id="termin"
          className="py-16 md:py-20 px-5 md:px-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
            >
              Terminvereinbarung
            </p>
            <h2
              className="text-3xl md:text-4xl uppercase leading-none mb-10"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
            >
              Jetzt Termin vereinbaren
            </h2>
            <KontaktTerminCards />
          </div>
        </section>

        {/* Standorte & Kontaktformular */}
        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <KontaktStandorte />
            <KontaktFormCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
