const dev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env'),
    !dev && require('postcss-clean'),
  ]
}
