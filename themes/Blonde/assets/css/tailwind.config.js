module.exports = {
  theme: {
    height: {
     '450': '450px',
    },
    extend: {
      fontFamily: {
        'opensans': ['"Open+Sans"', 'sans-serif'],
        'sourcesanspro': ['"Source+Sans+Pro"', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
