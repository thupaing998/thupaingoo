import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://thupaingoo.vercel.app'),
  title: 'Thu Paing Oo — Full-Stack Developer & Bot Architect',
  description: 'Building 24/7 reliable architectures, intelligent bots, and complex full-stack systems.',
  keywords: ['Full-Stack Developer','Bot Architect','Telegram Bot','Python','React'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Thu Paing Oo — Full-Stack Developer & Bot Architect',
    description: 'Building 24/7 autonomous systems, intelligent bots & complex full-stack architectures.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thu Paing Oo — Full-Stack Developer & Bot Architect',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  )
}
