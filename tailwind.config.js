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
            '650px': '650px',
        },
        borderRadius: {
            '4xl': '2rem',
          },
        colors: {
          'dark-bg': '#0B0B0F',
          'bodycopy-grey': '#868F97',
        },
    }
},
  plugins: [
    require('@tailwindcss/typography'),require('@tailwindcss/forms')
  ],

}
