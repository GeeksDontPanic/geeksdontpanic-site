"use client";

import { useEffect, useState } from "react";
import { getLatestTickerItems, TickerItem } from "@/lib/ticker";

function scrambleDrift(src: string): string {
  const glyphs =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-=△▽◇◆";
  return src
    .split("")
    .map((ch) => {
      // keep whitespace and newlines as-is so layout stays intact
      if (/\s/.test(ch)) return ch;
      // only scramble digits, leave all other characters intact
      if (!/[0-9]/.test(ch)) return ch;
      const idx = Math.floor(Math.random() * glyphs.length);
      return glyphs[idx];
    })
    .join("");
}

const TICKER_CONFIG = {
  typingBaseMs: 28,
  lineDelayMinMs: 250,
  lineDelayMaxMs: 650,
  countdownSeconds: 10,
  colonExtraDelayNormalMs: 150,
  colonExtraDelayAnomalyMs: 900,
  glitchActiveMs: 100,
  glitchStableMs: 350,
  glitchIntervalMs: 60,
  cursorBlinkMs: 420,
};

export function Ticker() {
  // Load the latest lore/ticker items once on mount
  const [items] = useState<TickerItem[]>(() => getLatestTickerItems(4));
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [cursorIsBlock, setCursorIsBlock] = useState(true);

  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState<string | null>(null);

  const [fullText, setFullText] = useState("");
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  const [glitchPhase, setGlitchPhase] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

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

    const fullTextString = `${current.text}\n${residueLines}`;

    setFullText(fullTextString);
    setDisplayedText("");
    setIsGlitchActive(false);
    setSecondsRemaining(null);

    let cancelled = false;
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    const typingBase = TICKER_CONFIG.typingBaseMs;
    const residueStart = current.text.length + 1; // index in fullTextString where residue begins (after first \n)

    let i = 0;

    function startCountdown() {
      if (cancelled) return;
      let seconds = TICKER_CONFIG.countdownSeconds;
      setSecondsRemaining(seconds);

      countdownInterval = setInterval(() => {
        if (cancelled) {
          clearInterval(countdownInterval!);
          return;
        }
        seconds -= 1;
        if (seconds <= 0) {
          setSecondsRemaining(null);
          clearInterval(countdownInterval!);
          setIndex((prev) => (prev + 1) % items.length);
        } else {
          setSecondsRemaining(seconds);
        }
      }, 1000);
    }

    function step() {
      if (cancelled) return;

      if (i >= fullTextString.length) {
        // Finished typing this entry; start the countdown
        startCountdown();
        return;
      }

      i += 1;
      const nextChar = fullTextString[i - 1];
      setDisplayedText(fullTextString.slice(0, i));

      // Default delay between characters
      let delay = typingBase;

      const inResidue = i - 1 >= residueStart;

      // Random delay window between configured min/max
      const randomDelay =
        TICKER_CONFIG.lineDelayMinMs +
        Math.random() *
          (TICKER_CONFIG.lineDelayMaxMs - TICKER_CONFIG.lineDelayMinMs);

      // Longer pause at line breaks
      if (nextChar === "\n") {
        delay = randomDelay;
      }
      // Additional pause after residue categories like "channel:", "checksum:", "drift:"
      else if (inResidue && nextChar === ":") {
        const extra = current.hasAnomaly
          ? TICKER_CONFIG.colonExtraDelayAnomalyMs
          : TICKER_CONFIG.colonExtraDelayNormalMs;
        delay = randomDelay + extra;
      }

      setTimeout(step, delay);
    }

    // Kick off typing
    const initialTimeout = setTimeout(step, typingBase);

    return () => {
      cancelled = true;
      clearTimeout(initialTimeout);
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [current, items.length]);

  // Glitch cycle: once text is fully typed, flip/scramble numeric drift characters in-place
  useEffect(() => {
    if (!fullText) return;
    if (displayedText !== fullText) return; // still typing, no glitch yet
    if (!current || !current.hasAnomaly) return; // only glitch on anomaly entries

    let cancelled = false;

    function cycle() {
      if (cancelled) return;

      setIsGlitchActive(true);
      setGlitchPhase(0);

      // While active, we *could* advance phase, but since scrambleDrift is random,
      // this mainly controls how long the glitch stays on.
      const interval = setInterval(() => {
        setGlitchPhase((prev) => prev + 1);
      }, TICKER_CONFIG.glitchIntervalMs);

      // After active window, stop glitching and go back to stable values
      setTimeout(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }
        clearInterval(interval);
        setIsGlitchActive(false);

        setTimeout(() => {
          if (cancelled) return;
          cycle();
        }, TICKER_CONFIG.glitchStableMs);
      }, TICKER_CONFIG.glitchActiveMs);
    }

    cycle();

    return () => {
      cancelled = true;
    };
  }, [fullText, displayedText, current]);

  // Hard-blinking cursor that flips between block and underline
  useEffect(() => {
    const id = setInterval(() => {
      setCursorIsBlock((prev) => !prev);
    }, TICKER_CONFIG.cursorBlinkMs);
    return () => clearInterval(id);
  }, []);

  if (!current) return null;

  const isAnomaly = current.hasAnomaly;

  // Split the displayed text into the part before "drift:" and the drift segment itself,
  // so we can style and glitch only the drift portion.
  const driftKey = "drift:";
  let staticTyped = displayedText;
  let driftTyped = "";

  if (fullText) {
    const driftIndex = fullText.indexOf(driftKey);
    if (driftIndex >= 0) {
      const typedLen = displayedText.length;
      if (typedLen <= driftIndex) {
        staticTyped = displayedText;
        driftTyped = "";
      } else {
        staticTyped = displayedText.slice(0, driftIndex);
        driftTyped = displayedText.slice(driftIndex, typedLen);
      }
    }
  }

  const driftDisplay = isGlitchActive
    ? scrambleDrift(driftTyped)
    : driftTyped;

  return (
    <div
      className="
        fixed bottom-4 right-4
        z-40
        w-[720px] max-w-[94vw]
        rounded-sm border
        border-zinc-200/30
        bg-black/10
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(0,0,0,0.9)]
        text-xs text-zinc-200
        font-mono
        overflow-hidden
      "
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-sm">
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
      <div className="px-3.5 py-2.5 bg-black/40 border-t border-zinc-700/40 shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]">
        {/* Entry header inside the box */}
        <div className="mb-1 flex items-center justify-between text-[11px] text-zinc-200">
          <span className="tracking-[0.14em] uppercase text-[10px]">
            {current.label}
          </span>
        </div>

        {/* Terminal-style multiline text with typing effect */}
        <pre className="text-[11px] leading-relaxed text-zinc-200 whitespace-pre-wrap break-words">
          {staticTyped}
          {driftDisplay && (
            <span className={isAnomaly ? "text-orange-300" : undefined}>
              {driftDisplay}
            </span>
          )}
          <span
            className={`ml-1 inline-block align-baseline bg-zinc-200 transition-none ${
              cursorIsBlock
                ? "h-[11px] w-[7px]"
                : "h-[2px] w-[10px] translate-y-[3px]"
            }`}
          />
        </pre>

        {secondsRemaining !== null && (
          <div className="mt-1 text-[10px] text-zinc-400">
            next entry loading in {secondsRemaining}...
          </div>
        )}

        {/* Divider above command input */}
        <div className="mt-3 mb-2 border-t border-zinc-700/60" />

        {/* Command input area */}
        <form
          className="mt-3 flex items-center gap-2 text-[11px]"
          onSubmit={(e) => {
            e.preventDefault();
            if (!command.trim()) return;
            setCommandError(">> error: contact signal out of range or misaligned");
            setCommand("");
          }}
        >
          <span className="text-zinc-500">&gt;&gt;</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="enter command..."
            className="flex-1 bg-transparent outline-none border-b border-zinc-700/70 focus:border-zinc-300 text-zinc-200 placeholder:text-zinc-500 pb-[2px]"
          />
        </form>

        {commandError && (
          <div className="mt-1 text-[10px] text-amber-300">
            {commandError}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticker;