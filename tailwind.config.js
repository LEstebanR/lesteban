/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-6px 6px 0 1px rgba(0, 0, 0)',
      },
      colors: {
        // background: '#d3f2ff',
        background: '#ffffff',
        primary: '#0284c7',
        secondary: '#a7f3d0', // Emerald 200
        typography: '#171717',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      height: {
        '0.5/10': '5%',
        '1/10': '10%',
        '8/10': '80%',
        '9/10': '90%',
      },
    },
  },
  plugins: [nextui()],
}
