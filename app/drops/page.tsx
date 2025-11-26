import Link from 'next/link'

export default function DropsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Drops
        </h1>
        <p className="text-zinc-400">
          Limited-run keyboards and special releases from Geeks Dont Panic. 
          When a drop goes live, it appears here along with variant details, 
          quantities, and a link to the digital pack rip.
        </p>

        <div className="mt-8 border border-zinc-800 rounded-xl p-6 text-center">
          <p className="text-zinc-500">No active drop right now.</p>
          <p className="text-zinc-500 text-sm mt-1">
            Check back soon or follow for announcements.
          </p>
        </div>
      </div>
    </main>
  );
}
