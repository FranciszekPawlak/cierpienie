import { GlowEffect } from "./GlowEffect";

export function AboutSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-24">
      <GlowEffect
        size="md"
        position="center"
        blur="md"
        className="h-[500px] w-[500px] bg-green-500/6"
      />
      <GlowEffect
        size="sm"
        color="emerald"
        position="bottom-left"
        blur="sm"
        className="bg-emerald-500/4"
      />

      <p
        className="mb-8 max-w-3xl animate-fade-in-up text-center text-neutral-300 text-xl leading-relaxed sm:text-2xl"
        style={{ animationDelay: "0.15s" }}
      >
        <span className="font-black text-white">Cierpienie</span> to inicjatywa
        sportowa dla młodych ludzi, której misją jest skupianie osób lubiących
        aktywny tryb życia i pracę nad własnymi słabościami. Organizujemy
        wydarzenia, na których możemy{" "}
        <span className="text-green-400">celebrować sport</span>.
      </p>

      <div
        className="flex animate-fade-in-up flex-col items-center gap-4"
        style={{ animationDelay: "0.25s" }}
      >
        {[
          "Nie masz jeszcze 35 lat?",
          "Stoicyzm nie jest Ci obcy?",
          "Lubisz sober morning matcha labubu rave'y?",
          "Cierpienie sprawia Ci przyjemność?",
        ].map((question) => (
          <div
            key={question}
            className="rounded-lg border border-neutral-800/50 bg-neutral-900/30 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-green-500/20 hover:bg-neutral-800/30"
          >
            <span className="inline-block text-center text-base text-neutral-300 sm:text-lg">
              {question}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-12 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="group relative">
          <div
            className="absolute inset-0 rounded-full bg-green-500/20 blur-xl transition-all duration-500 group-hover:bg-green-500/30"
            aria-hidden="true"
          />
          <p className="relative rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 text-center font-bold text-base text-green-400 tracking-wide transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/15 sm:text-lg">
            MUSISZ WPAŚĆ DO NAS NA EVENT
          </p>
        </div>
      </div>
    </section>
  );
}
