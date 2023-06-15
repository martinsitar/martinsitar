module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    "code::before": {content: ''},
                    "code::after": {content: ''}
                }
            }
        },
        height: {
            '450px': '650px',
        },
        borderRadius: {
            '4xl': '2rem',
          },
    }
},
  plugins: [
    require('@tailwindcss/typography'),require('@tailwindcss/forms')
  ],

}
