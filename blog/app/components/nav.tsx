'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/#pledge-form', name: 'Pledge' },
  { href: '/#numbers', name: 'By the numbers' },
  { href: '/events', name: 'Events' },
  { href: '/#faq', name: 'FAQ' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="w-full bg-sand sticky top-0 z-50">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 h-[76px] px-4" id="nav" aria-label="Main">
        <Link href="/" className="font-display font-black uppercase text-[19px] sm:text-[26px] tracking-[0.02em] leading-none whitespace-nowrap text-deepnavy no-underline">
          Buy <span className="italic">Brightline</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-7">
          <div className="hidden md:flex items-center gap-7 text-[17px] font-semibold">
            {navItems.map(({ href, name }) => (
              <Link key={href} href={href} className="text-deepnavy no-underline hover:text-flameink">
                {name}
              </Link>
            ))}
          </div>
          <Link
            href="/#pledge-form"
            className="inline-flex items-center whitespace-nowrap min-h-[44px] px-3.5 sm:px-5 text-[15px] sm:text-base rounded-full bg-deepnavy text-white font-bold no-underline hover:bg-flame hover:text-deepnavy transition-colors"
          >
            Sign the pledge
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 text-deepnavy"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[100] bg-deepnavy text-cream flex flex-col px-4 pt-5 pb-10 overflow-y-auto"
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="font-display font-black uppercase text-2xl leading-none text-cream no-underline">
              Buy <span className="italic">Brightline</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-12 h-12 text-cream"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 flex flex-col items-center justify-center gap-9 text-center py-12">
            {navItems.map(({ href, name }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display font-black uppercase text-[32px] leading-none text-cream no-underline hover:text-flame"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/#pledge-form"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center min-h-[60px] px-10 rounded-full bg-flame text-deepnavy font-display font-black uppercase text-2xl no-underline"
            >
              Sign the pledge
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
