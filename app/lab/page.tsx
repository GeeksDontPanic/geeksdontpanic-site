import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function LabPage() {
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
            <Link href="/current-drop" className="text-zinc-400 hover:text-zinc-100">
              Current Drop
            </Link>
            <Link href="/archive" className="text-zinc-400 hover:text-zinc-100">
              Archive
            </Link>
            <Link href="/timeline" className="text-zinc-400 hover:text-zinc-100">
              Timeline
            </Link>
            <Link href="/lab" className="text-zinc-400 hover:text-zinc-100">
              Lab
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-zinc-100">
              About
            </Link>
            <Link href="/contact" className="text-zinc-400 hover:text-zinc-100">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-[#050507] text-zinc-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-8">

          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">Home</Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              Lab
            </span>
          </div>

          {/* Page header */}
          <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
            Lab
          </p>
          <h1
            style={headingFont}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Experiments that may or may not ship.
          </h1>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed max-w-2xl">
            This is where half-finished ideas live — early renders, weird
            mechanisms, odd form factors, and tests that might become future
            drops. Nothing here has to be perfect.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-[#08080a] px-4 py-10 text-xs text-zinc-500 text-center">
            You can drop WIP screenshots, renders, and notes here later. For now
            this is just scaffolding so the structure of the site is clear.
          </div>

        </div>
      </main>
    </>
  );
}