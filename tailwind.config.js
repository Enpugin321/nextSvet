/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
      },
      colors: {
        accent: '#be8c55',
        addition: '#45291e',
        beige: '#e3cfbc',
        milk: '#fffdf8',
        graphite: '#3a3931',
      },
      boxShadow: {
        custom: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      },
      screens: {
        xxl: '1900px',
      },
    },
  },
  plugins: [],
};
