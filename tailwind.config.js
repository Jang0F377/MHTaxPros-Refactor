/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        "complimentary-color-husband": "#735F86",
        "complimentary-color-wife": "#865F73",
        "money-green-complimentary": "#5F8673",
        "platinum": "#ebebeb",
        "money-green":"#748860"
      }
    },
  },
  plugins: [],
}
