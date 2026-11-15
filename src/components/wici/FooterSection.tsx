import React from 'react'
import { Link } from '@tanstack/react-router'

interface FooterLink {
  label: string
  to: string
  hash?: string
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Products',
    links: [
      { label: 'WiCi One', to: '/wici-one' },
      { label: 'How it works', to: '/technology' },
      { label: 'WiCi Infer', to: '/wici-infer' },
      { label: 'InferSSD', to: '/wici-infer', hash: 'engine' },
      { label: 'Benchmarks', to: '/wici-infer', hash: 'benchmarks' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'All Research', to: '/research' },
      { label: 'Wireless GPU', to: '/research', hash: 'wireless-gpu' },
      { label: 'SSD Inference', to: '/research', hash: 'ssd-inference' },
      { label: 'Academic Papers', to: '/research', hash: 'publications' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Local AI', to: '/solutions/local-ai' },
      { label: 'For Creators', to: '/solutions/creative-production' },
      { label: 'For Robotics', to: '/solutions/physical-intelligence' },
      { label: 'Virtual Reality', to: '/solutions/virtual-reality' },
      { label: 'Smart Home', to: '/solutions/smart-home' },
    ],
  },
  {
    title: 'Lab',
    links: [
      { label: 'Careers', to: '/', hash: 'careers' },
      { label: 'For Developers', to: '/technology', hash: 'docs' },
      { label: 'Developer Access', to: '/technology', hash: 'access' },
      { label: 'Press', to: '/wici-one', hash: 'press' },
    ],
  },
]

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]/60 py-16 px-6 sm:px-8 text-[#1d1d1f]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 text-[13px]">
        {/* Logo & Manifesto Column */}
        <div className="col-span-2 flex flex-col gap-4">
          <Link to="/" aria-label="WiCi Home" className="self-start">
            <img src="/logo-lockup.svg" alt="WiCi" className="h-6 w-auto object-contain" />
          </Link>
          <p className="text-[#6e6e73] leading-relaxed max-w-[280px]">
            A systems research lab building open infrastructure for wireless GPU and local AI.
          </p>
          <p className="text-[11px] text-[#6e6e73] mt-auto">
            © {new Date().getFullYear()} WiCi Systems Inc. All rights reserved.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <span className="font-semibold text-[#1d1d1f] text-[12px] uppercase font-mono tracking-wider">
              {column.title}
            </span>
            {column.links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="text-[#6e6e73] hover:text-[#56558e] transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  )
}
