module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xsm': '370px'
      },
      backgroundPosition: {
        'banner-position': "-200px -200px"
      },
      backgroundImage: {
        'lines-texture': "url('/css/img/pattern.png')",
        'banner': "url('/css/img/bakbaner.png')"
      },
      colors: {
        'azul-claro': "#37bcf9",
        'azul-oscuro': "#0370b9"
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-below': 'from-below 500ms linear',
        'from-right': 'from-right 300ms linear',
        'bg-banner': 'back-banner 10s linear ',
        'text-banner': 'show-banner-text 10s linear'
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
        },
        'back-banner': {
          '0%': { 'background-position': '0px 0px' },
          '100%': {'background-position': '-200px -200px' }
        },
        'show-banner-text': {
          '0%': { transform: "translateX(-600%) scale(5,5)", opacity: 1},
          '50%': { transform: "translateX(600%) scale(5,5)", opacity: 1},
          '75%': { transform: "translateX(-600%) scale(5,5)", opacity: 0, 'text-shadow': 'none', color: 'transparent'},
          '100%': { transform: "translateX(0) scale(1,1)", opacity: 1, 'text-shadow': '2px 2px 1px black', color: 'white'},
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
