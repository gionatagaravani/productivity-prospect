import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blog | Productivity Prospect',
  description: 'Explore our latest articles on productivity, time management, and personal growth.',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Productivity Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover strategies and tips to enhance your productivity and achieve your goals.
        </p>
      </section>

      <div className="grid gap-12">
        {posts.map((post) => (
          <article 
            key={post._id} 
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <Link href={post.url} className="block">
              {post.image && (
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Cover image for ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-4">
                <div className="space-y-2">
                  <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-productivity-primary transition-colors">
                    {post.title}
                  </h2>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-4">
                  <span className="inline-flex items-center text-productivity-primary font-medium group-hover:text-productivity-secondary transition-colors">
                    Read article
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
