"use client";

import { useState } from "react";
import { WheelPicker } from "@/components/WheelPicker";
import { ArrowUpRight } from "lucide-react";

const MODELL_OPTS = ["Alle", "C-Klasse", "CLE", "E-Klasse", "AMG GT", "GLE", "GLS"];
const MOTOR_OPTS  = ["Alle", "Benzin", "Diesel", "Hybrid"];
const RATE_OPTS   = ["Alle", "bis 1.100 €", "bis 1.300 €", "bis 1.500 €", "ab 1.500 €"];

const MODELL_MAP: Record<string, string> = {
  "C-Klasse": 'modelGroups=%22c-klasse-limousine%22,%22c-klasse-t-modell%22',
  "CLE":      'modelGroups=%22cle-coupe%22',
  "E-Klasse": 'modelGroups=%22e-klasse-limousine%22,%22e-klasse-t-modell%22',
  "AMG GT":   'modelGroups=%22mercedes-amg-gt-4-tuerer-coupe%22',
  "GLE":      'modelGroups=%22gle-off-roader%22,%22gle-coupe%22',
  "GLS":      'modelGroups=%22gls-off-roader%22',
};
const MOTOR_MAP: Record<string, string> = {
  "Benzin": 'fuellings=%22benzin%22',
  "Diesel": 'fuellings=%22diesel%22',
  "Hybrid": 'fuellings=%22hybrid%22,%22plugin-hybrid%22',
};
const RATE_MAP: Record<string, string> = {
  "bis 1.100 €": "financingRateMax=1100",
  "bis 1.300 €": "financingRateMax=1300",
  "bis 1.500 €": "financingRateMax=1500",
  "ab 1.500 €":  "financingRateMin=1500",
};

function buildFilterUrl(modell: string, motor: string, rate: string): string {
  const parts = ["https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=236"];
  if (MODELL_MAP[modell]) parts.push(MODELL_MAP[modell]);
  if (MOTOR_MAP[motor])   parts.push(MOTOR_MAP[motor]);
  if (RATE_MAP[rate])     parts.push(RATE_MAP[rate]);
  return parts.join("&");
}

export function VehicleFilter() {
  const [modell, setModell] = useState("Alle");
  const [motor,  setMotor]  = useState("Alle");
  const [rate,   setRate]   = useState("Alle");

  const url = buildFilterUrl(modell, motor, rate);

  return (
    <div
      style={{
        background: "#1E1E28",
        border: "1px solid rgba(192,0,30,0.15)",
        marginBottom: "2.5rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "1rem 1.5rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "rgba(192,0,30,0.55)",
            paddingBottom: "0.75rem",
          }}
        >
          Fahrzeug Suche · 133 Fahrzeuge verfügbar
        </p>
      </div>

      {/* Pickers row */}
      <div
        style={{
          display: "flex",
          padding: "1rem 0.5rem",
        }}
      >
        <div style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
          <WheelPicker options={MODELL_OPTS} value={modell} onChange={setModell} label="Modell" />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            padding: "0 0.5rem",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <WheelPicker options={MOTOR_OPTS} value={motor} onChange={setMotor} label="Motor" />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            padding: "0 0.5rem",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <WheelPicker options={RATE_OPTS} value={rate} onChange={setRate} label="Rate/Mo." />
        </div>
      </div>

      {/* CTA row */}
      <div
        style={{
          padding: "0.75rem 1.5rem 1rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "rgba(138,138,150,0.45)",
          }}
        >
          {modell !== "Alle" || motor !== "Alle" || rate !== "Alle"
            ? `${modell !== "Alle" ? modell : "Alle Modelle"} · ${motor !== "Alle" ? motor : "Alle Antriebe"} · ${rate !== "Alle" ? rate : "Alle Raten"}`
            : "Gesamter Bestand"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.625rem 1.25rem",
            background: "#C0001E",
            color: "#FFFFFF",
            fontFamily: "var(--font-rajdhani)",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Zur Fahrzeugbörse <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
