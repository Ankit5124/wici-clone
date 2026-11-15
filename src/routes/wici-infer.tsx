import { createFileRoute } from '@tanstack/react-router'
import {
  WiciInferSubNav,
  WiciInferHero,
  WiciInferOverview,
  WiciInferEngine,
  WiciInferBenchmarks,
  WiciInferAppDemo,
  WiciInferSpecs,
  WiciInferFaq,
  WiciInferCta,
} from '@/components/wici-infer'
import { PressQuotesSection } from '@/components/wici'

export const Route = createFileRoute('/wici-infer')({
  component: WiciInferPageComponent,
})

function WiciInferPageComponent() {
  return (
    <div className="flex flex-col bg-[#0a0b0d] text-[#faf9f5] pt-16 min-h-screen">
      {/* 1. In-Page Sticky Subnav */}
      <WiciInferSubNav />

      {/* 2. Dark Hero Section */}
      <WiciInferHero />

      {/* 3. 1:1 Pixel-Accurate Overview Section: "Manage your local AI in one app." */}
      <WiciInferOverview />

      {/* 4. InferSSD Engine Section (800B parameters running locally) */}
      <WiciInferEngine />

      {/* 5. Comprehensive Benchmarks Section (#benchmarks anchor) */}
      {/* These sections use dark ink, so they sit on a light surface */}
      <div className="bg-white">
        <WiciInferBenchmarks />
      </div>

      {/* 6. Desktop App Live Telemetry (#demo) */}
      <WiciInferAppDemo />

      {/* 7. System Specs & Requirements (#specs) */}
      <div className="bg-white">
        <WiciInferSpecs />
      </div>

      {/* 8. Frequently Asked Questions Accordion (#faq) */}
      <WiciInferFaq />

      {/* 9. Press Quotes */}
      <div className="bg-white">
        <PressQuotesSection />
      </div>

      {/* 10. Download Ribbon & WiCi One Cross-Sell (#download) */}
      <WiciInferCta />
    </div>
  )
}
