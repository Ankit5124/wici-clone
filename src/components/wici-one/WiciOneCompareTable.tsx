import React from 'react'
import { Check, X } from 'lucide-react'

export const WiciOneCompareTable: React.FC = () => {
  const rows = [
    {
      metric: 'AI Compute (Dense FP16)',
      wiciOne: 'Up to 420 TFLOPS (5090) / 95 TFLOPS (5060 Ti)',
      pocketAi: '~40 INT8 TOPS (1×)',
      macStudio: '~70 TFLOPS (1.8×)',
    },
    {
      metric: 'Storage Weight Streaming',
      wiciOne: 'Up to 4 TB PCIe 5.0 NVMe TurboStream',
      pocketAi: 'None / External USB-C',
      macStudio: 'Internal Unified RAM only',
    },
    {
      metric: 'Max Model Size Supported',
      wiciOne: '2.8T Parameters (via InferSSD)',
      pocketAi: '120B Parameters',
      macStudio: '~70B Parameters',
    },
    {
      metric: 'Serves Multiple Devices Wirelessly',
      wiciOne: true,
      pocketAi: false,
      macStudio: false,
    },
    {
      metric: 'Thermal Noise Level',
      wiciOne: 'Whisper-Quiet (< 24 dB)',
      pocketAi: '38–45 dB (Mini fan whine)',
      macStudio: 'Quiet (< 25 dB)',
    },
    {
      metric: 'Starting Price',
      wiciOne: 'From $3,499',
      pocketAi: '$1,399 – $2,999',
      macStudio: 'From $2,499 (Limited RAM)',
    },
  ]

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6e6e73] font-bold mb-3">
          HOW IT COMPARES
        </span>
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-[#1d1d1f] tracking-tight">
          Head-to-head performance.
        </h2>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-[#d2d2d7]/80 shadow-xl bg-white">
        <table className="w-full text-left text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#d2d2d7]/80 bg-[#f5f5f7]">
              <th className="p-6 font-semibold text-[#1d1d1f] w-1/3">Feature / Architecture</th>
              <th className="p-6 font-bold text-[#56558e] text-base w-1/4 bg-[#e8e8f2]/30">WiCi One</th>
              <th className="p-6 font-semibold text-[#6e6e73] w-1/5">Pocket AI Boxes</th>
              <th className="p-6 font-semibold text-[#6e6e73] w-1/5">Mac Studio M5 Max</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d2d2d7]/50">
            {rows.map((row) => (
              <tr key={row.metric} className="hover:bg-[#fbfbfd] transition">
                <td className="p-6 font-medium text-[#1d1d1f]">{row.metric}</td>
                <td className="p-6 font-bold text-[#1d1d1f] bg-[#e8e8f2]/15">
                  {typeof row.wiciOne === 'boolean' ? (
                    <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                      <Check className="w-5 h-5" /> Yes (Wi-Fi 7 AirLink)
                    </div>
                  ) : (
                    row.wiciOne
                  )}
                </td>
                <td className="p-6 text-[#6e6e73]">
                  {typeof row.pocketAi === 'boolean' ? (
                    <div className="flex items-center gap-1.5 text-rose-500 font-medium">
                      <X className="w-5 h-5" /> Tethered / Standalone
                    </div>
                  ) : (
                    row.pocketAi
                  )}
                </td>
                <td className="p-6 text-[#6e6e73]">
                  {typeof row.macStudio === 'boolean' ? (
                    <div className="flex items-center gap-1.5 text-rose-500 font-medium">
                      <X className="w-5 h-5" /> Single Machine Only
                    </div>
                  ) : (
                    row.macStudio
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
