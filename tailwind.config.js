/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#a7f3d0', // Emerald 200
      },
      fontFamily: {
        sans: ['applesystem', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
