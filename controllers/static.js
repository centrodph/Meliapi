const Meli = require('../services/meli');
/**
 * [homepageCrl description]
 * @method homepageCrl
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
module.exports.homepageCtrl = (req, res) => {
  Meli.doSearchItems('iphone');
};
