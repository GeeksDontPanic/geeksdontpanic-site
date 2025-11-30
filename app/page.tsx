import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function Home() {
  return (
    <main className="min-h-screen text-[#f4f4f2] bg-[#111111]">
      {/* TOP BAR */}
      <header className="border-b border-[#262626]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 text-xs">
          <span className="tracking-[0.18em] uppercase text-[#c4c4c4]">
            geeks dont panic
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="border-b border-transparent pb-0.5 transition-all duration-150 hover:border-[#f97316] hover:text-white"
            >
              work
            </a>
            <a
              href="#about"
              className="border-b border-transparent pb-0.5 transition-all duration-150 hover:border-[#f97316] hover:text-white"
            >
              about
            </a>
            <a
              href="mailto:chris@geeksdontpanic.com"
              className="px-3 py-1.5 rounded-full border border-[#3a3a3a] text-[11px] transition-all duration-150 hover:border-[#f97316] hover:text-[#f97316]"
            >
              contact
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* HERO */}
        <section className="space-y-6 pt-32 pb-32 hero-fade-up">
          <h1
            style={headingFont}
            className="text-3xl md:text-4xl leading-tight text-center"
          >
            GEEKS DONT PANIC
          </h1>

          <p className="text-sm max-w-xl text-[#d4d4d4] text-center mx-auto">
            crafting the intersection of digital elegance and tangible
            innovation, my work melds artistry with functionality. explore a
            curated blend of custom tech and visual storytelling.
          </p>
        </section>

        {/* FEATURED PROJECT – CEMENT NUMBERPAD */}
        <section className="space-y-3 section-fade-up">
          <p className="text-xs text-[#a3a3a3]">next drop</p>

          <h2 className="text-2xl leading-snug" style={headingFont}>
            brutalist hardware, calm typing experience.
          </h2>

          <p className="text-sm max-w-xl text-[#d4d4d4]">
            i design dune-inspired, brutalist objects, custom keyboards, and
            small digital tools. this space is a quiet index of what i&apos;m
            building — not a light show.
          </p>

          <Link
            href="/numberpad"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f97316] text-xs uppercase tracking-[0.16em] transition-all duration-200 hover:bg-[#f97316] hover:text-black hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]"
          >
            view numberpad
            <span className="text-[13px]">↗</span>
          </Link>
        </section>

        <hr className="border-[#262626]" />

        {/* CURRENT FOCUS */}
        <section id="about" className="space-y-4 section-fade-up">
          <p className="text-xs text-[#a3a3a3]">current focus</p>

          <ul className="text-sm space-y-1">
            <li>– cement + metal keyboards with brutalist forms</li>
            <li>– sports tech experiments and cage concepts</li>
            <li>– small-run, story-driven hardware drops</li>
          </ul>
        </section>

        <hr className="border-[#262626]" />

        {/* PROJECT INDEX */}
        <section id="work" className="space-y-4 section-fade-up">
          <p className="text-xs text-[#a3a3a3]">selected surfaces</p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border border-[#262626] rounded-xl p-4 space-y-2 bg-transparent transition-all duration-200 transform hover:-translate-y-0.5 hover:border-[#f97316] hover:bg-[#151515]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                keyboards
              </p>
              <p className="text-sm">cement + metal keyboard series.</p>
              <p className="text-xs text-[#a3a3a3]">
                dune-like brutalist cases, sci-fi silhouettes, tuned acoustics.
              </p>
              <Link
                href="/keyboards"
                className="inline-flex items-center gap-1 text-xs mt-1 hover:text-[#f97316] transition-colors"
              >
                view collection <span className="text-[13px]">↗</span>
              </Link>
            </div>

            <div className="border border-[#262626] rounded-xl p-4 space-y-2 bg-transparent transition-all duration-200 transform hover:-translate-y-0.5 hover:border-[#f97316] hover:bg-[#151515]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                sports tech
              </p>
              <p className="text-sm">batting cages + training tools.</p>
              <p className="text-xs text-[#a3a3a3]">
                tech-heavy spaces for hitters and pitchers with clean visual
                systems.
              </p>
              <Link
                href="/drops"
                className="inline-flex items-center gap-1 text-xs mt-1 hover:text-[#f97316] transition-colors"
              >
                view concepts <span className="text-[13px]">↗</span>
              </Link>
            </div>

            <div className="border border-[#262626] rounded-xl p-4 space-y-2 bg-transparent transition-all duration-200 transform hover:-translate-y-0.5 hover:border-[#f97316] hover:bg-[#151515]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                film &amp; image
              </p>
              <p className="text-sm">commercial, sports, and food work.</p>
              <p className="text-xs text-[#a3a3a3]">
                directing, dp, and edit work with a grounded, cinematic feel.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs mt-1 hover:text-[#f97316] transition-colors"
              >
                reel (soon) <span className="text-[13px]">↗</span>
              </a>
            </div>

            <div className="border border-[#262626] rounded-xl p-4 space-y-2 bg-transparent transition-all duration-200 transform hover:-translate-y-0.5 hover:border-[#f97316] hover:bg-[#151515]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                lab
              </p>
              <p className="text-sm">one-off experiments.</p>
              <p className="text-xs text-[#a3a3a3]">
                small utilities, prototypes, and ideas that don&apos;t have a
                home yet.
              </p>
              <Link
                href="/lab"
                className="inline-flex items-center gap-1 text-xs mt-1 hover:text-[#f97316] transition-colors"
              >
                enter lab <span className="text-[13px]">↗</span>
              </Link>
            </div>
          </div>

          {/* YOUTUBE FEATURE */}
          <section className="space-y-4 pt-10 section-fade-up">
            <p className="text-xs text-[#a3a3a3]">video work</p>

            <div className="border border-[#262626] rounded-xl p-4 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a3a3a3]">
                featured video
              </p>
              <p className="text-sm">retro-future hardware visuals &amp; process.</p>

              <div className="aspect-video w-full bg-black rounded-md flex items-center justify-center text-[#555]">
                youtube embed goes here
              </div>

              <a
                href="https://youtube.com"
                className="inline-flex items-center gap-1 text-xs mt-2 hover:text-[#f97316] transition-colors"
              >
                visit channel <span className="text-[13px]">↗</span>
              </a>
            </div>
          </section>
        </section>

        <hr className="border-[#262626]" />

        {/* FOOTER */}
        <footer className="text-xs text-[#777] py-6">
          <p>2024 – geeks dont panic. built in motion.</p>
        </footer>
      </div>
    </main>
  );
}