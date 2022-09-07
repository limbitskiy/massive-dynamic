/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'md-accent': '#60D284',
        'md-grey': '#1E2023',
        'md-black': '#121315',
        'md-light-grey': '#9E9DA3'
      },
    },
  },
  plugins: [],
}
