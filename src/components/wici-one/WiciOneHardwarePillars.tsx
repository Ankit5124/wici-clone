import React from 'react'
import { Cpu, Wifi, Layers, Wind } from 'lucide-react'

export const WiciOneHardwarePillars: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Full-power GPU',
      desc: 'Dedicated NVIDIA GeForce RTX graphics processor sized for real-time AI inference and sustained 4K gaming with zero thermal throttling.',
      badge: 'NVIDIA RTX Architecture',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi 7 Radio',
      desc: 'Ultra-high bandwidth 4x4 MIMO wireless modules tuned for the custom WiCi low-jitter transport layer with twin tuned internal antennas.',
      badge: 'Sub-1ms Latency',
    },
    {
      icon: Layers,
      title: 'GPU Runtime & Driver',
      desc: 'A complete virtual GPU subsystem that exposes standard CUDA, Direct3D, Vulkan, and Metal APIs over the air seamlessly.',
      badge: 'Zero Code Changes',
    },
    {
      icon: Wind,
      title: 'Whisper-Quiet Thermal Path',
      desc: 'Custom-machined acoustic chamber with vapor chamber and liquid-dynamic bearing fans concealed under an organic wave lid.',
      badge: '< 24 dB Under Load',
    },
  ]

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          ANATOMY OF WICI ONE
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight">
          Engineered for silent, wireless performance.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item) => (
          <div
            key={item.title}
            className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex flex-col justify-between gap-6 hover:border-[#56558e]/40 hover:shadow-xl transition group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-[#d2d2d7]/60 flex items-center justify-center text-[#56558e] group-hover:bg-[#56558e] group-hover:text-white transition">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">{item.title}</h3>
              <p className="text-sm text-[#3a3a3c] leading-relaxed">{item.desc}</p>
            </div>

            <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white text-[#56558e] border border-[#d2d2d7]/40 w-fit">
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
