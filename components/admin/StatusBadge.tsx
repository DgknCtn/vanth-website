const STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  SUBMITTED: { label: "Submitted", className: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  UNDER_REVIEW: { label: "Under Review", className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  PENDING: { label: "Pending", className: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  APPROVED: { label: "Approved", className: "bg-green-500/10 text-green-400 border-green-500/20" },
  REJECTED: { label: "Rejected", className: "bg-red-500/10 text-red-400 border-red-500/20" },
  FLAGGED: { label: "Flagged", className: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
};

export function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    className: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.className}`}>
      {config.label}
    </span>
  );
}
