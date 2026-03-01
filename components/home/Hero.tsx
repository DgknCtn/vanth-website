"use client";

import Link from "next/link";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#080810]">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={80}
        color="#a855f7"
        size={0.5}
        staticity={30}
      />

      {/* Radial glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-600/[0.06] rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pink-600/[0.06] rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 flex flex-col items-center">

        {/* Logo */}
        <div className="mb-10 select-none">
          <Image
            src="/images/gallery/logo.png"
            alt="VANTH"
            width={480}
            height={160}
            className="w-auto h-auto max-w-[300px] sm:max-w-[420px] mx-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Vanth is a web3 focused project inspired by the best with an innovative and dynamic style.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — ShimmerButton */}
          <Link href="/whitelist">
            <ShimmerButton
              shimmerColor="#a855f7"
              shimmerDuration="2.5s"
              background="linear-gradient(135deg, #7c3aed, #6d28d9)"
              borderRadius="14px"
              className="px-8 py-4 text-base font-bold text-white gap-2"
            >
              Join Whitelist
              <ArrowRight className="w-4 h-4" />
            </ShimmerButton>
          </Link>

          {/* Secondary */}
          <Link
            href="/gallery"
            className="group flex items-center gap-2 px-8 py-4 rounded-[14px] border border-cyan-500/30 text-cyan-400 font-bold text-base hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all duration-300"
          >
            View Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Tertiary */}
          <span className="flex items-center gap-2 px-8 py-4 rounded-[14px] border border-white/5 text-slate-600 text-base cursor-not-allowed select-none">
            Magic Eden
            <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full px-2 py-0.5">Soon</span>
          </span>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" />
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
