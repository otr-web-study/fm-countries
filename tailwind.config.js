/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        txt: 'var(--colors-text)',
        bg: 'var(--colors-bg)',
        ui: 'var(--colors-ui-base)',
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
