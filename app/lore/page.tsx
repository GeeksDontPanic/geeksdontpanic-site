import Link from "next/link";
import loreData from "../data/lore.json";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const monoFont = {
  fontFamily: "monospace",
};

export default function LorePage() {
  const entries = loreData.entries;

  return (
    <>
      {/* NAV */}
      <header className="w-full border-b border-zinc-900 bg-[#050507]/95 backdrop-blur-md sticky top-0 z-20">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md border border-[#f25b3f]/60 bg-[#2b1510] flex items-center justify-center text-[9px] tracking-[0.18em] text-[#f78b60] font-semibold">
              GDP
            </div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
              Geeks Dont Panic
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-6 text-sm">
            <Link
              href="/current-drop"
              className="text-zinc-400 hover:text-zinc-100"
            >
              Current Drop
            </Link>
            <Link
              href="/archive"
              className="text-zinc-400 hover:text-zinc-100"
            >
              Archive
            </Link>
            <Link
              href="/timeline"
              className="text-zinc-400 hover:text-zinc-100"
            >
              Timeline
            </Link>
            <Link href="/lab" className="text-zinc-400 hover:text-zinc-100">
              Lab
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-zinc-100">
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-[#050507] text-zinc-50">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-12">
          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">
              Home
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              Lore
            </span>
          </div>

          <header className="space-y-3">
            <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
              Station Archive
            </p>
            <h1
              style={headingFont}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              Log Entries
            </h1>
            <p className="text-sm md:text-[15px] text-zinc-300 max-w-2xl leading-relaxed">
              A collection of station logs, system responses, and anomalous
              readings from the outer reaches.
            </p>
          </header>

          {/* Lore Entries */}
          <div className="space-y-12">
            {entries.map((entry) => (
              <article
                key={entry.id}
                className="border border-zinc-800/50 bg-zinc-950/30 rounded-lg p-6 md:p-8 space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-zinc-800/50">
                  <div className="space-y-1">
                    <h2
                      style={monoFont}
                      className="text-lg font-semibold text-zinc-100"
                    >
                      {entry.entryLabel}
                    </h2>
                    <p
                      style={monoFont}
                      className="text-xs text-zinc-500 tracking-wide"
                    >
                      {entry.timestamp}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      style={monoFont}
                      className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400"
                    >
                      Phase {entry.phase}
                    </span>
                    {entry.hasAnomaly && (
                      <span
                        style={monoFont}
                        className="text-xs px-2 py-1 rounded bg-[#f25b3f]/10 text-[#f78b60] border border-[#f25b3f]/30"
                      >
                        ANOMALY
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary Log */}
                <div className="space-y-2">
                  <h3
                    style={monoFont}
                    className="text-xs uppercase tracking-[0.2em] text-zinc-500"
                  >
                    Primary Log
                  </h3>
                  <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed whitespace-pre-line">
                    {entry.primaryLog}
                  </p>
                </div>

                {/* System Response */}
                {entry.systemResponse && (
                  <div className="space-y-2 pt-4 border-t border-zinc-800/30">
                    <h3
                      style={monoFont}
                      className="text-xs uppercase tracking-[0.2em] text-zinc-500"
                    >
                      System Response
                    </h3>
                    <pre
                      style={monoFont}
                      className="text-xs md:text-sm text-[#66d9ef] bg-zinc-950/50 p-4 rounded border border-zinc-800/50 overflow-x-auto whitespace-pre-wrap"
                    >
                      {entry.systemResponse}
                    </pre>
                  </div>
                )}

                {/* Residue Data */}
                {entry.residue && (
                  <div className="pt-4 border-t border-zinc-800/30">
                    <div
                      style={monoFont}
                      className="grid grid-cols-3 gap-4 text-xs"
                    >
                      <div>
                        <span className="text-zinc-500 uppercase tracking-wider">
                          Channel
                        </span>
                        <p className="text-zinc-300 mt-1">
                          {entry.residue.channel}
                        </p>
                      </div>
                      <div>
                        <span className="text-zinc-500 uppercase tracking-wider">
                          Checksum
                        </span>
                        <p className="text-zinc-300 mt-1">
                          {entry.residue.checksum}
                        </p>
                      </div>
                      <div>
                        <span className="text-zinc-500 uppercase tracking-wider">
                          Drift
                        </span>
                        <p className="text-zinc-300 mt-1">
                          {entry.residue.drift}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
