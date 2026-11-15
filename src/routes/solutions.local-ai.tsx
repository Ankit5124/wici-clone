import { createFileRoute } from '@tanstack/react-router'
import {
  LocalAiBanner,
  LocalAiHero,
  LocalAiSolution,
  LocalAiCta,
} from '@/components/solutions'

export const Route = createFileRoute('/solutions/local-ai')({
  component: LocalAiPageComponent,
})

function LocalAiPageComponent() {
  return (
    <div className="flex flex-col bg-white text-[#1d1d1f] pt-16">
      {/* 1. Top Hero Banner with Background Photo & Kicker */}
      <LocalAiBanner />

      {/* 2. Hero Lede Intro */}
      <LocalAiHero />

      {/* 3. The Tech Solution with Video Player, Benchmarks Table, Product Card & Links */}
      <LocalAiSolution />

      {/* 4. Untethered Hardware CTA Band */}
      <LocalAiCta />
    </div>
  )
}
