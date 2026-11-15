import React from 'react'
import { AlertCircle, UploadCloud, RefreshCw, EyeOff, Globe } from 'lucide-react'

export const SmartHomeProblem: React.FC = () => {
  const ledgerRows = [
    {
      badge: 'Continuous',
      type: 'Upload',
      desc: 'Camera streams or selected clips travel outside the premises for processing.',
      icon: UploadCloud,
    },
    {
      badge: 'Repeated',
      type: 'Work',
      desc: 'Long recordings may be searched or summarized again for each new question.',
      icon: RefreshCw,
    },
    {
      badge: 'Off site',
      type: 'Data',
      desc: 'The most personal views in the home are processed and stored by an external service.',
      icon: EyeOff,
    },
    {
      badge: 'Online',
      type: 'Access',
      desc: 'Answers and automations depend on internet connectivity and third-party servers remaining available.',
      icon: Globe,
    },
  ]

  return (
    <section id="problem" className="py-24 bg-[#f5f5f7] text-[#1d1d1f] border-b border-[#d2d2d7]/60">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[640px] mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#56558e] block mb-2">
            01 · The Problem
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            Plenty of data. <br />
            <span className="italic font-serif font-normal text-[#56558e]">Very little context.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            A camera can show a live view or trigger on simple motion. Understanding what happened across rooms
            and across time requires more compute, memory, and context than individual devices carry.
          </p>
        </div>

        {/* The Cloud Processing Ledger */}
        <div className="max-w-[820px] p-8 sm:p-10 rounded-[29px] bg-white border border-[#d2d2d7] shadow-sm">
          <div className="flex items-center justify-between pb-6 border-b border-[#f0f0f2] mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">In the cloud</h3>
              <p className="text-xs font-mono text-[#6e6e73] mt-0.5">Remote video and sensor processing</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-mono font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Privacy & Latency Liabilities
            </span>
          </div>

          <div className="divide-y divide-[#f0f0f2] space-y-4 pt-1">
            {ledgerRows.map((row) => {
              const Icon = row.icon
              return (
                <div key={row.badge} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                  <div className="sm:w-[150px] shrink-0 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#f5f5f7] text-[#1d1d1f] flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#56558e]" />
                      {row.badge}
                    </span>
                    <span className="italic font-serif text-sm text-[#56558e]">{row.type}</span>
                  </div>
                  <p className="text-sm text-[#3a3a3c] leading-relaxed flex-1">
                    {row.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#f0f0f2] text-xs font-mono text-[#6e6e73] flex items-center justify-between">
            <span>Verdict: More capable models, but private household context permanently leaves the home.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
