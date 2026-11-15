import { Link } from '@tanstack/react-router'
import React from 'react'
import { Glasses, ArrowRight } from 'lucide-react'

export const VrHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-8 max-w-[1400px] mx-auto w-full">
      {/* Top Category Badge */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/80 text-[#1d1d1f] text-xs font-semibold shadow-sm">
          <Glasses className="w-3.5 h-3.5 text-[#56558e]" />
          <span>SOLUTIONS · SPATIAL & IMMERSIVE COMPUTE</span>
        </div>
      </div>

      {/* Main Title & Lede */}
      <div className="flex flex-col items-center text-center max-w-[980px] mx-auto mb-12">
        <h1 className="text-[clamp(44px,6.8vw,92px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.04]">
          Heavy spatial compute,<br />off the headset.
        </h1>
        <p className="mt-6 text-[clamp(18px,2.2vw,22px)] text-[#3a3a3c] font-normal leading-relaxed max-w-[720px]">
          Stream photorealistic Unreal Engine 5 worlds and real-time generative Gaussian Splats to Apple Vision Pro and Meta Quest wirelessly over Wi-Fi 7 with sub-3ms motion-to-photon latency.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#architecture"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#1d1d1f] hover:bg-[#56558e] text-white font-semibold text-sm transition shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore VR Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/wici-one" hash="editions"
            className="px-8 py-4 rounded-full bg-[#f5f5f7] hover:bg-[#ebebed] text-[#1d1d1f] font-semibold text-sm border border-[#d2d2d7]/80 transition cursor-pointer"
          >
            Get WiCi One for Spatial
          </Link>
        </div>
      </div>

      {/* Hero Interactive Spatial Visual Card */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0c0b14] text-white border border-white/10 p-8 md:p-14 shadow-2xl flex flex-col items-center justify-center">
        {/* Ambient Spatial Hologram Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(86,85,142,0.35)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl text-center py-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#56558e] to-[#c0bfe4] p-[1.5px] shadow-2xl mb-6">
            <div className="w-full h-full bg-[#141224] rounded-[22px] flex items-center justify-center text-white">
              <Glasses className="w-12 h-12 text-[#c0bfe4]" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Light headsets. Infinite GPU budget.
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
            Headsets no longer need thermal throttle points or heavy battery backpacks. WiCi One executes the heavy rasterization, foveated ray tracing, and spatial audio pipelines nearby, streaming uncompressed frames straight to your eyes.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 w-full text-center font-mono">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white block">2.4 ms</span>
              <span className="text-[11px] text-zinc-400">Wi-Fi 7 AirLink</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white block">90 fps</span>
              <span className="text-[11px] text-zinc-400">Twin 4K Eyes</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-2xl font-bold text-white block">0 g</span>
              <span className="text-[11px] text-zinc-400">Added Weight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
