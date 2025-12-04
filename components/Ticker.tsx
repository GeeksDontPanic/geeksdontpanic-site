"use client";

import { useEffect, useState } from "react";
import { getLatestTickerItems, TickerItem } from "@/lib/ticker";

export function Ticker() {
  // Load the latest lore/ticker items once on mount
  const [items] = useState<TickerItem[]>(() => getLatestTickerItems(4));
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [cursorIsBlock, setCursorIsBlock] = useState(true);

  const current = items[index] ?? items[0];

  // Typing effect for the current entry
  useEffect(() => {
    if (!current || items.length === 0) return;

    // Build multiline terminal-style text
    const residueParts = current.residue
      .replace(/^>>\s*/g, "")
      .split("|")
      .map((part) => part.trim())
      .filter(Boolean);

    const residueLines = residueParts.map((part) => `>> ${part}`).join("\n");

    const fullText = `${current.text}\n${residueLines}`;

    setDisplayedText("");

    let i = 0;
    const typingSpeed = 40; // ms per character
    let pauseTimeout: ReturnType<typeof setTimeout> | undefined;

    const typingInterval = setInterval(() => {
      i += 1;
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
      } else {
        clearInterval(typingInterval);
        // After finishing this entry, pause briefly then advance to the next one
        pauseTimeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % items.length);
        }, 6000);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [current, items.length]);

  // Hard-blinking cursor that flips between block and underline
  useEffect(() => {
    const id = setInterval(() => {
      setCursorIsBlock((prev) => !prev);
    }, 420);
    return () => clearInterval(id);
  }, []);

  if (!current) return null;

  const isAnomaly = current.hasAnomaly;

  return (
    <div
      className="
        fixed bottom-4 right-4
        z-40
        w-[720px] max-w-[94vw]
        rounded-xl border
        border-zinc-800/80
        bg-black/90
        backdrop-blur
        shadow-[0_0_25px_rgba(0,0,0,0.75)]
        text-xs text-zinc-200
        font-mono
        overflow-hidden
      "
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800/80 bg-zinc-950/95">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              isAnomaly
                ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
            }`}
          />
          <span className="tracking-[0.18em] uppercase text-[10px] text-zinc-400">
            Archive
          </span>
        </div>

        {isAnomaly && (
          <span className="text-[10px] uppercase tracking-[0.14em] text-amber-300">
            Anomaly
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-3.5 py-2.5">
        {/* Entry header inside the box */}
        <div className="mb-1 flex items-center justify-between text-[11px] text-zinc-200">
          <span className="tracking-[0.14em] uppercase text-[10px]">
            {current.label}
          </span>
        </div>

        {/* Terminal-style multiline text with typing effect */}
        <pre className="text-[11px] leading-relaxed text-zinc-200 whitespace-pre-wrap break-words">
          {displayedText}
          <span
            className={`ml-1 inline-block align-baseline bg-zinc-200 transition-none ${
              cursorIsBlock
                ? "h-[11px] w-[7px]"
                : "h-[2px] w-[10px] translate-y-[3px]"
            }`}
          />
        </pre>
      </div>
    </div>
  );
}

export default Ticker;