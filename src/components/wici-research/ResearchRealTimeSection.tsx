import React from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

interface ArticleItem {
  tag: string
  date: string
  title: string
  description: string
  url: string
}

const REALTIME_ARTICLES: ArticleItem[] = [
  {
    tag: 'Voice interaction',
    date: 'September 2026',
    title: 'Answering Is Not Buzzing',
    description: 'How WiCi cuts voice latency: listen early, answer early, and only speak once the answer is stable.',
    url: '#',
  },
  {
    tag: 'Research practice',
    date: 'September 2026',
    title: 'Thinkless: Unconditional Surrender in Thinking',
    description: 'Thinkless bets that in software development, thinking before you act loses to letting evidence decide.',
    url: '#',
  },
]

export const ResearchRealTimeSection: React.FC = () => {
  return (
    <section id="real-time" className="py-20 px-6 md:px-8 max-w-[1400px] mx-auto w-full border-b border-[#e5e5ea]">
      {/* Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e] block mb-2">
            RESEARCH DIRECTION 03
          </span>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1d1d1f] tracking-tight">
            Real-time interaction
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#6e6e73] leading-relaxed">
            We measure how AI systems listen, see and respond, alongside research on low-latency video encoding, transport and streaming. The focus is the complete interaction, from incoming media to an answer the user can act on.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {REALTIME_ARTICLES.map((item, idx) => (
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
              <span>Read article</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Work With Us Banner */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#18181b] to-[#2e1065] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono mb-3 text-purple-200">
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span>JOIN THE LAB</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Research at WiCi
          </h3>
          <p className="text-sm md:text-base text-white/70 mt-1 max-w-xl">
            Work with us on inference, wireless systems and real-time AI. We welcome visiting scholars, systems researchers, and hardware engineers.
          </p>
        </div>

        <a
          href="mailto:careers@wici.ai"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-sm font-semibold hover:bg-purple-100 transition whitespace-nowrap self-start md:self-auto shadow-sm"
        >
          <span>Explore opportunities</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
