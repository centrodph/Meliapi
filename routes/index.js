const static = require('../controllers/static');

module.exports = app => {
  /**
   * @api {get} / Home Page
   * @apiGroup STATIC PAGES
   *
   * @apiSuccess {Json} result.
   */
  app.get('/', static.homepageCtrl);
};
