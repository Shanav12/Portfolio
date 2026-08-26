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
        muted: '#013f55',
        dim: '#015875',
        secondary: '#015875',
        primary: '#0f172a',
        white: '#ffffff',
        navy: '#015875',
        cream: '#faf0e6',
      },
    },
  },
  plugins: [],
}
