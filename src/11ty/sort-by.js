module.exports = (list, key) => list.sort((a,b) => {
  if (a.data[key] < b.data[key]) return -1;
  if (a.data[key] > b.data[key]) return 1;
  return 0;
});
