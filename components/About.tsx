'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const traits = [
  { label: 'Architecture-First Thinking' },
  { label: '24/7 Autonomous Systems'    },
  { label: 'Zero-Downtime Deployments'  },
  { label: 'Scalable API Design'        },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(0,229,255,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — profile image card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              {/* About bg layer */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image src="/about-bg.png" alt="" fill className="object-cover opacity-60" />
              </div>

              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-glow/20 shadow-[0_0_60px_rgba(0,229,255,0.08)]">
                <Image
                  src="/profile.png"
                  alt="Thu Paing Oo — Full-Stack Developer & Bot Architect"
                  width={800} height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -right-6 top-1/3 glass rounded-xl px-4 py-3 border border-cyan-glow/20 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
              >
                <p className="font-mono text-xs text-cyan-glow">{'{ bot: active }'}</p>
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-cyan-glow/15 rounded-sm" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-orange-hot/15 rounded-sm" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="section-label mb-4">// 01. ABOUT ME</p>
            <div className="accent-line mb-8" />

            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-ice leading-tight mb-8">
              I DON'T JUST WRITE CODE.<br />
              <span className="text-cyan-glow text-glow">I BUILD MACHINES.</span>
            </h2>

            <div className="space-y-4 font-body text-ice-dim leading-relaxed">
              <p>
                When a problem is too complex, too persistent, or needs to run at 3am without
                anyone watching — that's where I come in. I specialize in architecting robust,
                automated systems that handle the hard parts of software so you don't have to.
              </p>
              <p>
                From Telegram bots with anti-cheat logic protecting thousands of users, to media
                processing pipelines that parse and generate content autonomously —
                <span className="text-ice font-medium"> I build the infrastructure other developers rely on.</span>
              </p>
              <p>
                My stack is deep: Python backends, React frontends, Docker orchestration on Linux VPS,
                and API gateways that scale. Every system I ship is designed with one goal:
                <span className="text-cyan-glow font-mono"> uptime = 100%.</span>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 group"
                >
                  <span className="text-cyan-glow/40 group-hover:text-cyan-glow transition-colors text-sm">⬡</span>
                  <span className="font-mono text-xs text-ice-dim group-hover:text-ice transition-colors tracking-wide">{trait.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-4 glass rounded-xl border border-cyan-glow/10">
              <p className="font-mono text-xs text-cyan-glow/50 tracking-widest mb-3">REACH ME INSTANTLY</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:thup2081@gmail.com" className="font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors">
                  📧 thup2081@gmail.com
                </a>
                <a href="tel:+959982335714" className="font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors">
                  📞 +959 982 335 714
                </a>
                <a href="https://t.me/thupaingoo" className="font-mono text-xs text-ice-dim hover:text-cyan-glow transition-colors">
                  ✈️ Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
