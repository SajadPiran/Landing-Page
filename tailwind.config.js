/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {

      colors: {
        primary: '#B9FF66',
        secondary: '#191A23',
        third : '#F3F3F3'
      },
      screens : {

          'xs' : '425px',
          'sm' : '576px'
      },
      borderRadius : {

        'primary' : '2rem'
      }

    },
  },
  plugins: [],
}

