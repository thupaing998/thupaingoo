'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-brand-600 to-violet-600 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.65 }}
          >
            <p className="font-mono text-xs text-blue-200 tracking-widest uppercase mb-4">// Ready to Build?</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
              Have a complex problem that needs a reliable, automated solution?
              I'm available for freelance projects — let's talk.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:thup2081@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                thup2081@gmail.com
              </a>
              <a href="https://t.me/thupaingoo" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 border border-white/20">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Open Telegram
              </a>
              <a href="tel:+959982335714"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 border border-white/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +959 982 335 714
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="font-display text-white text-sm font-bold">T</span>
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">Thu Paing Oo</p>
              <p className="font-mono text-[0.6rem] text-gray-500 tracking-widest">FULL-STACK · BOT ARCHITECT</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-5">
            {['#about','#skills','#projects'].map(href => (
              <a key={href} href={href}
                className="text-sm text-gray-400 hover:text-white transition-colors capitalize">
                {href.replace('#','')}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
            <p className="font-mono text-xs text-gray-500">© 2026 Thu Paing Oo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
