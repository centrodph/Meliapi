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

module.exports.apiProductCtrl = (req, res) => {
	const productId = req.params.id;
	if (!productId) res.send({ error: 'Product Id is required' });
	Meli.doGetProductDetail(productId)
		.then(resultDetail => {
			const parseDetail = Meli.parseProductDetail(resultDetail);

			Meli.doGetProductDescription(productId)
				.then(resultDescription => {
					parseDetail.item.description = Meli.parseProductDescription(resultDescription);
					res.send(parseDetail);
				})
				.catch(error => {
					res.send(error);
				});
		})
		.catch(error => {
			res.send(error);
		});
};
