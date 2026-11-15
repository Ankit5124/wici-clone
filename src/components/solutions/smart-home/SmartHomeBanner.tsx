import React from 'react'
import { Sparkles, Home, Shield, Lock } from 'lucide-react'

export const SmartHomeBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#09090b] text-white">
      {/* Banner Media Hero */}
      <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden">
        <img
          src="/images/solutions/wall-panel-touch-banner-1600.webp"
          alt="A hand touching a glowing wall control panel in a warmly lit room."
          className="w-full h-full object-cover object-center filter brightness-[0.75]"
          onError={(e) => {
            // Elegant fallback gradient if offline
            (e.target as HTMLElement).style.display = 'none'
          }}
        />

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-transparent" />

        {/* Banner Content (Overlayed) */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-[1240px] mx-auto px-6 lg:px-8 pb-14 sm:pb-20 z-10">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono tracking-wider text-[#93c5fd] uppercase mb-4">
              <Home className="w-3.5 h-3.5 text-[#60a5fa]" />
              Solutions · Smart Home
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6">
              Your home sees. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-blue-200">
                Now it can understand.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-[680px] font-normal">
              Cameras and sensors already observe what happens at home. WiCi turns their feeds into private local
              context, so you can ask “What is the cat doing now?” or “What was the cat doing yesterday?” without
              continuously sending home video to the cloud.
            </p>
          </div>
        </div>
      </div>

      {/* Trust & Guarantee Ribbon */}
      <div className="border-y border-white/10 bg-[#111116] py-4">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            Zero video leaves your household network
          </span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#60a5fa]" />
            Local Multimodal Vision & Vector Index
          </span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Compatible with RTSP, Home Assistant & Matter
          </span>
        </div>
      </div>
    </section>
  )
}
