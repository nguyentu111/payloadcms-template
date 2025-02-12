import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    'postcss-import',
    tailwindcssAnimate,
    typography,
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.prose-xs': theme('typography.xs'),
      })
    }),
  ],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
      screens: {
        xl: '76rem',
        lg: '60rem',
        md: '48rem',
        sm: '40rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-bold': 'var(--text)',
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              '--tw-prose-links': 'var(--text)',
              '--tw-prose-bold': 'var(--text)',
              // '--tw-prose-counters': '#6b7280',
              // '--tw-prose-bullets': '#d1d5db',
              // '--tw-prose-hr': '#e5e7eb',
              // '--tw-prose-quotes': '#111827',
              // '--tw-prose-quote-borders': '#e5e7eb',
              // '--tw-prose-captions': '#6b7280',
              // '--tw-prose-kbd': '#111827',
              // '--tw-prose-kbd-shadows: 1'7 '24 39',
              // '--tw-prose-code': '#111827',
              // '--tw-prose-pre-code': '#e5e7eb',
              // '--tw-prose-pre-bg': '#1f2937',
              // '--tw-prose-th-borders': '#d1d5db',
              // '--tw-prose-td-borders': '#e5e7eb',
              // '--tw-prose-invert-body': '#d1d5db',
              // '--tw-prose-invert-headings': '#fff',
              // '--tw-prose-invert-lead': '#9ca3af',
              // '--tw-prose-invert-links': '#fff',
              // '--tw-prose-invert-bold': '#fff',
              // '--tw-prose-invert-counters': '#9ca3af',
              // '--tw-prose-invert-bullets': '#4b5563',
              // '--tw-prose-invert-hr': '#374151',
              // '--tw-prose-invert-quotes': '#f3f4f6',
              // '--tw-prose-invert-quote-borders': '#374151',
              // '--tw-prose-invert-captions': '#9ca3af',
              // '--tw-prose-invert-kbd': '#fff',
              // '--tw-prose-invert-kbd-shadows': 255255 255',
              // '--tw-prose-invert-code': '#fff',
              // '--tw-prose-invert-pre-code': '#d1d5db',
              // '--tw-prose-invert-pre-bg: rgb(0 0 '0 '/ 50%)',
              // '--tw-prose-invert-th-borders': '#4b5563',
              // '--tw-prose-invert-td-borders': '#374151',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        xs: {
          css: {
            fontSize: '0.75rem', // Equivalent to text-xs
            h1: {
              marginBottom: '0.75em',
            },
            h2: {
              marginBottom: '0.5em',
            },
            h3: {
              marginBottom: '0.25em',
            },
            h3: {
              marginBottom: '0.25em',
            },
            h3: {
              marginBottom: '0.25em',
            },
            h3: {
              marginBottom: '0.25em',
            },
            p: {},
          },
        },
        base: {
          css: {
            h1: {
              fontSize: '2.5rem',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: 600,
            },
          },
        },
        md: {
          css: {},
        },
      }),
    },
  },
}

export default config
