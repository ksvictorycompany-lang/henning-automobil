const BRANDS = [
  {
    name: "Mercedes-Benz",
    src: "https://www.henning-automobil.de/wp-content/uploads/2022/11/mercedes-light.svg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=236",
  },
  {
    name: "AMG",
    src: "https://www.henning-automobil.de/wp-content/uploads/2022/11/amg-light.svg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/",
  },
  {
    name: "EQ",
    src: "https://www.henning-automobil.de/wp-content/uploads/2022/11/eq-light.svg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=236&fuellings=%22elektro%22",
  },
  {
    name: "smart",
    src: "https://www.henning-automobil.de/wp-content/uploads/2022/11/smart-light.svg",
    href: "https://www.henning-automobil.de/fahrzeugboerse/#!/vehicles?manufacturers=267&othermanufacturers=true",
  },
];

const REPEATED = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export function LogoMarquee() {
  return (
    <section
      style={{
        background: "#151518",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "2rem 0",
      }}
    >
      <div className="marquee-track">
        {REPEATED.map((brand, i) => (
          <a
            key={i}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={brand.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 3rem",
              opacity: 0.4,
              transition: "opacity 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.4")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.src}
              alt={brand.name}
              style={{ height: "1.75rem", width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
