// Custom SVG Tech Icons — Cyber-noir aesthetic, 2026 design language

export const PythonIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="py-g1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="py-g2" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    {/* Top snake body */}
    <path d="M20 4C13 4 10 7 10 12v3h10v2H8C4 17 2 20 2 24s2.5 7 8 7h2v-3.5c0-2.8 2.5-5 6-5h8c3 0 5-2 5-5V13c0-3-2.5-6-6-6h-5zm-2 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="url(#py-g1)" />
    {/* Bottom snake body */}
    <path d="M20 36c7 0 10-3 10-8v-3H20v-2h12c4 0 6-3 6-7s-2.5-7-8-7h-2v3.5c0 2.8-2.5 5-6 5h-8c-3 0-5 2-5 5v6c0 3 2.5 6 6 6h5zm2-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="url(#py-g2)" />
  </svg>
)

export const ReactIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="react-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E5FF" />
        <stop offset="1" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    {/* Orbit ring 1 */}
    <ellipse cx="20" cy="20" rx="18" ry="7" stroke="url(#react-g)" strokeWidth="1.5" fill="none" opacity="0.9" />
    {/* Orbit ring 2 - rotated 60deg */}
    <ellipse cx="20" cy="20" rx="18" ry="7" stroke="url(#react-g)" strokeWidth="1.5" fill="none" opacity="0.7" transform="rotate(60 20 20)" />
    {/* Orbit ring 3 - rotated 120deg */}
    <ellipse cx="20" cy="20" rx="18" ry="7" stroke="url(#react-g)" strokeWidth="1.5" fill="none" opacity="0.5" transform="rotate(120 20 20)" />
    {/* Center nucleus */}
    <circle cx="20" cy="20" r="3.5" fill="url(#react-g)" />
    <circle cx="20" cy="20" r="5" fill="none" stroke="url(#react-g)" strokeWidth="0.5" opacity="0.5" />
  </svg>
)

export const DockerIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docker-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0EA5E9" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    {/* Container stack */}
    {[0,1,2].map(row => 
      [0,1,2,3].map(col => (
        <rect key={`${row}-${col}`}
          x={4 + col * 8} y={22 - row * 8}
          width={6} height={6} rx="1"
          fill="url(#docker-g)"
          opacity={0.3 + row * 0.3 + col * 0.05}
        />
      ))
    )}
    {/* Extra top-right squares */}
    <rect x={28} y={14} width={6} height={6} rx="1" fill="url(#docker-g)" opacity="0.7" />
    <rect x={28} y={6} width={6} height={6} rx="1" fill="url(#docker-g)" opacity="0.5" />
    {/* Whale spout */}
    <path d="M32 6 Q34 4 36 6" stroke="#0EA5E9" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Base wave */}
    <path d="M2 30 Q8 27 14 30 Q20 33 26 30 Q32 27 38 30" stroke="url(#docker-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

export const LinuxIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="linux-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22C55E" />
        <stop offset="1" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    {/* Terminal frame */}
    <rect x="3" y="5" width="34" height="26" rx="3" stroke="url(#linux-g)" strokeWidth="1.5" fill="none" />
    <rect x="3" y="5" width="34" height="7" rx="3" fill="#22C55E" opacity="0.15" />
    {/* Window dots */}
    <circle cx="9" cy="8.5" r="1.5" fill="#EF4444" opacity="0.8" />
    <circle cx="14" cy="8.5" r="1.5" fill="#F59E0B" opacity="0.8" />
    <circle cx="19" cy="8.5" r="1.5" fill="#22C55E" opacity="0.8" />
    {/* Prompt line */}
    <text x="7" y="23" fontFamily="monospace" fontSize="7" fill="#22C55E" opacity="0.9">$ ./run.sh</text>
    {/* Cursor blink */}
    <rect x="7" y="25" width="5" height="1.5" fill="#22C55E" opacity="0.7" />
    {/* Base stand */}
    <path d="M15 31 L14 36 M25 31 L26 36" stroke="url(#linux-g)" strokeWidth="2" strokeLinecap="round" />
    <rect x="11" y="35" width="18" height="2" rx="1" fill="url(#linux-g)" opacity="0.6" />
  </svg>
)

