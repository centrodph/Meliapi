const static = require('../controllers/api');

module.exports = app => {
  /**
   * static
   */
  app.get('/', static.apiCtrl);
  app.get('/items', static.apiCtrl);
  app.get('/items/:id', static.apiCtrl);

  /**
   * API
   */
  app.get('/search/:term', static.apiSearchCtrl);
  app.get('/api/items', static.apiSearchCtrl);
  app.get('/api/items/:id', static.apiProductCtrl);
  app.get('/api/category/:id', static.apiCategoryCtrl);
};
