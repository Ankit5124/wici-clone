import { createFileRoute } from '@tanstack/react-router'
import {
  ResearchHero,
  ResearchStickyNav,
  ResearchPerspectivesSection,
  ResearchWirelessGpuSection,
  ResearchSsdInferenceSection,
  ResearchRealTimeSection,
  ResearchPublicationsSection,
} from '@/components/wici-research'

export const Route = createFileRoute('/research')({
  component: ResearchPageComponent,
})

function ResearchPageComponent() {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] min-h-screen pt-16">
      {/* 1. Hero with Mosaic Visuals & Core Manifesto */}
      <ResearchHero />

      {/* 2. Sticky Pill Navigation for In-Page Research Areas */}
      <ResearchStickyNav />

      {/* 3. Perspectives Section */}
      <ResearchPerspectivesSection />

      {/* 4. Research Area 01: Wireless GPU */}
      <ResearchWirelessGpuSection />

      {/* 5. Research Area 02: SSD Inference */}
      <ResearchSsdInferenceSection />

      {/* 6. Research Area 03: Real-Time Interaction + Lab Recruitment CTA */}
      <ResearchRealTimeSection />

      {/* 7. Academic Publications (Peer-Reviewed Papers & ArXiv Preprints) */}
      <ResearchPublicationsSection />
    </div>
  )
}
