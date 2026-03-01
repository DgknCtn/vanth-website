import { ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config/links";

interface ScamWarningBannerProps {
  compact?: boolean;
}

export function ScamWarningBanner({ compact = false }: ScamWarningBannerProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 text-amber-400 text-sm">
        <ShieldAlert className="w-4 h-4 shrink-0" />
        <span>{SITE_CONFIG.scamWarning.body}</span>
      </div>
    );
  }

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 md:p-6">
      <div className="flex items-start gap-3">
        <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-amber-400 mb-1">{SITE_CONFIG.scamWarning.title}</h3>
          <p className="text-amber-300/80 text-sm leading-relaxed">{SITE_CONFIG.scamWarning.body}</p>
        </div>
      </div>
    </div>
  );
}
