import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export const ResearchPerspectivesSection: React.FC = () => {
  return (
    <section id="perspectives" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto w-full border-b border-[#e5e5ea]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e] block mb-2">
            RESEARCH PERSPECTIVES
          </span>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1d1d1f] tracking-tight">
            Perspectives
          </h2>
          <p className="mt-2 text-[16px] text-[#6e6e73] max-w-xl">
            How we think about personal AI and the way we build it.
          </p>
        </div>
      </div>

      {/* Featured Perspective Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-8 p-8 md:p-12 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex flex-col justify-between group hover:border-[#56558e]/40 transition duration-300">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#86868b] uppercase tracking-wider mb-4">
              <span>Personal AI</span>
              <span>·</span>
              <span>August 2026</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] group-hover:text-[#56558e] transition">
              The General and the Particular
            </h3>
            <p className="mt-4 text-base md:text-lg text-[#6e6e73] leading-relaxed max-w-2xl">
              The cloud is right for general foundation models, but interaction, memory, and adaptation belong close to the user.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#d2d2d7]/50 flex items-center justify-between text-sm font-semibold text-[#1d1d1f] group-hover:text-[#56558e] transition">
            <span>Read perspective</span>
            <ArrowUpRight className="w-4 h-4 transition transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Side Quote Callout */}
        <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-[#18181b] to-[#27272a] text-white flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block mb-4">
              CORE PHILOSOPHY
            </span>
            <blockquote className="text-lg md:text-xl font-normal leading-relaxed text-white/90">
              "Personal AI is an architectural stance: private context, instantaneous tactile response, and local ownership over compute."
            </blockquote>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
            WiCi Systems Manifesto
          </div>
        </div>
      </div>
    </section>
  )
}
