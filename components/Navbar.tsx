'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

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
  const { scrollY } = useScroll()

  // Advanced scroll-based styles
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.85)']
  )
  const navBackdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(16px)']
  )
  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 4px 30px rgba(0, 0, 0, 0.06)']
  )
  const navHeight = useTransform(
    scrollY,
    [0, 50],
    ['80px', '64px']
  )

  // Scroll progress indicator
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['about','skills','projects','contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on link click
  const handleNavClick = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progressScale }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: navBackground,
          backdropFilter: navBackdropFilter,
          WebkitBackdropFilter: navBackdropFilter,
          boxShadow: navShadow,
          height: navHeight,
        }}
        className="fixed top-0 inset-x-0 z-50 transition-[padding] duration-500"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 h-full">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-all"
            >
              <span className="font-display text-white text-lg font-bold">T</span>
            </motion.div>
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-ink tracking-wide group-hover:text-brand-600 transition-colors">Thu Paing Oo</p>
              <p className="font-mono text-[0.6rem] text-ink-subtle tracking-widest uppercase">Full-Stack Architect</p>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-surface-muted/50 rounded-2xl border border-white/20 backdrop-blur-md">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-colors duration-300 ${
                  active === l.href.replace('#','')
                    ? 'text-brand-700'
                    : 'text-ink-muted hover:text-ink'
                }`}>
                <span className="relative z-10">{l.label}</span>
                {active === l.href.replace('#','') && (
                  <motion.div layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-0"
                    transition={{ type:'spring', stiffness: 400, damping: 30 }} />
                )}
              </a>
            ))}
          </div>

          {/* Desktop contacts */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:thup2081@gmail.com"
              className="btn-primary text-sm py-2.5 px-6 shadow-lg shadow-brand-500/20 magnetic-btn touch-feedback"
            >
              Hire Me
              <motion.svg
                className="w-4 h-4 ml-2"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </motion.svg>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-surface-muted hover:bg-surface-border transition-colors relative z-50 touch-feedback"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-5 h-0.5 bg-ink rounded-full"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="block w-5 h-0.5 bg-ink rounded-full"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-5 h-0.5 bg-ink rounded-full"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 lg:hidden bg-white/95 backdrop-blur-xl border-b border-surface-border shadow-2xl"
            >
              <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-4 rounded-xl text-base font-medium text-ink hover:text-brand-600 hover:bg-brand-50 transition-colors flex items-center justify-between group touch-feedback"
                  >
                    {l.label}
                    <span className="text-brand-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                  className="h-px bg-surface-border my-4"
                />
                <motion.a
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  href="mailto:thup2081@gmail.com"
                  onClick={handleNavClick}
                  className="btn-primary justify-center py-3.5 text-base touch-feedback"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
