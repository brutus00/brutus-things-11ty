module.exports = {
  layout: 'thing.njk',
  tags: ['thing'],
  eleventyComputed: {
    permalink: ({ page }) => `/things/${ page.fileSlug }/`,
  }
}
