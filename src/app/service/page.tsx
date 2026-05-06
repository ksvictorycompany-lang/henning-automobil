"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StackedCards } from "@/components/StackedCards";
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
  Settings,
  Gauge,
  ArrowRight,
} from "lucide-react";

const WERKSTATT_URL =
  "https://www.mercedes-benz.de/passengercars/services-accessories/service-booking/oab.module.html#/dealer?oabDealerGroup=GS00107034";

const PKW_SERVICES = [
  {
    icon: Wrench,
    title: "Werkstatt-Service",
    desc: "Wartung, Unfallinstandsetzung oder Fahrzeugvermessung. Die Spezialisten in unserer Werkstatt sind immer auf dem neuesten Stand der Technik, kennen auch das kleinste Detail an Ihrem Fahrzeug und machen es schnell und fachgerecht wieder fit.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie & Kulanz",
    desc: "Reparaturen im Garantiezeitraum werden von unserem Service-Team zeitnah abgewickelt, damit Ihr Fahrzeug schnell wieder wie neu ist. Auf Wunsch verlängern wir die Garantie für Ihr Fahrzeug.",
  },
  {
    icon: CircleDot,
    title: "Reifendienst",
    desc: "Nur mit guten und regelmäßig überprüften Reifen fahren Sie auf jeder Straße und zu jeder Jahreszeit komfortabel und sicher. Unser Reifenservice berät Sie umfassend und montiert die optimalen Reifen und Räder.",
  },
  {
    icon: ClipboardCheck,
    title: "HU & AU",
    desc: "Sparen Sie sich weite Wege. In unserem Hause können Sie Ihr Fahrzeug für Haupt- und Abgasuntersuchung anmelden. Wir bieten tägliche Prüftermine durch die DEKRA.",
  },
  {
    icon: Package,
    title: "Teile-Sortiment",
    desc: "Unser bestens sortiertes Lager hält für Sie immer eine große Auswahl an Original-Teilen, Zubehör und Accessoires bereit. Bis 10 Uhr bestellt — um 14 Uhr bei uns.",
  },
  {
    icon: Zap,
    title: "Express-Service",
    desc: "So schnell wie möglich erledigt unser Service Kleinreparaturen. Es ist uns wichtig, dass Ihnen schnell geholfen wird. Eben gebracht, schon gemacht — dafür stehen wir.",
  },
  {
    icon: AlertTriangle,
    title: "Pannen-Service",
    desc: "Falls Sie mit Ihrem Fahrzeug liegen bleiben, ist unser Pannen-Service schnell bei Ihnen. Mit unserem bestens ausgestatteten Service-Mobil machen wir Sie vor Ort wieder flott.",
  },
  {
    icon: Truck,
    title: "Hol- & Bring-Service",
    desc: "Damit Service-Termine nicht Ihre Zeitplanung durcheinander bringen, holen wir Ihr Fahrzeug bei Ihnen zu Hause oder am Arbeitsplatz ab und bringen es startklar zurück.",
  },
  {
    icon: Scan,
    title: "Scheibenreparatur",
    desc: "Ob Steinschlag oder Vandalismus: Eine defekte Scheibe ist immer eine unangenehme Sache. Unser Scheibenreparatur-Service baut die neue Scheibe schnell und fachgerecht ein.",
  },
];

const TRANSPORTER_SERVICES = [
  {
    icon: Truck,
    title: "Sprinter Service",
    desc: "Spezialisierte Wartung und Reparatur für den Mercedes-Benz Sprinter — Deutschlands meistverkauften Transporter. Kurze Ausfallzeiten für Ihr Gewerbe.",
  },
  {
    icon: Wrench,
    title: "Vito & V-Klasse",
    desc: "Vollständige Serviceabdeckung für alle Vito und V-Klasse Modelle. Schnelle Abfertigung und flexible Terminvergabe für Gewerbetreibende.",
  },
  {
    icon: Settings,
    title: "Nutzfahrzeug-Inspektion",
    desc: "Regelmäßige Hauptuntersuchungen, Sicherheitschecks und Wartungen nach Mercedes-Benz Herstellervorgaben — für langen, störungsfreien Betrieb.",
  },
  {
    icon: ClipboardCheck,
    title: "UVV & Hauptuntersuchung",
    desc: "Unfallverhütungsvorschriften und gesetzliche Prüfungen für Ihren gewerblichen Fuhrpark. Wir koordinieren alle Termine für Sie.",
  },
  {
    icon: Package,
    title: "Original-Teile",
    desc: "Nur echte Mercedes-Benz Teile für Ihren Transporter. Schnelle Verfügbarkeit aus unserem großen Lager — bis 10 Uhr bestellt, um 14 Uhr eingebaut.",
  },
  {
    icon: Zap,
    title: "Schnellservice",
    desc: "Minimale Ausfallzeit für Ihr Gewerbe. Flexible Früh- und Spättermine nach Absprache, damit Ihr Transporter schnell wieder auf der Straße ist.",
  },
];

