import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'productivity-primary': '#ff6b35', // Vibrant orange
        'productivity-secondary': '#ff914d', // Lighter orange
        'productivity-accent': '#ff8c66', // Medium orange
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#ff6b35',
              '&:hover': {
                color: '#ff8c66',
              },
            },
            h2: {
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
