const cloud_name = 'brutus-things';
const dir_name = 'netlify';

module.exports = function(transformations = '', format = 'f_auto') {
  const t = transformations && ',' + transformations;

  return `//res.cloudinary.com/${ cloud_name }/${ format }${ t }/v1`;
}



// const site = require('../src/data/site');

// module.exports = (src, transformations) => {
//   const t = ['f_auto', transformations].filter(i => i).join(',');
//   const cloudinary = `https://res.cloudinary.com/brutus-things/image/fetch/${ t }/${ site.url }${ src }`;

//   return cloudinary;
// }
