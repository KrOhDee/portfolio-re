/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '300px',
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
    },
  },
  plugins: [],
};
