import React from 'react'
import { Download } from 'lucide-react'

export const WiciInferHero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden grid place-items-start justify-center min-h-[clamp(580px,46vw,720px)] pt-24 pb-20 px-6 text-[#faf9f5] text-center"
    >
      {/* Backdrop: drifting indigo aurora over a fading grid (styles in index.css) */}
      <div className="infer-backdrop" aria-hidden="true">
        <div className="infer-glow infer-glow-a" />
        <div className="infer-glow infer-glow-b" />
        <div className="infer-glow infer-glow-c" />
        <div className="infer-grid" />
        <div className="infer-fade" />
      </div>

      <div className="w-full max-w-[760px] mx-auto flex flex-col items-center z-10">
        {/* Product Brand Header */}
        <div className="inline-flex items-center gap-3 mb-6 text-[clamp(1.5rem,1.3rem+1vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.025em] text-[#faf9f5]">
          <img
            src="/app-icon-glass-480.webp"
            alt="WiCi Infer"
            className="w-10 h-10 rounded-xl shadow-lg object-contain"
          />
          <span>WiCi Infer</span>
        </div>

        {/* Hero Title */}
        <h1
          id="infer-title"
          className="text-[clamp(2.3rem,1.8rem+2.6vw,4.1rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#faf9f5] mb-5"
        >
          <span>Run large local AI models</span>
          <br />
          <span>
            on your computer,{' '}
            <span className="whitespace-nowrap text-[#faf9f5]">
              17x faster<sup className="text-sm font-normal text-[#818cf8]">†</sup>.
            </span>
          </span>
        </h1>

        {/* Hero Lede Copy */}
        <p className="max-w-[640px] text-[clamp(1.05rem,0.95rem+0.4vw,1.25rem)] leading-[1.55] text-[#faf9f5]/80 mb-9 font-normal">
          WiCi Infer runs 800B-class AI models locally so you can chat and connect local AI apps, with no cloud dependency. Powered by our most capable local inference engine.
        </p>

        {/* Action Buttons & Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center gap-2.5">
            <div className="inline-flex items-center rounded-full bg-[#575cf2] hover:bg-[#6366f1] transition p-1 shadow-lg">
              <a
                href="#download"
                className="flex items-center gap-2 px-7 py-3 text-white font-medium text-sm tracking-tight"
              >
                <Download className="w-4 h-4" />
                <span>Download for Windows</span>
              </a>
            </div>
            <span className="text-[12px] text-[#faf9f5]/55 font-normal">
              Free · No subscription · No login required
            </span>
          </div>

          <a
            href="https://discord.gg/wici"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#faf9f5]/10 hover:bg-[#faf9f5]/15 text-[#faf9f5] border border-white/10 text-sm font-medium transition cursor-pointer self-start sm:self-auto sm:mb-6"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
            </svg>
            <span>Join community</span>
          </a>
        </div>
      </div>
    </section>
  )
}
