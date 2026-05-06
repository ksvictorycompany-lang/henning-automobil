export interface WarpConfig {
  colors: string[];
  proportion?: number;
  softness?: number;
  shape?: "checks" | "stripes" | "edge";
  shapeScale?: number;
  distortion?: number;
  swirl?: number;
  swirlIterations?: number;
  speed?: number;
}

// 9 brand-aligned presets — dark moody reds, each with a unique character
const PRESETS: WarpConfig[] = [
  // 0 — deep crimson swirl
  { colors: ["#0d0005", "#1a0008", "#3B0010", "#C0001E"], proportion: 0.35, softness: 0.9, shape: "checks", shapeScale: 0.06, distortion: 0.15, swirl: 0.65, swirlIterations: 10, speed: 0.3 },
  // 1 — dark navy-red (trust)
  { colors: ["#050510", "#0a0520", "#250030", "#C0001E"], proportion: 0.4, softness: 1.0, shape: "edge", shapeScale: 0.08, distortion: 0.12, swirl: 0.5, swirlIterations: 8, speed: 0.35 },
  // 2 — steel-red
  { colors: ["#030810", "#0a1528", "#1a2035", "#C0001E"], proportion: 0.45, softness: 0.95, shape: "stripes", shapeScale: 0.07, distortion: 0.18, swirl: 0.7, swirlIterations: 9, speed: 0.4 },
  // 3 — carbon-red
  { colors: ["#0d0d10", "#1a1a24", "#2a1020", "#C0001E"], proportion: 0.38, softness: 0.85, shape: "checks", shapeScale: 0.05, distortion: 0.1, swirl: 0.6, swirlIterations: 12, speed: 0.3 },
  // 4 — amber-red
  { colors: ["#0a0503", "#2a1005", "#6B2010", "#C0001E"], proportion: 0.42, softness: 0.95, shape: "edge", shapeScale: 0.09, distortion: 0.16, swirl: 0.55, swirlIterations: 8, speed: 0.35 },
  // 5 — energy red (brightest)
  { colors: ["#0d0005", "#4B0010", "#C0001E", "#E5001E"], proportion: 0.35, softness: 0.8, shape: "checks", shapeScale: 0.07, distortion: 0.2, swirl: 0.8, swirlIterations: 12, speed: 0.45 },
  // 6 — amber warning
  { colors: ["#080500", "#1a0800", "#5B2000", "#C0001E"], proportion: 0.4, softness: 0.9, shape: "edge", shapeScale: 0.06, distortion: 0.14, swirl: 0.6, swirlIterations: 10, speed: 0.3 },
  // 7 — teal-red (contrast)
  { colors: ["#050810", "#0a1020", "#101825", "#C0001E"], proportion: 0.45, softness: 1.0, shape: "stripes", shapeScale: 0.08, distortion: 0.12, swirl: 0.5, swirlIterations: 8, speed: 0.35 },
  // 8 — glass blue-red
  { colors: ["#050808", "#0a1520", "#152030", "#C0001E"], proportion: 0.4, softness: 0.95, shape: "edge", shapeScale: 0.07, distortion: 0.13, swirl: 0.55, swirlIterations: 9, speed: 0.3 },
];

export function getServiceShader(seed: string): WarpConfig {
  const hash = seed.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0xffff, 0);
  return PRESETS[hash % PRESETS.length];
}

// Vehicle cards — dark steel-blue-red, calm and premium
export const VEHICLE_SHADER: WarpConfig = {
  colors: ["#050a10", "#0d1525", "#1a2535", "#C0001E"],
  proportion: 0.38,
  softness: 1.1,
  shape: "edge",
  shapeScale: 0.06,
  distortion: 0.1,
  swirl: 0.45,
  swirlIterations: 8,
  speed: 0.22,
};

// Location cards — two variants
export const LOCATION_SHADERS: [WarpConfig, WarpConfig] = [
  // Dorstener Str. — warm dark red
  { colors: ["#0d0005", "#1a0010", "#3B0010", "#C0001E"], proportion: 0.38, softness: 0.9, shape: "checks", shapeScale: 0.05, distortion: 0.12, swirl: 0.55, swirlIterations: 9, speed: 0.28 },
  // Roonstraße — cool dark teal-red
  { colors: ["#050810", "#0a1020", "#15202a", "#C0001E"], proportion: 0.42, softness: 1.0, shape: "edge", shapeScale: 0.06, distortion: 0.1, swirl: 0.5, swirlIterations: 8, speed: 0.26 },
];

// Page headers — dark navy-red, authoritative
export const HEADER_SHADER: WarpConfig = {
  colors: ["#050510", "#0a0520", "#250030", "#C0001E"],
  proportion: 0.4, softness: 1.0, shape: "edge",
  shapeScale: 0.08, distortion: 0.12, swirl: 0.5,
  swirlIterations: 8, speed: 0.28,
};

// CTA banner — energetic reds
export const CTA_SHADER: WarpConfig = {
  colors: ["#3B0010", "#C0001E", "#8B0000", "#E5001E"],
  proportion: 0.35,
  softness: 0.8,
  shape: "checks",
  shapeScale: 0.08,
  distortion: 0.22,
  swirl: 0.8,
  swirlIterations: 12,
  speed: 0.42,
};
