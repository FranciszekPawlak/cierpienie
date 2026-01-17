import Link from "next/link";
import { GlowEffect } from "./GlowEffect";
import { StatusBadge } from "./StatusBadge";

export function StaffSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-24">
      <GlowEffect
        size="md"
        position="center"
        blur="md"
        className="bg-green-500/5"
      />

      <StatusBadge text="Wkrótce" />

      <h2 className="mt-4 mb-6 animate-blur-in text-center text-4xl tracking-tight sm:text-5xl md:text-6xl">
        <span className="font-thin text-green-500">STAFF</span>
        <span className="ml-2 bg-linear-to-b from-white via-white to-neutral-400 bg-clip-text font-black text-transparent">
          Cierpienia
        </span>
      </h2>

      <p
        className="mb-6 max-w-lg animate-fade-in-up text-center text-lg text-neutral-400"
        style={{ animationDelay: "0.15s" }}
      >
        Pracujemy nad fajnym staffem, który będzie można zdobyć na naszych
        eventach (np za porzyganie się na podbiegach xD)
      </p>

      <Link
        href="/staff"
        className="group relative mt-8 inline-flex animate-fade-in-up items-center gap-3"
        style={{ animationDelay: "0.25s" }}
      >
        <div
          className="absolute inset-0 rounded-full bg-green-500/20 blur-xl transition-all duration-500 group-hover:bg-green-500/30 group-hover:blur-2xl"
          aria-hidden="true"
        />

        <span className="relative inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-8 py-4 font-bold text-green-400 text-lg tracking-wide transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/15">
          Dowiedz się więcej
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </Link>
    </section>
  );
}
