const dev = process.env.NODE_ENV == 'development';

module.exports = eleventyConfig => {
  // watch files
  eleventyConfig.addWatchTarget('./src/**/*');

  // passthrough file copy
  eleventyConfig.addPassthroughCopy('./static/');
  eleventyConfig.addPassthroughCopy('./dist/');
  eleventyConfig.addPassthroughCopy('./src/pages/admin/config.yml');

  // libraries
  eleventyConfig.setLibrary('md', require('./utils/markdown-it'));

  // filters
  eleventyConfig.addFilter('consoleDump', require('./utils/console-dump'));
  eleventyConfig.addFilter('split', require('./utils/split'));
  eleventyConfig.addFilter('cloudinary', require('./utils/cloudinary'));

  // shortcodes
  eleventyConfig.addShortcode('mi', require('./utils/material-icons'));

  return {
    dir: {
      input: './src/pages/',
      output: dev ? './_site-dev/' : './_site',
      includes: '../includes/',
      data: '../data/'
    }
  }
}
