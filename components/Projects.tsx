'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

const code = `
<span class="token-keyword">from</span> fastapi <span class="token-keyword">import</span> FastAPI, Request, HTTPException
<span class="token-keyword">from</span> core.security <span class="token-keyword">import</span> verify_hmac, is_nonce_used, mark_nonce_used

<span class="token-decorator">@app.middleware</span>(<span class="token-string">"http"</span>)
<span class="token-keyword">async def</span> <span class="token-function">anti_cheat_middleware</span>(req: Request, call_next):
    <span class="token-keyword">if</span> req.url.path == <span class="token-string">"/api/v1/score/submit"</span>:
        signature = req.headers.get(<span class="token-string">"X-Signature"</span>)
        nonce = req.headers.get(<span class="token-string">"X-Nonce"</span>)
        
        <span class="token-comment"># 1. Prevent replay attacks using Redis TTL</span>
        <span class="token-keyword">if await</span> is_nonce_used(nonce):
            <span class="token-keyword">raise</span> HTTPException(<span class="token-number">429</span>, <span class="token-string">"Replay attack detected"</span>)
            
        <span class="token-comment"># 2. Verify payload integrity</span>
        body = <span class="token-keyword">await</span> req.body()
        <span class="token-keyword">if not</span> verify_hmac(body, signature, SECRET_KEY):
            <span class="token-keyword">raise</span> HTTPException(<span class="token-number">403</span>, <span class="token-string">"Invalid signature"</span>)
            
        <span class="token-keyword">await</span> mark_nonce_used(nonce)
        
    <span class="token-keyword">return await</span> call_next(req)`

const wfSteps = [
  { icon:'📥', label:'Input Source',   desc:'Video URL or file upload via bot command',         color:'#3B82F6', time:'<1s'  },
  { icon:'🔍', label:'Media Analysis', desc:'FFprobe extracts codec, duration & streams',       color:'#7C3AED', time:'~2s'  },
  { icon:'🔤', label:'Subtitle Parse', desc:'SRT/ASS tokenizer + HTML entity cleanup',          color:'#059669', time:'~3s'  },
  { icon:'🤖', label:'AI Translate',   desc:'Batched GPT calls with context window',            color:'#EA580C', time:'~8s'  },
  { icon:'🎬', label:'Mux & Encode',   desc:'FFmpeg burns subtitles & re-encodes',              color:'#DC2626', time:'~4m'  },
  { icon:'📤', label:'Delivery',       desc:'Bot sends compressed file via Telegram API',       color:'#0891B2', time:'<30s' },
]

