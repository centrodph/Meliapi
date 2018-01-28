/**
 * process.env.NODE_ENV is used for heroku
 */
if (process.env.NODE_ENV == 'production') {
  module.exports = {
    API: process.env.API
  };
} else {
  module.exports = require('./dev');
}
