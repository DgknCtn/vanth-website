import { Palette, Map, Coins } from "lucide-react";
import { ComingSoonBadge } from "@/components/ui/TBABadge";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

const cards = [
  {
    icon: Palette,
    title: "Art-First",
    description:
      "Striking anime + cyberpunk aesthetics crafted with a unique vision. Every piece is designed to stand out in any collection.",
    gradientColor: "#3b1254",
    beamFrom: "#ec4899",
    beamTo: "#a855f7",
    accent: "text-pink-400",
  },
  {
    icon: Map,
    title: "Transparent Roadmap",
    description:
      "Clear milestones, measurable delivery. Our roadmap evolves openly — every update is published on official channels.",
    gradientColor: "#0c2a3b",
    beamFrom: "#06b6d4",
    beamTo: "#a855f7",
    accent: "text-cyan-400",
  },
  {
    icon: Coins,
    title: "Future Staking → VNTH",
    description:
      "Holders will be able to stake VANTH NFTs to earn VNTH, a future utility token. Details and mechanics are coming soon.",
    gradientColor: "#1e0b3b",
    beamFrom: "#a855f7",
    beamTo: "#6d28d9",
    accent: "text-purple-400",
    badge: <ComingSoonBadge />,
  },
];

export function WhatIsVanth() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">The Collection</p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">What is VANTH?</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          A collection at the intersection of anime art, cyberpunk culture, and Solana&apos;s speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <MagicCard
            key={card.title}
            gradientColor={card.gradientColor}
            gradientOpacity={1}
            className="relative rounded-2xl border-white/10 bg-[#10101e] overflow-hidden"
          >
            <div className="p-7">
              <card.icon className={`w-9 h-9 ${card.accent} mb-5`} />
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                {card.badge}
              </div>
              <p className="text-slate-400 leading-relaxed">{card.description}</p>
            </div>
            <BorderBeam
              colorFrom={card.beamFrom}
              colorTo={card.beamTo}
              size={150}
              duration={12}
              borderWidth={1}
            />
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
