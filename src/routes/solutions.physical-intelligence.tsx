import { createFileRoute } from '@tanstack/react-router'
import { PhysicalIntelligencePage } from '@/components/solutions'

export const Route = createFileRoute('/solutions/physical-intelligence')({
  component: PhysicalIntelligenceRouteComponent,
})

function PhysicalIntelligenceRouteComponent() {
  return <PhysicalIntelligencePage />
}
