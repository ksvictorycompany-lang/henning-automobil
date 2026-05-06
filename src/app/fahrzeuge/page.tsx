import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { VehicleCard } from "@/components/VehicleCard";
import { VehicleSliderGrid } from "@/components/VehicleSliderGrid";
import { VehicleFilter } from "@/components/VehicleFilter";
import { FahrzeugeCtaBanner } from "@/components/FahrzeugeCtaBanner";
import { ModelleGrid } from "@/components/ModelleGrid";
import { JungeSterneBanner } from "@/components/JungeSterneBanner";

const ALL_VEHICLES = [
  {
    vehicleId: 1724622,
    name: "Mercedes E 63 AMG",
    variant: "GLS AMG Coupé · Carbon · Keramik · MANUFAKTUR",
    price: "149.580 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1724622_2026.03.24.12.34.36_30260520_01.jpg?vehicleId=1724622&lsid=639099524760530000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1724622",
  },
  {
    vehicleId: 1723906,
    name: "Mercedes E 63 AMG",
    variant: "GLS AMG · Night · Pano · Burm · HUD · MANUFAKTUR",
    price: "139.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1723906_2026.03.20.13.43.15_30260498_01.jpg?vehicleId=1723906&lsid=639096109957530000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1723906",
  },
  {
    vehicleId: 1715338,
    name: "Mercedes GLE 53 AMG",
    variant: "Hybrid Night · Pano · Burm · HUD · MANUFAKTUR",
    price: "136.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1715338_2026.03.27.21.59.07_30260242_01.jpg?vehicleId=1715338&lsid=639102455475470000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715338",
  },
  {
    vehicleId: 1715198,
    name: "Mercedes E 53 AMG",
    variant: "Hybrid 4M+ · Edition 1 · Burm · MANUFAKTUR",
    price: "114.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1715198_2026.03.12.22.00.16_30260240_01.jpg?vehicleId=1715198&lsid=639089496165370000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1715198",
  },
  {
    vehicleId: 1539378,
    name: "Mercedes E-2008",
    variant: "43 4M AMG · 9G · Pano · MAGNO · MANUFAKTUR",
    price: "110.990 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1539378_2026.03.27.22.01.09_30260553_01.jpg?vehicleId=1539378&lsid=639102456697700000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1539378",
  },
  {
    vehicleId: 1625698,
    name: "Mercedes AMG GT 53",
    variant: "4MATIC+ · Head-up · Burmester · Memory",
    price: "108.900 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1625698_2026.03.12.21.58.24_30242057_01.jpg?vehicleId=1625698&lsid=639089495045370000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1625698",
  },
  {
    vehicleId: 1722983,
    name: "Mercedes GLS 350",
    variant: "d AMG Night · Panorama · Burm · HUD",
    price: "107.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1722983_2026.03.13.12.34.31_30260470_01.jpg?vehicleId=1722983&lsid=639090020714230000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1722983",
  },
  {
    vehicleId: 1714471,
    name: "Mercedes E-2008",
    variant: "43 AMG 4M+ · V8 Styling · Burm · HUD",
    price: "102.890 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1714471_2026.03.13.12.31.15_30260208_01.jpg?vehicleId=1714471&lsid=639090018755270000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1714471",
  },
  {
    vehicleId: 1725781,
    name: "Mercedes C 63 AMG",
    variant: "E AMG Performance · Prem+ · Pano · Burm",
    price: "97.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1725781_2026.03.27.22.01.07_30260549_01.jpg?vehicleId=1725781&lsid=639102456677670000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1725781",
  },
  {
    vehicleId: 1727015,
    name: "Mercedes GLE 350 d",
    variant: "e AMG Night · Pano · Burm · HUD · AHK",
    price: "87.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1727015_2026.04.02.12.44.39_30260577_01.jpg?vehicleId=1727015&lsid=639107306795570000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1727015",
  },
  {
    vehicleId: 1732697,
    name: "Mercedes CLE 53 AMG",
    variant: "Premium+ · HUD · Pano · Burm · MANUFAKTUR",
    price: "87.880 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1732697_2026.04.30.12.34.44_30260743_01.jpg?vehicleId=1732697&lsid=639131492848370000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1732697",
  },
  {
    vehicleId: 1730937,
    name: "Mercedes C 43 AMG",
    variant: "GL Coupé Sondermodell · Pano · HUD · Burm",
    price: "87.480 €",
    imageUrl: "https://image-am.pixel-base.de/image/2296/1730937_2026.04.27.12.35.40_30260683_01.jpg?vehicleId=1730937&lsid=639128901403430000",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles/1730937",
  },
];


export default function FahrzeugePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Fahrzeugbörse"
          title="Unsere Fahrzeuge"
          subtitle="Exklusive MANUFAKTUR Fahrzeuge und Junge Sterne aus dem Henning Bestand. Alle Fahrzeuge mit umfassender Garantie."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* CTA zur vollständigen Börse */}
            <FahrzeugeCtaBanner />

            {/* iOS Wheel Picker Filter */}
            <VehicleFilter />

            {/* Desktop: auto-slider grid */}
            <div className="hidden md:block">
              <VehicleSliderGrid vehicles={ALL_VEHICLES} />
            </div>

            {/* Mobile: card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {ALL_VEHICLES.map((v) => (
                <VehicleCard key={v.vehicleId} {...v} />
              ))}
            </div>

            {/* Mercedes Modelle */}
            <div id="modelle" className="mt-20">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "#C0001E" }}>
                Alle Modellreihen
              </p>
              <h2 className="text-3xl md:text-4xl uppercase leading-none mb-10" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}>
                Mercedes-Benz Modelle
              </h2>
              <ModelleGrid />
            </div>

            {/* Junge Sterne */}
            <JungeSterneBanner />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