export const PHPIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="php-g" x1="0" y1="10" x2="40" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
    {/* Oval background */}
    <ellipse cx="20" cy="20" rx="18" ry="10" fill="url(#php-g)" opacity="0.15" stroke="url(#php-g)" strokeWidth="1" />
    {/* PHP text */}
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
      fontFamily="monospace" fontWeight="bold" fontSize="12" fill="url(#php-g)" letterSpacing="1">PHP</text>
    {/* Decorative dots */}
    <circle cx="5" cy="20" r="2" fill="#8B5CF6" opacity="0.6" />
    <circle cx="35" cy="20" r="2" fill="#8B5CF6" opacity="0.6" />
    {/* Code brackets */}
    <path d="M4 14 L2 20 L4 26" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    <path d="M36 14 L38 20 L36 26" stroke="#8B5CF6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
  </svg>
)

export const NextJSIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="next-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E8F4F8" />
        <stop offset="1" stopColor="#8899AA" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="17" fill="none" stroke="url(#next-g)" strokeWidth="1" opacity="0.4" />
    <circle cx="20" cy="20" r="17" fill="#E8F4F8" opacity="0.06" />
    {/* N letter stylized */}
    <path d="M11 28 L11 12 L22 26 L22 12" stroke="url(#next-g)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Speed trail */}
    <path d="M22 12 L29 28" stroke="url(#next-g)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <path d="M26 20 L32 20" stroke="url(#next-g)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M27 17 L33 15" stroke="url(#next-g)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    <path d="M27 23 L33 25" stroke="url(#next-g)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
  </svg>
)

export const APIIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="api-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF6B35" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* Center hub */}
    <circle cx="20" cy="20" r="5" fill="url(#api-g)" opacity="0.9" />
    <circle cx="20" cy="20" r="8" fill="none" stroke="url(#api-g)" strokeWidth="1" opacity="0.4" strokeDasharray="2 3" />
    {/* Spokes to endpoints */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const ex = 20 + 14 * Math.cos(rad)
      const ey = 20 + 14 * Math.sin(rad)
      return (
        <g key={angle}>
          <line x1="20" y1="20" x2={ex} y2={ey} stroke="url(#api-g)" strokeWidth="1" opacity={0.3 + i * 0.1} />
          <circle cx={ex} cy={ey} r="2.5" fill="url(#api-g)" opacity={0.5 + i * 0.08} />
        </g>
      )
    })}
    {/* Request arrow */}
    <path d="M7 20 L13 20" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arr)" opacity="0.6" />
    <path d="M27 20 L33 20" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M31 17 L34 20 L31 23" stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
  </svg>
)

export const BotIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bot-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00E5FF" />
        <stop offset="1" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    {/* Antenna */}
    <line x1="20" y1="2" x2="20" y2="7" stroke="url(#bot-g)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="2" r="2" fill="url(#bot-g)" />
    {/* Head */}
    <rect x="8" y="8" width="24" height="18" rx="4" fill="url(#bot-g)" opacity="0.12" stroke="url(#bot-g)" strokeWidth="1.5" />
    {/* Eyes */}
    <rect x="12" y="13" width="5" height="5" rx="1.5" fill="url(#bot-g)" />
    <rect x="23" y="13" width="5" height="5" rx="1.5" fill="url(#bot-g)" />
    {/* Eye glow */}
    <rect x="13.5" y="14.5" width="2" height="2" rx="0.5" fill="white" opacity="0.8" />
    <rect x="24.5" y="14.5" width="2" height="2" rx="0.5" fill="white" opacity="0.8" />
    {/* Mouth — data wave */}
    <path d="M13 22 Q16 20 20 22 Q24 24 27 22" stroke="url(#bot-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Body */}
    <rect x="12" y="27" width="16" height="10" rx="3" fill="url(#bot-g)" opacity="0.12" stroke="url(#bot-g)" strokeWidth="1.5" />
    {/* Body detail — circuit */}
    <line x1="16" y1="30" x2="24" y2="30" stroke="url(#bot-g)" strokeWidth="1" opacity="0.6" />
    <line x1="16" y1="33" x2="20" y2="33" stroke="url(#bot-g)" strokeWidth="1" opacity="0.4" />
    {/* Arms */}
    <line x1="8" y1="28" x2="4" y2="33" stroke="url(#bot-g)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="32" y1="28" x2="36" y2="33" stroke="url(#bot-g)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
)

export const TelegramIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tg-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B4CC" />
        <stop offset="1" stopColor="#00E5FF" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="17" fill="url(#tg-g)" opacity="0.12" stroke="url(#tg-g)" strokeWidth="1" />
    {/* Paper plane */}
    <path d="M5 17 L35 8 L24 32 L18 24 Z" fill="url(#tg-g)" opacity="0.8" />
    <path d="M18 24 L35 8" stroke="url(#tg-g)" strokeWidth="0.5" fill="none" opacity="0.5" />
    <path d="M18 24 L20 31 L24 26" fill="url(#tg-g)" opacity="0.5" />
  </svg>
)

