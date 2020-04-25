const site = require('../src/data/site');

module.exports = (src, transformations) => {
  const t = ['f_auto', transformations].filter(i => i).join(',');
  const cloudinary = `https://res.cloudinary.com/brutus-things/image/fetch/${ t }/${ site.url }${ src }`;

  return cloudinary;
}
