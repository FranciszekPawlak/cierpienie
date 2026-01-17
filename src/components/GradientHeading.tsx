import type { ElementType, ReactNode } from "react";

type GradientHeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  gradientClassName?: string;
};

export function GradientHeading<T extends ElementType = "h2">({
  as,
  children,
  className = "",
  gradientClassName = "",
}: GradientHeadingProps<T>) {
  const Component = as || "h2";

  return (
    <Component
      className={`animate-blur-in font-bold text-3xl text-white tracking-tight sm:text-4xl md:text-5xl ${className}`}
    >
      <span
        className={`bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent ${gradientClassName}`}
      >
        {children}
      </span>
    </Component>
  );
}
