"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/service", label: "Service" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(42,42,52,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.henning-automobil.de/wp-content/uploads/2023/02/LogoDachmarke_Rot-WEISS.svg"
              alt="Henning Automobil GmbH"
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 hover:text-white"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: isActive ? "#C0001E" : "rgba(234,234,238,0.75)",
                  }}
                >
                  {item.label}
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
              href="/kontakt#termin"
              className="px-5 py-2 text-sm tracking-wider uppercase transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                background: "#C0001E",
                color: "#FFFFFF",
              }}
            >
              Termin buchen
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 transition-colors duration-200"
            style={{ color: "rgba(234,234,238,0.8)" }}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16 overflow-y-auto"
          style={{ background: "rgba(42,42,52,0.98)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col px-6 pt-8 pb-12 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-4 text-2xl uppercase border-b"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: pathname.startsWith(item.href) ? "#C0001E" : "#EAEAEE",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/kontakt#termin"
              className="mt-6 block py-4 text-center text-xl uppercase"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                background: "#C0001E",
                color: "#FFFFFF",
              }}
            >
              Termin buchen
            </Link>

            <a
              href="tel:+492325929257"
              className="flex items-center gap-3 pt-6"
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
