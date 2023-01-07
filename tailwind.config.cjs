/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mRed: "rgb(199,29,68)",
        mPurple: "rgb(123,63,153)"
      },
      screens: {
        'xs': '470px',
        'sm': '640px',
        'md': '870px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}