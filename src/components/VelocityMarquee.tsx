"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface VelocityMarqueeProps {
  children: string;
  baseVelocity?: number;
  scrollDependent?: boolean;
  delay?: number;
  className?: string;
  fontSize?: string;
}

export function VelocityMarquee({
  children,
  baseVelocity = -4,
  scrollDependent = true,
  delay = 0,
  className,
  fontSize = "clamp(1.4rem, 5vw, 3.5rem)",
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => { hasStarted.current = true; }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  useAnimationFrame((_t, delta) => {
    if (!hasStarted.current) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (scrollDependent) {
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={className}
      style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex", flexWrap: "nowrap" }}
    >
      <motion.div
        style={{ x, display: "flex", flexWrap: "nowrap", gap: "3rem" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              fontSize,
              fontFamily: "var(--font-rajdhani)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#EAEAEE",
              flexShrink: 0,
            }}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
