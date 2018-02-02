const static = require('../controllers/api');

module.exports = app => {
  app.get('/search/:term', static.apiSearchCtrl);
  app.get('/api/items/:id', static.apiProductCtrl);

  app.get('/', static.apiCtrl);
};
