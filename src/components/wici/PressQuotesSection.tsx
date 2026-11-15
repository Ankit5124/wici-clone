import React from 'react'

const pressQuotes = [
  {
    quote:
      'A world where local compute isn’t subordinated to the whims of the tech oligarchs and their pet AI.',
    logo: '/gizmodo-logo.svg',
    name: 'Gizmodo',
  },
  {
    quote:
      'A dedicated AI inferencing device in your home that a variety of devices can connect to wirelessly.',
    logo: '/pcmag-logo.svg',
    name: 'PCMag',
  },
  {
    quote:
      'Offers the power of a high-end graphics card over Wi-Fi 7 to any compatible laptop or headset.',
    logo: '/engadget-logo.svg',
    name: 'Engadget',
  },
  {
    quote:
      'WiCi pushes wireless external graphics beyond conventional eGPU and Thunderbolt designs.',
    logo: '/techradar-logo.svg',
    name: 'TechRadar',
  },
]

export const PressQuotesSection: React.FC = () => {
  return (
    <section className="py-24 px-8 border-t border-[#d2d2d7]/50 max-w-[1400px] mx-auto w-full">
      <div className="text-center mb-14">
        <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[#6e6e73] font-bold">
          WHAT THE INDUSTRY IS SAYING
        </span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1d1d1f] mt-2">
          Featured in leading tech publications.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pressQuotes.map((item) => (
          <div
            key={item.name}
            className="p-8 rounded-2xl bg-[#ffffff] border border-[#d2d2d7]/70 hover:border-[#56558e]/50 hover:shadow-lg transition flex flex-col justify-between gap-6"
          >
            <p className="text-[18px] text-[#3a3a3c] leading-relaxed italic">
              “{item.quote}”
            </p>
            <div className="flex items-center h-6">
              <img
                src={item.logo}
                alt={item.name}
                className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
