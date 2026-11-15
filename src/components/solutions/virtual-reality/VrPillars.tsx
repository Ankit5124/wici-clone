import React from 'react'
import { Wifi, Cpu, Eye, RefreshCw } from 'lucide-react'

export const VrPillars: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Foveated Wireless Streaming',
      desc: 'Eye-tracking coordinates are transmitted back to WiCi One in real-time. Only the central fovea area is rendered at 100% native resolution, slashing wireless bitrate by 65%.',
      badge: 'Dynamic Foveation',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi 7 AirLink Transport',
      desc: 'Uses Multi-Link Operation (MLO) across concurrent 5GHz and 6GHz bands with 320 MHz channels to eliminate frame drops and packet contention in dense environments.',
      badge: 'Multi-Link MLO',
    },
    {
      icon: Cpu,
      title: 'RTX Hardware Accelerated',
      desc: 'Run desktop-class Unreal Engine 5.5 Nanite and Lumen ray tracing with zero quality downgrades. What used to require a 30 lb tower now streams seamlessly to mobile glass.',
      badge: 'Unreal Engine 5.5',
    },
    {
      icon: RefreshCw,
      title: 'Pose Prediction & TimeWarp',
      desc: 'Asynchronous SpaceWarp (ASW) and late-latch motion vector reprojection run directly inside the headset firmware to guarantee buttery smooth 90/120 Hz playback.',
      badge: 'Zero Jitter',
    },
  ]

  return (
    <section id="architecture" className="py-24 px-8 bg-[#f5f5f7] border-y border-[#d2d2d7]/50 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          SPATIAL ARCHITECTURE
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight">
          How WiCi delivers untethered photorealism.
        </h2>
        <p className="mt-4 text-base text-[#6e6e73] max-w-[620px]">
          By separating physical compute from the mobile optic displays, spatial computing becomes lightweight, comfortable, and boundless.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="p-8 md:p-10 rounded-3xl bg-white border border-[#d2d2d7]/70 flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl hover:border-[#56558e]/40 transition group"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[#56558e] group-hover:bg-[#56558e] group-hover:text-white transition">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f]">{item.title}</h3>
              <p className="text-sm text-[#3a3a3c] leading-relaxed">{item.desc}</p>
            </div>

            <span className="text-xs font-mono font-semibold px-3.5 py-1 rounded-full bg-[#f5f5f7] text-[#56558e] border border-[#d2d2d7]/50 w-fit">
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
