"use client";

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
import { StackedCards } from "@/components/StackedCards";

const SERVICES = [
  { icon: Wrench,         title: "Werkstatt-Service", desc: "Wartung & Instandsetzung durch zertifizierte Mercedes-Benz Techniker" },
  { icon: ShieldCheck,    title: "Garantie & Kulanz",  desc: "Schnelle, unkomplizierte Abwicklung im Garantiezeitraum" },
  { icon: CircleDot,      title: "Reifendienst",       desc: "Montage, Wuchtung und Beratung für optimale Fahrsicherheit" },
  { icon: ClipboardCheck, title: "HU & AU",            desc: "Tägliche DEKRA-Prüftermine direkt bei uns im Haus" },
  { icon: Package,        title: "Teile-Sortiment",    desc: "Original-Ersatzteile — bis 10 Uhr bestellt, um 14 Uhr verfügbar" },
  { icon: Zap,            title: "Express-Service",    desc: "Kleinreparaturen so schnell wie möglich erledigt" },
  { icon: AlertTriangle,  title: "Pannen-Service",     desc: "Unser Service-Mobil macht Sie vor Ort wieder flott" },
  { icon: Truck,          title: "Hol- & Bring-Service", desc: "Wir holen Ihr Fahrzeug ab und bringen es startklar zurück" },
  { icon: Scan,           title: "Scheibenreparatur",  desc: "Steinschlag oder Vandalismus — schneller Einbau neuer Scheiben" },
];

export function MobileServiceStack() {
  return <StackedCards items={SERVICES} />;
}
