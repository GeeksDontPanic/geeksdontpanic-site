import Link from 'next/link'

const SHOPIFY_CHECKOUT_URL = 'https://your-shopify-checkout-link-here'

export default function CurrentDropPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="text-sm text-zinc-500">
          <Link href="/drops" className="hover:text-zinc-200">
            Drops
          </Link>{' '}
          <span>/</span>{' '}
          <span className="text-zinc-300">
            Current Drop
          </span>
        </div>

        {/* Top section: image + basic info */}
        <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-start">
          {/* Image placeholder / hero */}
          <div className="aspect-[4/3] rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-600 text-sm">
            Keyboard hero image goes here
          </div>

          {/* Product info */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Haji65 — Limited Drop
              </h1>
              <p className="text-zinc-400 text-sm uppercase tracking-[0.2em]">
                Geeks Dont Panic
              </p>
            </div>

            <p className="text-zinc-400 text-sm">
              A small-batch custom 65% mechanical keyboard with a focus on feel, 
              sound, and a little bit of over-engineering. Numbered units, no guaranteed restock.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xl font-medium">$XXX</span>
              <span className="text-xs text-emerald-400 uppercase tracking-[0.2em]">
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
            <h2 className="text-xl font-semibold">Details</h2>
            <ul className="text-sm text-zinc-400 space-y-1.5">
              <li>• 65% layout</li>
              <li>• Gasket or top mount (update to your spec)</li>
              <li>• Plate material: TBD</li>
              <li>• Case material / finish: TBD</li>
              <li>• PCB: hotswap or solder, QMK/VIA compatible</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">What&apos;s in the box</h2>
            <ul className="text-sm text-zinc-400 space-y-1.5">
              <li>• Keyboard case + plate + PCB</li>
              <li>• USB-C cable</li>
              <li>• Extra screws / hardware</li>
              <li>• Digital pack link for lore + extras</li>
            </ul>
          </div>
        </section>

        {/* Placeholder for the future pack-rip */}
        <section className="border border-zinc-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-semibold">Digital Pack</h2>
          <p className="text-sm text-zinc-400">
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
  )
}
