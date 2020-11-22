const dev = process.env.NODE_ENV == 'development';

module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy('./src/pages/admin/config.yml');
  eleventyConfig.addPassthroughCopy('./static/');

  eleventyConfig.addShortcode('cloudinary', require('./src/shortcodes/cloudinary'));
  eleventyConfig.addShortcode('newtab', require('./src/shortcodes/newtab'));

  return {
    dir: {
      input:    './src/pages/',
      output:   './_site',
      data:     '../data/',
      includes: '../includes/',
      layouts: '../layouts/',
    }
  }
}
