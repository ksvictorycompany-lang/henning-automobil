interface TextMarqueeProps {
  text: string;
  separator?: string;
  speed?: number;
  className?: string;
}

export function TextMarquee({
  text,
  separator = "·",
  speed = 28,
}: TextMarqueeProps) {
  const items = Array.from({ length: 8 });

  return (
    <div
      style={{
        overflow: "hidden",
        background: "#252528",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "1.1rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              flexShrink: 0,
              padding: "0 2rem",
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#EAEAEE",
              whiteSpace: "nowrap",
            }}
          >
            <span>{text}</span>
            <span style={{ color: "#C0001E", fontSize: "0.6em" }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