export const FFmpegIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ff-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EF4444" />
        <stop offset="1" stopColor="#F97316" />
      </linearGradient>
    </defs>
    {/* Film strip */}
    <rect x="4" y="10" width="32" height="20" rx="2" fill="none" stroke="url(#ff-g)" strokeWidth="1.5" />
    {/* Sprocket holes */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x={6+i*8} y={12} width={4} height={3} rx="0.5" fill="url(#ff-g)" opacity="0.6" />
        <rect x={6+i*8} y={25} width={4} height={3} rx="0.5" fill="url(#ff-g)" opacity="0.6" />
      </g>
    ))}
    {/* Play triangle */}
    <path d="M16 17 L27 20 L16 23 Z" fill="url(#ff-g)" opacity="0.9" />
    {/* Speed lines */}
    <line x1="3" y1="8" x2="37" y2="8" stroke="url(#ff-g)" strokeWidth="1" opacity="0.3" />
    <line x1="3" y1="32" x2="37" y2="32" stroke="url(#ff-g)" strokeWidth="1" opacity="0.3" />
  </svg>
)

export const RedisIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="redis-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EF4444" />
        <stop offset="1" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    {/* Database cylinders stacked */}
    {[0,1,2].map(i => (
      <g key={i} opacity={0.4 + i * 0.3}>
        <ellipse cx="20" cy={10+i*9} rx="13" ry="4" fill="url(#redis-g)" opacity="0.15" stroke="url(#redis-g)" strokeWidth="1.2" />
        {i < 2 && <path d={`M7 ${10+i*9} L7 ${14+i*9} Q7 ${18+i*9} 20 ${18+i*9} Q33 ${18+i*9} 33 ${14+i*9} L33 ${10+i*9}`} fill="url(#redis-g)" opacity="0.08" stroke="url(#redis-g)" strokeWidth="1.2" />}
      </g>
    ))}
    {/* Lightning bolt = speed */}
    <path d="M21 6 L16 19 L20 19 L19 34 L24 19 L20 19 Z" fill="url(#redis-g)" opacity="0.7" />
  </svg>
)

export const PostgreSQLIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pg-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    {/* Elephant head silhouette — simplified geometric */}
    <circle cx="18" cy="15" r="10" fill="url(#pg-g)" opacity="0.15" stroke="url(#pg-g)" strokeWidth="1.5" />
    {/* Ear */}
    <path d="M28 10 Q34 8 32 18 Q30 14 26 14" fill="url(#pg-g)" opacity="0.3" stroke="url(#pg-g)" strokeWidth="1" />
    {/* Eye */}
    <circle cx="22" cy="13" r="2" fill="url(#pg-g)" />
    <circle cx="22.7" cy="12.3" r="0.7" fill="white" opacity="0.8" />
    {/* Trunk */}
    <path d="M10 20 Q6 25 8 30 Q10 34 14 32" stroke="url(#pg-g)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Tusk */}
    <path d="M12 24 Q8 26 9 29" stroke="url(#pg-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
    {/* DB label */}
    <text x="26" y="32" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="url(#pg-g)" opacity="0.8">DB</text>
  </svg>
)

