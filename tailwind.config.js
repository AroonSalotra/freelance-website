/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { maxHeight: "4rem" },
          "100%": { maxHeight: "400px" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(4rem)" },
          "100%": { opacity: "100" }
        },
        stretch: {
          "0%": { padding: "7rem" }
        },
        fadeSide: {
          "0%": { transform: "translateX(20rem)" }
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        expandWidth: {
          "0%": {width: "0vw"}
        }


      },
      animation: {
        expand: "expand 800ms ease-out",
        fadeUp: "fadeUp 1000ms ease-out",
        stretch: "stretch 600ms ease-out",
        fadeSide: "fadeSide 800ms ease-out",
        fade: "fade 1000ms ease-out",
        expandWidth: "expandWidth 1200ms ease-out"
      }
    },
    listStyleType: {
      square: "square"
    }
  },
  plugins: [],
}
