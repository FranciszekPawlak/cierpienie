"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-green-500/30 selection:text-green-200">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-900/10 via-black to-black" />

        <div
          className="absolute -inset-[50%] opacity-15 blur-[100px] animate-aurora"
          style={{
            background: 'linear-gradient(45deg, #1a4d2e, #4d1a4d, #1a1a4d, #1a4d2e)',
            backgroundSize: '200% 200%'
          }}
        />

        <div
          className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-green-500/10 blur-[80px] transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-8 text-6xl font-black tracking-tighter sm:text-8xl md:text-9xl animate-blur-in">
          <span className="bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent">
            Cierpienie
          </span>
        </h1>

        <div
          className="mb-12 flex flex-col items-center gap-2 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-xl font-light tracking-wide text-neutral-300 sm:text-2xl">
            Lubimy cierpieć i pić matche
          </p>
          <span className="text-2xl sm:text-3xl animate-wiggle inline-block">
            🍵
          </span>
        </div>

        <div
          className="group relative mt-8 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.2em] text-neutral-500 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >

          <NameItem name="Natalia Begert" delay="1.4s" />
          <span className="hidden opacity-30 sm:inline select-none">|</span>
          <NameItem name="Wiktor Niedbalski" delay="1.5s" />
          <span className="hidden opacity-30 sm:inline select-none">|</span>
          <NameItem name="Franciszek Pawlak" delay="1.3s" />

        </div>
      </div>
    </main>
  );
}

function NameItem({ name, delay }: { name: string; delay: string }) {
  return (
    <span
      className="cursor-default transition-all duration-300 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      {name}
    </span>
  );
}
