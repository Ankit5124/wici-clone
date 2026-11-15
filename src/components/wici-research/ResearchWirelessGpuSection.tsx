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

const WIRELESS_ARTICLES: ArticleItem[] = [
  {
    tag: 'Data placement & caching',
    date: 'September 2026',
    title: 'Bridge the bandwidth gap with a huge SSD cache',
    description: 'How GPU-side caching and fewer blocking calls make a narrow Wi-Fi link useful for nearby compute.',
    url: '#',
  },
  {
    tag: 'Protocol design',
    date: 'September 2026',
    title: 'Making a Nearby GPU Feel Local',
    description: 'The wireless bottleneck is round-trip latency, not bandwidth, and a protocol can hide it.',
    url: '#',
  },
  {
    tag: 'System design',
    date: 'August 2026',
    title: 'Move the GPU Out. Keep It Local.',
    description: 'The physical case for moving the accelerator out of the device while keeping the experience local.',
    url: '#',
  },
]

export const ResearchWirelessGpuSection: React.FC = () => {
  return (
    <section id="wireless-gpu" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto w-full border-b border-[#e5e5ea]">
      {/* Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e] block mb-2">
            RESEARCH DIRECTION 01
          </span>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1d1d1f] tracking-tight">
            Wireless GPU
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#6e6e73] leading-relaxed">
            We study the network and runtime mechanisms that let applications use a nearby GPU. The work spans wireless latency, congestion control and keeping reusable data beside the accelerator.
          </p>
        </div>

        <Link
          to="/wici-one"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#56558e] transition self-start shadow-sm"
        >
          <span>Explore WiCi One</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* From our blog articles grid */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#86868b] mb-6">
          From our blog & technical reports
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WIRELESS_ARTICLES.map((item, idx) => (
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
