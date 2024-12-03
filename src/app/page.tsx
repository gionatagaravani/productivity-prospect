import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Master Your <span className="text-orange-500">Productivity</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Discover proven strategies, practical tips, and expert insights to enhance your productivity and achieve your goals.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/blog" 
            className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            Read Articles
          </Link>
          <a 
            href="#newsletter" 
            className="px-8 py-3 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-100 transition-colors"
          >
            Subscribe
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Productivity Prospect?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help you build better habits, make informed decisions, and achieve more in less time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Insights',
              description: 'Learn from productivity experts and successful professionals who share their best practices and experiences.',
              icon: '🎯'
            },
            {
              title: 'Practical Strategies',
              description: 'Get actionable tips and techniques that you can implement immediately to improve your workflow.',
              icon: '⚡'
            },
            {
              title: 'Regular Updates',
              description: 'Stay up-to-date with the latest productivity tools, methods, and research through our weekly articles.',
              icon: '📈'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our recent articles on productivity, time management, and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {allPosts
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, 3)
            .map((article) => (
              <div key={article._id} className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-6">
                {article.image && (
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                <Link 
                  href={`/blog/${article._raw.flattenedPath}`}
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View All Articles
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-12">
        <Newsletter />
      </section>
    </div>
  )
}
