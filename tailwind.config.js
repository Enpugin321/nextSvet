/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Для файлов в папке app
    './components/**/*.{js,ts,jsx,tsx}', // Для компонентов
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One'],
        jost: ['Jost', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#BC936A',
        grayCustom: '#5F5F5F',
        beigeCustom: '#E3CFBC',
        milkWhiteCustom: '#FFFDF8',
      },
      boxShadow: {
        custom: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
