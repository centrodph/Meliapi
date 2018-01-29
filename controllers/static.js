var request = require('request');
const api = 'https://api.mercadolibre.com/sites/MLA/search?q=';
/**
 * [homepageCrl description]
 * @method homepageCrl
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
module.exports.homepageCtrl = (req, res) => {
  request.get({ url: api + 'televisor' }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
};
