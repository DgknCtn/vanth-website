import { Shield } from "lucide-react";
import { AccessFlow } from "@/components/access/AccessFlow";
import { ScamWarningBanner } from "@/components/ui/ScamWarningBanner";

export const metadata = {
  title: "Request Access — VANTH",
  description: "VANTH access is invite-only. Apply with your Access Code.",
};

export default function WhitelistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
            Proof of Reputation
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-wide text-white mb-4">
            Request Access
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-md mx-auto">
            VANTH access is invite-only. An Access Code lets you apply, but acceptance is not guaranteed.
          </p>
        </div>

        {/* Scam warning */}
        <ScamWarningBanner compact />

        {/* Interactive flow (client component) */}
        <AccessFlow />

        {/* Privacy notice */}
        <div className="bg-[#10101e] border border-white/5 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Privacy Notice
              </h3>
              <ul className="space-y-1 text-xs text-slate-500 leading-relaxed">
                <li>We store: wallet address, X username, Discord username, and application essays.</li>
                <li>Purpose: Whitelist processing and eligibility review.</li>
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
