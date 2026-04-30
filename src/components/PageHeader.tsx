interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8"
      style={{
        background: "linear-gradient(180deg, #151518 0%, #0C0C0E 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {eyebrow && (
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 600,
              color: "#C0001E",
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-4"
          style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, color: "#EAEAEE" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(138,138,150,0.8)" }}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-6 h-px w-16" style={{ background: "#C0001E" }} />
      </div>
    </div>
  );
}
