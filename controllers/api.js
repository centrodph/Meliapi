const Meli = require('../services/meli');

module.exports.apiCtrl = (req, res) => {
  res.send({ status: 'ok' });
};

module.exports.apiSearchCtrl = (req, res) => {
  const term = req.params.term;
  if (!term) res.send({ error: 'term to search is required' });
  Meli.doSearchItems(term)
    .then(result => {
      const parsedResults = Meli.parseResultSearch(result);
      res.send(parsedResults);
    })
    .catch(error => {
      res.send(error);
    });
};
