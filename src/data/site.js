const dev = process.env.NODE_ENV == 'development';

module.exports = {
  title: "Brutus' Pretty Good Handmade Things",
  description: "Brutus' pens suck",
  url: dev
    ? 'http://localhost:8080'
    : 'https://brutus-pens-11ty.netlify.com'
}
