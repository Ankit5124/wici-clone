import React, { useState, useRef } from 'react'
import { Play, Volume2, VolumeX, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const LocalAiSolution: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTogglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.muted = false
      setIsMuted(false)
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section id="solution" className="py-16 md:py-24 bg-[#f8f8fa] text-[#1d1d1f] w-full border-t border-[#d2d2d7]/50">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-10 max-w-[780px]">
          <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#6e6e73] block mb-3">
            The solution
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-[1.08] tracking-[-0.025em] text-[#1d1d1f]">
            One GPU, <em className="italic font-serif text-[#56558e]">three ways in.</em>
          </h2>
          <p className="mt-5 text-[15px] md:text-base leading-[1.55] text-[#515154]">
            WiCi One holds the GPU, the memory, and the SSD tier that streams weights larger than VRAM. Your laptop reaches it over Wi‑Fi through the WiCi Protocol, which presents it as a local GPU: Ollama, LM Studio, and PyTorch see a standard device, and agents call a standard endpoint.
          </p>
        </header>

        {/* Video Teaser & Interactive Film Player */}
        <figure className="relative rounded-[29px] overflow-hidden bg-[#0a0b0d] shadow-2xl aspect-video w-full mb-4 group">
          <video
            ref={videoRef}
            src="/demo-models-full-av1.mp4"
            muted={isMuted}
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover"
            aria-label="A trillion-parameter model answering on a thin laptop, served by WiCi One."
          />

          {/* Floating Controls */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition flex items-end justify-between p-6 pointer-events-none">
            <button
              type="button"
              onClick={handleTogglePlay}
              className="pointer-events-auto inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 hover:bg-white text-[#1d1d1f] text-xs font-semibold shadow-xl transition transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlaying ? 'Pause film' : 'Play the full film'}</span>
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="pointer-events-auto p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition cursor-pointer"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </figure>

        <p className="text-xs text-[#6e6e73] leading-[1.55] max-w-[70ch] mb-12">
          The developer demo from the WiCi One page: a trillion-parameter model answering on a thin laptop, with WiCi One as its GPU over home Wi‑Fi. Ten-second teaser; the full film has sound.
        </p>

        {/* Two-Column Grid: Benchmarks Table + Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Benchmarks Table */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-x-auto rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs">
              <table className="w-full border-collapse text-left text-sm text-[#515154]">
                <thead>
                  <tr className="border-b border-[#d2d2d7]/70 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6e6e73]">
                    <th scope="col" className="p-4 md:p-5 font-semibold">Model</th>
                    <th scope="col" className="p-4 md:p-5 font-semibold">5060 Ti edition</th>
                    <th scope="col" className="p-4 md:p-5 font-semibold">5090 edition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d2d2d7]/60">
                  <tr className="hover:bg-[#fafafc] transition">
                    <th scope="row" className="p-4 md:p-5 font-semibold text-[#1d1d1f]">
                      Kimi K3
                      <small className="block font-normal text-xs text-[#6e6e73] mt-0.5">2.8T params</small>
                    </th>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">2.5</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">5</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#fafafc] transition">
                    <th scope="row" className="p-4 md:p-5 font-semibold text-[#1d1d1f]">
                      DeepSeek V4.1 Flash
                      <small className="block font-normal text-xs text-[#6e6e73] mt-0.5">748B params</small>
                    </th>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">8</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">20</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#fafafc] transition">
                    <th scope="row" className="p-4 md:p-5 font-semibold text-[#1d1d1f]">
                      Gemma 4
                      <small className="block font-normal text-xs text-[#6e6e73] mt-0.5">26B params</small>
                    </th>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">140</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                    <td className="p-4 md:p-5">
                      <strong className="text-xl font-medium text-[#1d1d1f]">500+</strong>
                      <span className="text-xs text-[#6e6e73] ml-1">tok/s</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-[#6e6e73]">
              From the{' '}
              <Link to="/wici-one" hash="performance" className="text-[#56558e] hover:underline font-medium">
                WiCi One benchmarks
              </Link>
              . Models larger than VRAM stream from the SSD tier.
            </p>
          </div>

          {/* Right Column: WiCi One Product Card */}
          <div className="lg:col-span-5">
            <Link
              to="/wici-one"
              className="flex flex-col rounded-[29px] border border-[#d2d2d7]/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
            >
              <div className="aspect-[16/10] bg-gradient-to-b from-[#e8e8ed] to-[#d6d6e0] flex items-center justify-center p-6 overflow-hidden">
                <img
                  src="/hero-device-ledge.webp"
                  alt="The WiCi One device on its stage"
                  className="max-h-[220px] w-auto object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#56558e]">
                    WICI HARDWARE
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-[#1d1d1f]">WiCi One</h3>
                <p className="text-sm text-[#515154] leading-relaxed">
                  A desktop-class GPU on a shelf, reached over Wi‑Fi. Two editions, from $3,499.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#56558e] group-hover:gap-2.5 transition-all">
                  <span>See WiCi One</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Resource Links: Technology & Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#d2d2d7]/60">
          {/* Column 1: Technology */}
          <div className="flex flex-col">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e6e73] mb-4">
              Technology
            </span>
            <ul className="flex flex-col divide-y divide-[#d2d2d7]/60">
              <li>
                <Link
                  to="/wici-infer"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">InferSSD</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    The open-source engine that streams expert weights from SSD.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">Run bigger models</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    How the SSD tier streams models that outgrow VRAM.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">Designed for network latency</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    Why the round trip, not bandwidth, is the constraint, and how the protocol hides it.
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: From the blog */}
          <div className="flex flex-col">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e6e73] mb-4">
              From the blog
            </span>
            <ul className="flex flex-col divide-y divide-[#d2d2d7]/60">
              <li>
                <a
                  href="https://wici.ai/article/running-800b-models-with-inferssd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">
                    Running 800B-Parameter LLMs on Consumer Hardware with InferSSD
                  </span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    Measured on Apple Silicon and NVIDIA systems, with a guide to running locally.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wici.ai/article/ssd-is-the-new-vram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">The SSD Is the New VRAM</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    The only consumer-priced tier that holds frontier-size open weights.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wici.ai/article/gpu-never-learned-to-share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">The GPU Never Learned to Share</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    One machine, many GPU tenants: VRAM needs a scheduler.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wici.ai/article/general-and-the-particular"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col py-3.5 text-[#1d1d1f] hover:text-[#56558e] transition group"
                >
                  <span className="text-sm font-semibold group-hover:underline">The General and the Particular</span>
                  <span className="text-xs text-[#6e6e73] mt-0.5">
                    Interaction, memory, and adaptation belong close to the user.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
