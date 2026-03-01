import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const PLACEHOLDER_ITEMS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
}));

const GRADIENTS = [
  "from-purple-800/60 to-pink-900/40",
  "from-cyan-800/50 to-purple-900/40",
  "from-pink-800/50 to-purple-900/40",
  "from-indigo-800/60 to-cyan-900/30",
  "from-violet-800/60 to-pink-900/30",
  "from-fuchsia-800/50 to-indigo-900/40",
];

export function GalleryPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 border-t border-white/5">
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-2">The Art</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">Gallery Preview</h2>
          <p className="text-slate-500 text-base">A glimpse of the VANTH universe.</p>
        </div>
        <Link
          href="/gallery"
          className="hidden sm:flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group"
        >
          Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {PLACEHOLDER_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${GRADIENTS[i]} border border-white/5 group cursor-pointer`}
          >
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
              }}
            />
            {/* Center letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/5 text-6xl font-black select-none">V</span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
              <div>
                <p className="text-white text-xs font-bold">VANTH #{item.id}</p>
                <p className="text-white/40 text-[10px]">Solana NFT</p>
              </div>
            </div>
            {/* Border beam on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <BorderBeam colorFrom="#a855f7" colorTo="#ec4899" size={100} duration={4} borderWidth={1} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link href="/gallery" className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm">
          Full Gallery <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
