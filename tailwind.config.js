/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        ink: {
          DEFAULT: '#0D1117',
          soft:    '#1F2937',
          muted:   '#374151',
          subtle:  '#6B7280',
          faint:   '#9CA3AF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft:    '#F8FAFC',
          muted:   '#F1F5F9',
          card:    '#FFFFFF',
          border:  '#E2E8F0',
        },
        accent: {
          DEFAULT: '#2563EB',
          soft:    '#EFF6FF',
          purple:  '#7C3AED',
          teal:    '#0D9488',
          orange:  '#EA580C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      boxShadow: {
        'card':  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)',
        'brand': '0 4px 24px rgba(37,99,235,0.18)',
        'brand-lg': '0 8px 40px rgba(37,99,235,0.25)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 5s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'marquee':    'marquee 28s linear infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'slide-in-l': 'slideInLeft 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
        'slide-in-r': 'slideInRight 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
      },
      keyframes: {
        fadeUp:      { from: { opacity:0, transform:'translateY(24px)' }, to: { opacity:1, transform:'translateY(0)' } },
        fadeIn:      { from: { opacity:0 }, to: { opacity:1 } },
        float:       { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-12px)' } },
        pulseDot:    { '0%,100%': { opacity:1, transform:'scale(1)' }, '50%': { opacity:0.5, transform:'scale(0.85)' } },
        marquee:     { '0%': { transform:'translateX(0)' }, '100%': { transform:'translateX(-50%)' } },
        shimmer:     { '0%': { backgroundPosition:'200% 0' }, '100%': { backgroundPosition:'-200% 0' } },
        slideInLeft: { from: { opacity:0, transform:'translateX(-32px)' }, to: { opacity:1, transform:'translateX(0)' } },
        slideInRight:{ from: { opacity:0, transform:'translateX(32px)' }, to: { opacity:1, transform:'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
