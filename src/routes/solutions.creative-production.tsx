import { createFileRoute } from '@tanstack/react-router'
import {
  CreativeBanner,
  CreativeHero,
  CreativeSolution,
  CreativeCta,
} from '@/components/solutions'

export const Route = createFileRoute('/solutions/creative-production')({
  component: CreativeProductionPageComponent,
})

function CreativeProductionPageComponent() {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] pt-16">
      {/* 1. Hero Banner Image & Title */}
      <CreativeBanner />

      {/* 2. Hero Intro / Lede */}
      <CreativeHero />

      {/* 3. The Tech Solution with Video, Badges, Benchmarks Table & WiCi One Card */}
      <CreativeSolution />

      {/* 4. Untethered Hardware CTA Band */}
      <CreativeCta />
    </div>
  )
}
