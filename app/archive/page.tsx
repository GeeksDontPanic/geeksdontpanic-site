"use client";

import Link from "next/link";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const CATEGORIES = [
  "all",
  "keyboards",
  "fightsticks",
  "film",
  "sports-tech",
  "other",
] as const;

type Category = (typeof CATEGORIES)[number];

type ArchiveItem = {
  title: string;
  year: string;
  category: Category;
  blurb: string;
  heroImage: string;
  slug: string;
};

const ITEMS: ArchiveItem[] = [
  {
    title: "Dark River",
    year: "2023",
    category: "keyboards",
    blurb: "Hajimari 65% keyboard - Color: Dark River",
    heroImage: "/images/keyboard/dark-river.jpg",
    slug: "dark-river",
  },
  {
    title: "H3R0 Fightstick A",
    year: "2022",
    category: "fightsticks",
    blurb: "FGC fightstick - H3R0 Iterations - Part of a dual set H3R0/V1LN",
    heroImage: "/images/fightstick/fightstick-render.png",
    slug: "h3r0-fightstick-a",
  },
  {
    title: "H3R0 Fightstick B",
    year: "2022",
    category: "fightsticks",
    blurb: "FGC fightstick - H3R0 Iterations - Part of a dual set H3R0/V1LN",
    heroImage: "/images/fightstick/fightstick-render.png",
    slug: "h3r0-fightstick-b",
  },
  {
    title: "H3R0 Fightstick C",
    year: "2022",
    category: "fightsticks",
    blurb: "FGC fightstick - H3R0 Iterations - Part of a dual set H3R0/V1LN",
    heroImage: "/images/fightstick/fightstick-render.png",
    slug: "h3r0-fightstick-c",
  },
  {
    title: "H3R0 Fightstick D",
    year: "2022",
    category: "fightsticks",
    blurb: "FGC fightstick - H3R0 Iterations - Part of a dual set H3R0/V1LN",
    heroImage: "/images/fightstick/fightstick-render.png",
    slug: "h3r0-fightstick-d",
  },
];

export default function ArchivePage() {
  const filtered = ITEMS;

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
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 space-y-8">
          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">
              Home
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              Archive
            </span>
          </div>

          <header className="space-y-3">
            <p className="text-xs tracking-[0.28em] uppercase text-zinc-500">
              Archive
            </p>
            <h1
              style={headingFont}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              Previous drops, experiments, and builds.
            </h1>
            <p className="text-sm md:text-[15px] text-zinc-300 max-w-2xl leading-relaxed">
              A running collection of things I&apos;ve made: cement boards,
              fightsticks, sports tech concepts, film work, and other projects
              that live between physical and digital.
            </p>
          </header>

          

          {/* Full-screen stacked image catalogue */}
          <div className="pt-6">
            {filtered.length > 0 ? (
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                {filtered.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/archive/${item.slug}`}
                    className="block"
                  >
                    <section className="w-screen h-[100vh] overflow-hidden cursor-pointer">
                      <img
                        src={item.heroImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </section>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-zinc-500">
                Nothing here yet — you can start dropping pieces into this visual catalogue once you&apos;re ready.
              </p>
            )}
          </div>

          {/* Grid — image-only catalogue */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/archive/${item.slug}`}
                className="group overflow-hidden"
              >
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </article>
              </Link>
            ))}

            {filtered.length === 0 && (
              <p className="text-xs text-zinc-500 col-span-full">
                Nothing here yet — you can start dropping pieces into this visual
                catalogue once you&apos;re ready.
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}