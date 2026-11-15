import React, { useState } from 'react'
import { Cpu, Layers, Sparkles, Filter, ExternalLink } from 'lucide-react'

interface BenchmarkRow {
  model: string
  params: string
  quant: string
  dgxSpark: string
  macbookM5: string
  rtx5090: string
  rtx5060ti: string
  speedup: string
}

export const WiciInferBenchmarks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'llm' | 'multimodal' | 'coding'>('llm')

  const benchmarksData: Record<'llm' | 'multimodal' | 'coding', BenchmarkRow[]> = {
    llm: [
      {
        model: 'DeepSeek V3 / R1',
        params: '671B',
        quant: 'FP8 / InferSSD',
        dgxSpark: '18.4 tok/s',
        macbookM5: '8.2 tok/s',
        rtx5090: '14.6 tok/s',
        rtx5060ti: '4.8 tok/s',
        speedup: '12.4×',
      },
      {
        model: 'Llama 3.3 Instruct',
        params: '70B',
        quant: 'INT4 AWQ',
        dgxSpark: '88.5 tok/s',
        macbookM5: '42.1 tok/s',
        rtx5090: '76.2 tok/s',
        rtx5060ti: '28.4 tok/s',
        speedup: '6.8×',
      },
      {
        model: 'Gemma 4 Standard',
        params: '26B',
        quant: 'FP16 Native',
        dgxSpark: '520+ tok/s',
        macbookM5: '160 tok/s',
        rtx5090: '480+ tok/s',
        rtx5060ti: '140 tok/s',
        speedup: '17.8×',
      },
      {
        model: 'Kimi K3 Frontier',
        params: '2.8T MoE',
        quant: 'TurboStream',
        dgxSpark: '5.2 tok/s',
        macbookM5: '1.8 tok/s',
        rtx5090: '4.4 tok/s',
        rtx5060ti: '1.2 tok/s',
        speedup: '9.2×',
      },
    ],
    multimodal: [
      {
        model: 'FLUX.2 Klein Image Gen',
        params: '12B',
        quant: 'BF16',
        dgxSpark: '0.42 s/img',
        macbookM5: '1.8 s/img',
        rtx5090: '0.55 s/img',
        rtx5060ti: '2.1 s/img',
        speedup: '8.5×',
      },
      {
        model: 'Wan 2.2 4K Video',
        params: '14B',
        quant: 'FP8 Turbo',
        dgxSpark: '14.2 s/clip',
        macbookM5: '58.0 s/clip',
        rtx5090: '19.5 s/clip',
        rtx5060ti: '64.0 s/clip',
        speedup: '4.2×',
      },
      {
        model: 'MiniMax H3 Audio-Voice',
        params: '8B',
        quant: 'FP16',
        dgxSpark: '42 ms latency',
        macbookM5: '120 ms',
        rtx5090: '54 ms',
        rtx5060ti: '135 ms',
        speedup: '5.6×',
      },
    ],
    coding: [
      {
        model: 'Qwen 2.5 Coder',
        params: '32B',
        quant: 'INT8',
        dgxSpark: '145 tok/s',
        macbookM5: '62 tok/s',
        rtx5090: '128 tok/s',
        rtx5060ti: '48 tok/s',
        speedup: '7.9×',
      },
      {
        model: 'DeepSeek Coder V2',
        params: '236B MoE',
        quant: 'FP8 InferSSD',
        dgxSpark: '38 tok/s',
        macbookM5: '14 tok/s',
        rtx5090: '31 tok/s',
        rtx5060ti: '9.5 tok/s',
        speedup: '11.5×',
      },
    ],
  }

  return (
    <section id="benchmarks" className="py-24 px-8 max-w-[1400px] mx-auto w-full">
      {/* Benchmark Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#56558e]/10 border border-[#56558e]/30 text-[#56558e] text-xs font-mono font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INFERSSD ARCHITECTURE BENCHMARKS</span>
        </div>
        <h2 className="text-[clamp(36px,5.5vw,68px)] font-bold text-[#1d1d1f] tracking-tight">
          Measured on Apple and NVIDIA systems.
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#6e6e73] max-w-[720px]">
          Tested against vanilla llama.cpp and vLLM with batch size 1, sequence length 2048, and real-time streaming token decoding.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory('llm')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeCategory === 'llm'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Frontier LLMs</span>
        </button>

        <button
          onClick={() => setActiveCategory('multimodal')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeCategory === 'multimodal'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Vision & Audio Generation</span>
        </button>

        <button
          onClick={() => setActiveCategory('coding')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
            activeCategory === 'coding'
              ? 'bg-[#56558e] text-white shadow-md'
              : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span>Code Intelligence</span>
        </button>
      </div>

      {/* Detailed Benchmark Table */}
      <div className="overflow-x-auto rounded-3xl border border-[#d2d2d7]/80 shadow-2xl bg-white mb-10">
        <table className="w-full text-left text-sm border-collapse min-w-[850px]">
          <thead>
            <tr className="border-b border-[#d2d2d7]/80 bg-[#f5f5f7]">
              <th className="p-5 font-semibold text-[#1d1d1f]">Model & Architecture</th>
              <th className="p-5 font-semibold text-[#6e6e73]">Parameters</th>
              <th className="p-5 font-semibold text-[#6e6e73]">Quantization</th>
              <th className="p-5 font-bold text-[#56558e] bg-[#e8e8f2]/30">DGX Spark</th>
              <th className="p-5 font-semibold text-[#1d1d1f]">MacBook Pro M5</th>
              <th className="p-5 font-semibold text-[#1d1d1f]">RTX 5090</th>
              <th className="p-5 font-semibold text-[#1d1d1f]">RTX 5060 Ti</th>
              <th className="p-5 font-bold text-emerald-600 bg-emerald-500/10">vs llama.cpp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d2d2d7]/50 font-mono text-[13px]">
            {benchmarksData[activeCategory].map((row) => (
              <tr key={row.model} className="hover:bg-[#fbfbfd] transition">
                <td className="p-5 font-sans font-bold text-[#1d1d1f]">{row.model}</td>
                <td className="p-5 text-[#6e6e73]">{row.params}</td>
                <td className="p-5 text-[#6e6e73]">{row.quant}</td>
                <td className="p-5 font-bold text-[#56558e] bg-[#e8e8f2]/15">{row.dgxSpark}</td>
                <td className="p-5 text-[#1d1d1f] font-semibold">{row.macbookM5}</td>
                <td className="p-5 text-[#1d1d1f] font-semibold">{row.rtx5090}</td>
                <td className="p-5 text-[#1d1d1f] font-semibold">{row.rtx5060ti}</td>
                <td className="p-5 font-bold text-emerald-600 bg-emerald-500/5">{row.speedup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Methodology Explainer Card */}
      <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 max-w-2xl">
          <h4 className="font-bold text-[#1d1d1f] text-base">Benchmark Methodology & Reproducibility</h4>
          <p className="text-xs text-[#6e6e73] leading-relaxed">
            All throughput figures are collected using the open-source WiCi Infer test suite. Tests measure time-to-first-token (TTFT) and sustained inter-token latency across 10 consecutive runs with temperature 0.0.
          </p>
        </div>
        <a
          href="https://github.com/wici-ai/inferssd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] hover:bg-[#56558e] text-white font-semibold text-xs transition shadow-sm whitespace-nowrap"
        >
          <span>Download raw test artifacts</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  )
}
