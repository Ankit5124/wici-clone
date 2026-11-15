import React from 'react'
import { Turntable } from './Turntable'

export const WiCiOneSection: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto w-full relative">
      <div className="relative min-h-[520px] flex flex-col justify-between py-12">
        {/* Top Kinetic Text */}
        <h2 className="text-[clamp(60px,11vw,160px)] font-bold text-[#1d1d1f] tracking-tight leading-none select-none z-10">
          The first
        </h2>

        {/* Exploded 3D Assembly Center Piece */}
        <div className="my-2 md:my-0 flex flex-col items-center justify-center relative md:absolute md:top-1/2 md:right-[20%] md:-translate-y-1/2 z-20">
          <Turntable
            alt="WiCi One Exploded Assembly"
            className="w-[min(420px,80vw)] drop-shadow-2xl"
          />
        </div>

        {/* Bottom Kinetic Text */}
        <h2 className="text-[clamp(60px,11vw,160px)] font-bold text-[#1d1d1f] tracking-tight leading-none select-none self-end z-10 mt-6 md:mt-0">
          wireless GPU
        </h2>
      </div>

      {/* Baseline Description */}
      <div className="mt-16 pt-8 border-t border-[#d2d2d7]/60 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
        <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[#6e6e73] font-bold">
          INTRODUCING WICI ONE
        </span>
        <p className="text-[17px] text-[#3a3a3c] max-w-[780px] leading-relaxed">
          <strong className="text-[#1d1d1f]">Powerful local AI for everyday devices.</strong> WiCi One combines wireless GPU computing and SSD-backed inference into a compact, whisper-quiet system that connects to all your devices over Wi-Fi 7.
        </p>
      </div>
    </section>
  )
}
