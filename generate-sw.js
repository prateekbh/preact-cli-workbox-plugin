const replaceDefaultPugin = require('./replace-default-plugin');
const {GenerateSW} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');
const getESMDefaultConfig = require('./esm-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  const esmConfig = Object.assign({}, getESMDefaultConfig(config), workboxConfig);
  const swGenerator = new GenerateSW(Object.assign({}, defaultConfig, workboxConfig));
  const esmSwGenerator = new GenerateSW(esmConfig);
  return replaceDefaultPugin(config, helpers, swGenerator, esmSwGenerator);
}