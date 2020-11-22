const dev = process.env.NODE_ENV == 'development';

module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy('./src/pages/admin/config.yml');

  eleventyConfig.addShortcode('cloudinary', require('./src/shortcodes/cloudinary'));

  return {
    dir: {
      input:    './src/pages/',
      output:   './_site',
      data:     '../data/',
      includes: '../includes/',
    }
  }
}
