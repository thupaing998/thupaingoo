'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ROLES = ['Full-Stack Developer','Bot Architect','API Engineer','System Designer']

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } },
  item: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23,1,0.32,1] } } },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [typing,     setTyping]     = useState(true)

  useEffect(() => {
    const target = ROLES[roleIndex]
    const i = displayed.length
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i+1)), 68)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i-1)), 32)
        return () => clearTimeout(t)
      } else { setRoleIndex(p => (p+1) % ROLES.length); setTyping(true) }
    }
  }, [displayed, typing, roleIndex])

  const stats = [
    { value:'5+',   label:'Years of Experience' },
    { value:'24/7', label:'System Uptime'        },
    { value:'∞',    label:'Bots Deployed'         },
    { value:'100%', label:'Remote Available'      },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Soft gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/40 pointer-events-none"/>

      {/* Decorative blobs — pure CSS, no Three.js */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/50 to-violet-100/40 blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50/60 to-sky-100/40 blur-3xl pointer-events-none"/>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage:'radial-gradient(circle, #CBD5E1 1px, transparent 1px)', backgroundSize:'32px 32px' }}/>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text ── */}
          <motion.div variants={stagger.container} initial="hidden" animate="show">

            {/* Status badge */}
            <motion.div variants={stagger.item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot"/>
              <span className="font-mono text-xs text-emerald-700 font-medium tracking-wide">Available for Projects</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={stagger.item}
              className="font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.08] tracking-tight text-ink mb-2">
              Hi, I'm<br/>
              <span className="gradient-text">Thu Paing Oo</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={stagger.item} className="flex items-center gap-2 mb-6 h-9">
              <span className="text-brand-400 font-mono text-lg font-bold">{'>'}</span>
              <span className="font-mono text-base sm:text-lg text-ink-muted font-medium">
                {displayed}<span className="inline-block w-0.5 h-5 bg-brand-500 ml-0.5 animate-pulse align-middle"/>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={stagger.item}
              className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              I architect systems that{' '}
              <span className="text-ink font-semibold">run while you sleep</span> — from intelligent
              Telegram bots to full-stack platforms with bulletproof API layers.
              Complexity is my playground.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="mailto:thup2081@gmail.com" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>

            {/* Contact chips */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-2">
              <a href="mailto:thup2081@gmail.com" className="contact-chip">
                <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                thup2081@gmail.com
              </a>
              <a href="tel:+959982335714" className="contact-chip">
                <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +959 982 335 714
              </a>
              <a href="https://t.me/thupaingoo" target="_blank" rel="noreferrer" className="contact-chip">
                <svg className="w-3.5 h-3.5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23,1,0.32,1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative rings — CSS only */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full border border-brand-100/60 animate-float" style={{ animationDuration:'6s' }}/>
              <div className="absolute w-64 h-64 rounded-full border border-brand-200/40 animate-float" style={{ animationDuration:'8s', animationDelay:'1s' }}/>
            </div>

            {/* Profile card */}
            <div className="relative w-64 sm:w-72">
              {/* Card shadow glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-200/30 to-violet-200/20 blur-xl"/>

              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-card-hover">
                <Image src="/profile.png" alt="Thu Paing Oo" width={800} height={1000} className="w-full h-auto" priority/>
              </div>

              {/* Floating status badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 bg-white rounded-xl px-3 py-2.5 shadow-card border border-surface-border"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot"/>
                  <span className="font-mono text-xs font-semibold text-ink-soft">bot: online</span>
                </div>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-xl px-3 py-2.5 shadow-card border border-surface-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-brand-500 flex items-center justify-center">
                    <span className="text-white text-[10px]">🐍</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-ink-soft">Python 3.12</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card">
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">{value}</p>
              <p className="text-xs text-ink-subtle font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[0.6rem] text-ink-faint tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-brand-300 to-transparent"/>
      </motion.div>
    </section>
  )
}