export const NginxIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nginx-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22C55E" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
    {/* N shape */}
    <path d="M8 30 L8 10 L20 26 L20 10" stroke="url(#nginx-g)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 10 L32 30" stroke="url(#nginx-g)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    {/* Speed lines */}
    <line x1="24" y1="16" x2="36" y2="16" stroke="url(#nginx-g)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="26" y1="20" x2="37" y2="20" stroke="url(#nginx-g)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="28" y1="24" x2="38" y2="24" stroke="url(#nginx-g)" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
  </svg>
)

export const ShieldIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shield-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <path d="M20 3 L35 9 L35 20 C35 28 28 35 20 37 C12 35 5 28 5 20 L5 9 Z" fill="url(#shield-g)" opacity="0.12" stroke="url(#shield-g)" strokeWidth="1.5" />
    {/* Check mark */}
    <path d="M13 20 L17 24 L27 14" stroke="url(#shield-g)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Inner glow ring */}
    <path d="M20 8 L30 12 L30 19 C30 25 26 30 20 32" stroke="url(#shield-g)" strokeWidth="0.8" fill="none" opacity="0.3" />
  </svg>
)

export const CloudVPSIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vps-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#818CF8" />
      </linearGradient>
    </defs>
    {/* Cloud */}
    <path d="M30 18 Q36 18 36 24 Q36 30 30 30 L12 30 Q6 30 6 24 Q6 18 12 18 Q12 12 18 10 Q24 8 28 13 Q29 18 30 18Z" fill="url(#vps-g)" opacity="0.15" stroke="url(#vps-g)" strokeWidth="1.5" />
    {/* Server rack inside */}
    <rect x="14" y="21" width="12" height="3" rx="1" fill="url(#vps-g)" opacity="0.6" />
    <rect x="14" y="25" width="12" height="3" rx="1" fill="url(#vps-g)" opacity="0.4" />
    {/* LED dots */}
    <circle cx="23" cy="22.5" r="1" fill="#22C55E" opacity="0.9" />
    <circle cx="23" cy="26.5" r="1" fill="#22C55E" opacity="0.7" />
  </svg>
)

// ── Decorative geometric elements ──────────────────────────────────────────

export const HexBadge = ({ size = 80, children, color = "#00E5FF" }: { size?: number; children?: React.ReactNode; color?: string }) => {
  const pts = Array.from({length: 6}, (_, i) => {
    const a = Math.PI / 180 * (60 * i - 30)
    return `${size/2 + (size/2-2)*Math.cos(a)},${size/2 + (size/2-2)*Math.sin(a)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id={`hex-g-${color.replace('#','')}`} x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.15" />
          <stop offset="1" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon points={pts} fill={`url(#hex-g-${color.replace('#','')})`} stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <polygon points={Array.from({length: 6}, (_, i) => {
        const a = Math.PI / 180 * (60 * i - 30)
        return `${size/2 + (size/2-8)*Math.cos(a)},${size/2 + (size/2-8)*Math.sin(a)}`
      }).join(' ')} fill="none" stroke={color} strokeWidth="0.5" strokeOpacity="0.2" />
      <foreignObject x="0" y="0" width={size} height={size}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          {children}
        </div>
      </foreignObject>
    </svg>
  )
}

export const CircuitDot = ({ size = 8, color = "#00E5FF" }: { size?: number; color?: string }) => (
  <svg width={size+4} height={size+4} viewBox={`0 0 ${size+4} ${size+4}`} fill="none">
    <circle cx={(size+4)/2} cy={(size+4)/2} r={size/2+1} fill={color} opacity="0.1" />
    <circle cx={(size+4)/2} cy={(size+4)/2} r={size/2} fill={color} opacity="0.8" />
    <circle cx={(size+4)/2-1} cy={(size+4)/2-1} r={size/4} fill="white" opacity="0.4" />
  </svg>
)
