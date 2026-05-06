'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-[0_4px_60px_rgba(0,0,0,0.5)]' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">

          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-cyan-glow/40 flex items-center justify-center relative">
              <span className="text-cyan-glow font-mono text-xs font-bold">T</span>
              <div className="absolute inset-0 bg-cyan-glow/5 group-hover:bg-cyan-glow/15 transition-colors" />
            </div>
            <div>
              <p className="font-display text-lg text-ice leading-none tracking-wider">THU PAING OO</p>
              <p className="font-mono text-[0.6rem] text-cyan-glow/60 tracking-[0.2em] leading-none mt-0.5">FULL-STACK · BOT ARCHITECT</p>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-ice-dim tracking-widest uppercase hover:text-cyan-glow transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-glow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Contact links — prominently visible */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:thup2081@gmail.com"
              className="flex items-center gap-2 font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors group"
              title="Email"
            >
              <svg className="w-3.5 h-3.5 text-cyan-glow/50 group-hover:text-cyan-glow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="hidden xl:inline">thup2081@gmail.com</span>
            </a>

            <div className="w-px h-4 bg-cyan-glow/10" />

            <a
              href="https://t.me/thupaingoo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors group"
              title="Telegram"
            >
              <svg className="w-3.5 h-3.5 text-cyan-glow/50 group-hover:text-cyan-glow transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="hidden xl:inline">Telegram</span>
            </a>

            <div className="w-px h-4 bg-cyan-glow/10" />

            <a
              href="tel:+959982335714"
              className="flex items-center gap-2 font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors group"
              title="Phone"
            >
              <svg className="w-3.5 h-3.5 text-cyan-glow/50 group-hover:text-cyan-glow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="hidden xl:inline">+959 982 335 714</span>
            </a>

            <div className="w-px h-4 bg-cyan-glow/10" />

            <a
              href="mailto:thup2081@gmail.com"
              className="btn-primary text-xs py-2 px-4 ml-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-cyan-glow transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-cyan-glow transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-cyan-glow transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden glass-strong border-t border-cyan-glow/10"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-sm text-ice-dim hover:text-cyan-glow transition-colors tracking-widest uppercase"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-cyan-glow/10 my-2" />
                <a href="mailto:thup2081@gmail.com" className="font-mono text-sm text-cyan-glow">thup2081@gmail.com</a>
                <a href="tel:+959982335714" className="font-mono text-sm text-ice-dim">+959 982 335 714</a>
                <a href="https://t.me/thupaingoo" target="_blank" rel="noreferrer" className="font-mono text-sm text-ice-dim">Telegram: @thupaingoo</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
