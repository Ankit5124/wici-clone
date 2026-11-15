import React, { useState } from 'react'
import { Sparkles, Video, Clock, ShieldCheck } from 'lucide-react'

export const SmartHomeQuerySimulator: React.FC = () => {
  const sampleQueries = [
    {
      q: 'What is the cat doing right now?',
      time: 'Live · 2s ago',
      camera: 'Living Room Cam (RTSP)',
      answer: 'The cat is sleeping on the armchair next to the south window.',
      tags: ['Pet: Domestic Cat', 'State: Resting', 'Location: Armchair'],
      latency: '84 ms',
    },
    {
      q: 'Did a package arrive while I was away?',
      time: 'Today · 2:14 PM',
      camera: 'Front Doorbell (WebRTC)',
      answer: 'Yes, a courier in a blue vest left a brown cardboard parcel on the front porch mat at 2:14 PM.',
      tags: ['Event: Parcel Delivery', 'Location: Porch Mat', 'Duration: 18s'],
      latency: '112 ms',
    },
    {
      q: 'Where did I put my car keys this morning?',
      time: 'Today · 8:30 AM',
      camera: 'Hallway Entry Cam',
      answer: 'You placed your keychain on the white console table tray by the entryway at 8:31 AM.',
      tags: ['Object: Keychain', 'Surface: Entryway Tray', 'Confidence: 96%'],
      latency: '95 ms',
    },
    {
      q: 'Is the garage door closed and latched?',
      time: 'Live · 5s ago',
      camera: 'Garage Vision Sensor',
      answer: 'Yes, the garage door is completely closed and the magnetic latch sensor confirms engaged status.',
      tags: ['Door: Closed', 'Lock: Latched', 'Sensor: Active'],
      latency: '78 ms',
    },
  ]

  const [activeQueryIndex, setActiveQueryIndex] = useState(0)
  const current = sampleQueries[activeQueryIndex]

  return (
    <section className="py-24 bg-white text-[#09090b] border-b border-[#09090b]/08">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3b82f6]">
            Interactive Local Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#09090b] mt-2 mb-4">
            Ask natural questions. Get instant local answers.
          </h2>
          <p className="text-lg text-[#71717a]">
            Search multi-camera history using everyday conversational phrases. No tagging or manual scrubbing required.
          </p>
        </div>

        {/* Console Box */}
        <div className="rounded-3xl bg-[#09090b] text-white border border-black/10 overflow-hidden shadow-2xl">
          {/* Header bar */}
          <div className="p-6 border-b border-white/10 bg-white/05 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-zinc-300 font-semibold">WiCi One Vision Pipeline</span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs font-mono text-[#93c5fd]">Local Multi-Stream VLM</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                WAN Egress: 0 Bytes
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Query Pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Select a sample prompt:
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleQueries.map((item, idx) => (
                  <button
                    key={item.q}
                    onClick={() => setActiveQueryIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                      activeQueryIndex === idx
                        ? 'bg-[#3b82f6] text-white font-semibold shadow-md'
                        : 'bg-white/05 hover:bg-white/10 text-zinc-300 border border-white/10'
                    }`}
                  >
                    "{item.q}"
                  </button>
                ))}
              </div>
            </div>

            {/* Active Output Card */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pb-3 border-b border-white/05">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Video className="w-4 h-4 text-[#60a5fa]" />
                  <span>{current.camera}</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {current.time}
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    Inference: {current.latency}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">Reasoned Synthesis:</div>
                <p className="text-lg text-white font-medium leading-relaxed">
                  "{current.answer}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/05 border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-3 pt-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Indexed via open-source multimodal vector database on local NVMe.
              </span>
              <span className="text-zinc-500">Zero cloud API subscriptions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
