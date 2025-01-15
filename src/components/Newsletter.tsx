'use client'

import { useState } from 'react'

interface NewsletterProps {
  variant?: 'default' | 'sidebar'
}

export default function Newsletter({ variant = 'default' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN}`
        },
        body: JSON.stringify({
          email: email,
          groups: ['newsletter'], // Optional: Add group IDs if needed
          status: 'active'
        })
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const isSidebar = variant === 'sidebar'

  return (
    <div className={`bg-white rounded-2xl ${isSidebar ? 'p-6' : 'p-8'} shadow-sm`}>
      <div className={`${isSidebar ? 'text-left' : 'text-center max-w-2xl mx-auto'}`}>
        <h2 className={`${isSidebar ? 'text-2xl' : 'text-3xl'} font-bold text-orange-900 mb-4`}>
          Get Your Free Daily Planner
        </h2>
        <p className={`text-orange-600 ${isSidebar ? 'mb-6 text-sm' : 'mb-8'}`}>
          Subscribe now to receive our weekly productivity insights AND get instant access to our premium Daily Productivity Planner - a $19.99 value, yours free!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`flex flex-col gap-3 ${isSidebar ? '' : 'sm:flex-row sm:max-w-md sm:mx-auto'}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`${
                isSidebar ? 'w-full' : 'w-full sm:w-auto'
              } px-6 py-3 text-white font-medium bg-productivity-primary hover:bg-productivity-secondary transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-productivity-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === 'loading' ? 'Sending...' : 'Get My Free Planner'}
            </button>
          </div>

          {status !== 'idle' && (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status === 'success' 
                ? 'Thanks for subscribing! Check your email for your free planner and welcome message.' 
                : message}
            </p>
          )}

          <p className={`${isSidebar ? 'text-xs' : 'text-sm'} text-orange-500 mt-2`}>
            No spam ever. Your email is safe with us. Plus, get instant access to your free planner!
          </p>
        </form>
      </div>
    </div>
  )
}
