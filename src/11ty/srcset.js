const cloudinary = require('./cloudinary');

module.exports = (image, sizes, transformations = '') => {
  const t = transformations && ',' + transformations;

  const srcsets = sizes.map((size, i) => `${ cloudinary(`w_${ size }` + t) }/netlify${ image } ${ ++i }x`);
  const srcset = `srcset="${ srcsets.join(',') }"`;

  const src = `src="${ cloudinary(`w_${ sizes[0] }` + t) }/netlify${ image }"`;

  return [srcset, src].join(' ');
};
