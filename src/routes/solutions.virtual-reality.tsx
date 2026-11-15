import { createFileRoute } from '@tanstack/react-router'
import {
  VrHero,
  VrPillars,
  VrHeadsetSupport,
} from '@/components/solutions/virtual-reality'
import { PressQuotesSection } from '@/components/wici'

export const Route = createFileRoute('/solutions/virtual-reality')({
  component: VrSolutionPageComponent,
})

function VrSolutionPageComponent() {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] pt-16">
      {/* 1. VR Hero Section */}
      <VrHero />

      {/* 2. Architecture Pillars: Foveated Streaming, Wi-Fi 7 AirLink, RTX, ASW */}
      <VrPillars />

      {/* 3. Supported Headsets: Vision Pro, Quest 3, SteamVR */}
      <VrHeadsetSupport />

      {/* 4. Press & Industry Reviews */}
      <PressQuotesSection />
    </div>
  )
}
