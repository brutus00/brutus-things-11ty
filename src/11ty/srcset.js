const cloudinary = require('./cloudinary');

function generateSrcsets(sizes) {
  return sizes.map((size, i) => `${ cloudinary(`w_${ size }` + t) }/netlify${ image } ${ ++i }x`);
}

function srcset(image, sizes, transformations = '') {
  const t = transformations && ',' + transformations;

  const srcsets = generateSrcsets(sizes);
  const srcset = `srcset="${ srcsets.join(',') }"`;

  const src = `src="${ cloudinary(`w_${ sizes[0] }` + t) }/netlify${ image }"`;

  return [srcset, src].join(' ');
};

module.exports = {
  generateSrcsets,
  default: srcset,
}
