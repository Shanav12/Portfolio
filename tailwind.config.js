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
        bg: '#0a0f1e',
        surface: '#0d1526',
        border: '#1a2740',
        muted: '#b5a082',
        dim: '#b5a082',
        secondary: '#a89f96',
        primary: '#e8eef4',
        white: '#ffffff',
        navy: '#b5a082',
        cream: '#0a0f1e',
      },
    },
  },
  plugins: [],
}
