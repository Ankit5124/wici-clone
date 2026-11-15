import React from 'react'
import { Cpu, HardDrive, CheckCircle2, Laptop } from 'lucide-react'

export const WiciInferSpecs: React.FC = () => {
  const specs = [
    {
      model: 'Qwen 3.6',
      params: '35B parameters',
      useCase: 'Everyday chat, reasoning, & lightweight coding',
      minMemory: '8 GB unified / RAM',
      recMemory: '16 GB',
      storage: '25 GB free SSD space',
      target: 'MacBook Air / Thin Windows PC (8 GB+)',
      tag: 'ENTRY LEVEL',
    },
    {
      model: 'DeepSeek V4.1 Flash',
      params: '763B parameters',
      useCase: 'Autonomous coding, agent tools, & large context',
      minMemory: '16 GB unified / RAM',
      recMemory: '48 GB',
      storage: '520 GB free SSD space',
      target: 'MacBook Pro / RTX 5060 Ti Desktop (16 GB+)',
      tag: 'RECOMMENDED',
      highlighted: true,
    },
    {
      model: 'Muse Spark Open',
      params: '816B parameters',
      useCase: 'Complex mathematical proofs & deep reasoning',
      minMemory: '24 GB unified / RAM',
      recMemory: '48 GB - 128 GB',
      storage: '520 GB free SSD space',
      target: 'MacBook Pro M5 Max / RTX 5090 / DGX Spark',
      tag: 'FRONTIER FLAGSHIP',
    },
  ]

  return (
    <section id="specs" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto w-full scroll-mt-28">
      <div className="flex flex-col items-center text-center max-w-[840px] mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#56558e] mb-3">
          SYSTEM REQUIREMENTS
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight leading-[1.08]">
          WiCi Infer runs local LLMs on computers of every size.
        </h2>
        <p className="mt-4 text-[clamp(16px,2vw,20px)] text-[#6e6e73] font-normal leading-relaxed">
          Thanks to InferSSD’s intelligent weight-streaming architecture, your computer no longer needs hundreds of gigabytes of RAM to run cutting-edge models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specs.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
              item.highlighted
                ? 'bg-white border-2 border-[#56558e] shadow-xl ring-4 ring-[#56558e]/10 scale-[1.02]'
                : 'bg-[#f5f5f7] border border-[#d2d2d7]/70 shadow-xs hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#56558e]">
                  {item.tag}
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-zinc-200/60 text-[#1d1d1f]">
                  {item.params}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1">{item.model}</h3>
              <p className="text-xs text-[#6e6e73] mb-6 leading-relaxed">{item.useCase}</p>

              <div className="flex flex-col gap-3.5 pt-6 border-t border-[#d2d2d7]/60 text-xs text-[#3a3a3c]">
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-[#56558e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1d1d1f]">Min Memory: </span>
                    <span>{item.minMemory}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#56558e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1d1d1f]">Recommended: </span>
                    <span>{item.recMemory}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <HardDrive className="w-4 h-4 text-[#56558e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1d1d1f]">Free Storage: </span>
                    <span>{item.storage}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Laptop className="w-4 h-4 text-[#56558e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1d1d1f]">Example Hardware: </span>
                    <span>{item.target}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d2d2d7]/60 flex items-center justify-between text-xs font-mono text-[#6e6e73]">
              <span>GGUF Q8_0 / MXFP4</span>
              <span>Direct streaming</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
