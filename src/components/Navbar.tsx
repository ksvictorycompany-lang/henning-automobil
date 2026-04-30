"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/service", label: "Service" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,14,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.henning-automobil.de/wp-content/uploads/2023/02/LogoDachmarke_Rot-WEISS.svg"
              alt="Henning Automobil GmbH"
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wider uppercase transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: active ? "#C0001E" : "rgba(234,234,238,0.75)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+492325929257"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "rgba(138,138,150,0.9)", fontFamily: "var(--font-dm-sans)" }}
            >
              <Phone size={14} />
              <span>02325 - 92 92 57</span>
            </a>
            <Link
              href="/kontakt"
              className="px-5 py-2 text-sm tracking-wider uppercase font-semibold transition-all duration-200"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                background: "#C0001E",
                color: "#FFFFFF",
              }}
            >
              Termin
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 transition-colors duration-200"
            style={{ color: "rgba(234,234,238,0.8)" }}
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "rgba(12,12,14,0.98)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col px-8 pt-10 gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-3xl uppercase transition-colors duration-200 border-b pb-4"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: active ? "#C0001E" : "#EAEAEE",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+492325929257"
              className="flex items-center gap-3 pt-2"
              style={{ color: "#C0001E", fontFamily: "var(--font-dm-sans)" }}
            >
              <Phone size={18} />
              <span className="text-lg">02325 - 92 92 57</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
