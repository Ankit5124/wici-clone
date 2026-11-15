import React, { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowRight,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react'
import { Turntable } from '@/components/wici/Turntable'
import '@/styles/wici-one.css'

export const Route = createFileRoute('/wici-one')({
  component: WiciOneFullPage,
})

function WiciOneFullPage() {
  // Category tabs for "A whole world of workloads"
  const [activeWorkload, setActiveWorkload] = useState<'ai' | 'games' | 'creative' | '3d'>('ai')

  // Persona tabs for "For local AI builders..."
  const [activePersona, setActivePersona] = useState<number>(0)

  // Benchmark tabs
  const [activeBenchTab, setActiveBenchTab] = useState<'llm' | 'image' | 'gaming' | 'creative' | '3d'>('llm')

  // Carousel index for "Fast. Local. Personal."
  const [carouselIndex, setCarouselIndex] = useState<number>(0)

  // Email discount form
  const [emailInput, setEmailInput] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const carouselCards = [
    {
      id: 1,
      title: 'Pay once. Use a lot.',
      desc: 'One GPU, shared by every device at home: a local model on the laptop, a 4K edit on the tablet, a voice assistant in the kitchen, all on the same box.',
      img: '/images/product/feature-cost.webp',
      badge: 'Shared GPU',
    },
    {
      id: 2,
      title: 'Your data, your walls.',
      desc: 'No continuous uploading of private photos, audio, or video streams to distant cloud datacenters. Everything stays inside your home network.',
      img: '/images/product/feature-privacy.webp',
      badge: 'Privacy first',
    },
    {
      id: 3,
      title: 'Real-time, by design.',
      desc: 'Sub-2ms round-trip latency over local Wi-Fi 7 with packet pipelining makes remote GPU execution feel indistinguishable from internal PCIe.',
      img: '/images/product/feature-fast.webp',
      badge: 'Wi-Fi 7',
    },
    {
      id: 4,
      title: 'Light devices. Long battery.',
      desc: 'Keep laptops cool and quiet with maximum battery life while running 70B+ LLM inference and heavy 3D rendering without thermal throttling.',
      img: '/images/product/feature-mobility.webp',
      badge: 'Zero heat',
    },
  ]

  const personas = [
    {
      id: 'local-ai',
      label: 'Local AI builders',
      title: 'For local AI builders.',
      body: 'Run trillion-parameter models on hardware you already own. Attach WiCi One as a virtual GPU driver, build with optimized multimodal inference on the WiCi SDK, or call its API endpoint. Private and real-time, over Wi-Fi.',
      linkText: 'Deep dive: Running 800B models with InferSSD →',
      linkUrl: '/wici-infer',
    },
    {
      id: 'ai-apps',
      label: 'AI apps',
      title: 'For AI application developers.',
      body: 'Integrate native local acceleration into desktop and mobile software. With drop-in OpenAI-compatible endpoints, repoint your client base URL to wici-one.local and deploy with zero cloud costs.',
      linkText: 'Explore developer tools →',
      linkUrl: '/technology#docs',
    },
    {
      id: 'voice-ai',
      label: 'Voice AI',
      title: 'For real-time voice & agents.',
      body: 'Deliver human-conversational response times under 200 ms. WiCi speculative gating predicts answers during continuous audio streaming rather than waiting for end-of-sentence pauses.',
      linkText: 'Read: Answering Is Not Buzzing →',
      linkUrl: '/technology#realtime',
    },
    {
      id: 'gamers',
      label: 'Gamers',
      title: 'For wireless high-FPS gaming.',
      body: 'Transform ultrabooks and handheld consoles into desktop-class gaming rigs. Run Cyberpunk 2077 and Black Myth: Wukong at 4K resolution with ray tracing over ultra-low-latency Wi-Fi 7.',
      linkText: 'Explore benchmarks →',
      linkUrl: '#benchmarks',
    },
    {
      id: '3d-creators',
      label: '3D creators',
      title: 'For 3D artists & engineers.',
      body: 'Render complex Blender Cycles scenes, manipulate massive CAD assemblies, and compile Unreal Engine 5 shaders without heating up your workstation or freezing your UI.',
      linkText: 'View 3D performance →',
      linkUrl: '#benchmarks',
    },
    {
      id: 'creative-artists',
      label: 'Creative artists',
      title: 'For video editors & creators.',
      body: 'Export 4K Premiere Pro and DaVinci Resolve timelines at full GPU hardware encoding speed. Color grade and preview real-time effects on your iPad or laptop anywhere in your studio.',
      linkText: 'Explore creative workflows →',
      linkUrl: '/solutions/creative-production',
    },
  ]

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput) return
    setEmailSubmitted(true)
  }

  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#56558e] selection:text-white pt-16">
      {/* =========================================================================
          1. Hero Section (Screenshot 1: media_1794675608915_050d13ef.jpg)
          ========================================================================= */}
      <section className="relative w-full bg-[#09090b] text-white overflow-hidden" id="overview">
        {/* Top Announcement Bar */}
        <div className="w-full bg-[#18181b]/90 border-b border-white/10 py-2.5 px-6 text-center text-xs sm:text-sm font-medium text-white/90 z-20 relative">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="font-semibold text-white">First reveal of WiCi One</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80">New York, Oct 2026</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <a
              href="#explainer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white text-xs font-semibold transition"
            >
              Watch the recap <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Full-Bleed Desk Photograph Background */}
        <div className="relative w-full h-[540px] sm:h-[640px] lg:h-[720px]">
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(max-width: 720px)"
              srcSet="/images/product/hero-device-desk-portrait-760.webp 760w, /images/product/hero-device-desk-portrait-941.webp 941w"
              sizes="100vw"
            />
            <img
              src="/images/product/hero-device-desk-2560.webp"
              srcSet="/images/product/hero-device-desk-1600.webp 1600w, /images/product/hero-device-desk-2560.webp 2560w, /images/product/hero-device-desk-4096.webp 4096w"
              sizes="100vw"
              alt="WiCi One on a walnut desk in afternoon light, beside a monitor running a video editor."
              className="w-full h-full object-cover object-center lg:object-right"
              fetchPriority="high"
            />
          </picture>

          {/* Gradient Overlay for Copy Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* Text Overlay on Left */}
          <div className="relative max-w-[1400px] mx-auto h-full px-6 sm:px-12 flex flex-col justify-center z-10">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-[0.15em] text-[#c0bfe4] font-semibold mb-4">
                WiCi One
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
                Untethered <br />
                GPU Power
              </h1>
              <p className="text-base sm:text-xl text-white/85 leading-relaxed font-normal max-w-lg mb-8">
                WiCi One, the first wireless GPU, equips your phones, laptops, and future AI devices with the best GPU over Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Pill Overlay (Bottom Center matching Screenshot 1) */}
      <a href="#signup" className="wici-floating-pill">
        <span>Get WiCi One updates</span>
        <span className="w-2 h-2 rounded-full bg-[#56558e] animate-pulse"></span>
      </a>

      {/* =========================================================================
          2. Credits & Quick Buy Card (Screenshot 2: media_1794676453668_42a4bcca.jpg)
          ========================================================================= */}
      <section className="bg-white py-8 border-b border-[#d2d2d7]/50" id="buy-ribbon">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Top Badges (NVIDIA & CES) */}
          <div className="flex items-center justify-center gap-8 sm:gap-14 py-4 mb-6 text-xs text-[#6e6e73]">
            <div className="flex items-center gap-3">
              <img src="/nvidia-inception.webp" alt="NVIDIA Inception" className="h-6 w-auto object-contain" />
              <span className="uppercase font-semibold tracking-wider text-[11px] text-[#1d1d1f]">
                In Partnership with NVIDIA
              </span>
            </div>
            <div className="h-4 w-[1px] bg-[#d2d2d7]" />
            <div className="flex items-center gap-3">
              <img src="/ces-innovation-honoree-2027-160.webp" alt="CES 2027" className="h-7 w-auto object-contain" />
              <span className="uppercase font-semibold tracking-wider text-[11px] text-[#1d1d1f]">
                CES Innovation Awards 2027
              </span>
            </div>
          </div>

          {/* Dark Merged Buy Card */}
          <div className="qc-card p-8 sm:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
                WiCi One: <em className="not-italic text-[#c0bfe4]">The First Wireless GPU</em>
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Run local AI models, 4K video edits, and 3D renders from your phone or laptop. Developers can power any device with the Driver, SDK, or API.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <div className="flex items-baseline gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">From $3,499</span>
                <a
                  href="#editions"
                  className="px-6 py-2.5 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition inline-flex items-center gap-1.5 shadow-lg"
                >
                  Buy <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-white/60">
                Ships in 8 weeks. <a href="#editions" className="underline hover:text-white">Shipping, returns, and warranty</a>.
              </p>
              <a href="#signup" className="text-xs text-[#c0bfe4] hover:text-white transition font-medium">
                Get a signup discount and updates <strong>by email &gt;</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Subnav Bar */}
      <div className="wici-subnav py-3 px-6 hidden sm:block">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-sm">
          <span className="font-semibold text-[#1d1d1f]">WiCi One</span>
          <div className="flex items-center gap-6">
            <span className="text-[#6e6e73]">From $3,499</span>
            <a
              href="#editions"
              className="px-5 py-1.5 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white text-xs font-semibold transition"
            >
              Buy
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. The Big Idea (Screenshot 3: media_1794676463903_d2ac582b.jpg)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f]" id="idea">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#56558e] block mb-3">
            THE BIG IDEA
          </span>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#1d1d1f] mb-6">
            Let the GPU come to you.
          </h2>
          <p className="text-lg sm:text-xl text-[#3a3a3c] leading-relaxed max-w-3xl mx-auto mb-14">
            Introducing WiCi One, a desktop-class GPU for your phone, tablet, or laptop. Our proprietary wireless computing technology delivers it over Wi-Fi, so{' '}
            <strong className="font-semibold text-[#1d1d1f] bg-[#e8e8f2] px-1.5 py-0.5 rounded">
              the apps you already use, from local AI models to 3D rendering and 4K video editing
            </strong>
            , run in real time on your own hardware, connected to a wireless GPU. Not remote play or a remote connection.
          </p>

          {/* 3D Exploded / Turning Video Preview */}
          <div className="relative rounded-3xl overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7]/80 max-w-4xl mx-auto shadow-2xl aspect-[16/9] flex items-center justify-center">
            <Turntable
              alt="WiCi One drawn apart and turning, showing its internal assembly"
              className="w-[86%] max-w-[760px] -mt-6 drop-shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#6e6e73] font-mono">
              <span className="line-through">Device-only.</span>
              <span className="line-through">Cloud-only.</span>
              <span className="text-[#56558e] font-bold text-sm">Nearby.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Fast. Local. Personal. Carousel (Screenshot 5: media_1794676494482_cee43895.jpg)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f] border-t border-[#d2d2d7]/50" id="cards">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f]">
              Fast. Local. Personal.
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : carouselCards.length - 1))}
                className="w-10 h-10 rounded-full border border-[#d2d2d7] hover:border-[#56558e] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev < carouselCards.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-[#d2d2d7] hover:border-[#56558e] flex items-center justify-center text-[#1d1d1f] transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselCards.map((card, idx) => (
              <div
                key={card.id}
                className={`flex flex-col rounded-3xl overflow-hidden border transition duration-300 ${
                  carouselIndex === idx ? 'border-[#56558e] ring-2 ring-[#56558e]/20 shadow-xl' : 'border-[#d2d2d7]/70 shadow-sm'
                }`}
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#ebebed]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-[#1d1d1f]">
                    {card.badge}
                  </span>
                </div>
                <div className="p-6 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Your apps and data stay on your device (Screenshot 6: media_1794676503588_8e8ff982.jpg)
          ========================================================================= */}
      <section className="py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="device-contrast">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#d2d2d7]">
            <p className="text-sm text-[#6e6e73] max-w-2xl leading-relaxed">
              <strong className="text-[#1d1d1f]">Pay once. Use a lot.</strong> One GPU, shared by every device at home: a local model on the laptop, a 4K edit on the tablet, a voice assistant in the kitchen, all on the same box. Nobody buys a new laptop or phone just for the GPU.
            </p>
            <a href="#editions" className="inline-flex items-center gap-1 text-sm font-semibold text-[#56558e] hover:underline shrink-0">
              See editions &gt;
            </a>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Your apps and data <span className="text-[#56558e]">stay on your device.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] mb-6">
              Your apps run on your own laptop, tablet, or phone, and WiCi One does the GPU work for them over Wi-Fi.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-semibold text-[#1d1d1f]">
                Not remote desktop.
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-semibold text-[#1d1d1f]">
                Not a cloud service.
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-semibold text-[#1d1d1f]">
                Not another PC you log into.
              </span>
            </div>
          </div>

          {/* WiCi One vs Remote Cards Row */}
          <div className="bg-[#56558e]/10 rounded-[32px] p-6 sm:p-10 border border-[#56558e]/20">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-md bg-[#56558e] text-white text-xs font-mono font-bold uppercase tracking-wider">
                WICI ONE
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="p-5 rounded-2xl bg-[#56558e] text-white flex flex-col gap-2">
                <span className="text-xs font-bold text-[#c0bfe4] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Native
                </span>
                <span className="text-sm font-semibold">Apps run on your own device</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#56558e] text-white flex flex-col gap-2">
                <span className="text-xs font-bold text-[#c0bfe4] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Private
                </span>
                <span className="text-sm font-semibold">Your data stays on your own device</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#56558e] text-white flex flex-col gap-2">
                <span className="text-xs font-bold text-[#c0bfe4] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Offload
                </span>
                <span className="text-sm font-semibold">WiCi One does only the GPU work</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#56558e] text-white flex flex-col gap-2">
                <span className="text-xs font-bold text-[#c0bfe4] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Wi-Fi 7
                </span>
                <span className="text-sm font-semibold">GPU commands and results travel over Wi-Fi</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#56558e] text-white flex flex-col gap-2">
                <span className="text-xs font-bold text-[#c0bfe4] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Invisible
                </span>
                <span className="text-sm font-semibold">To your apps, it&apos;s simply a GPU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. A whole world of workloads (Screenshot 7: media_1794676512796_78eb0fca.jpg)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f]" id="apps">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-6">
                A whole world of workloads.
              </h2>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Works with the apps <span className="text-[#56558e]">on your own device.</span>
              </h3>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-4">
                Not remote play, not a connection to another PC, just a wireless GPU.
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                If an app can use a GPU, it can use WiCi One with no changes needed: Driver mode shows up as a standard local GPU. AI apps can call the API endpoint, or build on the SDK, optimized for real-time processing.
              </p>
              <Link to="/technology" hash="docs" className="text-sm font-semibold text-[#56558e] hover:underline inline-flex items-center gap-1">
                Read our developer section →
              </Link>
            </div>

            {/* Tabs & App Grid */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 mb-8 border-b border-[#d2d2d7] pb-3 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveWorkload('ai')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition ${
                    activeWorkload === 'ai' ? 'border-[#56558e] text-[#56558e]' : 'border-transparent text-[#6e6e73]'
                  }`}
                >
                  AI &amp; local models
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWorkload('games')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition ${
                    activeWorkload === 'games' ? 'border-[#56558e] text-[#56558e]' : 'border-transparent text-[#6e6e73]'
                  }`}
                >
                  Games
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWorkload('creative')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition ${
                    activeWorkload === 'creative' ? 'border-[#56558e] text-[#56558e]' : 'border-transparent text-[#6e6e73]'
                  }`}
                >
                  Creative editing
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWorkload('3d')}
                  className={`text-sm font-semibold pb-2 border-b-2 transition ${
                    activeWorkload === '3d' ? 'border-[#56558e] text-[#56558e]' : 'border-transparent text-[#6e6e73]'
                  }`}
                >
                  3D &amp; creation
                </button>
              </div>

              {/* Real App Icons Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center font-bold text-lg">🦙</div>
                  <span className="text-xs font-medium">Ollama</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white shadow flex items-center justify-center font-bold text-lg">LM</div>
                  <span className="text-xs font-medium">LM Studio</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 shadow flex items-center justify-center font-bold text-lg">🤗</div>
                  <span className="text-xs font-medium">Hugging Face</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 text-white shadow flex items-center justify-center font-bold text-lg">🔥</div>
                  <span className="text-xs font-medium">PyTorch</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white shadow flex items-center justify-center font-bold text-lg">C</div>
                  <span className="text-xs font-medium">ComfyUI</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white shadow flex items-center justify-center font-bold text-lg">OI</div>
                  <span className="text-xs font-medium">Open WebUI</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-amber-800 text-white shadow flex items-center justify-center font-bold text-xs">悟空</div>
                  <span className="text-xs font-medium">Wukong</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-yellow-300 text-black shadow flex items-center justify-center font-bold text-xs">2077</div>
                  <span className="text-xs font-medium">Cyberpunk</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white shadow flex items-center justify-center font-bold text-lg">🎨</div>
                  <span className="text-xs font-medium">Blender</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white shadow flex items-center justify-center font-bold text-lg">A</div>
                  <span className="text-xs font-medium">AutoCAD</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-black text-white shadow flex items-center justify-center font-bold text-lg">U</div>
                  <span className="text-xs font-medium">Unreal</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-purple-900 text-white shadow flex items-center justify-center font-bold text-xs">Pr</div>
                  <span className="text-xs font-medium">Premiere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. Persona Tabs (Screenshot 8: media_1794676527157_58e37dae.png)
          ========================================================================= */}
      <section className="py-16 bg-[#f5f5f7] border-y border-[#d2d2d7]/60" id="personas">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Persona Selection Pills */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap mb-10">
            {personas.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePersona(idx)}
                className={`wici-tab-btn ${activePersona === idx ? 'is-active shadow-md' : ''}`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active Persona Details Card */}
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white border border-[#d2d2d7] shadow-xl">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">{personas[activePersona].title}</h3>
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed mb-6">
              {personas[activePersona].body}
            </p>
            <Link
              to={personas[activePersona].linkUrl}
              className="text-sm font-semibold text-[#56558e] hover:text-[#1d1d1f] transition inline-flex items-center gap-1"
            >
              {personas[activePersona].linkText}
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. Benchmarks (Screenshot 9: media_1794676538045_eefbdec1.png)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f]" id="performance">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#56558e] block mb-2">
              BENCHMARKS
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Wireless doesn&apos;t <span className="text-[#56558e]">mean slow.</span>
            </h2>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              WiCi One sends less data over the network, and waits on it less.
            </p>
          </div>

          {/* 3 Giant Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-[#d2d2d7]">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-[#1d1d1f] tracking-tight">90</span>
                <span className="text-xl font-semibold text-[#6e6e73]">fps</span>
              </div>
              <p className="text-sm text-[#6e6e73] mt-2">Premiere Pro · 4K export</p>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-[#1d1d1f] tracking-tight">500+</span>
                <span className="text-xl font-semibold text-[#6e6e73]">tok/s</span>
              </div>
              <p className="text-sm text-[#6e6e73] mt-2">Gemma 4 · 26B</p>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-[#1d1d1f] tracking-tight">6,000</span>
                <span className="text-xl font-semibold text-[#6e6e73]">samples/min</span>
              </div>
              <p className="text-sm text-[#6e6e73] mt-2">Blender Cycles</p>
            </div>
          </div>

          {/* Benchmark Table with Left Callout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
                Minimum overhead, <span className="text-[#56558e]">strong performance.</span>
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                The WiCi Protocol cuts network waiting 10×, so wireless serving stays close to local speed.
              </p>
              <Link to="/technology" className="text-sm font-semibold text-[#56558e] hover:underline">
                Explore the technology →
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 text-xs font-semibold text-[#6e6e73] mb-4 pb-2 border-b border-[#d2d2d7] overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveBenchTab('llm')}
                  className={`pb-1 ${activeBenchTab === 'llm' ? 'text-[#56558e] font-bold border-b-2 border-[#56558e]' : ''}`}
                >
                  LLM throughput
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setActiveBenchTab('image')}
                  className={`pb-1 ${activeBenchTab === 'image' ? 'text-[#56558e] font-bold border-b-2 border-[#56558e]' : ''}`}
                >
                  Image &amp; video generation
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setActiveBenchTab('gaming')}
                  className={`pb-1 ${activeBenchTab === 'gaming' ? 'text-[#56558e] font-bold border-b-2 border-[#56558e]' : ''}`}
                >
                  Gaming
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setActiveBenchTab('creative')}
                  className={`pb-1 ${activeBenchTab === 'creative' ? 'text-[#56558e] font-bold border-b-2 border-[#56558e]' : ''}`}
                >
                  Creative editing
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setActiveBenchTab('3d')}
                  className={`pb-1 ${activeBenchTab === '3d' ? 'text-[#56558e] font-bold border-b-2 border-[#56558e]' : ''}`}
                >
                  3D rendering
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#d2d2d7] text-xs font-mono uppercase tracking-wider text-[#6e6e73]">
                      <th className="py-3 px-2">BENCHMARK †</th>
                      <th className="py-3 px-2 text-right">5060 TI EDITION</th>
                      <th className="py-3 px-2 text-right font-bold text-[#56558e]">5090 EDITION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0f0f2]">
                    <tr>
                      <td className="py-4 px-2">
                        <strong className="block text-[#1d1d1f]">Kimi K3</strong>
                        <span className="text-xs text-[#6e6e73]">2.8T params MoE</span>
                      </td>
                      <td className="py-4 px-2 text-right font-mono font-medium">2.5 tok/s</td>
                      <td className="py-4 px-2 text-right font-mono font-bold text-[#56558e]">5 tok/s</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">
                        <strong className="block text-[#1d1d1f]">DeepSeek V4.1 Flash</strong>
                        <span className="text-xs text-[#6e6e73]">748B params</span>
                      </td>
                      <td className="py-4 px-2 text-right font-mono font-medium">10 tok/s</td>
                      <td className="py-4 px-2 text-right font-mono font-bold text-[#56558e]">20 tok/s</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">
                        <strong className="block text-[#1d1d1f]">Gemma 4</strong>
                        <span className="text-xs text-[#6e6e73]">26B dense</span>
                      </td>
                      <td className="py-4 px-2 text-right font-mono font-medium">250+ tok/s</td>
                      <td className="py-4 px-2 text-right font-mono font-bold text-[#56558e]">500+ tok/s</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">
                        <strong className="block text-[#1d1d1f]">Llama 3.3</strong>
                        <span className="text-xs text-[#6e6e73]">70B instruct</span>
                      </td>
                      <td className="py-4 px-2 text-right font-mono font-medium">45 tok/s</td>
                      <td className="py-4 px-2 text-right font-mono font-bold text-[#56558e]">90 tok/s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. Head-to-Head Compare Matrix (Screenshots 10 & 11)
          ========================================================================= */}
      <section className="py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="specs">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#56558e] block mb-2">
              COMPARE
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#1d1d1f]">
              Compute, memory, and work.
            </h2>
          </div>

          <div className="bg-white rounded-[32px] border border-[#d2d2d7] shadow-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="py-6 px-6 w-1/4"></th>
                  <th className="py-6 px-6 w-1/4 wici-col-highlight">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#56558e]">WICI ONE</span>
                      <img src="/logo-lockup.svg" alt="WiCi" className="h-4 w-auto object-contain" />
                    </div>
                  </th>
                  <th className="py-6 px-6 w-1/4 text-xs font-mono font-bold uppercase tracking-wider text-[#6e6e73]">
                    POCKET AI BOXES ³
                  </th>
                  <th className="py-6 px-6 w-1/4 text-xs font-mono font-bold uppercase tracking-wider text-[#6e6e73]">
                    MAC STUDIO M5 MAX
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f2] text-sm">
                <tr>
                  <th className="py-6 px-6 font-semibold text-[#1d1d1f]">
                    AI compute
                    <span className="block text-xs font-normal text-[#6e6e73]">dense FP16 TFLOPS ¹</span>
                  </th>
                  <td className="py-6 px-6 wici-col-highlight">
                    <span className="text-3xl font-bold text-[#56558e] block">10×</span>
                    <span className="text-xs text-[#6e6e73]">~420 on the 5090 edition; ~95 on the 5060 Ti (2.4×)</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">1×</span>
                    <span className="text-xs text-[#6e6e73]">~40, estimated from 160 to 275 INT8 TOPS ¹</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">1.8×</span>
                    <span className="text-xs text-[#6e6e73]">~70</span>
                  </td>
                </tr>
                <tr>
                  <th className="py-6 px-6 font-semibold text-[#1d1d1f]">Memory for models</th>
                  <td className="py-6 px-6 wici-col-highlight">
                    <span className="text-3xl font-bold text-[#56558e] block">50×</span>
                    <span className="text-xs text-[#6e6e73]">Up to 4 TB NVMe weight paging (TurboStream)</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">1×</span>
                    <span className="text-xs text-[#6e6e73]">64 to 80 GB LPDDR5</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">0.5×</span>
                    <span className="text-xs text-[#6e6e73]">36 GB unified, up to 128 GB</span>
                  </td>
                </tr>
                <tr>
                  <th className="py-6 px-6 font-semibold text-[#1d1d1f]">Largest model</th>
                  <td className="py-6 px-6 wici-col-highlight">
                    <span className="text-3xl font-bold text-[#56558e] block">23×</span>
                    <span className="text-xs text-[#6e6e73]">Kimi K3, 2.8T parameters, measured at 5 tok/s</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">1×</span>
                    <span className="text-xs text-[#6e6e73]">120B parameters, claimed</span>
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-2xl font-semibold text-[#6e6e73] block">0.6×</span>
                    <span className="text-xs text-[#6e6e73]">~70B on 36 GB, estimated ²</span>
                  </td>
                </tr>
                <tr>
                  <th className="py-5 px-6 font-semibold text-[#1d1d1f]">Serves every device as a local GPU over Wi‑Fi</th>
                  <td className="py-5 px-6 wici-col-highlight font-semibold text-[#56558e] flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Yes
                  </td>
                  <td className="py-5 px-6 text-[#6e6e73]">Standalone box</td>
                  <td className="py-5 px-6 text-[#6e6e73]">Standalone Mac</td>
                </tr>
                <tr>
                  <th className="py-5 px-6 font-semibold text-[#1d1d1f]">Creative apps, unmodified</th>
                  <td className="py-5 px-6 wici-col-highlight font-semibold text-[#56558e] flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Yes
                  </td>
                  <td className="py-5 px-6 text-[#6e6e73]">No discrete GPU</td>
                  <td className="py-5 px-6 text-[#6e6e73]">Mac apps only</td>
                </tr>
                <tr>
                  <th className="py-5 px-6 font-semibold text-[#1d1d1f]">Trillion-parameter models</th>
                  <td className="py-5 px-6 wici-col-highlight font-semibold text-[#56558e] flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Yes
                  </td>
                  <td className="py-5 px-6 text-[#6e6e73]">No</td>
                  <td className="py-5 px-6 text-[#6e6e73]">No</td>
                </tr>
                <tr>
                  <th className="py-6 px-6 font-semibold text-[#1d1d1f]">Price</th>
                  <td className="py-6 px-6 wici-col-highlight">
                    <strong className="text-lg text-[#56558e] block">From $3,499</strong>
                    <span className="text-xs text-[#6e6e73]">5060 Ti edition.</span>
                  </td>
                  <td className="py-6 px-6 text-[#6e6e73]">$1,399 to $2,999</td>
                  <td className="py-6 px-6 text-[#6e6e73]">From $2,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. Technical Specifications (Screenshot 12: media_1794676578563_44fa95a7.jpg)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f]" id="tech-specs">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#56558e] block mb-2">
              SPECS
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f]">
              Technical specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-[#1d1d1f] pb-3 border-b border-[#d2d2d7]">
                Wireless AI Computing
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">GPU</span>
                <strong className="text-[#1d1d1f]">NVIDIA RTX 5060 Ti · 16GB GDDR7</strong>
                <span className="text-xs text-[#6e6e73]">5060 Ti edition</span>
                <strong className="text-[#1d1d1f] mt-2">NVIDIA RTX 5090 · 32GB GDDR7</strong>
                <span className="text-xs text-[#6e6e73]">5090 edition</span>
                <span className="text-xs text-[#56558e] mt-1 font-medium">AirCompute GPU sharing</span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#f0f0f2]">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">CPU</span>
                <strong className="text-[#1d1d1f]">Intel Core 3 100U</strong>
                <span className="text-xs text-[#6e6e73]">5060 Ti edition</span>
                <strong className="text-[#1d1d1f] mt-2">Intel Core Ultra 7 255H</strong>
                <span className="text-xs text-[#6e6e73]">5090 edition</span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#f0f0f2]">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">WI-FI</span>
                <strong className="text-[#1d1d1f]">Wi-Fi 7 · 4×4 MIMO · 320MHz</strong>
                <span className="text-xs text-[#6e6e73]">Router-grade AirLink Multi-Link transport</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-[#1d1d1f] pb-3 border-b border-[#d2d2d7]">
                Fully Flexible GPU Runtime
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">DRIVER MODE</span>
                <strong className="text-[#1d1d1f]">WiCi Virtual GPU on macOS, Windows &amp; Linux</strong>
                <span className="text-xs text-[#6e6e73]">ZeroTrip caching &amp; trace replay</span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#f0f0f2]">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">SDK MODE</span>
                <strong className="text-[#1d1d1f]">Python · JavaScript · Swift</strong>
                <span className="text-xs text-[#6e6e73]">Out-of-the-box inference with multimodal support</span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#f0f0f2]">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">API MODE</span>
                <strong className="text-[#1d1d1f]">OpenAI-compatible endpoint</strong>
                <span className="text-xs text-[#6e6e73]">Drop-in for existing clients</span>
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed pt-2">
                WiCi One is fully application-transparent in Driver mode, inference-optimized through the SDK, and OpenAI-compatible in API mode. Whichever path you take, your applications get full computing flexibility.
              </p>
              <Link to="/technology" hash="docs" className="text-xs font-semibold text-[#56558e] hover:underline">
                Build on WiCi →
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-[#1d1d1f] pb-3 border-b border-[#d2d2d7]">
                Unified Hierarchical Memory
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">STORAGE</span>
                <strong className="text-[#1d1d1f]">NVMe 4 · 1TB</strong>
                <span className="text-xs text-[#6e6e73]">5060 Ti edition</span>
                <strong className="text-[#1d1d1f] mt-2">NVMe 5 · 4TB</strong>
                <span className="text-xs text-[#6e6e73]">5090 edition</span>
                <span className="text-xs text-[#56558e] mt-1 font-medium">TurboStream weight paging</span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#f0f0f2]">
                <span className="text-xs font-mono uppercase text-[#6e6e73] font-semibold">LLM</span>
                <strong className="text-[#1d1d1f]">Trillion-parameter models</strong>
                <div className="grid grid-cols-2 gap-1 text-xs text-[#6e6e73] mt-1 font-mono">
                  <span>Kimi K3 (2.8T)</span>
                  <span className="text-right">5 tok/s</span>
                  <span>DeepSeek V4.1</span>
                  <span className="text-right">20 tok/s</span>
                  <span>Gemma 4 (26B)</span>
                  <span className="text-right">500+ tok/s</span>
                </div>
                <span className="text-xs text-[#6e6e73] mt-1">Measured on WiCi One 5090 edition, close to cloud rates of 20-40 tok/s</span>
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed pt-2">
                TurboStream turns up to 4TB of NVMe into working VRAM: trillion-parameter models, no cloud cost required. State-of-the-art research from our systems researchers and engineers, built into WiCi One.
              </p>
              <Link to="/technology" className="text-xs font-semibold text-[#56558e] hover:underline">
                Read more about our technologies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. As Seen In / Press Quotes (Screenshot 13: media_1794676588416_be014b71.jpg)
          ========================================================================= */}
      <section className="py-24 bg-[#f5f5f7] text-[#1d1d1f] border-t border-[#d2d2d7]/60" id="press">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#6e6e73] block mb-4">
            AS SEEN IN
          </span>

          {/* Big Featured Quote */}
          <div className="max-w-4xl mx-auto mb-16">
            <img src="/engadget-logo.svg" alt="Engadget" className="h-8 w-auto mx-auto object-contain mb-6" />
            <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] leading-snug">
              &ldquo;Offers the power of a high-end graphics card over Wi-Fi 7 to any compatible device.&rdquo;
            </h3>
          </div>

          {/* Press Review Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-[#d2d2d7] flex flex-col justify-between">
              <img src="/pcmag-logo.svg" alt="PCMag" className="h-6 w-auto object-contain self-start mb-4" />
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                &ldquo;A dedicated AI inferencing device in your home that a variety of devices can connect to.&rdquo;
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2d2d7] flex flex-col justify-between">
              <img src="/gizmodo-logo.svg" alt="Gizmodo" className="h-5 w-auto object-contain self-start mb-4" />
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                &ldquo;A world where local compute isn&apos;t subordinated to the whims of the tech oligarchs and their pet AI.&rdquo;
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2d2d7] flex flex-col justify-between">
              <img src="/techradar-logo.svg" alt="TechRadar" className="h-5 w-auto object-contain self-start mb-4" />
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                &ldquo;WiCi pushes wireless external graphics beyond conventional eGPU designs.&rdquo;
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2d2d7] flex flex-col justify-between">
              <img src="/tomshardware-logo.svg" alt="Tom's Hardware" className="h-5 w-auto object-contain self-start mb-4" />
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                &ldquo;WiCi took a clever approach and incorporated a 4 TB PCIe 5.0 SSD directly into the enclosure.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. Buy WiCi One (Screenshot 14: media_1794676597796_922f0110.jpg)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#1d1d1f]" id="editions">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Rotatable Turntable Visual */}
            <div className="relative rounded-3xl overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7] px-6 py-16 sm:py-20 flex items-center justify-center">
              <Turntable
                alt="WiCi One drawn apart and turning"
                className="w-full max-w-[520px] drop-shadow-2xl"
              />
            </div>

            {/* Buy / Selection Actions */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
                Buy WiCi One.
              </h2>
              <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
                Choose an RTX 5060 Ti or RTX 5090 edition. Run AI and creative apps over Wi-Fi.
              </p>

              <div className="flex items-center gap-4 flex-wrap mb-10">
                <a
                  href="#signup"
                  className="px-8 py-3.5 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition shadow-lg inline-flex items-center gap-2"
                >
                  Buy WiCi One <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#specs"
                  className="px-6 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#ebebed] text-[#1d1d1f] font-semibold text-sm border border-[#d2d2d7] transition"
                >
                  Compare editions &gt;
                </a>
              </div>

              {/* Email Signup Form */}
              <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]" id="signup">
                <span className="block text-sm font-semibold text-[#1d1d1f] mb-3">
                  Get a signup discount and updates by email.
                </span>
                {emailSubmitted ? (
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold">
                    Thank you! We will email you your early reservation discount code.
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="you@domain.com"
                      required
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#d2d2d7] text-sm text-[#1d1d1f] outline-none focus:border-[#56558e]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#56558e] hover:bg-[#6664a5] text-white font-semibold text-sm transition shrink-0"
                    >
                      Sign Up →
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-[#6e6e73] mt-3">
                  By signing up, you agree to receive WiCi product and marketing emails. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. A wireless GPU runtime for local AI apps (Screenshot 15: media_1794676608783_d00f79a4.jpg)
          ========================================================================= */}
      <section className="wici-runtime-banner py-24 text-white overflow-hidden relative" id="explainer">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10" id="developers">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                A wireless GPU runtime <br />
                for local AI apps.
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                WiCi One is a programmable endpoint on the wireless compute layer: run existing apps unmodified in{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">Driver mode</code>, build with the{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">WiCi SDK</code>, or call it through the{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">API</code>. At every altitude, your app keeps interaction, input, and UI on the device while GPU-bound inference offloads over Wi-Fi, while{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">model caching</code>,{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">streaming</code>, and{' '}
                <code className="px-2 py-0.5 rounded bg-white/20 font-mono text-xs">pipelining</code> keep it real-time.
              </p>
            </div>

            {/* Code window: the SDK path from the copy on the left */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[480px] rounded-2xl overflow-hidden bg-[#13121d] border border-white/15 shadow-2xl text-left">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1926] border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-xs font-mono text-white/50">app.py</span>
                </div>
                <pre className="p-5 sm:p-6 font-mono text-[13px] leading-7 text-white/85 overflow-x-auto">
                  <code>
                    <span className="text-white/40"># Python SDK · WiCi One</span>
                    {'\n'}
                    <span className="text-[#c0bfe4]">import</span> torch
                    {'\n'}
                    <span className="text-[#c0bfe4]">from</span> wici <span className="text-[#c0bfe4]">import</span> WiCi
                    {'\n\n'}
                    gpu = wici.<span className="text-[#7dd3fc]">connect</span>()
                    {'\n'}
                    model.<span className="text-[#7dd3fc]">to</span>(gpu.device)
                    {'\n\n'}
                    <span className="text-white/40"># UI and input stay on your device;</span>
                    {'\n'}
                    <span className="text-white/40"># inference offloads over Wi-Fi.</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* 3 Pillars in Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/20">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Virtual GPU driver</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Attach WiCi One as a virtual GPU, and existing applications run unmodified with full CUDA acceleration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">LLM-optimized SDK</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Build with full control: PyTorch and multimodal inference, local device leasing, and token streaming.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Drop-in API with trillion-parameter support</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Native OpenAI and Ollama compatible endpoints stream frontier LLM tokens straight over local Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
