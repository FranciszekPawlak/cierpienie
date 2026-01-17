import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

export default function StaffPage() {
  return (
    <main className="min-h-screen px-6 selection:bg-green-500/30 selection:text-green-200">
      <header>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center justify-between sm:hidden">
            <Link
              href="/"
              className="group flex items-center gap-2 text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              <svg
                className="group-hover:-translate-x-1 h-5 w-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium text-sm">Powrót</span>
            </Link>

            <h1 className="text-lg tracking-tight">
              <span className="bg-linear-to-r from-white to-neutral-400 bg-clip-text font-black text-transparent">
                Cierpienie
              </span>
              <span className="ml-1 font-thin text-green-400">STAFF</span>
            </h1>
          </div>

          {/* Desktop: horizontal layout */}
          <div className="hidden items-center justify-between sm:flex">
            <Link
              href="/"
              className="group flex items-center gap-2 text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              <svg
                className="group-hover:-translate-x-1 h-5 w-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium text-sm">Powrót</span>
            </Link>

            <h1 className="text-lg tracking-tight">
              <span className="bg-linear-to-r from-white to-neutral-400 bg-clip-text font-black text-transparent">
                Ciierpienie
              </span>
              <span className="ml-1 font-thin text-green-400">STAFF</span>
            </h1>

            <div className="w-20" />
          </div>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center py-16">
        <StatusBadge text="Wkrótce" />

        <h2 className="mb-6 animate-blur-in text-center text-4xl tracking-tight sm:text-5xl md:text-6xl">
          <span className="font-thin text-green-500">STAFF</span>
          <span className="ml-2 bg-linear-to-b from-white via-white to-neutral-400 bg-clip-text font-black text-transparent">
            Cierpienia
          </span>
        </h2>

        <p
          className="mb-4 max-w-xl animate-fade-in-up text-center text-lg text-neutral-300 sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          Pracujemy nad fajnym staffem dla naszej społeczności.
        </p>

        <p
          className="mb-8 max-w-lg animate-fade-in-up text-center text-base text-neutral-500"
          style={{ animationDelay: "0.2s" }}
        >
          Chcemy stworzyć coś wyjątkowego dla uczestników naszych eventów.
          Żadnego sklepu, tylko prawdziwe docenienie Twojego udziału w
          Cierpieniu.
        </p>

        <div
          className="max-w-md animate-fade-in-up rounded-2xl border border-neutral-800/50 bg-neutral-900/30 p-6 backdrop-blur-sm"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-center font-bold text-lg text-white">
            Jak zdobyć staff?
          </h3>
          <span className="mb-4 block text-center text-neutral-400 text-xs">
            Tylko podczas eventów!
          </span>
          <ul className="flex flex-col items-center space-y-3 text-neutral-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-green-500">→</span>
              <span>Porzygaj się z wysiłku</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-green-500">→</span>
              <span>Popłacz się z cierpienia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-green-500">→</span>
              <span>Zagnij prowadzącego</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-green-500">→</span>
              <span>Wygraj solówkę z uczestnikiem</span>
            </li>
          </ul>
        </div>

        <div
          className="mt-12 flex animate-fade-in-up flex-col items-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <p className="text-center text-neutral-600 text-sm">
            Chcesz wiedzieć kiedy wystartujemy? Zapisz się do newslettera!
          </p>

          <Link
            href="/#newsletter"
            className="group relative inline-flex items-center gap-2"
          >
            <div
              className="absolute inset-0 rounded-full bg-green-500/20 blur-xl transition-all duration-500 group-hover:bg-green-500/30 group-hover:blur-2xl"
              aria-hidden="true"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 font-bold text-base text-green-400 tracking-wide transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/15">
              Zapisz się
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </section>
    </main>
  );
}
