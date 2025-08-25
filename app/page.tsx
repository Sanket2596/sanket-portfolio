'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import LoadingScreen from '@/components/LoadingScreen'
import FloatingParticles from '@/components/FloatingParticles'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen transition-all duration-300 dark:bg-gradient-to-br dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 light:bg-gradient-to-br light:from-gray-50 light:via-gray-100 light:to-gray-200">
      <FloatingParticles />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
