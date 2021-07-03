module.exports = {
  purge: [
    './src/*.html', 
    './src/js/*.js'
  ],
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#5a8d3e',
        'theme-color-2': '#3d8c49'
      },
      zIndex: {
        '-10': '-10',
        '-1': '-1',
       }
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    }
  },
  variants: {},
  plugins: [],
}