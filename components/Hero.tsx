'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

const ROLES = ['Full-Stack Developer','Bot Architect','System Designer','API Engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = ROLES[roleIndex]
    const i = displayed.length
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero bg texture */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-40" priority />
      </div>

      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,229,255,0.06),transparent)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-void/30 via-transparent to-void" />

      {/* Vertical accent lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[15, 50, 85].map(pct => (
          <div key={pct} className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-glow/5 to-transparent" style={{ left: `${pct}%` }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-4xl">

          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.3, duration:0.6 }}
            className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-ice-dim tracking-widest">AVAILABLE FOR PROJECTS</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.9, ease:[0.23,1,0.32,1] }}>
            <h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-none tracking-wide text-ice">THU</h1>
            <h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-none tracking-wide text-glow text-cyan-glow -mt-3">PAING OO</h1>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8, duration:0.6 }}
            className="mt-6 flex items-center gap-3">
            <span className="font-mono text-xs text-cyan-glow/50 tracking-widest">{'>'}</span>
            <span className="font-mono text-lg md:text-xl text-ice-dim">
              {displayed}<span className="animate-pulse text-cyan-glow">_</span>
            </span>
          </motion.div>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.0, duration:0.7, ease:[0.23,1,0.32,1] }}
            className="mt-8 max-w-xl font-body text-ice-dim text-base md:text-lg leading-relaxed">
            I architect systems that run while you sleep. From intelligent Telegram bots handling
            millions of messages to full-stack platforms with bulletproof API layers —
            <span className="text-ice"> complexity is my playground.</span>
          </motion.p>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2, duration:0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">View Case Studies</a>
            <a href="mailto:thup2081@gmail.com" className="flex items-center gap-2 font-mono text-sm text-ice-dim hover:text-cyan-glow transition-colors group">
              <span>Start a project</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5, duration:0.8 }}
            className="mt-16 flex flex-wrap gap-8">
            {[['24/7','System Uptime'],['5+','Years Building'],['∞','Bots Deployed'],['100%','Remote-Ready']].map(([val,lbl]) => (
              <div key={lbl} className="group">
                <p className="font-display text-4xl text-cyan-glow text-glow group-hover:scale-110 transition-transform inline-block">{val}</p>
                <p className="font-mono text-xs text-ice-dim/60 mt-1 tracking-widest uppercase">{lbl}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2, duration:1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-[0.6rem] text-ice-dim/40 tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-glow/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
