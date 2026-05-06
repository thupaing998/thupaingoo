'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const code = `<span class="token-comment"># Anti-replay HMAC middleware</span>
<span class="token-keyword">import</span> hmac, hashlib, time
<span class="token-keyword">from</span> fastapi <span class="token-keyword">import</span> HTTPException, Request
<span class="token-keyword">from</span> functools <span class="token-keyword">import</span> wraps

_used_nonces: set = set()

<span class="token-keyword">def</span> <span class="token-function">verify_request</span>(secret: str):
    <span class="token-keyword">def</span> <span class="token-function">decorator</span>(func):
        <span class="token-decorator">@wraps(func)</span>
        <span class="token-keyword">async def</span> <span class="token-function">wrapper</span>(req: Request, **kwargs):
            token = req.headers.get(<span class="token-string">"X-Auth-Token"</span>)
            nonce = req.headers.get(<span class="token-string">"X-Nonce"</span>)
            ts    = float(req.headers.get(<span class="token-string">"X-Timestamp"</span>, <span class="token-number">0</span>))

            <span class="token-comment"># 1. ±30s timestamp window</span>
            <span class="token-keyword">if</span> abs(time.time() - ts) > <span class="token-number">30</span>:
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">401</span>, <span class="token-string">"Request expired"</span>)

            <span class="token-comment"># 2. One-time nonce → prevent replay</span>
            <span class="token-keyword">if</span> nonce <span class="token-keyword">in</span> _used_nonces:
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">401</span>, <span class="token-string">"Replay detected"</span>)
            _used_nonces.add(nonce)

            <span class="token-comment"># 3. HMAC-SHA256 verify</span>
            expected = hmac.new(
                secret.encode(),
                f<span class="token-string">"{nonce}:{ts}"</span>.encode(),
                hashlib.sha256
            ).hexdigest()
            <span class="token-keyword">if not</span> hmac.compare_digest(token, expected):
                <span class="token-keyword">raise</span> HTTPException(<span class="token-number">403</span>, <span class="token-string">"Invalid signature"</span>)

            <span class="token-keyword">return await</span> func(req, **kwargs)
        <span class="token-keyword">return</span> wrapper
    <span class="token-keyword">return</span> decorator`

const wfSteps = [
  { icon:'📥', label:'Input Source',   desc:'Video URL or file upload via bot command',         color:'#3B82F6', time:'<1s'  },
  { icon:'🔍', label:'Media Analysis', desc:'FFprobe extracts codec, duration & streams',       color:'#7C3AED', time:'~2s'  },
  { icon:'🔤', label:'Subtitle Parse', desc:'SRT/ASS tokenizer + HTML entity cleanup',          color:'#059669', time:'~3s'  },
  { icon:'🤖', label:'AI Translate',   desc:'Batched GPT calls with subtitle context window',   color:'#EA580C', time:'~8s'  },
  { icon:'🎬', label:'Mux & Encode',   desc:'FFmpeg burns subtitles & re-encodes output',       color:'#DC2626', time:'~4m'  },
  { icon:'📤', label:'Delivery',       desc:'Bot sends compressed file via Telegram API',       color:'#0891B2', time:'<30s' },
]

function Project1() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:32 }} animate={inView?{ opacity:1, y:0 }:{}}
      transition={{ duration:0.75, ease:[0.23,1,0.32,1] }}
      className="bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden mb-8"
    >
      {/* Card header bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-violet-500"/>

      <div className="p-6 sm:p-10">
        {/* Meta */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="label">Case Study 01</span>
              <span className="w-8 h-px bg-brand-200"/>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Telegram Mini-App &{' '}
              <span className="gradient-text">Anti-Cheat Bot</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python','FastAPI','Telegram API','JWT','PostgreSQL'].map(t => (
              <span key={t} className="pill pill-brand">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div className="space-y-6">
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-48 rounded-[2rem] overflow-hidden border-2 border-surface-border shadow-card-hover">
                <Image src="/app-mockup.png" alt="Telegram Anti-Cheat Bot UI" width={480} height={960} className="w-full h-auto"/>
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-surface-muted rounded-full"/>
              </div>
            </div>

            {/* Problem / Solution */}
            <div className="space-y-3">
              <div className="rounded-xl p-4 bg-red-50 border border-red-100">
                <p className="font-mono text-xs font-bold text-red-500 tracking-widest mb-2 uppercase">The Problem</p>
                <p className="text-sm text-ink-muted leading-relaxed">Players were exploiting API endpoints to forge scores — hundreds of requests per second with faked timestamps and replay attacks flooding the leaderboard.</p>
              </div>
              <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-100">
                <p className="font-mono text-xs font-bold text-emerald-600 tracking-widest mb-2 uppercase">The Solution</p>
                <p className="text-sm text-ink-muted leading-relaxed">Layered anti-cheat: HMAC-signed requests with one-time nonces, behavioral velocity analysis detecting inhuman patterns, and a silent shadow-ban queue.</p>
              </div>
            </div>
          </div>

          {/* Code block */}
          <div>
            <div className="code-block">
              <div className="code-header">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                  <div className="w-3 h-3 rounded-full bg-green-400"/>
                </div>
                <span className="font-mono text-xs text-gray-500 ml-2">secure_api.py</span>
                <span className="ml-auto font-mono text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded">Python 3.12</span>
              </div>
              <pre dangerouslySetInnerHTML={{ __html: code }}/>
            </div>
            <p className="text-xs text-ink-faint font-mono mt-2 text-right">↑ HMAC + nonce anti-replay middleware</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Project2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:32 }} animate={inView?{ opacity:1, y:0 }:{}}
      transition={{ duration:0.75, ease:[0.23,1,0.32,1] }}
      className="bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-red-500"/>

      <div className="p-6 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="label" style={{ color:'#EA580C' }}>Case Study 02</span>
              <span className="w-8 h-px bg-orange-200"/>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Media Processing{' '}
              <span style={{ background:'linear-gradient(135deg,#EA580C,#DC2626)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                Automation Pipeline
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python','FFmpeg','Aiogram','OpenAI API','Redis'].map(t => (
              <span key={t} className="pill" style={{ borderColor:'#FED7AA', background:'#FFF7ED', color:'#EA580C' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="rounded-xl p-4 bg-red-50 border border-red-100">
            <p className="font-mono text-xs font-bold text-red-500 tracking-widest mb-2 uppercase">The Problem</p>
            <p className="text-sm text-ink-muted leading-relaxed">Content creators processing dozens of videos daily — manual subtitle extraction, translation and re-encoding was taking 4–6 hours per video.</p>
          </div>
          <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-100">
            <p className="font-mono text-xs font-bold text-emerald-600 tracking-widest mb-2 uppercase">The Solution</p>
            <p className="text-sm text-ink-muted leading-relaxed">A Telegram bot media studio. Send a video link, receive a fully processed file. Redis queue handles concurrent jobs — per-video time down to under 8 minutes.</p>
          </div>
        </div>

        {/* Workflow image */}
        <div className="rounded-xl overflow-hidden border border-surface-border shadow-card mb-8">
          <Image src="/workflow.png" alt="Media Processing Pipeline" width={1200} height={400} className="w-full h-auto"/>
        </div>

        {/* Workflow node steps */}
        <div>
          <p className="text-xs text-ink-faint font-mono tracking-widest uppercase mb-4">Step-by-step breakdown</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {wfSteps.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity:0, y:16 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.08, duration:0.5 }}
                className="wf-node"
              >
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-xs font-bold text-ink mb-1" style={{ color:s.color }}>{s.label}</p>
                <p className="text-[10px] text-ink-subtle leading-relaxed mb-2">{s.desc}</p>
                <span className="inline-block font-mono text-[10px] px-2 py-0.5 rounded-full border font-bold"
                  style={{ borderColor:s.color+'40', color:s.color, background:s.color+'10' }}>
                  {s.time}
                </span>
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
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity:0, y:24 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }}
          className="mb-12"
        >
          <p className="label mb-3">// 03. Case Studies</p>
          <div className="section-divider"/>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-tight mt-4">
            Real Problems.{' '}
            <span className="gradient-text">Engineered Solutions.</span>
          </h2>
          <p className="text-ink-muted mt-3 max-w-xl">
            These are internal / client-confidential projects. No live links — but here's the full architecture, problem, and solution.
          </p>
        </motion.div>
        <Project1/>
        <Project2/>
      </div>
    </section>
  )
}
