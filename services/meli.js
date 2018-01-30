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
