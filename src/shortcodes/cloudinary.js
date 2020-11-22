const cloud_name = 'brutus';
const dir_name = '/brutus';

module.exports = function(transformations = '', format = 'f_auto') {
  const t = transformations && ',' + transformations;

  return `//res.cloudinary.com/${ cloud_name }/${ format }${ t }/v1/${ dir_name }`;
}
