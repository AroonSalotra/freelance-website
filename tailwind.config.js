/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": {width: "80px"},
          "100%": {width: "100%"}
        }
      },
      animation: {
        expand: "expand 900ms ease-in"
      }
    },
  },
  plugins: [],
}
