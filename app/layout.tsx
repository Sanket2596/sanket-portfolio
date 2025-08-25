import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanket Mungikar - Software Engineer Portfolio',
  description: 'Full-stack software engineer specializing in React, Next.js, Node.js, and cloud technologies. Experienced in building scalable web applications and AI-powered solutions.',
  keywords: 'Sanket Mungikar, Software Engineer, Full-Stack Developer, React, Next.js, Node.js, Portfolio',
  authors: [{ name: 'Sanket Mungikar' }],
  creator: 'Sanket Mungikar',
  openGraph: {
    title: 'Sanket Mungikar - Software Engineer Portfolio',
    description: 'Full-stack software engineer specializing in React, Next.js, Node.js, and cloud technologies.',
    url: 'https://sanket-portfolio.vercel.app',
    siteName: 'Sanket Mungikar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanket Mungikar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanket Mungikar - Software Engineer Portfolio',
    description: 'Full-stack software engineer specializing in React, Next.js, Node.js, and cloud technologies.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
