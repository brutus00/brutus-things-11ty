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
      },
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      }
    }
  }
}
