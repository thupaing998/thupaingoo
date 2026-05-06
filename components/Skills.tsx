'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PythonIcon, ReactIcon, DockerIcon, LinuxIcon, PHPIcon,
  NextJSIcon, APIIcon, BotIcon, TelegramIcon, FFmpegIcon,
  RedisIcon, PostgreSQLIcon, NginxIcon, ShieldIcon, CloudVPSIcon
} from './Icons'

const skillGroups = [
  {
    id: 'lang',
    label: '// Languages',
    color: '#3B82F6',
    skills: [
      { name: 'Python',     icon: PythonIcon,  level: 95 },
      { name: 'PHP',        icon: PHPIcon,     level: 80 },
      { name: 'JavaScript', icon: NextJSIcon,  level: 88 },
    ],
  },
  {
    id: 'front',
    label: '// Frontend',
    color: '#00E5FF',
    skills: [
      { name: 'React',   icon: ReactIcon,  level: 90 },
      { name: 'Next.js', icon: NextJSIcon, level: 85 },
    ],
  },
  {
    id: 'infra',
    label: '// Infra & DB',
    color: '#22C55E',
    skills: [
      { name: 'Docker',      icon: DockerIcon,     level: 88 },
      { name: 'Linux VPS',   icon: LinuxIcon,      level: 92 },
      { name: 'Cloud VPS',   icon: CloudVPSIcon,   level: 86 },
      { name: 'Nginx',       icon: NginxIcon,      level: 80 },
      { name: 'PostgreSQL',  icon: PostgreSQLIcon, level: 82 },
      { name: 'Redis',       icon: RedisIcon,      level: 78 },
    ],
  },
  {
    id: 'spec',
    label: '// Bot / Automation',
    color: '#FF6B35',
    skills: [
      { name: 'Bot Architecture', icon: BotIcon,      level: 98 },
      { name: 'Telegram API',     icon: TelegramIcon, level: 95 },
      { name: 'API Gateways',     icon: APIIcon,      level: 87 },
      { name: 'FFmpeg / Media',   icon: FFmpegIcon,   level: 85 },
      { name: 'Anti-Cheat Logic', icon: ShieldIcon,   level: 92 },
    ],
  },
]

const techStack = [
  'Python','FastAPI','React','Next.js','Docker','Linux VPS',
  'PostgreSQL','Redis','Nginx','Telegram Bot API','FFmpeg',
  'PHP Laravel','REST APIs','WebSockets','JWT / HMAC','CI/CD',
  'Cloudflare','Shell Scripting','Cron Jobs','Aiogram','Pyrogram',
  'SQLAlchemy','Prisma','Framer Motion','Three.js','Anti-Cheat',
]

function SkillCard({ skill, color, delay }: {
  skill: { name: string; icon: React.FC<{size?: number}>; level: number }
  color: string; delay: number
}) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default"
      style={{
        background: `linear-gradient(135deg, ${color}08, ${color}03)`,
        border: `1px solid ${color}22`,
        transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${color}66`
        el.style.boxShadow = `0 0 30px ${color}18, inset 0 0 20px ${color}05`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${color}22`
        el.style.boxShadow = 'none'
      }}
    >
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: color }} />
      <div className="relative">
        <div className="absolute inset-[-6px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ background: `radial-gradient(circle, ${color}20 0%, transparent 70%)` }} />
        <Icon size={44} />
      </div>
      <p className="font-mono text-[0.68rem] text-center text-ice-dim/80 group-hover:text-ice transition-colors leading-tight">{skill.name}</p>
      <div className="w-full h-0.5 bg-void-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
      </div>
      <p className="font-mono text-[0.6rem] opacity-0 group-hover:opacity-100 transition-opacity -mt-1" style={{ color }}>{skill.level}%</p>
    </motion.div>
  )
}

function GroupPanel({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-3xl p-6"
      style={{ background: 'linear-gradient(135deg, rgba(8,8,18,0.95), rgba(13,13,26,0.8))', border: `1px solid ${group.color}18` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1.5 h-6 rounded-full" style={{ background: group.color }} />
        <p className="font-mono text-xs tracking-widest" style={{ color: group.color + 'CC' }}>{group.label}</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {group.skills.map((skill, si) => (
          <SkillCard key={skill.name} skill={skill} color={group.color} delay={index * 0.08 + si * 0.06} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,229,255,0.025),transparent)]" />
        {[
          { top:'10%', left:'4%',  size:60, color:'#00E5FF' },
          { top:'72%', left:'93%', size:80, color:'#FF6B35' },
          { top:'45%', left:'96%', size:40, color:'#00E5FF' },
          { top:'82%', left:'1%',  size:50, color:'#22C55E' },
        ].map((h,i) => {
          const pts = Array.from({length:6},(_,j)=>{const a=Math.PI/180*(60*j-30);return `${h.size/2+(h.size/2-1)*Math.cos(a)},${h.size/2+(h.size/2-1)*Math.sin(a)}`}).join(' ')
          return (
            <motion.svg key={i} width={h.size} height={h.size} viewBox={`0 0 ${h.size} ${h.size}`}
              className="absolute" style={{top:h.top,left:h.left,opacity:0.06}}
              animate={{rotate:360}} transition={{duration:30+i*10,repeat:Infinity,ease:'linear'}}>
              <polygon points={pts} fill="none" stroke={h.color} strokeWidth="1"/>
            </motion.svg>
          )
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <motion.p initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6}} className="section-label mb-4">// 02. TECH STACK</motion.p>
          <div className="accent-line mb-8"/>
          <motion.h2 initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.1,ease:[0.23,1,0.32,1]}} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-ice leading-tight">
            THE TOOLS I WIELD<br/><span className="text-cyan-glow text-glow">TO SOLVE HARD PROBLEMS</span>
          </motion.h2>
          <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.3,duration:0.6}} className="font-body text-ice-dim mt-4 max-w-lg text-base">
            Hover each icon to reveal proficiency. Every tool battle-tested in production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group,i) => <GroupPanel key={group.id} group={group} index={i}/>)}
        </div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <p className="font-mono text-[0.65rem] text-ice-dim/30 tracking-[0.3em] mb-5 text-center uppercase">Full Technology Index</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none"/>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none"/>
            <div className="flex">
              <div className="marquee-track flex gap-3">
                {[...techStack,...techStack].map((tech,i)=>(
                  <span key={i} className="skill-pill flex-shrink-0 px-4 py-2 rounded-full font-mono text-xs text-ice-dim/70 whitespace-nowrap">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
