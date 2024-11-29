import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Me - Gionata Garavani | Productivity Prospect',
  description: 'Learn more about Gionata Garavani, a 23-year-old Italian Software Developer passionate about productivity and technology.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-productivity-primary">Me</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Software Developer, Productivity Enthusiast, and Lifelong Learner
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Gionata Garavani
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Ciao! I'm a 23-year-old Italian Software Developer with a passion for creating efficient, elegant solutions to complex problems. My journey in technology is driven by a deep curiosity and a desire to make a positive impact through code.
            </p>
            <p>
              Based in Italy, I combine my technical expertise with a strong focus on productivity and personal development. When I'm not coding, you can find me exploring beautiful coastal locations like the one in my profile picture, finding inspiration in nature's beauty.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="/profile.jpg"
            alt="Gionata Garavani at sunset by the ocean"
            fill
            className="object-cover hover:opacity-95 transition-opacity"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-white text-sm">
              Captured during sunset at the Italian coast
            </p>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Expertise
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Full-Stack Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Modern JavaScript & TypeScript</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>React & Next.js</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Software Architecture</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Areas of Interest
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Productivity Systems</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Personal Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Technology Innovation</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-productivity-primary">▹</span>
              <span>Software Best Practices</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Connect Section */}
      <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Let's Connect
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always excited to connect with fellow developers and productivity enthusiasts. Whether you want to discuss technology, share ideas, or explore collaboration opportunities, feel free to reach out!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-productivity-primary text-white rounded-lg hover:bg-productivity-secondary transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-productivity-primary text-productivity-primary rounded-lg hover:bg-productivity-primary/10 transition-colors"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
