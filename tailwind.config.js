/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  boxSizing: {
    // Use border-box for all elements
    'border-box': 'border-box',
  },
  // 
  theme: {
    extend: {},
  },
  plugins: [],
}