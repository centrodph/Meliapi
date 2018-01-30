const static = require('../controllers/api');

module.exports = app => {
  app.get('/search/:term', static.apiSearchCtrl);

  app.get('/', static.apiCtrl);
};
