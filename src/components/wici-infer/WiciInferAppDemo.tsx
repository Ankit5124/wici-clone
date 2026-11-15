import React, { useState } from 'react'
import { Activity, HardDrive, Cpu, Terminal, Play, Pause, RefreshCw, ShieldCheck } from 'lucide-react'

export const WiciInferAppDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true)
  const [selectedTab, setSelectedTab] = useState<'status' | 'models' | 'logs'>('status')

  return (
    <section id="demo" className="py-24 px-6 md:px-8 bg-[#f5f5f7] w-full scroll-mt-28">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#56558e] mb-3">
            DESKTOP CLIENT PREVIEW
          </span>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.08]">
            Your AI. All your favorite tools.
          </h2>
          <p className="mt-4 text-[clamp(16px,2vw,20px)] text-[#6e6e73] font-normal leading-relaxed">
            Experience real-time local telemetry, instant model swapping, and automatic API endpoint routing in a native desktop window.
          </p>
        </div>

        {/* Desktop Window Container */}
        <div className="w-full max-w-5xl rounded-3xl bg-[#13121d] text-white border border-[#2a2938] shadow-2xl overflow-hidden flex flex-col">
          {/* Window Title Bar */}
          <div className="px-6 py-4 bg-[#1a1926] border-b border-[#2a2938] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-4 text-xs font-mono text-zinc-400">WiCi Infer Desktop v2.4.1</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                InferSSD Engine Active
              </span>
            </div>
          </div>

          {/* Window Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            {/* Left Sidebar */}
            <div className="md:col-span-3 bg-[#161522] border-r border-[#2a2938] p-5 flex flex-col justify-between">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-3 mb-2">
                  Navigation
                </span>
                <button
                  onClick={() => setSelectedTab('status')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedTab === 'status'
                      ? 'bg-[#56558e] text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  System Telemetry
                </button>
                <button
                  onClick={() => setSelectedTab('models')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedTab === 'models'
                      ? 'bg-[#56558e] text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Model Library
                </button>
                <button
                  onClick={() => setSelectedTab('logs')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedTab === 'logs'
                      ? 'bg-[#56558e] text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Engine Stream Logs
                </button>
              </div>

              {/* Bottom Storage Meter */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Fast NVMe SSD</span>
                  <span className="text-white font-mono">1.60 TB free</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#56558e] h-full w-[60%]" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">473 GB used for DeepSeek V4.1</span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-9 p-8 flex flex-col justify-between">
              {/* Top Banner / Current Model */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 p-2.5 border border-white/10 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-[#c0bfe4]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        DeepSeek V4.1 Flash
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          763B · Q8_0
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Native MXFP4 experts · 10% weights resident in RAM · 90% streamed on-demand
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsRunning(!isRunning)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                        isRunning
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                      }`}
                    >
                      {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isRunning ? 'Pause Engine' : 'Resume Engine'}</span>
                    </button>
                  </div>
                </div>

                {/* 3 Telemetry Gauges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {/* Gauge 1: Hardware Compute */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#56558e]" />
                        Compute Cores
                      </span>
                      <span className="text-white font-mono font-bold">42%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#56558e] h-full w-[42%]" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">Apple M5 Max / CUDA Cores</span>
                  </div>

                  {/* Gauge 2: Memory Footprint */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        Unified Memory
                      </span>
                      <span className="text-white font-mono font-bold">31.0 / 48 GB</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[64%]" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">182 GB/s memory bandwidth</span>
                  </div>

                  {/* Gauge 3: NVMe Streaming */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-sky-400" />
                        SSD Stream Rate
                      </span>
                      <span className="text-white font-mono font-bold">1.6 GB/s</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full w-[31%]" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">PCIe 4.0 (up to 5.1 GB/s peak)</span>
                  </div>
                </div>

                {/* API Endpoint & Integration Notice */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-zinc-300">
                      Local API Ready: <span className="text-white font-semibold">http://localhost:11434/v1</span>
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Compatible with OpenAI SDK, LangChain & LlamaIndex
                  </span>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No internet connection required for inference</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
                  <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Auto-reload on file change</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
