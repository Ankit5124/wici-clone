import { createFileRoute } from '@tanstack/react-router'
import {
  HeroSection,
  ManifestoSection,
  SystemsAccordionSection,
  WiCiOneSection,
  DemoFilmsSection,
  InferBenchmarksSection,
  CareersDevelopersSection,
  PressQuotesSection,
} from '@/components/wici'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f]">
      {/* 1. Cinematic Hero with Tap-to-Play Video */}
      <HeroSection />

      {/* 2. Manifesto: Local compute. Direct control. */}
      <ManifestoSection />

      {/* 3. Signature Purple Systems Accordion */}
      <SystemsAccordionSection />

      {/* 4. The First Wireless GPU Showcase */}
      <WiCiOneSection />

      {/* 5. Demo Films with Downer Video Player */}
      <DemoFilmsSection />

      {/* 6. 17x Faster Infer Benchmarks */}
      <InferBenchmarksSection />

      {/* 7. Careers & Developers Section */}
      <CareersDevelopersSection />

      {/* 8. Industry & Press Testimonials */}
      <PressQuotesSection />
    </div>
  )
}
