import React from 'react'
import { ArrowRight } from 'lucide-react'

export const WiciOneHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-8 max-w-[1400px] mx-auto w-full">
      {/* Top Event Announcement Pill */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/80 text-[#1d1d1f] text-xs font-medium shadow-sm hover:border-[#56558e]/50 transition cursor-pointer">
          <span className="font-semibold">First reveal of WiCi One</span>
          <span className="text-[#6e6e73]">•</span>
          <span className="text-[#6e6e73]">New York, Oct 2026</span>
          <span className="text-[#6e6e73]">•</span>
          <span className="text-[#56558e] font-semibold flex items-center gap-1">
            Watch the recap <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Hero Headline & Lede Copy */}
      <div className="flex flex-col items-center text-center max-w-[980px] mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          WICI ONE
        </span>
        <h1 className="text-[clamp(44px,6.8vw,92px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.04]">
          Untethered<br />GPU Power
        </h1>
        <p className="mt-6 text-[clamp(18px,2.2vw,22px)] text-[#3a3a3c] font-normal leading-relaxed max-w-[680px]">
          WiCi One, the first wireless GPU, equips your phones, laptops, and future AI devices with the best GPU over Wi-Fi.
        </p>

        {/* Action Button: Get Updates / Reserve */}
        <div className="mt-8 flex items-center gap-4">
          <button className="px-7 py-3.5 rounded-full bg-[#1d1d1f] hover:bg-[#56558e] text-white font-semibold text-sm transition shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
            Get WiCi One updates
          </button>
          <a
            href="#editions"
            className="px-7 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#ebebed] text-[#1d1d1f] font-semibold text-sm border border-[#d2d2d7]/80 transition cursor-pointer"
          >
            Explore editions · From $3,499
          </a>
        </div>
      </div>

      {/* Hero Enclosure Visual on Wood Desk (Using original hero-device-desk-1600 or wici-one-overview-hero) */}
      <div className="relative rounded-3xl overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7]/80 shadow-2xl flex items-center justify-center">
        <img
          src="/wici-one-overview-hero.webp"
          alt="WiCi One on Studio Desk"
          className="w-full h-auto object-cover max-h-[640px] hover:scale-[1.01] transition duration-700"
          onError={(e) => {
            e.currentTarget.src = '/hero-device-desk-1600.webp'
          }}
        />

        {/* Floating Badges */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#d2d2d7] text-xs font-semibold shadow-sm">
            <img src="/ces-innovation-honoree-2027-160.webp" alt="CES" className="h-4 w-auto object-contain" />
            <span>CES Innovation Honoree</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#d2d2d7] text-xs font-semibold shadow-sm">
            <img src="/nvidia-inception.webp" alt="NVIDIA" className="h-4 w-auto object-contain" />
            <span>NVIDIA Inception</span>
          </div>
        </div>
      </div>
    </section>
  )
}
