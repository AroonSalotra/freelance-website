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
          "0%": { width: "80px" },
          "100%": { width: "100%" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(4rem)" },
          "100%": { opacity: "100" }
        }
      },
      animation: {
        expand: "expand 900ms ease-in",
        fadeUp: "fadeUp 1000ms ease-out"
      }
    },
  },
  plugins: [],
}
