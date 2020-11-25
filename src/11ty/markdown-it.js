const markdownIt = require('markdown-it');
const cloudinary = require('./cloudinary');

const cloudinaryImageUrl = (md, options) => {
  const defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const image = token.attrGet('src')

    const sizes = [200,400,600];
    const srcsets = sizes.map((size, i) => `${ cloudinary('w_' + size) }${ image } ${ ++i }x`);

    token.attrSet('srcset', srcsets.join(','));
    token.attrSet('src', `${ cloudinary('w_' + sizes[1]) }${ image }`);
    token.attrSet('width', sizes[1]);
    token.attrSet('loading', 'lazy');

    return defaultImageRenderer(tokens, idx, options, env, self);
  }
}

module.exports = markdownIt().use(cloudinaryImageUrl);
