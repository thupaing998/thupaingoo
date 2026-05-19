import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://thupaingoo.vercel.app'),
  title: 'Thu Paing Oo — Full-Stack Developer & Bot Architect',
  description: 'Building 24/7 reliable architectures, intelligent bots, and complex full-stack systems. Specializing in autonomous systems, anti-cheat engines, and media processing pipelines.',
  keywords: ['Full-Stack Developer','Bot Architect','Telegram Bot','Python','React','Next.js','FastAPI','Docker','Anti-Cheat','Media Processing'],
  icons: { icon:'/favicon.ico', shortcut:'/favicon.png', apple:'/favicon.png' },
  openGraph: {
    title: 'Thu Paing Oo — Full-Stack Developer & Bot Architect',
    description: 'Building 24/7 autonomous systems, intelligent bots & full-stack architectures. From anti-cheat engines to media processing pipelines.',
    type: 'website',
    images: [{ url:'/og-image.png', width:1200, height:630 }],
  },
  twitter: { card:'summary_large_image', images:['/og-image.png'] },
  robots: { index: true, follow: true },
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 5 },
  themeColor: '#2563EB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-ink overflow-x-hidden">{children}</body>
    </html>
  )
}
