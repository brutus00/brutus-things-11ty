module.exports = {
  layout: 'content.njk',
  eleventyComputed: {
    permalink: ({ page }) => `/things/${ page.fileSlug }/`
  }
}
