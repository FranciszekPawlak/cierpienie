import { GlowEffect } from "./GlowEffect";
import { GradientHeading } from "./GradientHeading";

export function SponsorsSection() {
  const sponsorLogos = [
    { name: "TechCorp", letters: "TC" },
    { name: "InnovateLab", letters: "IL" },
    { name: "FutureDev", letters: "FD" },
    { name: "CodeBase", letters: "CB" },
    { name: "NextGen", letters: "NG" },
  ];

  return (
    <section
      id="sponsors"
      className="relative flex min-h-screen flex-col items-center justify-center py-24"
    >
      <GlowEffect size="lg" position="center" blur="lg" />
      <GlowEffect size="md" color="emerald" position="top-right" blur="md" />

      <GradientHeading className="mb-6 text-center">
        Szukamy sponsorów matchy <span className="text-white">🤓</span>
      </GradientHeading>

      <p
        className="mb-4 max-w-2xl animate-fade-in-up px-4 text-center text-base text-neutral-400 sm:text-lg"
        style={{ animationDelay: "0.2s" }}
      >
        Chcesz wesprzeć{" "}
        <span className="font-black text-green-500">Cierpienie</span>? Napisz do
        nas na <b>box@cierpienie.club</b>! Władujemy tu Twoje logo.
      </p>

      <div
        className="my-16 w-full overflow-hidden"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="group flex shrink-0 flex-col items-center gap-2 opacity-15 grayscale transition-all duration-500 hover:opacity-40 hover:grayscale-0"
            >
              <div className="relative flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  {index % 3 === 0 && (
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rotate-45 rounded-lg bg-neutral-600 sm:h-12 sm:w-12" />
                      <span className="font-bold text-2xl text-neutral-400 tracking-tighter sm:text-3xl">
                        {logo.letters}
                      </span>
                    </div>
                  )}
                  {index % 3 === 1 && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-600 sm:h-12 sm:w-12">
                        <div className="h-4 w-4 rounded-full bg-neutral-600 sm:h-5 sm:w-5" />
                      </div>
                      <span className="font-light text-neutral-400 text-xl tracking-widest sm:text-2xl">
                        {logo.name.slice(0, 6)}
                      </span>
                    </div>
                  )}
                  {index % 3 === 2 && (
                    <div className="flex items-center">
                      <span className="font-black text-2xl text-neutral-400 tracking-tight sm:text-3xl">
                        {logo.letters}
                      </span>
                      <div className="mx-1 h-8 w-0.5 bg-neutral-600 sm:h-10" />
                      <span className="font-extralight text-lg text-neutral-500 sm:text-xl">
                        {logo.name.slice(2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
