export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-8 text-6xl font-black tracking-tighter sm:text-8xl md:text-9xl animate-blur-in">
        <span className="relative bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          Cierpienie
          <span
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500 blur-[70px] animate-float"
            aria-hidden="true"
          />
        </span>
      </h1>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-500">
          <span className="text-xs tracking-widest uppercase">Poznaj nas</span>
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
