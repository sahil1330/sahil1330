/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgb-18-18-62': 'rgb(18, 18, 62)',
      }
    },
  },
  plugins: [],
}
