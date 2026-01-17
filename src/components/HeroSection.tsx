export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-8 animate-blur-in font-black text-6xl tracking-tighter sm:text-8xl md:text-9xl">
        <span className="relative bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          Cierpienie
          <span
            className="-right-16 -top-16 sm:-right-24 sm:-top-24 pointer-events-none absolute h-48 w-48 animate-float rounded-full bg-green-500 blur-[60px] sm:h-64 sm:w-64 sm:blur-[70px]"
            aria-hidden="true"
          />
        </span>
      </h1>
    </section>
  );
}
