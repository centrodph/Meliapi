const Meli = require('../services/meli');

/**
 * Dummy controller
 * @method apiCtrl
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.apiCtrl = (req, res) => {
  res.send({ status: 'ok' });
};

/**
 * Search Product
 * @method apiSearchCtrl
 * @param  {[type]}      req [description]
 * @param  {[type]}      res [description]
 * @return {[type]}          [description]
 */
module.exports.apiSearchCtrl = (req, res) => {
  let term = req.params.term;
  if (!term) term = req.query.q;
  if (!term) {
    res.status(422);
    res.send({ error: 'term to search is required' });
  }
  Meli.doSearchItems(term)
    .then(result => {
      const parsedResults = Meli.parseResultSearch(result);
      res.send(parsedResults);
    })
    .catch(error => {
      res.send(error);
    });
};

/**
 * Product detail
 * @method apiProductCtrl
 * @param  {[type]}       req [description]
 * @param  {[type]}       res [description]
 * @return {[type]}           [description]
 */
module.exports.apiProductCtrl = (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    res.status(422);
    res.send({ error: 'Product Id is required' });
  }
  Meli.doGetProductDetail(productId)
    .then(resultDetail => {
      const parseDetail = Meli.parseProductDetail(resultDetail);

      Meli.doGetProductDescription(productId)
        .then(resultDescription => {
          parseDetail.item.description = Meli.parseProductDescription(
            resultDescription
          );
          //res.send(parseDetail);
          Meli.doGetCategory(parseDetail.item.category_id)
            .then(resultCategories => {
              const parseCategories = Meli.parseBreadcrum(resultCategories);
              parseDetail.item.categories = parseCategories;
              res.send(parseDetail);
            })
            .catch(error => {
              res.send(error);
            });
        })
        .catch(error => {
          res.send(error);
        });
    })
    .catch(error => {
      res.send(error);
    });
};

module.exports.apiCategoryCtrl = (req, res) => {
  const categoryId = req.params.id;
  if (!categoryId) {
    res.status(422);
    res.send({ error: 'Category Id is required' });
  }
  Meli.doGetCategory(categoryId)
    .then(resultDetail => {
      const parseDetail = Meli.parseBreadcrum(resultDetail);
      res.send(parseDetail);
    })
    .catch(error => {
      res.send(error);
    });
};
