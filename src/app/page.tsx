import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { HeroScrollFX } from "@/components/HeroScrollFX";
import { VehicleCard } from "@/components/VehicleCard";
import {
  Wrench,
  ShieldCheck,
  CircleDot,
  ClipboardCheck,
  Package,
  Zap,
  AlertTriangle,
  Truck,
  Scan,
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const FEATURED_VEHICLES = [
  {
    vehicleId: 1724622,
    name: "Mercedes E 63 AMG",
    variant: "GLS AMG Coupé · MANUFAKTUR",
    price: "149.580 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1724622_2026.03.24.12.34.36_30260520_01.jpg?vehicleId=1724622&lsid=639099524760530000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1724622",
  },
  {
    vehicleId: 1715338,
    name: "Mercedes GLE 53 AMG",
    variant: "Hybrid Night · MANUFAKTUR",
    price: "136.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715338",
  },
  {
    vehicleId: 1625698,
    name: "Mercedes AMG GT 53",
    variant: "4MATIC+ · Burmester",
    price: "108.900 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1625698_2026.03.12.21.58.24_30242057_01.jpg?vehicleId=1625698&lsid=639089495045370000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1625698",
  },
  {
    vehicleId: 1725781,
    name: "Mercedes C 63 AMG",
    variant: "E AMG Performance · MANUFAKTUR",
    price: "97.880 €",
    imageUrl:
      "https://image-am.pixel-base.de/image/2296/1725781_2026.03.27.22.01.07_30260549_01.jpg?vehicleId=1725781&lsid=639102456677670000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1725781",
  },
];

const SERVICES = [
  { icon: Wrench, title: "Werkstatt-Service", desc: "Wartung & Instandsetzung durch zertifizierte Mercedes-Benz Techniker" },
  { icon: ShieldCheck, title: "Garantie & Kulanz", desc: "Schnelle, unkomplizierte Abwicklung im Garantiezeitraum" },
  { icon: CircleDot, title: "Reifendienst", desc: "Montage, Wuchtung und Beratung für optimale Fahrsicherheit" },
  { icon: ClipboardCheck, title: "HU & AU", desc: "Tägliche DEKRA-Prüftermine direkt bei uns im Haus" },
  { icon: Package, title: "Teile-Sortiment", desc: "Original-Ersatzteile — bis 10 Uhr bestellt, um 14 Uhr verfügbar" },
  { icon: Zap, title: "Express-Service", desc: "Kleinreparaturen so schnell wie möglich erledigt" },
  { icon: AlertTriangle, title: "Pannen-Service", desc: "Unser Service-Mobil macht Sie vor Ort wieder flott" },
  { icon: Truck, title: "Hol- & Bring-Service", desc: "Wir holen Ihr Fahrzeug ab und bringen es startklar zurück" },
  { icon: Scan, title: "Scheibenreparatur", desc: "Steinschlag oder Vandalismus — schneller Einbau neuer Scheiben" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* MOBILE HERO — compact static (≤ md) */}
        <section
          className="block md:hidden relative overflow-hidden"
          style={{ height: "52vh", minHeight: "280px" }}
        >
          <Image
            src="https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000"
            alt="Mercedes GLE 53 AMG"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, rgba(28,28,30,0.82) 0%, rgba(28,28,30,0.35) 60%, rgba(28,28,30,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-7 pt-20">
            <p
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 600,
                fontSize: "0.6rem",
                letterSpacing: "0.45em",
                color: "#C0001E",
                marginBottom: "0.35rem",
                textTransform: "uppercase",
              }}
            >
              Seit 1902 · Herne
            </p>
            <h1
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 12vw, 3.4rem)",
                color: "#EAEAEE",
                lineHeight: 0.92,
                textTransform: "uppercase",
                marginBottom: "1.1rem",
              }}
            >
              Henning<br />
              <span style={{ color: "#C0001E" }}>Automobil</span>
            </h1>
            <div className="flex gap-3">
              <Link
                href="/fahrzeuge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.55rem 1.2rem",
                  background: "#C0001E",
                  color: "#fff",
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Fahrzeuge <ArrowRight size={12} />
              </Link>
              <a
                href="https://www.henning-automobil.de/beratungstermin/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.55rem 1.2rem",
                  border: "1px solid rgba(234,234,238,0.25)",
                  color: "rgba(234,234,238,0.8)",
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Termin
              </a>
            </div>
          </div>
        </section>

        {/* DESKTOP HERO — FullScreen Scroll FX (≥ md) */}
        <div className="hidden md:block">
          <HeroScrollFX />
        </div>

        {/* BRANDS MARQUEE — directly below hero on both breakpoints */}
        <LogoMarquee />

        {/* FEATURED VEHICLES */}
        <section className="py-20 md:py-28 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
                >
                  MANUFAKTUR Fahrzeuge
                </p>
                <h2
                  className="text-4xl md:text-5xl uppercase leading-none"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Aktuelle<br />Highlights
                </h2>
              </div>
              <Link
                href="/fahrzeuge"
                className="hidden md:flex items-center gap-2 text-sm uppercase font-bold transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(138,138,150,0.6)" }}
              >
                Alle Fahrzeuge <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURED_VEHICLES.map((v) => (
                <VehicleCard key={v.vehicleId} {...v} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/fahrzeuge"
                className="inline-flex items-center gap-2 text-sm uppercase font-bold"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E" }}
              >
                Alle 120+ Fahrzeuge <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section
          className="py-20 md:py-28 px-5 md:px-8"
          style={{ background: "#151518", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Werkstatt & Service
              </p>
              <h2
                className="text-4xl md:text-5xl uppercase leading-none"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Alles aus<br />einer Hand
              </h2>
              <div className="mt-4 h-px w-16" style={{ background: "#C0001E" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="p-7" style={{ background: "#151518" }}>
                    <Icon size={24} className="mb-4" style={{ color: "#C0001E" }} />
                    <h3
                      className="text-lg uppercase mb-2"
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

            <div className="mt-10 text-center">
              <Link
                href="/service"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase font-bold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  border: "1px solid rgba(192,0,30,0.4)",
                  color: "#C0001E",
                }}
              >
                Alle Services ansehen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ÜBER UNS */}
        <section className="py-20 md:py-28 px-5 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Über uns
              </p>
              <h2
                className="text-4xl md:text-5xl uppercase leading-none mb-6"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Dem Neuen<br />aufgeschlossen
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
              >
                Die Henning Automobil GmbH hat sich seit dem Jahre{" "}
                <strong style={{ color: "#EAEAEE" }}>1902</strong> mit Kompetenz
                und Sachverstand kontinuierlich weiter entwickelt und ist heute
                ein erfolgreiches, mittelständisches Unternehmen.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
              >
                Wir sind offizieller{" "}
                <strong style={{ color: "#EAEAEE" }}>Service-Stützpunkt</strong>{" "}
                für Mercedes-Benz PKW und Nutzfahrzeuge sowie smart — mit
                ständig großem Sortiment an Original-Ersatzteilen.
              </p>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm uppercase font-bold transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.08em", color: "#C0001E" }}
              >
                Unsere Geschichte <ArrowRight size={16} />
              </Link>
            </div>

            <div
              className="relative h-52 md:h-[460px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Image
                src="https://image-am.pixel-base.de/image/2296/1732697_2026.04.30.12.34.44_30260743_01.jpg?vehicleId=1732697&lsid=639131492848370000"
                alt="Henning Automobil MANUFAKTUR Fahrzeug"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(12,12,14,0.7) 0%, rgba(12,12,14,0.2) 100%)" }}
              />
              <div
                className="absolute bottom-6 left-6 px-4 py-3"
                style={{ background: "rgba(12,12,14,0.9)", border: "1px solid rgba(192,0,30,0.3)" }}
              >
                <p
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E" }}
                >
                  Seit 1902
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}
                >
                  Ihr Vertrauen. Unsere Stärke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STANDORTE */}
        <section
          className="py-20 md:py-28 px-5 md:px-8"
          style={{ background: "#151518", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}
              >
                Unsere Standorte
              </p>
              <h2
                className="text-4xl md:text-5xl uppercase leading-none"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
              >
                Zwei Mal<br />für Sie da
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8" style={{ background: "#1F1F24", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8" style={{ background: "#C0001E" }} />
                  <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                    Dorstener Str. 329
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                      Dorstener Straße 329, 44653 Herne
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="tel:+49232592920" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                      Service: 02325 - 92 92 0
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="tel:+492325929257" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                      Verkauf: 02325 - 92 92 57
                    </a>
                  </div>
                  <div className="mt-2 pt-4 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>SERVICE PKW</p>
                      <div className="flex items-start gap-2">
                        <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                        <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                          Mo–Fr 06:00–19:00<br />Sa 08:00–14:00
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>VERKAUF</p>
                      <div className="flex items-start gap-2">
                        <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                        <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                          Mo–Fr 08:00–18:00<br />Sa 09:00–14:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8" style={{ background: "#1F1F24", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8" style={{ background: "#C0001E" }} />
                  <h3 className="text-2xl uppercase" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                    Roonstraße 67
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C0001E" }} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                      Roonstraße 67, 44653 Herne
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                    <a href="tel:+4923239869" className="text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                      02323 - 9 86 90
                    </a>
                  </div>
                  <div className="mt-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xs mb-1" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.05em" }}>SERVICE</p>
                    <div className="flex items-start gap-2">
                      <Clock size={12} className="mt-0.5 flex-shrink-0" style={{ color: "rgba(138,138,150,0.5)" }} />
                      <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                        Mo–Fr 08:00–18:00 Uhr<br />Sa 09:00–14:00 Uhr
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-2" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.6)" }}>
                    Freie Werkstatt für alle Marken
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 md:py-20 px-5 md:px-8" style={{ background: "#C0001E" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-3xl md:text-4xl uppercase leading-none text-white mb-2"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700 }}
              >
                Termin vereinbaren
              </h2>
              <p className="text-base" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}>
                Beratungs- oder Werkstatttermin — wir sind für Sie da.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="https://www.henning-automobil.de/beratungstermin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", background: "#FFFFFF", color: "#C0001E" }}
              >
                Beratungstermin <ArrowRight size={16} />
              </a>
              <a
                href="https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase font-bold transition-all duration-200"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.5)", color: "#FFFFFF" }}
              >
                Werkstatttermin
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
