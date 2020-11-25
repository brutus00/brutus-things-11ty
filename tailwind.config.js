module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['_site/**/*.html'],
  },

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'serif': ['DM Serif Text', 'serif'],
        'oregon': ['BellottiBold', 'serif'],
      },
      colors:{
        yellow: {
          DEFAULT: '#ffe70e',
        },
        green: {
          DEFAULT: '#05552f',
          dark: '#004122',
        }
      },
      spacing: {
        'env-b': 'env(safe-area-inset-bottom)',
      },
      maxWidth: {
        max: 'max-content',
      },
      minWidth: {
        sidebar: 300,
      },
    },

    inset: {
      0: 0,
      'auto': 'auto',
      4: '1rem',
      24: '6rem'
    },
  }
}
