"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type NavItem = {
  href?: string;
  label: string;
  external?: boolean;
  children?: { href: string; label: string; external?: boolean }[];
};

const NAV: NavItem[] = [
  {
    label: "Fahrzeuge",
    children: [
      { href: "/fahrzeuge", label: "Alle Fahrzeuge" },
      { href: "/modelle", label: "Mercedes Modelle" },
      { href: "/junge-sterne", label: "Junge Sterne" },
    ],
  },
  {
    label: "Service",
    children: [
      { href: "/service/pkw", label: "PKW Service" },
      { href: "/service/transporter", label: "Transporter" },
      { href: "/service/lkw", label: "LKW Service" },
    ],
  },
  {
    label: "Termin",
    children: [
      { href: "/beratungstermin", label: "Beratungstermin" },
      {
        href: "https://plan.soft-nrg.com/group/-nnY39I1A9Ncto7f1cQPWEgaVsoXZdl1rC-3T8yBYyQkOdGoMSEoUg/signin",
        label: "Werkstatttermin",
        external: true,
      },
    ],
  },
  {
    href: "https://www.wirkaufendeinenstern.de/",
    label: "Fahrzeugankauf",
    external: true,
  },
  {
    label: "Unternehmen",
    children: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/kundenkarte", label: "Kundenkarte" },
      { href: "https://jobsmb.henning-automobil.de/", label: "Karriere", external: true },
      { href: "https://zukunftmitstern.de/", label: "Ausbildung", external: true },
    ],
  },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobile(null);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between" ref={dropdownRef}>
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
                item.href ? pathname === item.href
                : item.children?.some((c) => pathname === c.href);
              const isOpen = openDropdown === item.label;

              if (item.children) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className="flex items-center gap-1 px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-rajdhani)",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: isActive ? "#C0001E" : "rgba(234,234,238,0.75)",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          opacity: 0.6,
                        }}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        minWidth: "180px",
                        background: "rgba(12,12,14,0.98)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(16px)",
                        opacity: isOpen ? 1 : 0,
                        pointerEvents: isOpen ? "all" : "none",
                        transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                        transition: "opacity 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-5 py-3 text-sm transition-colors duration-150 hover:text-white"
                            style={{
                              fontFamily: "var(--font-rajdhani)",
                              fontWeight: 600,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "rgba(234,234,238,0.65)",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-sm transition-colors duration-150 hover:text-white"
                            style={{
                              fontFamily: "var(--font-rajdhani)",
                              fontWeight: 600,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: pathname === child.href ? "#C0001E" : "rgba(234,234,238,0.65)",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(234,234,238,0.75)",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200"
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
              href="/beratungstermin"
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
          style={{ background: "rgba(12,12,14,0.98)", backdropFilter: "blur(16px)" }}
        >
          <nav className="flex flex-col px-6 pt-8 pb-12 gap-1">
            {NAV.map((item) => {
              if (item.children) {
                const isExpanded = openMobile === item.label;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMobile(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 border-b text-left"
                      style={{
                        fontFamily: "var(--font-rajdhani)",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "#EAEAEE",
                        borderColor: "rgba(255,255,255,0.06)",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          color: "#C0001E",
                        }}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2.5 text-base uppercase"
                              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(234,234,238,0.6)" }}
                            >
                              {child.label} ↗
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2.5 text-base uppercase"
                              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, color: "rgba(234,234,238,0.6)" }}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-4 text-2xl uppercase border-b"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#EAEAEE",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block py-4 text-2xl uppercase border-b"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: pathname === item.href ? "#C0001E" : "#EAEAEE",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

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
