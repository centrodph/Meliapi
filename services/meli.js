const request = require('request');

const author = {
  name: 'Gerardo',
  lastname: 'Perrucci'
};
const URL = 'https://api.mercadolibre.com/';
const LIMIT = 4;

/**
 * Constructor
 * @method      Meliintegration
 * @constructor
 */
let MeliintegrationInstance = null; //instance
function Meliintegration() {
  if (MeliintegrationInstance === null) {
    this.random = Math.floor(Math.random() * (9999 - 1111)) + 1111;
    SocketIntegrationInstance = this;
  }
  return MeliintegrationInstance;
}

/**
 * Do search items
 * @method
 * @param  {String} [searchTerm=''] [description]
 * @param  {Object} [options={limit:LIMIT }] [description]
 * @return {Promise}
 */
Meliintegration.prototype.doGetProductDetail = function(productId) {
  const url = URL + 'items/' + productId;
  const options = { url };

  //Promise
  return new Promise((resolve, reject) => {
    try {
      request.get(options, (error, response, body) => {
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

/**
 * API request to get description
 * @method
 * @param  {[type]} productId [description]
 * @return {[type]}           [description]
 */
Meliintegration.prototype.doGetProductDescription = function(productId) {
  const url = URL + 'items/' + productId + '/description';
  const options = { url };

  //Promise
  return new Promise((resolve, reject) => {
    try {
      request.get(options, (error, response, body) => {
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

/**
 * Do search items
 * @method
 * @param  {String} [searchTerm=''] [description]
 * @param  {Object} [options={limit:LIMIT }] [description]
 * @return {Promise}
 */
Meliintegration.prototype.doSearchItems = function(
  searchTerm = '',
  extra = { limit: LIMIT }
) {
  const url =
    URL + 'sites/MLA/search?q=' + searchTerm + '&' + this.parseOptions(extra);
  const options = { url };

  //Promise
  return new Promise((resolve, reject) => {
    try {
      request.get(options, (error, response, body) => {
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

/**
 * Parse Categories
 * @method
 * @param  {[type]} filters [description]
 * @return {[type]}         [description]
 */
Meliintegration.prototype.parseResultSearchCategories = function(filters) {
  let categoryFilter = filters.filter(item => item.id === 'category');

  if (!categoryFilter || !categoryFilter[0]) return [];

  let categoryList = [];
  categoryFilter[0].values.forEach(categoryValue => {
    let names = categoryValue.path_from_root.map(path => path.name);
    categoryList = [...categoryList, ...names];
  });

  return categoryList;
};

/**
 * Parse description
 * @method
 * @param  {[type]} description [description]
 * @return {[type]}             [description]
 */
Meliintegration.prototype.parseProductDescription = function(description) {
  description = JSON.parse(description);
  return description.plain_text;
};

/**
 * Parse Items
 * @method
 * @param  {[type]} items [description]
 * @return {[type]}       [description]
 */
Meliintegration.prototype.parseResultSearchItems = function(items) {
  return items.map(item => {
    const {
      id,
      title,
      thumbnail,
      condition,
      price,
      currency_id,
      shipping: { free_shipping },
      address: { city_name }
    } = item;
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
      free_shipping,
      city_name
    };
  });
};

/**
 * Parse Search
 * @method
 * @param  {[type]} result [description]
 * @return {[type]}        [description]
 */
Meliintegration.prototype.parseResultSearch = function(result) {
  result = JSON.parse(result);
  const categories = this.parseResultSearchCategories(result.filters);
  const items = this.parseResultSearchItems(result.results);
  return {
    author,
    categories,
    items
  };
};

/**
 * Parse details
 * @method
 * @param  {[type]} detail [description]
 * @return {[type]}        [description]
 */
Meliintegration.prototype.parseProductDetail = function(detail) {
  detail = JSON.parse(detail);

  const {
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping: { free_shipping },
    sold_quantity
  } = detail;

  return {
    author,
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: 0
      },
      picture: thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description: ''
    }
  };
};

/**
 * Objet to URL
 * @method
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
Meliintegration.prototype.parseOptions = function(options) {
  let str = [];
  for (let p in options)
    if (options.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(options[p]));
    }
  return str.join('&');
};

module.exports = new Meliintegration();
