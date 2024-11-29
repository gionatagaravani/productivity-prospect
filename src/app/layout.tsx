import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Productivity Prospect',
  description: 'Your ultimate guide to maximizing productivity and achieving your goals',
  keywords: ['productivity', 'personal development', 'time management', 'goal setting'],
  metadataBase: new URL('https://productivity-prospect.com'),
  openGraph: {
    title: 'Productivity Prospect',
    description: 'Unlock your potential with expert productivity strategies',
    type: 'website',
    url: '/',
    siteName: 'Productivity Prospect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productivity Prospect',
    description: 'Unlock your potential with expert productivity strategies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-6xl min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
