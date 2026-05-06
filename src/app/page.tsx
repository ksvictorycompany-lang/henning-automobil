import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { DesktopHeroCarousel } from "@/components/DesktopHeroCarousel";
import { VehicleCard } from "@/components/VehicleCard";
import { ServicesDesktopGrid } from "@/components/ServicesDesktopGrid";
import { MobileServiceStack } from "@/components/MobileServiceStack";
import { MobileVehicleStack } from "@/components/MobileVehicleStack";
import { MobileHeroCarousel } from "@/components/MobileHeroCarousel";
import { VelocityMarquee } from "@/components/VelocityMarquee";
import { LocationSection } from "@/components/LocationSection";
import { CtaBanner } from "@/components/CtaBanner";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const FEATURED_VEHICLES = [
  {
    vehicleId: 1724622,
    name: "Mercedes E 63 AMG",
    variant: "GLS AMG Coupé · MANUFAKTUR",
    price: "149.580 €",
    imageUrl: "/cars/e63.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1724622",
  },
  {
    vehicleId: 1715338,
    name: "Mercedes GLE 53 AMG",
    variant: "Hybrid Night · MANUFAKTUR",
    price: "136.880 €",
    imageUrl: "/cars/gle53.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715338",
  },
  {
    vehicleId: 1625698,
    name: "Mercedes AMG GT 53",
    variant: "4MATIC+ · Burmester",
    price: "108.900 €",
    imageUrl: "/cars/amggt53.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1625698",
  },
  {
    vehicleId: 1725781,
    name: "Mercedes C 63 AMG",
    variant: "E AMG Performance · MANUFAKTUR",
    price: "97.880 €",
    imageUrl: "/cars/c63.jpg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1725781",
  },
];


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* MOBILE HERO — carousel (≤ md) */}
        <div className="block md:hidden">
          <MobileHeroCarousel />
        </div>

        {/* DESKTOP HERO — auto-rotating carousel (≥ md) */}
        <div className="hidden md:block">
          <DesktopHeroCarousel />
        </div>

        {/* BRANDS MARQUEE — directly below hero on both breakpoints */}
        <LogoMarquee />

        {/* FEATURED VEHICLES */}
        <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: "rgba(8,3,18,0.38)" }}>
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
                Alle Fahrzeuge <ChevronRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
            {/* Mobile: stacked deck — tap to expand, then links work */}
            <div className="md:hidden">
              <MobileVehicleStack />
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                Alle 120+ Fahrzeuge <ChevronRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section
          className="py-20 md:py-28 px-5 md:px-8"
          style={{ background: "rgba(8,3,18,0.38)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
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

            {/* Mobile: stacked tap-through deck */}
            <div className="md:hidden">
              <MobileServiceStack />
            </div>

            {/* Desktop: grid */}
            <ServicesDesktopGrid />

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
                Alle Services ansehen <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* ÜBER UNS */}
        <section className="py-20 md:py-28 px-5 md:px-8" style={{ background: "rgba(8,3,18,0.38)" }}>
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
                Unsere Geschichte <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>

            <div
              className="relative h-52 md:h-[460px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Image
                src="/cars/ueber-uns.jpg"
                alt="Henning Automobil MANUFAKTUR Fahrzeug"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(50,50,58,0.55) 0%, rgba(50,50,58,0.1) 100%)" }}
              />
              <div
                className="hidden md:block absolute bottom-5 left-5 px-4 py-3"
                style={{ background: "rgba(50,50,58,0.88)", border: "1px solid rgba(192,0,30,0.3)" }}
              >
                <p className="text-2xl" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E" }}>
                  Seit 1902
                </p>
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Ihr Vertrauen. Unsere Stärke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEIT 1902 VELOCITY MARQUEE — mobile only */}
        <div className="block md:hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.5rem 0" }}>
          <VelocityMarquee baseVelocity={-4} scrollDependent>
            Seit 1902 · Ihr Vertrauen. Unsere Stärke. ·
          </VelocityMarquee>
        </div>

        {/* STANDORTE */}
        <section
          className="py-20 md:py-28 px-5 md:px-8"
          style={{ background: "rgba(8,3,18,0.38)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
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
            <LocationSection />
          </div>
        </section>

        {/* CTA BANNER */}
        <CtaBanner />

      </main>
      <Footer />
    </>
  );
}
