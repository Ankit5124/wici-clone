import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

export const CareersDevelopersSection: React.FC = () => {
  return (
    <section id="careers" className="py-24 px-8 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Flatlay Photo */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-[#d2d2d7]/50">
          <img
            src="/device-flatlay.jpg"
            alt="WiCi Ecosystem Flatlay"
            className="w-full h-auto object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* Right Content Columns */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-10">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[clamp(28px,3vw,38px)] font-bold text-[#1d1d1f] tracking-tight leading-tight">
              Work on the systems behind personal AI.
            </h3>
            <p className="text-[16px] text-[#3a3a3c] leading-relaxed">
              Join researchers and engineers working across networking, GPU systems, and AI inference. Develop new methods and turn them into working systems.
            </p>
            <a
              href="mailto:careers@wici.ai"
              className="inline-flex items-center gap-1.5 text-[#1d1d1f] font-semibold text-[15px] hover:text-[#56558e] transition"
            >
              <span>Explore open roles</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-[1px] bg-[#d2d2d7]/60" />

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[clamp(28px,3vw,38px)] font-bold text-[#1d1d1f] tracking-tight leading-tight">
              Build with WiCi.
            </h3>
            <p className="text-[16px] text-[#3a3a3c] leading-relaxed">
              Access local GPU compute through familiar APIs, SDKs, and supported driver integrations. Bring AI inference into assistants, creative tools, and connected devices.
            </p>
            <Link
              to="/technology"
              hash="docs"
              className="inline-flex items-center gap-1.5 text-[#1d1d1f] font-semibold text-[15px] hover:text-[#56558e] transition"
            >
              <span>Explore developer tools</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
