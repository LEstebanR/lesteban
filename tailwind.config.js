/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: 'rgba(255, 255, 255)',
        dark: 'rgba(0, 0, 0, 0.9)',
        'light-card': 'rgba(255, 255, 255)',
        'dark-card': '#2C3639',
      },
      boxShadow: {
        '3xl': '-6px 6px 0 1px rgba(0, 0, 0)',
      },
      colors: {
        primary: '#ff6d60',
        secondary: '#FFB000', // Emerald 200
        typography: '#171717',
        'light-text': '#171717',
        'dark-text': '#FDF4F5',
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
  plugins: [],
}
