export function SponsorsSection() {
  // Placeholder loga sponsorów - wyglądające jak prawdziwe loga firm
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
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24"
    >
      {/* Background effects */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-green-500/8 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <h2 className="mb-6 animate-blur-in text-center">
        <span className="block bg-linear-to-b from-white via-white to-neutral-400 bg-clip-text font-black text-4xl text-transparent tracking-tight sm:text-5xl md:text-6xl">
          Szukamy sponsorów matchy <span className="text-white">🤓</span>
        </span>
      </h2>

      <p
        className="mb-4 max-w-2xl animate-fade-in-up text-center text-lg text-neutral-400 sm:text-xl"
        style={{ animationDelay: "0.2s" }}
      >
        Chcesz wesprzeć <span className="font-black text-green-500">Cierpienie</span>? Napisz do nas! Władujemy tu Twoje logo.
      </p>


      {/* Sponsor logos - full width row */}
      <div
        className="my-16 flex w-full animate-fade-in-up items-center justify-center gap-8 overflow-x-auto px-4 sm:gap-12 md:gap-16 lg:gap-20"
        style={{ animationDelay: "0.4s" }}
      >
        {sponsorLogos.map((logo, index) => (
          <div
            key={logo.name}
            className="group flex shrink-0 flex-col items-center gap-2 opacity-15 grayscale transition-all duration-500 hover:opacity-40 hover:grayscale-0"
          >
            {/* Logo placeholder - stylizowane jak prawdziwe logo */}
            <div className="relative flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40">
              {/* Abstract logo shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                {index % 3 === 0 && (
                  // Geometric style
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rotate-45 rounded-lg bg-neutral-600 sm:h-12 sm:w-12" />
                    <span className="font-bold text-2xl text-neutral-400 tracking-tighter sm:text-3xl">
                      {logo.letters}
                    </span>
                  </div>
                )}
                {index % 3 === 1 && (
                  // Circular style
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
                  // Modern wordmark style
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

    </section>
  );
}
