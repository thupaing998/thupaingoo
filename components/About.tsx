'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

const traits = [
  { icon:'⚡', label:'Architecture-First Thinking',  desc:'Every system designed to scale before it needs to.' },
  { icon:'🔄', label:'24/7 Autonomous Systems',      desc:'Production bots running without human intervention.' },
  { icon:'🛡️', label:'Anti-Cheat & Security Logic', desc:'Behavioral analysis, HMAC signing, replay prevention.' },
  { icon:'🚀', label:'Zero-Downtime Deployment',     desc:'Docker-based CI/CD on Linux VPS with Nginx proxy.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Advanced Parallax Effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"])
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="about" ref={ref} className="py-32 sm:py-40 bg-surface-muted/30 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <motion.div 
        style={{ rotate: blobRotate }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-100/50 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-start perspective-1000"
          >
            {/* 3D Magnetic Container */}
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-80 sm:w-96 aspect-[3/4] preserve-3d"
            >
              {/* Image Mask Reveal Sequence */}
              <motion.div 
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                animate={inView ? { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" } : {}}
                transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
              >
                {/* Background overlay image */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                  <Image src="/about-bg.png" alt="" fill className="object-cover" />
                </div>
                
                <Image 
                  src="/profile.png" 
                  alt="Thu Paing Oo" 
                  fill
                  className="object-cover object-center z-10 scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 z-20 pointer-events-none" />
              </motion.div>

              {/* Floating 3D badge - Uptime */}
              <motion.div
                initial={{ opacity: 0, x: 20, translateZ: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -right-8 top-12 z-30"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white"
                >
                  <p className="font-mono text-sm font-bold text-brand-600">{ `{ uptime: "99.9%" }` }</p>
                </motion.div>
              </motion.div>

              {/* Floating 3D badge - Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20, translateZ: 80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -left-8 bottom-20 z-30"
              >
                <motion.div
                  animate={{ y: [8, -8, 8] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                  className="bg-ink rounded-2xl p-4 shadow-xl border border-ink-soft flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-lg font-bold shadow-inner">
                    2+
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">Years Exp.</p>
                    <p className="text-[10px] text-brand-200 mt-0.5">Full-Stack Architect</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div 
            style={{ y: textY }}
            variants={staggerContainer} 
            initial="hidden" 
            animate={inView ? 'show' : {}}
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-brand-500" />
                <p className="font-mono text-sm font-bold text-brand-600 uppercase tracking-widest">01. About Me</p>
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-ink leading-[1.1] mb-6">
              I Don't Just Write Code.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">I Build Machines.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-ink-muted text-lg leading-relaxed mb-10 font-light">
              <p>
                When a problem is too complex, too persistent, or needs to run flawlessly at 3 AM without anyone
                watching — that's where I come in. I specialize in architecting robust, autonomous
                systems that handle the hard parts so you don't have to.
              </p>
              <p>
                From highly intelligent Telegram bots protecting thousands of users with anti-cheat logic, to automated media
                processing pipelines — <strong className="text-ink font-medium">I build the infrastructure that modern digital businesses rely on.</strong>
              </p>
            </motion.div>

            {/* Trait cards grid with staggered reveal */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {traits.map((t) => (
                <motion.div 
                  key={t.label} 
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-white p-5 rounded-2xl border border-surface-border shadow-sm hover:shadow-xl hover:border-brand-200 transition-all group"
                >
                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform origin-center">{t.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-ink mb-1 group-hover:text-brand-600 transition-colors">{t.label}</p>
                      <p className="text-xs text-ink-subtle leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Actions */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="mailto:thup2081@gmail.com" 
                className="btn-primary py-3 px-6 text-base"
              >
                Send Email
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="https://t.me/Recapadmin" target="_blank" rel="noreferrer" 
                className="btn-outline py-3 px-6 text-base"
              >
                Telegram
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(241, 245, 249, 1)" }}
                href="tel:+959982335714" 
                className="contact-chip py-3 px-6 text-base border-transparent shadow-sm bg-white"
              >
                ☎ +959 982 335 714
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
