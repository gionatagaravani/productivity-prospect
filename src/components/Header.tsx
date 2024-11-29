import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.svg"
                alt="Productivity Prospect Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-orange-500">
              Productivity Prospect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-gray-600 hover:text-orange-500">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