function Project1() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Advanced Parallax Effects for Phone Mockup
  const phoneY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [15, -5])
  
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2rem] border border-surface-border shadow-2xl overflow-hidden mb-16 relative"
    >
      {/* Decorative gradient blur behind card */}
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-brand-100/50 via-transparent to-violet-100/50 -z-10 blur-xl"/>

      {/* Card header bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-violet-500"/>

      <div className="p-8 sm:p-12 lg:p-16">
        {/* Meta */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-brand-600 tracking-widest uppercase bg-brand-50 px-3 py-1 rounded-full">Case Study 01</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Telegram Mini-App &<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">Anti-Cheat Engine</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 max-w-sm lg:justify-end">
            {['Python','FastAPI','Telegram API','JWT','PostgreSQL'].map(t => (
              <motion.span 
                whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF' }}
                key={t} 
                className="pill pill-brand cursor-default bg-white border-brand-200"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visuals & Problem/Solution */}
          <div className="space-y-10 relative">
            
            {/* Phone mockup with 3D Parallax */}
            <div className="flex justify-center xl:justify-start perspective-1000 h-[500px] items-center">
              <motion.div 
                style={{ y: phoneY, rotateZ: phoneRotate, rotateX: 10, rotateY: -15 }}
                className="relative w-[220px] rounded-[2.5rem] overflow-hidden border-[6px] border-ink shadow-2xl preserve-3d"
              >
                {/* Glossy reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 z-20 pointer-events-none" />
                <Image src="/app-mockup.png" alt="Telegram Anti-Cheat Bot UI" width={480} height={960} className="w-full h-auto z-10 relative"/>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/20 ml-8"></div>
                </div>
              </motion.div>
            </div>

            {/* Problem / Solution Cards */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl p-6 bg-red-50/50 border border-red-100 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-500"/>
                  <p className="font-mono text-xs font-bold text-red-600 tracking-widest uppercase">The Problem</p>
                </div>
                <p className="text-base text-ink-muted leading-relaxed">Players were exploiting API endpoints to forge scores. We faced hundreds of requests per second with faked timestamps and sophisticated replay attacks flooding the leaderboard.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl p-6 bg-emerald-50/50 border border-emerald-100 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"/>
                  <p className="font-mono text-xs font-bold text-emerald-700 tracking-widest uppercase">The Solution</p>
                </div>
                <p className="text-base text-ink-muted leading-relaxed">A layered anti-cheat engine: HMAC-signed requests with one-time nonces (Redis TTL), behavioral velocity analysis detecting inhuman patterns, and a silent shadow-ban queue system.</p>
              </motion.div>
            </div>
          </div>

          {/* Code block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-brand-100/40 to-violet-100/40 rounded-full blur-[60px] -z-10" />
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="code-block border border-gray-800 shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="code-header bg-[#161B22] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"/>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"/>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"/>
                </div>
                <span className="font-mono text-xs text-gray-400 ml-4 font-medium">secure_api.py</span>
                <span className="ml-auto flex items-center gap-2 font-mono text-[10px] font-bold text-[#8B949E] bg-[#21262D] px-2.5 py-1 rounded-md border border-gray-700">
                  <span className="text-blue-400">🐍</span> Python 3.12
                </span>
              </div>
              <pre className="text-sm bg-[#0D1117] p-6 overflow-x-auto leading-loose" dangerouslySetInnerHTML={{ __html: code }}/>
            </motion.div>
            <p className="text-xs text-ink-faint font-mono mt-4 text-right flex items-center justify-end gap-2">
              <span className="w-4 h-px bg-surface-border inline-block"/>
              HMAC + nonce anti-replay middleware snippet
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function Project2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Workflow image scale effect
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95])
  
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2rem] border border-surface-border shadow-2xl overflow-hidden relative"
    >
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-orange-50/50 via-transparent to-red-50/50 -z-10 blur-xl"/>
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-red-400 to-red-600"/>

      <div className="p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 px-3 py-1 rounded-full">Case Study 02</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Media Processing<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Automation Pipeline
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 max-w-sm lg:justify-end">
            {['Python','FFmpeg','Aiogram','OpenAI API','Redis'].map(t => (
              <motion.span 
                whileHover={{ scale: 1.05, backgroundColor: '#FFF7ED' }}
                key={t} 
                className="pill cursor-default border-orange-200 text-orange-700 bg-white"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl p-6 bg-red-50/50 border border-red-100 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500"/>
              <p className="font-mono text-xs font-bold text-red-600 tracking-widest uppercase">The Problem</p>
            </div>
            <p className="text-base text-ink-muted leading-relaxed">Content creators were processing dozens of videos daily. Manual subtitle extraction, translation, and re-encoding was taking 4–6 hours of human labor per video.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl p-6 bg-emerald-50/50 border border-emerald-100 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500"/>
              <p className="font-mono text-xs font-bold text-emerald-700 tracking-widest uppercase">The Solution</p>
            </div>
            <p className="text-base text-ink-muted leading-relaxed">An automated Telegram bot media studio. Send a video link, receive a fully processed file. Redis queue handles concurrent jobs — reducing per-video time to under 8 minutes autonomously.</p>
          </motion.div>
        </div>

        {/* Workflow image with parallax scale */}
        <div className="rounded-2xl overflow-hidden border border-surface-border shadow-lg mb-16 bg-surface-muted/30">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image src="/workflow.png" alt="Media Processing Pipeline" width={1200} height={400} className="w-full h-auto object-cover"/>
          </motion.div>
        </div>

        {/* Workflow node steps with staggered entry */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-surface-border" />
            <p className="text-xs text-ink-subtle font-mono tracking-widest uppercase">Step-by-step Execution Engine</p>
            <span className="h-px w-8 bg-surface-border" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {wfSteps.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.05, boxShadow: `0 10px 30px -10px ${s.color}60` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="wf-node bg-white shadow-sm border border-surface-border rounded-2xl p-5 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Hover background effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                  style={{ backgroundColor: s.color }}
                />
                
                <motion.div 
                  className="text-3xl mb-3 p-3 rounded-xl"
                  style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {s.icon}
                </motion.div>
                <p className="text-sm font-bold text-ink mb-2 leading-tight" style={{ color: s.color }}>{s.label}</p>
                <p className="text-[11px] text-ink-subtle leading-relaxed mb-4 flex-grow">{s.desc}</p>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="inline-block font-mono text-[10px] px-3 py-1 rounded-full font-bold shadow-inner"
                  style={{ backgroundColor: `${s.color}10`, color: s.color, border: `1px solid ${s.color}30` }}
                >
                  ⏱ {s.time}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="projects" ref={ref} className="py-32 sm:py-40 bg-surface-soft relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24 text-center lg:text-left lg:flex lg:justify-between lg:items-end"
        >
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="h-px w-8 bg-brand-500" />
              <p className="font-mono text-sm font-bold text-brand-600 uppercase tracking-widest">03. Case Studies</p>
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-ink leading-tight">
              Real Problems.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">Engineered Solutions.</span>
            </h2>
          </div>
          <p className="text-ink-muted mt-6 lg:mt-0 max-w-md mx-auto lg:mx-0 text-lg font-light text-center lg:text-right">
            Internal & client-confidential projects. No live links — but here's the full architecture breakdown.
          </p>
        </motion.div>
        
        <Project1/>
        <Project2/>
      </div>
    </section>
  )
}
