"use client";

import { useRef, useState, useCallback } from "react";

interface WheelPickerProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  label: string;
}

const ITEM_H = 38;   // px height per item
const VISIBLE = 5;   // number of visible rows
const CENTER = Math.floor(VISIBLE / 2); // = 2 (zero-indexed center row)

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function WheelPicker({ options, value, onChange, label }: WheelPickerProps) {
  const selectedIndex = options.indexOf(value);
  // offset: translateY applied to the list. offset=0 → item 0 at center.
  // To center item i: offset = -i * ITEM_H
  const [offset, setOffset] = useState(-selectedIndex * ITEM_H);
  const [dragging, setDragging] = useState(false);
  const startY = useRef(0);
  const startOffset = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const snapToIndex = useCallback(
    (rawOffset: number) => {
      const nearestIdx = clamp(
        Math.round(-rawOffset / ITEM_H),
        0,
        options.length - 1
      );
      const snappedOffset = -nearestIdx * ITEM_H;
      setOffset(snappedOffset);
      onChange(options[nearestIdx]);
      return snappedOffset;
    },
    [options, onChange]
  );

  // Pointer events — works for both mouse and touch
  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    startY.current = e.clientY;
    startOffset.current = offset;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dy = e.clientY - startY.current;
    const rawOffset = startOffset.current + dy;
    const maxOffset = 0;
    const minOffset = -(options.length - 1) * ITEM_H;
    setOffset(clamp(rawOffset, minOffset, maxOffset));
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    snapToIndex(offset);
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    const newIdx = clamp(selectedIndex + delta, 0, options.length - 1);
    const newOffset = -newIdx * ITEM_H;
    setOffset(newOffset);
    onChange(options[newIdx]);
  };

  const totalH = VISIBLE * ITEM_H;
  // The list translateY places item 0 at the center row:
  // center row top = CENTER * ITEM_H from container top
  // item 0 top with offset = CENTER * ITEM_H + offset
  const listTranslateY = CENTER * ITEM_H + offset;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", minWidth: 0, flex: 1 }}>
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-rajdhani)",
          fontWeight: 700,
          fontSize: "0.6875rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(138,138,150,0.5)",
          marginBottom: "0.125rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
      >
        {label}
      </p>

      {/* Drum roll container */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        style={{
          position: "relative",
          height: totalH,
          width: "100%",
          overflow: "hidden",
          cursor: dragging ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {/* Selection highlight bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: CENTER * ITEM_H,
            height: ITEM_H,
            background: "rgba(192,0,30,0.12)",
            borderTop: "1px solid rgba(192,0,30,0.25)",
            borderBottom: "1px solid rgba(192,0,30,0.25)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Top gradient fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: CENTER * ITEM_H,
            background: "linear-gradient(to bottom, #2A2A34 0%, rgba(42,42,52,0) 100%)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: CENTER * ITEM_H,
            background: "linear-gradient(to top, #2A2A34 0%, rgba(42,42,52,0) 100%)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* Scrolling list */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            transform: `translateY(${listTranslateY}px)`,
            transition: dragging ? "none" : "transform 0.22s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          {options.map((opt, i) => {
            const dist = i - selectedIndex;
            const absDist = Math.abs(dist);
            // 3D cylinder illusion
            const rotateX = dist * 16; // degrees
            const scale = 1 - absDist * 0.08;
            const opacity = 1 - absDist * 0.28;
            const isSelected = dist === 0;

            return (
              <div
                key={opt}
                onClick={() => {
                  const newOffset = -i * ITEM_H;
                  setOffset(newOffset);
                  onChange(opt);
                }}
                style={{
                  height: ITEM_H,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `rotateX(${rotateX}deg) scale(${scale})`,
                  opacity: Math.max(0, opacity),
                  transformOrigin: "center center",
                  cursor: "pointer",
                  transition: dragging ? "none" : "all 0.15s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: isSelected ? "1rem" : "0.875rem",
                    color: isSelected ? "#EAEAEE" : "rgba(138,138,150,0.65)",
                    letterSpacing: isSelected ? "0.04em" : "0.02em",
                    transition: "all 0.15s ease",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    padding: "0 4px",
                  }}
                >
                  {opt}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
