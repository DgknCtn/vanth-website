import Link from "next/link";
import { ExternalLink, Zap, ShieldAlert } from "lucide-react";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/config/links";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5 mt-auto">
      {/* Glow top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Scam warning strip */}
      <div className="bg-amber-500/[0.06] border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-amber-400/80 text-sm">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold text-amber-400">{SITE_CONFIG.scamWarning.title}:</span>
            <span className="text-amber-300/60 text-xs">{SITE_CONFIG.scamWarning.body}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-lg font-black tracking-[0.2em] text-white">VANTH</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <Link href="/whitelist">
              <ShimmerButton
                shimmerColor="#a855f7"
                shimmerDuration="3s"
                background="linear-gradient(135deg, #7c3aed, #6d28d9)"
                borderRadius="10px"
                className="text-xs font-bold text-white px-4 py-2"
              >
                Join Whitelist
              </ShimmerButton>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                ["Gallery", "/gallery"],
                ["Roadmap", "/roadmap"],
                ["Story", "/story"],
                ["Vision", "/vision"],
                ["About", "/about"],
                ["FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 hover:text-purple-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Community</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={SOCIAL_LINKS.x.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                  <ExternalLink className="w-3 h-3" /> X (Twitter)
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.discord.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                  <ExternalLink className="w-3 h-3" /> Discord
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.gitbook.meetVanth.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors">
                  <ExternalLink className="w-3 h-3" /> GitBook
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-slate-700 text-sm cursor-not-allowed">
                  <ExternalLink className="w-3 h-3" /> Magic Eden (Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Safety */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Safety</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/social" className="text-slate-500 hover:text-purple-400 text-sm transition-colors">
                  Official Links
                </Link>
              </li>
              <li>
                <Link href="/whitelist#privacy" className="text-slate-500 hover:text-purple-400 text-sm transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/faq#scam" className="text-slate-500 hover:text-purple-400 text-sm transition-colors">
                  Anti-Scam Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">
            © 2026 VANTH · All rights reserved · Built on Solana
          </p>
          <p className="text-slate-800 text-xs">
            Minting only on{" "}
            <span className="text-purple-600">Magic Eden</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
