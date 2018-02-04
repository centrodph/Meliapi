const request = require('request');
const author = {
  name: 'Gerardo',
  lastname: 'Perrucci'
};
const URL = 'https://api.mercadolibre.com/';
const LIMIT = 4;
let MeliintegrationInstance = null;

function Meliintegration() {
  if (MeliintegrationInstance === null) {
    this.random = Math.floor(Math.random() * (9999 - 1111)) + 1111;
    SocketIntegrationInstance = this;
  }
  return MeliintegrationInstance;
}

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

Meliintegration.prototype.parseProductDescription = function(description) {
  description = JSON.parse(description);
  return description.plain_text;
};
/**
 * Do search items
 * @method
 * @param  {String} [searchTerm=''] [description]
 * @param  {Object} [options={limit:LIMIT }] [description]
 * @return {Promise}
 */
Meliintegration.prototype.doGetProductDetail = function(productId) {
  const callUrl = URL + 'items/' + productId;

  return new Promise((resolve, reject) => {
    try {
      request.get(
        {
          url: callUrl
        },
        (error, response, body) => {
          if (!error && response.statusCode == 200) {
            resolve(body);
          }
          reject({ error: error });
        }
      );
    } catch (error) {
      reject({ error: error });
    }
  });
};

Meliintegration.prototype.doGetProductDescription = function(productId) {
  const callUrl = URL + 'items/' + productId + '/description';

  return new Promise((resolve, reject) => {
    try {
      request.get(
        {
          url: callUrl
        },
        (error, response, body) => {
          if (!error && response.statusCode == 200) {
            resolve(body);
          }
          reject({ error: error });
        }
      );
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
 * Do search items
 * @method
 * @param  {String} [searchTerm=''] [description]
 * @param  {Object} [options={limit:LIMIT }] [description]
 * @return {Promise}
 */
Meliintegration.prototype.doSearchItems = function(
  searchTerm = '',
  options = { limit: LIMIT }
) {
  const callUrl =
    URL + 'sites/MLA/search?q=' + searchTerm + '&' + this.parseOptions(options);

  return new Promise((resolve, reject) => {
    try {
      request.get(
        {
          url: callUrl
        },
        (error, response, body) => {
          if (!error && response.statusCode == 200) {
            resolve(body);
          }
          console.log(error);
          reject({ error: error });
        }
      );
    } catch (error) {
      console.log(error);
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
