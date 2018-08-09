const replaceDefaultPugin = require('./replace-default-plugin');
const {InjectManifest} = require("workbox-webpack-plugin");
const getDefaultConfig = require('./default-config');
const getESMDefaultConfig = require('./esm-config');

module.exports = function(config, helpers, workboxConfig) {
  const defaultConfig = getDefaultConfig(config);
  delete defaultConfig['navigateFallback'];
  delete defaultConfig['navigateFallbackWhitelist'];
  const esmConfig = getESMDefaultConfig(config);
  delete esmConfig['navigateFallback'];
  delete esmConfig['navigateFallbackWhitelist'];
  esmConfig.swDest = defaultConfig.swDest.substring(0, defaultConfig.swDest.lastIndexOf('.js')) + '-esm.js';
  esmConfig.include.push(/(\.[\w]{5}\.esm\.js)/);
  const swGenerator = new InjectManifest(Object.assign({}, defaultConfig, workboxConfig));
  return replaceDefaultPugin(config, helpers, swGenerator);
}