import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const InferBenchmarksSection: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-[#0e0d15] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(86,85,142,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#56558e] text-white text-[11px] font-bold tracking-wider uppercase">
              NEW
            </span>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[#c0bfe4] font-semibold">
              INTRODUCING WICI INFER
            </span>
          </div>
          <p className="text-sm text-zinc-400">The desktop app for local AI.</p>

          <h2 className="text-[clamp(36px,5.5vw,72px)] font-bold tracking-tight text-white leading-tight max-w-[950px]">
            Run large local AI models<br />on your computer, 17x faster†.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          {/* Left App Icon Card */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-start gap-8 shadow-2xl">
              <img
                src="/app-icon-glass-480.webp"
                alt="WiCi Infer App"
                className="w-24 h-24 rounded-2xl shadow-xl object-contain drop-shadow"
              />
              <Link
                to="/wici-infer"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#c0bfe4] transition group"
              >
                <span>Explore WiCi Infer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* Right Benchmark Hardware Comparison Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col justify-end p-6 rounded-2xl bg-[#1b1928] border border-[#56558e]/40 shadow-xl">
              <span className="text-xs text-zinc-400 mb-1">Up to</span>
              <span className="text-5xl font-black text-white tracking-tight mb-2">17.8×</span>
              <p className="text-xs text-zinc-400 leading-snug">
                faster decode than llama.cpp, on DGX Spark
              </p>
            </div>

            <div className="flex flex-col justify-end p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-white">MacBook Pro</span>
              <span className="text-[11px] text-zinc-400 mb-3">M5 Max • 48 GB</span>
              <span className="text-4xl font-bold text-white mb-2">6.2×</span>
              <p className="text-[11px] text-zinc-400 leading-snug">
                faster decode than llama.cpp
              </p>
            </div>

            <div className="flex flex-col justify-end p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-white">RTX 5060 Ti</span>
              <span className="text-[11px] text-zinc-400 mb-3">8 GB RAM + 16 GB VRAM</span>
              <span className="text-4xl font-bold text-white mb-2">3.7×</span>
              <p className="text-[11px] text-zinc-400 leading-snug">
                faster decode than llama.cpp
              </p>
            </div>

            <div className="flex flex-col justify-end p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-white">RTX 5090</span>
              <span className="text-[11px] text-zinc-400 mb-3">32 GB RAM + 32 GB VRAM</span>
              <span className="text-4xl font-bold text-white mb-2">9.8×</span>
              <p className="text-[11px] text-zinc-400 leading-snug">
                faster decode than llama.cpp
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs">
          <Link to="/wici-infer" hash="benchmarks" className="text-white hover:text-[#c0bfe4] font-medium flex items-center gap-1.5 transition">
            <span>See all benchmarks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-3 font-mono text-zinc-400 text-[11px]">
            <span>Open source</span>
            <span>•</span>
            <span>Free</span>
            <span>•</span>
            <span>No login</span>
            <span>•</span>
            <span>No subscription</span>
          </div>
        </div>
      </div>
    </section>
  )
}
