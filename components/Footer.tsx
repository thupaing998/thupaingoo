'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden border-t border-cyan-glow/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(0,229,255,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <p className="font-display text-3xl text-ice mb-2">THU PAING OO</p>
            <p className="font-mono text-xs text-cyan-glow/60 tracking-widest mb-4">FULL-STACK · BOT ARCHITECT</p>
            <p className="font-body text-ice-dim/60 text-sm leading-relaxed">
              Building the infrastructure of tomorrow, one bot at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-ice-dim/40 tracking-widest mb-4 uppercase">Navigation</p>
            <div className="space-y-2">
              {['#about', '#skills', '#projects'].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="block font-mono text-sm text-ice-dim/60 hover:text-cyan-glow transition-colors"
                >
                  {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact — PROMINENT */}
          <div>
            <p className="font-mono text-xs text-ice-dim/40 tracking-widest mb-4 uppercase">Contact</p>
            <div className="space-y-3">
              <a href="mailto:thup2081@gmail.com" className="flex items-center gap-3 group">
                <span className="w-6 h-6 rounded border border-cyan-glow/20 flex items-center justify-center text-xs group-hover:border-cyan-glow/50 transition-colors">✉</span>
                <span className="font-mono text-sm text-ice-dim/70 group-hover:text-cyan-glow transition-colors">thup2081@gmail.com</span>
              </a>
              <a href="tel:+959982335714" className="flex items-center gap-3 group">
                <span className="w-6 h-6 rounded border border-cyan-glow/20 flex items-center justify-center text-xs group-hover:border-cyan-glow/50 transition-colors">☎</span>
                <span className="font-mono text-sm text-ice-dim/70 group-hover:text-cyan-glow transition-colors">+959 982 335 714</span>
              </a>
              <a href="https://t.me/thupaingoo" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-6 h-6 rounded border border-cyan-glow/20 flex items-center justify-center text-xs group-hover:border-cyan-glow/50 transition-colors">✈</span>
                <span className="font-mono text-sm text-ice-dim/70 group-hover:text-cyan-glow transition-colors">Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cyan-glow/5">
          <p className="font-mono text-xs text-ice-dim/30">
            © 2026 Thu Paing Oo. Built with Next.js + Three.js.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-mono text-xs text-ice-dim/30">Systems online</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
