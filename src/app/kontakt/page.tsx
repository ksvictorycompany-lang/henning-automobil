import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Standorte */}
            <div className="flex flex-col gap-6">
              {/* Standort 1 */}
              <div className="p-8" style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8" style={{ background: "#C0001E" }} />
                  <div>
                    <p className="text-xs uppercase mb-0.5" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E", letterSpacing: "0.1em" }}>Hauptstandort</p>
                    <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>Dorstener Str. 329</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Dorstener Straße 329, 44653 Herne</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <div className="flex flex-col gap-1">
                      <a href="tel:+49232592920" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Service: 02325 - 92 92 0</a>
                      <a href="tel:+492325929257" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Verkauf: 02325 - 92 92 57</a>
                      <a href="tel:+492325929215" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Teile: 02325 - 92 92 15</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="mailto:info@mercedes-henning.de" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>info@mercedes-henning.de</a>
                  </div>
                </div>
                <div className="pt-6 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Service PKW</p>
                    <div className="flex items-start gap-2">
                      <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                      <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 06:00–19:00<br />Sa 08:00–14:00</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Verkauf</p>
                    <div className="flex items-start gap-2">
                      <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                      <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 08:00–18:00<br />Sa 09:00–14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standort 2 */}
              <div className="p-8" style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8" style={{ background: "#C0001E" }} />
                  <div>
                    <p className="text-xs uppercase mb-0.5" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E", letterSpacing: "0.1em" }}>Zweigstelle</p>
                    <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>Roonstraße 67</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>Roonstraße 67, 44653 Herne</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="tel:+4923239869" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>02323 - 9 86 90</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="mailto:info@henning-automobil.de" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>info@henning-automobil.de</a>
                  </div>
                </div>
                <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>Service (alle Marken)</p>
                  <div className="flex items-start gap-2">
                    <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                    <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>Mo–Fr 08:00–18:00 Uhr<br />Sa 09:00–14:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="p-8 md:p-10" style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}>
                Allgemeine Anfragen
              </p>
              <h3 className="text-3xl uppercase mb-6" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                Schreiben Sie uns
              </h3>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>
                      Vorname
                    </label>
                    <input
                      type="text"
                      placeholder="Max"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: "#1F1F24",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#EAEAEE",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>
                      Nachname
                    </label>
                    <input
                      type="text"
                      placeholder="Mustermann"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: "#1F1F24",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#EAEAEE",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    placeholder="max@mustermann.de"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      background: "#1F1F24",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#EAEAEE",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>
                    Betreff
                  </label>
                  <input
                    type="text"
                    placeholder="Ihre Anfrage"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{
                      background: "#1F1F24",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#EAEAEE",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(138,138,150,0.6)", letterSpacing: "0.08em" }}>
                    Nachricht
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Ihre Nachricht..."
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: "#1F1F24",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#EAEAEE",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm uppercase font-bold tracking-wider transition-all duration-200 hover:opacity-90"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#C0001E", color: "#FFFFFF" }}
                >
                  Nachricht senden
                </button>
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.4)" }}>
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-white transition-colors">Datenschutzerklärung</a>{" "}
                  zu.
                </p>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
