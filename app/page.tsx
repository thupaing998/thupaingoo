'use client'
import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'
import About    from '@/components/About'
import Skills   from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
