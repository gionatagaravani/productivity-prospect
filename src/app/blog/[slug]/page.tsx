import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import AuthorCard from '@/components/AuthorCard'
import SocialShare from '@/components/SocialShare'
import RelatedPosts from '@/components/RelatedPosts'
import Newsletter from '@/components/Newsletter'

interface PostProps {
  params: {
    slug: string
  }
}

function getRelatedPosts(currentSlug: string) {
  return allPosts
    .filter((post) => post._raw.flattenedPath !== currentSlug)
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      slug: post._raw.flattenedPath,
      excerpt: post.description || '',
      coverImage: post.coverImage,
    }))
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Productivity Prospect`,
    description: post.description,
  }
}

const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-gray-600">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="text-productivity-primary hover:text-productivity-secondary">
      {children}
    </a>
  ),
} as any

export default function Post({ params }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)
  const relatedPosts = getRelatedPosts(params.slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-8">
          {/* Post Header */}
          <header className="space-y-6">
            {post.coverImage && (
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {post.title}
              </h1>
              <div className="flex items-center justify-between text-gray-600">
                <time dateTime={post.date} className="text-sm">
                  {format(parseISO(post.date), 'MMMM dd, yyyy')}
                </time>
                <SocialShare
                  title={post.title}
                  url={`https://productivityprospect.com/blog/${post._raw.flattenedPath}`}
                />
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-productivity-primary hover:prose-a:text-productivity-secondary prose-img:rounded-xl">
            <MDXContent components={mdxComponents} />
          </div>

          {/* Mobile Social Share */}
          <div className="lg:hidden">
            <SocialShare
              title={post.title}
              url={`https://productivityprospect.com/blog/${post._raw.flattenedPath}`}
            />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <AuthorCard />
          <RelatedPosts posts={relatedPosts} />
          <div className="sticky top-8">
            <Newsletter variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  )
}
