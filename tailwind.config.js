module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'lines-texture': "url('/css/img/pattern.png')"
      },
      colors: {
        'azul-claro': "#37bcf9",
        'azul-oscuro': "#0370b9"
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-below': 'from-below 500ms linear',
        'from-right': 'from-right 300ms linear'
      },
      keyframes: {
        'from-below': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)'},
          '100%': { transform: 'translateY(0%)' }
        },
        'from-right': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover', 'hover']
    },
  },
  plugins: [],
}
