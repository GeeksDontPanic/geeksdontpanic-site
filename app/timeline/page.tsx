import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const EVENTS = [
  {
    year: "2016",
    title: "Shed experiments",
    blurb:
      "Started tinkering in a small shed — first 3D prints, rough prototypes, and camera mods.",
  },
  {
    year: "2019",
    title: "Garage workshop",
    blurb:
      "Moved into the garage, added more tools, started taking on custom work and filming more.",
  },
  {
    year: "2022",
    title: "Warehouse studio",
    blurb:
      "Leveled up into a warehouse bay with room for machining, filming, and product runs.",
  },
  {
    year: "2024",
    title: "Cement + sports tech phase",
    blurb:
      "Focusing on brutalist keyboards, sports tech spaces, and cinematic food/sports content.",
  },
];

export default function TimelinePage() {
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
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-8">

          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">Home</Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              Timeline
            </span>
          </div>

          <header className="space-y-3">
            <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
              Timeline
            </p>
            <h1
              style={headingFont}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              A slow, steady build.
            </h1>
            <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed">
              A visual history of how this all came together — from a small shed
              to a warehouse studio, with a lot of experiments in between.
            </p>
          </header>

          <div className="relative border-l border-zinc-800 pl-6 space-y-8">
            {EVENTS.map((event) => (
              <div key={event.year} className="relative">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#050507] border border-[#f25b3f]" />
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {event.year}
                </p>
                <h2 className="text-sm font-medium text-zinc-50">
                  {event.title}
                </h2>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                  {event.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}