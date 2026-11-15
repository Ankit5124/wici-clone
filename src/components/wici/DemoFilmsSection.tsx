import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const demoWorkloads = [
  {
    id: 'local-ai',
    label: 'For Local AI',
    videoSrc: '/demo-models-full-av1.mp4',
    poster: '/hero-film-platform-poster-2560.webp',
  },
  {
    id: 'ai-apps',
    label: 'For AI Apps',
    videoSrc: '/demo-apps-full-av1.mp4',
    poster: '/local-ai-laptop-2560.webp',
  },
  {
    id: 'gaming',
    label: 'For 4K Gaming',
    videoSrc: '/demo-gaming-full-av1.mp4',
    poster: '/hero-device-ledge.webp',
  },
  {
    id: 'rendering',
    label: 'For 3D Rendering',
    videoSrc: '/demo-models-full-av1.mp4',
    poster: '/use-case-artists-1800.webp',
  },
  {
    id: 'how-it-works',
    label: 'How it works',
    videoSrc: '/film-explainer-full-av1.mp4',
    poster: '/wici-one-overview-hero.webp',
  },
]

export const DemoFilmsSection: React.FC = () => {
  const [activeDemoTab, setActiveDemoTab] = useState('local-ai')

  const currentWorkload = demoWorkloads.find((w) => w.id === activeDemoTab) || demoWorkloads[0]

  return (
    <section className="py-24 px-8 border-t border-[#d2d2d7]/50 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Menu Items */}
        <div className="lg:col-span-4 flex flex-col">
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[#6e6e73] font-bold mb-8">
            DEMO FILMS
          </span>

          <div className="flex flex-col border-t border-[#d2d2d7]/60">
            {demoWorkloads.map((tab) => {
              const isActive = activeDemoTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemoTab(tab.id)}
                  className={`flex items-center justify-between py-5 border-b border-[#d2d2d7]/60 text-left transition cursor-pointer group ${
                    isActive ? 'text-[#1d1d1f]' : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  <span className={`text-[24px] md:text-[28px] ${isActive ? 'font-bold' : 'font-normal'}`}>
                    {tab.label}
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 transition transform ${
                      isActive
                        ? 'text-[#56558e] translate-x-1'
                        : 'text-[#6e6e73] opacity-60 group-hover:opacity-100 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Embedded Dynamic Video Player based on selected tab */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-black/40 relative aspect-[16/10]">
            <video
              key={currentWorkload.videoSrc}
              src={currentWorkload.videoSrc}
              poster={currentWorkload.poster}
              controls
              autoPlay
              className="w-full h-full object-contain bg-[#111113]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
