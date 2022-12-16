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
    },
    fontFamily: {
      primary: ['var(--primary-font)', ...fontFamily.serif],
      secondary: ['var(--secondary-font)', ...fontFamily.sans],
    },
  },
  plugins: [],
};
