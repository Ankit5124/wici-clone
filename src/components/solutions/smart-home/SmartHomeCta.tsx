import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Home } from 'lucide-react'

export const SmartHomeCta: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] text-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#93c5fd] uppercase tracking-wider mb-6">
            <Home className="w-3.5 h-3.5 text-[#60a5fa]" />
            Local Frontier Intelligence
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Equip your home with private local intelligence.
          </h2>

          <p className="text-base sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-[620px] mx-auto">
            Experience the peace of mind of high-performance vision models and natural voice agents
            without transmitting a single frame outside your walls.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/wici-one"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#09090b] font-bold text-sm hover:bg-zinc-200 transition shadow-lg hover:shadow-xl"
            >
              <span>Explore WiCi One</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/15 border border-white/15 transition"
            >
              <span>How it works (Technology)</span>
            </Link>
          </div>

          {/* Other Solutions Strip */}
          <div className="pt-12 border-t border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">
              Explore other WiCi Solutions
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-medium text-zinc-400">
              <Link to="/wici-one" className="hover:text-white transition">
                Local AI
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/wici-one" className="hover:text-white transition">
                Creative Artists
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/wici-one" className="hover:text-white transition">
                Robotics
              </Link>
              <span className="text-zinc-700">/</span>
              <Link to="/technology" className="hover:text-white transition">
                Protocol Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
