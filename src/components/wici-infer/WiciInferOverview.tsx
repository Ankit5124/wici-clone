import React from 'react'

export const WiciInferOverview: React.FC = () => {
  return (
    <section className="bg-[#0a0b0d] text-[#faf9f5] pt-14 md:pt-20 pb-20 w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* The Overview Container */}
        <div id="overview" className="scroll-mt-28">
          {/* Section Heading & Lede */}
          <h2 className="text-[clamp(1.75rem,1.4rem+1.4vw,2.375rem)] font-medium leading-[1.15] tracking-[-0.025em] text-[#faf9f5] mb-4">
            Manage your local AI in one app.
          </h2>
          <p className="max-w-[68ch] mb-8 text-[clamp(1.05rem,0.95rem+0.4vw,1.25rem)] leading-[1.55] text-[#faf9f5]/80">
            Discover open LLMs, download your favorites, and start a conversation. Everything in one beautifully simple desktop app, with no cloud dependency.
          </p>

          {/* 3 Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card 1: Find your next model */}
            <article className="flex flex-col justify-between min-w-0 overflow-hidden p-6 md:p-7 rounded-[26px] bg-[#faf9f5]/[0.05] border border-white/[0.06]">
              <div>
                <h3 className="text-[clamp(1.35rem,1.15rem+0.8vw,1.75rem)] font-medium tracking-[-0.025em] text-[#faf9f5]">
                  Find your next model.
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#faf9f5]/80">
                  Browse supported LLMs. Download, load and manage them on your computer.
                </p>
              </div>

              {/* Model Scene Illustration */}
              <div
                className="mt-7 min-w-0 min-h-[230px] p-4 bg-[#0a0b0d] border border-[#faf9f5]/[0.14] rounded-[19px] shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between"
                role="img"
                aria-label="Model library illustration: DeepSeek V4.1 Flash loaded, Muse Spark Open downloading."
              >
                {/* Search Header */}
                <div className="flex items-center gap-2.5 pb-3.5 border-b border-[#faf9f5]/[0.14] text-[14px] text-[#faf9f5]/55">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                    <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.7" />
                    <path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                  <span>Discover Models</span>
                </div>

                {/* Row 1: DeepSeek V4.1 Flash (Loaded) */}
                <div className="flex items-center gap-2.5 pt-4 text-[14px]">
                  <span className="grid place-items-center w-[30px] h-[34px] shrink-0 bg-[#575cf2]/[0.14] text-[#818cf8] rounded-[10px] font-semibold text-xs font-mono">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <strong className="block font-medium text-[#faf9f5] truncate">DeepSeek V4.1 Flash</strong>
                    <small className="block text-[#faf9f5]/55 text-[12px] mt-0.5">763B · Q8_0</small>
                  </div>
                  <span className="text-[#818cf8] text-base font-bold select-none pr-1">✓</span>
                </div>

                {/* Row 2: Muse Spark Open (Downloading) */}
                <div className="flex items-center gap-2.5 pt-3.5 text-[14px]">
                  <span className="grid place-items-center w-[30px] h-[34px] shrink-0 bg-[#575cf2]/[0.14] text-[#818cf8] rounded-[10px] font-semibold text-xs font-mono">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <strong className="block font-medium text-[#faf9f5] truncate">Muse Spark Open</strong>
                    <small className="block text-[#faf9f5]/55 text-[12px] mt-0.5">816B · UD-Q4_K_XL</small>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-[#faf9f5]/55">
                    <path
                      d="M8 2v9m-4-4 4 4 4-4M3 14h10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Progress Bar & Status */}
                <div className="pt-2">
                  <div className="h-1 bg-[#faf9f5]/10 rounded-[2px] overflow-hidden">
                    <div className="h-full bg-[#575cf2] rounded-[2px] transition-all duration-700 w-[38%]" />
                  </div>
                  <div className="flex justify-between items-center text-[12px] text-[#faf9f5]/55 mt-2">
                    <span>Download in progress</span>
                    <span className="font-mono text-[#818cf8] font-medium">38%</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Start a conversation */}
            <article className="flex flex-col justify-between min-w-0 overflow-hidden p-6 md:p-7 rounded-[26px] bg-[#0a0b0d]/50 border border-white/[0.08]">
              <div>
                <h3 className="text-[clamp(1.35rem,1.15rem+0.8vw,1.75rem)] font-medium tracking-[-0.025em] text-[#faf9f5]">
                  Start a conversation.
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#faf9f5]/80">
                  Chat with your local model and keep your conversations together.
                </p>
              </div>

              {/* Chat Scene Illustration */}
              <div
                className="mt-7 min-w-0 min-h-[230px] flex flex-col text-[14px] leading-[1.55] justify-between"
                role="img"
                aria-label="Local chat illustration: a question about local AI and a short response."
              >
                {/* User question bubble */}
                <div className="ml-[30px] px-4 py-3 self-end text-white bg-[#575cf2] rounded-[19px_19px_4px_19px] text-[13.5px] leading-snug shadow-sm">
                  What can I do with a local model?
                </div>

                {/* AI response */}
                <div className="flex items-start gap-3 my-4">
                  <span className="text-[22px] leading-none text-[#818cf8] select-none" aria-hidden="true">
                    ✧
                  </span>
                  <p className="m-0 text-[#faf9f5]/85 text-[13.5px] leading-relaxed">
                    Draft an idea, explore a question, or connect the model to your coding tools.
                  </p>
                </div>

                {/* Message input bar */}
                <div className="flex items-center justify-between gap-2 p-2.5 px-3.5 text-[#faf9f5]/55 border border-[#faf9f5]/[0.14] bg-[#faf9f5]/[0.06] rounded-[16px] text-[13.5px]">
                  <span>Message your model</span>
                  <span
                    aria-hidden="true"
                    className="grid place-items-center w-[26px] h-[26px] rounded-[8px] text-white bg-[#575cf2] text-xs font-bold shrink-0 cursor-pointer"
                  >
                    ↑
                  </span>
                </div>
              </div>
            </article>

            {/* Card 3: Bring your tools along */}
            <article className="flex flex-col justify-between min-w-0 overflow-hidden p-6 md:p-7 rounded-[26px] bg-[#faf9f5]/[0.05] border border-white/[0.06]">
              <div>
                <h3 className="text-[clamp(1.35rem,1.15rem+0.8vw,1.75rem)] font-medium tracking-[-0.025em] text-[#faf9f5]">
                  Bring your tools along.
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#faf9f5]/80">
                  Connect compatible apps to the same local LLM through an OpenAI-compatible API.
                </p>
              </div>

              {/* Apps Scene Illustration */}
              <div
                className="mt-7 min-w-0 min-h-[230px] flex flex-col justify-between"
                role="img"
                aria-label="Connection illustration: Claude Code, OpenCode and Local Chat use the same local model."
              >
                <div className="flex flex-col divide-y divide-[#faf9f5]/[0.14]">
                  {/* Row 1: Claude Code */}
                  <div className="flex items-center gap-2.5 py-3.5 text-[14px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-[#818cf8] shrink-0"
                    >
                      <path
                        d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <strong className="text-[#faf9f5] font-medium">Claude Code</strong>
                    <span className="ml-auto text-[12px] text-[#faf9f5]/80 font-medium">Connected</span>
                  </div>

                  {/* Row 2: OpenCode */}
                  <div className="flex items-center gap-2.5 py-3.5 text-[14px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-[#818cf8] shrink-0"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
                      <path
                        d="m7 9 3 3-3 3m6 0h4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <strong className="text-[#faf9f5] font-medium">OpenCode</strong>
                    <span className="ml-auto text-[12px] text-[#faf9f5]/80 font-medium">Connected</span>
                  </div>

                  {/* Row 3: Local Chat */}
                  <div className="flex items-center gap-2.5 py-3.5 text-[14px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-[#818cf8] shrink-0"
                    >
                      <path
                        d="M12 3c1.3 5.5 3.5 7.7 9 9-5.5 1.3-7.7 3.5-9 9-1.3-5.5-3.5-7.7-9-9 5.5-1.3 7.7-3.5 9-9Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <strong className="text-[#faf9f5] font-medium">Local Chat</strong>
                    <span className="ml-auto text-[12px] text-[#faf9f5]/80 font-medium">Connected</span>
                  </div>
                </div>

                {/* Local Endpoint note */}
                <div className="flex items-center gap-2 pt-3 text-[12px] text-[#faf9f5]/55 leading-[1.55]">
                  <span className="text-[#818cf8] font-bold text-sm" aria-hidden="true">
                    ↳
                  </span>
                  <span>One local model · OpenAI-compatible API</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
