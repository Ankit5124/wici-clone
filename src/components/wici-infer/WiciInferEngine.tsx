import React from 'react'
import { HardDrive, Cpu, Zap, ArrowRight, Layers, GitBranch, Terminal } from 'lucide-react'

export const WiciInferEngine: React.FC = () => {
  return (
    <section id="engine" className="py-24 px-6 md:px-8 bg-[#0b0a12] text-white w-full scroll-mt-28 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,85,142,0.2)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col max-w-[880px] mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-[#56558e] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
              OPEN SOURCE ENGINE
            </span>
            <span className="text-xs font-mono text-zinc-400">wici-ai/inferssd</span>
          </div>

          <h2 className="text-[clamp(36px,5vw,68px)] font-bold tracking-tight text-white leading-[1.06]">
            800 billion parameters.<br />Running locally.
          </h2>

          <p className="mt-6 text-[clamp(16px,2vw,22px)] text-zinc-300 font-normal leading-relaxed">
            Run frontier AI locally without destructive quantization or needing hundreds of gigabytes of expensive unified memory. InferSSD streams activated experts directly from consumer NVMe SSDs in real time.
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col justify-between gap-6 hover:border-[#56558e]/50 transition">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#56558e]/20 border border-[#56558e]/40 flex items-center justify-center text-[#c0bfe4]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Expert Indexing</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Pre-indexes Mixture-of-Experts weights on your high-speed SSD. Stores tens of billions of inactive parameters offline until exact activation tokens demand them.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-[#56558e]" />
              <span>NVMe direct zero-copy I/O</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col justify-between gap-6 hover:border-[#56558e]/50 transition">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#56558e]/20 border border-[#56558e]/40 flex items-center justify-center text-[#c0bfe4]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Router-Driven Streaming</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Anticipates expert activation paths during token generation. Streams cache misses into unified RAM at up to 7.0 GB/s with near-zero pipeline stalls.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#56558e]" />
              <span>Predictive tensor pre-fetching</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col justify-between gap-6 hover:border-[#56558e]/50 transition">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#56558e]/20 border border-[#56558e]/40 flex items-center justify-center text-[#c0bfe4]">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Adaptive Execution</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Dynamically balances compute between CPU matrix acceleration and GPU shader cores based on weight residency and thermal headrooms.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#56558e]" />
              <span>Metal & CUDA asynchronous streams</span>
            </div>
          </div>
        </div>

        {/* Technical Callout Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#c0bfe4]">RESEARCH PAPER & REPO</span>
            <h4 className="text-lg font-bold text-white">
              Running 800B-Parameter LLMs on Consumer Hardware with InferSSD
            </h4>
            <p className="text-xs text-zinc-400">
              Read our technical paper detailing benchmark methodology, IOPS saturation, and memory-bandwidth offloading.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/wici-ai/inferssd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#1d1d1f] hover:bg-[#56558e] hover:text-white font-semibold text-xs transition shadow-md cursor-pointer"
            >
              <span>GitHub Repository</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
