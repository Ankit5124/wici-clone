import React from 'react'
import { ArrowRight } from 'lucide-react'

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-24 px-8 border-t border-[#d2d2d7]/40 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-medium tracking-tight text-[#1d1d1f] leading-snug">
            Local compute.<br />Direct control.
          </h2>
        </div>
        <div className="md:col-span-7 flex flex-col items-start gap-6">
          <p className="text-[18px] md:text-[20px] text-[#3a3a3c] font-normal leading-relaxed">
            Running AI locally gives individuals and organizations sovereign control over their models, confidential data, and usage. WiCi makes local deployment seamless and practical through wireless GPU clustering, SSD-backed model weights streaming, and zero-latency inference.
          </p>
          <a
            href="#systems"
            className="inline-flex items-center gap-2 text-[#56558e] hover:text-[#6664a5] font-semibold text-[15px] transition group"
          >
            <span>Read more about our architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  )
}
