module.exports = {
  layout: 'content.njk',
  eleventyComputed: {
    permalink: ({ page }) => `/${ page.fileSlug }/`
  }
}
