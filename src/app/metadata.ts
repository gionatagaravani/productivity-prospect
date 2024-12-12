import { Metadata } from 'next'

const siteUrl = process.env.SITE_URL || 'https://productivityprospect.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: '31HJMvtPjYHguU7FBmRhXjGvm6atlTIuC-ImaIZeSzI',
  },
  title: {
    default: 'Productivity Prospect',
    template: '%s | Productivity Prospect',
  },
  description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
  keywords: [
    'productivity',
    'time management',
    'deep work',
    'personal development',
    'goal setting',
    'efficiency',
    'work-life balance',
  ],
  authors: [{ name: 'Gionata Garavani' }],
  creator: 'Gionata Garavani',
  publisher: 'Productivity Prospect',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Productivity Prospect',
    title: 'Productivity Prospect',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Productivity Prospect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productivity Prospect',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    images: ['/og-image.png'],
  },
}
