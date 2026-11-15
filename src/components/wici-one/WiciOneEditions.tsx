import React, { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

export const WiciOneEditions: React.FC = () => {
  const [selectedEdition, setSelectedEdition] = useState<'5060' | '5090'>('5060')

  return (
    <section className="py-24 px-8 bg-[#f5f5f7] border-t border-[#d2d2d7]/60">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          CHOOSE YOUR CONFIGURATION
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight mb-16 text-center">
          Two tiers of untethered power.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* 5060 Ti Edition */}
          <div
            onClick={() => setSelectedEdition('5060')}
            className={`p-10 rounded-3xl bg-white border-2 cursor-pointer transition-all flex flex-col justify-between gap-8 shadow-lg ${
              selectedEdition === '5060'
                ? 'border-[#56558e] shadow-2xl ring-4 ring-[#56558e]/10 scale-[1.02]'
                : 'border-transparent hover:border-[#d2d2d7]'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e]">
                  PRO CONSUMER / CREATOR
                </span>
                <span className="text-2xl font-bold text-[#1d1d1f]">$3,499</span>
              </div>
              <h3 className="text-3xl font-bold text-[#1d1d1f]">RTX 5060 Ti Edition</h3>
              <p className="text-sm text-[#6e6e73]">
                Perfect for software developers, content creators, and local LLM prototyping over Wi-Fi 7.
              </p>

              <div className="pt-6 border-t border-[#d2d2d7]/60 flex flex-col gap-3 text-sm text-[#3a3a3c]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>NVIDIA GeForce RTX 5060 Ti (16 GB GDDR7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>1 TB PCIe 5.0 High-Speed NVMe Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>Intel Core 3 Processor with Wi-Fi 7 AirLink</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>140 tok/s Gemma 4 (26B) Decode Speed</span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-[#1d1d1f] hover:bg-[#56558e] text-white font-semibold text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <span>Select 5060 Ti Edition</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5090 Edition */}
          <div
            onClick={() => setSelectedEdition('5090')}
            className={`p-10 rounded-3xl bg-white border-2 cursor-pointer transition-all flex flex-col justify-between gap-8 shadow-lg ${
              selectedEdition === '5090'
                ? 'border-[#56558e] shadow-2xl ring-4 ring-[#56558e]/10 scale-[1.02]'
                : 'border-transparent hover:border-[#d2d2d7]'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e]">
                  STUDIO / ENTERPRISE LAB
                </span>
                <span className="text-2xl font-bold text-[#1d1d1f]">$12,999</span>
              </div>
              <h3 className="text-3xl font-bold text-[#1d1d1f]">RTX 5090 Edition</h3>
              <p className="text-sm text-[#6e6e73]">
                Maximum compute density for frontier 800B+ models, multi-tenant studio virtualization, and real-time generation.
              </p>

              <div className="pt-6 border-t border-[#d2d2d7]/60 flex flex-col gap-3 text-sm text-[#3a3a3c]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>NVIDIA GeForce RTX 5090 (32 GB GDDR7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>4 TB PCIe 5.0 TurboStream NVMe Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>Intel Core Ultra 7 Processor with Dedicated NPU</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#56558e]" />
                  <span>500+ tok/s Gemma 4 (26B) Decode Speed</span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <span>Select 5090 Edition</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
