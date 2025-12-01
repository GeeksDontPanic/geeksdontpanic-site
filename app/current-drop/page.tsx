import Link from "next/link";

const SHOPIFY_CHECKOUT_URL = "https://your-shopify-checkout-link-here";

const headingFont = {
  fontFamily:
    "Satoshi, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export default function CurrentDropPage() {
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

      <main className="min-h-screen bg-[#050507] text-zinc-50 px-4 py-10">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Breadcrumb */}
          <div className="text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-200">
              Home
            </Link>{" "}
            <span>/</span>{" "}
            <span className="text-zinc-300 uppercase tracking-[0.2em]">
              Current Drop
            </span>
          </div>
          {/* Top section: image + basic info */}
          <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-start">
            {/* Image placeholder / hero */}
            <div className="aspect-[4/3] rounded-2xl border border-zinc-800 bg-[#08080a] flex items-center justify-center text-zinc-600 text-sm">
              Keyboard hero image goes here
            </div>

            {/* Product info */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h1
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                  style={headingFont}
                >
                  Haji65 — Limited Drop
                </h1>
                <p className="text-zinc-400 text-[11px] uppercase tracking-[0.2em]">
                  Geeks Dont Panic
                </p>
              </div>

              <p className="text-zinc-300 text-sm md:text-[15px] leading-relaxed">
                A small-batch custom 65% mechanical keyboard with a focus on
                feel, sound, and a little bit of over-engineering. Numbered
                units, no guaranteed restock.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="text-xl font-medium">$XXX</span>
                <span className="text-[11px] text-emerald-400 uppercase tracking-[0.2em]">
                  Limited quantity
                </span>
              </div>

              <div className="pt-4 space-y-3">
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
                  Variants
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border border-zinc-800 rounded-lg px-3 py-2">
                    <span>Sand / PC Top</span>
                    <span className="text-zinc-500">x units</span>
                  </div>
                  <div className="flex justify-between border border-zinc-800 rounded-lg px-3 py-2">
                    <span>Graphite / Aluminum Top</span>
                    <span className="text-zinc-500">x units</span>
                  </div>
                </div>
              </div>

              {/* Buy button – we'll wire real Shopify URL later */}
              <div className="pt-4">
                <Link
                  href={SHOPIFY_CHECKOUT_URL}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-100 text-black text-sm font-medium disabled:opacity-60"
                >
                  Buy on Shopify
                </Link>
                <p className="text-xs text-zinc-500 mt-2">
                  Checkout is handled securely via Shopify.
                </p>
              </div>
            </div>
          </section>

          {/* Specs */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2
                className="text-xl font-semibold text-zinc-50"
                style={headingFont}
              >
                Details
              </h2>
              <ul className="text-sm text-zinc-400 space-y-1.5">
                <li>• 65% layout</li>
                <li>• Gasket or top mount (update to your spec)</li>
                <li>• Plate material: TBD</li>
                <li>• Case material / finish: TBD</li>
                <li>• PCB: hotswap or solder, QMK/VIA compatible</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2
                className="text-xl font-semibold text-zinc-50"
                style={headingFont}
              >
                What&apos;s in the box
              </h2>
              <ul className="text-sm text-zinc-400 space-y-1.5">
                <li>• Keyboard case + plate + PCB</li>
                <li>• USB-C cable</li>
                <li>• Extra screws / hardware</li>
                <li>• Digital pack link for lore + extras</li>
              </ul>
            </div>
          </section>

          {/* Placeholder for the future pack-rip */}
          <section className="border border-zinc-800 rounded-2xl p-6 space-y-3 bg-[#08080a]">
            <h2
              className="text-lg font-semibold text-zinc-50"
              style={headingFont}
            >
              Digital Pack
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Every purchase includes a digital pack you can rip open to reveal
              card-style info, art, or bonuses tied to this drop. This is where
              the interactive pack experience will live.
            </p>
            <div className="mt-4 h-40 rounded-xl border border-dashed border-zinc-700 flex items-center justify-center text-xs text-zinc-500">
              Pack rip component coming soon
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
