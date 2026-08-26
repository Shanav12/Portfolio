/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#faf0e6',
        surface: '#f5ebe0',
        border: '#d4cfc8',
        muted: '#1a2744',
        dim: '#1e3a5f',
        secondary: '#014b80',
        primary: '#0f172a',
        white: '#ffffff',
        navy: '#014b80',
        cream: '#faf0e6',
      },
    },
  },
  plugins: [],
}
