import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "#080809", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-18">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.henning-automobil.de/wp-content/uploads/2023/02/LogoDachmarke_Rot-WEISS.svg"
              alt="Henning Automobil GmbH"
              className="h-8 w-auto mb-5"
            />
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
            >
              Ihr offizieller Mercedes-Benz Partner in Herne. Kompetenz und Leidenschaft seit 1902.
            </p>
          </div>

          {/* Fahrzeuge */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)" }}
            >
              Fahrzeuge
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/fahrzeuge", label: "Alle Fahrzeuge" },
                { href: "/modelle", label: "Mercedes Modelle" },
                { href: "/junge-sterne", label: "Junge Sterne" },
                { href: "https://www.wirkaufendeinenstern.de/", label: "Fahrzeugankauf ↗", external: true },
              ].map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Termin */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)" }}
            >
              Service
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/service/pkw", label: "PKW Service" },
                { href: "/service/transporter", label: "Transporter" },
                { href: "/service/lkw", label: "LKW Service" },
                { href: "/beratungstermin", label: "Beratungstermin" },
                { href: "/kundenkarte", label: "Kundenkarte" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dorstener */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)" }}
            >
              Dorstener Str. 329
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C0001E" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  Dorstener Str. 329<br />44653 Herne
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                <a href="tel:+49232592920" className="text-sm transition-colors hover:text-white" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  02325 - 92 92 0
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                <a href="mailto:info@mercedes-henning.de" className="text-sm transition-colors hover:text-white" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  info@mercedes-henning.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C0001E" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  Mo–Fr 06–19 Uhr<br />Sa 08–14 Uhr
                </span>
              </li>
            </ul>
          </div>

          {/* Roonstraße */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "rgba(138,138,150,0.5)" }}
            >
              Roonstraße 67
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C0001E" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  Roonstraße 67<br />44653 Herne
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                <a href="tel:+4923239869" className="text-sm transition-colors hover:text-white" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  02323 - 9 86 90
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0" style={{ color: "#C0001E" }} />
                <a href="mailto:info@henning-automobil.de" className="text-sm transition-colors hover:text-white" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  info@henning-automobil.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C0001E" }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}>
                  Mo–Fr 08–18 Uhr<br />Sa 09–14 Uhr
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.4)" }}
          >
            © {new Date().getFullYear()} Henning Automobil GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/impressum", label: "Impressum" },
              { href: "/datenschutz", label: "Datenschutz" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.4)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
