/** @type {import('tailwindcss').Config} */
module.exports = {
  // semua perubahan di index itu dapat di compile kedalam css
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screen :{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

