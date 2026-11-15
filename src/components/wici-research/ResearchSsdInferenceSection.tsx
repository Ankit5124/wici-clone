import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface ArticleItem {
  tag: string
  date: string
  title: string
  description: string
  url: string
}

const SSD_ARTICLES: ArticleItem[] = [
  {
    tag: 'InferSSD architecture & results',
    date: 'October 2026',
    title: 'Running 800B-Parameter LLMs on Consumer Hardware with InferSSD',
    description: 'How InferSSD streams MoE expert weights from SSD, with measured performance on Apple Silicon and NVIDIA systems and a guide to running locally.',
    url: '#',
  },
  {
    tag: 'Research perspective',
    date: 'September 2026',
    title: 'The SSD Is the New VRAM',
    description: 'The SSD is the only consumer-priced tier that can hold frontier-size open weights, and the systems problem is making that stream feel fast.',
    url: '#',
  },
  {
    tag: 'GPU memory scheduling',
    date: 'September 2026',
    title: 'The GPU Never Learned to Share',
    description: 'Local AI turns one machine into many GPU tenants, so VRAM needs a scheduler the way CPU cycles once did.',
    url: '#',
  },
  {
    tag: 'SGLang implementation',
    date: 'August 2026',
    title: 'WiCi x SGLang: Running Trillion Parameter LLMs on Consumer Hardware with SSD Expert Pack',
    description: 'Joint research by WiCi and SGLang on running DeepSeek-V4-Flash and Kimi-K3 on a consumer GPU with SSD Expert Pack, direct I/O, and a GPU expert cache.',
    url: '#',
  },
]

export const ResearchSsdInferenceSection: React.FC = () => {
  return (
    <section id="ssd-inference" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto w-full border-b border-[#e5e5ea]">
      {/* Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e] block mb-2">
            RESEARCH DIRECTION 02
          </span>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1d1d1f] tracking-tight">
            SSD inference
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#6e6e73] leading-relaxed">
            We study how to stream MoE expert weights from SSD, retain useful working sets in RAM and VRAM, and coordinate CPU and GPU execution. This direction connects the SSD-LLaMA paper, our SGLang Expert Pack work and the InferSSD engine.
          </p>
        </div>

        <Link
          to="/wici-infer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#56558e] transition self-start shadow-sm"
        >
          <span>Explore InferSSD</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* From our blog articles grid */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#86868b] mb-6">
          From our blog & technical reports
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SSD_ARTICLES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/50 flex flex-col justify-between group hover:border-[#56558e]/40 hover:bg-white hover:shadow-md transition duration-300"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-[#86868b] uppercase tracking-wider mb-3">
                  <span>{item.tag}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-[#1d1d1f] group-hover:text-[#56558e] transition leading-snug">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d2d2d7]/40 flex items-center justify-between text-xs font-semibold text-[#1d1d1f] group-hover:text-[#56558e] transition">
                <span>Read paper summary</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
