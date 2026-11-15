import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/smart-home')({
  component: SmartHomeExactClonePage,
})

function SmartHomeExactClonePage() {
  return (
    <main id="top" className="flex flex-col bg-white text-[#1d1d1f] font-sans antialiased">
      {/* 1. Full-Width Solutions Banner Hero (.sol-banner) */}
      <section className="sol-banner relative w-full overflow-hidden bg-[#09090b] text-white">
        <picture className="sol-banner-media block w-full">
          <source
            media="(max-width: 720px)"
            srcSet="/images/solutions/wall-panel-touch-banner-phone-720.webp 720w, /images/solutions/wall-panel-touch-banner-phone-1440.webp 1440w"
            sizes="100vw"
            width="1440"
            height="2560"
          />
          <img
            src="/images/solutions/wall-panel-touch-banner-1600.webp"
            srcSet="/images/solutions/wall-panel-touch-banner-1600.webp 1600w, /images/solutions/wall-panel-touch-banner-3200.webp 3200w"
            sizes="100vw"
            width="3200"
            height="1066"
            alt="A hand touching a glowing wall control panel in a warmly lit room."
            className="w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover object-center"
            fetchPriority="high"
          />
        </picture>
        <div className="sol-banner-copy absolute inset-0 flex flex-col justify-end max-w-[1200px] mx-auto px-6 pb-12 sm:pb-16 z-10 pointer-events-none">
          <span className="sol-banner-kicker text-xs font-mono font-semibold uppercase tracking-[0.12em] text-[#c0bfe4] mb-3 block">
            Solutions · Smart home
          </span>
          <h1 className="sol-banner-title text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
            Your home sees. Now it can understand.
          </h1>
        </div>
      </section>

      {/* 2. Hero Lede & Three Places Grid (.hero.hero--pi) */}
      <section className="hero hero--page hero--after-banner hero--pi py-20 lg:py-24 bg-white text-[#1d1d1f]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <p className="hero-lede max-w-[60ch] text-lg sm:text-[18px] text-[#3a3a3c] leading-[1.6]">
            Cameras and sensors already observe what happens at home. WiCi turns their feeds into private local context, so you can ask “What is the cat doing now?” or “What was the cat doing yesterday?” without continuously sending home video to the cloud.
          </p>

          <ol className="pi-places grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-14 p-0 list-none" aria-label="Three places smart home AI can run">
            {/* Place 1 */}
            <li className="pi-place flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7] bg-white text-[#1d1d1f]">
              <svg className="pi-place-glyph w-14 h-14 mb-3.5 text-[#6e6e73]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
                <path d="M41.9496 5.95886C41.155 5.97128 40.3978 6.29846 39.8441 6.8686C39.2905 7.43873 38.9856 8.20523 38.9965 8.99988V17.0624L13.0277 43.0311C8.40774 47.6541 5.91235 53.794 6.00235 60.328C6.01735 61.381 6.57577 62.3517 7.48477 62.8827C7.94977 63.1557 8.48035 63.287 9.00235 63.287C9.49735 63.287 9.9909 63.1638 10.4379 62.9178L12.5649 61.7577C14.7332 71.0405 23.0713 77.9999 32.9965 77.9999C33.7114 77.9999 34.4232 77.9611 35.1352 77.8885C35.2242 77.8794 35.3101 77.8577 35.3988 77.8475C35.9657 77.7825 36.5311 77.7008 37.0922 77.5897C37.3974 77.5289 37.6942 77.4469 37.9945 77.3729C38.3804 77.2787 38.7678 77.1905 39.1488 77.0741C39.2884 77.0311 39.4207 76.9734 39.559 76.9276C42.5862 75.9338 45.437 74.2547 47.8442 71.8475L71.8442 47.8475C74.7078 44.9839 76.547 41.5 77.4106 37.828L80.1176 35.121C80.6606 34.578 80.9935 33.844 80.9965 33.076C81.0175 26.638 78.5163 20.5821 73.9652 16.0311C68.4272 10.4931 60.8365 8.25227 53.6215 9.27527C52.1245 9.48827 50.9965 10.7544 50.9965 12.2694V20.9999C50.9965 22.6559 49.6555 23.9999 47.9965 23.9999C46.3375 23.9999 44.9965 22.6559 44.9965 20.9999V12.246V8.99988C45.002 8.59851 44.9269 8.20012 44.7756 7.8283C44.6244 7.45648 44.4001 7.11879 44.116 6.83522C43.8319 6.55166 43.4937 6.32799 43.1216 6.17746C42.7495 6.02693 42.351 5.95259 41.9496 5.95886ZM32.9965 41.9999C41.3163 41.9999 47.9965 48.6801 47.9965 56.9999C47.9965 60.5298 46.7411 63.7206 44.7211 66.2753L42.2719 68.7245C39.7173 70.7445 36.5264 71.9999 32.9965 71.9999C24.6767 71.9999 17.9965 65.3197 17.9965 56.9999C17.9965 48.6801 24.6767 41.9999 32.9965 41.9999ZM32.9965 47.9999C28.0255 47.9999 23.9965 52.0289 23.9965 56.9999C23.9965 61.9709 28.0255 65.9999 32.9965 65.9999C37.9675 65.9999 41.9965 61.9709 41.9965 56.9999C41.9965 55.6109 41.6552 54.3145 41.0942 53.1385C40.5541 53.6695 39.8155 53.9999 38.9965 53.9999C37.3405 53.9999 35.9965 52.6559 35.9965 50.9999C35.9965 50.1809 36.3268 49.4422 36.8578 48.9022C35.6818 48.3412 34.3855 47.9999 32.9965 47.9999Z" />
              </svg>
              <span className="pi-place-name text-3xl sm:text-4xl font-medium tracking-tight text-[#1d1d1f]">On each device</span>
              <span className="pi-place-verdict mt-2 text-lg font-semibold text-[#1d1d1f]">It sees, but understands little.</span>
              <span className="pi-place-desc mt-1.5 text-[15px] text-[#6e6e73] leading-normal">
                Small processors detect simple events, while each device keeps a separate, short view of the home.
              </span>
            </li>

            {/* Place 2 */}
            <li className="pi-place flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#d2d2d7] bg-white text-[#1d1d1f]">
              <svg className="pi-place-glyph w-14 h-14 mb-3.5 text-[#6e6e73]" viewBox="0 0 90 90" fill="currentColor" aria-hidden="true">
                <path d="M54 15C49.5771 15.0041 45.2413 16.2304 41.4714 18.5434C37.7015 20.8565 34.6441 24.1663 32.6367 28.1074C30.8467 27.3786 28.9327 27.0026 27 27C23.3711 27.0045 19.8668 28.3245 17.1367 30.7152C14.4066 33.1059 12.6357 36.4054 12.1523 40.002C8.61003 41.2187 5.53552 43.5102 3.35721 46.5571C1.17891 49.604 0.00533017 53.2545 0 57C0 61.7739 1.89642 66.3523 5.27208 69.7279C8.64773 73.1036 13.2261 75 18 75H72C76.7739 75 81.3523 73.1036 84.7279 69.7279C88.1036 66.3523 90 61.7739 90 57C89.9946 53.2726 88.8321 49.6389 86.6732 46.6004C84.5143 43.5619 81.4653 41.2686 77.9473 40.0371C77.9723 39.6918 77.9899 39.346 78 39C78 32.6348 75.4714 26.5303 70.9706 22.0294C66.4697 17.5286 60.3652 15 54 15Z" />
              </svg>
              <span className="pi-place-name text-3xl sm:text-4xl font-medium tracking-tight text-[#1d1d1f]">In the cloud</span>
              <span className="pi-place-verdict mt-2 text-lg font-semibold text-[#1d1d1f]">More AI, outside the home.</span>
              <span className="pi-place-desc mt-1.5 text-[15px] text-[#6e6e73] leading-normal">
                Video leaves the premises, long histories take time to process, and every answer depends on the internet.
              </span>
            </li>

            {/* Place 3 - WiCi Featured */}
            <li className="pi-place is-wici flex flex-col gap-1.5 p-7 rounded-[29px] border border-[#56558e] bg-[#56558e] text-white">
              <img className="pi-place-glyph pi-place-glyph--logo self-start w-auto h-10 my-2 mb-5 object-contain" src="/wici-white-lockup.svg" alt="WiCi" />
              <span className="pi-place-name text-3xl sm:text-4xl font-medium tracking-tight text-[#c0bfe4]">At home</span>
              <span className="pi-place-verdict mt-2 text-lg font-semibold text-white">Shared intelligence. Private context.</span>
              <span className="pi-place-desc mt-1.5 text-[15px] text-white/90 leading-normal">
                One nearby GPU understands feeds from supported devices and keeps their searchable history on the premises.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Section 01: The Problem (#problem) */}
      <section className="section section--tint pi-section py-24 bg-[#f5f5f7] text-[#1d1d1f]" id="problem">
        <div className="container max-w-[1200px] mx-auto px-6">
          <header className="pi-section-head mb-12">
            <span className="section-kicker text-base font-semibold text-[#56558e] tracking-tight block mb-3">01 · The problem</span>
            <h2 className="section-title text-4xl sm:text-6xl font-medium tracking-tight text-[#1d1d1f] leading-tight">
              Plenty of data. <em className="italic font-serif font-normal text-[#6664a5]">Very little context.</em>
            </h2>
            <p className="section-subtitle mt-5 max-w-[52ch] text-base text-[#6e6e73] leading-relaxed">
              A camera can show a live view or trigger on motion. Understanding what happened across rooms and across time requires more compute, memory, and context than most individual devices carry.
            </p>
          </header>

          <div className="pi-ledger max-w-[760px]" role="group" aria-label="AI on individual home devices versus in the cloud">
            <div className="pi-ledger-col flex flex-col gap-3 p-8 rounded-[29px] bg-white border border-[#d2d2d7] text-[#1d1d1f]">
              <span className="pi-ledger-name text-xl font-medium text-[#1d1d1f] flex items-baseline gap-2 pb-4 border-b border-[#f0f0f2]">
                In the cloud <small className="text-xs font-normal text-[#6e6e73]">remote video and sensor processing</small>
              </span>

              <span className="pi-ledger-line py-3 border-b border-[#f0f0f2] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm text-[#3a3a3c]">
                <strong className="sm:w-[130px] shrink-0 font-semibold text-[#1d1d1f] flex items-center gap-1.5">
                  Continuous <small className="text-xs font-serif italic text-[#56558e]">Upload</small>
                </strong>
                <span className="text-sm text-[#6e6e73]">camera streams or selected clips travel outside the premises for processing</span>
              </span>

              <span className="pi-ledger-line py-3 border-b border-[#f0f0f2] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm text-[#3a3a3c]">
                <strong className="sm:w-[130px] shrink-0 font-semibold text-[#1d1d1f] flex items-center gap-1.5">
                  Repeated <small className="text-xs font-serif italic text-[#56558e]">Work</small>
                </strong>
                <span className="text-sm text-[#6e6e73]">long recordings may be searched or summarized again for each new question</span>
              </span>

              <span className="pi-ledger-line py-3 border-b border-[#f0f0f2] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm text-[#3a3a3c]">
                <strong className="sm:w-[130px] shrink-0 font-semibold text-[#1d1d1f] flex items-center gap-1.5">
                  Off site <small className="text-xs font-serif italic text-[#56558e]">Data</small>
                </strong>
                <span className="text-sm text-[#6e6e73]">the most personal views in the home are processed by an external service</span>
              </span>

              <span className="pi-ledger-line py-3 border-b border-[#f0f0f2] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm text-[#3a3a3c]">
                <strong className="sm:w-[130px] shrink-0 font-semibold text-[#1d1d1f] flex items-center gap-1.5">
                  Online <small className="text-xs font-serif italic text-[#56558e]">Access</small>
                </strong>
                <span className="text-sm text-[#6e6e73]">answers and automations depend on the internet and the provider remaining available</span>
              </span>

              <span className="pi-ledger-verdict pt-3 text-xs text-[#6e6e73] font-medium">
                more capable models, with private context leaving the home
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 02: Local Memory (#memory) */}
      <section className="section pi-section py-24 bg-white text-[#1d1d1f]" id="memory">
        <div className="container max-w-[1200px] mx-auto px-6">
          <header className="pi-section-head mb-12">
            <span className="section-kicker text-base font-semibold text-[#56558e] tracking-tight block mb-3">02 · Local memory</span>
            <h2 className="section-title text-4xl sm:text-6xl font-medium tracking-tight text-[#1d1d1f] leading-tight">
              Process once. <em className="italic font-serif font-normal text-[#6664a5]">Ask whenever.</em>
            </h2>
            <p className="section-subtitle mt-5 max-w-[52ch] text-base text-[#6e6e73] leading-relaxed">
              WiCi processes supported camera and sensor feeds as events arrive. It records timestamps, objects, actions, and summaries in a local index that later questions can search directly.
            </p>
          </header>
        </div>
      </section>

      {/* 5. Section 03: Local Intelligence & Comparison (#local-intelligence) */}
      <section
        className="section pi-section pi-section--answer py-24 text-white relative overflow-hidden"
        id="local-intelligence"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 85% 0%, rgba(86, 85, 142, 0.55), transparent 70%), linear-gradient(170deg, #56558e 0%, #6664a5 55%, #56558e 100%)',
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          {/* Comparison Matrix Table */}
          <div className="pi-compare-wrap mb-16 rounded-[29px] bg-white text-[#1d1d1f] p-8 sm:p-12 shadow-2xl overflow-x-auto">
            <table className="pi-compare w-full text-left text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th scope="col" className="py-4 px-4 w-1/4"></th>
                  <th scope="col" className="is-wici py-4 px-4 w-1/4 bg-[#e8e8f2] text-[#56558e] font-semibold text-base rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <span>At home</span>
                      <img className="pi-compare-logo h-5 w-auto" src="/logo-lockup.svg" alt="WiCi" />
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-4 w-1/4 font-semibold text-[#1d1d1f]">On each device</th>
                  <th scope="col" className="py-4 px-4 w-1/4 font-semibold text-[#1d1d1f]">In the cloud</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f2]">
                <tr>
                  <th scope="row" className="py-4 px-4 font-semibold text-[#1d1d1f]">AI capacity</th>
                  <td className="is-wici py-4 px-4 bg-[#e8e8f2]/50 text-[#56558e] font-medium">Full-size GPU shared nearby</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Small device processor</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Datacenter GPU</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 px-4 font-semibold text-[#1d1d1f]">Context</th>
                  <td className="is-wici py-4 px-4 bg-[#e8e8f2]/50 text-[#56558e] font-medium">Shared local event history</td>
                  <td className="py-4 px-4 text-[#6e6e73]">One device and short history</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Provider-managed history</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 px-4 font-semibold text-[#1d1d1f]">Raw video path</th>
                  <td className="is-wici py-4 px-4 bg-[#e8e8f2]/50 text-[#56558e] font-medium">Inside the home</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Inside the device</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Across the internet</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 px-4 font-semibold text-[#1d1d1f]">Internet required</th>
                  <td className="is-wici py-4 px-4 bg-[#e8e8f2]/50 text-[#56558e] font-medium">No</td>
                  <td className="py-4 px-4 text-[#6e6e73]">No</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Yes</td>
                </tr>
                <tr>
                  <th scope="row" className="py-4 px-4 font-semibold text-[#1d1d1f]">AI upgrades</th>
                  <td className="is-wici py-4 px-4 bg-[#e8e8f2]/50 text-[#56558e] font-medium">Upgrade the shared models or GPU</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Replace each device</td>
                  <td className="py-4 px-4 text-[#6e6e73]">Provider controlled</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compute Layer Box + Context Boundaries Grid (.pi-needs-wrap) */}
          <div className="pi-needs-wrap grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* The Local Compute Layer Card */}
            <div className="pi-team p-8 sm:p-10 rounded-[29px] bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col justify-between">
              <div>
                <img className="pi-team-logo h-7 w-auto object-contain mb-4" src="/wici-white-lockup.svg" alt="WiCi" />
                <span className="pi-team-kicker text-xs font-mono uppercase tracking-wider text-[#c0bfe4] block mb-2 font-semibold">
                  The local compute layer
                </span>
                <span className="pi-team-title text-2xl sm:text-3xl font-medium text-white block mb-6 leading-tight">
                  The home keeps its own context.
                </span>
                <ul className="pi-team-facts space-y-3.5 text-sm text-white/90 list-disc list-inside mb-8 leading-relaxed">
                  <li><strong>Full-size GPU</strong> shared by supported cameras, sensors, and applications</li>
                  <li><strong>Local event memory</strong> for questions across time and devices</li>
                  <li><strong>Driver, SDK, or API</strong> integration paths for home software</li>
                </ul>
              </div>
              <Link to="/wici-one" className="pi-team-link inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#c0bfe4] transition">
                Build on WiCi <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Context Needs Boundaries Card */}
            <div className="pi-needs-copy p-8 sm:p-10 rounded-[29px] bg-black/20 backdrop-blur-md border border-white/10 text-white">
              <h3 className="pi-needs-title text-2xl sm:text-3xl font-medium text-white mb-3">Context needs boundaries.</h3>
              <p className="pi-needs-lede text-base text-white/80 leading-relaxed mb-6">
                A capable home system should understand more while exposing less. Integrations, retention, and access remain explicit.
              </p>
              <ul className="pi-needs space-y-4 text-sm text-white/90 leading-relaxed">
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <strong className="text-white shrink-0">Connect supported devices.</strong>
                  <span className="text-white/80">A camera or sensor must expose an authorized feed, event stream, or API.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <strong className="text-white shrink-0">Index useful events.</strong>
                  <span className="text-white/80">Store structured descriptions and references to relevant clips instead of treating every query as a new scan.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <strong className="text-white shrink-0">Separate permissions.</strong>
                  <span className="text-white/80">Each person and application receives access only to the rooms, devices, and history it needs.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <strong className="text-white shrink-0">Control retention.</strong>
                  <span className="text-white/80">The household decides how long raw media and derived context remain available.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pi-land mt-12"></div>
        </div>
      </section>
    </main>
  )
}
