"use client";

import { useState } from "react";
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
};

const ITEMS: ArchiveItem[] = [
  {
    title: "Cement Keyboard v1",
    year: "2023",
    category: "keyboards",
    blurb: "First cement case prototype with hand-poured shell and raw edges.",
  },
  {
    title: "Warehouse Studio Build",
    year: "2022",
    category: "other",
    blurb: "Converted a warehouse bay into a mixed workshop and film space.",
  },
  {
    title: "Custom Fightstick Concept",
    year: "2021",
    category: "fightsticks",
    blurb: "Low-profile chassis with sci-fi panel language and metal accents.",
  },
  {
    title: "Sports Cage Concept v1",
    year: "2024",
    category: "sports-tech",
    blurb: "First integrated tech cage mock for batting/pitching sessions.",
  },
  {
    title: "Food Spot Brand + Film",
    year: "2020",
    category: "film",
    blurb: "Directed and shot a small restaurant brand piece with macro food shots.",
  },
];

export default function ArchivePage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === active);

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

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
            {CATEGORIES.map((cat) => {
              const label =
                cat === "sports-tech"
                  ? "Sports Tech"
                  : cat.charAt(0).toUpperCase() + cat.slice(1);
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={
                    "px-3 py-1.5 rounded-full border text-xs transition-colors " +
                    (isActive
                      ? "border-[#f25b3f] bg-[#f25b3f] text-black"
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-600")
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-3 text-sm pt-4">
            {filtered.map((item) => (
              <article
                key={item.title + item.year}
                className="rounded-2xl border border-zinc-800 bg-[#08080a] p-4 space-y-2"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {item.year}
                </p>
                <h2 className="text-sm font-medium text-zinc-50">
                  {item.title}
                </h2>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.blurb}
                </p>
              </article>
            ))}

            {filtered.length === 0 && (
              <p className="text-xs text-zinc-500 col-span-full">
                Nothing here yet — you can start dropping pieces into this list
                once you&apos;re ready.
              </p>
            )}
          </div>

          <div className="pt-4">
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-300 hover:text-[#f25b3f] transition-colors"
            >
              View timeline <span className="text-[13px]">↗</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}