import { useEffect } from 'react'
import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { NavigationBar, FooterSection } from '@/components/wici'

const SITE = 'WiCi'

// Browser-tab title for each page; anything unlisted falls back to the site name.
const TITLES: Record<string, string> = {
  '/': 'WiCi — Systems for Wireless GPU and Local AI',
  '/wici-one': 'WiCi One — The First Wireless GPU',
  '/wici-infer': 'WiCi Infer — Local AI, 17x Faster',
  '/technology': 'How It Works — WiCi One',
  '/research': 'Research — WiCi',
  '/solutions/local-ai': 'Local AI — WiCi Solutions',
  '/solutions/creative-production': 'Creative Production — WiCi Solutions',
  '/solutions/physical-intelligence': 'Robotics — WiCi Solutions',
  '/solutions/virtual-reality': 'Virtual Reality — WiCi Solutions',
  '/solutions/smart-home': 'Smart Home — WiCi Solutions',
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  useEffect(() => {
    const key = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    document.title = TITLES[key] ?? SITE
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-[#1d1d1f] focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* 1. Translucent Navigation Bar with Dropdowns */}
      <NavigationBar />

      {/* 2. Main Page Content (Hero, Sections, etc.) */}
      <main id="main" className="flex-1">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <FooterSection />
    </div>
  )
}

function NotFound() {
  return (
    <section className="min-h-[70vh] pt-16 flex flex-col items-center justify-center text-center px-6 bg-[#0a0b0d] text-[#faf9f5]">
      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#c0bfe4] mb-4">
        Error 404
      </span>
      <h1 className="text-[clamp(2.3rem,1.8rem+2.6vw,4.1rem)] font-medium tracking-[-0.035em] leading-[1.08] mb-4">
        This page is out of range.
      </h1>
      <p className="max-w-[520px] text-[#faf9f5]/70 leading-relaxed mb-9">
        The page you were looking for does not exist or has moved. Everything else is still nearby.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="px-7 py-3 rounded-full bg-[#56558e] hover:bg-[#6664a5] text-white text-sm font-semibold transition"
        >
          Back to home
        </Link>
        <Link
          to="/wici-one"
          className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-medium transition"
        >
          See WiCi One
        </Link>
      </div>
    </section>
  )
}
