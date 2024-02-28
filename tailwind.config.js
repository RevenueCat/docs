/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: true,
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#576CDB",
        primaryDark: "#4656AF",
        red: "#F2545B",
        green: "#11D483",
        yellow: "#F3E972",
        gray: "#F6F6F6",
        grayLight: "#767676",
        grayDark: "#afafaf",
        base: colors.neutral,
      },
      fontFamily: {
        head: [
          "'Object Sans'",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "sans-serif",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Helvetica",
          "Arial",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
        ],
        body: [
          "'Helvetica Neue'",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "sans-serif",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Helvetica",
          "Arial",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
        ],
      },
    },
  },
  plugins: [],
};
