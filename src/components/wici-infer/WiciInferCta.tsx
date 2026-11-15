import React from 'react'
import { Download, ArrowRight, ShieldCheck, Terminal, Disc } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const WiciInferCta: React.FC = () => {
  return (
    <section id="download" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto w-full scroll-mt-28">
      {/* Primary Download Banner */}
      <div className="rounded-3xl bg-[#0e0d15] text-white p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(86,85,142,0.3)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="w-20 h-20 rounded-3xl bg-white/10 p-3 border border-white/15 mb-6 shadow-2xl">
            <img
              src="/app-icon-glass-480.webp"
              alt="WiCi Infer App Icon"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#c0bfe4] mb-3">
            GET STARTED FOR FREE
          </span>

          <h2 className="text-[clamp(32px,5vw,60px)] font-bold text-white tracking-tight leading-[1.08] mb-6">
            Run large local AI models on your computer.
          </h2>

          <p className="text-sm md:text-base text-zinc-300 max-w-xl mb-10 leading-relaxed">
            Free forever. No subscription. No login required. Powered by our open-source InferSSD engine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#1d1d1f] hover:bg-[#c0bfe4] font-semibold text-sm transition shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Download for Windows (x64)</span>
            </button>
            <button className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition cursor-pointer">
              <Disc className="w-4 h-4" />
              <span>Download for macOS (Apple Silicon)</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Private Offline Execution
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Linux: InferSSD CLI via GitHub
            </span>
          </div>
        </div>
      </div>

      {/* Cross-Sell WiCi One Banner */}
      <div className="mt-8 p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/70 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex flex-col gap-1.5 max-w-xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#56558e]">
            NEED DEDICATED HARDWARE?
          </span>
          <h3 className="text-xl font-bold text-[#1d1d1f]">
            Add a wireless desktop GPU with WiCi One.
          </h3>
          <p className="text-xs text-[#6e6e73] leading-relaxed">
            WiCi One equips lightweight laptops and mobile devices with full desktop RTX 5060 Ti / RTX 5090 GPU acceleration over Wi-Fi 7 with the same InferSSD engine built in.
          </p>
        </div>

        <Link
          to="/wici-one"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1d1d1f] hover:bg-[#56558e] text-white font-semibold text-xs transition shadow-md shrink-0 cursor-pointer"
        >
          <span>Explore WiCi One</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )
}
