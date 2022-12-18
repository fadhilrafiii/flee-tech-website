/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      primary: '#01033D',
      black: '#000000',
      white: '#ffffff',
      'dark-grey': '#4A4A4A',
      grey: '#999494',
    },
    fontFamily: {
      primary: ['var(--primary-font)', ...fontFamily.serif],
      secondary: ['var(--secondary-font)', 'Arial', ...fontFamily.sans],
    },
    border: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
};
