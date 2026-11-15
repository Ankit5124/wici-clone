import { useState, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import '@/styles/technology.css'

export const Route = createFileRoute('/technology')({
  component: TechnologyPage,
})

function TechnologyPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [building, setBuilding] = useState('')

  const handlePlayToggle = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <main id="top" className="flex flex-col bg-white text-[#1d1d1f] font-sans antialiased pt-16">
      {/* 0. Hero Section */}
      <section className="section dv-hero" id="hero">
        <div className="container max-w-[1200px] mx-auto px-6 dv-hero-row">
          <div className="dv-hero-text">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] mb-3 block">
              WiCi Technologies
            </span>
            <h1 className="dv-hero-title">A nearby GPU built to feel local.</h1>
            <p className="dv-hero-lede">
              WiCi Protocol turns one-hop network compute into a shared GPU layer. Explore the transport, memory, scheduling, and runtime architecture behind WiCi One.
            </p>
            <div className="dv-hero-ctas">
              <a href="#pillars" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1d1f] text-white font-medium hover:bg-[#3a3a3c] transition text-sm">
                <span>Explore the architecture</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <figure className="dv-hero-waves" role="img" aria-label="Three photographs in wave-cut frames: a video editor at a desk with WiCi One beside the monitor, someone working on a laptop and phone at a home desk, and a screen of Python code.">
            <svg className="dv-wave dv-wave--desk" viewBox="0 0 550 346" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="dvWaveDesk">
                  <path d="M0 206.75 L0 19.1173 C0 19.1173 47.1939 -0.00163431 109.819 0 C245.969 0.00355337 325.825 101.251 401.155 146.566 C461.419 182.818 525.495 186.689 550 184.092 L550 344.111 C537.596 346.708 500.264 348.643 450.165 335.615 C387.541 319.33 349.422 299.504 296.782 254.189 C244.142 208.874 166.997 185.509 101.65 184.092 C49.373 182.96 12.1012 198.725 0 206.75 Z" />
                </clipPath>
              </defs>
              <image href="/images/technology/wave-desk-editor-1100.webp" width="550" height="346" preserveAspectRatio="none" clipPath="url(#dvWaveDesk)" />
            </svg>
            <svg className="dv-wave dv-wave--laptop" viewBox="0 0 358 357" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="dvWaveLaptop">
                  <path d="M0 198.567 L0 4.06154 C16.0525 0.996605 56.8802 -3.2943 91.7716 4.06154 C135.386 13.2563 213.528 63.474 255.325 97.424 C288.762 124.584 337.707 142.219 358 147.642 L358 357 C296.213 354.878 241.695 310.319 207.168 277.783 C172.64 245.248 110.853 219.785 81.7766 208.469 C58.5157 199.415 17.5668 198.095 0 198.567 Z" />
                </clipPath>
              </defs>
              <image href="/images/technology/wave-laptop-phone-716.webp" width="358" height="357" preserveAspectRatio="none" clipPath="url(#dvWaveLaptop)" />
            </svg>
            <svg className="dv-wave dv-wave--code" viewBox="0 0 264 248" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="dvWaveCode">
                  <path d="M0 246.122 L0 39.2554 C19.0515 43.5059 78.9278 48.4651 114.309 43.5059 C158.966 37.2468 201.402 13.7512 229.526 5.9583 C252.025 -0.276051 261.883 -0.417741 264 0.290707 L264 180.945 C262.186 180.001 251.843 179.387 224.99 184.487 C191.423 190.863 177.814 202.907 148.784 219.91 C119.753 236.913 98.8866 241.872 65.3196 246.122 C38.466 249.523 10.5842 247.539 0 246.122 Z" />
                </clipPath>
              </defs>
              <image href="/images/technology/wave-code-528.webp" width="264" height="248" preserveAspectRatio="none" clipPath="url(#dvWaveCode)" />
            </svg>
          </figure>
        </div>
        <div className="dv-wire" aria-hidden="true"><span className="dv-wire-line"></span></div>
      </section>

      {/* 1. Quickstart Section */}
      <section className="section dv-quickstart py-12" id="quickstart">
        <div className="container max-w-[1200px] mx-auto px-6">
          <ol className="dv-layers">
            {/* Layer 1: API */}
            <li className="dv-layer">
              <div className="dv-layer-head">
                <span className="dv-layer-tag">API</span>
                <h3 className="dv-layer-title">Use a familiar endpoint.</h3>
              </div>
              <code className="dv-layer-cmd">curl http://wici-one.local/v1/chat/completions</code>
              <p className="dv-layer-note">
                OpenAI- and Ollama-compatible HTTP endpoint. Point your existing tools, apps, and agents at WiCi One by changing the base URL.
              </p>
            </li>

            {/* Layer 2: SDK */}
            <li className="dv-layer">
              <div className="dv-layer-head">
                <span className="dv-layer-tag">SDK</span>
                <h3 className="dv-layer-title">Add discovery and control.</h3>
              </div>
              <code className="dv-layer-cmd">llm = Model.load(&quot;llama-3.1-8b-instruct&quot;, device=wici.gpu)</code>
              <p className="dv-layer-note">
                High-level libraries for Python, Node.js, and Swift. Discover WiCi One over mDNS, verify fingerprints, lease GPU time, and stream tokens.
              </p>
            </li>

            {/* Layer 3: Driver */}
            <li className="dv-layer dv-layer--deep">
              <div className="dv-layer-head">
                <span className="dv-layer-tag">Driver</span>
                <h3 className="dv-layer-title">Connect existing GPU workloads.</h3>
              </div>
              <code className="dv-layer-cmd">
                wici gpu attach <span className="c"># a GPU-shaped device appears</span>
              </code>
              <p className="dv-layer-note">
                System-level virtual GPU device for CUDA and direct tensor operations. Existing models and frameworks run without code modifications.
              </p>
            </li>
          </ol>
          <p className="dv-layers-foot mt-4">
            <span aria-hidden="true">↓</span> Each layer connects to the same GPU and shared model cache.
          </p>
        </div>
      </section>

      {/* 2. Pillars Section */}
      <section className="section section--tint dv-pillars py-20 bg-[#f5f5f7]" id="pillars">
        <div className="container max-w-[1200px] mx-auto px-6">
          {/* Tech Explainer Video */}
          <figure className="dv-film relative rounded-3xl overflow-hidden bg-black mb-8 aspect-video max-w-4xl mx-auto shadow-xl">
            <video
              ref={videoRef}
              playsInline
              preload="none"
              poster="/images/product/film-explainer-poster.webp"
              className="w-full h-full object-cover"
              aria-label="The WiCi One tech explainer: how an application reaches the GPU through the Driver, the SDK, or the API"
            >
              <source src="https://cdn.wici.ai/video/film-explainer-full-av1.mp4" type="video/mp4; codecs=av01.0.08M.08" />
              <source src="https://cdn.wici.ai/video/film-explainer-full-h264.mp4" type="video/mp4; codecs=avc1.640028" />
            </video>
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayToggle}
                className="film-play absolute inset-0 m-auto w-fit h-fit flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-black/90 transition shadow-2xl"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4.5 2.8v10.4L13 8z" fill="currentColor" />
                </svg>
                <span>Watch how it works</span>
                <span className="film-play-time text-xs opacity-75 font-mono">1:33</span>
              </button>
            )}
          </figure>

          {/* 6 Pillars Grid */}
          <ol className="dv-pillar-grid">
            <li className="dv-pillar">
              <a href="#thesis" className="block h-full">
                <h3 className="dv-pillar-name">01 · Compute, close by</h3>
                <p>Frontier GPUs take 575 W and 3.0 kg. Why one-hop wireless compute is the physical answer for personal devices.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="dv-pillar">
              <a href="#latency" className="block h-full">
                <h3 className="dv-pillar-name">02 · Fast over Wi-Fi</h3>
                <p>How WiCi cuts round-trip stalls by 483× and matches PCIe responsiveness over standard Wi-Fi 6 and Wi-Fi 7.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="dv-pillar">
              <a href="#capacity" className="block h-full">
                <h3 className="dv-pillar-name">03 · Run bigger models</h3>
                <p>The SSD is the new VRAM: dynamic weight streaming allows 750B+ MoE models on local workstations.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="dv-pillar">
              <a href="#sharing" className="block h-full">
                <h3 className="dv-pillar-name">04 · Share one GPU</h3>
                <p>Multi-tenant scheduling with priority leasing: latency-critical interactive tasks preempt background batch jobs.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="dv-pillar">
              <a href="#realtime" className="block h-full">
                <h3 className="dv-pillar-name">05 · Built for real time</h3>
                <p>Sub-millisecond audio turn-taking with a trained 0.02 ms gating classifier for human-natural voice response.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
            <li className="dv-pillar">
              <a href="#compat" className="block h-full">
                <h3 className="dv-pillar-name">06 · Works with your stack</h3>
                <p>Drop-in compatibility with PyTorch, CUDA, vLLM, and Ollama through virtualized drivers and standard APIs.</p>
                <span className="dv-pillar-go" aria-hidden="true">↓</span>
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Thesis Section (Compute Close By) */}
      <section className="section section--dark dv-thesis py-24 bg-[#56558e] text-white" id="thesis">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#c0bfe4] block mb-2">
              01 · The Physical Argument
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Compute, <em>close by.</em>
            </h2>
            <p className="section-subtitle text-lg text-white/80 leading-relaxed">
              Flagship desktop GPUs draw 575 W and weigh 3.0 kg. They cannot live inside a pocket phone, ultraportable laptop, or AR headset.
            </p>
          </div>

          <div className="dv-ledger mb-12">
            <div className="dv-ledger-col">
              <span className="dv-ledger-name">Flagship Desktop GPU</span>
              <span className="dv-ledger-line">575 W peak board power draw</span>
              <span className="dv-ledger-line">~3.0 kg mass with high-capacity cooling</span>
              <span className="dv-ledger-line">High-bandwidth GDDR7 VRAM subsystem</span>
              <span className="dv-ledger-verdict">Cannot fit inside portable devices</span>
            </div>
            <div className="dv-ledger-col">
              <span className="dv-ledger-name">Smartphone / Laptop</span>
              <span className="dv-ledger-line">~5 W sustained thermal dissipation budget</span>
              <span className="dv-ledger-line">~227 g total device weight ceiling</span>
              <span className="dv-ledger-line">Shared low-power unified LPDDR memory</span>
              <span className="dv-ledger-verdict">Limited to small compressed edge models</span>
            </div>
          </div>

          <ol className="dv-chain" aria-label="The argument, in four steps">
            <li className="dv-chain-step">
              <span className="dv-chain-num">1</span>
              <strong>AI is becoming personal.</strong>
              <p>Continuous multimodal inference, personal context indexing, and realtime spatial reasoning require frontier-grade compute.</p>
            </li>
            <li className="dv-chain-step">
              <span className="dv-chain-num">2</span>
              <strong>Cloud round trips break human interaction.</strong>
              <p>Streaming high-resolution video and audio to remote datacenters introduces 150–300 ms WAN latency, bandwidth costs, and privacy exposure.</p>
            </li>
            <li className="dv-chain-step">
              <span className="dv-chain-num">3</span>
              <strong>The GPU cannot follow every device.</strong>
              <p>Thermodynamics prevents high-wattage frontier silicon from operating inside thin mobile shells without burning hands or exhausting batteries in minutes.</p>
            </li>
            <li className="dv-chain-step is-glow">
              <span className="dv-chain-num">4</span>
              <strong>WiCi keeps it one hop away.</strong>
              <p>A dedicated desktop GPU plugged into wall power in the room, shared wirelessly across all personal devices over local Wi-Fi.</p>
            </li>
          </ol>

          <div className="mt-8">
            <a className="dv-post-link dv-post-link--dark inline-flex items-center gap-2 text-sm text-[#c0bfe4] hover:text-white transition" href="#thesis">
              Read: Move the GPU Out. Keep It Local. <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Latency Section (Fast over Wi-Fi) */}
      <section className="section dv-latency py-24 bg-white text-[#1d1d1f]" id="latency">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              02 · Transport &amp; Latency
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Fast over Wi-Fi.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed">
              Standard GPU drivers make over 20,000 internal calls per inference pass. Naively remoting them over a 1.5 ms Wi-Fi round-trip causes seconds of blocking stalls.
            </p>
          </div>

          <div className="dv-equation">
            <code>
              T_total = N_calls × (RTT_network + T_exec) <span className="text-[#c0bfe4]">⇒ Collapsed via Pipelining</span>
            </code>
            <p className="dv-eq-note mt-3 text-xs text-white/60">
              WiCi batches, encodes, and deduplicates GPU commands to collapse 800 blocking round trips into under 10.
            </p>
          </div>

          <div className="dv-collapse">
            <div className="dv-collapse-row">
              <span className="dv-collapse-label">Naive remote</span>
              <div className="dv-collapse-bar" style={{ width: '100%' }}></div>
              <span className="dv-collapse-val">800 round trips (~1,200 ms network stalls)</span>
            </div>
            <div className="dv-collapse-row">
              <span className="dv-collapse-label text-[#56558e] font-semibold">WiCi Protocol</span>
              <div className="dv-collapse-bar dv-collapse-bar--accent" style={{ width: '3.2%' }}></div>
              <span className="dv-collapse-val text-[#56558e] font-semibold">&lt;10 round trips (&lt;15 ms total transit overhead)</span>
            </div>
          </div>

          <div className="dv-stat-row">
            <div className="dv-stat">
              <span className="dv-stat-num">483×</span>
              <span className="dv-stat-label">Fewer blocking round trips during active model execution</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-num">~1.5 ms</span>
              <span className="dv-stat-label">Measured one-hop local network round-trip ping time</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-num">10×</span>
              <span className="dv-stat-label">Reduction in synchronous execution synchronization stalls</span>
            </div>
          </div>

          <div className="mt-8">
            <a className="dv-post-link inline-flex items-center gap-2 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium" href="#latency">
              Read: Making a Nearby GPU Feel Local <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Capacity Section (Run bigger models) */}
      <section className="section section--tint dv-capacity py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="capacity">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              03 · Memory Architecture
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Run bigger models.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed">
              Frontier Mixture-of-Experts architectures activate only 5–10% of their parameters per token. WiCi InferSSD dynamically streams active expert weights directly from high-speed NVMe.
            </p>
          </div>

          <div className="dv-tiers">
            <div className="dv-tier">
              <span className="dv-tier-name">Device VRAM (8–16 GB)</span>
              <span className="dv-tier-meta">Runs 3B–8B edge models</span>
            </div>
            <div className="dv-tier">
              <span className="dv-tier-name">Desktop GPU (24–32 GB)</span>
              <span className="dv-tier-meta">Runs 32B–70B dense models</span>
            </div>
            <div className="dv-tier dv-tier--accent">
              <span className="dv-tier-name">WiCi InferSSD (256 GB+ NVMe)</span>
              <span className="dv-tier-meta font-semibold text-[#56558e]">Runs 750B+ MoE models (GLM-5.2, DeepSeek-V4-Pro)</span>
            </div>
          </div>

          <div className="dv-arith">
            <div className="dv-arith-cap">Inference streaming arithmetic</div>
            <table className="dv-arith-table">
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">Weight Footprint</th>
                  <th scope="col">Active Per Token</th>
                  <th scope="col">NVMe Read Rate</th>
                  <th scope="col">Token Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GLM-5.2 (753B)</td>
                  <td>330 GB (4-bit)</td>
                  <td>18.2 GB</td>
                  <td>14.9 GB/s</td>
                  <td>~18.4 tok/s</td>
                </tr>
                <tr>
                  <td>DeepSeek-V4-Pro (1.6T)</td>
                  <td>680 GB (4-bit)</td>
                  <td>24.5 GB</td>
                  <td>14.9 GB/s</td>
                  <td>~14.1 tok/s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <a className="dv-post-link inline-flex items-center gap-1.5 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium" href="#capacity">
              Read: The SSD Is the New VRAM <span aria-hidden="true">→</span>
            </a>
            <Link to="/wici-infer" className="dv-post-link inline-flex items-center gap-1.5 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium">
              InferSSD, the open-source engine <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sharing Section (Share one GPU) */}
      <section className="section section--dark dv-sharing py-24 bg-[#56558e] text-white" id="sharing">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#c0bfe4] block mb-2">
              04 · Scheduling &amp; Multi-Tenancy
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Share one GPU.
            </h2>
            <p className="section-subtitle text-lg text-white/80 leading-relaxed">
              Standard GPUs are batch coprocessors that lock memory for one process at a time. WiCi implements dynamic time and space multi-tenant leasing.
            </p>
          </div>

          <div className="dv-contrast">
            <div className="dv-contrast-panel">
              <h3 className="dv-contrast-title">Monolithic VRAM Allocation</h3>
              <p>One single client claims the full 24 GB of VRAM. Other programs either crash with CUDA out-of-memory errors or stall until execution completes.</p>
            </div>
            <div className="dv-contrast-panel dv-contrast-panel--accent">
              <h3 className="dv-contrast-title">Dynamic Priority Leasing</h3>
              <p>WiCi maintains shared base weights permanently resident in cache while allocating isolated KV-cache and execution windows dynamically per tenant.</p>
            </div>
          </div>

          <div className="dv-vram">
            <ul className="dv-vram-tenants">
              <li className="dv-vram-tenant">
                <strong>iPhone (Voice Agent)</strong>
                <span>Interactive Priority (p99 &lt; 20ms)</span>
              </li>
              <li className="dv-vram-tenant">
                <strong>MacBook (IDE Copilot)</strong>
                <span>Interactive Priority</span>
              </li>
              <li className="dv-vram-tenant">
                <strong>Smart Home (Vision Index)</strong>
                <span>Background Priority</span>
              </li>
            </ul>

            <div className="dv-vram-bar">
              <span className="dv-vram-seg dv-vram-seg--weights" style={{ flex: '0 0 65%' }}>
                Shared Weights (65%)
              </span>
              <span className="dv-vram-seg dv-vram-seg--kv" style={{ flex: '0 0 15%' }}>
                KV Cache · Phone
              </span>
              <span className="dv-vram-seg dv-vram-seg--kv" style={{ flex: '0 0 10%' }}>
                KV · Laptop
              </span>
              <span className="dv-vram-seg dv-vram-seg--free" style={{ flex: '0 0 10%' }}>
                Free
              </span>
            </div>
            <p className="dv-vram-caption text-xs text-white/60">
              One shared model pool in memory serves multiple devices simultaneously without duplicate model loading.
            </p>
          </div>

          <div className="mt-8">
            <a className="dv-post-link dv-post-link--dark inline-flex items-center gap-2 text-sm text-[#c0bfe4] hover:text-white transition" href="#sharing">
              Read: The GPU Never Learned to Share <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Realtime Section (Built for real time) */}
      <section className="section dv-realtime py-24 bg-white text-[#1d1d1f]" id="realtime">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              05 · Sub-Millisecond Turn-Taking
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Built for real time.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed">
              Human conversation relies on a 200 ms response gap. Waiting for complete speech transcription before prompting an LLM creates unnatural pauses.
            </p>
          </div>

          <div className="dv-ruler">
            <div className="dv-ruler-track">
              <div className="dv-ruler-flag dv-ruler-flag--wici" style={{ left: '51.6%' }}>
                <span className="dv-ruler-flag-label">WiCi Buzz (51.6%)</span>
              </div>
              <div className="dv-ruler-flag" style={{ left: '63.0%' }}>
                <span className="dv-ruler-flag-label">Human Buzz (~63%)</span>
              </div>
            </div>
            <div className="dv-ruler-ends">
              <span>0% (Question Starts)</span>
              <span>100% (Question Finishes)</span>
            </div>
          </div>

          <div className="dv-stat-row">
            <div className="dv-stat">
              <span className="dv-stat-num">65.2%</span>
              <span className="dv-stat-label">Questions answered accurately before the speaker finishes speaking</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-num">69.9%</span>
              <span className="dv-stat-label">Overall benchmark accuracy on standard 1,024-question test set</span>
            </div>
            <div className="dv-stat">
              <span className="dv-stat-num">~0.02 ms</span>
              <span className="dv-stat-label">Inference runtime of the trained turn-taking gating decision classifier</span>
            </div>
          </div>

          <div className="mt-8">
            <a className="dv-post-link inline-flex items-center gap-2 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium" href="#realtime">
              Read: Answering Is Not Buzzing <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Compatibility Section (Works with your stack) */}
      <section className="section dv-compat py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="compat">
        <div className="container max-w-[900px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              06 · Compatibility Contract
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Works with your stack.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed">
              No proprietary formats or custom runtimes required. Existing applications connect directly by updating their base URL.
            </p>
          </div>

          <div className="dv-diff">
            <div className="dv-diff-body">
              <code>
                <span className="c"># Point existing OpenAI or Ollama client to WiCi One</span>
                <span className="dv-diff-del">- client = OpenAI(api_key=os.environ[&quot;OPENAI_API_KEY&quot;])</span>
                <span className="dv-diff-add">+ client = OpenAI(base_url=&quot;http://wici-one.local/v1&quot;, api_key=&quot;wici-local&quot;)</span>
              </code>
            </div>
          </div>

          <div>
            <a className="dv-post-link inline-flex items-center gap-2 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium" href="#compat">
              Read: the compatibility contract <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Platforms Section (One GPU across your network) */}
      <section className="section dv-platforms py-24 bg-white text-[#1d1d1f]" id="platforms">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head dv-section-head--center mb-16">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              Cross-Platform Ecosystem
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              One GPU across your network.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed max-w-2xl mx-auto">
              Equip every laptop, phone, headset, and robot with workstation-grade acceleration over local Wi-Fi.
            </p>
          </div>

          <div className="dv-hub mb-16">
            <div className="dv-hub-center">
              <span className="dv-hub-ring"></span>
              <span className="dv-hub-ring dv-hub-ring--2"></span>
              <span className="dv-hub-name">WiCi One</span>
              <div className="dv-hub-seam"></div>
            </div>

            <ul className="dv-hub-spokes">
              <li className="dv-spoke">
                <strong>macOS</strong>
                <span>Swift · Python</span>
              </li>
              <li className="dv-spoke">
                <strong>Windows</strong>
                <span>Node.js · C#</span>
              </li>
              <li className="dv-spoke">
                <strong>Linux</strong>
                <span>CUDA · C++</span>
              </li>
              <li className="dv-spoke">
                <strong>iOS</strong>
                <span>Swift SDK</span>
              </li>
              <li className="dv-spoke">
                <strong>Android</strong>
                <span>Kotlin SDK</span>
              </li>
              <li className="dv-spoke">
                <strong>Robotics</strong>
                <span>ROS 2 · C++</span>
              </li>
              <li className="dv-spoke">
                <strong>Smart Cameras</strong>
                <span>RTOS · C</span>
              </li>
            </ul>
          </div>

          <div className="dv-scenes">
            <div className="dv-scenario">
              <h3 className="dv-scenario-title">Workstation copilot</h3>
              <p className="dv-scenario-body">Run full 70B and 750B LLMs from an ultraportable laptop without thermal throttling, loud fan noise, or battery drain.</p>
            </div>
            <div className="dv-scenario">
              <h3 className="dv-scenario-title">Private voice agent</h3>
              <p className="dv-scenario-body">Sub-second vocal interaction without transmitting continuous household audio streams to public cloud vendors.</p>
            </div>
            <div className="dv-scenario">
              <h3 className="dv-scenario-title">On-premise perception</h3>
              <p className="dv-scenario-body">Autonomous robotic navigation, obstacle classification, and spatial indexing independent of outside internet connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Developer Tools & Docs Section */}
      <section className="section section--dark dv-docs py-24 bg-[#56558e] text-white" id="docs">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#c0bfe4] block mb-2">
              Developer Surface
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Driver, SDK, and API.
            </h2>
            <p className="section-subtitle text-lg text-white/80 leading-relaxed">
              Explore the straightforward interfaces for embedding WiCi acceleration into existing codebases.
            </p>
          </div>

          <div className="dv-doc-grid">
            {/* Card 1: HTTP API */}
            <div className="dv-doc-card">
              <h3 className="dv-doc-title">OpenAI-Compatible HTTP API</h3>
              <p className="dv-doc-body">Standard REST completion and chat endpoint running directly on your local gateway.</p>
              <pre className="dv-doc-code">
                <code>{`curl http://wici-one.local/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3.1-8b-instruct",
    "messages": [{"role": "user", "content": "Analyze this."}]
  }'`}</code>
              </pre>
            </div>

            {/* Card 2: Pairing & Verification */}
            <div className="dv-doc-card">
              <h3 className="dv-doc-title">Secure Local Pairing</h3>
              <p className="dv-doc-body">mDNS discovery with cryptographically verified SHA-256 fingerprint challenge.</p>
              <div className="dv-pairflow">
                <span className="dv-pairflow-node">Client Device</span>
                <span className="dv-pairflow-link"></span>
                <span className="dv-pairflow-node dv-pairflow-node--box">
                  WiCi One
                  <span className="dv-pairflow-seam"></span>
                </span>
                <span className="dv-pairflow-link"></span>
                <span className="dv-pairflow-badge"><b>SHA256:</b> 9f2a…c4</span>
              </div>
              <code className="dv-doc-cmd">wici pair wici-one.local --verify SHA256:9f2a...</code>
            </div>

            {/* Card 3: Async Token Streaming */}
            <div className="dv-doc-card">
              <h3 className="dv-doc-title">Async Token Streaming</h3>
              <p className="dv-doc-body">High-throughput streaming iterator in Python and TypeScript.</p>
              <pre className="dv-doc-code">
                <code>{`import wici

async for token in wici.chat.stream("glm-5.2", prompt=query):
    sys.stdout.write(token.text)
    sys.stdout.flush()`}</code>
              </pre>
            </div>

            {/* Card 4: Priority Leasing */}
            <div className="dv-doc-card">
              <h3 className="dv-doc-title">Dual-Lane Priority Leasing</h3>
              <p className="dv-doc-body">Preemptive scheduling isolates low-latency queries from bulk workloads.</p>
              <div className="dv-lanes">
                <div className="dv-lane">
                  <span className="dv-lane-tag dv-lane-tag--hot">.interactive</span>
                  <div className="dv-lane-track dv-lane-track--hot"></div>
                  <span className="dv-lane-who">Voice, UI queries</span>
                </div>
                <div className="dv-lane">
                  <span className="dv-lane-tag">.background</span>
                  <div className="dv-lane-track"></div>
                  <span className="dv-lane-who">Batch indexing, video OCR</span>
                </div>
              </div>
              <code className="dv-doc-cmd">wici.gpu.lease(priority=wici.INTERACTIVE)</code>
            </div>
          </div>

          <p className="dv-docs-foot text-xs text-white/50 mt-8">
            Illustrative APIs for the Developer Preview. Final names and semantics may change.
          </p>
        </div>
      </section>

      {/* 11. Research Section */}
      <section className="section dv-research py-24 bg-white text-[#1d1d1f]" id="research">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              Systems Research
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Where the numbers come from.
            </h2>
            <p className="section-subtitle text-lg text-[#6e6e73] leading-relaxed">
              Read the research publications and technical reports behind WiCi architecture.
            </p>
          </div>

          <div className="dv-paper-grid">
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">01</span>
              </div>
              <h3 className="dv-paper-title">Move the GPU Out. Keep It Local.</h3>
              <p className="dv-paper-meta">Physical and thermal constraints of client AI hardware.</p>
            </div>
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">02</span>
              </div>
              <h3 className="dv-paper-title">Making a Nearby GPU Feel Local</h3>
              <p className="dv-paper-meta">Pipelined command execution over Wi-Fi 6 &amp; 7 networks.</p>
            </div>
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">03</span>
              </div>
              <h3 className="dv-paper-title">The SSD Is the New VRAM</h3>
              <p className="dv-paper-meta">High-throughput out-of-core MoE weight streaming from NVMe.</p>
            </div>
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">04</span>
              </div>
              <h3 className="dv-paper-title">The GPU Never Learned to Share</h3>
              <p className="dv-paper-meta">Dynamic allocation-granularity scheduling for multi-tenant inference.</p>
            </div>
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">05</span>
              </div>
              <h3 className="dv-paper-title">Answering Is Not Buzzing</h3>
              <p className="dv-paper-meta">Sub-millisecond turn-taking decision gates for conversational agents.</p>
            </div>
            <div className="dv-paper">
              <div className="dv-paper-figure">
                <span className="text-3xl font-mono text-[#56558e]">06</span>
              </div>
              <h3 className="dv-paper-title">The General and the Particular</h3>
              <p className="dv-paper-meta">Persistent personalized memory indexing without cloud exfiltration.</p>
            </div>
          </div>

          <div>
            <a className="dv-post-link inline-flex items-center gap-2 text-sm text-[#56558e] hover:text-[#1d1d1f] transition font-medium" href="#research">
              View all research <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="section dv-faq py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="faq">
        <div className="container max-w-[900px] mx-auto px-6">
          <div className="dv-section-head mb-12">
            <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#6664a5] block mb-2">
              FAQ
            </span>
            <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-[#1d1d1f] mb-4">
              Frequently asked questions.
            </h2>
          </div>

          <dl className="dv-faq-list">
            <div className="dv-faq-row">
              <dt>What is WiCi One?</dt>
              <dd>
                WiCi One is a dedicated wireless desktop GPU appliance. It houses high-end graphics hardware and software protocols that allow thin client devices like phones, laptops, and robots to offload heavy AI models over local Wi-Fi.
              </dd>
            </div>
            <div className="dv-faq-row">
              <dt>How does WiCi overcome wireless latency?</dt>
              <dd>
                Rather than forwarding raw PCIe commands sequentially, WiCi Protocol batches execution graphs, caches static model weights, and uses speculative execution pipelines to eliminate round-trip network stalls.
              </dd>
            </div>
            <div className="dv-faq-row">
              <dt>How does SSD weight streaming work?</dt>
              <dd>
                In Mixture-of-Experts (MoE) architectures, only a fraction of weights are activated for each generated token. WiCi InferSSD streams only the needed expert matrices directly from fast NVMe storage into memory on the fly.
              </dd>
            </div>
            <div className="dv-faq-row">
              <dt>Does WiCi One work with my current code?</dt>
              <dd>
                Yes. WiCi provides standard OpenAI- and Ollama-compatible HTTP endpoints, high-level SDKs for Python and TypeScript, and system-level virtual drivers for existing CUDA and PyTorch workloads.
              </dd>
            </div>
            <div className="dv-faq-row">
              <dt>Is my personal data sent to the cloud?</dt>
              <dd>
                No. All audio, video, sensor data, and model weights remain strictly on your premises within your local network. No external WAN connection is required for inference.
              </dd>
            </div>
            <div className="dv-faq-row">
              <dt>When does the Developer Preview launch?</dt>
              <dd>
                The Developer Preview hardware and SDK packages will begin shipping to approved developers in Q4 2026.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 13. Footnotes Section */}
      <section className="section dv-footnotes py-16 bg-white text-[#1d1d1f]" id="footnotes">
        <div className="container max-w-[900px] mx-auto px-6">
          <h2 className="dv-footnotes-title">Where the numbers come from</h2>
          <ol className="dv-footnote-list list-decimal">
            <li>
              <span className="dv-footnote-figs">575 W · ~3.0 kg · 227 g · thirteen phones · 350/450/575 W:</span> <em>Move the GPU Out. Keep It Local.</em>
            </li>
            <li>
              <span className="dv-footnote-figs">20,000 driver calls · ~800 round trips · 51× · 483× median · ~1.5 ms Wi-Fi 6 RTT:</span> <em>Making a Nearby GPU Feel Local.</em>
            </li>
            <li>
              <span className="dv-footnote-figs">GLM-5.2 753B at 330–425 GB (4-bit) · DeepSeek-V4-Pro 1.6T · ~14.9 GB/s NVMe:</span> <em>The SSD Is the New VRAM.</em>
            </li>
            <li>
              <span className="dv-footnote-figs">cycles-vs-VRAM asymmetry · allocation-granularity scheduling:</span> <em>The GPU Never Learned to Share.</em>
            </li>
            <li>
              <span className="dv-footnote-figs">65.2% before question end · 69.9% correct · median buzz c = 0.516 · ~0.02 ms gate:</span> <em>Answering Is Not Buzzing.</em>
            </li>
            <li>
              <span className="dv-footnote-figs">~200 ms median human turn gap:</span> <em>The General and the Particular.</em>
            </li>
          </ol>
          <p className="dv-footnote-note text-xs text-[#6e6e73] mt-6">
            The <code className="dv-inline">wici</code> CLI, SDK snippets, and endpoint examples on this page are illustrative previews of the developer surface; final names and semantics land with the Developer Preview.
          </p>
        </div>
      </section>

      {/* 14. Access / Form Section */}
      <section className="section section--dark dv-access py-24 bg-[#56558e] text-white" id="access">
        <div className="container max-w-[640px] mx-auto px-6 dv-access-inner">
          <div className="dv-wire--bridged">
            <span className="dv-wire-line"></span>
            <span className="dv-wire-pulse"></span>
          </div>

          <span className="section-kicker text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#c0bfe4] block mb-2">
            Developer Preview · Q4 2026
          </span>
          <h2 className="section-title text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
            Build with WiCi One.
          </h2>
          <p className="dv-access-lede text-base text-white/80 leading-relaxed mb-8">
            We are opening early access to developers building local AI agents, interactive spatial applications, and robotics perception pipelines.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-[#c0bfe4] font-medium text-center">
              Thank you for your interest! We will contact you regarding Developer Preview access.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dv-form w-full">
              <div className="dv-field">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your developer email"
                  required
                />
              </div>
              <div className="dv-field dv-field--message">
                <textarea
                  value={building}
                  onChange={(e) => setBuilding(e.target.value)}
                  placeholder="What are you building? (e.g. voice agent, local copilot, robotics)"
                  rows={3}
                />
              </div>
              <div className="dv-form-actions">
                <button type="submit" className="dv-form-submit">
                  <span>Request developer access</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          <div className="dv-access-values mt-12 text-sm text-white/70">
            One nearby GPU. Zero cloud telemetry. Unlimited local inference.
          </div>
        </div>
      </section>
    </main>
  )
}
