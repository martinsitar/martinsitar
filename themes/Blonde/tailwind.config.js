let colors = require('tailwindcss/colors')

module.exports = {
  content: ['./layouts/**/*.html', './assets/**/*.js', './static/**/*.js'],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
      },
    },
  },
}
