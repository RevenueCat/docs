/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    colors: {
      primary: "#576CDB",
      red: "#F2545B",
      green: "#11D483",
      yellow: "#F3E972",
      gray: "#F6F6F6",
    },
    extend: {
      fontFamily: {
        head: ["'Object Sans'", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif", "BlinkMacSystemFont",
          "'Segoe UI'", "Helvetica", "Arial", "sans-serif", "'Apple Color Emoji'",
          "'Segoe UI Emoji'", "'Segoe UI Symbol'"],
        body: ["'Helvetica Neue'", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif", "BlinkMacSystemFont",
          "'Segoe UI'", "Helvetica", "Arial", "sans-serif", "'Apple Color Emoji'",
          "'Segoe UI Emoji'", "'Segoe UI Symbol'"]
      }
    },
  },
  plugins: [],
}

