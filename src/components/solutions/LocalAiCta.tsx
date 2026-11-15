import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const LocalAiCta: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-6 md:px-8 bg-[#0a0b0d] text-[#faf9f5] w-full text-center">
      <div className="max-w-[720px] mx-auto flex flex-col items-center">
        <h2 className="text-[clamp(32px,5vw,60px)] font-medium leading-[1.08] tracking-[-0.03em] text-[#faf9f5]">
          Your models. <em className="italic font-serif text-[#c0bfe4]">Your hardware.</em>
        </h2>

        <p className="mt-5 text-[clamp(16px,2vw,20px)] text-[#faf9f5]/70 max-w-[48ch] leading-relaxed">
          Buy a WiCi One, or apply for early access to the SDK and API.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/wici-one"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#c0bfe4] text-[#1d1d1f] font-semibold text-sm transition shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Buy WiCi One</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/technology"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-sm border border-white/30 hover:border-white transition cursor-pointer"
          >
            <span>Developer access</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
