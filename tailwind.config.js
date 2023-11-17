/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '770px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryRed: '#cc0a2b',
        darkerRed: '#7d061a',
        darkGrey: '#222',
      },
    },
  },
  plugins: [],
};
