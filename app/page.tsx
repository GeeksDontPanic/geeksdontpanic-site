import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050507] text-zinc-50">
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

      {/* HERO SURFACE */}
<section className="w-full bg-white pt-6 pb-20">
  {/* Giant rounded black container */}
  <div className="max-w-[1400px] mx-auto bg-[#0f0f0f] rounded-[40px] px-6 md:px-12 py-20">

    {/* HERO TEXT */}
    <div className="max-w-xl mx-auto text-center space-y-8">
      <h1
  style={{
    fontFamily:
      '"GDPHero", Satoshi, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  }}
  className="w-full max-w-3xl mx-auto text-[60px] md:text-[100px] font-normal leading-tight text-white block"
>
  geeks dont panic
</h1>

      <p className="text-zinc-300 text-[15px] mx-auto leading-relaxed">
        Multi‑niche artist and designer crafting the intersection of digital elegance and tangible innovation. My work blends physical craft and visual storytelling — from custom hardware and cement keyboards to cinematic content and sports‑tech concepts.
      </p>

      {/* CURRENT DROP BUTTON */}
<div className="pt-2">
  <a
    href="/current-drop"
    className="group relative inline-flex items-center px-7 py-3.5 rounded-full bg-[#ff5e36] text-white text-[15px] font-medium tracking-[0.18em] uppercase overflow-hidden transition-colors"
  >
    {/* Text */}
    <span className="relative z-10 transition-colors duration-100 group-hover:text-[#ff5e36]">
      Current Drop
    </span>

    {/* White oval with mass and bounce */}
    <span
    className="
    absolute right-3 top-1/2 -translate-y-1/2 
    h-8 w-8 rounded-full bg-white 
    origin-right
    transition-[width,transform] 
    duration-500 
    ease-[cubic-bezier(.25,1.4,.3,1)]
    /* default preload tension so hover has motion IN */
    translate-x-[0px] scale-x-[0.96]
    
    /* hover: expands but NOT full width */
    group-hover:w-[calc(100%-2.2rem)]
    /* impact shift for right-edge dip */
    group-hover:translate-x-[-0px]
    /* slight stretch for weight */
    group-hover:scale-x-[1.06]
  "
/>

    {/* Arrow centered inside the expanding oval */}
    <span className="relative z-10 text-[#ff5e36] text-lg translate-x-[14px]">
  →
    </span>

  </a>
</div>


    </div>

    {/* SPACING before cards */}
    <div className="h-12" />

    {/* IMAGE CARDS ROW — only TWO */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* CARD 1 */}
      <div className="rounded-[30px] overflow-hidden relative cursor-pointer">
        <img
          src="https://framerusercontent.com/images/Qh24MN7LNhJMTwknfBPXsikNJCs.png?scale-down-to=2048&width=2408&height=1308"
          alt="Branding Project"
          className="w-full h-[300px] md:h-[340px] object-cover"
        />
        <p className="absolute bottom-5 left-6 text-white text-lg">
          Branding Project
        </p>
        <div className="absolute bottom-5 right-6 h-4 w-4 bg-white rounded-full opacity-90" />
      </div>

      {/* CARD 2 */}
      <div className="rounded-[30px] overflow-hidden relative cursor-pointer">
        <img
          src="https://framerusercontent.com/images/u9Z4TQPqszTuRcQj7x427Zc85I.png?scale-down-to=2048&width=2408&height=1308"
          alt="Branding Project"
          className="w-full h-[300px] md:h-[340px] object-cover"
        />
        <p className="absolute bottom-5 left-6 text-white text-lg">
          Branding Project
        </p>
        <div className="absolute bottom-5 right-6 h-4 w-4 bg-white rounded-full opacity-90" />
      </div>
    </div>

  </div>
</section>




            {/* ABOUT — NEW STYLE */}
      <section
        id="about"
        className="w-full bg-[#08080a] py-20 border-b border-zinc-900"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
          {/* PHOTO */}
          <div className="flex-shrink-0 group [perspective:1200px]">
            <img
              src="/images/selfportrait.png"
              alt="Self Portrait"
              className="w-[200px] h-[200px] rounded-full object-cover border border-zinc-800 shadow-[0_20px_45px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[2deg] group-hover:scale-[1.03]"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4 max-w-xl">
            <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
              About Me
            </p>

            <h2
              style={headingFont}
              className="text-2xl md:text-3xl font-semibold text-zinc-50 leading-tight"
            >
              Hi, I&apos;m Chris — an artist exploring physical and digital.
            </h2>

            <div className="pt-2">
              <a
                href="/about"
                className="group relative inline-flex items-center px-7 py-3.5 rounded-full bg-[#ff5e36] text-white text-[15px] font-medium tracking-[0.18em] uppercase overflow-hidden transition-colors"
              >
                <span className="relative z-10 transition-colors duration-100 group-hover:text-[#ff5e36]">
                  About Me
                </span>

                <span
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2 
                    h-8 w-8 rounded-full bg-white 
                    origin-right
                    transition-[width,transform] 
                    duration-500 
                    ease-[cubic-bezier(.25,1.4,.3,1)]
                    translate-x-[0px] scale-x-[0.96]
                    group-hover:w-[calc(100%-2.2rem)]
                    group-hover:translate-x-[-0px]
                    group-hover:scale-x-[1.06]
                  "
                />

                <span className="relative z-10 text-[#ff5e36] text-lg translate-x-[14px]">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="w-full border-b border-zinc-900 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
            WHAT I&apos;M DOING
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Industrial Design",
              "Product Development",
              "3D Rendering",
              "Filmmaking",
              "Photography",
              "Custom Keyboards",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-[#08080a] px-4 py-5 text-sm text-zinc-200"
              >
                <p
                  style={headingFont}
                  className="text-xs font-semibold tracking-[0.16em] uppercase"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK / PROJECTS */}
      <section
        id="work"
        className="w-full border-b border-zinc-900 bg-[#08080a] py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
            SELECTED PROJECTS
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl border border-zinc-800 bg-[#0b0b0d] flex items-center justify-center text-xs text-zinc-500"
              >
                Project image {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section
        id="contact"
        className="w-full bg-[#050507] py-16 md:py-20 border-b border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-center">
          <div className="space-y-3">
            <h2
              style={headingFont}
              className="text-xl md:text-2xl font-semibold text-zinc-50"
            >
              Have a cool project?
            </h2>
            <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed max-w-xl">
              Whether it&apos;s a custom keyboard, sports tech, a 3D concept, or
              something that lives between digital and physical, I&apos;d love to
              hear about it.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="mailto:chris@geeksdontpanic.com"
              className="px-6 py-3 rounded-full bg-[#f25b3f] text-black text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#ff6e4e] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-zinc-500">
          <div>2024 | Geeks Dont Panic</div>
          <div className="flex flex-wrap gap-4">
            <span>US-based artist & designer living abroad.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
