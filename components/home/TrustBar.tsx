import { TBABadge } from "@/components/ui/TBABadge";
import { Shield, Zap, Store, Calendar } from "lucide-react";

const items = [
  { icon: Zap, label: "Chain", value: "Solana", highlight: true, color: "text-purple-400" },
  { icon: Store, label: "Mint Venue", value: "Magic Eden Only", highlight: true, color: "text-pink-400" },
  { icon: Shield, label: "Supply", value: null, color: "text-cyan-400" },
  { icon: Calendar, label: "Mint Date", value: null, color: "text-amber-400" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-gradient-to-r from-[#0d0d1a] via-[#10101e] to-[#0d0d1a] overflow-hidden">
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className={`w-4 h-4 ${item.color} opacity-70`} />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-600 uppercase tracking-widest leading-none mb-0.5">{item.label}</span>
                {item.value ? (
                  <span className={`text-sm font-bold ${item.highlight ? item.color : "text-white"}`}>
                    {item.value}
                  </span>
                ) : (
                  <TBABadge />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
