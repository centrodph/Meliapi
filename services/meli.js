const request = require('request');

let MeliintegrationInstance = null;
class Meliintegration {
  static URL: 'https://api.mercadolibre.com/sites/MLA/search?q=';
  static limit = 4;
  random;

  constructor() {
    if (MeliintegrationInstance === null) {
      this.random = Math.floor(Math.random() * (9999 - 1111)) + 1111;
      SocketIntegrationInstance = this;
    }
    return MeliintegrationInstance;
  }

  doSearchItems(searchTerm = '', options = { limit: Meliintegration.limit }) {
    try {
      request.get({ url: api + searchTerm }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          return body;
        }
        return { error: error };
      });
    } catch (error) {
      return { error: error };
    }
  }

  parseOptions(options) {
    let str = [];
    for (let p in options)
      if (options.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(options[p]));
      }
    return str.join('&');
  }
}

module.exports.Meli = new Meliintegration();
