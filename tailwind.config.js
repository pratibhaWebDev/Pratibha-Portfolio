/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'bg-main': 'var(--bg-main)',
        'bg-surface': 'var(--bg-surface)',
        'bg-hover': 'var(--bg-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        'sans': 'var(--font-sans)',
        'heading': 'var(--font-heading)',
      },
      fontSize: {
        'heading': 'var(--font-heading)',
      }
    },
  },
  plugins: [],
}