const getDefaultConfig = require('./default-config');

module.exports = function(config) {
  const newConfig = getDefaultConfig(config);
  newConfig.swDest = 'sw-esm.js';
  newConfig.include = [/\.html$/, /\.css$/, /\.png$/];
  return newConfig;
}
