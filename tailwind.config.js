/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        home : "#FFFFFF",
        text : "#151414",
        compBg : "#519BFF",
      }
    },
  },
  plugins: [],
}