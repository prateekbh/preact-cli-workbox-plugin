const replaceDefaultPlugin = require('./replace-default-plugin');
const {GenerateSW} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');
const getESMDefaultConfig = require('./esm-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  const esmConfig = Object.assign({}, getESMDefaultConfig(config), workboxConfig);
  esmConfig.swDest = defaultConfig.swDest.substring(0, defaultConfig.swDest.lastIndexOf('.js')) + '-esm.js';
  esmConfig.include.push(/(\.[\w]{5}\.esm\.js)/);
  const swGenerator = new GenerateSW(Object.assign({}, defaultConfig, workboxConfig));
  const esmSwGenerator = new GenerateSW(esmConfig);
  return replaceDefaultPlugin(config, helpers, swGenerator, esmSwGenerator);
}