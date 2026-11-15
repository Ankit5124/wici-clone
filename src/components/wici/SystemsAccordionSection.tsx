import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Plus, Minus } from 'lucide-react'

interface SystemItem {
  title: string
  desc: string
  link: string
  /** Section of the Research page that covers this topic */
  hash: string
}

const systemsItems: SystemItem[] = [
  {
    title: 'Wireless GPU computing',
    desc: 'Accessing discrete GPUs over standard Wi-Fi with sub-millisecond network driver virtualization, deterministic scheduling, and low packet jitter.',
    link: 'Read paper: Making a Nearby GPU Feel Local →',
    hash: 'wireless-gpu',
  },
  {
    title: 'Storage-backed inference',
    desc: 'InferSSD engine streams model weights directly from NVMe PCIe 5.0 SSDs into unified GPU memory, enabling 800B+ parameter models on consumer workstations.',
    link: 'Read paper: Running 800B Models on InferSSD →',
    hash: 'ssd-inference',
  },
  {
    title: 'Shared GPU infrastructure',
    desc: 'Dynamic GPU memory carving and multi-tenant virtualization allowing multiple applications and client laptops to slice one high-end card concurrently.',
    link: 'Read paper: Multi-tenant Wireless Compute →',
    hash: 'wireless-gpu',
  },
  {
    title: 'Real-time intelligence',
    desc: 'Zero-buffer streaming token decoding optimized for low-latency conversational voice and interactive multimodal interfaces.',
    link: 'Read paper: Answering Is Not Buzzing →',
    hash: 'real-time',
  },
]

export const SystemsAccordionSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  return (
    <section id="systems" className="relative py-28 px-8 bg-[#56558e] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 flex flex-col gap-6">
          <span className="text-[13px] font-mono tracking-[0.15em] uppercase text-[#c0bfe4] font-semibold">
            SYSTEMS FOR PERSONAL FRONTIER AI
          </span>
          <h2 className="text-[clamp(32px,4vw,52px)] font-medium tracking-tight leading-tight text-white">
            Addressing the core constraints of local AI.
          </h2>
          <p className="text-[16px] text-[#c0bfe4] leading-relaxed">
            Our research targets what has traditionally made local AI difficult: network transport overhead, high VRAM costs, multi-tenant contention, and interactive response times.
          </p>
        </div>

        <div className="md:col-span-7 flex flex-col border-t border-white/20">
          {systemsItems.map((item, idx) => {
            const isOpen = activeAccordion === idx
            return (
              <div key={item.title} className="border-b border-white/20 py-6 transition">
                <button
                  onClick={() => setActiveAccordion(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left cursor-pointer group"
                >
                  <span className="text-[20px] md:text-[22px] font-medium text-white group-hover:text-[#c0bfe4] transition">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-6 flex flex-col gap-3 text-[#c0bfe4] text-[15px] leading-relaxed">
                    <p>{item.desc}</p>
                    <Link
                      to="/research"
                      hash={item.hash}
                      className="inline-flex items-center gap-1.5 text-white font-medium hover:underline text-[14px] mt-1"
                    >
                      <span>{item.link}</span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
