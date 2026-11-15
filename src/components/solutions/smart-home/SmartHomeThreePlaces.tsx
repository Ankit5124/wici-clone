import React from 'react'
import { Cpu, Cloud, Home, CheckCircle2 } from 'lucide-react'

export const SmartHomeThreePlaces: React.FC = () => {
  return (
    <section className="py-24 bg-white text-[#1d1d1f] border-b border-[#d2d2d7]/60">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-[680px] mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#56558e] block mb-2">
            The Three Approaches
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            Three places smart home AI can run.
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            Where vision models and sensor context process dictates privacy, latency, and capability.
          </p>
        </div>

        {/* 3 Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Place 1: On each device */}
          <div className="p-8 rounded-[29px] bg-white border border-[#d2d2d7] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] text-[#6e6e73] flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73] font-semibold block mb-1">
                Approach 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-2 font-display">On each device</h3>
              <div className="text-base font-semibold text-[#1d1d1f] mb-3">
                It sees, but understands little.
              </div>

              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Small processors detect simple events, while each device keeps a separate, short view of the home.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0f0f2] space-y-2 text-xs font-mono text-[#6e6e73]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Small device processors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Isolated single-camera view</span>
              </div>
            </div>
          </div>

          {/* Place 2: In the cloud */}
          <div className="p-8 rounded-[29px] bg-white border border-[#d2d2d7] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] text-[#6e6e73] flex items-center justify-center mb-6">
                <Cloud className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73] font-semibold block mb-1">
                Approach 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-2 font-display">In the cloud</h3>
              <div className="text-base font-semibold text-[#1d1d1f] mb-3">
                More AI, outside the home.
              </div>

              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Video leaves the premises, long histories take time to process, and every answer depends on the internet.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0f0f2] space-y-2 text-xs font-mono text-[#6e6e73]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Video leaves the premises</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Depends on external cloud server uptime</span>
              </div>
            </div>
          </div>

          {/* Place 3: At home (WiCi One) */}
          <div className="p-8 rounded-[29px] bg-[#56558e] text-white border border-[#56558e] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-6">
                <Home className="w-7 h-7" />
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#c0bfe4] font-semibold">
                  Approach 03 · WiCi
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold uppercase">
                  Local GPU
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#c0bfe4] mb-2 font-display">At home</h3>
              <div className="text-base font-semibold text-white mb-3">
                Shared intelligence. Private context.
              </div>

              <p className="text-sm text-white/90 leading-relaxed">
                One nearby GPU understands feeds from supported devices and keeps their searchable history on the premises.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 space-y-2 text-xs font-mono text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Full-size GPU shared nearby</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Multi-room history kept 100% on premises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
