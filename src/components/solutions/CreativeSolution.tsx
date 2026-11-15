import { Link } from '@tanstack/react-router'
import React from 'react'

export const CreativeSolution: React.FC = () => {
  const compatibleApps = [
    { name: 'Blender', icon: '/blender.png' },
    { name: 'Premiere Pro', icon: '/premiere-pro.png' },
    { name: 'CapCut', icon: '/capcut.png' },
    { name: 'ComfyUI', icon: '/comfyui.png' },
    { name: 'Unreal Engine', icon: '/unreal-engine.png' },
    { name: 'Maya', icon: '/maya.png' },
  ]

  return (
    <section id="solution" className="py-14 md:py-24 bg-[#f5f5f7] text-[#1d1d1f] w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-10 max-w-[780px]">
          <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#6664a5] block mb-2">
            The solution
          </span>
          <h2 className="text-[clamp(32px,3.2vw,48px)] font-medium leading-[1.08] tracking-[-0.025em] text-[#1d1d1f]">
            Thin machines. <em className="text-[#56558e] not-italic font-medium">Full renders.</em>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.5] text-[#3a3a3c] max-w-[60ch]">
            WiCi One appears to each machine as a local GPU through the WiCi Driver. Interactive work stays responsive because the WiCi Protocol is built around a measured ~1.5&nbsp;ms Wi‑Fi&nbsp;6 round trip: viewports, timeline scrubbing, and previews run as they would on a desktop GPU, and exports run at desktop-GPU speed.
          </p>
        </header>

        {/* Studio Setup Image Visual (.sol-film) */}
        <figure className="relative rounded-[29px] overflow-hidden bg-[#56558e] shadow-[0_4px_20px_rgba(0,0,0,0.04)] aspect-[16/9] w-full mb-5">
          <img
            src="/use-case-artists-1800.webp"
            alt="Two designers reviewing a 3D scene on a laptop, rendered by WiCi One nearby."
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>

        <p className="text-[14px] leading-[1.45] text-[#6e6e73] max-w-[70ch] mb-10">
          A studio on thin laptops. Each machine sees WiCi One as its own local GPU through the WiCi Driver, so the apps offload to it with no plugins and no changes.
        </p>

        {/* Compatible App Badges (.sol-apps) */}
        <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0 mb-8" aria-label="Compatible apps">
          {compatibleApps.map((app, idx) => (
            <li
              key={idx}
              className="inline-flex items-center gap-2 py-1.5 pr-3 pl-1.5 border border-[#d2d2d7] rounded-full bg-white text-[14px] font-semibold text-[#1d1d1f]"
            >
              <img
                src={app.icon}
                alt=""
                className="w-[26px] h-[26px] rounded-[11px] object-cover"
                loading="lazy"
              />
              <span>{app.name}</span>
            </li>
          ))}
        </ul>

        {/* Two-Column Grid: Benchmarks Table + Product Card (.sol-grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-14">
          {/* Left Column: Benchmarks Table (.sol-bench-wrap) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-x-auto rounded-[29px] border border-[#d2d2d7] bg-white">
              <table className="w-full min-w-[480px] border-collapse text-left text-[15px] text-[#3a3a3c]">
                <thead>
                  <tr className="border-b border-[#d2d2d7] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6e6e73]">
                    <th scope="col" className="pt-[18px] pb-3 px-5 font-semibold">Workload</th>
                    <th scope="col" className="pt-[18px] pb-3 px-5 font-semibold">5060 Ti edition</th>
                    <th scope="col" className="pt-[18px] pb-3 px-5 font-semibold">5090 edition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d2d2d7]">
                  <tr>
                    <th scope="row" className="py-3.5 px-5 font-semibold text-[#1d1d1f]">
                      Blender
                      <small className="block font-normal text-[13px] text-[#6e6e73] mt-0.5">Cycles render</small>
                    </th>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">2,900</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">samples/min</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">6,000</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">samples/min</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="py-3.5 px-5 font-semibold text-[#1d1d1f]">
                      Premiere Pro
                      <small className="block font-normal text-[13px] text-[#6e6e73] mt-0.5">4K H.264 export</small>
                    </th>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">70</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">fps</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">90</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">fps</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="py-3.5 px-5 font-semibold text-[#1d1d1f]">
                      CapCut
                      <small className="block font-normal text-[13px] text-[#6e6e73] mt-0.5">4K export</small>
                    </th>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">75</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">fps</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">90</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">fps</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="py-3.5 px-5 font-semibold text-[#1d1d1f]">
                      FLUX.2 Klein
                      <small className="block font-normal text-[13px] text-[#6e6e73] mt-0.5">1024² image generation</small>
                    </th>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">~0.49</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">img/s</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">~0.92</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">img/s</span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="py-3.5 px-5 font-semibold text-[#1d1d1f]">
                      Wan 2.2
                      <small className="block font-normal text-[13px] text-[#6e6e73] mt-0.5">720p video generation</small>
                    </th>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">~6.4</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">gen fps</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <strong className="text-[24px] font-medium text-[#1d1d1f] tracking-[-0.02em]">~3.0</strong>
                      <span className="text-[13px] text-[#6e6e73] ml-1">gen fps</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3.5 text-[13px] leading-[1.45] text-[#6e6e73]">
              From the{' '}
              <Link to="/wici-one" hash="performance" className="text-[#6664a5] hover:underline font-semibold">
                WiCi One benchmarks
              </Link>
              . Image and video generation use the listed model sizes per edition.
            </p>
          </div>

          {/* Right Column: WiCi One Product Card (.sol-product) */}
          <div className="lg:col-span-5">
            <Link
              to="/wici-one"
              className="flex flex-col border border-[#d2d2d7] rounded-[29px] bg-white overflow-hidden text-[#1d1d1f] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-28px_rgba(29,29,31,0.18)] group"
            >
              <div className="aspect-[16/10] bg-gradient-to-b from-[#edf4f5] to-[#c6c5df] overflow-hidden flex items-center justify-center">
                <img
                  src="/hero-device-ledge.webp"
                  alt="The WiCi One device on its lavender stage."
                  className="w-full h-full object-cover object-[center_38%] scale-[1.12] transition-transform duration-500 group-hover:scale-[1.16]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2 p-[22px_24px_24px]">
                <img
                  src="/logo-lockup.svg"
                  alt="WiCi"
                  className="h-[18px] w-auto self-start mb-1"
                />
                <span className="text-[24px] font-medium tracking-[-0.02em] leading-tight text-[#1d1d1f]">
                  WiCi One
                </span>
                <p className="text-[15px] leading-[1.45] text-[#3a3a3c] m-0">
                  A desktop-class GPU on a shelf, reached over Wi‑Fi. Two editions, from $3,499.
                </p>
                <span className="mt-1.5 text-[14px] font-semibold text-[#6664a5] group-hover:text-[#56558e]">
                  See WiCi One <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Resource Links: Technology & Blog (.sol-more) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-11">
          {/* Column 1: Technology */}
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6e6e73] mb-2.5">
              Technology
            </span>
            <ul className="list-none p-0 m-0 flex flex-col">
              <li className="border-t border-[#d2d2d7]">
                <Link
                  to="/technology" hash="latency"
                  className="flex flex-col gap-1 py-3 text-[#1d1d1f] no-underline hover:text-[#6664a5] transition-colors"
                >
                  <span className="text-[15px] font-semibold">Designed for network latency</span>
                  <span className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    Thousands of small driver calls per frame, and how the runtime keeps them off the network.
                  </span>
                </Link>
              </li>
              <li className="border-t border-b border-[#d2d2d7]">
                <Link
                  to="/technology" hash="sharing"
                  className="flex flex-col gap-1 py-3 text-[#1d1d1f] no-underline hover:text-[#6664a5] transition-colors"
                >
                  <span className="text-[15px] font-semibold">Sharing one GPU</span>
                  <span className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    How several machines share the box without stepping on each other.
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: From the blog */}
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#6e6e73] mb-2.5">
              From the blog
            </span>
            <ul className="list-none p-0 m-0 flex flex-col">
              <li className="border-t border-[#d2d2d7]">
                <a
                  href="https://wici.ai/article/nearby-gpu-feel-local"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 py-3 text-[#1d1d1f] no-underline hover:text-[#6664a5] transition-colors"
                >
                  <span className="text-[15px] font-semibold">Making a Nearby GPU Feel Local</span>
                  <span className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    The bottleneck is round-trip latency, not bandwidth, and a protocol can hide it.
                  </span>
                </a>
              </li>
              <li className="border-t border-[#d2d2d7]">
                <a
                  href="https://wici.ai/article/gpu-never-learned-to-share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 py-3 text-[#1d1d1f] no-underline hover:text-[#6664a5] transition-colors"
                >
                  <span className="text-[15px] font-semibold">The GPU Never Learned to Share</span>
                  <span className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    VRAM needs a scheduler the way CPU cycles once did.
                  </span>
                </a>
              </li>
              <li className="border-t border-b border-[#d2d2d7]">
                <a
                  href="https://wici.ai/article/gpu-cant-fit-in-your-pocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 py-3 text-[#1d1d1f] no-underline hover:text-[#6664a5] transition-colors"
                >
                  <span className="text-[15px] font-semibold">Move the GPU Out. Keep It Local.</span>
                  <span className="text-[14px] leading-[1.4] text-[#6e6e73]">
                    The physical case for taking the accelerator out of the device.
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
