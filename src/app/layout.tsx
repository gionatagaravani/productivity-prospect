import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { defaultMetadata } from './metadata'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
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
