import React from 'react'

export const RoboticsHero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 px-6 md:px-8 max-w-[1240px] mx-auto w-full">
      <p className="text-[clamp(1.15rem,1.05rem+0.6vw,1.5rem)] leading-[1.55] text-[#1d1d1f] font-normal max-w-[62ch]">
        Robot foundation models have outgrown on-robot processors. Cloud inference depends on wireless and internet connections that cannot guarantee latency. WiCi provides a third option: a shared GPU on the premises, one wireless hop from every robot.
      </p>

      {/* Three Places Comparison Cards */}
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-14 list-none p-0" aria-label="Three places robot inference can run">
        {/* Place 1: On the robot */}
        <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white text-[#1d1d1f] shadow-xs">
          <svg className="w-14 h-14 mb-3.5 text-[#86868b]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
            <path d="M64.7578 9L61.7578 12H54C52.344 12 51 13.344 51 15V18H29.4492C28.2099 14.5115 24.9139 12 21 12C16.029 12 12 16.029 12 21C12 25.138 14.8064 28.5848 18.6094 29.6367L31.6934 55.8105C34.8464 53.1885 38.6724 51.5639 42.7734 51.1289L29.3555 24.293C29.3929 24.1982 29.415 24.0964 29.4492 24H51V27C51 28.656 52.344 30 54 30H61.7578L64.7578 33H78V27H67.2422L63 22.7578V19.2422L67.2422 15H78V9H64.7578ZM21 18C22.5976 18 23.8746 19.2608 23.9648 20.8359C23.9586 20.9472 23.9586 21.0587 23.9648 21.1699C23.8717 22.7423 22.5956 24 21 24C19.344 24 18 22.656 18 21C18 19.344 19.344 18 21 18ZM45 57C40.11 57 35.8063 59.376 33.0703 63H18C14.685 63 12 65.685 12 69V78H78V69C78 65.685 75.315 63 72 63H56.9297C54.1907 59.376 49.89 57 45 57ZM45 66C46.656 66 48 67.344 48 69C48 70.656 46.656 72 45 72C43.344 72 42 70.656 42 69C42 67.344 43.344 66 45 66Z" />
          </svg>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#6e6e73]">On the robot</span>
          <span className="text-lg font-bold text-[#1d1d1f] mt-1">Limited compute.</span>
          <span className="text-sm text-[#6e6e73] leading-relaxed mt-1">
            A 40 to 130&nbsp;W processor with one tenth of the performance of a datacenter GPU, utilized a fraction of the day.
          </span>
        </li>

        {/* Place 2: In the cloud */}
        <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7]/80 bg-white text-[#1d1d1f] shadow-xs">
          <svg className="w-14 h-14 mb-3.5 text-[#86868b]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
            <path d="M54 15C49.5771 15.0041 45.2413 16.2304 41.4714 18.5434C37.7015 20.8565 34.6441 24.1663 32.6367 28.1074C30.8467 27.3786 28.9327 27.0026 27 27C23.3711 27.0045 19.8668 28.3245 17.1367 30.7152C14.4066 33.1059 12.6357 36.4054 12.1523 40.002C8.61003 41.2187 5.53552 43.5102 3.35721 46.5571C1.17891 49.604 0.00533017 53.2545 0 57C0 61.7739 1.89642 66.3523 5.27208 69.7279C8.64773 73.1036 13.2261 75 18 75H72C76.7739 75 81.3523 73.1036 84.7279 69.7279C88.1036 66.3523 90 61.7739 90 57C89.9946 53.2726 88.8321 49.6389 86.6732 46.6004C84.5143 43.5619 81.4653 41.2686 77.9473 40.0371C77.9723 39.6918 77.9899 39.346 78 39C78 32.6348 75.4714 26.5303 70.9706 22.0294C66.4697 17.5286 60.3652 15 54 15Z" />
          </svg>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#6e6e73]">In the cloud</span>
          <span className="text-lg font-bold text-[#1d1d1f] mt-1">Unreliable latency. Continuous cost.</span>
          <span className="text-sm text-[#6e6e73] leading-relaxed mt-1">
            Access to the largest models, but every decision depends on Wi‑Fi handoffs and shared internet links, with bills accruing every hour.
          </span>
        </li>

        {/* Place 3: On site (WiCi Solution) */}
        <li className="flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#0a0b0d] bg-[#0a0b0d] text-white shadow-xl">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#56558e] text-white">
              WICI SOLUTION
            </span>
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#818cf8]">On site</span>
          <span className="text-lg font-bold text-white mt-1">Datacenter compute, one hop away.</span>
          <span className="text-sm text-white/90 leading-relaxed mt-1">
            One GPU on the premises, shared by laptops, local AI models, and robots over a dedicated ultra-low latency wireless link.
          </span>
        </li>
      </ol>
    </section>
  )
}
