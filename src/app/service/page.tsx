import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
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
} from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Werkstatt-Service",
    desc: "Wartung, Unfallinstandsetzung oder Fahrzeugvermessung. Die Spezialisten in unserer Werkstatt sind immer auf dem neuesten Stand der Technik, kennen auch das kleinste Detail an Ihrem Fahrzeug und machen es schnell und fachgerecht wieder fit.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: ShieldCheck,
    title: "Garantie & Kulanz",
    desc: "Reparaturen im Garantiezeitraum werden von unserem Service-Team zeitnah abgewickelt, damit Ihr Fahrzeug schnell wieder wie neu ist. Auch beim Thema Kulanz werden wir Sie positiv überraschen. Auf Wunsch verlängern wir die Garantie für Ihr Fahrzeug.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: CircleDot,
    title: "Reifendienst",
    desc: "Nur mit guten und regelmäßig überprüften Reifen fahren Sie auf jeder Straße und zu jeder Jahreszeit komfortabel und sicher. Unser Reifenservice berät Sie umfassend und montiert die optimalen Reifen und Räder — gerne auch in Verbindung mit einer Wartung.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: ClipboardCheck,
    title: "HU & AU",
    desc: "Sparen Sie sich weite Wege. In unserem Hause können Sie Ihr Fahrzeug für Haupt- und Abgasuntersuchung anmelden. Wir bieten tägliche Prüftermine durch die DEKRA, dazu variable Termine nach Absprache.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: Package,
    title: "Teile-Sortiment",
    desc: "Unser bestens sortiertes Lager hält für Sie immer eine große Auswahl an Original-Teilen, Zubehör und Accessoires bereit. Bis 10 Uhr bestellt — um 14 Uhr bei uns. Bis 18 Uhr bestellt — morgens am nächsten Werktag bei uns.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: Zap,
    title: "Express-Service",
    desc: "So schnell wie möglich erledigt unser Service Kleinreparaturen. Es ist uns wichtig, dass Ihnen schnell geholfen wird. Eben gebracht, schon gemacht — dafür stehen wir.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: AlertTriangle,
    title: "Pannen-Service",
    desc: "Bei einem Mercedes oder smart selten, aber möglich. Falls Sie mit Ihrem Fahrzeug liegen bleiben, ist unser Pannen-Service schnell bei Ihnen. Mit unserem bestens ausgestatteten Service-Mobil machen wir Sie vor Ort wieder flott.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: Truck,
    title: "Hol- & Bring-Service",
    desc: "Damit Service-Termine nicht Ihre Zeitplanung durcheinander bringen, holen wir Ihr Fahrzeug bei Ihnen zu Hause oder am Arbeitsplatz ab. Und bringen es nach den vereinbarten Maßnahmen startklar wieder zurück.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
  {
    icon: Scan,
    title: "Scheibenreparatur",
    desc: "Ob Steinschlag oder Vandalismus: Eine defekte Scheibe ist immer eine unangenehme Sache. Unser Scheibenreparatur-Service baut die neue Scheibe schnell und fachgerecht ein — damit Sie wieder sicher unterwegs sind.",
    cta: "Termin vereinbaren",
    href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
  },
];

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Werkstatt & Service"
          title="Alles aus einer Hand"
          subtitle="Von der Wartung bis zum Pannen-Service — das Henning Team steht Ihnen mit neun spezialisierten Servicebereichen zur Seite."
        />

        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex flex-col p-8"
                    style={{ background: "#151518", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-6"
                      style={{ background: "rgba(192,0,30,0.1)", border: "1px solid rgba(192,0,30,0.2)" }}
                    >
                      <Icon size={22} style={{ color: "#C0001E" }} />
                    </div>
                    <h3
                      className="text-xl uppercase mb-3"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-6 flex-1"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.75)" }}
                    >
                      {s.desc}
                    </p>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm uppercase font-bold tracking-wider transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#C0001E", letterSpacing: "0.08em" }}
                    >
                      {s.cta} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
