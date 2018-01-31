const request = require('request');

const URL = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const LIMIT = 4;
let MeliintegrationInstance = null;

function Meliintegration() {
	if (MeliintegrationInstance === null) {
		this.random = Math.floor(Math.random() * (9999 - 1111)) + 1111;
		SocketIntegrationInstance = this;
	}
	return MeliintegrationInstance;
}

Meliintegration.prototype.parseResultSearchCategories = function(filters) {
	let categoryFilter = filters.filter(item => item.id === 'category');

	if (!categoryFilter || !categoryFilter[0]) return [];
	const categoryPath = categoryFilter.values.map(categoryValue => {
		return categoryValue.path_from_root.map(path => path.name);
	});

	return categoryPath;
};

Meliintegration.prototype.parseResultSearchItems = function(items) {
	return items.map(item => {
		const { id, title, thumbnail, condition, price, currency_id, shipping: { free_shipping } } = item;
		return {
			id,
			title,
			price: {
				currency: currency_id,
				amount: price,
				decimals: 0
			},
			picture: thumbnail,
			condition,
			free_shipping
		};
	});
};

Meliintegration.prototype.parseResultSearch = function(result) {
	result = JSON.parse(result);
	const categories = this.parseResultSearchCategories(result.filters);
	const items = this.parseResultSearchCategories(result.results);
	return {
		author: {
			name: 'Gerardo',
			lastname: 'Perrucci'
		},
		categories,
		items
	};
};

/**
 * Do search items
 * @method
 * @param  {String} [searchTerm=''] [description]
 * @param  {Object} [options={limit:LIMIT }] [description]
 * @return {Promise}
 */
Meliintegration.prototype.doSearchItems = function(searchTerm = '', options = { limit: LIMIT }) {
	const callUrl = URL + searchTerm + '&' + this.parseOptions(options);

	return new Promise((resolve, reject) => {
		try {
			request.get({ url: callUrl }, (error, response, body) => {
				if (!error && response.statusCode == 200) {
					resolve(body);
				}
				reject({ error: error });
			});
		} catch (error) {
			reject({ error: error });
		}
	});
};

Meliintegration.prototype.parseOptions = function(options) {
	let str = [];
	for (let p in options)
		if (options.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(options[p]));
		}
	return str.join('&');
};

module.exports = new Meliintegration();
