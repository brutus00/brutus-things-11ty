const dev = process.env.NODE_ENV == 'development';

module.exports = eleventyConfig => {
  // watch files
  eleventyConfig.addWatchTarget('./src/**/*');

  // passthrough file copy
  eleventyConfig.addPassthroughCopy('./static/');
  eleventyConfig.addPassthroughCopy('./dist/');
  eleventyConfig.addPassthroughCopy('./src/pages/admin/config.yml');

  // filters
  eleventyConfig.addFilter('consoleDump', require('./lib/console-dump'));
  eleventyConfig.addFilter('split', require('./lib/split'));
  eleventyConfig.addShortcode('mi', require('./lib/material-icons'));

  return {
    dir: {
      input: './src/pages/',
      output: dev ? './_site-dev/' : './_site',
      includes: '../includes/',
      data: '../data/'
    }
  }
}
