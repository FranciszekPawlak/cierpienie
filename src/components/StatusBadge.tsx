interface StatusBadgeProps {
  text: string;
  animationDelay?: string;
}

export function StatusBadge({
  text,
  animationDelay = "0.1s",
}: StatusBadgeProps) {
  return (
    <div
      className="mb-4 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2"
      style={{ animationDelay }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="font-medium text-green-400 text-sm tracking-wide">
        {text}
      </span>
    </div>
  );
}
