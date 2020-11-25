const cloud_name = 'brutus-things';

module.exports = function(transformations = '', format = 'f_auto') {
  const t = transformations && ',' + transformations;

  return `//res.cloudinary.com/${ cloud_name }/${ format }${ t }/v1`;
}
