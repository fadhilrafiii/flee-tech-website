/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "1025px",
      xl: "1441px",
    },
    colors: {
      primary: "#01033D",
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      primary: ["var(--primary-font)", ...fontFamily.serif],
      secondary: ["var(--secondary-font)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
