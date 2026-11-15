import React, { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const [isPlayingHeroVideo, setIsPlayingHeroVideo] = useState(false)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (isPlayingHeroVideo) {
        heroVideoRef.current.pause()
        setIsPlayingHeroVideo(false)
      } else {
        heroVideoRef.current.play()
        setIsPlayingHeroVideo(true)
      }
    }
  }

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* Background Video Player (1st.mp4) */}
      <div onClick={toggleHeroVideo} className="absolute inset-0 cursor-pointer group">
        <video
          ref={heroVideoRef}
          src="/1st.mp4"
          poster="/hero-film-platform-poster-2560.webp"
          playsInline
          onEnded={() => setIsPlayingHeroVideo(false)}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

        {!isPlayingHeroVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
        )}
      </div>

      <div className="h-20" />

      {/* Main Title & Subtitle */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-8 md:px-14 pb-12 pointer-events-none">
        <div className="max-w-[850px] flex flex-col items-start gap-4">
          <div className="mb-2">
            <svg
              className="w-16 h-16 text-white drop-shadow-md"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 11C9 8.5 13 8.5 16 11C19 13.5 23 13.5 27 11" />
              <path d="M5 16C9 13.5 13 13.5 16 16C19 18.5 23 18.5 27 16" />
              <path d="M5 21C9 18.5 13 18.5 16 21C19 23.5 23 23.5 27 21" />
            </svg>
            <span className="text-white font-extrabold text-xl tracking-tight block drop-shadow-md">
              WICI
            </span>
          </div>

          <h1 className="text-white text-[clamp(44px,6.8vw,96px)] font-bold tracking-tight leading-[1.0] drop-shadow-lg">
            Frontier AI belongs<br />to everyone.
          </h1>

          <p className="mt-4 text-white/90 text-[18px] md:text-[20px] font-normal max-w-[560px] leading-relaxed drop-shadow">
            WiCi is a systems research lab. We build systems for wireless GPU and local AI.
          </p>
        </div>
      </div>

      {/* Control Ribbon */}
      <div className="relative z-20 w-full bg-[#fbfbfd] border-t border-[#d2d2d7]/80 flex items-center justify-between text-[#1d1d1f] h-14">
        <button
          onClick={toggleHeroVideo}
          className="h-full px-8 bg-[#56558e] hover:bg-[#6664a5] text-white text-[13px] font-mono font-bold uppercase tracking-wider flex items-center justify-center transition cursor-pointer"
        >
          WATCH THE FILM
        </button>

        <button
          onClick={toggleHeroVideo}
          className="flex items-center gap-3 cursor-pointer group px-4 py-2"
        >
          <div className="w-9 h-9 rounded-full border border-[#1d1d1f]/30 group-hover:border-[#56558e] group-hover:bg-[#56558e]/10 flex items-center justify-center transition">
            {isPlayingHeroVideo ? (
              <Pause className="w-4 h-4 fill-current text-[#1d1d1f] group-hover:text-[#56558e]" />
            ) : (
              <Play className="w-4 h-4 fill-current text-[#1d1d1f] group-hover:text-[#56558e] ml-0.5" />
            )}
          </div>
        </button>

        <div className="px-8 text-[13px] font-mono text-[#6e6e73] font-medium">
          1:19
        </div>
      </div>
    </section>
  )
}
