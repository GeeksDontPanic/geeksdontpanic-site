import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function ContactPage() {
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
              Contact
            </span>
          </div>

          {/* Page header */}
          <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
            Contact
          </p>
          <h1
            style={headingFont}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Have a project, or just an idea?
          </h1>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed max-w-xl">
            If it lives somewhere between hardware, film, sports, or food —
            that&apos;s probably my lane. Tell me what you&apos;re working on and
            we can see if it makes sense to build something together.
          </p>

          <a
            href="mailto:chris@geeksdontpanic.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f25b3f] text-black text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#ff6e4e] transition-colors"
          >
            Email Me
          </a>
        </div>
      </main>
    </>
  );
}