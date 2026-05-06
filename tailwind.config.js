/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'cursive'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        void: '#020207',
        'void-2': '#080812',
        'void-3': '#0d0d1a',
        cyan: {
          glow: '#00E5FF',
          mid: '#00B4CC',
          dim: '#006B7A',
        },
        orange: {
          hot: '#FF6B35',
          dim: '#8A3A1E',
        },
        ice: '#E8F4F8',
        'ice-dim': '#8899AA',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(0,229,255,0.7)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -1%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(1%, -4%)' },
          '70%': { transform: 'translate(-4%, 3%)' },
          '80%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(3%, 4%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
