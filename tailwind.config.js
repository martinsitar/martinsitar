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
            '450px': '450px',
        }
    }
},
  plugins: [
    require('@tailwindcss/typography'),require('@tailwindcss/forms')
  ],

}
