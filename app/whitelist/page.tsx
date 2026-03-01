import { WhitelistForm } from "@/components/whitelist/WhitelistForm";
import { ScamWarningBanner } from "@/components/ui/ScamWarningBanner";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { Shield, Wallet, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Join Whitelist — VANTH NFT Collection",
  description: "Join the VANTH whitelist. Submit your Solana wallet, X, and Discord to secure your spot.",
};

const REQUIREMENTS = [
  { icon: Wallet, label: "Solana wallet address" },
  { icon: MessageSquare, label: "X (Twitter) username" },
  { icon: MessageSquare, label: "Discord username" },
];

export default function WhitelistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Secure Your Spot</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-white mb-4">Join Whitelist</h1>
          <p className="text-slate-400 leading-relaxed">
            Submit your information below — no wallet connection required, just your address.
          </p>
        </div>

        {/* What you need */}
        <div className="bg-[#10101e] border border-white/5 rounded-2xl p-5 mb-6">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What you&apos;ll need</h2>
          <div className="flex flex-wrap gap-3">
            {REQUIREMENTS.map((req) => (
              <div key={req.label} className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-1.5">
                <req.icon className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-400 text-xs">{req.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scam warning */}
        <div className="mb-6">
          <ScamWarningBanner compact />
        </div>

        {/* Form card with BorderBeam */}
        <div className="relative bg-[#10101e] border border-white/5 rounded-2xl p-6 sm:p-8 mb-8 overflow-hidden">
          <WhitelistForm />
          <BorderBeam colorFrom="#a855f7" colorTo="#ec4899" size={200} duration={10} borderWidth={1.5} />
        </div>

        {/* Privacy notice */}
        <div id="privacy" className="bg-[#10101e] border border-white/5 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Privacy Notice</h3>
              <ul className="space-y-1 text-xs text-slate-500 leading-relaxed">
                <li>We store: Solana wallet address, X username, Discord username only.</li>
                <li>Purpose: Whitelist processing and mint eligibility checks.</li>
                <li>No email is collected. Data is not sold or shared with third parties.</li>
                <li>Stored securely with no public read access.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
