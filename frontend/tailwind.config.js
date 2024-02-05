/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#23c49d",
      },
      brightness: {
        25: '.25',
        130:'1.30',
        140: '1.45',
      }

    },
  },
  plugins: [],
}