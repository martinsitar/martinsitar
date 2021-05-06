module.exports = {
  theme: {
    height: {
     '450': '450px',
    },
    extend: {
      fontFamily: {
        'overpass': ['overpass', 'sans-serif'],
        'oswald': ['oswald', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
