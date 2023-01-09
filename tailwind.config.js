/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      primary: '#01033D',
      black: '#000000',
      'black-80': 'rgba(0, 0, 0, 0.8)',
      'black-50': 'rgba(0, 0, 0, 0.5)',
      'black-30': 'rgba(0, 0, 0, 0.3)',
      white: '#ffffff',
      'white-75': 'rgba(255, 255, 255, 0.75)',
      'white-50': 'rgba(255, 255, 255, 0.5)',
      'dark-grey': '#4A4A4A',
      'darker-grey': '#333333',
      grey: '#999494',
    },
    fontFamily: {
      primary: ['var(--primary-font)', ...fontFamily.serif],
      secondary: ['var(--secondary-font)', 'Arial', ...fontFamily.sans],
    },
    border: {
      DEFAULT: '1px',
      '05': '0.5px',
    },
  },
  plugins: [],
};
