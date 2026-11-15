import React from 'react'
import { ArrowRight, Cpu, Zap, ShieldCheck } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const RoboticsSolution: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-[#f8f8fa] text-[#1d1d1f] w-full border-t border-[#d2d2d7]/50">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-10 max-w-[780px]">
          <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#6e6e73] block mb-3">
            The solution
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-[1.08] tracking-[-0.025em] text-[#1d1d1f]">
            Physical intelligence, <em className="italic font-serif text-[#56558e]">one hop away.</em>
          </h2>
          <p className="mt-5 text-[15px] md:text-base leading-[1.55] text-[#515154]">
            Models too large for an on-robot processor, one wireless hop away, with no internet in the control loop and no video leaving the facility. WiCi One delivers dedicated GPU compute over a sub-2ms deterministic Wi-Fi connection.
          </p>
        </header>

        {/* Ledger Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="flex flex-col gap-3 p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs">
            <h3 className="text-xl font-bold text-[#1d1d1f]">
              On-Robot Compute
              <small className="block text-xs font-normal text-[#6e6e73] mt-0.5">Heavy payload & battery drain</small>
            </h3>
            <div className="divide-y divide-[#d2d2d7]/60 text-xs">
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Power budget</span>
                <span className="font-mono font-bold text-[#1d1d1f]">40 – 130 W thermal limit</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Model capacity</span>
                <span className="font-mono font-bold text-[#1d1d1f]">~7B – 14B parameters</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Weight penalty</span>
                <span className="font-mono font-bold text-[#1d1d1f]">Heatsinks & active fans onboard</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-7 rounded-[29px] border-2 border-[#56558e] bg-white shadow-md">
            <h3 className="text-xl font-bold text-[#1d1d1f]">
              WiCi On-Site GPU
              <small className="block text-xs font-normal text-[#56558e] mt-0.5">Zero onboard weight penalty</small>
            </h3>
            <div className="divide-y divide-[#d2d2d7]/60 text-xs">
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Power budget</span>
                <span className="font-mono font-bold text-[#56558e]">Up to 600 W desktop wall power</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Model capacity</span>
                <span className="font-mono font-bold text-[#56558e]">800B+ MoE via InferSSD</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-[#6e6e73]">Control latency</span>
                <span className="font-mono font-bold text-[#56558e]">~1.5 ms direct Wi-Fi round-trip</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Callout & Resource Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e6e73] mb-4 block">
                Robot Architecture Pillars
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-[#f8f8fa]">
                  <Zap className="w-4 h-4 text-[#56558e]" />
                  <strong className="text-sm font-semibold">Zero Internet</strong>
                  <p className="text-[#6e6e73]">No cloud dependencies. All sensor data stays on premise.</p>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-[#f8f8fa]">
                  <Cpu className="w-4 h-4 text-[#56558e]" />
                  <strong className="text-sm font-semibold">Multi-Robot</strong>
                  <p className="text-[#6e6e73]">Multiple robotic arms and AGVs multiplex onto one GPU.</p>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-[#f8f8fa]">
                  <ShieldCheck className="w-4 h-4 text-[#56558e]" />
                  <strong className="text-sm font-semibold">Real-Time VRAM</strong>
                  <p className="text-[#6e6e73]">Hardware priority lanes prevent policy inference stalls.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link
              to="/wici-one"
              className="flex flex-col rounded-[29px] border border-[#d2d2d7]/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
            >
              <div className="aspect-[16/10] bg-gradient-to-b from-[#e8e8ed] to-[#d6d6e0] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src="/hero-device-ledge.webp"
                  alt="The WiCi One device"
                  className="max-h-[220px] w-auto object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="flex flex-col gap-2 p-6">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#56558e]">
                  WICI ONE FOR ROBOTICS
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-[#1d1d1f]">WiCi One</h3>
                <p className="text-sm text-[#515154] leading-relaxed">
                  On-site GPU inference for physical robots. Two editions, from $3,499.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#56558e] group-hover:gap-2.5 transition-all">
                  <span>See WiCi One</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
