import React from 'react'

export const LocalAiBanner: React.FC = () => {
  return (
    <section className="relative grid place-items-center min-h-[360px] md:min-h-[460px] h-[34vw] max-h-[640px] overflow-hidden bg-[#1d1d1f] text-white">
      {/* Background Banner Image with Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/laptop-armchair-banner-1600.webp"
          alt="A developer working on a thin laptop in an armchair against a wood-panelled wall"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
      </div>

      {/* Banner Text Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 px-6 max-w-4xl mx-auto">
        <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.2em] uppercase text-white/90 drop-shadow">
          Solutions · Local AI
        </span>
        <h1 className="text-[clamp(32px,4.5vw,76px)] font-medium leading-[1.02] tracking-[-0.03em] text-white drop-shadow-md max-w-3xl">
          Trillion-parameter models, on hardware you own.
        </h1>
      </div>
    </section>
  )
}
