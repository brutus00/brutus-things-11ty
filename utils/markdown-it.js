const markdownIt = require('markdown-it');
const cloudinary = require('./cloudinary');

const cloudinaryImageUrl = (md, options) => {
  const defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet('src')
    token.attrSet('src', cloudinary(src, 'w_1000'));
    token.attrSet('loading', 'lazy');

    return defaultImageRenderer(tokens, idx, options, env, self);
  }
}

module.exports = markdownIt().use(cloudinaryImageUrl);
