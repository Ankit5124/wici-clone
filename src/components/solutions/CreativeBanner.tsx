import React from 'react'

export const CreativeBanner: React.FC = () => {
  return (
    <section className="relative grid place-items-center min-h-[360px] md:min-h-[460px] h-[33.333vw] max-h-[720px] overflow-hidden bg-[#1d1d1f] text-white">
      {/* Background Banner Image with Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/grading-suite-banner-1600.webp"
          alt="Two editors at a shared desk reviewing a colour grade on a large monitor."
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
      </div>

      {/* Banner Text Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2.5 px-6 max-w-4xl mx-auto">
        <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.15em] uppercase text-white/90 drop-shadow">
          SOLUTIONS · CREATIVE PRODUCTION
        </span>
        <h1 className="text-[clamp(34px,4.04vw,87px)] font-medium leading-[0.98] tracking-[-0.026em] text-white drop-shadow-md max-w-3xl">
          One GPU for the whole studio.
        </h1>
      </div>
    </section>
  )
}
