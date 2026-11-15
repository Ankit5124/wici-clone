import { Link } from '@tanstack/react-router'
import React from 'react'

export const PhysicalIntelligencePage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] pt-16 font-sans">
      {/* 1. Hero Banner */}
      <section className="relative grid place-items-center min-h-[360px] md:min-h-[460px] h-[33.333vw] max-h-[720px] overflow-hidden bg-[#1d1d1f] text-white">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/robot-arm-bench-banner-1600.webp"
            alt="An engineer holding a teach pendant at a workbench beside a white robot arm."
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-2.5 px-6 max-w-4xl mx-auto">
          <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.15em] uppercase text-white/90 drop-shadow">
            SOLUTIONS · ROBOTICS
          </span>
          <h1 className="text-[clamp(34px,4.04vw,87px)] font-medium leading-[0.98] tracking-[-0.026em] text-white drop-shadow-md max-w-3xl">
            Run robot inference<br />on site.
          </h1>
        </div>
      </section>

      {/* 2. Hero Intro Lede & 3 Places */}
      <section className="pt-20 pb-16 px-6 md:px-8 max-w-[1240px] mx-auto w-full">
        <p className="text-[clamp(1.15rem,1.05rem+0.6vw,1.5rem)] leading-[1.55] text-[#1d1d1f] font-normal max-w-[60ch]">
          Robot foundation models have outgrown on-robot processors. Cloud inference depends on wireless and internet connections that cannot guarantee latency. WiCi provides a third option: a shared GPU on the premises, one wireless hop from every robot.
        </p>

        {/* 3 Places comparison */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-14 list-none p-0" aria-label="Three places robot inference can run">
          {/* Place 1: On the robot */}
          <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white text-[#1d1d1f] shadow-xs">
            <svg className="w-14 h-14 mb-3.5 text-[#86868b]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
              <path d="M64.7578 9L61.7578 12H54C52.344 12 51 13.344 51 15V18H29.4492C28.2099 14.5115 24.9139 12 21 12C16.029 12 12 16.029 12 21C12 25.138 14.8064 28.5848 18.6094 29.6367L31.6934 55.8105C34.8464 53.1885 38.6724 51.5639 42.7734 51.1289L29.3555 24.293C29.3929 24.1982 29.415 24.0964 29.4492 24H51V27C51 28.656 52.344 30 54 30H61.7578L64.7578 33H78V27H67.2422L63 22.7578V19.2422L67.2422 15H78V9H64.7578ZM21 18C22.5976 18 23.8746 19.2608 23.9648 20.8359C23.9586 20.9472 23.9586 21.0587 23.9648 21.1699C23.8717 22.7423 22.5956 24 21 24C19.344 24 18 22.656 18 21C18 19.344 19.344 18 21 18ZM45 57C40.11 57 35.8063 59.376 33.0703 63H18C14.685 63 12 65.685 12 69V78H78V69C78 65.685 75.315 63 72 63H56.9297C54.1907 59.376 49.89 57 45 57ZM45 66C46.656 66 48 67.344 48 69C48 70.656 46.656 72 45 72C43.344 72 42 70.656 42 69C42 67.344 43.344 66 45 66Z" />
            </svg>
            <span className="text-[17px] font-semibold text-[#1d1d1f]">On the robot</span>
            <span className="text-[15px] font-semibold text-[#1d1d1f] mt-1">Limited compute.</span>
            <span className="text-[14px] text-[#6e6e73] leading-relaxed mt-1">
              A 40 to 130 W processor with one tenth of the performance of a datacenter GPU, utilized a fraction of the day.
            </span>
          </li>

          {/* Place 2: In the cloud */}
          <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white text-[#1d1d1f] shadow-xs">
            <svg className="w-14 h-14 mb-3.5 text-[#86868b]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
              <path d="M54 15C49.5771 15.0041 45.2413 16.2304 41.4714 18.5434C37.7015 20.8565 34.6441 24.1663 32.6367 28.1074C30.8467 27.3786 28.9327 27.0026 27 27C23.3711 27.0045 19.8668 28.3245 17.1367 30.7152C14.4066 33.1059 12.6357 36.4054 12.1523 40.002C8.61003 41.2187 5.53552 43.5102 3.35721 46.5571C1.17891 49.604 0.00533017 53.2545 0 57C0 61.7739 1.89642 66.3523 5.27208 69.7279C8.64773 73.1036 13.2261 75 18 75H72C76.7739 75 81.3523 73.1036 84.7279 69.7279C88.1036 66.3523 90 61.7739 90 57C89.9946 53.2726 88.8321 49.6389 86.6732 46.6004C84.5143 43.5619 81.4653 41.2686 77.9473 40.0371C77.9723 39.6918 77.9899 39.346 78 39C78 32.6348 75.4714 26.5303 70.9706 22.0294C66.4697 17.5286 60.3652 15 54 15Z" />
            </svg>
            <span className="text-[17px] font-semibold text-[#1d1d1f]">In the cloud</span>
            <span className="text-[15px] font-semibold text-[#1d1d1f] mt-1">Unreliable latency. Continuous cost.</span>
            <span className="text-[14px] text-[#6e6e73] leading-relaxed mt-1">
              Access to the largest models, but every decision depends on Wi‑Fi, access-point handoffs, and shared internet links, and the bill accrues for every hour of use.
            </span>
          </li>

          {/* Place 3: On site (WiCi Solution) */}
          <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#0a0b0d] bg-[#0a0b0d] text-white shadow-xl">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#56558e] text-white">
                WICI SOLUTION
              </span>
            </div>
            <span className="text-[17px] font-semibold text-[#818cf8]">On site</span>
            <span className="text-[15px] font-semibold text-white mt-1">Datacenter-class compute, one hop away.</span>
            <span className="text-[14px] text-white/90 leading-relaxed mt-1">
              One GPU on the premises, shared by laptops, local AI models, and robots over a dedicated wireless link.
            </span>
          </li>
        </ol>
      </section>

      {/* 3. Section 01 · The problem */}
      <section className="py-20 bg-[#f8f8fa] border-t border-[#d2d2d7]/50" id="problem">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <header className="mb-12 max-w-[800px]">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-[#6e6e73] block mb-3">
              01 · THE PROBLEM
            </span>
            <h2 className="text-[clamp(36px,4.5vw,68px)] font-bold leading-[1.04] tracking-[-0.028em] text-[#1d1d1f]">
              Limited on the robot.<br />
              <span className="text-[#56558e]">Unreliable in the cloud.</span>
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[#515154]">
              Larger models generalize to more tasks. On-robot processors cannot run them, and datacenter GPUs are only reachable over a network.<sup>1</sup>
            </p>
          </header>

          {/* Exact Chart matching Screenshot 1 */}
          <div className="p-8 md:p-10 rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs mb-14">
            <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-8">
              A planning model gets 200 ms per decision.<br className="hidden sm:inline" /> Every network delay comes out of it.
            </h3>

            <div className="flex flex-col gap-6">
              {/* Row 1: Latency budget per decision */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                <span className="md:col-span-3 text-xs md:text-sm font-semibold text-[#1d1d1f]">
                  Latency budget per decision
                </span>
                <div className="md:col-span-7 flex items-center">
                  <div className="w-full h-5 rounded-sm bg-[#e5e5ea] border border-dashed border-[#56558e]/40 relative flex">
                    <div className="w-1/4 h-full border-r border-[#d2d2d7]" />
                    <div className="w-1/4 h-full border-r border-[#d2d2d7]" />
                    <div className="w-1/4 h-full border-r border-[#d2d2d7]" />
                    <div className="w-1/4 h-full" />
                  </div>
                </div>
                <span className="md:col-span-2 text-sm md:text-base font-bold text-[#1d1d1f] md:text-left">
                  200 ms
                </span>
              </div>

              {/* Row 2: On-site wireless link */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                <span className="md:col-span-3 text-xs md:text-sm font-semibold text-[#56558e] flex items-center gap-2">
                  <span>On-site wireless link</span>
                  <img src="/wici-white-lockup.svg" alt="WiCi" className="h-3 w-auto invert opacity-75" />
                </span>
                <div className="md:col-span-7 flex items-center">
                  <div className="w-full h-5 rounded-sm bg-[#f8f8fa] relative flex">
                    <div className="w-[1.2%] h-full bg-[#56558e] rounded-xs" />
                    <div className="w-full h-full border-r border-[#f0f0f2] absolute inset-0 flex pointer-events-none">
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                    </div>
                  </div>
                </div>
                <span className="md:col-span-2 text-sm md:text-base font-bold text-[#56558e] md:text-left font-mono">
                  ~1.5 ms
                </span>
              </div>

              {/* Row 3: Typical round trip to cloud datacenter */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                <span className="md:col-span-3 text-xs md:text-sm font-semibold text-[#515154]">
                  Typical round trip to a cloud datacenter
                </span>
                <div className="md:col-span-7 flex items-center">
                  <div className="w-full h-5 rounded-sm bg-[#f8f8fa] relative flex">
                    <div className="w-[25%] h-full bg-[#6e6e73] rounded-xs" />
                    <div className="w-full h-full border-r border-[#f0f0f2] absolute inset-0 flex pointer-events-none">
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                      <div className="w-1/4 h-full border-r border-[#e5e5ea]" />
                    </div>
                  </div>
                </div>
                <span className="md:col-span-2 text-sm md:text-base font-bold text-[#1d1d1f] md:text-left font-mono">
                  50 ms+
                </span>
              </div>

              {/* Row 4: Tail stall on internet path */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                <span className="md:col-span-3 text-xs md:text-sm font-semibold text-[#1d1d1f]">
                  Tail stall on the internet path
                </span>
                <div className="md:col-span-7 flex items-center">
                  <div className="w-full h-5 rounded-sm bg-gradient-to-r from-[#434273] via-[#56558e] to-[#a3a2d4] relative flex items-center justify-end pr-2">
                    <span className="text-[10px] font-bold text-white tracking-widest font-mono">•••</span>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col md:text-left leading-tight">
                  <span className="text-sm md:text-base font-bold text-[#1d1d1f] font-mono">1 s+</span>
                  <span className="text-[10px] text-[#86868b]">5× the budget, off the chart</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 pt-3 border-t border-[#f0f0f2] text-[11px] font-mono text-[#86868b]">
              <div className="md:col-span-3" />
              <div className="md:col-span-7 flex justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>200 ms</span>
              </div>
              <div className="md:col-span-2" />
            </div>

            <p className="text-xs text-[#86868b] mt-5 leading-relaxed">
              Local link: WiCi's measured base round trip on Wi‑Fi 6. Cloud round trip: a typical value. Tail stall: the one-second spikes reported from field deployments.<sup>1</sup>
            </p>
          </div>

          {/* Screenshot 2: Side-by-side Ledger Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: On the robot */}
            <div className="flex flex-col gap-4 p-8 md:p-10 rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs">
              <div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">On the robot</h3>
                <span className="text-xs text-[#6e6e73] font-medium block mt-1">current on-robot processors</span>
              </div>

              <div className="divide-y divide-[#d2d2d7]/60 text-xs md:text-sm">
                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">1/10</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">COMPUTE</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    the compute of a datacenter GPU, 1/30 the memory bandwidth
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">130 W</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">POWER</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    power budget, from a ~2 kWh battery. A datacenter GPU draws 1.2 to 1.4 kW
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] block">Too small</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">MODELS</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    π0.7, DreamZero, and the Atlas planning model already run off-robot
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">4–8%</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">UTILIZATION</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    of the day in use for home robots; 40% in the leading factory deployment
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">~4 yr</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">LIFESPAN</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    service life under vibration, shock, and drops
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d2d2d7]/60 text-xs md:text-sm text-[#1d1d1f] font-semibold">
                fixed capacity, purchased for every robot
              </div>
            </div>

            {/* Column 2: In the cloud */}
            <div className="flex flex-col gap-4 p-8 md:p-10 rounded-[29px] border border-[#d2d2d7]/80 bg-white shadow-xs">
              <div>
                <h3 className="text-2xl font-bold text-[#1d1d1f]">In the cloud</h3>
                <span className="text-xs text-[#6e6e73] font-medium block mt-1">datacenter GPUs over a network</span>
              </div>

              <div className="divide-y divide-[#d2d2d7]/60 text-xs md:text-sm">
                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">1 s</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">TAIL LATENCY</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    a single delay of this size halts a robot mid-task. Tail latency matters, not the average
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">100 ms+</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">HANDOFFS</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    link interruption on every access-point handoff, up to several seconds
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] font-mono block">2 days</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">HOME WI-FI</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    of in-home testing before one home-robot company abandoned cloud inference
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] block">Uplink</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">TRAFFIC</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    Wi‑Fi is designed for downlink; a moving robot uploads a continuous video stream
                  </div>
                </div>

                <div className="py-4 grid grid-cols-12 gap-3 items-baseline">
                  <div className="col-span-4">
                    <span className="text-xl font-bold text-[#1d1d1f] block">Off site</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">DATA</span>
                  </div>
                  <div className="col-span-8 text-[#515154] leading-relaxed">
                    video of the home or factory leaves the premises
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d2d2d7]/60 text-xs md:text-sm text-[#1d1d1f] font-semibold">
                full model capacity, dependent on network availability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 02 · The economics (Screenshot 3) */}
      <section className="py-20 bg-white" id="economics">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <header className="mb-12 max-w-[800px]">
            <h2 className="text-[clamp(40px,5vw,76px)] font-bold leading-[1.04] tracking-[-0.03em] text-[#1d1d1f]">
              One GPU.<br />
              <span className="text-[#56558e]">Every workload.</span>
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[#515154]">
              The on-site GPU already serves laptops, local AI models, and rendering. The robot shares it. No additional GPU is purchased for the robot.
            </p>
          </header>

          {/* Screenshot 3: Workload Diagram + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            {/* Left Diagram */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* 4 Input Pills */}
                <div className="flex flex-col gap-3 w-full sm:w-[220px]">
                  <div className="px-5 py-3 rounded-2xl border border-[#d2d2d7]/80 bg-white text-xs md:text-sm font-semibold text-[#1d1d1f] shadow-2xs">
                    Laptop and desktop apps
                  </div>
                  <div className="px-5 py-3 rounded-2xl border border-[#d2d2d7]/80 bg-white text-xs md:text-sm font-semibold text-[#1d1d1f] shadow-2xs">
                    Local AI models
                  </div>
                  <div className="px-5 py-3 rounded-2xl border border-[#d2d2d7]/80 bg-white text-xs md:text-sm font-semibold text-[#1d1d1f] shadow-2xs">
                    Rendering
                  </div>
                  <div className="px-5 py-3 rounded-2xl border-2 border-[#56558e] bg-white text-xs md:text-sm font-semibold text-[#56558e] shadow-2xs">
                    Robot inference
                  </div>
                </div>

                {/* Tree connecting lines */}
                <div className="hidden sm:flex flex-col justify-center items-center h-[180px] w-8">
                  <div className="w-full h-full border-r border-t border-b border-[#d2d2d7]" />
                </div>

                {/* Central Purple Box */}
                <div className="w-full sm:w-[240px] p-8 rounded-3xl bg-[#56558e] text-white flex flex-col items-center justify-center text-center shadow-xl">
                  <img src="/wici-white-lockup.svg" alt="WiCi" className="h-5 w-auto mb-3" />
                  <span className="text-base font-bold text-white tracking-tight">One GPU on site</span>
                </div>
              </div>

              <p className="text-xs text-[#86868b] mt-6 max-w-[460px] leading-relaxed">
                Every workload in the building runs on the same GPU over the same link. The robot is one more client.
              </p>
            </div>

            {/* Right Big Stats */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-[clamp(52px,6vw,84px)] font-bold text-[#56558e] font-sans leading-none block">
                  0
                </span>
                <p className="text-xs md:text-sm text-[#515154] leading-relaxed mt-2">
                  additional GPUs. The robot uses the GPU already serving the other devices on site.
                </p>
              </div>

              <div>
                <span className="text-[clamp(52px,6vw,84px)] font-bold text-[#56558e] font-sans leading-none block">
                  4–8%
                </span>
                <p className="text-xs md:text-sm text-[#515154] leading-relaxed mt-2">
                  of the day a home robot's on-robot processor is in use.<sup>1</sup> The remaining capacity is purchased and idle.
                </p>
              </div>

              <div>
                <span className="text-[clamp(52px,6vw,84px)] font-bold text-[#56558e] font-sans leading-none block">
                  1×
                </span>
                <p className="text-xs md:text-sm text-[#515154] leading-relaxed mt-2">
                  purchase. Cloud GPU cost increases with every hour of use. An owned GPU is paid for once and shared by every device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 03 · The WiCi approach (Screenshots 4, 5, 6, 7) - SOLID PURPLE SECTION */}
      <section className="py-24 bg-[#56558e] text-white" id="on-site">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          {/* Header */}
          <header className="mb-12 max-w-[800px]">
            <span className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-white/70 block mb-3">
              THE WICI APPROACH
            </span>
            <h2 className="text-[clamp(38px,5vw,72px)] font-bold leading-[1.04] tracking-[-0.03em] text-white">
              On-site GPU inference<br />for robots.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-white/90">
              A shared GPU on the premises, one wireless hop from every robot, over a link designed for robot traffic.
            </p>
          </header>

          <p className="text-sm md:text-[15px] leading-[1.65] text-white/90 max-w-[72ch] mb-14">
            Datacenter GPUs provide capacity. On-robot processors provide deterministic latency and keep data local. <span className="bg-white/20 px-1 rounded">An on-site GPU provides both</span>: a full-size GPU, shared with every device in the building, with <span className="bg-white/20 px-1 rounded">no handoffs, no shared internet links, and no internet in the control loop</span>. Data stays on the premises. <span className="bg-white/20 px-1 rounded">Worst-case latency is one wireless hop</span>.
            <br /><br />
            WiCi delivers this as one system. WiCi One is the on-premises GPU. The <Link to="/technology" className="underline text-white font-semibold">Overview</Link> presents it to the robot as a local GPU over standard Wi‑Fi, at a measured ~1.5 ms base round trip. The WiCi Wireless Chip is the robot-side radio, so both ends of the link run on one schedule.
          </p>

          {/* Screenshot 5: Where inference runs Table in White Card */}
          <div className="overflow-x-auto rounded-[29px] bg-white text-[#1d1d1f] shadow-2xl p-6 md:p-8 mb-16">
            <table className="w-full border-collapse text-left text-xs md:text-sm text-[#515154]">
              <thead>
                <tr className="border-b border-[#e5e5ea] text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-wider text-[#6e6e73]">
                  <th scope="col" className="pb-4 font-semibold w-1/4"></th>
                  <th scope="col" className="pb-4 font-bold text-[#1d1d1f] w-1/4">
                    <span className="block text-[10px] text-[#6e6e73] font-mono uppercase mb-1">ON SITE</span>
                    <img src="/logo-lockup.svg" alt="WiCi" className="h-4 w-auto inline-block" />
                  </th>
                  <th scope="col" className="pb-4 font-semibold text-[#6e6e73] w-1/4 uppercase">
                    ON THE ROBOT
                  </th>
                  <th scope="col" className="pb-4 font-semibold text-[#6e6e73] w-1/4 uppercase">
                    IN THE CLOUD
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f2]">
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Model capacity</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">Full-size GPU</td>
                  <td className="py-4">40 to 130 W processor</td>
                  <td className="py-4">Large, but costly</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Round-trip latency</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">One hop, ~1.5 ms base on Wi‑Fi 6</td>
                  <td className="py-4">None</td>
                  <td className="py-4">10 to 50 ms typical, up to seconds</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Latency variation</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">Low: scheduled link, no handoffs</td>
                  <td className="py-4">None</td>
                  <td className="py-4">High: handoffs, shared links, contention</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Internet dependency</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">None</td>
                  <td className="py-4">None</td>
                  <td className="py-4 text-rose-600 font-semibold">Required</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Data location</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">On the premises</td>
                  <td className="py-4">On the robot</td>
                  <td className="py-4">Off site</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Shared with other workloads</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">Yes: laptops, local AI models, robots</td>
                  <td className="py-4">No, dedicated to one robot</td>
                  <td className="py-4">Yes, with other tenants</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Power and cooling</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">Wall outlet on site</td>
                  <td className="py-4">Robot battery</td>
                  <td className="py-4">Remote datacenter</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 font-semibold text-[#1d1d1f]">Safety control loops</th>
                  <td className="py-4 font-semibold text-[#1d1d1f]">On the robot</td>
                  <td className="py-4">On the robot</td>
                  <td className="py-4">Fallback stop only; the full loop depends on the link</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Screenshot 6: The WiCi Team Card + Requirements 4-bullet list */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* The WiCi Team Card */}
            <div className="lg:col-span-5 p-8 rounded-[29px] bg-white/10 border border-white/20 backdrop-blur-md flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src="/wici-white-lockup.svg" alt="WiCi" className="h-5 w-auto" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/70 font-semibold">
                THE WICI TEAM
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                Built by the researchers behind latency-guaranteed Wi‑Fi.
              </h3>
              <ul className="text-xs md:text-sm text-white/90 space-y-2 mt-2">
                <li className="border-l-2 border-white/40 pl-3">
                  10 years of research in real-time wireless networking and machine-learning systems
                </li>
                <li className="border-l-2 border-white/40 pl-3">
                  First latency-guaranteed Wi‑Fi-compatible router
                </li>
                <li className="border-l-2 border-white/40 pl-3">
                  10+ paper awards from ACM and IEEE (SIGCOMM, NSDI, OSDI, ASPLOS, SIGMOD)
                </li>
              </ul>
              <a
                href="https://wici.ai/about"
                className="text-xs font-semibold text-white/90 hover:text-white mt-2 flex items-center gap-1"
              >
                About the team →
              </a>
            </div>

            {/* Requirements for a robot wireless link */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Requirements for a robot wireless link
              </h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-6">
                Reliable off-robot inference requires the access point and the robot radio to be designed together.<sup>1</sup> The WiCi stack is designed to these four requirements.
              </p>

              <ul className="space-y-4 text-xs md:text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-white text-base leading-none">•</span>
                  <div>
                    <strong className="text-white">Scheduled, uplink-first access.</strong> Each robot is assigned a fixed transmission slot instead of contending for the channel, and the link is designed for the upstream video traffic that standard Wi‑Fi is not.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white text-base leading-none">•</span>
                  <div>
                    <strong className="text-white">Common time base.</strong> Frames are captured and transmitted on one clock, so the GPU processes them on arrival without queuing.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white text-base leading-none">•</span>
                  <div>
                    <strong className="text-white">No handoffs, clear spectrum.</strong> One site, one GPU, one hop, on wide uncongested channels with data duplicated across links, so nothing is handed off or retransmitted.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-white text-base leading-none">•</span>
                  <div>
                    <strong className="text-white">No site modifications.</strong> The GPU includes its own link. Existing Wi‑Fi and customer networks are unchanged.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Screenshot 6 (bottom): 3 Deployment Cards: Home, Warehouse, Factory */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[29px] bg-white/10 border border-white/20 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/70 block mb-2">
                  HOME
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  One GPU for every robot and device in the home.
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Home robot manufacturers moved inference back on-robot because residential Wi‑Fi is unreliable. WiCi One includes its own link, installs on a shelf, and serves vacuum, laundry, and assistant robots from the same GPU that serves the household's laptops, phones, and local AI models.
                </p>
              </div>
              <Link to="/wici-one" className="text-xs font-semibold text-white hover:underline">
                See WiCi One →
              </Link>
            </div>

            <div className="p-7 rounded-[29px] bg-white/10 border border-white/20 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/70 block mb-2">
                  WAREHOUSE
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Add compute without site modifications.
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Warehouse robots keep inference on-robot to avoid changes to customer networks, at the cost of smaller models and an underutilized processor in every unit. An on-site GPU with its own link runs the larger model for the robot alongside the site's other GPU workloads, and leaves the site network unchanged.
                </p>
              </div>
              <Link to="/technology" className="text-xs font-semibold text-white hover:underline">
                Build on WiCi →
              </Link>
            </div>

            <div className="p-7 rounded-[29px] bg-white/10 border border-white/20 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/70 block mb-2">
                  FACTORY
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Keep the planning model on the premises.
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Leading factory robots already run the planning model off-robot through a cloud service. Running it on site limits the round trip to one hop, keeps plant video on the premises, and meets the requirements of customers that cannot transfer data off site.
                </p>
              </div>
              <a href="https://wici.ai/about#contact" className="text-xs font-semibold text-white hover:underline">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Screenshot 7: Deploy on-site inference CTA Band */}
      <section className="py-24 px-6 md:px-8 bg-[#56558e] border-t border-white/20 text-white w-full text-center" id="cta">
        <div className="max-w-[760px] mx-auto flex flex-col items-center">
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-[1.04] tracking-[-0.03em] text-white">
            Deploy on-site inference.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-white/90 max-w-[48ch] leading-relaxed">
            Developing a robot? Apply for early SDK access, or reserve a WiCi One for home use.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://wici.ai/developers#access"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-[#1d1d1f] font-semibold text-xs md:text-sm transition shadow-lg"
            >
              <span>Request developer access</span>
              <span>→</span>
            </a>
            <Link
              to="/wici-one"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-xs md:text-sm border border-white/40 hover:border-white transition"
            >
              <span>Buy WiCi One</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Screenshot 7: SOURCES Section */}
      <footer className="py-16 px-6 md:px-8 bg-white text-xs text-[#86868b] leading-relaxed" id="sources">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#1d1d1f]">
            SOURCES
          </span>
          <p className="max-w-[90ch]">
            <sup>1</sup> The Jetson Thor comparison, the latency budgets, the link requirements, the model sizes, the utilization figures, and the deployment accounts are from the public part of SemiAnalysis,{' '}
            <a href="https://newsletter.semianalysis.com/p/a-brain-too-big-to-carry-on-device" target="_blank" rel="noopener noreferrer" className="text-[#56558e] underline">
              A Brain Too Big to Carry — On-Device vs Datacenter Inference
            </a>{' '}
            (Ivan Chiam, Gianluca, Zane Fong, and others; September 14, 2026). The full report is for SemiAnalysis subscribers. The conclusions about on-site inference are WiCi's.
          </p>
          <p className="max-w-[90ch]">
            The ~1.5 ms Wi‑Fi 6 base round-trip time is WiCi's own measurement, documented on the{' '}
            <Link to="/technology" hash="latency" className="text-[#56558e] underline">
              Technology
            </Link>{' '}
            page and in{' '}
            <a href="https://wici.ai/article/nearby-gpu-feel-local" className="text-[#56558e] underline">
              Making a Nearby GPU Feel Local
            </a>
            . Company and product names belong to their owners; none of them endorses WiCi.
          </p>
        </div>
      </footer>
    </div>
  )
}
