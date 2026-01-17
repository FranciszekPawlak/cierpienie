interface SectionDividerProps {
  variant?: "green" | "white" | "subtle";
  label?: string;
}

export function SectionDivider({ variant = "green", label }: SectionDividerProps) {
  const lineColors = {
    green: "via-green-500/50",
    white: "via-neutral-400/50",
    subtle: "via-neutral-700/50",
  };

  const lineColor = lineColors[variant];

  if (label) {
    return (
      <div className="relative z-10 flex items-center justify-center py-8">
        <div
          className={`h-px w-16 bg-linear-to-r from-transparent ${lineColor} to-transparent sm:w-24`}
          aria-hidden="true"
        />
        <span className="mx-4 text-xs tracking-widest uppercase text-neutral-500">
          {label}
        </span>
        <div
          className={`h-px w-16 bg-linear-to-r from-transparent ${lineColor} to-transparent sm:w-24`}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className="relative z-10 flex items-center justify-center py-8">
      <div
        className={`h-px w-32 bg-linear-to-r from-transparent ${lineColor} to-transparent sm:w-48 md:w-64`}
        aria-hidden="true"
      />
    </div>
  );
}
