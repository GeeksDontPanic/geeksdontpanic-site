import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Simple top nav */}
      <header className="w-full border-b border-zinc-800">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Geeks Dont Panic
          </span>
          <div className="flex gap-4 text-sm">
            <Link href="/keyboards" className="text-zinc-400 hover:text-zinc-100">
              Keyboards
            </Link>
            <Link href="/drops" className="text-zinc-400 hover:text-zinc-100">
              Drops
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="block">Geeks Dont Panic</span>
            <span className="block text-zinc-400 text-lg md:text-2xl mt-2">
              Experimental hardware. Custom mechanical keyboards. Limited drops.
            </span>
          </h1>

          <p className="text-zinc-400">
            Small batch releases and one-off builds for people who like their gear
            a little too much. Each drop comes with a digital card pack you can rip
            open to reveal lore, variants, and surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href="/drops/current"
              className="px-6 py-3 rounded-full bg-zinc-100 text-black text-sm font-medium"
            >
              View current drop
            </Link>

            <Link
              href="/keyboards"
              className="px-6 py-3 rounded-full border border-zinc-700 text-sm text-zinc-200"
            >
              Keyboard archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
