/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paletteText: {
          primary: '#444B55',
          inactive: '#808C92',
          placeholder: '#8F95B2',
          error: '#EE3124',
          active: '#0092AC'
        }
      },
    },
  },
  plugins: [],
}