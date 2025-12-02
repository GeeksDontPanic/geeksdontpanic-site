"use client";

import { useState } from "react";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the list. I’ll email when things go live.");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col items-center gap-8"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for updates"
        className="w-full max-w-xs px-4 py-2 rounded-md bg-[#0a0a0c] border border-zinc-700 text-zinc-200 placeholder-zinc-500 focus:outline-none"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex items-center px-7 py-2.5 rounded-full bg-zinc-800 text-zinc-100 text-[13px] font-medium tracking-[0.18em] uppercase overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {/* Label text with hover color shift for contrast when oval passes under */}
        <span className="relative z-10 transition-colors duration-100 group-hover:text-zinc-900">
          {status === "loading" ? "Sending..." : "Notify Me"}
        </span>

        {/* White oval that stretches in from the right, like the original orange button */}
        <span
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            h-7 w-8 rounded-full bg-zinc-100
            origin-right
            transition-[width,transform]
            duration-500
            ease-[cubic-bezier(.25,1.4,.3,1)]
            translate-x-[5px] scale-x-[0.96]
            group-hover:w-[calc(100%-1.6rem)]
            group-hover:scale-x-[1.06]
          "
        />

        {/* Arrow sitting on top, matching the original orange button layout */}
        <span className="relative z-10 translate-x-[14px] flex items-center">
          <svg
            fill="#4B5563"
            width="16"
            height="16"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
          </svg>
        </span>
      </button>

      {message && (
        <p className="text-xs text-zinc-400 max-w-xs mt-1">
          {message}
        </p>
      )}
    </form>
  );
}