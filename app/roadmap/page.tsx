import { TBABadge, ComingSoonBadge } from "@/components/ui/TBABadge";
import { Check, Clock, Loader } from "lucide-react";

export const metadata = {
  title: "Roadmap — VANTH NFT Collection",
  description: "VANTH development roadmap. Clear milestones, measurable delivery.",
};

const phases = [
  {
    id: 0,
    name: "Phase 0",
    title: "Foundation",
    status: "complete",
    deliverables: [
      "Project concept definition & art direction",
      "Team formation (CEO, CTO, Designer, Developer)",
      "Website launch with official links",
      "Social presence established (X + Discord)",
      "GitBook documentation",
      "Whitelist collection begins",
    ],
    completionCriteria: [
      "Website live with all informational pages",
      "Official X and Discord accounts active",
      "Whitelist form collecting submissions",
    ],
  },
  {
    id: 1,
    name: "Phase 1",
    title: "Launch Readiness",
    status: "active",
    deliverables: [
      "Final NFT artwork completion",
      "Magic Eden collection listing",
      "Community growth milestones",
      "Whitelist snapshot & eligibility confirmation",
      "Mint date announcement",
      "Supply announcement",
    ],
    completionCriteria: [
      "Collection listed on Magic Eden",
      "Mint date publicly announced",
      "Whitelist snapshot completed",
    ],
  },
  {
    id: 2,
    name: "Phase 2",
    title: "Post-Launch Utility",
    status: "upcoming",
    deliverables: [
      "Staking contract deployment on Solana",
      "VNTH token mechanics finalization",
      "Staking dashboard launch on this site",
      "Holder reward programs",
      "Community experiences & events",
      "Long-term art & identity expansion",
    ],
    completionCriteria: [
      "Staking live with verified contract address",
      "VNTH token mechanics published",
      "First holder rewards distributed",
    ],
    tba: true,
  },
];

const statusConfig = {
  complete: { icon: Check, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", label: "Complete" },
  active: { icon: Loader, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", label: "In Progress" },
  upcoming: { icon: Clock, color: "text-slate-500", bg: "bg-[#10101e] border-white/5", label: "Upcoming" },
};

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-white mb-4">Roadmap</h1>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          Clear milestones, measurable delivery. Our roadmap may evolve — all updates are published on official channels and here.
        </p>
      </div>

      <div className="space-y-8">
        {phases.map((phase, idx) => {
          const config = statusConfig[phase.status as keyof typeof statusConfig];
          return (
            <div key={phase.id} className={`border rounded-2xl p-6 sm:p-8 ${config.bg}`}>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <config.icon className={`w-4 h-4 ${config.color}`} />
                    <span className={`text-xs font-semibold uppercase tracking-wider ${config.color}`}>
                      {phase.name} — {config.label}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                </div>
                {phase.tba && <TBABadge label="Details TBA" />}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Deliverables</h3>
                  <ul className="space-y-2">
                    {phase.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${phase.status === "complete" ? "bg-green-400" : phase.status === "active" ? "bg-purple-400" : "bg-slate-600"}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Completion Criteria</h3>
                  <ul className="space-y-2">
                    {phase.completionCriteria.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${phase.status === "complete" ? "text-green-400" : "text-slate-600"}`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
        <p className="text-slate-400 text-sm text-center">
          <span className="text-blue-400 font-semibold">Transparency note:</span> This roadmap may evolve as the project develops.
          All changes will be announced on official{" "}
          <a href="https://x.com/vanth_nft" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">X</a> and{" "}
          <a href="https://discord.gg/vanth" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Discord</a> channels before being reflected here.
        </p>
      </div>
    </div>
  );
}
