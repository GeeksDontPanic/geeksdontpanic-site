import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#050507] text-zinc-50">
      <div className="text-center px-6 space-y-6">

        <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
          geeks dont panic
        </p>

        <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white">
          New site coming soon.
        </h1>

        <p className="max-w-md mx-auto text-zinc-400 text-[15px] leading-relaxed">
          Rebuilding everything from the ground up.  <br /><br />
          Brutalist hardware, calm typing experiences, unusual ideas, <br />and the entire GDP universe — all in progress.
        </p>

      </div>
    </main>
  );
}