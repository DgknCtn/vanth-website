import { ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/config/links";
import { ScamWarningBanner } from "@/components/ui/ScamWarningBanner";
import { ComingSoonBadge } from "@/components/ui/TBABadge";

export const metadata = {
  title: "Official Links — VANTH NFT",
  description: "Official VANTH community links. Always verify links through this page to stay safe.",
};

const links = [
  {
    label: "X (Twitter)",
    description: "Follow for announcements, art drops, and updates.",
    url: SOCIAL_LINKS.x.url,
    handle: SOCIAL_LINKS.x.handle,
    color: "border-sky-500/30 bg-sky-500/5",
    accent: "text-sky-400",
    available: true,
  },
  {
    label: "Discord",
    description: "Join the community. Ask questions, get whitelist help, connect with the team.",
    url: SOCIAL_LINKS.discord.url,
    handle: "Official Server",
    color: "border-indigo-500/30 bg-indigo-500/5",
    accent: "text-indigo-400",
    available: true,
  },
  {
    label: "GitBook",
    description: "Documentation: project overview, lore, roadmap, and more.",
    url: SOCIAL_LINKS.gitbook.meetVanth.url,
    handle: SOCIAL_LINKS.gitbook.meetVanth.url,
    color: "border-emerald-500/30 bg-emerald-500/5",
    accent: "text-emerald-400",
    available: true,
  },
  {
    label: "Magic Eden",
    description: "The only authorized minting and marketplace venue for VANTH NFTs.",
    url: null,
    handle: "Coming when collection is live",
    color: "border-orange-500/30 bg-orange-500/5",
    accent: "text-orange-400",
    available: false,
  },
];

export default function SocialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-white mb-4">Official Links</h1>
        <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
          This page is the single source of truth for all VANTH links. Bookmark it and always verify before clicking any link claiming to be VANTH.
        </p>
      </div>

      <div className="mb-8">
        <ScamWarningBanner />
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.label} className={`border rounded-2xl p-5 ${link.color}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className={`font-bold ${link.accent}`}>{link.label}</h2>
                  {!link.available && <ComingSoonBadge />}
                </div>
                <p className="text-slate-400 text-sm mb-2">{link.description}</p>
                <p className="text-slate-500 text-xs font-mono">{link.url || link.handle}</p>
              </div>
              {link.available && link.url ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg border ${link.color} ${link.accent} hover:opacity-80 transition-opacity text-sm font-semibold`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit
                </a>
              ) : (
                <span className="shrink-0 px-4 py-2 rounded-lg border border-white/5 text-slate-600 text-sm cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center">
        <p className="text-slate-400 text-sm">
          <span className="text-amber-400 font-semibold">Remember:</span> The VANTH team will never DM you first on any platform. If someone claims to be from VANTH and messages you, it is a scam.
        </p>
      </div>
    </div>
  );
}
