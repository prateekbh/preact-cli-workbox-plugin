const replaceDefaultPugin = require('./replace-default-plugin');
const {GenerateSW} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  const swGenerator = new GenerateSW(Object.assign({}, defaultConfig, workboxConfig));
  return replaceDefaultPugin(config, helpers, swGenerator);
}