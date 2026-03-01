interface TBABadgeProps {
  label?: string;
  className?: string;
}

export function TBABadge({ label = "TBA", className = "" }: TBABadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 ${className}`}
    >
      {label}
    </span>
  );
}

export function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 ${className}`}
    >
      Coming Soon
    </span>
  );
}
