import React, { useState, useEffect } from 'react'

interface NavTab {
  id: string
  label: string
}

const TABS: NavTab[] = [
  { id: 'perspectives', label: 'Perspectives' },
  { id: 'wireless-gpu', label: 'Wireless GPU' },
  { id: 'ssd-inference', label: 'SSD inference' },
  { id: 'real-time', label: 'Real-time interaction' },
  { id: 'publications', label: 'Academic Publications' },
]

export const ResearchStickyNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('perspectives')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160

      for (let i = TABS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TABS[i].id)
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(TABS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveTab(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 120
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="sticky top-16 z-40 w-full bg-white/85 backdrop-blur-md border-y border-[#e5e5ea] py-3.5 px-6 md:px-8 transition-all">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Section Label */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-[17px] font-semibold text-[#1d1d1f] hover:text-[#56558e] transition"
          >
            Research
          </a>
        </div>

        {/* Right Scrollable Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`text-[13px] font-medium px-4 py-1.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-[#1d1d1f] text-white shadow-sm'
                    : 'bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e8e8ed]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
