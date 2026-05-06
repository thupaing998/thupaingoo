'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
      { name:'Bash / Shell', icon:BashIcon,     level:85 },
      { name:'SQL',        icon:SQLIcon,        level:80 },
    ],
  },
  {
    label:'Frontend', color:'#7C3AED', bg:'#F5F3FF', border:'#DDD6FE',
    skills:[
      { name:'React',          icon:ReactIcon,  level:90 },
      { name:'Next.js',        icon:NextJSIcon, level:85 },
      { name:'Tailwind CSS',   icon:TailwindIcon, level:92 },
      { name:'Framer Motion',  icon:FramerIcon,   level:82 },
      { name:'Redux / Zustand',icon:ReduxIcon,    level:78 },
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
    label:'Bot & Automation', color:'#EA580C', bg:'#FFF7ED', border:'#FED7AA',
    skills:[
      { name:'Bot Architecture', icon:BotIcon,      level:98 },
      { name:'Telegram API',     icon:TelegramIcon, level:95 },
      { name:'API Gateways',     icon:APIIcon,      level:87 },
      { name:'FFmpeg',           icon:FFmpegIcon,   level:85 },
      { name:'Anti-Cheat',       icon:ShieldIcon,   level:92 },
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
      initial={{ opacity:0, y:16 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.5, delay, ease:[0.23,1,0.32,1] }}
      className="skill-icon-card group"
    >
      <Icon size={40}/>
      <p className="text-xs font-semibold text-ink-muted group-hover:text-ink transition-colors leading-tight">{skill.name}</p>
      <div className="progress-bg w-full">
        <motion.div className="progress-fill" style={{ background:`linear-gradient(90deg,${color}80,${color})` }}
          initial={{ width:0 }}
          whileInView={{ width:`${skill.level}%` }}
          viewport={{ once:true }}
          transition={{ duration:1.1, delay:delay+0.3, ease:[0.23,1,0.32,1] }}
        />
      </div>
      <p className="text-[10px] font-mono text-ink-faint group-hover:text-ink-subtle transition-colors">{skill.level}%</p>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 bg-surface-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }}
          className="text-center mb-16"
        >
          <p className="label mb-3">// 02. Tech Stack</p>
          <div className="section-divider mx-auto"/>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-tight mt-4">
            Tools I Wield to{' '}
            <span className="gradient-text">Solve Hard Problems</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto">
            Hover each icon to see proficiency. Every tool is battle-tested in production systems.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {groups.map((g, gi) => (
            <motion.div key={g.label}
              initial={{ opacity:0, y:32 }}
              animate={inView?{ opacity:1, y:0 }:{}}
              transition={{ duration:0.65, delay:gi*0.1, ease:[0.23,1,0.32,1] }}
              className="bg-white rounded-2xl p-6 border shadow-card"
              style={{ borderColor: g.border }}
            >
              {/* Group header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-6 rounded-full" style={{ background:g.color }}/>
                <h3 className="font-semibold text-sm text-ink">{g.label}</h3>
                <span className="ml-auto text-xs font-mono text-ink-faint">{g.skills.length} tools</span>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-3">
                {g.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} color={g.color} delay={gi*0.08+si*0.05}/>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}} transition={{ delay:0.5 }}
        >
          <p className="text-center text-xs text-ink-faint font-mono tracking-widest uppercase mb-5">Full technology index</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-surface-soft to-transparent z-10 pointer-events-none"/>
            <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-surface-soft to-transparent z-10 pointer-events-none"/>
            <div className="flex">
              <div className="marquee-track flex gap-2">
                {[...techPills,...techPills].map((t,i) => (
                  <span key={i} className="pill flex-shrink-0">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
