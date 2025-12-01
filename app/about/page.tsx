import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function AboutPage() {
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
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-10">
          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">
              Home
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              About
            </span>
          </div>
          <header className="space-y-3">
            <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
              About Me
            </p>
            <h1
              style={headingFont}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              Chris — where digital and physical blur.
            </h1>
          </header>

          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 group [perspective:1200px]">
              <img
                src="https://framerusercontent.com/images/CxO6p4AiFHfDaZk6jZiyljDu1A.png?width=300&height=300"
                alt="Chris Portrait"
                className="w-[260px] h-[260px] rounded-full object-cover border border-zinc-800 shadow-[0_20px_45px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[2deg] group-hover:scale-[1.03]"
              />
            </div>

            <div className="space-y-4 max-w-xl text-sm md:text-[15px] text-zinc-300 leading-relaxed">
              <p>
                I design and build things at the intersection of industrial
                design, tech, and filmmaking — cement keyboards, sports tech
                spaces, film work, and the tools that support them.
              </p>
              <p>
                I like grounded, tactile objects with a sci-fi edge. A lot of my
                work lives in that space between polished product and weird lab
                experiment.
              </p>
              <p>
                This site is a running index of what I&apos;m building now, what
                I&apos;ve already shipped, and the experiments that may or may
                not see the light of day.
              </p>

              <Link
                href="/current-drop"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-300 hover:text-[#f25b3f] transition-colors"
              >
                See current drop <span className="text-[13px]">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}