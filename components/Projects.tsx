'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const codeSnippet = `<span class="token-comment"># Anti-replay HMAC middleware</span>
<span class="token-keyword">import</span> hmac, hashlib, time
<span class="token-keyword">from</span> fastapi <span class="token-keyword">import</span> HTTPException, Request
<span class="token-keyword">from</span> functools <span class="token-keyword">import</span> wraps

_used_nonces: set = set()

<span class="token-keyword">def</span> <span class="token-function">verify_request</span>(secret: str):
    <span class="token-keyword">def</span> <span class="token-function">decorator</span>(func):
        <span class="token-decorator">@wraps(func)</span>
        <span class="token-keyword">async def</span> <span class="token-function">wrapper</span>(req: Request, *args, **kwargs):
            token = req.headers.get(<span class="token-string">"X-Auth-Token"</span>)
            nonce = req.headers.get(<span class="token-string">"X-Nonce"</span>)
            ts    = float(req.headers.get(<span class="token-string">"X-Timestamp"</span>, <span class="token-number">0</span>))

            <span class="token-comment"># 1. Timestamp window ±30s</span>
            <span class="token-keyword">if</span> abs(time.time() - ts) > <span class="token-number">30</span>:
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">401</span>, <span class="token-string">"Request expired"</span>)

            <span class="token-comment"># 2. One-time nonce → no replay</span>
            <span class="token-keyword">if</span> nonce <span class="token-keyword">in</span> _used_nonces:
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">401</span>, <span class="token-string">"Replay detected"</span>)
            _used_nonces.add(nonce)

            <span class="token-comment"># 3. HMAC signature verify</span>
            expected = hmac.new(
                secret.encode(),
                f<span class="token-string">"{nonce}:{ts}"</span>.encode(),
                hashlib.sha256
            ).hexdigest()
            <span class="token-keyword">if not</span> hmac.compare_digest(token, expected):
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">403</span>, <span class="token-string">"Invalid signature"</span>)

            <span class="token-keyword">return await</span> func(req, *args, **kwargs)
        <span class="token-keyword">return</span> wrapper
    <span class="token-keyword">return</span> decorator`

function Project1() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:50 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.9, ease:[0.23,1,0.32,1] }}
      className="project-card rounded-3xl p-8 md:p-12 mb-10">

      <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-cyan-glow/60 tracking-widest">CASE STUDY — 01</span>
            <span className="w-12 h-px bg-cyan-glow/30"/>
          </div>
          <h3 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-ice leading-tight">
            TELEGRAM MINI-APP<br/><span className="text-cyan-glow">& ANTI-CHEAT BOT</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Python','FastAPI','Telegram Bot API','JWT','PostgreSQL'].map(t => (
            <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-cyan-glow/20 text-ice-dim">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
        {/* Left: phone mockup + problem/solution */}
        <div className="space-y-8">
          {/* Phone mockup with real image */}
          <div className="flex justify-center">
            <div className="phone-mockup w-52 overflow-hidden relative rounded-[2rem]">
              <Image
                src="/app-mockup.png"
                alt="Telegram Anti-Cheat Bot App UI"
                width={480} height={960}
                className="w-full h-auto"
              />
              {/* Notch overlay */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-void rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-red-500/20 rounded-xl p-5 bg-red-950/10">
              <p className="font-mono text-xs text-red-400/70 tracking-widest mb-2">THE PROBLEM</p>
              <p className="font-body text-ice-dim text-sm leading-relaxed">
                A Telegram gaming community needed a Mini-App with real-time scoring — but players
                were exploiting API endpoints to manipulate scores with forged timestamps and replay attacks.
              </p>
            </div>
            <div className="border border-emerald-500/20 rounded-xl p-5 bg-emerald-950/10">
              <p className="font-mono text-xs text-emerald-400/70 tracking-widest mb-2">THE SOLUTION</p>
              <p className="font-body text-ice-dim text-sm leading-relaxed">
                Layered anti-cheat: HMAC-signed API calls with one-time nonces, behavioral velocity
                analysis detecting inhuman click patterns, and a shadow-ban queue silently isolating cheaters.
              </p>
            </div>
          </div>
        </div>

        {/* Code block */}
        <div>
          <div className="code-block">
            <div className="code-header">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"/>
                <div className="w-3 h-3 rounded-full bg-emerald-500/60"/>
              </div>
              <span className="font-mono text-xs text-ice-dim/50 ml-2">secure_api.py</span>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: codeSnippet }}/>
          </div>
          <p className="font-mono text-xs text-ice-dim/30 mt-3 text-right">↑ HMAC + nonce anti-replay middleware</p>
        </div>
      </div>
    </motion.div>
  )
}

function Project2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:50 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:0.9, ease:[0.23,1,0.32,1] }}
      className="project-card rounded-3xl p-8 md:p-12">

      <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-orange-hot/60 tracking-widest">CASE STUDY — 02</span>
            <span className="w-12 h-px bg-orange-hot/30"/>
          </div>
          <h3 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-ice leading-tight">
            MEDIA PROCESSING<br/><span className="text-orange-hot text-glow-orange">AUTOMATION PIPELINE</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Python','FFmpeg','Aiogram','OpenAI API','Redis'].map(t => (
            <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-orange-hot/20 text-ice-dim">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-red-500/20 rounded-xl p-5 bg-red-950/10">
          <p className="font-mono text-xs text-red-400/70 tracking-widest mb-2">THE PROBLEM</p>
          <p className="font-body text-ice-dim text-sm leading-relaxed">
            Content creators processing dozens of videos daily — extracting subtitles, translating
            to multiple languages, re-encoding. Manual workflow: 4–6 hours per video.
          </p>
        </div>
        <div className="border border-emerald-500/20 rounded-xl p-5 bg-emerald-950/10">
          <p className="font-mono text-xs text-emerald-400/70 tracking-widest mb-2">THE SOLUTION</p>
          <p className="font-body text-ice-dim text-sm leading-relaxed">
            A Telegram bot media studio. Send a video link, receive a processed file. Redis job
            queue for concurrent processing — per-video time down to under 8 minutes.
          </p>
        </div>
      </div>

      {/* Workflow image */}
      <div className="rounded-2xl overflow-hidden border border-orange-hot/15 shadow-[0_0_40px_rgba(255,107,53,0.06)]">
        <Image
          src="/workflow.png"
          alt="Media Processing Automation Workflow Pipeline"
          width={1200} height={400}
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(255,107,53,0.03),transparent)] pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="mb-16">
          <p className="section-label mb-4">// 03. CASE STUDIES</p>
          <div className="accent-line mb-8"/>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-ice leading-tight">
            REAL PROBLEMS.<br/><span className="text-cyan-glow text-glow">ENGINEERED SOLUTIONS.</span>
          </h2>
          <p className="font-body text-ice-dim mt-4 max-w-xl">
            No live links — these projects are internal or client-confidential. Here's the architecture, the problem, and how I solved it.
          </p>
        </motion.div>

        <Project1/>
        <Project2/>
      </div>
    </section>
  )
}