const LKW_SERVICES = [
  {
    icon: Truck,
    title: "LKW-Werkstatt",
    desc: "Vollausgestattete Werkstatt an der Roonstraße 67 für schwere Nutzfahrzeuge aller Marken. Zertifizierte Nutzfahrzeug-Meister mit langjähriger Erfahrung.",
  },
  {
    icon: Gauge,
    title: "Achsmessung & Fahrwerk",
    desc: "Präzise Fahrzeugvermessung für sichere und gleichmäßige Reifenabnutzung am Nutzfahrzeug — wichtig für Fahrsicherheit und Wirtschaftlichkeit.",
  },
  {
    icon: Wrench,
    title: "Motor & Getriebe",
    desc: "Instandsetzung und Reparatur von Motor und Getriebe durch zertifizierte Nutzfahrzeug-Meister. Wir arbeiten schnell und transparent.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheits-Check",
    desc: "Vollständiger Sicherheitscheck nach §57b StVZO für Ihren LKW. Wir bieten auch die gesetzlich vorgeschriebene Prüfung aller Sicherheitssysteme.",
  },
  {
    icon: AlertTriangle,
    title: "Pannen-Service",
    desc: "Liegen geblieben? Unser Pannen-Service ist auch für Nutzfahrzeuge schnell vor Ort. Wir bringen Sie und Ihre Ladung wieder ans Ziel.",
  },
  {
    icon: ClipboardCheck,
    title: "Alle Marken",
    desc: "Die freie Werkstatt an der Roonstraße 67 ist für alle LKW-Marken ausgelegt. Keine Markenbindung — wir helfen Ihnen, egal welchen Hersteller Sie fahren.",
  },
];

const TABS = [
  { id: "pkw", label: "PKW" },
  { id: "transporter", label: "Transporter" },
  { id: "lkw", label: "LKW" },
];

type Service = { icon: LucideIcon; title: string; desc: string };

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState("pkw");

  const services =
    activeTab === "pkw"
      ? PKW_SERVICES
      : activeTab === "transporter"
      ? TRANSPORTER_SERVICES
      : LKW_SERVICES;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Werkstatt & Service"
          title="Alles aus einer Hand"
          subtitle="Von der Wartung bis zum Pannen-Service — das Henning Team steht Ihnen mit spezialisierten Servicebereichen zur Seite."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Tabs */}
            <div
              className="flex mb-10"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    padding: "0.75rem 2rem",
                    color: activeTab === tab.id ? "#EAEAEE" : "rgba(138,138,150,0.5)",
                    borderBottom: activeTab === tab.id ? "2px solid #C0001E" : "2px solid transparent",
                    background: "transparent",
                    cursor: "pointer",
                    marginBottom: "-1px",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile: stacked tap-through deck, resets on tab change */}
            <div className="md:hidden">
              <StackedCards key={activeTab} items={services} />
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {services.map((s) => (
                <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            {/* Werkstatttermin CTA */}
            <div
              className="mt-12 p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ background: "#333340", border: "1px solid rgba(192,0,30,0.2)" }}
            >
              <div>
                <p
                  className="text-xl uppercase mb-1"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                >
                  Werkstatttermin online buchen
                </p>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.7)" }}>
                  Schnell und unkompliziert Ihren Termin direkt beim Mercedes-Benz Servicepartner vereinbaren.
                </p>
              </div>
              <a
                href={WERKSTATT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 text-sm uppercase font-bold transition-all duration-200 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  background: "#C0001E",
                  color: "#FFFFFF",
                }}
              >
                Termin buchen <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
