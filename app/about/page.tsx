import { Shield, Eye, Target } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/config/links";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About — VANTH NFT Collection",
  description: "Meet the VANTH team. Transparent, safety-first, long-term focused.",
};

const TEAM = [
  { role: "CEO", description: "Vision, strategy, and community leadership. Oversees the project direction and partnerships." },
  { role: "CTO", description: "Technical architecture, smart contracts, staking system, and website infrastructure." },
  { role: "Designer", description: "Art direction, NFT design, and the unique anime + cyberpunk visual identity of VANTH." },
  { role: "Developer", description: "Frontend, backend, and Web3 integrations. Builds the tools holders use." },
];

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    description: "We publish our roadmap, update it openly, and communicate changes before they happen — not after.",
  },
  {
    icon: Shield,
    title: "Safety-First Communication",
    description: "We will never DM you first. Every official link is verified on this page. Anti-scam posture is core to our identity.",
  },
  {
    icon: Target,
    title: "Long-Term Focus",
    description: "VANTH is not a quick flip. We are building art, community, and utility that holders value for the long haul.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-white mb-4">About VANTH</h1>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          VANTH is built by a small, focused team with a shared belief: that great NFT projects earn trust through transparency, not hype.
        </p>
      </div>

      {/* Team */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEAM.map((member) => (
            <div key={member.role} className="bg-[#10101e] border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-colors">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3">
                <span className="text-purple-400 text-xs font-bold tracking-wider">{member.role}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
        <div className="space-y-4">
          {VALUES.map((val) => (
            <div key={val.title} className="flex items-start gap-4 bg-[#10101e] border border-white/5 rounded-2xl p-6">
              <val.icon className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official links block */}
      <section className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Verify Official Links</h2>
        <p className="text-slate-400 text-sm mb-6">
          Always use links from this site. Never trust links from DMs or unofficial sources.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/social" variant="secondary" size="sm">
            View Official Links
          </Button>
          <Button href="/whitelist" variant="primary" size="sm">
            Join Whitelist
          </Button>
        </div>
      </section>
    </div>
  );
}
