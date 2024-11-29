export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Productivity Prospect',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    url: 'https://productivityprospect.com',
    publisher: {
      '@type': 'Organization',
      name: 'Productivity Prospect',
      logo: {
        '@type': 'ImageObject',
        url: 'https://productivityprospect.com/logo.svg',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
