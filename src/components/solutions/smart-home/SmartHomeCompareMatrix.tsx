import React from 'react'
import { Link } from '@tanstack/react-router'
import { Check, ArrowRight, Home, Lock } from 'lucide-react'

export const SmartHomeCompareMatrix: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'AI capacity',
      atHome: 'Full-size GPU shared nearby',
      onDevice: 'Small device processor',
      inCloud: 'Datacenter GPU',
      homeHighlight: true,
    },
    {
      feature: 'Context',
      atHome: 'Shared local event history',
      onDevice: 'One device and short history',
      inCloud: 'Provider-managed history',
      homeHighlight: true,
    },
    {
      feature: 'Raw video path',
      atHome: 'Inside the home (Local Wi-Fi)',
      onDevice: 'Inside the device',
      inCloud: 'Across the public internet',
      homeHighlight: true,
    },
    {
      feature: 'Internet required',
      atHome: 'No (100% offline capable)',
      onDevice: 'No',
      inCloud: 'Yes (Stops working offline)',
      homeHighlight: true,
    },
    {
      feature: 'AI upgrades',
      atHome: 'Upgrade shared models or GPU',
      onDevice: 'Replace each camera hardware',
      inCloud: 'Provider controlled subscription',
      homeHighlight: true,
    },
  ]

  return (
    <section
      id="local-intelligence"
      className="py-24 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(170deg, #464478 0%, #56558e 50%, #464478 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-[700px] mb-14 text-center sm:text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#c0bfe4] block mb-2">
            03 · Local Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            AI on home devices <br className="hidden sm:inline" />
            <span className="text-[#c0bfe4]">versus in the cloud.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            See how placing a shared GPU inside the home combines datacenter-grade model capacity with total data sovereignty.
          </p>
        </div>

        {/* Feature Matrix Table */}
        <div className="p-6 sm:p-10 rounded-[29px] bg-white text-[#1d1d1f] shadow-2xl mb-16 overflow-x-auto">
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-[#f0f0f2]">
                <th className="py-4 px-4 font-mono text-xs uppercase tracking-wider text-[#6e6e73]">
                  Capability
                </th>
                <th className="py-4 px-4 bg-[#e8e8f2]/60 rounded-t-2xl font-bold text-[#56558e] text-base">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#56558e]" />
                    At home (WiCi One)
                  </div>
                </th>
                <th className="py-4 px-4 font-bold text-[#1d1d1f]">
                  On each device
                </th>
                <th className="py-4 px-4 font-bold text-[#1d1d1f]">
                  In the cloud
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0f0f2]">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-[#fbfbfd] transition">
                  <td className="py-4 px-4 font-semibold text-[#1d1d1f]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 bg-[#e8e8f2]/40 font-semibold text-[#56558e]">
                    {row.atHome}
                  </td>
                  <td className="py-4 px-4 text-[#6e6e73]">
                    {row.onDevice}
                  </td>
                  <td className="py-4 px-4 text-[#6e6e73]">
                    {row.inCloud}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compute Layer & Developer Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Local Compute Layer */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[29px] bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#c0bfe4] block">
              The Local Compute Layer
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              The home keeps its own context.
            </h3>
            <ul className="space-y-3.5 text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                <span><strong>Full-size GPU</strong> shared by supported cameras, sensors, and applications across the local Wi-Fi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                <span><strong>Local event memory</strong> enabling natural language questions across time and multi-room history.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                <span><strong>Driver, SDK, or API</strong> integration paths for custom smart home software and Home Assistant integrations.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                to="/wici-one"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#56558e] font-bold text-xs uppercase tracking-wider hover:bg-[#e8e8f2] transition shadow-md"
              >
                <span>Build on WiCi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Context Needs Boundaries Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[29px] bg-black/30 backdrop-blur-md border border-white/10 text-white space-y-5">
            <div className="flex items-center gap-2 text-[#c0bfe4]">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Security Architecture</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Context needs boundaries.</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              A capable home system should understand more while exposing less. Integrations, retention, and access remain explicit.
            </p>
            <div className="space-y-2.5 text-xs text-white/85 font-mono">
              <div className="p-3 rounded-xl bg-white/05 border border-white/10">
                1. <strong>Connect supported devices:</strong> Authorized feeds only.
              </div>
              <div className="p-3 rounded-xl bg-white/05 border border-white/10">
                2. <strong>Index useful events:</strong> Structured summaries, not raw cloud scans.
              </div>
              <div className="p-3 rounded-xl bg-white/05 border border-white/10">
                3. <strong>Separate permissions:</strong> Per-user room access tokens.
              </div>
              <div className="p-3 rounded-xl bg-white/05 border border-white/10">
                4. <strong>Control retention:</strong> User-determined encryption and retention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
