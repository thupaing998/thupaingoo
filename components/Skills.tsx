'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  PythonIcon, ReactIcon, DockerIcon, LinuxIcon, PHPIcon,
  NextJSIcon, APIIcon, BotIcon, TelegramIcon, FFmpegIcon,
  RedisIcon, PostgreSQLIcon, NginxIcon, ShieldIcon, CloudVPSIcon,
  TypeScriptIcon, BashIcon, SQLIcon, TailwindIcon, FramerIcon, ReduxIcon,
} from './Icons'

const groups = [
  {
    label:'Languages', color:'#3B82F6', bg:'#EFF6FF', border:'#BFDBFE',
    skills:[
      { name:'Python',     icon:PythonIcon,     level:95 },
      { name:'PHP',        icon:PHPIcon,        level:80 },
      { name:'JavaScript', icon:NextJSIcon,     level:88 },
      { name:'TypeScript', icon:TypeScriptIcon, level:82 },
      { name:'Bash/Shell', icon:BashIcon,       level:85 },
      { name:'SQL',        icon:SQLIcon,        level:80 },
    ],
  },
  {
    label:'Frontend', color:'#7C3AED', bg:'#F5F3FF', border:'#DDD6FE',
    skills:[
      { name:'React',          icon:ReactIcon,    level:90 },
      { name:'Next.js',        icon:NextJSIcon,   level:85 },
      { name:'Tailwind CSS',   icon:TailwindIcon, level:92 },
      { name:'Framer',         icon:FramerIcon,   level:82 },
      { name:'Redux',          icon:ReduxIcon,    level:78 },
    ],
  },
  {
    label:'Infrastructure', color:'#059669', bg:'#ECFDF5', border:'#A7F3D0',
    skills:[
      { name:'Docker',     icon:DockerIcon,     level:88 },
      { name:'Linux VPS',  icon:LinuxIcon,      level:92 },
      { name:'Cloud VPS',  icon:CloudVPSIcon,   level:86 },
      { name:'Nginx',      icon:NginxIcon,      level:80 },
      { name:'PostgreSQL', icon:PostgreSQLIcon, level:82 },
      { name:'Redis',      icon:RedisIcon,      level:78 },
    ],
  },
  {
    label:'Bot & Logic', color:'#EA580C', bg:'#FFF7ED', border:'#FED7AA',
    skills:[
      { name:'Bot Arch.',  icon:BotIcon,      level:98 },
      { name:'Telegram API',icon:TelegramIcon,level:95 },
      { name:'API Gateway',icon:APIIcon,      level:87 },
      { name:'FFmpeg',     icon:FFmpegIcon,   level:85 },
      { name:'Anti-Cheat', icon:ShieldIcon,   level:92 },
    ],
  },
]

const techPills = [
  'Python','TypeScript','PHP','Bash / Shell','SQL','FastAPI',
  'React','Next.js','Tailwind CSS','Framer Motion','Redux','Zustand',
  'Docker','Linux VPS','PostgreSQL','Redis','Nginx','Telegram Bot API',
  'FFmpeg','REST APIs','WebSockets','JWT / HMAC','CI/CD','Cloudflare',
  'Aiogram','Pyrogram','SQLAlchemy','Prisma','Three.js',
]

function SkillCard({ skill, color, delay }:{ skill:any; color:string; delay:number }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: `0 10px 20px -10px ${color}80` }}
      className="skill-icon-card group relative overflow-hidden isolate"
      style={{ borderColor: `${color}40` }}
    >
      {/* Dynamic hover background */}
      <motion.div 
        className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
      />
      
      <Icon size={36} />
      <p className="text-xs font-bold text-ink-muted group-hover:text-ink transition-colors leading-tight mt-1">{skill.name}</p>
      
      <div className="progress-bg w-full mt-2 bg-surface-border/50 h-1.5">
        <motion.div 
          className="progress-fill h-full rounded-full" 
          style={{ background: `linear-gradient(90deg, ${color}40, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
      <p className="text-[10px] font-mono font-medium text-ink-faint group-hover:text-ink-subtle transition-colors mt-1">{skill.level}%</p>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityBackground = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="skills" ref={ref} className="py-32 sm:py-40 bg-surface-soft relative overflow-hidden">
      
      {/* Subtle parallax background grid */}
      <motion.div 
        style={{ y: yBackground, opacity: opacityBackground }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-soft via-transparent to-surface-soft" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : {}}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-500" />
            <p className="font-mono text-sm font-bold text-brand-600 uppercase tracking-widest">02. Tech Stack</p>
            <span className="h-px w-8 bg-brand-500" />
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-ink leading-tight mt-4">
            Tools I Wield to <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">Solve Hard Problems</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-ink-muted mt-6 max-w-xl mx-auto text-lg font-light">
            Every tool here is battle-tested in production systems. I choose the right technology for the problem, not the hype.
          </motion.p>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {groups.map((g, gi) => (
            <motion.div 
              key={g.label}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: gi * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-surface-border shadow-lg shadow-surface-border/50 relative overflow-hidden group"
            >
              {/* Subtle group background glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: g.color }}
              />

              {/* Group header */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: `${g.color}15`, color: g.color }}
                >
                  <span className="text-xl font-bold">{g.label.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{g.label}</h3>
                  <span className="text-xs font-mono font-medium text-ink-subtle">{g.skills.length} core tools</span>
                </div>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {g.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} color={g.color} delay={gi * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Endless Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-surface-border pt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <p className="text-center text-xs text-ink-subtle font-mono tracking-widest uppercase">Comprehensive Index</p>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
          </div>
          
          <div className="relative overflow-hidden w-full max-w-[100vw] -mx-5 sm:mx-0 px-5 sm:px-0">
            {/* Gradient masks for smooth fade at edges */}
            <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-surface-soft to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-surface-soft to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-fit">
              <motion.div 
                animate={{ x: [0, -1035] }} // Adjust value based on content width to loop seamlessly
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                className="flex gap-3 pr-3"
              >
                {[...techPills, ...techPills, ...techPills].map((t, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' }}
                    className="pill flex-shrink-0 text-sm py-2 px-5 bg-white border border-surface-border shadow-sm cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
