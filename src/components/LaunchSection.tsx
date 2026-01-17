import { NewsletterForm } from "./NewsletterForm";

export function LaunchSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-green-500/8 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-sm font-medium tracking-wide text-green-400">
          Wkrótce
        </span>
      </div>

      <h2 className="mb-6 text-center animate-blur-in">
        <span className="block text-4xl font-black tracking-tight bg-linear-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Startujemy na wiosnę
        </span>
      </h2>

      <p
        className="max-w-md text-center text-lg text-neutral-400 animate-fade-in-up sm:text-xl"
        style={{ animationDelay: "0.2s" }}
      >
        Zapisz się, żeby nie przegapić pierwszego eventu!
      </p>

      <div
        className="my-12 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: "0.25s" }}
      >
        <NewsletterForm />
      </div>
    </section>
  );
}
