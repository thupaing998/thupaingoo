'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const traits = [
  { icon:'⚡', label:'Architecture-First Thinking',  desc:'Every system designed to scale before it needs to.' },
  { icon:'🔄', label:'24/7 Autonomous Systems',      desc:'Production bots running without human intervention.' },
  { icon:'🛡️', label:'Anti-Cheat & Security Logic', desc:'Behavioral analysis, HMAC signing, replay prevention.' },
  { icon:'🚀', label:'Zero-Downtime Deployment',     desc:'Docker-based CI/CD on Linux VPS with Nginx proxy.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 24 },
    show:    { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.23,1,0.32,1] } },
  })

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity:0, x:-32 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.8, ease:[0.23,1,0.32,1] }}
            className="relative flex justify-center"
          >
            {/* Background shape */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 -z-10"/>

            {/* About bg + profile stacked */}
            <div className="relative w-72 sm:w-80">
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30">
                <Image src="/about-bg.png" alt="" fill className="object-cover"/>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-card-hover">
                <Image src="/profile.png" alt="Thu Paing Oo" width={800} height={1000} className="w-full h-auto"/>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y:[0,-7,0] }} transition={{ repeat:Infinity, duration:3.5, ease:'easeInOut' }}
                className="absolute -right-5 top-10 bg-white rounded-xl px-3 py-2.5 shadow-card border border-surface-border"
              >
                <p className="font-mono text-xs font-bold text-brand-600">{ `{ uptime: "99.9%" }` }</p>
              </motion.div>

              {/* XP badge */}
              <motion.div
                animate={{ y:[0,-5,0] }} transition={{ repeat:Infinity, duration:4, ease:'easeInOut', delay:1.2 }}
                className="absolute -left-5 bottom-16 bg-white rounded-xl p-3 shadow-card border border-surface-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-ink-soft">Years Exp.</p>
                    <p className="text-[9px] text-ink-subtle">Full-Stack Dev</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <div>
            <motion.div variants={fadeUp(0)} initial="hidden" animate={inView?'show':{}}>
              <p className="label mb-3">// 01. About Me</p>
              <div className="section-divider"/>
            </motion.div>

            <motion.h2 variants={fadeUp(0.1)} initial="hidden" animate={inView?'show':{}}
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-tight mb-6">
              I Don't Just Write Code.{' '}
              <span className="gradient-text">I Build Machines.</span>
            </motion.h2>

            <motion.div variants={fadeUp(0.2)} initial="hidden" animate={inView?'show':{}}
              className="space-y-4 text-ink-muted leading-relaxed mb-8">
              <p>
                When a problem is too complex, too persistent, or needs to run at 3am without anyone
                watching — that's where I come in. I specialize in architecting robust, automated
                systems that handle the hard parts so you don't have to.
              </p>
              <p>
                From Telegram bots protecting thousands of users with anti-cheat logic, to media
                processing pipelines that generate content autonomously —{' '}
                <span className="text-ink font-semibold">I build the infrastructure other developers rely on.</span>
              </p>
            </motion.div>

            {/* Trait cards */}
            <motion.div variants={fadeUp(0.3)} initial="hidden" animate={inView?'show':{}}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {traits.map((t) => (
                <div key={t.label} className="card p-4 flex gap-3">
                  <span className="text-xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-0.5">{t.label}</p>
                    <p className="text-xs text-ink-subtle leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact block */}
            <motion.div variants={fadeUp(0.4)} initial="hidden" animate={inView?'show':{}}
              className="flex flex-wrap gap-2">
              <a href="mailto:thup2081@gmail.com" className="btn-primary">
                Send Email
              </a>
              <a href="https://t.me/Recapadmin" target="_blank" rel="noreferrer" className="btn-outline">
                Telegram
              </a>
              <a href="tel:+959982335714" className="contact-chip">
                ☎ +959 982 335 714
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
