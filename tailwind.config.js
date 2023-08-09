/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        txt: 'var(--colors-text)',
        bg: 'var(--colors-bg)',
        ui: 'var(--colors-ui-base)',
        input: 'var(--colors-input)',
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'Roboto', 'sans-serif'],
    },
    boxShadow: {
      'sh-1': '0px 0px 15px 0px rgba(0, 0, 0, 0.15)',
      'sh-2': '0px 0px 15px 0px rgba(0, 0, 0, 0.10)',
    },
    borderRadius: {
      radii: '3px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'grid-3': '1086px',
      'grid-4': '1420px',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transition-shadow-4': {
          'transition-property': 'box-shadow',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'transition-duration': '400ms',
        },
      });
    }),
  ],
};
