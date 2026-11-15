import React, { useEffect, useRef, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  description: string
  to: string
  hash?: string
  tag?: string
}

interface NavGroup {
  key: string
  label: string
  to: string
  badge?: string
  badgeClass?: string
  items: NavItem[]
}

const GROUPS: NavGroup[] = [
  {
    key: 'wici-one',
    label: 'WiCi One',
    to: '/wici-one',
    badge: 'WIRELESS GPU',
    badgeClass: 'bg-[#56558e] text-white',
    items: [
      { label: 'Overview', description: 'The first wireless GPU for frontier AI.', to: '/wici-one' },
      { label: 'How it works', description: 'The technology behind WiCi One.', to: '/technology' },
      { label: 'For developers', description: 'Driver, SDK, and API.', to: '/wici-one', hash: 'developers' },
    ],
  },
  {
    key: 'wici-infer',
    label: 'WiCi Infer',
    to: '/wici-infer',
    badge: 'LOCAL INFERENCE',
    badgeClass: 'bg-white/20 text-white',
    items: [
      { label: 'Overview', description: 'The fastest local inference, on your Mac or PC.', to: '/wici-infer' },
      { label: 'Benchmarks', description: 'Measured on Apple and NVIDIA systems.', to: '/wici-infer', hash: 'benchmarks' },
      {
        label: 'InferSSD engine',
        description: 'Open-source inference, source code and docs.',
        to: '/wici-infer',
        hash: 'engine',
        tag: 'OPEN SOURCE',
      },
    ],
  },
  {
    key: 'solutions',
    label: 'Solutions',
    to: '/solutions/local-ai',
    items: [
      { label: 'Local AI', description: 'Trillion-parameter models on hardware you own.', to: '/solutions/local-ai' },
      { label: 'Creative artists', description: 'One GPU for the whole studio.', to: '/solutions/creative-production' },
      { label: 'Robotics', description: 'On-site GPU inference for robots.', to: '/solutions/physical-intelligence' },
      { label: 'Virtual reality', description: 'Heavy spatial compute, off the headset.', to: '/solutions/virtual-reality' },
      { label: 'Smart home', description: 'Private AI context for every device.', to: '/solutions/smart-home' },
    ],
  },
]

export const NavigationBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const href = useRouterState({ select: (state) => state.location.href })

  const closeAll = () => {
    setActiveMenu(null)
    setMobileOpen(false)
  }

  // Any navigation closes whatever is open.
  useEffect(closeAll, [href])

  // Escape closes menus; a click or tap outside the header does too.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll()
    }
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setActiveMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  // The page behind the full-screen mobile menu should not scroll.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-md text-white shadow-sm"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between text-[14px] relative">
        <Link to="/" className="flex items-center gap-3 group" aria-label="WiCi Home">
          <img
            src="/wici-white-lockup.svg"
            alt="WiCi"
            className="h-7 w-auto object-contain transition duration-200 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8 font-medium text-white/90">
          {GROUPS.map((group) => {
            const open = activeMenu === group.key
            return (
              <div key={group.key} className="relative py-4" onMouseEnter={() => setActiveMenu(group.key)}>
                <div className="flex items-center gap-1">
                  <Link
                    to={group.to}
                    className="flex items-center gap-2 hover:text-white transition"
                    activeProps={{ className: 'text-white' }}
                  >
                    <span>{group.label}</span>
                    {group.badge && (
                      <span className={`text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${group.badgeClass}`}>
                        {group.badge}
                      </span>
                    )}
                  </Link>
                  <button
                    type="button"
                    aria-label={`${group.label} menu`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setActiveMenu(open ? null : group.key)}
                    className="p-1 rounded-md text-white/60 hover:text-white transition cursor-pointer"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-white' : ''}`} />
                  </button>
                </div>

                {open && (
                  <div className="absolute top-full left-0 w-[270px] bg-white rounded-2xl shadow-2xl border border-[#d2d2d7]/80 text-[#1d1d1f] overflow-hidden p-1 z-50">
                    {group.items.map((item, index) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        hash={item.hash}
                        onClick={() => setActiveMenu(null)}
                        className={`flex flex-col p-3.5 rounded-xl hover:bg-[#f5f5f7] transition ${
                          index < group.items.length - 1 ? 'border-b border-[#f0f0f2]' : ''
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-[14px] font-semibold text-[#1d1d1f]">{item.label}</span>
                          {item.tag && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#e8e8f2] text-[#56558e] uppercase">
                              {item.tag}
                            </span>
                          )}
                        </span>
                        <span className="text-[12px] text-[#6e6e73] mt-0.5">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <Link
            to="/research"
            className="hover:text-white transition py-4"
            activeProps={{ className: 'text-white font-semibold' }}
            onMouseEnter={() => setActiveMenu(null)}
          >
            Research
          </Link>

          <Link
            to="/wici-one"
            hash="editions"
            className="px-5 py-2 rounded-full bg-white text-[#1d1d1f] text-[13px] font-semibold hover:bg-[#e8e8f2] transition"
            onMouseEnter={() => setActiveMenu(null)}
          >
            Buy
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="lg:hidden h-[calc(100dvh-4rem)] overflow-y-auto bg-[#09090b] border-t border-white/10 px-5 sm:px-8 pt-2 pb-10"
        >
          {GROUPS.map((group) => {
            const open = mobileGroup === group.key
            return (
              <div key={group.key} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setMobileGroup(open ? null : group.key)}
                  className="w-full flex items-center justify-between py-4 text-left text-[17px] font-medium cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    {group.label}
                    {group.badge && (
                      <span className={`text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${group.badgeClass}`}>
                        {group.badge}
                      </span>
                    )}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div className="pb-3 flex flex-col">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        hash={item.hash}
                        onClick={closeAll}
                        className="flex flex-col py-2.5 pl-3 rounded-lg hover:bg-white/5 transition"
                      >
                        <span className="text-[15px] text-white">{item.label}</span>
                        <span className="text-[12px] text-white/55 mt-0.5">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <Link
            to="/research"
            onClick={closeAll}
            className="block py-4 border-b border-white/10 text-[17px] font-medium"
          >
            Research
          </Link>

          <Link
            to="/wici-one"
            hash="editions"
            onClick={closeAll}
            className="mt-6 flex items-center justify-center w-full py-3.5 rounded-full bg-white text-[#1d1d1f] text-[15px] font-semibold"
          >
            Buy WiCi One
          </Link>
        </nav>
      )}
    </header>
  )
}
