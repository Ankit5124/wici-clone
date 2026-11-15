import React, { useState } from 'react'
import { Shield, Lock, Sliders, HardDrive, Radio } from 'lucide-react'

export const SmartHomeContextBoundaries: React.FC = () => {
  const [retentionDays, setRetentionDays] = useState(14)
  const [petTracking, setPetTracking] = useState(true)
  const [porchSecurity, setPorchSecurity] = useState(true)

  const principles = [
    {
      title: 'Connect supported devices.',
      desc: 'A camera or sensor must expose an authorized feed, event stream, or API over local LAN protocols (RTSP, WebRTC, ONVIF, Matter).',
      icon: Radio,
    },
    {
      title: 'Index useful events.',
      desc: 'Store structured semantic descriptions and embedding vectors of events instead of naively scanning hours of raw pixels on every prompt.',
      icon: HardDrive,
    },
    {
      title: 'Separate permissions.',
      desc: 'Each family member and third-party app receives isolated token access only to designated rooms, devices, and relevant history.',
      icon: Lock,
    },
    {
      title: 'Control retention.',
      desc: 'The household decides how long raw video clips and derived context vectors remain available before automatic secure shredding.',
      icon: Sliders,
    },
  ]

  return (
    <section className="py-24 bg-[#f8f8fa] text-[#09090b] border-b border-[#09090b]/08">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context Needs Boundaries Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6]">
              Privacy & Access Control
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#09090b] leading-tight">
              Context needs boundaries.
            </h2>
            <p className="text-lg text-[#71717a] leading-relaxed font-normal">
              A capable home system should understand more while exposing less. Integrations, retention,
              and device access remain transparent and under your direct control.
            </p>

            <div className="space-y-4 pt-4">
              {principles.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white border border-[#09090b]/08 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#09090b] mb-1">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Interactive Privacy Dashboard Simulator */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#09090b] text-white border border-black/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Household Policy Controller</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  Local Enclave Active
                </span>
              </div>

              {/* Retention Control Slider */}
              <div className="p-5 rounded-2xl bg-[#111116] border border-white/05 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Context Retention Window</span>
                  <span className="text-[#60a5fa] font-bold">{retentionDays} Days</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="60"
                  value={retentionDays}
                  onChange={(e) => setRetentionDays(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3b82f6]"
                />
                <p className="text-[11px] text-zinc-500">
                  Embeddings older than {retentionDays} days are securely pruned from local Gen 5 NVMe.
                </p>
              </div>

              {/* Zone Permission Toggles */}
              <div className="space-y-3 font-mono text-xs">
                <span className="text-zinc-400 uppercase tracking-wider text-[11px] block">
                  Active Camera Permissions
                </span>

                <div className="p-4 rounded-xl bg-[#111116] border border-white/05 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Front Porch & Doorbell</div>
                    <div className="text-[11px] text-zinc-400">Deliveries, guests, vehicle detection</div>
                  </div>
                  <button
                    onClick={() => setPorchSecurity(!porchSecurity)}
                    className={`w-12 h-6 rounded-full transition flex items-center p-1 cursor-pointer ${porchSecurity ? 'bg-[#3b82f6] justify-end' : 'bg-zinc-700 justify-start'}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#111116] border border-white/05 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Living Room Pet Cam</div>
                    <div className="text-[11px] text-zinc-400">Cat/dog tracking & key finder</div>
                  </div>
                  <button
                    onClick={() => setPetTracking(!petTracking)}
                    className={`w-12 h-6 rounded-full transition flex items-center p-1 cursor-pointer ${petTracking ? 'bg-[#3b82f6] justify-end' : 'bg-zinc-700 justify-start'}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#111116] border border-white/05 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Private Bedrooms</div>
                    <div className="text-[11px] text-emerald-400">Hardware Blind Zone (Zero AI access)</div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                    BLOCKED
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Encrypted on local SSD with hardware AES-256 keys.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
