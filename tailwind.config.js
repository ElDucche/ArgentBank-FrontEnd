/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {sans: ['Avenir', 'sans-serif']},
    extend: {
      colors: {
        primary : 'rgb(0, 188, 119)',
        secondary : 'rgb(44, 62, 80)',
        ternary: "#12002b",
      },
    },
  },
  plugins: [],
}