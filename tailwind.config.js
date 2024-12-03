/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'chart-blue': '#36A2EB',
        'chart-dark': '#2F2F2F',
      }
    },
  },
  plugins: [],
};