import React from 'react'
import { ArrowRight, ShieldCheck, Truck, RefreshCcw } from 'lucide-react'

export const WiciOneQuickCta: React.FC = () => {
  return (
    <section id="editions" className="py-12 px-8 border-y border-[#d2d2d7]/60 bg-[#f5f5f7]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6e6e73]">
            LIMITED PRE-ORDER ALLOCATION
          </span>
          <h3 className="text-2xl font-bold text-[#1d1d1f]">
            WiCi One: The First Wireless GPU. <span className="text-[#56558e]">From $3,499</span>
          </h3>
          <p className="text-sm text-[#6e6e73]">
            Run local AI models, 4K video edits, and 3D renders from your phone or laptop. Ships in 8 weeks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2">
            <span>Pre-order now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-6 pt-6 border-t border-[#d2d2d7]/40 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-[#6e6e73]">
        <div className="flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-[#56558e]" />
          <span>Worldwide Priority Shipping</span>
        </div>
        <div className="flex items-center gap-1.5">
          <RefreshCcw className="w-4 h-4 text-[#56558e]" />
          <span>30-Day Hassle-Free Returns</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#56558e]" />
          <span>2-Year Comprehensive Hardware Warranty</span>
        </div>
      </div>
    </section>
  )
}
