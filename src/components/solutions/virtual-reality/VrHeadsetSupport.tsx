import { Link } from '@tanstack/react-router'
import React, { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

export const VrHeadsetSupport: React.FC = () => {
  const [selectedHeadset, setSelectedHeadset] = useState<'vision' | 'quest' | 'steamvr'>('vision')

  const headsets = [
    {
      id: 'vision',
      name: 'Apple Vision Pro',
      os: 'visionOS 2.0+',
      streamingMode: 'ALVR Native / WiCi Spatial Client',
      perEye: '3660 × 3200 micro-OLED',
      features: ['Dynamic Eye-Tracking Foveation', 'Metal 3 Compute Virtualization', 'Direct Hand Tracking Loop'],
    },
    {
      id: 'quest',
      name: 'Meta Quest 3 / 3S / Pro',
      os: 'Meta Horizon OS',
      streamingMode: 'WiCi AirLink APK / OpenXR Runtime',
      perEye: '2064 × 2208 Pancake Optics',
      features: ['AV1 Hardware Decoding over Wi-Fi 7', 'Full Passthrough Mixed Reality Compositing', 'Touch Pro Low-Jitter Tracking'],
    },
    {
      id: 'steamvr',
      name: 'SteamVR & OpenXR PCVR',
      os: 'Windows / Linux',
      streamingMode: 'Standard Virtual SteamVR HMD',
      perEye: 'Up to Dual 4K Displays',
      features: ['Zero Code Changes in Unreal Engine & Unity', 'Simultaneous Multi-User Workspace Slicing', 'Local Low-Latency Audio Streaming'],
    },
  ]

  const current = headsets.find((h) => h.id === selectedHeadset)!

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          SUPPORTED ECOSYSTEM
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight">
          Works with the spatial devices you own.
        </h2>
        <p className="mt-4 text-base text-[#6e6e73] max-w-[620px]">
          No specialized proprietary headsets required. Install the WiCi client on your existing glasses and unlock infinite desktop-grade GPU power.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Headset Selector Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {headsets.map((item) => {
            const isSelected = item.id === selectedHeadset
            return (
              <div
                key={item.id}
                onClick={() => setSelectedHeadset(item.id as any)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-white border-[#56558e] shadow-xl ring-4 ring-[#56558e]/10'
                    : 'bg-[#f5f5f7] border-transparent hover:border-[#d2d2d7]'
                }`}
              >
                <div>
                  <h4 className="text-lg font-bold text-[#1d1d1f]">{item.name}</h4>
                  <p className="text-xs text-[#6e6e73] mt-0.5">{item.os}</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-[#56558e] text-white' : 'bg-[#d2d2d7] text-[#6e6e73]'
                  }`}
                >
                  ✓
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Headset Spec & Architecture Card */}
        <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[#0f0e17] text-white border border-white/10 shadow-2xl flex flex-col justify-between gap-8">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-[#c0bfe4] tracking-wider block">
                  HARDWARE PROFILE
                </span>
                <h3 className="text-2xl font-bold mt-1">{current.name}</h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-400">
                100% Plug & Play
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-white/10 text-xs font-mono">
              <div>
                <span className="text-zinc-400 block mb-1">OPTICS TARGET:</span>
                <span className="text-white font-semibold text-sm">{current.perEye}</span>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">TRANSPORT RUNTIME:</span>
                <span className="text-white font-semibold text-sm">{current.streamingMode}</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase text-[#c0bfe4] tracking-wider">
                ACTIVE PIPELINE CAPABILITIES:
              </span>
              {current.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/wici-one" hash="editions"
            className="w-full py-4 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Deploy WiCi One for {current.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
