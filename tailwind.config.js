/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-orange': 'hsl(25, 97%, 53%)',
        'primary-light-orange': 'hsl(25, 97%, 65%)',

        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-light-gray': 'hsl(217, 12%, 63%)',
        'neutral-medium-gray': 'hsl(216, 12%, 54%)',
        'neutral-dark-blue': 'hsl(213, 25%, 18%)',
        'neutral-slight-dark-blue': 'hsl(213, 25%, 12%)',
        'neutral-very-dark-blue': 'hsl(216, 12%, 8%)',
      },

      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

