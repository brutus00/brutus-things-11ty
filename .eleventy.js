const dev = process.env.NODE_ENV == 'development';

module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy('./src/pages/admin/config.yml');
  eleventyConfig.addPassthroughCopy('./static/');

  eleventyConfig.addShortcode('cloudinary', require('./src/11ty/cloudinary'));
  eleventyConfig.addShortcode('newTab', require('./src/11ty/new-tab'));
  eleventyConfig.addFilter('sortBy', require('./src/11ty/sort-by'));

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
