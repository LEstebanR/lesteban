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
        light: 'rgba(255, 255, 255, 0.9)',
        'light-card': 'rgba(255, 255, 255)',
      },
      boxShadow: {
        '3xl': '-6px 6px 0 1px rgba(0, 0, 0)',
      },
      colors: {
        primary: '#4f46e5',
        secondary: '#34d399',
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
      backgroundImage: {
        'grid-slate-200':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M1 1h98v98H1V1z' fill='none' stroke='%23E2E8F0' stroke-width='0.5'/%3E%3C/svg%3E\")",
        'grid-slate-700':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M1 1h98v98H1V1z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: ['plugin:tailwindcss/recommended'],
  darkMode: 'class',
}
