import React from 'react'
import { Search, Database, Layers } from 'lucide-react'

export const SmartHomeMemory: React.FC = () => {
  return (
    <section id="memory" className="py-24 bg-white text-[#1d1d1f] border-b border-[#d2d2d7]/60">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-[680px] mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#56558e] block mb-2">
            02 · Local Memory
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight mb-4">
            Process once. <br />
            <span className="italic font-serif font-normal text-[#56558e]">Ask whenever.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            WiCi processes supported camera and sensor feeds as events arrive. It records timestamps, objects,
            actions, and summaries in a local index that later questions can search directly without re-reading
            hours of raw video.
          </p>
        </div>

        {/* 3 Step Pipeline Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[29px] bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#56558e] shadow-sm flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73] font-semibold block mb-1">
                Step 01
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Ingest Streams</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Connects to supported cameras and sensors across the home via local RTSP, WebRTC, or ONVIF streams over Wi-Fi.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d2d2d7]/60 text-xs font-mono text-[#56558e] font-semibold">
              Zero internet upload
            </div>
          </div>

          <div className="p-8 rounded-[29px] bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#56558e] shadow-sm flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73] font-semibold block mb-1">
                Step 02
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Semantic Indexing</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Extracts keyframe embeddings, object identities, and activity descriptions into a local encrypted vector index.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d2d2d7]/60 text-xs font-mono text-[#56558e] font-semibold">
              Stored on Gen 5 NVMe SSD
            </div>
          </div>

          <div className="p-8 rounded-[29px] bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#56558e] shadow-sm flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6e6e73] font-semibold block mb-1">
                Step 03
              </span>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Instant Recall</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Ask in plain English from your phone or speaker. WiCi retrieves the relevant timestamp and answers immediately.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d2d2d7]/60 text-xs font-mono text-[#56558e] font-semibold">
              Sub-100 ms response time
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
