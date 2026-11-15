import { Link } from '@tanstack/react-router'
import React from 'react'

export const CreativeCta: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-[#56558e] text-white text-center w-full">
      <div className="max-w-[720px] mx-auto px-6 flex flex-col items-center">
        <h2 className="text-[clamp(32px,3.2vw,48px)] font-medium leading-[1.08] tracking-[-0.025em] text-white">
          The studio's GPU, <em className="text-[#e8e8f2] not-italic block mt-1">on a shelf.</em>
        </h2>

        <p className="mt-3.5 text-[18px] leading-[1.5] text-white/90 max-w-[48ch]">
          Reserve a WiCi One for the studio, or create with us in the co-creation program.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            to="/wici-one"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#e8e8f2] text-[#1d1d1f] font-semibold text-[14px] transition-colors"
          >
            <span>Buy WiCi One</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <a
            href="https://wici.ai/partnerships/creators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-[14px] border border-white/40 hover:border-white transition-colors"
          >
            <span>Co-creation program</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
