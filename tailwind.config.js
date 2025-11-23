/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#EF233C',         // Bright accent red
        'accent-dark': '#D90429',  // Deeper accent red
        'gray-dark': '#2B2D42',    // Dark grey for text
        'gray-light': '#8D99AE',   // Light grey
        background: '#EDF2F4',     // Light background
      },
      fontFamily: {
        sans: ['var(--font-lora)', 'sans-serif'],
        hero: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
