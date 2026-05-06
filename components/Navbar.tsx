'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Work',     href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['about','skills','projects','contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_#E2E8F0] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow">
              <span className="font-display text-white text-sm font-bold">T</span>
            </div>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold text-ink tracking-wide">Thu Paing Oo</p>
              <p className="font-mono text-[0.58rem] text-ink-subtle tracking-widest">FULL-STACK · BOT ARCHITECT</p>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  active === l.href.replace('#','')
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-muted'
                }`}>
                {l.label}
                {active === l.href.replace('#','') && (
                  <motion.div layoutId="nav-pill"
                    className="absolute inset-0 bg-brand-50 rounded-lg -z-10"
                    transition={{ type:'spring', bounce:0.2, duration:0.4 }} />
                )}
              </a>
            ))}
          </div>

          {/* Desktop contacts — always visible */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="mailto:thup2081@gmail.com" className="contact-chip text-xs">
              <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              thup2081@gmail.com
            </a>
            <a href="https://t.me/Recapadmin" target="_blank" rel="noreferrer" className="contact-chip text-xs">
              <svg className="w-3.5 h-3.5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a href="mailto:thup2081@gmail.com" className="btn-primary text-sm py-2 px-5">
              Hire Me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          {/* Mobile: phone + menu */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:+959982335714" className="contact-chip text-xs hide-mobile">
              ☎ +959 982 335 714
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-surface-muted transition-colors"
              aria-label="Menu">
              <span className={`block w-5 h-0.5 bg-ink-muted rounded transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-ink-muted rounded transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-ink-muted rounded transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-surface-border"
            >
              <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors">
                    {l.label}
                  </a>
                ))}
                <div className="h-px bg-surface-border my-2"/>
                <a href="mailto:thup2081@gmail.com" className="px-4 py-2 text-sm text-brand-600 font-medium">✉ thup2081@gmail.com</a>
                <a href="tel:+959982335714"          className="px-4 py-2 text-sm text-ink-muted font-medium">☎ +959 982 335 714</a>
                <a href="https://t.me/Recapadmin"    className="px-4 py-2 text-sm text-ink-muted font-medium" target="_blank" rel="noreferrer">✈ Telegram</a>
                <a href="mailto:thup2081@gmail.com"  className="btn-primary mt-2 justify-center">Hire Me →</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
