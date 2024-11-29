import Link from 'next/link'
import Image from 'next/image'

interface Post {
  title: string
  slug: string
  excerpt: string
  coverImage?: string
}

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Related Posts
      </h3>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex gap-4">
              {post.coverImage && (
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    sizes="80px"
                  />
                </div>
              )}
              <div>
                <h4 className="text-gray-900 font-medium group-hover:text-productivity-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
