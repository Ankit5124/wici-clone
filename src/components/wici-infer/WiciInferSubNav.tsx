import React, { useState, useEffect } from 'react'

export const WiciInferSubNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'overview', 'engine', 'benchmarks', 'demo', 'specs', 'faq']
      const scrollPos = window.scrollY + 140

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="sticky top-16 z-40 w-full bg-[#0a0b0d]/75 backdrop-blur-[20px] saturate-[150%] border-b border-[#faf9f5]/10 transition-colors"
      aria-label="WiCi Infer page sections"
    >
      <div className="max-w-[1240px] mx-auto px-6 h-14 flex items-center justify-between gap-3">
        {/* Left Product Title */}
        <a
          href="#top"
          className="text-[15px] font-medium text-[#faf9f5] tracking-tight hover:text-[#818cf8] transition whitespace-nowrap mr-auto"
        >
          WiCi Infer
        </a>

        {/* Center Pill Navigation Links */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#overview"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'overview'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            Overview
          </a>
          <a
            href="#engine"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'engine'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            InferSSD
          </a>
          <a
            href="#benchmarks"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'benchmarks'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            Benchmarks
          </a>
          <a
            href="#demo"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'demo'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            Demo
          </a>
          <a
            href="#specs"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'specs'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            Requirements
          </a>
          <a
            href="#faq"
            className={`inline-flex items-center justify-center min-h-[32px] px-3.5 py-1 rounded-full text-xs font-medium transition ${
              activeSection === 'faq'
                ? 'bg-[#faf9f5] text-[#0a0b0d] border border-[#faf9f5]'
                : 'bg-[#faf9f5]/10 text-[#faf9f5] border border-[#faf9f5]/20 hover:bg-[#faf9f5]/20'
            }`}
          >
            FAQ
          </a>
        </div>

        {/* Right Action Pill */}
        <a
          href="#download"
          className="inline-flex items-center justify-center min-h-[32px] px-4 py-1 rounded-full bg-[#575cf2] hover:bg-[#6366f1] text-white text-xs font-medium transition border border-[#575cf2] whitespace-nowrap"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
