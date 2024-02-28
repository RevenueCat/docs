/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif", "BlinkMacSystemFont",
          "'Segoe UI'", "Helvetica", "Arial", "sans-serif", "'Apple Color Emoji'",
          "'Segoe UI Emoji'", "'Segoe UI Symbol'"]
      }
    },
  },
  plugins: [],
}

