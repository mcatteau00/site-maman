/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#ffbb98',
        'vert': '#344648',
        'pale': '#FBE0C3',
        'bg': '#7D8E95'
      }
    },
  },
  plugins: [],
};