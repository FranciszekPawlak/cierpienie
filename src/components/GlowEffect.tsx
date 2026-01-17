interface GlowEffectProps {
  size?: "sm" | "md" | "lg";
  color?: "green" | "emerald";
  position?:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  blur?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-[250px] w-[250px]",
  md: "h-[400px] w-[400px]",
  lg: "h-[600px] w-[600px]",
};

const colorClasses = {
  green: "bg-green-500",
  emerald: "bg-emerald-500",
};

const positionClasses = {
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-left": "top-1/4 left-1/4",
  "top-right": "top-1/4 right-1/4",
  "bottom-left": "bottom-1/3 left-1/4",
  "bottom-right": "bottom-1/4 right-1/4",
};

const blurClasses = {
  sm: "blur-[80px]",
  md: "blur-[120px]",
  lg: "blur-[150px]",
  xl: "blur-[200px]",
};

const opacityBySize = {
  sm: "/4",
  md: "/5",
  lg: "/8",
};

export function GlowEffect({
  size = "md",
  color = "green",
  position = "center",
  blur = "md",
  className = "",
}: GlowEffectProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${sizeClasses[size]} ${colorClasses[color]}${opacityBySize[size]} ${positionClasses[position]} ${blurClasses[blur]} ${className}`}
      aria-hidden="true"
    />
  );
}
