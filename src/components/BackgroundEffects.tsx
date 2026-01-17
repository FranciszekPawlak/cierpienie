"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
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
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
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
  );
}
