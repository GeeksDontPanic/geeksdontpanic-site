import Link from "next/link";
import { EmailSignupForm } from "@/components/EmailSignupForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#050507] text-zinc-50">
      <div className="text-center px-6 space-y-6">
        <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
          geeks dont panic
        </p>

        <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">
          New site coming soon.
        </h1>

        <p className="max-w-xl mx-auto text-zinc-400 text-[15px] leading-relaxed">
          Rebuilding everything from the ground up.  
          Brutalist hardware, calm typing experiences, unusual ideas,
          and the entire GDP universe — all in progress.
        </p>

        <div className="transition-transform duration-200 hover:scale-[1.02]">
          <EmailSignupForm />
        </div>
      </div>
    </main>
  );
}