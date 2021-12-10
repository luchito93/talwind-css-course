module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'symbol': ['WebSymbolsRegular'],
        'trebuchet': ['TrebuchetMS'],
        'bebas': ['BebasNeue']
      },
      boxShadow: {
        'card': '1px 1px 2px #ddd',
        'section-title': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f',
        'input': 'rgb(0 0 0 / 10%) 3px 3px 6px 0px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset'
      },
      screens: {
        'xsm': '370px'
      },
      backgroundPosition: {
        'banner-position': "-200px -200px"
      },
      backgroundImage: {
        'lines-texture': "url('/css/img/pattern.png')",
        'banner': "url('/css/img/bakbaner.png')",
        'titles-texture': "url('/css/img/pxgray.png')"
      },
      colors: {
        'azul-claro': "#37bcf9",
        'azul-oscuro': "#0370b9",
        'azu-card-title': "#00538c",
        'gray-cat-article': "#393d3f"
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-below': 'from-below 500ms linear',
        'from-right': 'from-right 300ms linear',
        'bg-banner': 'back-banner 10s linear ',
        'text-banner': 'show-banner-text 10s linear',
        'card-icon': 'card-icon 300ms linear',
        'card-category': 'card-category 200ms linear',
        'card-description': 'card-description 200ms linear'
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
        },
        'card-icon': {
          '0%': { transform: 'translateY(-200%) scale(1.5)' },
          '100%': { transform: 'translateY(0%) scale(1.5)' }
        },
        'card-category': {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        'card-description': {
          'from': { transform: 'translateX(-200%)'},
          'to': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  plugins: [],
}
