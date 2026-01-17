export function AboutSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-green-500/6 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-emerald-500/4 blur-[80px]"
        aria-hidden="true"
      />

      <p
        className="max-w-3xl text-center text-xl leading-relaxed text-neutral-300 mb-8 animate-fade-in-up sm:text-2xl"
        style={{ animationDelay: "0.15s" }}
      >
        <span className="font-black text-white">Cierpienie</span> to
        inicjatywa sportowa dla młodych ludzi, której misją jest skupianie osób
        lubiących aktywny tryb życia i pracę nad własnymi słabościami.
        Organizujemy wydarzenia, na których możemy{" "}
        <span className="text-green-400">celebrować sport</span>.
      </p>

      <div
        className="flex flex-col items-center gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.25s" }}
      >
        {[
          "Nie masz jeszcze 35 lat?",
          "Stoicyzm nie jest Ci obcy?",
          "Lubisz sober morning matcha labubu rave'y?",
        ].map((question) => (
          <div
            key={question}
            className="flex items-center gap-2 rounded-lg border border-neutral-800/50 bg-neutral-900/30 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-green-500/20 hover:bg-neutral-800/30"
          >
            <span className="text-green-500/70 text-sm">→</span>
            <span className="text-base text-neutral-300 sm:text-lg">
              {question}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-12 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="relative group">
          <div
            className="absolute inset-0 rounded-full bg-green-500/20 blur-xl transition-all duration-500 group-hover:bg-green-500/30"
            aria-hidden="true"
          />
          <p className="relative rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 text-base font-bold tracking-wide text-green-400 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/15 sm:text-lg">
            MUSISZ WPAŚĆ DO NAS NA EVENT
          </p>
        </div>
      </div>
    </section>
  );
}
