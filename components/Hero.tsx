'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'

const ROLES = [
  "Building Telegram Bots",
  "Architecting Backend APIs",
  "Designing Full-Stack Web Apps",
  "Automating Workflows",
  "Scaling Systems to 10k+ Users"
]

const stagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Advanced Parallax & Scroll Effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 5])

  // Mouse follower for cursor effect
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15 })

  // Detect touch device
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Mouse move handler for cursor follower
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isTouch) {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      const rect = (ref.current as HTMLElement)?.getBoundingClientRect()
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        })
      }
    }
  }, [isTouch, cursorX, cursorY])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 30)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((p) => (p + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  const stats = [
    { value:'2+',   label:'Years Experience' },
    { value:'24/7', label:'System Uptime'    },
    { value:'10+',  label:'Bots Deployed'    },
    { value:'100%', label:'Client Success'   },
  ]

  const titleWords = "Hi, I'm".split(' ')
  const nameWords = "Thu Paing Oo".split(' ')

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white/50 snap-section">

      {/* Cursor follower (desktop only) */}
      {!isTouch && (
        <motion.div
          className="cursor-follower hidden md:block"
          style={{ left: springX, top: springY }}
        />
      )}

      {/* Advanced Animated Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50/50 via-white to-white"/>

        {/* Animated Orbs with mouse interaction */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            x: mousePos.x * 30,
            y: mousePos.y * 30,
          }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-brand-200/40 to-violet-200/30 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            x: mousePos.x * -20,
            y: mousePos.y * -20,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-sky-200/40 to-emerald-100/30 blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-300/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            style={{ opacity: opacityText, scale: scaleText }}
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Status badge */}
            <motion.div variants={stagger.item} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 mb-8 shadow-sm touch-feedback">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-emerald-700 font-semibold tracking-wider uppercase">Available for new projects</span>
            </motion.div>

            {/* Main heading with split text animation */}
            <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-ink mb-4 relative z-10">
              <div className="flex flex-wrap overflow-hidden">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="mr-3 sm:mr-4 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap overflow-hidden pb-2">
                {nameWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "100%", opacity: 0, rotate: 5 },
                      show: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="mr-3 sm:mr-4 inline-block text-gradient-animated"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>

            {/* Typewriter */}
            <motion.div variants={stagger.item} className="flex items-center gap-3 mb-8 h-10 bg-surface-muted/50 w-fit px-4 py-2 rounded-lg border border-surface-border backdrop-blur-sm">
              <motion.span
                animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-brand-500 font-mono text-xl"
              >
                ⚙
              </motion.span>
              <span className="font-mono text-base sm:text-lg text-ink font-semibold tracking-wide">
                {displayed}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-5 bg-brand-500 ml-1 align-middle"/>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={stagger.item} className="text-ink-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-light">
              I craft robust digital architectures that <strong className="text-ink font-semibold">run flawlessly while you sleep</strong>. From highly intelligent AI Telegram bots to scalable full-stack web platforms with bulletproof APIs.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-primary text-base px-8 py-3.5 rounded-xl bg-ink text-white border-transparent hover:bg-ink-soft magnetic-btn touch-feedback touch-ripple"
              >
                Explore Work
                <motion.span
                  className="inline-block ml-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(241, 245, 249, 1)" }}
                whileTap={{ scale: 0.95 }}
                href="mailto:thup2081@gmail.com"
                className="btn-outline text-base px-8 py-3.5 rounded-xl border-2 border-surface-border text-ink hover:text-ink font-semibold magnetic-btn touch-feedback touch-ripple"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile visual with 3D effects ── */}
          <motion.div
            style={{ y: yImage, rotateZ: rotateImage }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0 perspective-1000"
          >
            {/* Magnetic Hover Wrapper */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] z-10"
            >
              {/* Image Mask Reveal */}
              <motion.div
                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 mix-blend-overlay"/>
                <Image
                  src="/profile.png"
                  alt="Thu Paing Oo"
                  fill
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Floating Elements attached to Image */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white z-20"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">🚀</span>
                  <span className="font-display text-xs font-bold text-ink">Fast Delivery</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-1/4 bg-ink rounded-2xl p-4 shadow-xl border border-ink-soft z-20"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-brand-400 font-mono text-xl font-bold">{`</>`}</span>
                  <span className="font-mono text-xs font-medium text-white">Clean Code</span>
                </div>
              </motion.div>

              {/* Glow ring behind image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-[40px] border border-dashed border-brand-200/30 -z-10"
              />
            </motion.div>

            {/* Background decorative blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-300 to-violet-300 rounded-[40px] blur-3xl opacity-30 -z-10 scale-110 translate-y-4" />
          </motion.div>
        </div>

        {/* Stats row with staggered counter reveal */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-y border-surface-border py-10"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="flex flex-col items-center sm:items-start group touch-feedback"
            >
              <motion.div
                className="font-display text-4xl sm:text-5xl font-black text-ink mb-2 group-hover:scale-110 group-hover:text-brand-600 transition-all origin-left"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {value}
              </motion.div>
              <p className="text-sm text-ink-muted font-mono uppercase tracking-wider">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="font-mono text-[10px] text-ink-subtle tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-ink-subtle/30 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-brand-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
