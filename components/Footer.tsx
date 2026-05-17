'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <footer id="contact" ref={ref} className="bg-ink text-white relative overflow-hidden">
      
      {/* Decorative Background grid & glow */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      {/* CTA band */}
      <div className="relative py-24 sm:py-32 z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'show' : {}}
            className="relative"
          >
            {/* Pulsing indicator */}
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                </span>
                <span className="font-mono text-xs text-brand-300 font-semibold tracking-wider uppercase">Open for Opportunities</span>
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white mb-6 leading-tight">
              Ready to Build Something<br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-violet-300">Extraordinary?</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-ink-muted text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Have a complex problem that needs a reliable, scalable, and automated solution? I engineer systems that work autonomously. Let's start the conversation.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center items-center">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="mailto:thup2081@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-ink font-semibold px-8 py-4 rounded-xl transition-all group"
              >
                <svg className="w-5 h-5 text-brand-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                thup2081@gmail.com
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/Recapadmin" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-surface-border/30 hover:bg-surface-border/50 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/10 group backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Direct Message
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="tel:+959982335714"
                className="inline-flex items-center gap-3 bg-surface-border/30 hover:bg-surface-border/50 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/10 group backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +959 982 335 714
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 border-t border-white/10 relative z-10 bg-ink-dark/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-violet-500 flex items-center justify-center shadow-lg group-hover:shadow-brand-500/50 transition-all group-hover:scale-110">
              <span className="font-display text-white text-lg font-bold">T</span>
            </div>
            <div>
              <p className="font-display font-bold text-white text-base group-hover:text-brand-300 transition-colors">Thu Paing Oo</p>
              <p className="font-mono text-[0.65rem] text-ink-muted tracking-[0.2em] uppercase">Architect / Engineer</p>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            {['#about','#skills','#projects'].map((href, i) => (
              <a key={href} href={href}
                className="text-sm font-medium text-ink-muted hover:text-white transition-colors capitalize relative group py-2">
                {href.replace('#','')}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300"/>
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="font-mono text-[11px] text-ink-subtle font-medium">© {new Date().getFullYear()} THU PAING OO.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
